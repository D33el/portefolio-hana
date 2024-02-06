export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: any;
}) {
  return (
    <section id={id} className="w-[80%]  pt-20">
      <div className=" flex items-center gap-5 pb-10">
        <h1 className="text-3xl text-heading sm:text-5xl">/ {title}</h1>
        <div className="hidden w-96 border-[.5px] border-secondaryLight md:block"></div>
      </div>
      {children}
    </section>
  );
}
