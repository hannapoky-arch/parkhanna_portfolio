import { notFound } from "next/navigation";
import { projects } from "../../data/projects";
import Link from "next/link";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug);

    console.log(project?.heroMedia);
    console.log("slug:", slug);
    console.log("projects:", projects);


  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white px-6 py-8 text-[#111] md:px-10">
      <header className="mb-28 flex items-start justify-between">
        <a href="/" className="text-[14px] tracking-[0.08em] text-black/70">
          HANNA PARK
        </a>

        <a
          href="/projects"
          className="text-[14px] text-black/45 underline underline-offset-4 transition-colors hover:text-[#2f5eff]"
        >
          Back
        </a>
      </header>

      <section className="mx-auto max-w-[1400px]">

    
        {/* PROJECT META */}
        <div className="mb-16 text-center">
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
        <div className="mx-auto mb-12 max-w-[1000px]">
          <p className="text-center leading-[1.11] tracking-[-0.04em] md:text-[30px]">
            {project.summary}
          </p>
        </div>


        {/* HERO IMAGE */}

{project.heroMedia?.src && (
  <div
    className="mb-5 mx-auto"
    style={{
      maxWidth: project.imageMaxWidth || "1200px",
    }}
  >
    <img
      src={project.heroMedia.src}
      alt={project.title}
      className="w-full"
    />
  </div>
)}


<div className="mx-auto max-w-[1400px]">
  {project.content
    .split(/(\[image-\d+\]|\[pair-\d+-\d+\]|\[video-\d+\])/g)
    .map((part, index) => {

      const imageMatch = part.match(/\[image-(\d+)\]/);

      const pairMatch = part.match(
        /\[pair-(\d+)-(\d+)\]/
      );

      const videoMatch = part.match(/\[video-(\d+)\]/);

      // VIDEO

      if (videoMatch) {

        const videoNumber = Number(videoMatch[1]);

        const videoSrc = project.videos?.[videoNumber - 1];

        console.log("videoSrc:", videoSrc);

        if (!videoSrc) return null;

        return (

          <div

          key={index}

          className="mx-auto my-24"

          style={{

            maxWidth: project.videoMaxWidth || project.imageMaxWidth || "1200px",

          }}

        >

            <div className="aspect-video w-full overflow-hidden">

              <iframe

                src={videoSrc}

                className="h-full w-full"

                allow="autoplay; fullscreen; picture-in-picture"

                allowFullScreen

              />

            </div>

          </div>

        );

      }

      // SINGLE IMAGE

     if (imageMatch) {
      const imageNumber = Number(imageMatch[1]);
      const caption = project.imageCaptions?.[imageNumber - 1];
      

      return (
        <div
          key={index}
          className="my-24 mx-auto"
          style={{
            maxWidth: project.imageMaxWidth || "1200px",
          }}
        >
          <img
            src={project.images[imageNumber - 1]}
            alt={project.title}
            className="w-full"
          />

          {caption && (
            <p className="mt-4 text-[12px] leading-[1.4] text-black/45">
              {caption}
            </p>
          )}
        </div>
      );
    }

    

    // PAIR IMAGE

if (pairMatch) {
  const first = Number(pairMatch[1]);
  const second = Number(pairMatch[2]);

  const firstCaption = project.imageCaptions?.[first - 1];
  const secondCaption = project.imageCaptions?.[second - 1];

  const captionClassName =
    "mt-3 whitespace-pre-line text-[13px] leading-[1.4] tracking-[-0.01em] text-black/45";

  const isCupidasticResearchPairOneTwo =
    project.slug === "cupidastic-research" &&
    first === 1 &&
    second === 2;

  if (isCupidasticResearchPairOneTwo) {
    return (
      <div
        key={index}
        className="mx-auto my-24"
        style={{
          maxWidth: project.pairMaxWidth || "1400px",
        }}
      >
        <div className="grid grid-cols-[4fr_6fr] gap-6 items-start">
          <div>
            <img
              src={project.images[first - 1]}
              alt={project.title}
              className="w-full h-auto"
            />

            {firstCaption && (
              <p className={captionClassName}>
                {firstCaption}
              </p>
            )}
          </div>

          <div>
            <img
              src={project.images[second - 1]}
              alt={project.title}
              className="w-full h-auto"
            />

            {secondCaption && (
              <p className={captionClassName}>
                {secondCaption}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      key={index}
      className="mx-auto my-24"
      style={{
        maxWidth: project.pairMaxWidth || "1400px",
      }}
    >
      <div className="grid md:grid-cols-2 gap-2">
        <div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.images[first - 1]}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          {firstCaption && (
            <p className={captionClassName}>
              {firstCaption}
            </p>
          )}
        </div>

        <div>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={project.images[second - 1]}
              alt={project.title}
              className="h-full w-full object-cover"
            />
          </div>

          {secondCaption && (
            <p className={captionClassName}>
              {secondCaption}
            </p>
          )}
        </div>
      </div>
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
              className="mx-auto max-w-[900px] mb-40"
            >
              <p className="mb-6 text-[18px] text-black/50">
                {title}
              </p>

              <div className="mx-auto max-w-[900px] space-y-8 text-[28px] leading-[1.3] tracking-[-0.035em] md:text-[30px]">
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


{/* BOTTOM NAVIGATION */}
<div className="mx-auto mt-32 mb-24 flex flex-wrap justify-center gap-3">
  {project.slug === "cupidastic-research" && (
    <Link
      href="/projects/cupidastic"
      className="
        rounded-full
        border
        border-black/10
        bg-[#f8f8f6]
        px-8
        py-4
        text-[14px]
        text-black/60
        transition-all
        hover:bg-[#2f5eff]
        hover:text-white
      "
    >
      View Cupidastic Object
    </Link>
  )}

  {project.slug === "cupidastic" && (
    <Link
      href="/projects/cupidastic-research"
      className="
        rounded-full
        border
        border-black/10
        bg-[#f8f8f6]
        px-8
        py-4
        text-[14px]
        text-black/60
        transition-all
        hover:bg-[#2f5eff]
        hover:text-white
      "
    >
      View Cupidastic Research
    </Link>
  )}

  <Link
    href="/projects"
    
  
    className="
      rounded-full
      border
      border-black/10
      bg-[#f8f8f6]
      px-8
      py-4
      text-[14px]
      text-black/60
      transition-all
      hover:bg-black
      hover:text-white
    "
  >
    Back to all projects
  </Link>
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