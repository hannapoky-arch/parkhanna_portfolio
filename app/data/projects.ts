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
  imageCaptions?: string[];

  heroMedia?: {
    src: string;
  };
};



export const projects: Project[] = [
  {
  slug: "cupidastic",
  number: "AT-R.3",
  title: "Cupidastic",
  description: "Wearable Object / Love Data Encryption",
  type: "Research",
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
    "Model - Bettina Man /  George Rybi / Visha Mehta",
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

],

imageCaptions: [

  "",
  "",
  "Design Prototypes(Cupidastic,2025)",
  "Inspiration image_[Marina Abramović and Ulay. Rest Energy. 1980 | MoMA]",
  "",
  "",
  "",
  "",

]

},


{
  slug: "cupidastic-research",
  number: "AT-R.2",
  title: "Cupidastic (Research ver.)",
  description: "Future Research / Algorithmic Intimacy",
  type: "Research",
  year: "2025",

  imageMaxWidth: "1200px",
  pairMaxWidth: "1400px",
  thumbnailLayout: "single",

  summary:
    "A speculative research project exploring how microplastic toxicity, hormonal disruption, declining fertility, and AI-mediated intimacy may reshape future love.",

  content: `

[pair-1-2]

# Research Overview

Cupidastic Research investigates how environmental toxicity, reproductive uncertainty, and algorithmic intimacy may converge into a future condition where love becomes biological, measurable, and governable.

The project began from a contradiction. While future technologies increasingly promise prediction, optimisation, and personalised decision-making, love remains valuable precisely because it resists full prediction. If the future were always clear, there would be no need for forecasts. In the same way, uncertainty is not only a source of anxiety, but also the condition that allows preferable futures to be imagined.

This research links microplastics, endocrine disruption, declining fertility, AI matchmaking, and emotional biometrics into one speculative problem framing. Rather than treating these issues as isolated topics, the project reads them as overlapping signals of a future in which human bodies become chemically altered, socially scored, and increasingly mediated by algorithmic systems.

Within this context, Cupidastic asks what forms of love, care, and human unpredictability might remain when intimacy becomes something that can be tracked, recommended, and optimised.

[image-3]

# Problem Framing

Microplastics are no longer external pollutants. Their accumulation within human tissues, endocrine systems, and reproductive organs suggests a slow transformation of biological conditions.

The research focuses on how microplastic-induced hormonal disruption may reshape ideas of reproduction, attraction, and care. Endocrine-disrupting substances such as BPA, phthalates, and dioxins are treated not only as environmental risks, but as forces that may alter the affective and reproductive body. In this speculative framework, reproduction is no longer only genetic, cultural, or political. It becomes entangled with plastic particulates, synthetic materials, and long-term hormonal instability.

The project is structured through four connected layers: microplastic futures, reproduction futurism, future biopolitics, and future love tracking. These layers move across macro scales of state regulation, meso scales of reproductive infrastructure, and micro scales of bodily heat, endocrine fluctuation, and emotional opacity.

Through this framing, Cupidastic Research asks not simply how reproduction might change, but what kinds of unplanned attraction, unreadable love, and reproductive non-events might persist outside algorithmic systems.

[image-4]

# Methodology

The project uses a speculative research methodology structured around four stages: sensing, forecasting, worldbuilding, and materialising.

Sensing began with interdisciplinary research into microplastic toxicity, reproductive health, algorithmic surveillance, emotional biometrics, and posthuman theory. Tools such as STEEP, PESTLE, weak signal analysis, annotated literature review, and visual mapping were used to locate early signals across environmental, social, technological, and anthropological domains.

Forecasting translated these signals into possible, plausible, probable, and preferable futures. Rather than using forecasting to predict a single outcome, the process was used to map emotional, ecological, and political stakes. The Futures Cone and scenario mapping helped position microplastic accumulation, declining fertility, and AI-mediated intimacy within longer temporal frames.

Worldbuilding then transformed these future conditions into narrative systems. The research developed speculative characters, public infrastructures, dating protocols, reproductive certificates, and love-compliance scenarios to make the future emotionally inhabitable rather than purely abstract.

Finally, materialising translated this world into artefacts, interfaces, and embodied interactions. Thermographic imagery, GSR-based affective sensing, recycled leather, hugging gestures, and wearable forms were explored as ways to visualise emotional signals while preserving ambiguity.

[pair-5-6]

# Research Findings

The research identified three key findings that shaped the final design direction.

First, emerging biological studies suggest a possible link between microplastic exposure and oxytocin dysregulation. Wang et al. examined how exposure to polystyrene microplastics reduced social behaviour and brain oxytocin levels in mice through the gut-brain axis. This became an empirical trigger for the project’s speculative premise: an “oxytocin recession” in which environmental toxicity begins to affect future sociality, intimacy, and reproductive behaviour.

Second, an affective sensing workshop at the Royal College of Art explored whether momentary love-spark events could be sensed through physiological and facial-expression data. Participants were placed in different relational pairings and asked to complete gaze and embrace exercises while galvanic skin response and AI-based facial expression analytics were recorded. The workshop suggested that affective intensity can already be partially operationalised through multimodal sensing.

Third, the workshop revealed concern around emotional biometric privacy. Participants expressed discomfort with the possibility that emotional data could be accessed by platforms, governments, or reproductive systems. This finding reframed the project from a simple visualisation of risk into a question of affective data sovereignty.

Together, these findings shifted Cupidastic toward a more critical design question: if future systems can measure attraction, compatibility, and reproductive potential, how might people protect the parts of intimacy that should remain unmeasured?

[image-7]

# Future Scenario

The scenario imagines a future in which microplastics are reclassified as endocrine-disrupting ambient pollutants and daily polymer counts become as normal as pollen or UV indexes.

As reproductive anxiety grows, dating platforms move from personality-based matching to biological compatibility scoring. Wearables, fertility clinics, and AI matchmaking systems begin to produce oxytocin indexes, hormone scores, and reproduction certificates. Love becomes a dashboard metric, while the right to reproduce becomes tied to chemical status and algorithmic legibility.

Within this world, Cupidastic emerges as a system for generating positive prediction errors. Users wear a vest-and-handle kit that produces thermal and physiological signals between consenting individuals. These signals create moments of attraction that are perceptible to each other, but difficult for algorithmic systems to fully classify.

The scenario does not propose a technological solution to microplastic toxicity or declining fertility. Instead, it asks whether human unpredictability can remain a form of resistance inside systems designed to optimise intimacy.

[image-8]

# Research to Object

This research became the conceptual foundation for the Cupidastic wearable system.

The object version of Cupidastic translates the research into a hug vest, sensing handles, material studies, and a speculative scenario film. While the object page focuses on the final artefact and interaction, this research version shows the underlying logic: how environmental toxicity, hormonal disruption, reproductive governance, AI matchmaking, and emotional privacy were connected into one future system.

Cupidastic Research therefore operates as the project’s worldbuilding engine. It defines the conditions under which the object becomes meaningful, and asks what kinds of love might still survive when both bodies and emotions become increasingly available to measurement.

`,

  contributors: [
    "Researcher — Hanna Park",
    "Designer / Scenario — Hanna Park",
    "Scenario Video Director — Jin Roh",
    "Creative Technologist — Chanwoo Lee",
    "Concept Photographer — Sohee Goo"
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


  thumbnailImages: [
    "/projects/cupidastic-research/cupidastic-research-thumbnail2.jpg",
    
  ],

  images: [
    "/projects/cupidastic-research/cupidastic-research-1.jpg",
    "/projects/cupidastic-research/cupidastic-research-2.jpg",
    "/projects/cupidastic-research/cupidastic-research-3.jpg",
    "/projects/cupidastic-research/cupidastic-research-4.jpg",
    "/projects/cupidastic-research/cupidastic-research-5.jpg",
    "/projects/cupidastic-research/cupidastic-research-6.jpg",
    "/projects/cupidastic-research/cupidastic-research-7.jpg",
    "/projects/cupidastic-research/cupidastic-research-8.jpg",
    "/projects/cupidastic-research/cupidastic-research-9.jpg"
  ],

  imageCaptions: [

  "[Figure 1_AI generative image of the 'Reproduction Futurism in Microplastics Age'] \n [Figure 2_A diagram that visualizes the Problem Framing through Worldbuilding] ]",
  "",
  "[Figure 3_A diagram that translates the Research into a defined Problem Framing]",
  "[Figure 4_A newly structured diagram of future methodologies, reinterpreted from those used in this project, Hanna Park (2025)]",
  "[Figure 5_ attatched photo of Hume.ai workshop at RCA, 2025] \n [Figure 6_ Researches about the ‘Microplastic-Oxytocine’ and ‘Global future fertility’ Forecasting (Wang, L. et al. (2024) 'Exposure to polystyrene microplastics reduces sociality and brain oxytocin levels through the gut-brain axis in mice,' The Science of the Total Environment, 945, p. 174026.), (Global fertility in 204 countries and territories, 2021)]",
  "",
  "[Figure 6_Future scenario sketch and Cupidastic system algorithm,2025]",
  "[Figure 7_ Ghost Signals: Designing Synthetic Love Ignition of Microplasticene, Hanna Park, Royal College of Art, 2025]",

],
},

  {
    slug: "Memento-Mori",
    number: "AT-O.2",
    title: "Memento Mori",
    description: "Critical Design / Future Ritual Object",
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
    number: "AT-O.1",
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

{
  slug: "mycorrhizal-research",
  number: "AT-R.1",
  title: "Envisioning Futures: Natural Intelligence",
  description: "More-than-Human / Mycorrhizal Design",
  type: "Research",
  year: "2025",

  imageMaxWidth: "1200px",
  pairMaxWidth: "1400px",

  summary:
    "A research project exploring mycorrhizal networks as models for more-than-human coexistence, ecological intelligence, and reciprocal communication.",

  content: `

[image-1]

# Research Overview

Mycorrhizal Research explores fungal networks as models for more-than-human coexistence, ecological intelligence, and reciprocal communication.

Developed as part of a collaborative research project at the Royal College of Art Design Futures programme, the project investigates how underground fungal systems facilitate exchange, communication, and mutual dependency between plants, fungi, and wider ecosystems. Rather than treating fungi as passive biological matter, the research approaches mycorrhizal networks as active infrastructures of relation.

The project responds to ecological disruption, deforestation, and the fragility of more-than-human systems, with a particular focus on the Amazon rainforest as a site of complex interspecies dependency. Mycorrhizal networks allow plants and fungi to exchange water, minerals, carbohydrates, nitrogen, phosphorus, amino acids, information, and signals. These interactions suggest that intelligence may not be located in a single organism, but distributed across relationships, dependencies, and environmental feedback loops.

Through this lens, the project asks how design might move beyond human-centred problem-solving and instead learn from ecological systems that operate through cooperation, reciprocity, and long-term adaptation. The large-scale poster visualises these exchanges as a form of natural intelligence, translating invisible underground interactions into a public-facing research diagram.

[pair-2-3]

# Research Publication

The final outcome includes a research publication titled The Tales of Natural Intelligence.

The publication compares mycorrhizal systems with human social, political, economic, and geographical structures. Through illustrated spreads, annotated diagrams, and speculative parallels, the research examines how fungal networks can become a lens for rethinking governance, resource exchange, resilience, and interdependence.

Rather than presenting mycorrhizal networks as a metaphor alone, the publication uses them as a critical framework for questioning how human systems define intelligence, value, and survival. Economic parallels are used to examine exchange and distribution; political parallels consider governance, marginality, and systemic imbalance; geographical visualisations connect invasive species, territorial movement, and ecological disruption.

By placing ecological systems beside human systems, the publication does not claim that nature offers a simple solution. Instead, it uses comparison as a design research method: a way to make hidden assumptions visible and to ask what forms of intelligence are ignored when human-centred systems become the default model for decision-making.

[pair-4-5]

# Reflection

Mycorrhizal Research questions whether intelligence must be understood through human cognition, language, or technological computation.

By examining fungal networks as distributed systems of care, exchange, and adaptation, the project opens a way to think about design as participation rather than control. It suggests that future ecological design may depend less on inventing new systems, and more on recognising the sophisticated systems that already exist beneath us.

The project therefore positions research communication as a design practice in itself. Through diagrams, publication design, and visual storytelling, invisible ecological relations become tangible enough to discuss, question, and reinterpret. In doing so, the project reframes more-than-human intelligence not as a distant speculative idea, but as an existing condition that design must learn to notice.

`,

  contributors: [
    "Researcher — Hanna Park",
    "Collaborator — Enze Lian",
    "Collaborator — Chiara Patatti",
    "Collaborator — Neha Reddy",
    "Collaborator — Filippo Torlonia"
  ],

  literature: [
    "Chen et al. — Arbuscular mycorrhizal fungi reduce aged sorbed sulfur in plant invasion controlled by phosphorus concentration (2020)",
    "European Parliament — Biodiversity loss: what is causing it and why is it a concern? (2020)",
    "Bey, K.G., Baraloto, C. and Fine, P.V.A. — Strong coupling of plant and fungal community structure across western Amazonian rainforests (2013)"
  ],

  thumbnailLayout: "equal",
  thumbnailImages: [
    "/projects/mycorrhizal/mycorrhizal-1.jpg",
    "/projects/mycorrhizal/mycorrhizal-2.jpg"
  ],

  images: [
    "/projects/mycorrhizal/mycorrhizal-1.jpg",
    "/projects/mycorrhizal/mycorrhizal-2.jpg",
    "/projects/mycorrhizal/mycorrhizal-3.jpg",
    "/projects/mycorrhizal/mycorrhizal-4.jpg",
    "/projects/mycorrhizal/mycorrhizal-5.jpg",
    
  ],
},

];

export default projects;