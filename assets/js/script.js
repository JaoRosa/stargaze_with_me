// Botão da primeira tela
const btnAviso = document.getElementById("btn_confirm");
if (btnAviso) {
  btnAviso.addEventListener("click", () => {
    window.location.replace("confirm.html");
  });
}

// Botão SIM
const btn_SIM = document.getElementById("btn_SIM");
if (btn_SIM) {
  btn_SIM.addEventListener("click", () => {
    window.location.replace("principal.html");
  });
}

const btnNao = document.getElementById('btn_nao');
const container = document.getElementById('aviso');

function geraPosicao(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min) + '%';
}

function desvia(btn_nao) {
  btn_nao.style.position = 'absolute';
  btn_nao.style.bottom = geraPosicao(10, 90);
  btn_nao.style.left = geraPosicao(10, 90);
  console.log('opa, desviei...');
}

//Contador de tempo juntos
function atualizarContador() {
  //objeto de data com o momento te ter conhecido a camila
  const dataInicio = new Date("2025-05-25T00:00:00");
  //objeto de agora com a data e hora atual
  const agora = new Date();
  //calcula a diferença entre agora e dataInicio em milissegundos
const diferenca = agora - dataInicio;
  //converte milissegundos em dias, horas, minutos e segundos
  const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferenca / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferenca / (1000 * 60)) % 60);
  const segundos = Math.floor((diferenca / 1000) % 60);

  //formata com o tempo restante formatado em dias, horas, minutos e segundos, seguido de um emoji
  const texto = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos💞`;
  //seleciona o elemento com id=contador
  const contador = document.getElementById("contador");
  //Se o elemento "contador" existir na página
  if (contador) {
    // Atualiza o texto do elemento com a string formatada do tempo
    contador.textContent = texto;
  }
}
//se nao atualizar o contador
if (document.getElementById("contador")) {
  atualizarContador();
  setInterval(atualizarContador, 1000);
}
