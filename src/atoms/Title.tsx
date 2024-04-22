export const TitleText = ({ text }: { text: string }) => {
  return (
    <h1 className=" text-left  before:inline-block  before:mb-2 before:mr-2 before:w-8 before:h-0.5 before:x-2 before:bg-[#17A079]  text-3xl  font-bold text-[#17A079]">
      {text}
    </h1>
  );
};
