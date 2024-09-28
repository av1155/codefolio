"use client";

import { useEffect } from "react";
import AOS, { AosOptions } from "aos";
import "aos/dist/aos.css";

export default function AOSInitializer() {
    useEffect(() => {
        const options: AosOptions = {
            duration: 800,
        };
        AOS.init(options);
    }, []);

    return null;
}
