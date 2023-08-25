const perguntaEresposta = {
  pergunta: [
      "Quem é geralmente considerado o inventor da máquina a vapor?",
      "Em que século as máquinas a vapor começaram a ser desenvolvidas?",
      "Qual a principal fonte de energia utilizada para movimentar as máquinas a vapor?",
      "Que tipo de combustível era comumente queimado para gerar vapor nas primeiras máquinas a vapor?",
      "As máquinas a vapor impulsionaram a inovação no transporte, levando ao desenvolvimento de:",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
  ],
  respostaCerta: [
      "James Watt",
      "XVII",
      "Energia térmica",
      "Carvão",
      "Locomotivas e barcos a vapor.",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
  ],
  respostaErrada1: [
      "Nikola tesla",
      "XX",
      "Energia química",
      "Gasolina",
      "Aviões e barcos a vapor.",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
  ],
  respostaErrada2: [
      "Elon Musk",
      "XIV",
      "Energia cinética",
      "Gás natural",
      "Locomotivas e carros a vapor.",
      "6",
      "7",
      "8",
      "9",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
      "24",
      "25",
      "26",
      "27",
      "28",
      "29",
      "30"
  ]
};

var primeiraRespostaCerta = null;
var pontos = null;
var container = document.querySelector('.container');
var perguntasTotais = null;
var numeroAleatorio = null;
var numeroAleatorioPergunta = null;
var nome_player = null;
var nome_maior_pontuador = null;
var maior_pontuacao = null;
var continuando = false;

function btn_sair(){
  pontos = null;
  continuando = false;
  perguntasTotais = null;
  numeroAleatorio = null;
  numeroAleatorioPergunta = null;
  primeiraRespostaCerta = null;
  document.querySelector('#highestScore').textContent = nome_maior_pontuador + " com " + maior_pontuacao + " pontos";
  document.querySelector('.jogo').style.display = 'none';
  document.getElementById("name").value = "";
  document.querySelector('.scoreboard').style.display = 'none';
  document.querySelector('.registration-form').style.display = 'block';
}

function finalizaJogo(){
  var txtNome =  document.querySelector(".title");
  var txtPontos =  document.querySelector(".score");
  document.querySelector('.jogo').style.display = 'none';
  document.querySelector('.scoreboard').style.display = 'block';
  if (pontos > maior_pontuacao){
    if (nome_player != null){txtNome.textContent = "Parabéns "+ nome_player + " você bateu o recorde!!!"};
    txtPontos.textContent = "Sua pontuação foi de: " + pontos;
    maior_pontuacao = pontos;
    nome_maior_pontuador = nome_player;
  } else if (pontos >= 400){
    if (nome_player != null){txtNome.textContent = "Parabéns "+ nome_player + " você foi muito bem!"};
    txtPontos.textContent = "Sua pontuação foi de: " + pontos;
  } else if(pontos == 300){
    txtNome.textContent = "Parabéns "+ nome_player ;
    txtPontos.textContent = "Sua pontuação foi de: " + pontos;
  } else if(pontos == null){
    if (nome_player != null){txtNome.textContent = "Obrigado por jogar "+ nome_player};
    txtPontos.textContent = "Tu conseguiu zerar bocó";
  }else{
    if (nome_player != null){txtNome.textContent = "Obrigado por jogar "+ nome_player};
    txtPontos.textContent = "Sua pontuação foi de: " + pontos;
  }
}

function getPerguntasErepostas(){
  if (pontos >= 100){
    document.getElementById("pontos").textContent = "Pontos: " + pontos;
  }else{
    document.getElementById("pontos").textContent = "Pontos: 00";
  }

  if (perguntasTotais == 5){
    continuando = true;
  } if (perguntasTotais == 5 && pontos <= 200){
    setTimeout(() => {
      container.classList.remove('errado');
      container.classList.add('container');
      finalizaJogo();
    },500);
  } else{
    document.querySelector('.registration-form').style.display = 'none';
    document.querySelector('.jogo').style.display = 'block';
    nome_player =  document.getElementById("name").value;
    numeroAleatorio = (Math.floor(Math.random() * 31) + 1) - 1;
    numeroAleatorioPergunta = Math.floor(Math.random() * 3) + 1;

    var primeiraPergunta = perguntaEresposta.pergunta[numeroAleatorio];

    // Acessando a resposta correta da primeira pergunta
    primeiraRespostaCerta = perguntaEresposta.respostaCerta[numeroAleatorio];

    // Acessando a primeira resposta errada da primeira pergunta
    var primeiraRespostaErrada1 = perguntaEresposta.respostaErrada1[numeroAleatorio];

    // Acessando a segunda resposta errada da primeira pergunta
    var primeiraRespostaErrada2 = perguntaEresposta.respostaErrada2[numeroAleatorio];

    var botaoResposta1 = document.getElementById("resposta1");
    var botaoResposta2 = document.getElementById("resposta2");
    var botaoResposta3 = document.getElementById("resposta3");
    var pergunta = document.getElementById("pergunta");

    pergunta.textContent = primeiraPergunta;
    console.log("certa:", primeiraRespostaCerta);
    if (numeroAleatorioPergunta == 1){
      botaoResposta1.textContent = primeiraRespostaErrada2;
      botaoResposta2.textContent = primeiraRespostaErrada1;
      botaoResposta3.textContent = primeiraRespostaCerta;
    } else if (numeroAleatorioPergunta == 2){
      botaoResposta1.textContent = primeiraRespostaCerta;
      botaoResposta2.textContent = primeiraRespostaErrada1;
      botaoResposta3.textContent = primeiraRespostaErrada2;
    } else{
      botaoResposta1.textContent = primeiraRespostaErrada1;
      botaoResposta2.textContent = primeiraRespostaCerta;
      botaoResposta3.textContent = primeiraRespostaErrada2;
    }
  }
}

function verificaResposta(resposta){
  perguntasTotais = perguntasTotais + 1 
  if (numeroAleatorioPergunta == 1 && resposta == 3){
    container.classList.remove('container');
    container.classList.add('certo');
    setTimeout(() => {
      container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas();
    }, 1000);
    pontos = pontos + 100 ;
  } else if (numeroAleatorioPergunta == 2 && resposta == 1){
    container.classList.remove('container');
    container.classList.add('certo');
    setTimeout(() => {
      container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas();
    }, 1000);
    pontos = pontos + 100;
  } else if (numeroAleatorioPergunta == 3 && resposta == 2){
    container.classList.remove('container');
    container.classList.add('certo');
    setTimeout(() => {
      container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas();
    },1000);
    pontos = pontos + 100;
  } else{
    if (continuando){
      setTimeout(() => {
        container.classList.remove('errado');
        container.classList.add('container');
        finalizaJogo();
      },500);
    }else{
      container.classList.remove('container');
      container.classList.add('errado');
      setTimeout(() => {
        container.classList.remove('errado');
        container.classList.add('container');
        getPerguntasErepostas();
      }, 1000);
    }
  }
}