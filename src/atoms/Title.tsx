export const TitleText = ({ text }: { text: string }) => {
  return (
    <h1 className=" before:x-2  text-left  text-3xl font-bold text-[#17A079] before:mb-2 before:mr-2 before:inline-block  before:h-0.5  before:w-8 before:bg-title">
      {text}
    </h1>
  );
};
