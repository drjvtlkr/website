import {motion} from 'framer-motion'
import React from "react";
import { MyFreelanceProjects } from "@/app/data/lifeApi";
import { PageLayout } from "./PageLayout";
import { ProjectCard } from './ProjectCard';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '@/lib/animations';

const FreelanceProjects = () => {
  return (
    <>
      <PageLayout
        title="Things I've made as a part of my Unofficial freelance work."
        intro="A list of projects I've worked on based on client requirments."
      >
        <h2 className="text-2xl font-bold tracking-tight">Freelance</h2>
        <p className="mt-2 text-base">Projects I built as a Freelancer.</p>
        <ul
          role="list"
          className="mt-12 grid gap-x-12 gap-y-16 grid-cols-2"
        >
          {MyFreelanceProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
        </PageLayout>
    </>
  );
};

export default FreelanceProjects;
