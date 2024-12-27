import { motion } from "framer-motion";
import React from "react";
import { MyCurrentProjects } from "@/app/data/lifeApi";
import { PageLayout } from "./PageLayout";
import { ProjectCard } from "./ProjectCard";
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from "@/lib/animations";

const PersonalProjects = () => {
  return (
    <>
      <PageLayout
        title="Things I've made to learn and grow."
        intro="A list of projects I've worked on , I'm working on and I will work on.">
        <h2 className="text-2xl font-bold tracking-tight">Personal</h2>
        <p className="mt-2 text-base">Projects I love working on.</p>
        <ul
          role="list"
          className="mt-12 grid gap-x-12 gap-y-16 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
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

export default PersonalProjects;
