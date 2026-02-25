declare module "plaiceholder" {
    interface IGetPlaiceholder {
        base64: string;
        img: {
            src: string;
            width: number;
            height: number;
            type?: string;
            blurDataURL: string;
        };
    }

    export function getPlaiceholder(
        src: string,
        options?: { size?: number },
    ): Promise<IGetPlaiceholder>;
}
