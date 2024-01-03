"use client";
import React, { useState } from 'react'
import ProjectCard from './ProjectCard'
import { client } from '../lib/sanity';

interface Data {
  title: string;
  overview: string;
  _id: string;
  imageUrl: string;
  githublink: string;
  livelink: string;
}
async function getData() {
  const query = `*[_type == "project"]{
    title,
           overview,
           _id,
           "imageUrl": image.asset->url,
           githublink,
      livelink
 }`
  const data = await client.fetch(query)
  return data
}


const ProjectsSection = async () => {
  const data: Data[] = await getData()

  return (
    <>
      <div id='projects' className='pt-20'>
        <h2 className='text-center text-4xl font-bold text-white'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>

        </div>

        <div className='grid md:grid-cols-3 gap-8 md:gap-12 mt-0 md:mt-3'>
          {data.map((project) => (
            <ProjectCard
              key={project._id}
              title={project.title}
              description={project.overview}
              imgUrl={project.imageUrl}
              giturl={project.githublink}
              previewurl={project.livelink}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProjectsSection;
