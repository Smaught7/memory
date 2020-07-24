const cardsColor = ["red", "red", "green", "green", "blue", "blue", 
"brown", "brown", "yellow", "yellow", "gray", "gray", "orange", "orange", 
"violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
console.log(cards);
console.log(cards instanceof Array);
cards = [...cards]; /*zamiana nodelist na tablice */
console.log(cards);
console.log(cards instanceof Array);



const clickCard = function(){
    console.log("Klik klik");
};

const init = function() {
    cards.forEach(card => {
        const position = Math.floor(Math.random()*cardsColor.length);
        card.classList.add(cardsColor[position]);
        cardsColor.splice(position, 1);
    })

    setTimeout(function() {
        cards.forEach(card => {
            card.classList.add("hidden")
            card.addEventListener("click",  clickCard);
        })
    }, 2000)
}

init();