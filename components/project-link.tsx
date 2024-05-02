"use client";

import Link from "next/link";

type ProjectItemProps = {
  project: any;
};

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <li>
      <Link
        key={project.slug}
        href={`/project/${project.slug}`}
        passHref
      >
        {project.entry.title}
      </Link>
    </li>
  );
}
