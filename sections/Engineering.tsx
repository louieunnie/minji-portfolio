type Props = {
  lang: "ko" | "en";
};

export default function Engineering({ lang }: Props) {
  const engineering = [
    {
      id: "engineering-portfolio",
      title: "Personal Portfolio Website",
      period: "2024.01",
      description: [
        "Designed and developed a personal portfolio website using Next.js.",
        "Implemented multilingual support and reusable UI components.",
      ],
      tech: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      github: "https://github.com/your-id/handy",
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
        "Reduced end-to-end inference latency by optimizing batching and memory access patterns.",
        ],
    github: "https://github.com/your-id/handy",
    tech: [
        "Python",
        "PyTorch Profiler",
        "Performance Optimization",
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
        "Profiled latency bottlenecks in an LLM inference pipeline using PyTorch profiler.",
        "Reduced end-to-end inference latency by optimizing batching and memory access patterns.",
        ],
    github: "https://github.com/your-id/handy",
    tech: [
        "Python",
        "PyTorch Profiler",
        "Performance Optimization",
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
        "Developed a web platform named HANDY for personal use.",
        "Implemented user-friendly interfaces and responsive design.",
        ],
    tech: [
        "Python",
        "PyTorch Profiler",
        "Performance Optimization",
        ],
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
            key={engineeringItem.title}
            id ={engineeringItem.id}
            className={`rounded-2xl border shadow-sm p-8 ${engineeringItem.style.container}`}
          >
            {/* 제목 + 기간 */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">
                {engineeringItem.title}
              </h3>
              <span className="text-sm text-gray-500">
                {engineeringItem.period}
              </span>
            </div>

            {/* 설명 */}
            <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-4">
              {engineeringItem.description.map((desc, idx) => (
                <li key={idx}>{desc}</li>
              ))}
            </ul>

            {/* 기술 스택 */}
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

            {/* 링크 영역 */}
            <div className="flex gap-4 text-sm">
            {engineeringItem.github && (
                <a
                href={engineeringItem.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:underline"
                >
                GitHub →
                </a>
            )}

            {/* {engineeringItem.demo && (
                <a
                href={engineeringItem.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gray-700 hover:underline"
                >
                Live Demo →
                </a>
            )} */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
