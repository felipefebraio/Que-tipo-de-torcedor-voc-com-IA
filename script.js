const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando seu time está jogando uma partida importante, qual é a sua reação?",
        alternativas: [
            {
                texto: "Assistir ao jogo ao vivo, vibrando a cada lance e comentando com os amigos.",
                afirmacao: "Vive intensamente cada partida.",
                valor: 3
            },
            {
                texto: "Assistir ao jogo quando possível, sem se preocupar demais com o resultado.",
                afirmacao: "Acompanha o time com equilíbrio.",
                valor: 2
            },
            {
                texto: "Quase não assiste aos jogos e não se importa muito com o desempenho do time.",
                afirmacao: "Não liga muito para futebol.",
                valor: 1
            }
        ]
    },
    {
        enunciado: "Como você costuma reagir quando seu time perde um jogo importante?",
        alternativas: [
            {
                texto: "Fico muito chateado, falo sobre isso com amigos e até chego a perder o sono.",
                afirmacao: "Sente as emoções do time intensamente.",
                valor: 3
            },
            {
                texto: "Fico desapontado, mas entendo que faz parte do esporte e sigo acompanhando.",
                afirmacao: "Mantém a calma mesmo nas derrotas.",
                valor: 2
            },
            {
                texto: "Não dou muita importância, afinal, é só um jogo.",
                afirmacao: "Não liga muito para os resultados.",
                valor: 1
            }
        ]
    },
    {
        enunciado: "Com que frequência você compra ou usa produtos oficiais do seu time (camisas, bonés, etc)?",
        alternativas: [
            {
                texto: "Tenho vários itens oficiais e uso sempre para mostrar meu apoio.",
                afirmacao: "Demonstra orgulho pelo seu time.",
                valor: 3
            },
            {
                texto: "Tenho algum item, mas não uso com tanta frequência.",
                afirmacao: "Gosta do time mas sem exageros.",
                valor: 2
            },
            {
                texto: "Não possuo nenhum produto oficial do time.",
                afirmacao: "Não liga muito para o time.",
                valor: 1
            }
        ]
    },
    {
        enunciado: "Como você se comporta quando seu time está numa má fase e não ganha jogos?",
        alternativas: [
            {
                texto: "Continuo apoiando com paixão, acreditando que vai melhorar.",
                afirmacao: "Fiel em qualquer situação.",
                valor: 3
            },
            {
                texto: "Fico um pouco desapontado, mas entendo que times passam por fases ruins.",
                afirmacao: "Acompanha sem perder a razão.",
                valor: 2
            },
            {
                texto: "Perco o interesse e quase paro de acompanhar o time.",
                afirmacao: "Não liga muito para as oscilações do time.",
                valor: 1
            }
        ]
    },
    {
        enunciado: "Você participa de eventos do time, como assistir jogos no estádio ou encontros de torcedores?",
        alternativas: [
            {
                texto: "Sempre que posso, estou presente para apoiar e celebrar com a torcida.",
                afirmacao: "Muito engajado com o time.",
                valor: 3
            },
            {
                texto: "Vou algumas vezes, mas não com tanta frequência.",
                afirmacao: "Gosta de participar, mas com moderação.",
                valor: 2
            },
            {
                texto: "Não participo desses eventos e prefiro acompanhar pela TV ou não acompanhar.",
                afirmacao: "Não liga muito para o time.",
                valor: 1
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let pontuacaoTotal = 0;
let perfilDetalhado = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    pontuacaoTotal += opcaoSelecionada.valor;
    // Acumula a frase curta da alternativa para detalhar o perfil
    if (perfilDetalhado.length > 0) perfilDetalhado += " ";
    perfilDetalhado += opcaoSelecionada.afirmacao;
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado do seu perfil como torcedor:";
    caixaAlternativas.textContent = "";

    let perfil = "";
    if (pontuacaoTotal >= 13) {
        perfil = "Torcedor Fanático";
    } else if (pontuacaoTotal >= 9) {
        perfil = "Torcedor Normal";
    } else {
        perfil = "Torcedor que não liga muito";
    }

    textoResultado.textContent = `Você é um ${perfil}! ${perfilDetalhado}`;
}

mostraPergunta();
