import { reader } from "@/lib/reader/reader";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const projects = await reader.collections.projects.list();
  return projects.map((project) => ({ slug: project }));
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = await reader.collections.projects.read(params.slug);

  if (!project) {
    return notFound();
  }

  const readContext = await project.content();

  return (
    <main className="space-y-4">
      <div className="flex flex-col p-4">
        <div className="flex w-full">
          <div className="w-5 md:w-10 h-20 bg-black"></div>
          {project.title}
        </div>
      </div>
      <article className="max-w-4xl mx-auto md:auto-rows-[20rem] p-4 space-y-2 prose lg:prose-xl">
        {readContext}
      </article>
    </main>
  );
}
