type Props = {
  lang: "ko" | "en";
};

export default function Engineering({ lang }: Props) {
  const engineering = [
    {
      id: "engineering-portfolio",
      title: "Personal Portfolio Website",
      description: [
        "Designed and developed a personal portfolio website using Next.js.",
        "Implemented reusable UI components and deployed the website.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      github: "https://github.com/louieunnie/minji-portfolio",
      style: {
        container: "border-gray-200 bg-gray-50",
        pill: "bg-gray-100 text-gray-800",
      },
    },
    {
    id: "engineering-profiling",
    title: "Performance Profiling and Optimization of Inference Pipeline",
    context: "Personal Engineering Project",
    description: [
        "Profiled latency bottlenecks in an LLM inference pipeline using PyTorch profiler.",
        "Reduced end-to-end inference latency by adopting FP16 inference and mixed-precision optimization.",
        ],
    github: "https://github.com/louieunnie/transformer-inference-gpu-profiling",
    tech: [
        "PyTorch",
        "Inference Optimization",
        "FP16 Inference",
        "Mixed Precision",
        "Performance Profiling",
        ],
    style: {
        container: "border-gray-200 bg-gray-50",
        pill: "bg-gray-100 text-gray-800",
        },
    },
    {
    id: "engineering-gmner",
    title: "Fine-tuning Vision-Language Models for GMNER",
    context: "Personal Engineering Project",
    description: [
        "Fine-tuned an open-source vision–language model (LLaVA-v1.5-7B) for entity grounding in grounded multimodal named entity recognition (GMNER).",
        "Explored the feasibility of end-to-end entity grounding using a VLM when entity spans and types are provided as structured inputs.",
        "Designed prompt templates and data formatting strategies tailored to GMNER tasks.",
        "Conducted experiments on the Twitter-GMNER and Twitter-FMNERG datasets to evaluate grounding performance and inference latency.",
        ],
    github: "https://github.com/louieunnie/llava_fintune_gmner",
    tech: [
        "Python",
        "PyTorch",
        "Vision-Language Model",
        "LLaVA",
        "Prompt Engineering",
        "Multimodal Fine-Tuning",
        ],
    style: {
        container: "border-gray-200 bg-gray-50",
        pill: "bg-gray-100 text-gray-800",
        },
    },
    {
    id: "engineering-handy",
    title: "HANDY Web Platform Development",
    context: "Personal Engineering Project",
    description: [
        "Developed the complete backend for an AI-based sign language learning web service aimed at lowering entry barriers for Korean Sign Language education.",
        "Designed and implemented RESTful APIs for user authentication, dictionary search, vocabulary management, and learning progress tracking.",
        "Built database schemas and backend logic to support multiple user-defined vocabulary lists and learning features.",
        "Deployed and operated the backend services on AWS and Cloudtype, ensuring stable online availability.",
        ],
    tech: [
        "Node.js",
        "MySQL",
        "REST API",
        "Postman",
        "AWS",
        "Cloudtype",
        "Backend Development",
        ],
    award: "Excellence Award (Third Place), Graduation Exhibition, Dept. of Computer Engineering, Hongik University",
    github: "https://github.com/GraduationProject20232023/Backend",
    style: {
        container: "border-gray-200 bg-gray-50",
        pill: "bg-gray-100 text-gray-800",
        },
    },
  ];

  return (
    <section id="engineering" className="py-24">
        <h2 className="text-3xl font-bold mb-12 text-center">
        ENGINEERING
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
        {engineering.map((engineeringItem) => (
            <div
            key={engineeringItem.id}
            id={engineeringItem.id}
            className={`scroll-mt-32 rounded-2xl border shadow-sm p-8 ${engineeringItem.style.container}`}
            >
            {/* 제목 + 기간 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                {engineeringItem.title}
                </h3>

                {engineeringItem.period && (
                <span className="text-sm text-gray-500">
                    {engineeringItem.period}
                </span>
                )}
            </div>

            {/* 설명 */}
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
                {engineeringItem.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
                ))}
            </ul>

            {/* 기술 태그 */}
            <div className="flex flex-wrap gap-3 mb-4">
                {engineeringItem.tech.map((t) => (
                <span
                    key={t}
                    className={`px-3 py-1 rounded-full text-sm ${engineeringItem.style.pill}`}
                >
                    {t}
                </span>
                ))}
            </div>

           {engineeringItem.award && (
            <div className="mt-4 text-sm text-gray-700">
                <span className="font-bold">🏆 </span>{" "}
                {engineeringItem.award}
            </div>
            )}


            <div className="mt-6 pt-4 border-t border-gray-200">
            {engineeringItem.github && (
                <a
                href={engineeringItem.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium text-gray-700 hover:underline"
                >
                GitHub →
                </a>
            )}
            </div>
            </div>
        ))}
        </div>
    </section>
    );

}
