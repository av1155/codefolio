import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const config = [
    ...nextCoreWebVitals,
    {
        ignores: [".next/**", "node_modules/**", "next-env.d.ts", "out/**", "build/**"],
    },
];

export default config;
