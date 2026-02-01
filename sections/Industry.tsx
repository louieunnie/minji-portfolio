type Props = {
  lang: "ko" | "en";
};
export default function Industry({ lang }: Props) {
  const industryExperience = [
    { 
      id: "industry-place-ai",
      title: "Place AI Local Domain Classification Development",
      company: "NAVER Corporation · Internship",
      period: "Dec 2025 – Jan 2026",
      description: [
        "Designed and implemented a CLI tool for test data versioning and archiving to support large-scale evaluation workflows.",
        "Constructed IR test datasets using rerankers and LLM-as-a-Judge evaluation frameworks.",
        "Designed a local-domain query detection pipeline, including data construction, taxonomy definition, and LLM-based labeling.",
        "Trained and evaluated encoder-based models, achieving 93.5% accuracy and 260 QPS.",
        "Conducted supervised fine-tuning experiments on small language models (SLMs).",
      ],
      tech: [
        "Information Retrieval",
        "LLM Evaluation",
        "Data Construction",
        "SLM Supervised Fine-Tuning",
        "Encoder Fine-Tuning",
      ],
      style: {
        container: "border-lime-300 bg-lime-50",
        pill: "bg-lime-100 text-lime-900",
      },
    },
  ];

  return (
    <section id="industry" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        INDUSTRY EXPERIENCE
      </h2>
  <div className="max-w-4xl mx-auto space-y-8">
    {industryExperience.map((item) => (
      <div
        key={item.title}
        id = {item.id}
        className={`scroll-mt-32 rounded-2xl border shadow-sm p-8 ${item.style.container}`}
      >
        <h3 className="text-xl font-semibold text-gray-900 mb-1">
          {item.title}
        </h3>

        <div className="text-sm text-gray-600 mb-4">
          {item.company} · {item.period}
        </div>

        <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
          {item.description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-3">
          {item.tech.map((t) => (
            <span
              key={t}
              className={`px-3 py-1 rounded-full text-sm ${item.style.pill}`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>
  );
}