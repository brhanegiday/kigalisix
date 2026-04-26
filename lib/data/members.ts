export type Member = {
  slug: string;
  index: string;
  name: string;
  tags: string[];
  bioShort: string;
  bioLong: string; // paragraphs separated by \n\n
  place: string;
  links?: {
    linkedin?: string;
    github?: string;
    site?: string;
    email?: string;
  };
};

export const members: Member[] = [
  {
    slug: "brhane-giday",
    index: "01",
    name: "Brhane Giday",
    tags: ["Software", "UX", "COO", "AI"],
    bioShort:
      "Builds full-stack systems and the experiences around them. Currently working on labor market intelligence and African digital public infrastructure.",
    // TODO: verify current projects and role title with Brhane before launch
    bioLong:
      "Brhane builds full-stack systems with consistent attention to how people actually use them. His current work is in labor market intelligence - platforms that make visible how work gets found, what qualifications signal in practice, and where African labor markets are underserved by the tools that currently exist. He holds the engineering question and the UX question at once, which shapes everything he ships.\n\nWithin the collective he serves as COO, thinking about how the group functions as well as what it builds. He grew up in Axum, Ethiopia, and is based in Kigali - a trajectory that shows up directly in the problems he chooses.",
    place: "Kigali \u00b7 Axum",
    // TODO: add links before launch
  },
  {
    slug: "julius-zannu",
    index: "02",
    name: "Julius Zannu",
    tags: ["Cloud", "Software", "Entrepreneurship"],
    bioShort:
      "Cloud and software engineer with an entrepreneur's instinct for what scales - and what doesn't yet.",
    // TODO: verify background details with Julius before launch
    bioLong:
      "Julius builds cloud-native infrastructure and full-stack applications with a bias toward systems that hold up under growth. He thinks about scale not as a hypothetical but as a constraint worth designing for from the start - and that shapes his technical choices at the architecture level, not as an afterthought.\n\nHis background combines software engineering with entrepreneurship, which gives him a practical orientation: the question is not just whether something works but whether it can be trusted, maintained, and extended. He is most interested in the distance between a working prototype and a system that survives the real world.",
    place: "Kigali",
    // TODO: add links before launch
  },
  {
    slug: "wendy-esuman",
    index: "03",
    name: "Wendy Esuman",
    tags: ["Product", "Data Science", "Education"],
    bioShort:
      "Connects product thinking to data science, with a particular interest in the future of education on the continent.",
    // TODO: verify specific focus areas with Wendy before launch
    bioLong:
      "Wendy works at the boundary of product management and data science - the point where qualitative insight and quantitative evidence have to be reconciled before a good decision can be made. Her particular focus is education: how data can illuminate what learning outcomes are actually happening, where digital tools are genuinely helping, and where they introduce more friction than they remove.\n\nShe brings methodological discipline to problems that are often underspecified - knowing when to reach for a model and when the right move is sharper problem definition first. Her context is Africa-first: she starts from how education actually works on the continent, not from solutions designed elsewhere and retrofitted.",
    place: "Kigali",
    // TODO: add links before launch
  },
  {
    slug: "roy-esibe",
    index: "04",
    name: "Roy Esibe",
    tags: ["Research", "LLM", "GenAI"],
    bioShort:
      "Researches large language models and applied generative AI - asking how they actually work, and where they don't.",
    // TODO: verify research focus and affiliations with Roy before launch
    bioLong:
      "Roy researches large language models with a focus on the gap between stated capability and measured behavior - what models claim to do and what happens when you test them carefully on problems that matter. His work spans evaluation methodology, failure analysis, and the harder question of knowing when a system is actually trustworthy enough to deploy.\n\nHe approaches AI research with the skepticism of someone who has read the benchmarks carefully enough not to trust them uncritically. He is most interested in the questions that come after the paper: what holds under scrutiny, what breaks at scale, and what makes the practical difference between a system that works and one that only appears to.",
    place: "Kigali",
    // TODO: add links before launch
  },
  {
    slug: "michael-nwankwo",
    index: "05",
    name: "Michael Nwankwo",
    tags: ["Software", "AI Systems", "Research"],
    bioShort:
      "Builds AI-enabled systems from research prototype to production. Equally at home in a paper draft and a deploy log.",
    // TODO: verify specific projects with Michael before launch
    bioLong:
      "Michael builds AI-enabled systems end to end - from the research question through to the production infrastructure that keeps them running. He has shipped ML pipelines that needed to survive real traffic and written research that required precise empirical claims, sometimes on the same problem. He is most useful at the boundary between those two modes.\n\nHe thinks of deployment as a form of research: the gap between what a model does in evaluation and what it does in production is itself information, and often more important information than the original benchmark. That orientation - taking production behavior seriously as a scientific question - is what distinguishes how he approaches AI systems work.",
    place: "Kigali",
    // TODO: add links before launch
  },
  {
    slug: "godbright-nixon",
    index: "06",
    name: "Godbright Nixon",
    tags: ["React", "TypeScript", "FastAPI", "AI/ML"],
    bioShort:
      "Ships fast across the stack - React and TypeScript on the front, FastAPI and ML on the back.",
    // TODO: verify specific projects with Godbright before launch
    bioLong:
      "Godbright builds across the full stack with equal fluency in TypeScript frontends and FastAPI backends with ML components. He moves fast without sacrificing quality - shipping interfaces that are genuinely well-made, then connecting them to backends that do something useful. He is drawn to projects where both layers have to be right simultaneously.\n\nHis particular interest is the integration layer: where model output meets the interface that presents it, and where getting the handoff wrong undermines an otherwise good system. He thinks the front-of-stack decisions in AI applications are more consequential than they appear, because the wrapper shapes every user experience regardless of how capable the model underneath is.",
    place: "Kigali",
    // TODO: add links before launch
  },
];
