import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 3; // 3 submissions per minute

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const record = rateLimitMap.get(ip);

    if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
        return false;
    }

    if (record.count >= RATE_LIMIT_MAX) {
        return true;
    }

    record.count++;
    return false;
}

function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();
        const {
            plan,
            name,
            email,
            productUrl,
            targetAudience,
            offer,
            brandTone,
            competitors,
            mustHaveClaims,
            forbiddenClaims,
            assets,
        } = body;

        // Validation
        if (!name || name.trim().length < 2) {
            return NextResponse.json(
                { error: "Name is required" },
                { status: 400 }
            );
        }

        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        if (!productUrl) {
            return NextResponse.json(
                { error: "Product URL is required" },
                { status: 400 }
            );
        }

        if (!targetAudience) {
            return NextResponse.json(
                { error: "Target audience is required" },
                { status: 400 }
            );
        }

        if (!offer) {
            return NextResponse.json(
                { error: "Offer details are required" },
                { status: 400 }
            );
        }

        // Onboarding data to store
        const onboardingData = {
            plan,
            name,
            email,
            productUrl,
            targetAudience,
            offer,
            brandTone: brandTone || "",
            competitors: competitors || "",
            mustHaveClaims: mustHaveClaims || "",
            forbiddenClaims: forbiddenClaims || "",
            assets: assets || "",
            timestamp: new Date().toISOString(),
            status: "pending",
        };

        // TODO: Store to Airtable/Google Sheets/Database
        console.log("New onboarding submission:", onboardingData);

        // TODO: Send notification to Slack/Email
        // TODO: Send confirmation email to customer
        // TODO: Create Stripe checkout session and redirect

        return NextResponse.json(
            {
                success: true,
                message: "Onboarding submission received",
                // TODO: Return Stripe checkout URL
                // checkoutUrl: stripeSession.url
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Onboarding API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
