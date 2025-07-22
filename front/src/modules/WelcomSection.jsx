import Image from "next/image";

function WelcomSection() {
  return (
    <section className="mx-auto 2xl:max-w-[90rem]">
      <Image
        src="/images/welcom.png"
        priority
        width={1440}
        height={10}
        className="h-auto w-auto"
        alt="عکس خوش امدید"
      />
    </section>
  );
}

export default WelcomSection;
