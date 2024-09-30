// TypeScript Declaration for AOS (Animate On Scroll)
// Official Documentation: https://github.com/michalsnik/aos

declare module "aos" {
    /**
     * Interface representing the options that can be passed to AOS initialization.
     * These settings globally configure AOS animations and can be overridden on a per-element basis.
     * For detailed documentation, visit: https://github.com/michalsnik/aos#settings
     */
    export interface AosOptions {
        // Global settings that apply to all elements
        disable?:
            | boolean
            | "mobile"
            | "phone"
            | "tablet"
            | "desktop"
            | ((element: HTMLElement) => boolean); // Disables AOS on specific devices or based on a custom function.
        startEvent?: string; // The event that triggers the initialization of AOS (default: 'DOMContentLoaded').
        initClassName?: string; // Class applied to elements after AOS is initialized (default: 'aos-init').
        animatedClassName?: string; // Class applied during the animation (default: 'aos-animate').
        useClassNames?: boolean; // Whether to add data-aos values as classes on elements.
        disableMutationObserver?: boolean; // Disable automatic detection of DOM changes.
        debounceDelay?: number; // Delay in milliseconds used for debounce when resizing the window (default: 50).
        throttleDelay?: number; // Delay in milliseconds used for throttling during scroll events (default: 99).

        // Per-element settings (these can be overridden with data-aos attributes on individual elements)
        offset?: number; // Offset (in px) from the original trigger point (default: 120).
        delay?: number; // Delay in milliseconds before the animation starts (default: 0 to 3000, in steps of 50ms).
        duration?: number; // Duration of the animation in milliseconds (default: 400).
        easing?: string; // Easing function for the animation (default: 'ease').
        once?: boolean; // Whether the animation should happen only once (default: false).
        mirror?: boolean; // Whether elements should animate when scrolling past them (default: false).
        anchorPlacement?:
            | "top-bottom"
            | "center-bottom"
            | "bottom-bottom"
            | "top-center"
            | "center-center"
            | "bottom-center"
            | "top-top"
            | "center-top"
            | "bottom-top"; // Position of the element relative to the window that triggers the animation (default: 'top-bottom').
    }

    /**
     * AOS Static Interface
     * Provides methods for initializing and refreshing AOS animations.
     */
    interface AosStatic {
        /**
         * Initialize AOS with optional settings. Call this to activate animations.
         * @param options - Optional configuration object to customize AOS behavior.
         */
        init(options?: AosOptions): void;

        /**
         * Recalculate all element positions and offsets. Called on window resize.
         */
        refresh(): void;

        /**
         * Reinitialize AOS, rebuild the store of elements, and trigger a refresh.
         * This is useful when you add new elements to the DOM that should be animated.
         */
        refreshHard(): void;
    }

    // The AOS object provides access to AOS methods and properties
    const AOS: AosStatic;
    export default AOS;
}
