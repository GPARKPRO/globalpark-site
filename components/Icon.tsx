import Image from 'next/image';

type IconProps = {
  name: string;
  alt?: string;
  className?: string;
  size?: number;
};

export default function Icon({ name, alt = '', className = '', size = 64 }: IconProps) {
  return (
    <Image
      src={`/icons/${name}.svg`}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}
