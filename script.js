const searchInput = document.querySelector("#fruit");
const suggestionsContainer = document.querySelector(".suggestions");
const searchContainer = document.querySelector(".suggestions-wrap");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function filterSuggestions() {
  const suggestionList = fruit;
  let searchValue = searchInput.value;
  let recommendedList = [];
  if (searchValue.length) {
    recommendedList = suggestionList.filter((ListItem) =>
      ListItem.toLocaleLowerCase().includes(searchValue.toLowerCase())
    );
  }
  showRecommendedList(recommendedList);
}

function showRecommendedList(recommendedList) {
  if (!recommendedList.length) {
    return searchContainer.classList.remove("show");
  }
  searchContainer.classList.add("show");
  suggestionsContainer.innerHTML = "";
  recommendedList.map((recommendedItem) => {
    const li = document.createElement("li");
    li.textContent = recommendedItem;
    suggestionsContainer.appendChild(li);
  });
}

function useSuggestion(e) {
  searchInput.value = e.target.innerText;
  suggestionsContainer.innerHTML = "";
}

searchInput.addEventListener("keyup", filterSuggestions);
suggestionsContainer.addEventListener("click", useSuggestion);
