export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-8 text-[#111] md:px-10">

      {/* HEADER */}
      <header className="mb-28 flex items-start justify-between">
        <a
          href="/"
          className="text-[14px] tracking-[0.08em] text-black/70"
        >
          HANNA PARK
        </a>

        <a
          href="/about"
          className="text-[14px] text-black/45 underline underline-offset-4 transition-colors hover:text-blue-600"
        >
          Back
        </a>
      </header>

      <section className="mx-auto max-w-[1200px]">

        {/* INTRO */}
        <div className="mb-28 text-center">

          <p className="mb-6 text-[14px] tracking-[0.14em] text-black/45">
            PROFILE / Hanna Park(Founder)
          </p>

          <h1
            className="
              mx-auto
              max-w-4xl
              text-[30px]
              leading-[1.5]
              tracking-[-0.05em]
              md:text-[30px]
            "
          >
            Translating emerging signals into objects, systems, and future conditions.
          </h1>

        </div>



{/* PORTRAIT */}

<div className="mx-auto mb-16 max-w-[500px]">

  <img

    src="/profile/hanna-portrait.jpg"

    alt="Hanna Park"

    className="w-full"

  />

    <p className="mt-3 text-[10px] text-right text-black/40 ">

    AI-generated self portrait Hanna Park, 2026

  </p>

</div>

       {/* BODY */}
<div className="mx-auto max-w-[1000px]">

  <div className="space-y-10 text-[18px] leading-[1.5] text-black/90 md:text-[24px]">

    <p>
      Hanna Park is an interdisciplinary designer and researcher based between
      London and Seoul. Through {""}
      
      <a
        href="https://www.almosttherelab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Almost There Lab ↗
      </a>

      , she explores how emerging
      technologies, cultural shifts, and speculative thinking become tangible
      experiences, objects, and future conditions.
    </p>

    <p>
      Her work investigates how people encounter technological systems in
      everyday life, with a particular interest in artificial intelligence,
      domestic futures, privacy, ritual, and embodied interaction. Rather than
      approaching design as a process of problem solving, she uses research,
      prototyping, and object making as tools for inquiry and reflection.
    </p>

    <p>
      Almost There Lab approaches design as a form of cultural and technological inquiry.
      The practice investigates how emerging technologies, social transformations, and behavioural shifts influence the ways people live, interact, and imagine the future. Research, prototyping, and object making are used to translate emerging signals into tangible experiences, allowing future conditions to be explored in the present.
      By moving between research and material practice, the studio creates objects, systems, and experiences that encourage reflection on the futures already taking shape around us.
    </p>

    <p>
      Almost There Lab also operates as an independent design research practice,
      translating weak signals and emerging behaviours into physical
      experiences. Projects often begin with observations of technological and
      cultural change and evolve into speculative scenarios, interaction
      prototypes, and future artefacts that make possible futures tangible in
      the present.
    </p>

    <p>
      Through this approach, the studio seeks to create preferable futures and
      positive forecasting errors: outcomes that become better than anticipated.
      The work is less concerned with predicting what will happen than with
      expanding what could happen.
    </p>

    <p>
      Hanna is currently completing an Master in{" "}
      <a
        href="https://www.rca.ac.uk/study/programme-finder/design-futures/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Design Futures(MDes) ↗
      </a>
      at the Royal College of Art. Her studies focus on futures thinking, speculative design, and
      emerging technologies as tools for societal and cultural exploration.
    </p>

    <p>
      Previously, she majored in Object Design and Art Management at{" "}
      <a
        href="https://www.karts.ac.kr/en/main.do"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Korea National University of Arts ↗
      </a>
      , graduating as the top student in the Design department. She also
      completed an exchange semester in Industrial Design at{" "}
      <a
        href="https://www.zhdk.ch"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Zurich University of the Arts ↗
      </a>
      , where she collaborated across disciplines with students from ZHdK,
      ETH Zürich, and the University of Zürich.
    </p>

    <p>
      Her professional experience spans industrial design, interaction design,
      speculative design, and design research. She has worked on AI-mediated
      experiences at{" "}
      <a
        href="https://neutune.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Neutune / KAIST Company Lab ↗
      </a>
      , future urban scenarios with {" "}
      <a
        href=" https://www.hyundaimotorgroup.com/en/main/mainRecommend/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Hyundai Motors Group ↗
      </a>

      , and product development
      projects at {""}
      <a
        href=" https://vetica-group.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        Vetica Group ↗
      </a>
  
      in Switzerland. More recently, she worked as a
      Research & Design Assistant at LS Design Studio in Seoul.
    </p>

    <p>
      Her projects have been exhibited internationally, including at{" "}
      <a
        href="https://www.newdesigners.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        New Designers London ↗
      </a>
      . She is also a recipient of the Royal College of Art International
      Scholarship and has received awards for {""}
      <a
        href=" https://www.rca.ac.uk/news-and-events/news/rca-and-sodexo-announce-winners-of-innovative-eats-and-algorithms-project-to-design-sustainable-solutions-for-digitising-food/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2f5eff] underline underline-offset-4"
      >
        SODEXO Group ↗
      </a>
      
      academic-industry collaborations
      exploring food systems, algorithms, and future experiences.
    </p>

  </div>

  {/* CURRENT INTERESTS */}
  <div className="my-24">

    <p className="mb-8 text-[13px] tracking-[0.14em] text-black/45">
      CURRENT INTERESTS
    </p>

    <div className="flex flex-wrap gap-3">

      {[
        "Human-AI interaction",
        "Preferable Futures",
        "New Craftmanship",
        "Sustainable Systems",
        "Biodesign",
        "Urban Futures",
        "Speculative Design",
        "Critical Design",
        "Future Living",
        "Human Design Research",
      ].map((item) => (
        <div
          key={item}
          className="
            rounded-full
            border
            border-black/10
            bg-[#f8f8f6]
            px-7
            py-3
            text-[15px]
            text-black/60
          "
        >
          {item}
        </div>
      ))}

    </div>

  </div>

  {/* PROJECTS */}
  <div className="border-t border-black/10 pt-12">

    <p className="mb-8 text-[13px] tracking-[0.14em] text-black/45">
      PROJECTS
    </p>

    <a
      href="/projects"
      className="
        text-[16px]
        underline
        underline-offset-4
        text-black/45
        transition-colors
        hover:text-[#2f5eff]
      "
    >
      View Projects →
    </a>

  </div>


          {/* CONTACT */}
          <div className="mt-32 border-t border-black/10 pt-12">

            <p className="mb-8 text-[13px] tracking-[0.14em] text-black/45">
              CONTACT
            </p>

            <div className="space-y-3 text-[18px] md:text-[16px]">

              <a
                href="mailto:hello@almostthere.studio"
                className="block hover:text-blue-600"
              >
                Email
              </a>

              <a
                href="https://instagram.com/almostthere_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-blue-600"
              >
                Instagram
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}