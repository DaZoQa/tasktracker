const cardCreate = document.getElementById("newCard");
const cards = document.getElementById("cards");

cardCreate.addEventListener("click", () => {
  createCard();
});

function createCard() {
  const card = document.createElement("div");
  const cardTitle = document.createElement("span");
  const cardImg = document.createElement("svg");

  cardTitle.textContent = "Название проекта";
  cardTitle.innerHTML += `<svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M17.4682 6.41667L12.4265 5.97917L10.4578 1.34375C10.1036 0.5 8.89527 0.5 8.5411 1.34375L6.57235 5.98958L1.5411 6.41667C0.624435 6.48958 0.249435 7.63542 0.947351 8.23958L4.77027 11.5521L3.62443 16.4688C3.4161 17.3646 4.38485 18.0729 5.17652 17.5938L9.49943 14.9896L13.8224 17.6042C14.614 18.0833 15.5828 17.375 15.3744 16.4792L14.2286 11.5521L18.0515 8.23958C18.7494 7.63542 18.3848 6.48958 17.4682 6.41667ZM9.49943 13.0417L5.58277 15.4062L6.62443 10.9479L3.1661 7.94792L7.7286 7.55208L9.49943 3.35417L11.2807 7.5625L15.8432 7.95833L12.3849 10.9583L13.4265 15.4167L9.49943 13.0417Z"
    fill="#AEAEAE" />
</svg>`;

  card.classList.add("card");
  cardTitle.classList.add("card-title");

  card.appendChild(cardTitle);

  cards.appendChild(card);
}
