import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface CardHeroProps {
  title: string;
  description: string;
  image: string;
  className?: string;
}

export default function CardHero({ title, description, image, className }: CardHeroProps) {
  return (
    <div className={cn('absolute w-56 pl-3 pr-8 py-2 bg-brown-100 shadow-[4px_4px_10px_0px_rgba(0,0,0,0.10)] justify-start items-start gap-2 inline-flex overflow-hidden ' + className)}>
      <img className="w-16 h-16" src={image} />
      <div className="flex-col justify-center items-start gap-1 inline-flex">
        <div className="text-black text-base font-medium font-title">{title}</div>
        <div className="self-stretch text-[#7f716a] text-[8px] font-normal font-sans">{description}</div>
      </div>

      <div className="bg-brown-200 absolute right-0 bottom-0 hover:cursor-pointer">
        <ArrowUpRight size={32} color="white" className="w-8 h-8" />
      </div>
    </div>
  );
}
