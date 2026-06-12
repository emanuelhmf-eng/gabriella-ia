const respostas = {

"oi":

"Olá Gabriella ❤️",

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
placeholder="Faça uma pergunta"
>

<button onclick="responder()">
Enviar
</button>

<div id="resposta"></div>

`;

}

async function responder(){

const pergunta =
document.getElementById("pergunta").value;

document.getElementById("resposta")
.innerHTML = "❤️ Pensando...";

try{

const resposta =
await perguntarIA(pergunta);

document.getElementById("resposta")
.innerHTML = resposta;

}
catch(error){

document.getElementById("resposta")
.innerHTML =
"❤️ Não consegui responder agora.";

}

}


function perguntaRapida(texto){

document.getElementById("pergunta")
.value = texto;

responder();

}