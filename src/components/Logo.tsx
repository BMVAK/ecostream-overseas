interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export default function Logo({ className = '', showText = true, size = 'md' }: LogoProps) {
  const sizes = {
    sm: 'h-16',
    md: 'h-20',
    lg: 'h-24'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/image-removebg-preview_(2).png"
        alt="Ecostream Overseas Logo"
        className={sizes[size]}
      />
    </div>
  );
}
