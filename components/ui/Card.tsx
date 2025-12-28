import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    gradientBorder?: boolean;
}

export const Card = ({ className, gradientBorder = false, children, ...props }: CardProps) => {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 bg-white shadow-lg",
                gradientBorder && "gradient-border-card",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
