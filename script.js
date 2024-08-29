const perguntas = [
    {
        enunciado: "Atualmento o mundo vive na era da tecnologia.Isso ao longo prazo na sua opinião, sera bom ou ruim?",
        alternativas: [
            { texto: "Isso é bom!", pontuacao: 10 },
            { texto: "Isso é ruim!", pontuacao: 5 }
        ]
    },
    {
        enunciado: "Você se considera uma pessoa a favor da tecnologia no ambiente escolar?",
        alternativas: [
            { texto: "Sim", pontuacao: 7 },
            { texto: "Não", pontuacao: 3 }
        ]
    },
    {
        enunciado: "Considerando as crianças, você acredita que a tecnologia afeta o desenvolvimento delas?",
        alternativas: [
            { texto: "Defendo a ideia de que não tem malefício algum!", pontuacao: 4 },
            { texto: "Me preocupo com as crianças, pois, os pais cada vez mais tem períodos menores para cuidar de seus filhos e acompanhar oque estão fazendo", pontuacao: 6 }
        ]
    },
    {
        enunciado: "Você considera que a tecnologia vem mudando o comportamento das pessoas com a família?",
        alternativas: [
            { texto: "Não, quanto mais distância melhor!", pontuacao: 5 },
            { texto: "Sim, os costumes vem sendo deixados de lado pelas telas", pontuacao: 8 }
        ]
    },
    {
        enunciado: "Atualmente, você acha que a tecnologia vem para facilitar o dia a dia?",
        alternativas: [
            { texto: "Sim, com toda certeza!", pontuacao: 7 },
            { texto: "Não, antes tudo era mais fácil", pontuacao: 6 }
        ]
    }
];

let atual = 0;
let pontuacao = 0; // Variável para armazenar a pontuação
let perguntaAtual;
const caixaPerguntas = document.getElementById('caixaPerguntas');
const alternativasContainer = document.getElementById('alternativas');

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa) => {
        const button = document.createElement('button');
        button.textContent = alternativa.texto;
        button.addEventListener('click', () => {
            pontuacao += alternativa.pontuacao; // Incrementa a pontuação com base na alternativa selecionada
            atual++;
            if (atual < perguntas.length) {
                mostraPergunta();
            } else {
                exibePontuacaoFinal(); // Chama função para exibir a pontuação final
            }
        });
        alternativasContainer.appendChild(button);
    });
}

function exibePontuacaoFinal() {
    caixaPerguntas.textContent = `Você completou o questionário! Sua pontuação final é: ${pontuacao}`;
    alternativasContainer.innerHTML = ''; // Limpa as alternativas
}

mostraPergunta(); // Inicia o questionário mostrando a primeira pergunta
