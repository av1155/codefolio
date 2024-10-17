"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Project, projects } from "@/data/projectsData";

interface SearchParamsHandlerProps {
    setSelectedProject: (project: Project | null) => void;
}

const SearchParamsHandler: React.FC<SearchParamsHandlerProps> = ({ setSelectedProject }) => {
    const [projectSlug, setProjectSlug] = useState<string | null>(null);
    const searchParams = useSearchParams();

    useEffect(() => {
        const slug = searchParams.get("project");
        setProjectSlug(slug);
    }, [searchParams]);

    useEffect(() => {
        if (projectSlug) {
            const project = projects.find((p) => p.slug === projectSlug);
            if (project) {
                setSelectedProject(project);
            } else {
                console.warn(`Project with slug '${projectSlug}' not found.`);
                setSelectedProject(null); // Clear selected project if not found
            }
        } else {
            setSelectedProject(null); // Clear selected project if no slug
        }
    }, [projectSlug, setSelectedProject]);

    return null;
};

export default SearchParamsHandler;
