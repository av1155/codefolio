import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React, { Fragment } from "react";

interface LanguageFilterProps {
    activeLanguage: string;
    setActiveLanguage: (language: string) => void;
}

const LanguageFilter: React.FC<LanguageFilterProps> = ({ activeLanguage, setActiveLanguage }) => {
    const languages = [
        "Python",
        "Java",
        "JavaScript",
        "TypeScript",
        "C",
        "C++",
        "Bash",
        "Lua",
        "Swift",
    ];

    return (
        <div className="z-[60] relative flex justify-center md:ml-4 space-x-4" data-aos="fade-up">
            <Menu as="div" className="relative inline-block text-left">
                <MenuButton className="inline-flex justify-center items-center text-sm font-medium px-4 py-2 bg-white bg-opacity-20 text-white rounded-md transition duration-200 transform hover:scale-105">
                    {activeLanguage === "All" ? "Language" : activeLanguage}
                    <ChevronDownIcon className="w-5 h-5 ml-2 -mr-1" aria-hidden="true" />
                </MenuButton>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <MenuItems className="absolute left-0 mt-2 w-40 origin-top-left bg-white bg-opacity-20 text-white backdrop-blur-xl rounded-md shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <MenuItem
                            as="button"
                            onClick={() => setActiveLanguage("All")}
                            className="block w-full px-4 py-2 text-left text-sm hover:bg-indigo-500"
                            aria-selected={activeLanguage === "All"}
                        >
                            All
                        </MenuItem>
                        {languages.map((language) => (
                            <MenuItem
                                as="button"
                                key={language}
                                onClick={() => setActiveLanguage(language)}
                                className="block w-full px-4 py-2 text-left text-sm hover:bg-indigo-500"
                                aria-selected={activeLanguage === language}
                            >
                                {language}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Transition>
            </Menu>
        </div>
    );
};

export default LanguageFilter;
