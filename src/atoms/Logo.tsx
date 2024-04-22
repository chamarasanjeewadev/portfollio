import PortfolioImg from "./../assets/profile-photo.jpeg";
export const Logo = () => {
  return (
    <img
      src={PortfolioImg}
      className=" h-5 w-5 rounded-full object-cover"
    />
  );
};
