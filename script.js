const inputSenha = document.getElementById("password")
const mostrarSenha = document.getElementById("mostrar-senha")

botaoMostrar.addEventListenner("click", () => {
  if (inputSenha.type === "password") {
    inputSenha.type = "text"
  } else {
    inputSenha.type = "password"
  }
})
