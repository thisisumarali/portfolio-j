import React from 'react';

interface ProjectTagsProps {
    name: string;
    onClick: () => void;
    isSelected: boolean;
}

const ProjectTags: React.FC<ProjectTagsProps> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "border-slate-600 text-white"
        : "border-slate-600 hover:border-yellow-500 text-[#ADB7BE]";

    return (
        <button className={`${buttonStyles} rounded-full border-2 px-6 py-3`} onClick={onClick}>
            {name}
        </button>
    );
};

export default ProjectTags;
