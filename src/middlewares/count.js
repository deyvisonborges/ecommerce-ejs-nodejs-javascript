// middleware para fazer a contagem
// de visitas nas URI's

let contador = 0;

let adicionar = async (req, res, next) => {
  contador += 1;
  next();
};

const contar = () => {
  return contador;
};

module.exports = {
  adicionar,
  contar,
};