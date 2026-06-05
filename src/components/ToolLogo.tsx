
import { useState, useCallback } from 'react';

interface ToolLogoProps {
  logo: string;
  name: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const sizeClasses = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-10 h-10',
  xl: 'w-12 h-12',
  '2xl': 'w-24 h-24',
};

const gradientColors = [
  'bg-gradient-to-br from-blue-500 to-blue-600',
  'bg-gradient-to-br from-purple-500 to-purple-600',
  'bg-gradient-to-br from-green-500 to-green-600',
  'bg-gradient-to-br from-orange-500 to-orange-600',
  'bg-gradient-to-br from-pink-500 to-pink-600',
  'bg-gradient-to-br from-cyan-500 to-cyan-600',
  'bg-gradient-to-br from-red-500 to-red-600',
  'bg-gradient-to-br from-indigo-500 to-indigo-600',
];

const getRandomGradient = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  return gradientColors[Math.abs(hash) % gradientColors.length];
};

export default function ToolLogo({ logo, name, size = 'md' }: ToolLogoProps) {
  const [logoFailed, setLogoFailed] = useState(false);
  const handleLogoError = useCallback(() => setLogoFailed(true), []);
  const logoInitial = name.charAt(0).toUpperCase();
  const randomGradient = getRandomGradient(name);

  if (logoFailed || !logo) {
    return (
      <div className={`${sizeClasses[size]} rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden ${randomGradient}`}>
        <span className={`text-white font-bold ${size === 'sm' ? 'text-xs' : size === 'md' ? 'text-xs' : size === 'lg' ? 'text-sm' : size === 'xl' ? 'text-lg' : 'text-4xl'}`}>
          {logoInitial}
        </span>
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={name}
      className={`${sizeClasses[size]} rounded-lg flex-shrink-0 object-contain`}
      onError={handleLogoError}
    />
  );
}
