type Props = {
  lang: "ko" | "en";
};

export default function Research() {
  const research = [
    { 
      id: "research-gmner",
      title: "Grounded Multimodal Named Entity Recognition (GMNER)",
      period: "2025.03 – 2026.02",
      description: [
        "Conducted research on GMNER using VLMs and LLMs.",
        "Designed and evaluated grounded multimodal NER pipelines.",
      ],
      tech: [
        "Vision-Language Model",
        "Multimodal NER",
        "Entity Visual Detection",
        "PyTorch",
      ],
      style: {
        container: "border-blue-200 bg-blue-50",
        pill: "bg-blue-100 text-blue-900",
      },
    },
    {
      id: "research-kgqa",
      title: "Knowledge Graph Question Answering (KGQA)",
      period: "2024.03 – 2025.02",
      description: [
        "Constructed and labeled large-scale LLM training datasets.",
        "Fine-tuned transformer-based language models for downstream tasks.",
      ],
      tech: [
        "Transformers",
        "Hugging Face",
        "LLM Data Construction",
        "Model Fine-Tuning",
      ],
      style: {
        container: "border-blue-200 bg-blue-50",
        pill: "bg-blue-100 text-blue-900",
      },
    },
    { 
      id: "research-protein-peptide",
      title: "Protein–Peptide Docking Complex Prediction",
      affiliation: "Bioinformatics Lab, Hongik University",
      period: "Mar 2023 – Feb 2024",
      description: [
        "Studied a GNN-based decoy evaluation model for protein–peptide docking complex prediction.",
        "Analyzed residue-level interactions to assess docking accuracy and interaction quality.",
        "Participated in the NRF-funded project “Deep Learning–Based Ultra-Fast Virtual Peptide Screening.”",
      ],
      tech: [
        "Graph Neural Network",
        "Bioinformatics",
        "Protein Docking",
        "Deep Learning",
      ],
      style: {
        container: "border-blue-200 bg-blue-50",
        pill: "bg-blue-100 text-blue-900",
      },
    },
  ];

  return (
    <section id="research" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        RESEARCH
      </h2>

      <div className="max-w-4xl mx-auto space-y-8">
        {research.map((researchItem) => (
          <div
            key={researchItem.title}
            id={researchItem.id}
            className={`scroll-mt-32 rounded-2xl border shadow-sm p-8 ${researchItem.style.container}`}
          >
            {/* 제목 + 기간 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {researchItem.title}
              </h3>
              <span className="text-sm text-gray-500">
                {researchItem.period}
              </span>
            </div>

            {/* 설명 */}
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              {researchItem.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            {/* 기술 스택 */}
            <div className="flex flex-wrap gap-3">
              {researchItem.tech.map((t) => (
                <span
                  key={t}
                  className={`px-3 py-1 rounded-full text-sm ${researchItem.style.pill}`}
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
