declare module "plaiceholder" {
    export function getPlaiceholder(src: string): Promise<{
        img: {
            src: string;
            width: number;
            height: number;
            type: string;
        };
        base64: string;
    }>;
}
