type Props = {
  lang: "ko" | "en";
};

export default function Publication({ lang }: Props) {
  const content = {
    ko: {
      title: "출판물",
      desc: "프론트엔드 개발자로서 다양한 프로젝트 경험이 있습니다.",
    },
    en: {
      title: "PUBLICATION",
      desc: "I am a frontend developer with experience in various projects.",
    },
  };

  return (
    <section id="publication" className="py-24">
      <h2 className="text-3xl font-bold mb-6">
        {content[lang].title}
      </h2>
      <p className="text-gray-600">
        {content[lang].desc}
      </p>
    </section>
  );
}
