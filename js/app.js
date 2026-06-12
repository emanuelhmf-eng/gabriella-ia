function entrar(){

document.getElementById("splash")
.style.display="none";

document.getElementById("app")
.style.display="block";

document.getElementById("musica")
.play();

}

function abrirTela(tela){

const conteudo =
document.getElementById("conteudo");

if(tela==="quiz"){

conteudo.innerHTML=`

<div class="quiz-header">

<div class="quiz-coracao">

❤️

</div>

<h2>

Quiz do Casal

</h2>

<p>

Será que você conhece nossa história?

</p>

</div>

<div id="quiz-container">

<h3 id="pergunta"></h3>

<div id="opcoes"></div>

<div id="resultado"></div>

</div>

`;

iniciarQuiz();

}

if(tela==="surpresa"){

conteudo.innerHTML=`

<div class="surpresa-container">

<div class="presente-gigante">

🎁

</div>

<h2 class="surpresa-titulo">

Caixa de Surpresas

</h2>

<p class="surpresa-subtitulo">

Clique no presente e descubra uma mensagem especial ❤️

</p>

<button
class="btn-presente"
onclick="gerarSurpresa()">

Abrir Presente

</button>

<div id="mensagem-surpresa"></div>

</div>

`;

}


const respostas = {

"oi":"Olá Gabriella ❤️",

"quem sou eu":
"Você é Gabriella Barbosa, a pessoa mais especial do mundo.",

"ele me ama":
"Mais do que palavras conseguem explicar.",

"qual o maior sonho dele":
"Construir um futuro ao seu lado.",

"ele pensa em mim":
"Todos os dias ❤️"

};

function mostrarChat(){

document.getElementById("conteudo")
.innerHTML = `

<h2>🤖 Gabriella IA</h2>

<div class="perguntas">

<button onclick="perguntaRapida('Por que ele me ama?')">
❤️ Por que ele me ama?
</button>

<button onclick="perguntaRapida('Qual o maior sonho dele?')">
🌎 Qual o maior sonho dele?
</button>

<button onclick="perguntaRapida('O que ele sente por mim?')">
💕 O que ele sente por mim?
</button>

<button onclick="perguntaRapida('Qual a lembrança favorita dele?')">
📸 Lembrança favorita
</button>

</div>

<input
id="pergunta"
placeholder="Faça uma pergunta">

<button onclick="responder()">
Enviar
</button>

<div id="resposta"></div>

`;

}

function responder(){

const pergunta =
document.getElementById("pergunta")
.value
.toLowerCase();

let resposta = "";

if(
pergunta.includes("por que ele me ama")
){

resposta =
"Porque você trouxe felicidade, paz e propósito para a vida dele ❤️";

}
else if(
pergunta.includes("maior sonho")
){

resposta =
"Construir um futuro ao seu lado ❤️";

}
else if(
pergunta.includes("o que ele sente")
){

resposta =
"Um amor sincero, profundo e verdadeiro ❤️";

}
else if(
pergunta.includes("lembrança favorita")
){

resposta =
"Todos os momentos ao seu lado, principalmente aqueles em que vocês estavam felizes juntos ❤️";

}
else{

resposta =
"Você é muito especial para ele ❤️";

}

document.getElementById("resposta")
.innerHTML = resposta;

}

function perguntaRapida(texto){

document.getElementById("pergunta")
.value = texto;

responder();

}



if(tela==="memorias"){

    const fotos = [

        {
        arquivo:"foto1.jpeg",
        legenda:"❤️ Dia Mágico!"
        },

        {
        arquivo:"foto2.jpeg",
        legenda:"❤️ Nosso primeiro jogo"
        },

        {
        arquivo:"foto3.jpeg",
        legenda:"❤️ Minha musa fitness"
        },

        {
        arquivo:"foto4.jpeg",
        legenda:"❤️ Nossas aventuras"
        },

        {
        arquivo:"foto5.jpeg",
        legenda:"❤️ Um momento especial"
        },

        {
        arquivo:"foto6.jpeg",
        legenda:"❤️ Um dos nossos lugares especiais"
        },

        {
        arquivo:"foto7.jpeg",
        legenda:"❤️ Você me faz feliz"
        },

        {
        arquivo:"foto8.jpeg",
        legenda:"❤️ Dia de treino com amoreco"
        },

        {
        arquivo:"foto9.jpeg",
        legenda:"❤️"
        },

        {
        arquivo:"foto10.jpeg",
        legenda:"❤️ Recordação inesquecível"
        },

        {
        arquivo:"foto11.jpeg",
        legenda:"❤️ Um dia perfeito"
        },

        {
        arquivo:"foto12.jpeg",
        legenda:"❤️ Minha companhia favorita"
        },

        {
        arquivo:"foto13.jpeg",
        legenda:"❤️ Meu maior sonho!"
        },

        {
        arquivo:"foto14.jpeg",
        legenda:"❤️ Meu melhor sorriso"
        },

        {
        arquivo:"foto15.jpeg",
        legenda:"❤️ Juntos somos melhores!"
        },

        {
        arquivo:"foto16.jpeg",
        legenda:"❤️ Momentos que guardo no coração"
        },

        {
        arquivo:"foto17.jpeg",
        legenda:"❤️ Mais uma lembrança que guardo no coração"
        },

        {
        arquivo:"foto18.jpeg",
        legenda:"❤️ Cada momento ao seu lado é especial"
        }

        ];

    let html = `
        <h2 class="feed-title">
        📸 Nossas Memórias ❤️
        </h2>

        <div class="feed">
        `;

    fotos.forEach(foto => {

        html += `
        <div class="post">
            <img src="img/${foto.arquivo}">
            <p>${foto.legenda}</p>
        </div>
        `;

    });

    html += `</div>`;

    conteudo.innerHTML = html;

}

if(tela==="cartas"){

conteudo.innerHTML=`

<h2>💌 Cartas para Gabriella</h2>

<div class="cartas">

<div class="envelope"
onclick="abrirCarta(1)">
💌
<span>Meu Amor</span>
</div>

<div class="envelope"
onclick="abrirCarta(2)">
🌹
<span>Seu Sorriso</span>
</div>

<div class="envelope"
onclick="abrirCarta(3)">
❤️
<span>Meu Lugar Favorito</span>
</div>

<div class="envelope"
onclick="abrirCarta(4)">
✨
<span>Meu Futuro</span>
</div>

<div class="envelope"
onclick="abrirCarta(5)">
💍
<span>Para Sempre</span>
</div>

</div>

<div id="carta-conteudo"></div>


`;

}

if(tela==="chat"){

mostrarChat();

}

}

function abrirVideo(){

window.open(
"video/mensagem.mp4"
);

}

const inicioRelacionamento =
new Date("2025-08-09");

function atualizarContador(){

    const hoje = new Date();

    const diferenca =
    hoje - inicioRelacionamento;

    const dias =
    Math.floor(
        diferenca / (1000*60*60*24)
    );

    document.getElementById("contador")
    .innerHTML =

    `❤️ ${dias} dias juntos ❤️`;

}

setInterval(
    atualizarContador,
    1000
);

atualizarContador();


function abrirCarta(numero){

const cartas = {

1: `
<h3>❤️ Meu Amor</h3>

<p>

Amoreco,

desde que você entrou na minha vida,
os dias ganharam mais cor,
os sorrisos ficaram mais sinceros
e os momentos simples se tornaram especiais.

Obrigado por existir.

❤️

</p>
`,

2: `
<h3>🌹 O Seu Sorriso</h3>

<p>

Seu sorriso tem o poder de transformar
qualquer dia difícil em um dia perfeito.

É impossível olhar para você
e não sentir felicidade.

❤️

</p>
`,

3: `
<h3>✨ Meu Lugar Favorito</h3>

<p>

Não importa onde eu esteja.

Meu lugar favorito sempre será
ao seu lado.

É onde encontro paz,
felicidade e amor.

❤️

</p>
`,

4: `
<h3>🌎 Meu Futuro</h3>

<p>

Quando penso no futuro,
imagino viagens,
conquistas,
novos sonhos
e você ao meu lado em cada um deles.

❤️

</p>
`,

5: `
<h3>💍 Para Sempre</h3>

<p>

Se eu pudesse escolher novamente,
escolheria você.

Hoje.

Amanhã.

E em todas as vidas possíveis.

Te amo, amoreco.

❤️

</p>
`

};

document.getElementById("carta-conteudo")
.innerHTML = cartas[numero];

}


function gerarSurpresa(){

const mensagens = [

"❤️ Você é a melhor parte dos meus dias.",

"🌹 Seu sorriso ilumina minha vida.",

"❤️ Obrigado por existir.",

"✨ Você torna tudo mais bonito.",

"❤️ Eu escolheria você novamente.",

"🌎 Meu lugar favorito é ao seu lado.",

"❤️ Você é meu maior sonho.",

"💌 Te amo mais do que consigo explicar.",

"❤️ Meu coração sorri quando pensa em você.",

"🌹 Você é minha pessoa favorita."

];

const sorteio =
mensagens[
Math.floor(
Math.random()*mensagens.length
)
];

document.getElementById(
"mensagem-surpresa"
).innerHTML = `

<div class="card-surpresa">

${sorteio}

</div>

`;

}


const perguntas = [

{

pergunta:
"Quem é o amor da vida dele?",

opcoes:[
"Gabriella",
"Outra pessoa",
"Ninguém"
],

correta:0

},

{

pergunta:
"Qual é o lugar favorito dele?",

opcoes:[
"A praia",
"A academia",
"Ao lado da Gabriella"
],

correta:2

},

{

pergunta:
"O que Gabriella representa para ele?",

opcoes:[
"Um sonho",
"Uma amiga",
"Uma colega"
],

correta:0

}

];

let perguntaAtual = 0;

let pontos = 0;

function iniciarQuiz(){

mostrarPergunta();

}

function mostrarPergunta(){

if(
perguntaAtual >= perguntas.length
){

document.getElementById(
"quiz-container"
).innerHTML = `

<div class="quiz-final">

<h2>
❤️ Você acertou
${pontos}
de
${perguntas.length}
❤️
</h2>

<p>
Você conhece muito bem a nossa história.
</p>

</div>

`;

return;

}

const atual =
perguntas[perguntaAtual];

document.getElementById(
"pergunta"
).innerHTML =
atual.pergunta;

let html = "";

atual.opcoes.forEach(

(opcao,index)=>{

html += `

<button
onclick="responderQuiz(${index})">

${opcao}

</button>

`;

}

);

document.getElementById(
"opcoes"
).innerHTML =
html;

}

function responderQuiz(indice){

if(
indice ===
perguntas[perguntaAtual].correta
){

pontos++;

}

perguntaAtual++;

mostrarPergunta();

}