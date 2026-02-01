export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[70vh] md:min-h-[60vh] flex items-center px-6 md:px-16"
    >
      <div className="max-w-3xl">
        {/* HELLO */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-none mb-10">
          Hello!
        </h1>

        {/* 메인 설명 */}
        <p className="max-w-3xl text-xl md:text-2xl text-gray-700 leading-snug mb-6">
          I am Minji Kim, an aspiring AI researcher and engineer focused on building practical
          systems grounded in solid research.
        </p>

        {/* 서브 설명 */}
        <p className="max-w-3xl text-gray-600 text-base md:text-lg leading-relaxed mb-10">
          My recent work centers on multimodal and LLM-based methods that bridge academic
          research with real-world applications.
        </p>

        {/* 버튼 */}
        <div className="flex gap-4">
          <a
            href="/MinjiKim_CV.pdf"
            download
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium
                       hover:bg-gray-800 transition"
          >
            Download CV
          </a>

          <a
            href="https://github.com/louieunnie"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium
                       hover:bg-gray-100 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/minjikim99/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full border border-gray-300 text-sm font-medium
                       hover:bg-gray-100 transition"
          >
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
}
