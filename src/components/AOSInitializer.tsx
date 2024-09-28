"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
    useEffect(() => {
        AOS.init({
            duration: 600,
            // easing: "ease-in-out",
            // once: false, // Animation only happens once
            // mirror: false, // Animation does not repeat on scroll up
        });
    }, []);

    return null;
}
