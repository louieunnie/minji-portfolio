type Props = {
  lang: "ko" | "en";
};

export default function Research({ lang }: Props) {
  const research = [
    { 
      id: "research-gmner",
      title: "Grounded Multimodal Named Entity Recognition (GMNER)",
      period: "2025.03 – 2026.02 (Paper Under Review)",
      description: [
        "Proposed an anchor-guided collaborative grounding framework for grounded multimodal NER.",
        "Addressed ambiguities in visually similar entities by modeling inter-entity relationships and fine-grained entity types.",
        "Achieved state-of-the-art performance on GMNER benchmarks, outperforming large-scale pretrained vision–language models in grounding precision.",
      ],
     tech: [
        "GMNER",
        "Multimodal Information Extraction",
        "Vision-Language Model",
        "Entity Grounding",
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
        "Proposed a novel multi-hop KGQA model that explicitly models question intent.",
        "Identified relation-specific keyphrases and predicted answer entity types using KG schema information.",
        "Achieved superior performance on WebQSP and CWQ compared to state-of-the-art models.",

      ],
      tech: [
        "Knowledge Graph",
        "KGQA",
        "Transformers",
        "Intent Modeling",
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
        "Participated in the “Deep Learning–Based Ultra-Fast Virtual Peptide Screening.” funded by the National Research Foundation of Korea",
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
