const perguntaEresposta = {
  pergunta: [
      "Quem é geralmente considerado o inventor da máquina a vapor?",
      "Em que século as máquinas a vapor começaram a ser desenvolvidas?",
      "Qual a principal fonte de energia utilizada para movimentar as máquinas a vapor?",
      "Que tipo de combustível era comumente queimado para gerar vapor nas primeiras máquinas a vapor?",
      "As máquinas a vapor impulsionaram a inovação no transporte, levando ao desenvolvimento de:",
      "Qual foi a primeira corrida da temporada de Fórmula 1 em 2021?",
      "Que lendário piloto brasileiro é conhecido como 'Magic Senna'?",
      "Que pista sediou a primeira corrida noturna de Fórmula 1?",
      "Qual equipe de Fórmula 1 tem sede em Silverstone, Inglaterra?",
      "Qual é a famosa prova de endurance realizada em Le Mans, França?",
      "Que piloto espanhol venceu dois campeonatos mundiais de Fórmula 1?",
      "Qual pista é conhecida como 'O Circuit de la Sarthe'?",
      "Qual é a maior categoria de corrida de carros nos Estados Unidos?",
      "Que equipe de Fórmula 1 é conhecida como 'A Prateada'?",
      "Qual é o nome da lendária curva na pista de Mônaco?",
      "Qual é a marca de pneus oficial da Fórmula 1?",
      "Que piloto britânico é apelidado de 'Jenson'?",
      "Qual é o nome do troféu dado ao vencedor da corrida de Fórmula 1 em Mônaco?",
      "Que piloto finlandês ganhou o campeonato mundial de Fórmula 1 em 2007?",
      "Qual piloto brasileiro venceu o campeonato mundial de Fórmula 1 em 1991?",
      "Que equipe de Fórmula 1 apresenta um touro como seu símbolo?",
      "Qual é a famosa corrida de longa duração realizada na Austrália?",
      "Qual pista sediou a primeira corrida da Fórmula 1?",
      "Que piloto alemão venceu o campeonato mundial de Fórmula 1 em 2016?",
      "Qual é a prova de abertura da temporada de Fórmula 1?",
      "Que ex-piloto de Fórmula 1 é conhecido como 'The Professor'?",
      "Qual é a equipe de Fórmula 1 conhecida como 'A Escuderia'?",
      "Qual piloto detém o recorde de mais vitórias em uma única temporada de Fórmula 1?",
      "Em que país a prova de Fórmula 1 conhecida como 'Grande Prêmio da Bélgica' é realizada?",
      "Que piloto britânico é conhecido como 'Lando'?",
      "Qual é o famoso circuito conhecido como 'A Pista da Morte' devido à sua alta velocidade?"
  ],
  respostaCerta: [
      "James Watt",
      "XVII",
      "Energia térmica",
      "Carvão",
      "Locomotivas e barcos a vapor.",
      "Grande Prêmio do Bahrein",
      "Ayrton Senna",
      "Circuito de Marina Bay (Singapura)",
      "Aston Martin",
      "24 Horas de Le Mans",
      "Fernando Alonso",
      "Circuit de la Sarthe",
      "NASCAR",
      "Mercedes",
      "Casino Square",
      "Pirelli",
      "Jenson Button",
      "Troféu de Sua Alteza Sereníssima, o Príncipe Soberano de Mônaco",
      "Kimi Räikkönen",
      "Ayrton Senna",
      "Red Bull Racing",
      "Bathurst 1000",
      "Silverstone",
      "Nico Rosberg",
      "Grande Prêmio da Austrália",
      "Alain Prost",
      "Ferrari",
      "Lewis Hamilton",
      "Bélgica",
      "Lando Norris",
      "Autódromo Nazionale Monza"
  ],
  respostaErrada1: [
      "Nikola tesla",
      "XX",
      "Energia química",
      "Gasolina",
      "Aviões e barcos a vapor.",
      "Grande Prêmio da Austrália",
      "Rubens Barrichello",
      "Circuito das Américas",
      "Williams",
      "12 Horas de Sebring",
      "Felipe Massa",
      "Circuit de Catalunya",
      "Fórmula Indy",
      "McLaren",
      "Sainte Devote",
      "Michelin",
      "Lewis Hamilton",
      "Troféu de Moneiro",
      "Sebastian Vettel",
      "Rubens Barrichello",
      "McLaren F1 Team",
      "Darwin 500",
      "Monza",
      "Sebastian Vettel",
      "Grande Prêmio do Brasil",
      "Jacques Villeneuve",
      "McLaren",
      "Sebastian Vettel",
      "Holanda",
      "Sebastian Vettel",
      "Nürburgring"
  ],
  respostaErrada2: [
      "Elon Musk",
      "XIV",
      "Energia cinética",
      "Gás natural",
      "Locomotivas e carros a vapor.",
      "Grande Prêmio do Japão",
      "Nelson Piquet",
      "Circuito de Interlagos",
      "Red Bull Racing",
      "6 Horas de Spa-Francorchamps",
      "Sebastian Vettel",
      "Circuit de Monaco",
      "Formula E",
      "Renault",
      "Eau Rouge",
      "Goodyear",
      "Sebastian Vettel",
      "Troféu de Monte Carlo",
      "Fernando Alonso",
      "Emerson Fittipaldi",
      "Scuderia Ferrari",
      "Bathurst 500",
      "Monaco",
      "Nico Hülkenberg",
      "Grande Prêmio de Abu Dhabi",
      "Ayrton Senna",
      "Renault",
      "Michael Schumacher",
      "Espanha",
      "Daniel Ricciardo",
      "Suzuka Circuit"
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
    document.getElementById("pontos").textContent = "Pontos: "+ pontos;
  }else{
    document.getElementById("pontos").textContent = "Pontos: 00";
  }

  if (perguntasTotais == 5){
    continuando = true
  } if (perguntasTotais == 5 && pontos <= 200){
    setTimeout(() => {
      container.classList.remove('errado');
      container.classList.add('container');
      finalizaJogo()
    },500);
  } else{
    document.querySelector('.registration-form').style.display = 'none';
    document.querySelector('.jogo').style.display = 'block';
    nome_player =  document.getElementById("name").value;
    numeroAleatorio = (Math.floor(Math.random() * 28) + 1) - 1;
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
    console.log("certa:", primeiraRespostaCerta)
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
      getPerguntasErepostas()
    }, 1000);
    pontos = pontos + 100 
  } else if (numeroAleatorioPergunta == 2 && resposta == 1){
    container.classList.remove('container');
    container.classList.add('certo');
    setTimeout(() => {
      container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas()
    }, 1000);
    pontos = pontos + 100
  } else if (numeroAleatorioPergunta == 3 && resposta == 2){
    container.classList.remove('container');
    container.classList.add('certo');
    setTimeout(() => {
      container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas()
    },1000);
    pontos = pontos + 100
  } else{
    if (continuando){
      setTimeout(() => {
        container.classList.remove('errado');
        container.classList.add('container');
        finalizaJogo()
      },500);
    }else{
      container.classList.remove('container');
      container.classList.add('errado');
      setTimeout(() => {
        container.classList.remove('errado');
        container.classList.add('container');
        getPerguntasErepostas()
      }, 1000);
    }
  }
}
