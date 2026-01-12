import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/assets/logo/main-logo-256px.png"
            alt="NaviQure AI Logo"
            width={40}
            height={40}
            className={className}
            priority
        />
    );
}
