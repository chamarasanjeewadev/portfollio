import { FaExternalLinkAlt } from 'react-icons/fa';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonStyles = cva([], {
  variants: {
    variant: {
      default: [],
    },
    size: {
      default: [],
      small: ['text-sm'],
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});
type buttonType = VariantProps<typeof buttonStyles> & {
  text: string;
  link: string;
};

export const LinkText = ({
  variant,
  size,
  text,
  link,
  // ...props
}: buttonType) => {
  return (
    <a
      // {...props}
      className=" cursor-pointer text-sky-400 "
      href={link}
      target="_blank"
    >
      <div
        className={cn(
          'flex items-center gap-2',
          buttonStyles({ variant, size }),
        )}
      >
        <h3>{text}</h3>
        <FaExternalLinkAlt />
      </div>
    </a>
  );
};
