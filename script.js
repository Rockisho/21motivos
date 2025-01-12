// Lista dos 21 motivos
const reasons = [
  "Seu sorriso que melhora em 100% o meu dia.",
  "O jeito que você se preocupa comigo.",
  "Sua bondade e generosidade.",
  "A forma como você me faz sentir amado.",
  "Seu senso de humor bastante duvidoso",
  "O carinho que você me dá diariamente.",
  "O seu chá maravilhoso.",
  "A forma como você sempre me apoia.",
  "Sua paciência comigo, mesmo nos meus piores dias.",
  "A maneira como você me inspira a ser melhor.",
  "Seu abraço é o meu lugar favorito.",
  "Sua inteligência e sabedoria.",
  "Você é minha MasterChef.",
  "A maneira como você me entende sem precisar de palavras.",
  "Seu companheirismo e lealdade.",
  "A forma como você valoriza as pequenas coisas.",
  "Você sempre está certa.",
  "Sua beleza, por dentro e por fora.",
  "O jeito que você transforma momentos simples em especiais.",
  "A maneira que você me olha",
  "Porque simplesmente, você é você."
];

// Elementos do DOM
const revealButton = document.getElementById("reveal-button");
const reasonsList = document.getElementById("reasons-list");

// Variável para acompanhar o motivo atual
let currentReasonIndex = 0;

// Função para revelar o próximo motivo
function revealReason() {
  if (currentReasonIndex < reasons.length) {
    // Criar um novo item na lista
    const listItem = document.createElement("li");
    listItem.innerHTML = `<span>Motivo ${currentReasonIndex + 1}:</span> ${reasons[currentReasonIndex]}`;
    
    // Adicionar o motivo à lista
    reasonsList.appendChild(listItem);
    
    // Incrementar o índice
    currentReasonIndex++;
  } else {
    // Quando terminar os motivos
    revealButton.disabled = true;
    revealButton.textContent = "Todos os motivos já foram revelados!";
    revealButton.style.background = "#ccc";
    revealButton.style.cursor = "not-allowed";
  }
}

// Adicionar evento ao botão
revealButton.addEventListener("click", revealReason);
