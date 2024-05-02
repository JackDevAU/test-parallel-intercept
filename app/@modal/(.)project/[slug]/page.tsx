
import ProjectDialog from "@/components/project-dialog";
import { reader } from "@/lib/reader/reader";
import { notFound } from "next/navigation";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
  const project = await reader.collections.projects.read(params.slug);

  if(!project) 
    return notFound();

  const readContext = await project.content();
  // const { default: Content } = await processMdx(readContext);

  const projectWithoutContent = { ...project, content: undefined };

  return (
    <ProjectDialog
      Content={
        <article className="w-full p-4 space-y-2 prose md:prose-lg lg:prose-xl">
          {readContext}
        </article>
      }
      project={projectWithoutContent}
    />
  );
}
