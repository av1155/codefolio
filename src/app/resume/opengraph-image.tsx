import { ImageResponse } from "next/og";

export const alt = "Andrea Venti Fuentes Resume";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    alignItems: "center",
                    background:
                        "linear-gradient(120deg, rgba(67,56,202,1) 0%, rgba(147,51,234,1) 55%, rgba(236,72,153,1) 100%)",
                    color: "white",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    justifyContent: "center",
                    width: "100%",
                    padding: "48px",
                }}
            >
                <div
                    style={{
                        border: "2px solid rgba(255,255,255,0.55)",
                        borderRadius: "28px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "22px",
                        padding: "56px 60px",
                        width: "100%",
                        backgroundColor: "rgba(15, 23, 42, 0.32)",
                    }}
                >
                    <div
                        style={{
                            fontSize: 60,
                            fontWeight: 800,
                            letterSpacing: "-0.03em",
                            lineHeight: 1.1,
                        }}
                    >
                        Andrea Venti Fuentes
                    </div>
                    <div
                        style={{
                            fontSize: 36,
                            fontWeight: 600,
                            opacity: 0.95,
                        }}
                    >
                        Resume
                    </div>
                    <div
                        style={{
                            fontSize: 26,
                            opacity: 0.9,
                        }}
                    >
                        Software and Platform Engineer
                    </div>
                </div>
            </div>
        ),
        size,
    );
}
