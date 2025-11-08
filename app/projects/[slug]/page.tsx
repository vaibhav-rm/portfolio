import ProjectPageClient from "./project-page-client"
import { projectsData } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

// ✅ Generate SEO metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params // 🔥 unwrap promise here
  const project = projectsData.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: project.title,
    description: project.shortDescription,
  }
}
// ✅ Page component itself
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params // 🔥 unwrap promise here

  const project = projectsData.find((p) => p.slug === slug)
  if (!project) notFound()

  const relatedProjects = projectsData
    .filter(
      (p) => p.id !== project.id && p.tags.some((t) => project.tags.includes(t))
    )
    .slice(0, 2)

  // ✅ Pass only data to the client component
  return <ProjectPageClient project={project} relatedProjects={relatedProjects} />
}