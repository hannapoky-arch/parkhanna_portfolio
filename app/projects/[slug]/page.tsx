import { notFound } from "next/navigation";
import { projects } from "../../data/projects";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug);

    console.log("slug:", slug);
    console.log("projects:", projects);


  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-8 text-[#111] md:px-10">
      <header className="mb-28 flex items-start justify-between">
        <a href="/" className="text-[14px] tracking-[0.08em] text-black/70">
          ALMOST THERE LAB
        </a>

        <a
          href="/projects"
          className="text-[14px] text-black/45 underline underline-offset-4 transition-colors hover:text-[#2f5eff]"
        >
          Back
        </a>
      </header>

      <section className="mx-auto max-w-[1000px]">

    
        {/* PROJECT META */}
        <div className="mb-28 text-center">
          <p className="mb-6 text-[13px] tracking-[0.14em] text-black/45">
            {project.number} / {project.type} / {project.year}
          </p>

          <h1 className="mx-auto max-w-6xl text-[34px] leading-[1.08] tracking-[-0.05em] md:text-[30px]">
            {project.title}
          </h1>

          <p className="mt-6 text-[16px] text-black/45">
            {project.description}
          </p>
        </div>

        {/* LEAD STATEMENT */}
        <div className="mx-auto mb-24 max-w-[1000px]">
          <p className="text-[28px] leading-[1.18] tracking-[-0.035em] md:text-[30px]">
            {project.summary}
          </p>
        </div>

        {/* HERO IMAGE */}

<div className="mb-40">

  <img

    src={project.images[0]}

    alt={project.title}

    className="w-full"

  />

</div>

        {/* CONTENT */}

<div className="mx-auto max-w-[1000px]">

  {project.content
    .split(/\[image-(\d+)\]/g)
    .map((part, index) => {

      const imageNumber = Number(part);

      if (!isNaN(imageNumber)) {
        return (
          <div key={index} className="my-16">
            <img
              src={project.images[imageNumber - 1]}
              alt={project.title}
              className="w-full"
            />
          </div>
        );
      }

      return part
        .split("# ")
        .filter(Boolean)
        .map((section) => {

          const lines = section.trim().split("\n");

          const title = lines[0];

          const body = lines.slice(1).join("\n");

          return (
            <section
              key={title}
              className="mb-40"
            >
              <p className="mb-6 text-[18px] text-black/50">
                {title}
              </p>

              <div className="space-y-8 text-[28px] leading-[1.3] tracking-[-0.035em] md:text-[30px]">
                {body
                  .split("\n\n")
                  .filter(Boolean)
                  .map((paragraph) => (
                    <p key={paragraph}>
                      {paragraph}
                    </p>
                  ))}
              </div>
            </section>
          );
        });
    })}

</div>

{/* APPENDIX */}

<div className="mx-auto mt-24 max-w-[1000px] border-t border-black/10 pt-8">

  <p className="mb-6 text-[12px] tracking-[0.12em] leading-[1.3]text-black/35">
    APPENDIX
  </p>

  <div className="mb-8">

    <p className="mb-2 text-[14px]">
      Contributors
    </p>

    {project.contributors?.map((item) => (
      <p
        key={item}
        className="text-[15px] text-black/60"
      >
        {item}
      </p>
    ))}

  </div>

  <div>

    <p className="mb-2 text-[14px]">
      Literature
    </p>

    {project.literature?.map((item) => (
      <p
        key={item}
        className="text-[15px] text-black/60"
      >
        {item}
      </p>
    ))}

  </div>

</div>

        {/* FOOTER */}
        <div className="border-t border-black/15 pt-8">
          <a
            href="/projects"
            className="text-[16px] text-black/45 underline underline-offset-4 transition-colors hover:text-[#2f5eff]"
          >
            Back to Projects
          </a>
        </div>
      </section>
    </main>
  );
}