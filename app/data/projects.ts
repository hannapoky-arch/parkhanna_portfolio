type Project = {
  slug: string;
  number: string;
  title: string;
  description: string;
  type: string;
  year: string;
  summary: string;
  content: string;
  contributors: string[];
  literature: string[];
  images: string[];
  imageMaxWidth?: string;
  pairMaxWidth?: string;

  thumbnailImages?: string[];
  thumbnailLayout?: string;
  thumbnailPosition?: string;

  heroMedia?: {
    src: string;
  };
};



export const projects: Project[] = [
  {
  slug: "cupidastic",
  number: "AT-0.2",
  title: "Cupidastic",
  description: "Design Research / Future Love System",
  type: "Objects",
  year: "2025",
   imageMaxWidth: "1400px",
   pairMaxWidth: "1400px",
   thumbnailLayout: "equal",

  summary: "Cupidastic explores how environmental toxicity, declining fertility, and algorithmic intimacy may converge into a future condition where love becomes measurable, governable, and increasingly optimised.",

  content: `
# Introduction

Cupidastic explores how environmental toxicity, hormonal disruption, and algorithmic intimacy may converge into a future condition of love.

Microplastics are no longer external pollutants. Their accumulation within human tissues, endocrine systems, and reproductive organs suggests a gradual transformation of biological conditions. As hormonal regulation becomes increasingly unstable, reproduction, attraction, and intimacy are no longer shaped solely by culture or personal choice, but also by synthetic environmental forces.

Within this future, AI systems recommend ideal partners through biological compatibility metrics. Yet despite algorithmic optimisation, people continue to search for something that remains difficult to quantify: the irrational spark of attraction.

Cupidastic emerged from this contradiction. The project asks whether human relationships might still contain forms of ambiguity that resist measurement, prediction, and control.

[pair-1-2]

# Wearable System

Rather than visualising emotional states through screens, Cupidastic translates invisible biological conditions into embodied interactions.

The project takes the form of a wearable system consisting of a hug vest and a pair of sensing handles. Together, these artefacts create a physical infrastructure through which emotional signals can be generated, exchanged, and partially concealed.

The vest encourages close bodily proximity while maintaining a sense of individual agency. Rather than functioning as a passive garment, it actively choreographs interaction between two people. The resulting experience is neither purely technological nor purely emotional; it exists somewhere between data exchange and physical intimacy.

By focusing on touch, movement, and proximity, the project reframes intimacy as a tactile experience rather than a measurable dataset.
[pair-3-4]

# Data driven intimacy

Each handle contains physiological sensing components designed to capture subtle fluctuations associated with emotional arousal.

Rather than presenting these measurements as objective truths, Cupidastic transforms them into what the project describes as Synthetic Thermographic Data: speculative emotional signals that visualise intimacy while remaining intentionally ambiguous.

The system allows users to communicate emotional states through thermal and behavioural cues that are perceptible between consenting individuals, yet difficult for algorithmic systems to fully interpret.

In doing so, the project challenges the assumption that emotional experiences should always be transparent, measurable, and optimised. Data becomes a medium for uncertainty rather than control.
[pair-5-6]

# Color, material, finish research

Material choices were informed by the project’s broader narrative of environmental contamination and bodily adaptation.

The wearable vest is constructed from recycled leather and soft structural components. Recycled leather was selected not only for its tactile qualities but also for its symbolic relationship to synthetic accumulation and material transformation. The material carries traces of previous lives while simultaneously suggesting future forms of adaptation.

Soft surfaces encourage prolonged physical contact, while the overall form balances protection and vulnerability. The visual language draws from thermal imaging, hormonal fluctuation, and biological warmth, translating invisible physiological conditions into tangible experiences.

Rather than expressing technological precision, the CMF strategy prioritises comfort, emotional proximity, and sensory engagement.
[image-7]

# Scenario

Alongside the wearable system, the project includes a speculative scenario film that situates Cupidastic within a broader ecosystem of reproductive governance and algorithmic matchmaking.

The film follows two individuals navigating a future in which biological compatibility scores, fertility metrics, and AI recommendations increasingly shape romantic relationships. Within this context, Cupidastic becomes a tool for generating moments of uncertainty that cannot be fully predicted or optimised.

Through narrative prototyping, the film explores how emotional privacy, bodily autonomy, and intimacy might be negotiated within highly quantified futures.
[image-8]

# Outcome as a preferable future design 

Cupidastic emerged from a simple contradiction.
People may trust AI systems to identify statistically ideal partners, while simultaneously desiring someone they cannot fully explain.

The project operates within the space between optimisation and attraction.

By allowing users to generate unreadable emotional signals, Cupidastic introduces what I describe as a positive prediction error: a moment in which human behaviour exceeds computational expectation.
Even in futures shaped by environmental toxicity, hormonal disruption, and algorithmic governance, human relationships may retain one final form of resistance, the ability to remain unpredictable to one another.

Unlike AI systems, humans cannot entirely conceal either love or a sneeze. This remains both a curse and a gift.
[image-9]
`,

  contributors: [
    "Designer — Hanna Park",
    "Director — Jin Roh",
    "Creative Technologist — Chanwoo Lee",
    "Photographer — Sohee Goo"
  ],

  literature: [
    "Baylis, F. (2019). Altered Inheritance: CRISPR and the Ethics of Human Genome Editing. Harvard University Press.",
    "Chen, J.Y. & Zhu, H. (2019). Artificial intelligence in healthcare: Past, present and future. Seminars in Cancer Biology.",
    "Couldry, N. & Mejias, U.A. (2019). The Costs of Connection: How Data Is Colonizing Human Life and Appropriating It for Capitalism. Stanford University Press.",
    "Descartes, R. (1641). Meditations on First Philosophy.",
    "Dunne, A. & Raby, F. (2013). Speculative Everything: Design, Fiction, and Social Dreaming. MIT Press.",
    "Frontiers in Endocrinology. (2022). Microplastic exposure and endocrine disruption. Available at: https://www.frontiersin.org/articles/10.3389/fendo.2022.1084236/full",
    "Galloway, T.S. & Lewis, C.N. (2016). Marine microplastics spell big problems for future generations. Proceedings of the National Academy of Sciences, 113(9), pp.2331–2333.",
    "Haraway, D.J. (2016). Staying with the Trouble: Making Kin in the Chthulucene. Duke University Press.",
    "Krell, D. & Smith, L. (2021). Algorithmic Intimacy and the New Politics of Reproduction.",
    "Lewis, S. (2019). Full Surrogacy Now: Feminism Against Family. Verso Books.",
    "Liang, A. (2025). Artificial Intelligence Clones. [Forthcoming].",
    "Lupton, D. (2016). The Quantified Self: A Sociology of Self-Tracking. Polity Press.",
    "Malicse, A. (2025). The Future of Human Reproduction and Family Structure. [Forthcoming].",
    "National Library of Medicine. (2023). Effects of Microplastics on Human Fertility. Available at: https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9885170/ (Accessed: 5 May 2025).",
    "Preciado, P.B. (2013). Testo Junkie: Sex, Drugs, and Biopolitics in the Pharmacopornographic Era. The Feminist Press.",
    "Schmeer, J. (2014). Bioplastic Fantastic: Between Products and Organisms.",
    "Sharon, T. (2018). When digital health meets digital capitalism: Reinventing care in the algorithmic age. Big Data & Society.",
    "Strathern, M. (1992). Reproducing the Future: Anthropology, Kinship and the New Reproductive Technologies. Routledge.",
    "World Health Organization. (2019). Microplastics in Drinking Water.",
    "Zuboff, S. (2019). The Age of Surveillance Capitalism. PublicAffairs.",
    "Gila Stopler, 'Biopolitics and Reproductive Justice: Fertility Policies between Women's Rights and State and Community Interests' (2015)",
    "Timothy Morton (2013), Hyper Object",
    "Barbara E. Gibson(2020), The micro-politics of caring: tinkering with person-centered rehabilitation, Taylor&Francis group"

  ],

   heroMedia: {
  src: "/projects/cupidastic/hero.webp",
},

thumbnailImages: [

  "/projects/cupidastic/cupidastic-pair2.jpg",
  "/projects/cupidastic/cupidastic-pair3.jpg",

],

    images: [

  "/projects/cupidastic/cupidastic-pair2.jpg",
  "/projects/cupidastic/10.jpg",

  "/projects/cupidastic/cupidastic-pair4.jpg",
  "/projects/cupidastic/cupidastic-pair5.jpg",

  "/projects/cupidastic/cupidastic-pair6.jpg",
  "/projects/cupidastic/cupidastic-pair7.jpg",

  "/projects/cupidastic/cupidastic-image8-cmf.jpg",

  "/projects/cupidastic/cupidastic-image9-scenario.png",

  "/projects/cupidastic/cupidastic-image10.jpg",

]
},


  {
    slug: "Memento-Mori",
    number: "AT-0.2",
    title: "Memento Mori",
    description: "Future Ritual Object / Critical Design",
    type: "Objects",
    year: "2024",
    imageMaxWidth: "800px",
    pairMaxWidth: "1200px",
    thumbnailLayout: "landscapePortrait",
    thumbnailPosition: "50% center",
    summary:
      "A future where memory, legacy, and death become forms of social capital.",
    content: `

    [image-1]

# Introduction

Memento Mori explores how contemporary society may transform death into a measurable social achievement.
While modern culture increasingly promotes ideas of well-being, productivity, and self-optimization, conversations surrounding death remain largely avoided. 
Yet throughout history, individuals have continuously sought ways to shape how they are remembered after death.

The project asks a speculative question: if living well becomes a social obligation, could dying well become one as well?
Rather than treating death as a purely personal event, Memento Mori examines how future societies might quantify, archive, and evaluate an individual's final legacy through systems of recognition, inheritance, and social value.

[image-2]

# Research

The project was developed through approximately six months of research, interviews, and participatory workshops exploring attitudes towards mortality and end-of-life preparation.

The findings suggested that well-dying is not primarily concerned with the moment of death itself, but with the unresolved concerns accumulated throughout life. Participants frequently associated a meaningful death with the ability to reflect upon, organise, and communicate personal values before passing away.

The research also revealed that active engagement with well-dying practices tends to emerge later in life, particularly among individuals over the age of forty-five. Rather than preparing for death through financial assets alone, participants expressed a desire to leave behind forms of emotional, ethical, and personal inheritance.
[pair-3-4]

# System Proposal

Memento Mori proposes a speculative service ecosystem composed of two interconnected artefacts: MEMENTO and MORI.

MEMENTO functions as a personal device through which users record and evaluate their final statements. Rather than measuring financial wealth, the system assigns value to reflections, concerns, and personal legacies that might otherwise disappear after death.

Through daily interactions, users gradually construct a unique Well-Dying Identity represented by an individual identification code. This code serves as proof of one’s accumulated end-of-life intentions and becomes a transferable form of symbolic inheritance.

Following a user’s death, MORI enables descendants and loved ones to access these archived memories. Through a tagging system linked to the inherited identification code, future generations can revisit, preserve, and reinterpret the values left behind.

The project therefore imagines a future in which personal legacy becomes a form of social capital, transforming remembrance into a measurable and inheritable asset.
[pair-5-6]


# Outcome as a Preferable Future Design

Memento Mori does not advocate for a future in which death is reduced to a score, a ranking, or a measurable achievement.
Instead, the project uses speculation to expose a growing cultural tendency: the desire to optimise every aspect of human life. As productivity, self-improvement, and personal branding increasingly shape contemporary society, it becomes possible to imagine a future in which even death is expected to demonstrate value. Within this scenario, Memento Mori asks a simple question.

If our final legacy could be measured, what would we choose to leave behind?

By transforming memories, concerns, and personal reflections into symbolic assets, the project reveals both the appeal and the discomfort of quantifying human existence. The resulting system is intentionally ambiguous. It simultaneously offers recognition while questioning whether recognition should be necessary at all.
Rather than proposing a solution, Memento Mori invites reflection on mortality as a shared human condition. In a culture obsessed with proving worth, perhaps the most meaningful legacy is not what can be measured, but what remains impossible to quantify.
[image-7]

`,
  contributors: [
    "Designer — Hanna Park",
    "Director — Suin Gok",
    "Photographer — Minje Kang",
    "Actress — Dahyun Woo",
    "Light Assistant - Jihonn Yoo",
    "Set Assistant - Sungho Yoon"
  ],

  literature: [
    "Dunne & Raby — Speculative Everything (2013)",
    "Donna Haraway — Staying with the Trouble (2016)",
    "Timothy Morton — Hyperobjects (2013)",
    "Sophie Lewis — Full Surrogacy Now (2019)",

  ],

    thumbnailImages: [

    "/projects/memento-mori/memento-mori-5.jpg",
    "/projects/memento-mori/memento-mori-1.jpg",

  ],

    images: [
      "/projects/memento-mori/memento-mori-1.jpg",

      "/projects/memento-mori/memento-mori-2.png",

      "/projects/memento-mori/memento-mori-3.jpg",
      "/projects/memento-mori/memento-mori-4.gif",

      "/projects/memento-mori/memento-mori-5.jpg",
      "/projects/memento-mori/memento-mori-6.gif",

      "/projects/memento-mori/memento-mori-7.jpg",
    ],
  },
  
  
  
  {
    slug: "Kaccia",
    number: "AT-0.1",
    title: "Kaccia",
    description: "CMF / Craftmanship / Luxury",
    type: "Objects",
    year: "2022",
    summary:
    "Affordable Luxury for Bathing. A bathing ritual object that reinterprets the traditional Korean scrubbing towel as an affordable luxury for everyday self-care.",
    
    content: `

[image-1]

# Introduction

Kaccia reinterprets the traditional Korean scrubbing towel as a contemporary ritual object for self-care.

Inspired by the culture of Korean bathhouses and family bathing traditions, the project explores how an everyday utilitarian tool can become a source of comfort, attention, and personal luxury. Rather than focusing solely on cleansing, Kaccia proposes bathing as a deliberate ritual through which individuals reconnect with their bodies.

The project asks how familiar cultural artefacts can be transformed without losing the values embedded within them. Through material exploration and form development, Kaccia reimagines the scrubbing towel as an object that celebrates both heritage and personal wellbeing.

[pair-2-3]

# Research

The project began with an investigation into traditional Korean sauna culture, where bathing extends beyond hygiene and becomes a shared social and familial activity.

Within this context, scrubbing one another’s backs with textured towels remains a familiar gesture of care and affection. While these tools are deeply embedded within everyday routines, their forms have remained largely unchanged despite evolving expectations surrounding wellness and self-care.

The research therefore focused on identifying qualities that could transform an ordinary bathing tool into a more intentional and meaningful experience while preserving its cultural significance.

[image-4]

# Form Development

A series of iterative physical studies explored how users might personalise the form of the tool according to their own preferences and bathing habits.

Participants were initially presented with abstract and undefined forms that could be gradually shaped through carving, smoothing, and refinement. Rather than imposing a standardised ergonomic solution, the process allowed each individual to develop a unique relationship with the object.

The resulting forms reveal how personal comfort emerges through continuous interaction, turning the tool into an extension of individual ritual and bodily experience.

[pair-5-6]

# Outcome

The final proposal consists of two complementary bathing tools designed for different stages of the bathing ritual.

Fabric Kaccia incorporates five distinct surfaces with varying textures, enabling users to adapt the experience according to different parts of the body and desired levels of exfoliation.

Wood Kaccia is intended as a secondary tool used after Fabric Kaccia. Its softer tactile qualities encourage slower and more attentive interactions, shifting the focus from cleansing towards sensory engagement and relaxation.

Together, the two artefacts transform an everyday bathing routine into a more considered and personal ritual.

[image-7]

# Reflection

Kaccia explores how design can uncover new meanings within ordinary cultural objects.

Rather than replacing traditional practices, the project proposes a subtle reinterpretation that bridges heritage and contemporary wellness culture. By elevating a familiar bathing tool into a personalised ritual object, Kaccia suggests that luxury does not necessarily emerge from rarity or expense, but from attention, care, and the quality of everyday experiences.

`,

  contributors: [

    "Designer — Hanna Park",
    "Photographer - Jungsu Lee",
    "Model - Hyeyoon Jin"

  ],

  literature: [

  ],

  thumbnailImages: [

    "/projects/kaccia/kaccia-1.jpg",
    "/projects/kaccia/kaccia-5.jpg",
  ],


  images: [

    "/projects/kaccia/kaccia-1.jpg",

    "/projects/kaccia/kaccia-2.jpg",

    "/projects/kaccia/kaccia-3.jpg",

    "/projects/kaccia/kaccia-4.jpg",

    "/projects/kaccia/kaccia-5.jpg",

    "/projects/kaccia/kaccia-6.jpg",

    "/projects/kaccia/kaccia-7.jpg",

  ],

},

];

export default projects;