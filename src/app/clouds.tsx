import Image from "next/image";

export default function Clouds() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <Image
                        alt="Python"
                        src="/technologies/python.png"
                        width={2048}
                        height={1234}
                        className="col-span-2 max-h-16 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="React"
                        src="/technologies/react.png"
                        width={1481}
                        height={512}
                        className="col-span-2 max-h-10 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="NextJS"
                        src="/technologies/nextjs.png"
                        width={2048}
                        height={1234}
                        className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                    />
                    <Image
                        alt="Docker"
                        src="/technologies/docker.png"
                        width={1280}
                        height={361}
                        className="col-span-2 max-h-10 w-full object-contain sm:col-start-2 lg:col-span-1"
                    />
                    <Image
                        alt="PostgreSQL"
                        src="/technologies/postgresql.png"
                        width={373}
                        height={135}
                        className="col-span-2 col-start-2 max-h-14 w-full object-contain sm:col-start-auto lg:col-span-1"
                    />
                </div>
            </div>
        </div>
    );
}
