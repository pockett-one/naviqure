import Image from "next/image";

export function Logo({ className }: { className?: string }) {
    return (
        <Image
            src="/assets/logo/main-logo-256px.png"
            alt=""
            width={40}
            height={40}
            className={className}
            priority
            loading="eager"
            fetchPriority="high"
            aria-hidden="true"
        />
    );
}
