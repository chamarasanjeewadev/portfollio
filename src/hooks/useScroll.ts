export const useScroll = ({
  ref,
}: {
  ref: React.RefObject<HTMLDivElement>;
}) => {
  const navigateToScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return {
    navigateToScroll,
  };
};
