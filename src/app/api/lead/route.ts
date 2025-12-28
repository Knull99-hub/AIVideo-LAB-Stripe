import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiting (for production, use Upstash or Redis)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const RATE_LIMIT_MAX = 5; // 5 requests per minute

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

function isValidUrl(url: string): boolean {
    try {
        new URL(url);
        return true;
    } catch {
        return false;
    }
}

export async function POST(request: NextRequest) {
    try {
        // Get IP for rate limiting
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();
        const { email, productUrl, source, website } = body;

        // Honeypot check (spam protection)
        if (website) {
            // Bot detected
            return NextResponse.json({ success: true }, { status: 200 });
        }

        // Validation
        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { error: "Valid email is required" },
                { status: 400 }
            );
        }

        if (!productUrl || !isValidUrl(productUrl)) {
            return NextResponse.json(
                { error: "Valid product URL is required" },
                { status: 400 }
            );
        }

        // Parse UTM parameters from source
        const urlParams = new URLSearchParams(source || "");
        const utmData = {
            utm_source: urlParams.get("utm_source") || "",
            utm_campaign: urlParams.get("utm_campaign") || "",
            utm_content: urlParams.get("utm_content") || "",
            utm_medium: urlParams.get("utm_medium") || "",
        };

        // Lead data to store
        const leadData = {
            email,
            productUrl,
            ...utmData,
            referrer: request.headers.get("referer") || "",
            timestamp: new Date().toISOString(),
            page_path: request.headers.get("x-page-path") || "/",
        };

        // TODO: Store to Airtable/Google Sheets
        // For now, log to console
        console.log("New lead:", leadData);

        // TODO: Send notification to Slack/Email
        // TODO: Add to Brevo/Mailchimp

        return NextResponse.json(
            { success: true, message: "Lead captured successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Lead API error:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
