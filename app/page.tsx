"use client";

import WordMorph from "./components/WordMorph";
import FutureDiagram from "./components/FutureDiagram";
import Link from "next/link";
import { projects } from "@/app/data/projects";

const selectedProjectSlugs = [

  "cupidastic",
  "cupidastic-research",
  "plastiglomerate-to-plastic-futures",

];

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#f5f5f2] text-[#111]">
      {/* LANDING */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bg-green.jpg')" }}
        />

        <div className="absolute inset-0 bg-black/10" />

        <div
          className="absolute
                      left-6
                      top-6
                      max-w-[calc(100vw-48px)]
                      text-[19px]
                      leading-[1.08]
                      tracking-[-0.03em]
                      text-white
                      md:left-8
                      md:top-7
                      md:max-w-[1450px]
                      md:text-[18px]]"
          style={{ textShadow: "0 2px 12px rgba(0,0,0,.35)" }}
        >
         Hanna Park is an industrial designer working at the intersection of products, interaction, and emerging technologies. 
         Her work explores how design can transform complex systems into intuitive physical experiences through research, prototyping, and form development.
        Drawing from backgrounds in product design and design futures, she develops objects and interactions that connect technological innovation 
        with human behaviour, everyday rituals, and lived experience.

        </div>

        {/* //TODO:  <div className="absolute left-6 bottom-6 md:left-8 md:bottom-8">
          <p
            className="text-[16px] tracking-[-0.03em] text-white"
            style={{ textShadow: "0 2px 14px rgba(0,0,0,.35)" }}
          >
            HANNA PARK
          </p>
        </div>
      */}


      <div className="absolute left-12 bottom-6">
      <img
        src="/hannapark_logo_3.png"
        alt="Hanna Park"
        className="h-7 w-auto"
      />

    </div>


     <nav className="absolute bottom-6 right-6 flex gap-5 text-[16px] tracking-[-0.03em] text-white md:right-8 md:bottom-8">


{/* 
  <a href="mailto:hannapoky@email.com">
    EMAIL
  </a>

  <a
    href="https://www.instagram.com/almostthere_lab/"
    target="_blank"
    rel="noopener noreferrer"
  >
    INSTAGRAM
  </a>
  */}

 <a href="/profile">
  PROFILE
</a>

</nav>
          <a

  href="#projects"

  className="

    absolute

    left-1/2

    bottom-7

    -translate-x-1/2

    fontsans

    text-[16px]

    tracking-[0.0em]

    text-white/80

    transition-opacity

    hover:opacity-50

  "

>

  PROJECTS

</a>

        <div className="absolute left-6 right-6 top-[58%] flex -translate-y-1/2 justify-between gap-3 md:left-1/2 md:right-auto md:top-[49%] md:-translate-x-1/2 md:gap-[11px] md:justify-center">

  {[

    { label: "Observe", width: "px-5 md:px-7", motion: "bubble-1" },

    { label: "Prototype", width: "px-8 md:px-14", motion: "bubble-2" },

    { label: "Materialise", width: "px-6 md:px-10", motion: "bubble-3" },

  ].map((bubble) => (

    <span

      key={bubble.label}

      className={`

        bubble-word

        ${bubble.motion}

        ${bubble.width}
        flex

        flex-1

        items-center

        justify-center

        rounded-full

        bg-white

        border

        border-black/5

        py-2

        md:flex-none

        md:py-3

        text-[12px]

        md:text-[14px]

        tracking-[0.04em]

        text-black

        shadow-[0_10px_30px_rgba(0,0,0,0.22)]

        whitespace-nowrap
      `}

    >

      {bubble.label}

    </span>

  ))}

</div>
      </section>

      {/* WORD MORPH / MANIFEST */}
      <section
        id="manifest"
        className="min-h-screen bg-white px-6 py-28 md:px-10 md:py-36"
      >
        <div className="mx-auto mb-12 flex min-h-[150px] w-full max-w-full items-center justify-center overflow-hidden md:mb-32 md:min-h-[300px] md:max-w-6xl">
        <div className="origin-center scale-[0.33] md:scale-100">
        <WordMorph />

  </div>

</div>

        <p className="mx-auto mb-24 max-w-4xl text-center text-[15px] leading-[1.45] text-black/70 md:mb-100 md:text-[16px] font-sans">
          Design research that turns emerging signals into materials, systems, and experiences.
          <br></br>
          <br></br>
          Research makes futures visible. Design makes futures tangible.
          
          The aim is not to predict the future correctly, but to create preferable futures and positive forecasting errors: outcomes that become better than anticipated.
        </p>

<div className="mx-auto w-full max-w-[1000px] overflow-hidden px-0">

  <img

    src="/future-diagram.png"
    alt="future diagram"
    className="w-full object-contain"

  />

</div>

</section>


{/* PROJECTS */}
<section
  id="projects"
  className="bg-white px-6 pt-40 pb-48 md:px-10"
>
  <div className="mx-auto max-w-[1600px]">

    <div className="mb-24 text-center">

      <p className="mb-6 text-[13px] tracking-[0.12em] text-black/45">
        SELECTED WORKS
      </p>

      <h2 className="mx-auto max-w-6xl text-[24px] leading-[1.15] tracking-[-0.04em] md:text-[30px]">
        Projects that translate early signals into objects, systems, and speculative conditions.
      </h2>

    </div>

    <div className="space-y-4">

      {projects
      .filter((project) => selectedProjectSlugs.includes(project.slug))
      .map((project) => (
        
        <article
          key={project.slug}
          className="group flex justify-center">
        

          <Link

  href={`/projects/${project.slug}`}

  className="block w-full md:w-auto"

>
<div className="flex w-full flex-col gap-2 md:w-auto md:flex-row md:gap-0">

            <div
              className="
                w-full md:w-[520px]
                rounded-full
                border border-black/10
                bg-[#f8f8f6]

                px-8 py-4

                flex items-center justify-center

                text-[17px]
                tracking-[-0.02em]

                transition-all duration-300

                group-hover:bg-black
                group-hover:text-white
              "
            >
              {project.title}
            </div>

            <div
              className="
                 hidden md:flex
                  md:w-[340px]
                  rounded-full
                  border border-black/10
                  bg-[#f8f8f6]

                px-8 py-4

                flex items-center justify-center

                text-[14px]
                text-black/60

                transition-all duration-300

                group-hover:bg-black
                group-hover:text-white
              "
            >
              {project.description}
            </div>

            <div
              className="
                hidden md:flex
                md:w-[160px]
                rounded-full
                border border-black/10
                bg-[#f8f8f6]

                px-8 py-4

                flex items-center justify-center

                text-[14px]
                text-black/60

                transition-all duration-300

                group-hover:bg-black
                group-hover:text-white
              "
            >
              {project.type}
            </div>

            <div
              className="
                hidden md:flex
                md:w-[130px]
                rounded-full
                border border-black/10
                bg-[#f8f8f6]

                px-8 py-4

                flex items-center justify-center

                text-[14px]
                text-black/60

                transition-all duration-300

                group-hover:bg-black
                group-hover:text-white
              "
            >
              {project.year}
            </div>

          </div>

        </Link> 
        
        </article>

      ))}

    </div>

{/* 버튼 추가 */}

<div className="mt-16 flex justify-center">
  <a
    href="/projects"
    className="
      text-[16px]
      text-black
      underline
      underline-offset-4
      transition-colors
      hover:text-blue-600
    "
  >
    View all projects
  </a>
</div>

  </div>
</section>

{/* ABOUT */}
<section
  id="about"
  className="bg-[#f0f0eb] px-6 py-36 md:px-10"
>
  <div className="mx-auto max-w-[1500px]">

    <div className="grid gap-20 md:grid-cols-12">

      {/* LOGO */}
      <div className="md:col-span-3 pl-6">

        <img
          src="/hannapark_logo_2.png"
          alt="HANNA PARK"
          className="w-[50px]"
        />

      </div>

      {/* CONTENT */}
      <div className="md:col-span-9">

        <p
          className="
            mb-8
            text-[14px]
            tracking-[0.1em]
            text-black/
            fontsans
            font-bold
          "
        >
          ABOUT
        </p>

        <h2
          className="
            max-w-[900px]

            text-[16px]
            leading-[1.24]
            tracking-[-0.04em]
            fontsans
            md:text-[24px]
          "
        >
          Hanna Park is a product and industrial designer based between London and Seoul.

        </h2>

        <p
          className="
            mt-12
            max-w-[900px]

            text-[16px]
            leading-[1.24]
            tracking-[-0.04em]
            fontsans
            md:text-[24px]
          "
        >
          Her practice combines design research, prototyping, and object development to explore how people engage with technology in everyday life. Working across products, interaction, and emerging technologies, she develops physical experiences that connect technological innovation with human behaviour, rituals, and culture.
          <br></br>
          <br></br>
          With a background in Industrial Design and Design Futures, her work spans industrial design, interaction design, and research-led experimentation. Through making, testing, and form development, she investigates how complex systems can become intuitive, meaningful, and tangible experiences.
          <br></br>
          <br></br>
          She is also the founder of Almost There Lab, an independent practice focused on research-driven approaches to product, interaction, and future-facing design.

        </p>

        <p
          className="
            mt-8
            max-w-[900px]

            text-[16px]
            leading-[1.2]
            text-black/55
          "
        >
          
        </p>

        {/* CONTACT */}

        <div className="mt-40">

    
          <div className="mt-24">

  <p className="mb-4 text-[14px] font-bold tracking-[0.1em] text-black/50">
    CONTACT
  </p>

  <div className="space-y-2 mb-12">

    <a
      href="mailto:hannapoky@email.com"
      className="block text-[14px] hover:opacity-40 transition-opacity"
    >
      Email
    </a>

    <a
      href="https://www.instagram.com/khannas_a/"
      target="_blank"
      rel="noopener noreferrer"
      className="block text-[14px] hover:opacity-40 transition-opacity"
    >
      Instagram
    </a>

  </div>

  <p className="mb-4 text-[14px] font-bold tracking-[0.1em] text-black/50">
    PROFILE
  </p>

  <a
    href="/profile"
    className="block text-[14px] hover:opacity-40 transition-opacity font-bold"
  >
    Founder / Hanna Park →
  </a>



            <div className="mt-32 border-black/50 pt-6 text-[12px] text-black/40">
              © 2026 Hanna Park. All rights reserved.
            </div>

            

          </div>

        </div>

      </div>

    </div>

  </div>
</section>


</main>

  );

}