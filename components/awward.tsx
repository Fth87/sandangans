import { cn } from '@/lib/utils';
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from '@tabler/icons-react';
import { Award, Leaf, Sparkles, Users } from 'lucide-react';

// Awards & Recognition
const awards = [
  {
    year: 2023,
    title: 'Sustainable Fashion Award',
    organization: 'Fashion Innovation Summit',
    icon: Award,
  },
  {
    year: 2022,
    title: 'Environmental Excellence',
    organization: 'Green Business Association',
    icon: Leaf,
  },
  {
    year: 2023,
    title: 'Community Impact Award',
    organization: 'Social Enterprise Forum',
    icon: Users,
  },
  {
    year: 2022,
    title: 'Innovation in Sustainability',
    organization: 'Textile Industry Association',
    icon: Sparkles,
  },
];
export function Awward() {
  const features = [
    {
      title: 'Sustainable Fashion Award',
      description: 'Fashion Innovation Summit',
      year: 2023,
      icon: <Award />,
    },
    {
      year: 2022,
      title: 'Environmental Excellence',
      description: 'Green Business Association',
      icon: <Leaf />,
    },
    {
      year: 2023,
      title: 'Community Impact Award',
      description: 'Social Enterprise Forum',
      icon: <Users />,
    },
    {
      year: 2022,
      title: 'Innovation in Sustainability',
      description: 'Textile Industry Association',
      icon: <Sparkles />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 pb-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index, year }: { title: string; year: number; description: string; icon: React.ReactNode; index: number }) => {
  return (
    <div className={cn('flex flex-col lg:border-r  py-10 relative group/feature ', (index === 0 || index === 4) && 'lg:border-l ', index < 4 && 'lg:border-b ')}>
      {index < 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100  to-transparent pointer-events-none" />}
      {index >= 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100  to-transparent pointer-events-none" />}
      <div className="mb-4 relative z-10 px-10 text-brown-600 ">{icon}</div>
      <div className="text-lg font-bold  relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-brown-300  group-hover/feature:bg-brown-500 transition-all duration-200 origin-center" />

        <p className="text-sm text-brown-400  max-w-xs relative z-10 px-1">{year}</p>
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-brown-700 dark:text-neutral-100 font-title">{title}</span>
      </div>
      <p className="text-sm text-brown-600  max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};
