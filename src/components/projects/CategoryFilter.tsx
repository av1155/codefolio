import React from "react";

interface CategoryFilterProps {
    activeCategory: "All" | "Projects" | "Programs";
    setActiveCategory: (category: "All" | "Projects" | "Programs") => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ activeCategory, setActiveCategory }) => {
    return (
        <div className="flex justify-center space-x-4" data-aos="fade-up">
            {["All", "Projects", "Programs"].map((category) => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition duration-200 transform ${
                        activeCategory === category
                            ? "bg-white bg-opacity-80 text-indigo-700"
                            : "bg-white bg-opacity-20 text-white hover:text-indigo-700"
                    } hover:bg-opacity-100 hover:scale-105`}
                    onClick={() => setActiveCategory(category as "All" | "Projects" | "Programs")}
                >
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryFilter;
