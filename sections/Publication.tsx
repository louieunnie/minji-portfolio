type Props = {
  lang: "ko" | "en";
};

export default function Publication({ lang }: Props) {
  const content = {
    ko: {
      title: "출판물",
      desc: "[1] Anchor-Guided Collaborative Grounding for Context-aware Grounded Multimodal Named Entity Recognition, Under Review \n Minji Kim, Yusol Oh, Midan Shim, Kaehyun Um, Kyong-Ho Lee",
    },
    en: {
      title: "PUBLICATION",
      desc: "[1] Anchor-Guided Collaborative Grounding for Context-aware Grounded Multimodal Named Entity Recognition, Under Review \n Minji Kim, Yusol Oh, Midan Shim, Kaehyun Um, Kyong-Ho Lee",
    },
  };

  return (
    <section id="publication" className="py-24">
      <h2 className="text-3xl font-bold mb-12 text-center">
        {content[lang].title}
      </h2>
      <p className="whitespace-pre-line text-gray-600">
        {content[lang].desc}
      </p>
    </section>
  );
}
