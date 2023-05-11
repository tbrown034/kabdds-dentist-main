import Image from "next/image";
type HeroProps = {
  title: string;
  subhead: string;
  imageUrl: string;
};

export default function Hero({ title, subhead, imageUrl }: HeroProps) {
  return (
    <div className="relative min-h-screen hero">
      <Image
        src={imageUrl}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        className="absolute z-0"
      />
      <div className="absolute z-10 hero-overlay bg-opacity-60"></div>
      <div className="relative z-20 text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">{subhead}</p>
          <button className="btn btn-primary">Make an Appointment</button>
        </div>
      </div>
    </div>
  );
}
