let randomChampion = null;

fetchData();

async function fetchData() {
    try {
        const response = await fetch("http://localhost:58681/characters/");
        if (!response.ok) throw new Error("Couldn't fetch data");
        const data = await response.json();
        randomChampion = data[Math.floor(Math.random() * data.length)];
        console.log(randomChampion);

    } catch (error) {
        console.error(error);
    }
}

async function checkGuess() {
    // Guess vai ser obtido de dentro do html, quando o usuário inserir o nome do personagem dele.
    const guess = document.getElementById("guessInput").value.toLowerCase();

    // Cards DEVEM ser SEMPRE acionadas, idependente de acerto ou de erro.
    // É através dos cards que o usuário deve chegar a resposta final.
    // Pois com os cards, é revelado ao usuário o quanto falta para ele acertar o todo.
    const cardsDiv = document.getElementById("cards");

    // Div teste só para funcionar como contexto visual de acerto ou erro. Deve ser repensada antes de finalmente
    // Ser enviada para develop
    const resultDiv = document.getElementById("result");

    // Hints (Dicas)
    // Eu realmente to pensando sobre como implementar ou SE realmente vale a pena implementar um sistema de dicas.
    const hintsDiv = document.getElementById("hints");

    // minha tentativa falha de puxar o personagem digitado no guess dando fetch no nome da guess. mas precisa de uma validação melhor
    const checkGuess = fetch(`http://localhost://characters/${guess}`)

    // Se o campeão aleatório não existir
    if (!randomChampion) return;

    // Pega o nome do campeão aleatório e o deriva a uma variável com letras minúsculas, evitar erro de camel case do user.
    const championName = randomChampion.name.toLowerCase();

    // Laço de acerto, só entra quando o usuário acerta.
    if (guess === championName) {
        cardsDiv
            .innerHTML = `<div class="card">
                        <img src="${randomChampion.imageUrl}" alt="${randomChampion.name}">
                        <h3>${randomChampion.name}</h3>
                        <p>Region: ${randomChampion.region}</p>
                        <p>Resource: ${randomChampion.resource}</p>
                        <p>Year: ${randomChampion.year}</p>
                        <p>Type: ${randomChampion.type}</p>
                        </div>`;
        resultDiv.className = "result correct";
        resultDiv.textContent = "✓ Correct!";
        hintsDiv.textContent = `Region: ${randomChampion.region} | Resource: ${randomChampion.resource} | Year: ${randomChampion.year} | Type: ${randomChampion.type}`;
    } else {
        resultDiv.className = `${guess}`;
        // if (guess.region === randomChampion.region)
        cardsDiv.innerHTML = `
        
        `;
        resultDiv.textContent = "✗ Wrong! Try again.";

        hintsDiv.textContent = `Hint: Year ${randomChampion.year} | Region: ${randomChampion.region}`;
    }
}