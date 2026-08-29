const inputSenha = document.getElementById("password")
const mostrarSenha = document.getElementById("mostrar-senha")

if (inputSenha && mostrarSenha) {
  mostrarSenha.addEventListener("click", () => {
    const tipoAtual = inputSenha.type
    inputSenha.type = tipoAtual === "password" ? "text" : "password"
  })
}
