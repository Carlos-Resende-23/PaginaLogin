const inputSenha = document.getElementById("password")
const mostrarSenha = document.getElementById("mostrar-senha")

mostrarSenha.addEventListener("click", () => {
  if (inputSenha.type === "password") {
    inputSenha.type = "text"
  } else {
    inputSenha.type = "password"
  }
})
