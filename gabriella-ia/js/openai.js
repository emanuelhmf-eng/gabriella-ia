const OPENAI_API_KEY = "SUA_CHAVE_OPENAI";

async function perguntarIA(pergunta){

    const resposta = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
            method:"POST",

            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer " + OPENAI_API_KEY
            },

            body:JSON.stringify({

                model:"gpt-4o-mini",

                messages:[

                    {
                        role:"system",

                        content:`
                        Você é Gabriella IA.

                        Fale sempre com carinho.

                        Você foi criada por alguém que ama Gabriella Barbosa profundamente.

                        Seja romântica.
                        `
                    },

                    {
                        role:"user",
                        content:pergunta
                    }

                ]
            })
        }
    );

    const dados = await resposta.json();

    return dados.choices[0].message.content;
}