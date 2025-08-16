const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acabou de conhecer uma IA capaz de conversar como um ser humano e até resolver problemas complexos. Qual é sua reação inicial?",
        alternativas: [
            {
                texto: "Acho incrível, mas também sinto um certo medo do quanto isso pode evoluir.",
                afirmacao: "Você enxerga a IA como algo poderoso, mas ainda se preocupa com os limites dessa tecnologia."
            },
            {
                texto: "Isso é sensacional! Quero explorar como ela pode me ajudar no dia a dia.",
                afirmacao: "Você vê a IA como uma oportunidade para facilitar tarefas e estimular sua criatividade."
            }
        ]
    },
    {
        enunciado: "Na escola, sua professora pede um trabalho sobre os impactos da IA na educação. O que você faz?",
        alternativas: [
            {
                texto: "Uso a própria IA para pesquisar e organizar ideias, mas faço questão de revisar tudo depois.",
                afirmacao: "Você entende que a IA é uma ótima aliada para ganhar tempo, mas que o pensamento humano continua essencial."
            },
            {
                texto: "Prefiro desenvolver o trabalho a partir do meu próprio estudo e troca de ideias com colegas.",
                afirmacao: "Você valoriza a construção do conhecimento humano e acredita que a IA deve apenas complementar, não substituir."
            }
        ]
    },
    {
        enunciado: "Durante um debate, surge a pergunta: a IA vai acabar com empregos? Qual sua opinião?",
        alternativas: [
            {
                texto: "Acredito que ela vai criar novas profissões e transformar o jeito como trabalhamos.",
                afirmacao: "Você acredita em um futuro de adaptação, onde a IA abre portas para novas oportunidades."
            },
            {
                texto: "Penso que muitas pessoas podem perder espaço no mercado de trabalho. Isso é preocupante.",
                afirmacao: "Você tem consciência dos riscos sociais da automação e defende medidas de proteção para os trabalhadores."
            }
        ]
    },
    {
        enunciado: "Seu professor pede uma representação visual sobre IA. Qual caminho você segue?",
        alternativas: [
            {
                texto: "Faço minha própria arte digital para transmitir minhas ideias de forma única.",
                afirmacao: "Você acredita que a criatividade humana é insubstituível e vê a tecnologia apenas como um apoio."
            },
            {
                texto: "Utilizo um gerador de imagens por IA para ter um resultado rápido e impactante.",
                afirmacao: "Você aposta na praticidade da IA e no seu potencial de expandir a imaginação."
            }
        ]
    },
    {
        enunciado: "Seu grupo está atrasado em um trabalho, e um colega usa IA para escrever parte do texto. O que você faz?",
        alternativas: [
            {
                texto: "Acho válido, desde que todos revisem e deem o toque humano final.",
                afirmacao: "Você percebe que a IA pode ser útil, mas entende a importância de supervisionar e adaptar o resultado."
            },
            {
                texto: "Prefiro reescrever o texto para que tenha mais autenticidade.",
                afirmacao: "Você acredita que a contribuição humana é essencial para que o trabalho reflita a identidade do grupo."
            }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    const perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.innerHTML = "";
    perguntaAtual.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botao);
    });
}

function respostaSelecionada(alternativa) {
    historiaFinal += alternativa.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado Final do Quiz";
    caixaAlternativas.innerHTML = "";
    textoResultado.textContent = historiaFinal;
    caixaResultado.style.display = "block";
}

mostraPergunta();
