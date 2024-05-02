import ProjectItem from "@/components/project-link";
import { reader } from "@/lib/reader/reader";
import React from "react";

export async function generateStaticParams() {
  const projects = await reader.collections.projects.list();
  return projects.map((project) => ({ slug: project }));
}

async function ProjectsPage() {
  const projects = await reader.collections.projects.all();

  const projectList: any[] = projects?.map((project) => ({
    slug: project.slug,
    entry: {
      title: project.entry.title,
      abstract: project.entry.abstract,
    },
  }));

  return (
    <main>
      <ul>
        {projectList?.map((project,i) => (
          <ProjectItem project={project} key={i} />
        ))}
      </ul>
    </main>
  );
}

export default ProjectsPage;
