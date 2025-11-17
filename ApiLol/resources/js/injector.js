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
    const guess = document.getElementById("guessInput").value.toLowerCase();
    const cardsDiv = document.getElementById("cards");
    const resultDiv = document.getElementById("result");
    const hintsDiv = document.getElementById("hints");
    const checkGuess = fetch("http://localhost://characters/")
    if (!randomChampion) return;

    const championName = randomChampion.name.toLowerCase();
    
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