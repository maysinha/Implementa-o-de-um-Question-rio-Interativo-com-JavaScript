const perguntas = [
    {
    enunciado: "Atualmento o mundo vive na era da tecnologia.Isso ao longo prazo na sua opinião, sera bom ou ruim?",
    alternativas: [
    "Isso é bom!",
    "Isso é ruim!"
    ]
    },
    {
    enunciado: "Você se considera uma pessoa a favor da tecnologia no ambiente escolar?",
    alternativas: [
    "Sim",
    "Não"
    ]
    },
    {
    enunciado: "Considerando as crianças, você acredita que a tecnologia afeta o desenvolvimento delas?",
    alternativas: [
    "Defendo a ideia de que não tem malefício algum! ",
    "Me preocupo com as crianças, pois, os pais cada vez mais tem períodos menores para cuidar de seus filhos e acompanhar oque estão fazendo"
    ]
    },
    {
    enunciado: "Você considera que a tecnologia vem mudando o comportamento das pessoas com a família?",
    alternativas: [
    "Não, quanto mais distância melhor!",
    "Sim, os costumes vem sendo deixados de lado pelas telas"
    ]
    
    },
    {
    enunciado: "Atualmente, você acha que a tecnologia vem para facilitar o dia a dia?",
    alternativas: [
    "Sim, com toda certeza!",
    "Não, antes tudo era mais fácil"
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
