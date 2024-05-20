export const getPortfolio = async () => {
  const response = await fetch(
    'https://6tp7ckxzyl.execute-api.eu-west-2.amazonaws.com/v1/',
  );
  const data = await response.json();
  return data;
};
