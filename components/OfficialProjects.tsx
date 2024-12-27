import { motion } from "framer-motion";
import React from "react";
import { MyPastProjects } from "@/app/data/lifeApi";
import { PageLayout } from "./PageLayout";
import { ProjectCard } from "./ProjectCard";
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from "@/lib/animations";
import { sendGAEvent } from "@next/third-parties/google";

const OfficialProjects = () => {
  return (
    <>
      <PageLayout
        title="Things I've made trying to put my dent in the universe."
        intro="A list of projects I've worked on in my official work.">
        <h2 className="text-2xl font-bold tracking-tight">Projects</h2>
        <p className="mt-2 text-base">I worked on.</p>
        <ul
          role="list"
          className="mt-12 grid gap-x-12 gap-y-16 grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {MyPastProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
              onClick={() => sendGAEvent('event', 'buttonClicked', { value: 'VF6FMKC0Y5' })}>
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </PageLayout>
    </>
  );
};

export default OfficialProjects;
