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
  thumbnailImages?: string[];
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
  type: "Research",
  year: "2025",

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

Even in futures shaped by environmental toxicity, hormonal disruption, and algorithmic governance, human relationships may retain one final form of resistance — the ability to remain unpredictable to one another.

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
    "Dunne & Raby — Speculative Everything (2013)",
    "Donna Haraway — Staying with the Trouble (2016)",
    "Timothy Morton — Hyperobjects (2013)",
    "Sophie Lewis — Full Surrogacy Now (2019)"
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
    description: "AI Camera / Privacy Object",
    type: "Objects",
    year: "2025",
    summary:
      "A speculative privacy object exploring how people might resist AI-mediated image capture.",
    content: 
    '# introduction'
    
    ,

  contributors: [
    "Designer — Hanna Park",
    "Director — Jin Roh",
    "Creative Technologist — Chanwoo Lee",
    "Photographer — Sohee Goo"
  ],

  literature: [
    "Dunne & Raby — Speculative Everything (2013)",
    "Donna Haraway — Staying with the Trouble (2016)",
    "Timothy Morton — Hyperobjects (2013)",
    "Sophie Lewis — Full Surrogacy Now (2019)"
  ],
    images: [
      "/projects/memento-mori/memento-mori-1.jpg",
      "/projects/memento-mori/memento-mori-2.jpg",
      "/projects/memento-mori/memento-mori-3.jpg",
      "/projects/memento-mori/memento-mori-4.jpg",
    ],
  },
  {
    slug: "AeroLoop",
    number: "AT-0.1",
    title: "AeroLoop",
    description: "Domestic Technology / Ritual Study",
    type: "Research",
    year: "Ongoing",
    summary:
      "A research study on how emerging technologies may reshape domestic rituals and everyday behaviours.",
    content: 
    '# introduction'
    
    ,
    
  contributors: [
    "Designer — Hanna Park",
    "Director — Jin Roh",
    "Creative Technologist — Chanwoo Lee",
    "Photographer — Sohee Goo"
  ],

  literature: [
    "Dunne & Raby — Speculative Everything (2013)",
    "Donna Haraway — Staying with the Trouble (2016)",
    "Timothy Morton — Hyperobjects (2013)",
    "Sophie Lewis — Full Surrogacy Now (2019)"
  ],
    images: [
      "/projects/aeroloop-1.jpg",
      "/projects/aeroloop-2.jpg",
      "/projects/aeroloop-3.jpg",
      "/projects/aeroloop-4.jpg",
    ],
  },
];

export default projects;