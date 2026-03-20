import Image from "next/image";
import { cn } from "@/lib/utils"; // ← added

interface HomeCardProps {
  className: string;
  img: string;
  title: string;
  description: string;
  handleClick: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <div
      className={cn('px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer', className)} // ← added className prop
      onClick={handleClick} // ← was () => {}
    >
      <div className="flex-center glassmorphism size-12 rounded-[10px]">
        <Image
          src={img} // ← was hardcoded
          alt={title} // ← was hardcoded
          width={27}
          height={27}
        />
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{title}</h1> {/* ← was hardcoded */}
        <p className="text-lg font-normal">{description}</p> {/* ← was hardcoded */}
      </div>
    </div>
  );
};

export default HomeCard;