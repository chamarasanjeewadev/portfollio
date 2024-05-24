export const getPortfolio = async () => {
  const response = await fetch(
    'https://api.chamarasanjeewa.info/',
  );
  const data = await response.json();
  return data;
};
