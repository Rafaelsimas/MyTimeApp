let nome
let valorMensal
let resultado

function login() {
  const nomeFuncionario = document.querySelector("#nome").value
  const usuarioLogado = document.querySelector("#usuarioLogado")
  nome = nomeFuncionario

  const screenLogin = document.querySelector(".box-login")
  const screenApp = document.querySelector(".box-app")

  screenLogin.classList.add("display-hidden")
  screenApp.classList.remove("display-hidden")

  usuarioLogado.innerHTML = nome
}

function buscarValorMensal() {
  const salarioMensal = parseInt(document.querySelector("#valorMes").value)
  valorMensal = salarioMensal
}

const btn = document.querySelector(".btn")
btn.addEventListener("click", (e) => {
  e.preventDefault()
  buscarValorMensal()

  const select = document.querySelector("#pet-select")
  const msg = document.querySelector(".msg")

  const diaSelecionado = parseInt(select.value)

  if (diaSelecionado === 1) {
    resultado = valorMensal / 24
  } else if (diaSelecionado === 2) {
    resultado = valorMensal / 48
  } else if (diaSelecionado === 3) {
    resultado = valorMensal / 72
  } else if (diaSelecionado === 4) {
    resultado = valorMensal / 96
  } else if (diaSelecionado === 5) {
    resultado = valorMensal / 120
  } else if (diaSelecionado === 6) {
    resultado = valorMensal / 144
  } else if (diaSelecionado === 7) {
    resultado = valorMensal / 168
  }

  msg.innerHTML = `<strong>${nome}</strong> sua hora custa R${resultado.toFixed(
    2
  )}`
})
