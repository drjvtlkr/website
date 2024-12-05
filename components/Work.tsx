import { motion } from "framer-motion";
import React from "react";
import {
  MyCurrentProjects,
  MyFreelanceProjects,
  MyPastProjects,
} from "@/app/data/lifeApi";
import { PageLayout } from "./PageLayout";
import { ProjectCard } from "./ProjectCard";
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from "@/lib/animations";

const Work = () => {
  return (
    <>
      <PageLayout
        title="All my work."
        intro="A list of projects I've worked on or will work on.">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-base">Projects I worked on and will work on.</p>
        <ul
          role="list"
          className="mt-12 grid gap-x-12 gap-y-16 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {MyPastProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
          {MyFreelanceProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
          {MyCurrentProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export default Work;
