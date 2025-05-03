import Image from 'next/image';

type IconProps = {
  name: string;
  alt?: string;
  className?: string;
  size?: number;
};

export default function Icon({ name, alt = '', className = '', size = 48 }: IconProps) {
  return (
    <div className={`relative w-[${size}px] h-[${size}px] ${className}`}>
      <Image
        src={`/icons/${name}.svg`}
        alt={alt}
        fill
        className="object-contain"
        sizes={`${size}px`}
        priority
      />
    </div>
  );
}
