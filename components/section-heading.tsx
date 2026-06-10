export function SectionHeading({ kicker, title, copy }: { kicker: string; title: string; copy: string }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="kicker mb-3">{kicker}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-normal text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-white/64 md:text-lg">{copy}</p>
    </div>
  );
}
