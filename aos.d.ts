// aos.d.ts
declare module "aos" {
    export interface AosOptions {
        // Global settings
        disable?:
            | boolean
            | "mobile"
            | "phone"
            | "tablet"
            | "desktop"
            | ((element: HTMLElement) => boolean);
        startEvent?: string;
        initClassName?: string;
        animatedClassName?: string;
        useClassNames?: boolean;
        disableMutationObserver?: boolean;
        debounceDelay?: number;
        throttleDelay?: number;

        // Per-element settings with default global settings
        offset?: number;
        delay?: number;
        duration?: number;
        easing?: string;
        once?: boolean;
        mirror?: boolean;
        anchorPlacement?:
            | "top-bottom"
            | "center-bottom"
            | "bottom-bottom"
            | "top-center"
            | "center-center"
            | "bottom-center"
            | "top-top"
            | "center-top"
            | "bottom-top";
    }

    interface AosStatic {
        init(options?: AosOptions): void;
        refresh(): void;
        refreshHard(): void;
    }

    const AOS: AosStatic;
    export default AOS;
}
