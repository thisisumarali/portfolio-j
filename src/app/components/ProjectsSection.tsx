"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTags from './ProjectTags'
const Projects_Data = [
  {
    id: 1,
    title: "MY PORTFOLIO",
    description: "Here is my portfolio website which I created using nextJs Click the above icon to get the github code",
    image: "/image/Projects/Portfolio.png",
    tags: ["All", "Web"],
    giturl: "/",
    previewurl: "/"

  },
  {
    id: 2,
    title: "Khan Academy",
    description: "Here is my project of Khan Academy Website which i create using HTML CSS & JS",
    image: "/image/Projects/KhanAcadmey.png",
    tags: ["All", "Web"],
    giturl: "https://github.com/thisisumarali/KhanAcademy",
    previewurl:"https://khan-academy.surge.sh/"
  },
  {
    id: 3,
    title: "Metric-Calculation",
    description: "Here is my project of Metric Calculaton Website which i create using HTML CSS & JS",
    image: "/image/Projects/Metric_calculation.png",
    tags: ["All", "Web"],
    giturl: "https://github.com/thisisumarali/metric-calculation",
    previewurl: "https://metric-calculation.surge.sh/"
  }
]

const ProjectsSection: React.FC = () => {
  const [tags, setTag] = useState("All");

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  }

  const filteredProjects = Projects_Data.filter((project) =>
    project.tags.includes(tags)
  )

  return (
    <>
    <div id='projects' className='pt-20'>
      <h2 className='text-center text-4xl font-bold text-white'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTags
          onClick={() => handleTagChange("All")}
          name="All"
          isSelected={tags === "All"}
        />
        <ProjectTags
          onClick={() => handleTagChange("Web")}
          name="Web"
          isSelected={tags === "Web"}
        />
        <ProjectTags
          onClick={() => handleTagChange("Mobile")}
          name="Mobile"
          isSelected={tags === "Mobile"}
        />
      </div>

      <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-0 md:mt-3'>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            giturl={project.giturl}
            previewurl={project.previewurl}
          />
        ))}
      </div>
    </div>
    </>
  );
}

export default ProjectsSection;
