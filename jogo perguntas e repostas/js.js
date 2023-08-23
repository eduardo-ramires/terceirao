const perguntaEresposta = {
  pergunta: [
      "Qual piloto detém o recorde de mais títulos de Fórmula 1?",
      "Qual é a cor tradicional dos carros da Scuderia Ferrari na Fórmula 1?",
      "Qual é a pista conhecida como 'Casa da Indy 500'?",
      "Que empresa fabrica os carros de Fórmula 1 com o nome de 'Red Bull Racing'?",
      "Qual piloto é frequentemente chamado de 'Schumi'?",
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
      "Michael Schumacher",
      "Vermelho",
      "Indianapolis Motor Speedway",
      "Red Bull",
      "Michael Schumacher",
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
      "Ayrton Senna",
      "Azul",
      "Daytona International Speedway",
      "Ferrari",
      "Nico Rosberg",
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
      "Nelson Piquet",
      "Amarelo",
      "Silverstone Circuit",
      "Mercedes",
      "Fernando Alonso",
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
    primeiraRespostaCerta = null
    document.querySelector('#highestScore').textContent = nome_maior_pontuador + " com " + maior_pontuacao + " pontos";
    document.querySelector('.jogo').style.display = 'none';
    pontos = null
    continuando = false;
    perguntasTotais = null
    numeroAleatorio = null
    numeroAleatorioPergunta = null
    document.getElementById("name").value = "";
    document.querySelector('.scoreboard').style.display = 'none';
    document.querySelector('.registration-form').style.display = 'block';
  }

  function finalizaJogo(){
    if (pontos > maior_pontuacao){
      maior_pontuacao = pontos;
      nome_maior_pontuador = nome_player;
    }
    document.querySelector('.jogo').style.display = 'none';
    document.querySelector('.scoreboard').style.display = 'block';
    var txtNome =  document.querySelector(".title");
    var txtPontos =  document.querySelector(".score");
    if (pontos >= 200){
      txtNome.textContent = "Parabéns "+ nome_player + " você foi muito bem!";
      txtPontos.textContent = "Sua pontuação foi de: " + pontos;
    }else if(pontos == 150){
      txtNome.textContent = "Parabéns "+ nome_player ;
      txtPontos.textContent = "Sua pontuação foi de: " + pontos;
    }else{
      txtNome.textContent = "Obrigado por jogar "+ nome_player ;
      txtPontos.textContent = "Sua pontuação foi de: " + pontos;
    }
  }

  function getPerguntasErepostas(){
    if (perguntasTotais == 5){
      continuando = true
    }
    if (perguntasTotais == 5 && pontos <= 100){
      finalizaJogo()
    }else{
      document.querySelector('.registration-form').style.display = 'none';
      document.querySelector('.jogo').style.display = 'block';
      nome_player =  document.getElementById("name").value;
      numeroAleatorio = (Math.floor(Math.random() * 28) + 1) - 1;
      numeroAleatorioPergunta = Math.floor(Math.random() * 3) + 1;

      var primeiraPergunta = perguntaEresposta.pergunta[numeroAleatorio];
      console.log(primeiraPergunta); 

      // Acessando a resposta correta da primeira pergunta
      primeiraRespostaCerta = perguntaEresposta.respostaCerta[numeroAleatorio];
      console.log(primeiraRespostaCerta); 

      // Acessando a primeira resposta errada da primeira pergunta
      var primeiraRespostaErrada1 = perguntaEresposta.respostaErrada1[numeroAleatorio];
      console.log(primeiraRespostaErrada1); 

      // Acessando a segunda resposta errada da primeira pergunta
      var primeiraRespostaErrada2 = perguntaEresposta.respostaErrada2[numeroAleatorio];
      console.log(primeiraRespostaErrada2);

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
      }else if (numeroAleatorioPergunta == 2){
          botaoResposta1.textContent = primeiraRespostaCerta;
          botaoResposta2.textContent = primeiraRespostaErrada1;
          botaoResposta3.textContent = primeiraRespostaErrada2;
      }else{
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
      pontos = pontos + 50  
      console.log('acertou')
    }else if (numeroAleatorioPergunta == 2 && resposta == 1){
      container.classList.remove('container');
      container.classList.add('certo');
      setTimeout(() => {
        container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas()
      }, 1000);
      pontos = pontos + 50 
        console.log('acertou')
    }else if (numeroAleatorioPergunta == 3 && resposta == 2){
      container.classList.remove('container');
      container.classList.add('certo');
      setTimeout(() => {
        container.classList.remove('certo');
      container.classList.add('container');
      getPerguntasErepostas()
      },1000);
      pontos = pontos + 50 
        console.log('acertou')
    }else{
      if (continuando){
        finalizaJogo()
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