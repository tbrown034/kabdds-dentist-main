import Image from "next/image";

type HeroProps = {
  title: string;
  subhead: string;
  imageUrl: string;
};

export default function Hero({ title, subhead, imageUrl }: HeroProps) {
  return (
    <div className="relative min-h-75vh hero">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={imageUrl}
          alt="Background Image"
          fill={true}
          className="absolute z-0 object-cover w-full h-full"
          priority
        />
      </div>
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
