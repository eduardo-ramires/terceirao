const perguntaEresposta = {
  pergunta: [
      "Quem é geralmente considerado o inventor da máquina a vapor?",
      "Em que século as máquinas a vapor começaram a ser desenvolvidas?",
      "Qual a principal fonte de energia utilizada para movimentar as máquinas a vapor?",
      "Que tipo de combustível era comumente queimado para gerar vapor nas primeiras máquinas a vapor?",
      "As máquinas a vapor impulsionaram a inovação no transporte, levando ao desenvolvimento de:",
      "Quais são os principais materiais utilizados no capacete da moto?",
      "Em qual país foi criada a primeira motocicleta a combustão?",
      "Qual o nome correto de uma das marcas mais iconicas de motociclista?",
      "Qual material é utilizado para a confecção das baterias de carros elétricos?",
      "Quantos reais custam para recarregar um carro elétrico, aproximadamente?",
      "Quantos KWH são gastos para percorrer 1KM em media?",
      "Qual a maior dificuldade para a produção de carros elétricos?",
      "Quem inventou a Tesla?",
      "Qual utilidade da turbina?",
      "Qual foi o primeiro carro turbinado produzido no Brasil?",
      "Qual função do aerofólio?",
      "Qual utilidade da fibra de carbono?",
      "Qual tipo de pneu usa-se na terra?",
      "Quem fez o motor circulatorio?",
      "Quem foi o criador do cinto de segurança?",
      "Quem foi o companheiro de Hamilton na sua primeira temporada na McLaren?",
      "Nascido na Alemanha, Nico Rosberg já competiu na infância também pela bandeira de outro país. Qual?",
      "Depois da estreia, em 2006, em qual temporada Rosberg conseguiu o seu primeiro pódio na categoria?",
      "Ехіѕtе umа frаѕе dіtа роr Ауrtоn Ѕеnnа ѕеgundоѕ аntеѕ dе bаtеr nа Таmburеllо еm 1994, еѕѕа grаvаçãо fоі uѕаdа nаѕ іnvеѕtіgаçõеѕ nа éроса quаl аltеrnаtіvа еѕtа а frаѕе dіtа роr Ѕеnnа еm Ímоlа?"
     ],
  respostaCerta: [
      "James Watt",
      "XVII",
      "Energia térmica",
      "Carvão",
      "Locomotivas e barcos a vapor.",
      "ABS/Fibra de carbono/Fibra de vidro",
      "Alemanha",
      "Harley-Davidson",
      "Lítio",
      "R$100,00",
      "0,186",
      "Infraestrutura",
      "Elon Musk",
      "Auxilia ganho de potência",
      "Fiat Uno",
      "Aumentar a dirigibilidade",
      "Diminuição de peso",
      " M/T mud terrain",
      "Wankel",
      "Preston Tucker",
      "Fernando Alonso ",
      "Suécia",
      "2008 ",
      "О саrrо раrесе оk"
      ],
  respostaErrada1: [
      "Nikola tesla",
      "XX",
      "Energia química",
      "Gasolina",
      "Aviões e barcos a vapor.",
      "ABS/PVC/Acrilico",
      "Brasil",
      "Harlei-Davison",
      "Niquel",
      "R$10,00",
      "0,586",
      "Preconceito",
      "Mark Zuckerberg",
      "Influencia na dirigibilidade da carro",
      "Chevrolet Omega",
      "Ganho de potência",
      "Fragilizar o chassi",
      "Semi slick",
      "Tesla",
      "Tesla",
      "Jenson Button",
      "Noruega",
      "2009",
      "О саrrо еѕtа bаtеndо muіtо nо сhãо"
     ],
  respostaErrada2: [
      "Elon Musk",
      "XIV",
      "Energia cinética",
      "Gás natural",
      "Locomotivas e carros a vapor.",
      "Fibra de vidro/Fibra de Plastico/Ferro",
      "França",
      "Harlei-Davdisons",
      "Chumbo",
      "R$150,00",
      "0,86",
      "Custo",
      "Nikolas Tesla",
      "auxiliar na frenagem o automóvel",
      "Chevrolet Camaro",
      "Apenas estilo",
      "Aumento de peso",
      "Pneu careca",
      "Newton",
      "Lula",
      "Heikki Kovalainen",
      "Finlândia",
      "2007",
      "О саrrо еѕtа ѕаіndо muіtо dе frеntе"
      ]
};

var primeiraRespostaCerta = null;
var pontos = null;
var container = document.querySelector('.container');
var perguntasTotais = null;
var numeroAleatorio = null;
var numeroAleatorioPergunta = null;
var nome_player = null;
var nome_maior_pontuador = localStorage.getItem('nome_maior_pontuador')!= undefined ? localStorage.getItem('nome_maior_pontuador') : null
var maior_pontuacao =  localStorage.getItem('maior_pontuacao') != undefined ? localStorage.getItem('maior_pontuacao') : null
var continuando = false;

document.addEventListener("DOMContentLoaded", function() {document.querySelector('#highestScore').textContent = nome_maior_pontuador + " com " + maior_pontuacao + " pontos"});

function btn_sair(){
  pontos = null;
  continuando = false;
  perguntasTotais = null;
  numeroAleatorio = null;
  numeroAleatorioPergunta = null;
  primeiraRespostaCerta = null;
  
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
    document.querySelector('#highestScore').textContent = nome_maior_pontuador + " com " + maior_pontuacao + " pontos"
    localStorage.setItem('maior_pontuacao', pontos);
    localStorage.setItem('nome_maior_pontuador', nome_player);
     localStorage = maior_pontuacao
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
  typeof localStorage !== 'undefined' ? console.log("aq") : console.log("não")
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
    numeroAleatorio = (Math.floor(Math.random() * 25) + 1) - 1;
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
