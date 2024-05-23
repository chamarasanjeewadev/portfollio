export const getPortfolio = async () => {
  const response = await fetch(
    'https://j3w51zasak.execute-api.us-east-1.amazonaws.com/',
  );
  const data = await response.json();
  return data;
};
