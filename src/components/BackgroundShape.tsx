import React from "react";

interface BackgroundShapeProps {
    clipPath?: string;
    gradientFrom?: string;
    gradientTo?: string;
    sizeClasses?: string;
    positionClasses?: string;
    rotationClasses?: string;
    opacity?: string;
}

const BackgroundShape: React.FC<BackgroundShapeProps> = ({
    clipPath = "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
    gradientFrom = "from-pink-500",
    gradientTo = "to-indigo-500",
    sizeClasses = "w-[36.125rem] sm:w-[72.1875rem]",
    positionClasses = "left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]",
    rotationClasses = "rotate-[30deg]",
    opacity = "opacity-70",
}) => {
    return (
        <div className="absolute inset-0">
            <div
                className={`absolute inset-x-0 top-0 transform-gpu overflow-hidden blur-3xl ${opacity}`}
            >
                <div
                    style={{ clipPath }}
                    className={`relative ${positionClasses} aspect-[1155/678] ${sizeClasses} -translate-x-1/2 ${rotationClasses} bg-gradient-to-tr ${gradientFrom} ${gradientTo}`}
                />
            </div>
        </div>
    );
};

export default BackgroundShape;
