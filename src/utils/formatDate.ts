export const formatDate = (data: string) => {
  if (data.length > 10) {
    data = data.slice(0, 10);
  }
  const padrao = /(\d{2})(\d{2})(\d{4})/;
  const resultado = data.replace(padrao, "$1/$2/$3");
  return resultado;
};
