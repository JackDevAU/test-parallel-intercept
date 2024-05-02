import ProjectItem from "@/components/project-link";
import { reader } from "@/lib/reader/reader";
import React from "react";

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
        {projectList?.map((project) => (
          <ProjectItem project={project} />
        ))}
      </ul>
    </main>
  );
}

export default ProjectsPage;
