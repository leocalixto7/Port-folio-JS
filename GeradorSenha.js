// Define os caracteres que podem ser utilizados na senha
const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

//função para gerar a senha
function gerarSenha(tamanho) {
  let senha = "";
  for (let i = 0; i < tamanho; i++) {
    senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return senha;
}

const novaSenha = gerarSenha(10);
console.log(`Senha Gerada: ${novaSenha}`);



