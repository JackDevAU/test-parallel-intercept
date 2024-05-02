"use client";

import Link from "next/link";

type ProjectItemProps = {
  project: any;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Link href={`/project/${project.slug}`}>
      <li key={project.slug}>{project.entry.title}</li>
    </Link>
  );
}
