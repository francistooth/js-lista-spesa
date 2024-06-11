// creo lista della spesa

const groceries = ["coke", "frozen pizza", "monster", "cigarettes"];

// prendo gli elementi in pagina e li metto in delle variabili

let divList = document.getElementById("list");
let ul = document.createElement("ul");

// stampo gli elementi della lista in HTML 

// creazione variabile per il ciclo while

let i = 0;

// ciclo while

while (i < groceries.length) {
    let li = document.createElement("li");

    li.appendChild(document.createTextNode(groceries[i]));

    ul.appendChild(li);

    i++;
}

// usando il while!!

divList.appendChild(ul);