"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

 import { projects } from "../data/projects";

const filters = ["All", "Objects", "Research", "Writing"];

export default function ProjectsPage() {

  console.log("HELLO TEST");
  
  console.log(projects);

    useEffect(() => {

    console.log("PROJECT PAGE MOUNT");

  }, []);
  
  const [activeFilter, setActiveFilter] = useState("All");
  const [openedProject, setOpenedProject] = useState<string | null>(null);
  console.log("openedProject:", openedProject);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.type === activeFilter);

  return (
    <main className="min-h-screen bg-white px-6 py-8 pb-48 text-[#111] md:px-10">
      <header className="mb-28 flex items-start justify-between">
        <Link href="/" className="text-[14px] tracking-[0.08em] text-black/70">
          HANNA PARK
        </Link>

        <Link
          href="/"
          className="text-[14px] text-black/45 underline underline-offset-4 transition-colors hover:text-blue-600"
        >
          Back
        </Link>
      </header>

      <section className="mx-auto max-w-[1200px]">
        <div className="mb-28 text-center">
          <p className="mb-6 text-[13px] tracking-[0.14em] text-black/45">
            ALL PROJECTS
          </p>

          <h1 className="mx-auto max-w-6xl text-[34px] leading-[1.08] tracking-[-0.05em] md:text-[30px]">
            Research, objects, systems, and future studies.
          </h1>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setOpenedProject(null);
              }}
              className={`
                rounded-full
                border
                border-black/10
                px-6
                py-3
                text-[14px]
                transition-all
                ${
                  activeFilter === filter
                    ? "bg-black text-white"
                    : "bg-[#f8f8f6] text-black/60 hover:bg-black hover:text-white"
                }
              `}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="border-t border-black/15">
          {filteredProjects.map((project) => {
            const isOpen = openedProject === project.slug;

            return (
              <article key={project.title} className="border-b border-black/15">
                <button
                  type="button"
                  onClick={() => {
                  console.log("clicked", project.slug);
                  setOpenedProject(
                    isOpen ? null : project.slug
                  );
                }}
                    className={`
                    w-full
                    text-left
                    transition-colors
                    ${ isOpen
                        ? "text-[#2f5eff]"
                        : "text-black hover:text-[#2f5eff]"
                    }
                  `} >

                  <div
                    className="
                      grid
                      grid-cols-12
                      gap-6
                      py-4
                      text-[32px]
                      leading-tight
                      tracking-[-0.03em]
                      md:text-[16px]
                    "
                  >
                    <div className="col-span-2 ">
                      {project.number}
                    </div>

                    <div className="col-span-4 truncate">
                      {project.title}
                    </div>

                    <div className="col-span-3 truncate">
                      {project.description}
                    </div>

                    <div className="col-span-2">
                      {project.type}
                    </div>

                    <div className="col-span-1 text-right ">
                      {project.year}
                    </div>
                  </div>
                </button>

                {isOpen && (
  <div className="pb-12">
    <div className="grid gap-10 md:grid-cols-12">
      
      {/* LEFT */}
      <div className="md:col-span-3 flex flex-col">

  <p className="max-w-xl text-[18px] leading-[1.55] text-black/65 md:text-[16px]">
    {project.summary}

  </p>

  <Link

    href={`/projects/${project.slug}`}
    className="

      mt-auto
      pt-8
      inline-block
      text-[16px]
      text-black/40
      underline
      underline-offset-4
      transition-colors
      hover:text-[#2f5eff]

    "
        >
          Explore
        </Link>
      </div>

      
     {/* RIGHT */}

<div className="md:col-span-9 flex justify-end">
  {project.thumbnailLayout === "single" ? (
    <div className="w-full max-w-[900px] ml-auto">
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={project.thumbnailImages?.[0] || project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  ) : project.thumbnailLayout === "landscapePortrait" ? (
    <div className="grid grid-cols-[1fr_1fr] gap-2 w-fit ml-auto">
      <div className="h-[420px] overflow-hidden">
        <img
          src={project.thumbnailImages?.[0] || project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover"
          style={{
            objectPosition: project.thumbnailPosition || "center",
          }}
        />
      </div>

      <div className="h-[420px] aspect-[3/4] overflow-hidden">
        <img
          src={project.thumbnailImages?.[1] || project.images[1]}
          alt={project.title}
          className="h-full w-full object-contain"
        />
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-2 gap-2 w-full max-w-[900px] ml-auto">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnailImages?.[0] || project.images[0]}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.thumbnailImages?.[1] || project.images[1]}
          alt={project.title}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )}
</div>

    </div>
  </div>
)}

 </article>

            );

          })}

        </div>

      </section>

    <footer className="h-[25vh]" />

    </main>
  );

}