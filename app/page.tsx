"use client";

import WordMorph from "./components/WordMorph";
import FutureDiagram from "./components/FutureDiagram";

const projects = [
  ["2.0.1", "Flower In Your Mind", "Personal Fountain / Object System", "Research", "2026"],
  ["2.0.2", "Cupidastic", "AI Camera / Privacy Object", "Objects", "2025"],
  ["2.0.3", "Future Domestic Rituals", "Domestic Technology / Ritual Study", "Research", "Ongoing"],
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
          className="absolute left-6 top-6 max-w-[1450px] text-[19px] leading-[1.08] tracking-[-0.03em] text-white md:left-8 md:top-7 md:text-18px]"
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
            ALMOST THERE LAB
          </p>
        </div>
      */}


      <div className="absolute left-12 bottom-6">
      <img
        src="/almostthere_logo_3.png"
        alt="Almost There Lab"
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

        <div className="absolute left-1/2 top-[49%] flex -translate-x-1/2 -translate-y-1/2 gap-[11px]">
          {[
            { label: "Observe", width: "px-7", motion: "bubble-1" },
            { label: "Prototype", width: "px-14", motion: "bubble-2" },
            { label: "Materialise", width: "px-10", motion: "bubble-3" },
          ].map((bubble) => (
            <span
              key={bubble.label}
              className={`
                bubble-word
                ${bubble.motion}
                ${bubble.width}
                rounded-full
                bg-white
                border
                border-black/5
                py-3
                text-[14px]
                tracking-[0.04em]
                text-black
                shadow-[0_10px_30px_rgba(0,0,0,0.22)]
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
        <div className="mx-auto mb-32 flex min-h-[300px] w-full max-w-6xl items-center justify-center overflow-hidden">
          <WordMorph />
        </div>

        <p className="mx-auto mb-100 max-w-4xl text-center text-[16px] leading-[1.4] text-black/70 md:text-[16px] font-sans">
          Design research that turns emerging signals into materials, systems, and experiences.
          <br></br>
          <br></br>
          Research makes futures visible. Design makes futures tangible.
          
          The aim is not to predict the future correctly, but to create preferable futures and positive forecasting errors: outcomes that become better than anticipated.
        </p>

<div className="mt-16 mb-16">

  <FutureDiagram />

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

      {projects.map(([_, title, description, type, year]) => (
        
        <article
          key={title}
          className="group flex justify-center">
        

          <div className="flex gap-0">

            <div
              className="
                w-[520px]
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
              {title}
            </div>

            <div
              className="
                w-[340px]
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
              {description}
            </div>

            <div
              className="
                w-[160px]
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
              {type}
            </div>

            <div
              className="
                w-[130px]
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
              {year}
            </div>

          </div>

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
          src="/almostthere_logo_2.png"
          alt="Almost There Lab"
          className="w-[80px]"
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
              © 2026 Almost There Lab. All rights reserved.
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