type Props = {
  lang: "en" | "ko";
};
export default function Skills({ lang }: Props) {
  // const skillCards = [
  //   {
  //     title: "During my Master's study, I mainly studied the following topics.",
  //     items: [
  //       "Grounded Multimodal NER",
  //       "Multimodal Information Extraction",
  //       "Vision-Language Model Fine-Tuning",
  //       "Temporal Knowledge Graph Forecasting",
  //       "KGQA (Knowledge Graph Question Answering)",
  //       "PyTorch",
  //       "TensorFlow",
  //       "Transformers",
  //       "Hugging Face",
  //     ],
  //     style: {
  //       container: "border-sky-200 bg-sky-50",
  //       pill: "bg-sky-100 text-sky-900",
  //     },
  //   },
  //   {
  //     title: "Through projects and internships, I have practically worked on the following.",
  //     items: [
  //       "CLI Tool Development with Typer and Github",
  //       "Data Construction with LLMs",
  //       "Data Labeling with LLMs",
  //       "Prompt Engineering",
  //       "SLM Supervised Fine-Tuning (SFT)", 
  //       "Small Encoder Fine-Tuning",
  //       "Data Augmentation",
  //       "Data Quality Evaluation",
  //       "Model Evaluation",
  //       "Profiling and Optimization",
  //       "Decoy Evaluation in Bioinformatics",
  //     ],
  //     style: {
  //       container: "border-amber-300 bg-amber-50",
  //       pill: "bg-amber-100 text-amber-950",
  //   }
  //   },
  //   {
  //     title: "I have a solid foundation in general Software Engineering skills.",
  //     items: [
  //       "Python",
  //       "SQL",
  //       "C++",
  //       "Node.js",
  //       "AWS",
  //       "GitHub Actions",
  //     ],
  //     style: {
  //       container: "border-gray-200 bg-gray-50",
  //       pill: "bg-gray-100 text-gray-900",
  //     },
  //   },
  // ];
    const skillCards = [
    {
      title: "AI Research & Multimodal Systems",
      items: [
        {
          name: "Grounded Multimodal NER",
          target: "research-gmner",
        },
        {
          name: "Multimodal Information Extraction",
          target: "research-gmner",
        },
        {
          name: "Vision-Language Model Fine-Tuning",
          target: "research-gmner",
        },
        {
          name: "Knowledge Graph Question Answering (KGQA)",
          target: "research-kgqa",
        },
        {
          name: "Temporal Knowledge Graph Forecasting",
          target: null,
        }
      ],
      style: {
        container: "border-blue-200 bg-blue-50",
        pill: "bg-blue-100 text-blue-900",
      },
    },
    {
      title: "Applied LLM & Data-Centric AI",
      items: [
        {
          name: "Prompt Engineering",
          target: "industry-place-ai",
        },
        {
          name: "Data Generation with LLMs",
          target: "industry-place-ai",
        },
        {
          name: "SLM Supervised Fine-Tuning (SFT)",
          target: "industry-place-ai",
        },
        {
          name: "Small Encoder Fine-Tuning",
          target: "industry-place-ai",
        },
        {
          name:  "Data Augmentation",
          target: "industry-place-ai",
        },
        {
          name:  "Model Evaluation",
          target: "industry-place-ai",
        },
        {
          name:  "Profiling and Optimization",
          target: "industry-place-ai",
        },
        {
          name:  "Data Quality Evaluation",
          target: "industry-place-ai",
        },
      ],
      style: {
        container: "border-lime-200 bg-lime-50",
        pill: "bg-lime-100 text-lime-950",
      },
    },
    {
      title: "Software Engineering & MLOps",
      items: [
        {
          name:    "Python",
          target: null,
        },
        {
          name:    "C++",
          target: null,
        },
        {
          name:   "SQL",
          target: "engineering-handy",
        },
        {
          name:   "Node.js",
          target: "engineering-handy",
        },
        {
          name:   "AWS",
          target: "engineering-handy",
        },
        {
          name:   "GitHub Actions",
          target: "industry-place-ai",
        },
        {
          name:  "CLI Tool Development",
          target: "industry-place-ai",
        },
      ],
      style: {
        container: "border-gray-200 bg-gray-50",
        pill: "bg-gray-100 text-gray-900",
      },
    },
  ];



  return (
    <section id="skills" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        SKILLS
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
      {skillCards.map((card) => (
        <div
          key={card.title}
          className={`rounded-2xl border shadow-sm p-8 ${card.style.container}`}
        >
          <h3 className="font-semibold text-gray-900 mb-4">
            {card.title}
          </h3>

          <div className="flex flex-wrap gap-3">
            {card.items.map((item) =>
              item.target ? (
                <a
                  key={item.name}
                  href={`#${item.target}`}
                  className={`px-4 py-2 rounded-full text-sm
                              cursor-pointer hover:underline
                              ${card.style.pill}`}
                >
                  {item.name}
                </a>
              ) : (
                <span
                  key={item.name}
                  className={`px-4 py-2 rounded-full text-sm
                              opacity-70 cursor-default
                              ${card.style.pill}`}
                >
                  {item.name}
                </span>
              )
            )}

          </div>
        </div>
      ))}
    </div>

    </section>
  );
}
