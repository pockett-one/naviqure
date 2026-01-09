import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbProps {
    items: {
        label: string;
        href: string;
    }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6 sm:mb-8">
            <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                <li>
                    <Link
                        href="/"
                        className="flex items-center hover:text-primary transition-colors hover:bg-secondary/10 p-1.5 rounded-md"
                        aria-label="Home"
                    >
                        <Home className="h-4 w-4" />
                    </Link>
                </li>
                {items.map((item, index) => (
                    <li key={item.href} className="flex items-center">
                        <ChevronRight className="h-4 w-4 text-muted-foreground/40 mx-1" />
                        <Link
                            href={item.href}
                            className={`hover:text-primary transition-colors font-medium ${index === items.length - 1
                                    ? "text-primary bg-primary/5 px-2 py-0.5 rounded-md pointer-events-none"
                                    : ""
                                }`}
                            aria-current={index === items.length - 1 ? "page" : undefined}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ol>
        </nav>
    );
}
