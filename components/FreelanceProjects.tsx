import { motion } from "framer-motion";
import React from "react";
import { MyFreelanceProjects } from "@/app/data/lifeApi";
import { PageLayout } from "./PageLayout";
import { ProjectCard } from "./ProjectCard";
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from "@/lib/animations";

const FreelanceProjects = () => {
  return (
    <>
      <PageLayout
        title="Things I built for my Client."
        intro="Project I've worked based on client requirments.">
        <h2 className="text-2xl font-bold tracking-tight">Freelance</h2>
        <ul
          role="list"
          className="mt-12 grid gap-x-12 gap-y-16 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {MyFreelanceProjects.map((project) => (
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

export default FreelanceProjects;
