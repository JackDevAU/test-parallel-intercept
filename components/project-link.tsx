"use client";

import Link from "next/link";

type ProjectItemProps = {
  project: any;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link
      className="card"
      key={project.slug}
      href={`/project/${project.slug}`}
      passHref
    >
      {project.entry.title}
    </Link>
  );
}
