let names = [
    "Sentino",
    "Szpaku",
    "OIO",
];

// ASC SORT
let sortedNames = names.sort(); 

// REFRENCE
let input = document.getElementById("input");

// EXECUTE
input.addEventListener("keyup", (e) => {
    // LOOP 
    // INITIAL REMOVE ELEMENTS
    removeElements();
    for(let i of sortedNames){
        // CONVERT INPUT TO LOWER CASE
        if ( i.toLowerCase().startsWith(input.value.toLowerCase()) && input.value != ""){
            // CREATE LI ELEMENT
            let listItem = document.createElement("li");
            listItem.classList.add("list-items");
            listItem.style.cursor = "pointer";
            listItem.setAttribute("onclick", "dispalyNames('" + i + "')");
            // DISPLAY MATCHES
            let word = "<b>" + i.substr(0, input.value.length) + "</b>";
            word += i.substr(input.value.length);
            // DISPLAY VALUE IN ARRAY
            listItem.innerHTML = word;
            document.querySelector(".list").appendChild(listItem); 
        }
    }
});

function dispalyNames(value){
    input.value = value;
    removeElements();
}

function removeElements(){
    // CLEAR ALL ITEMS
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}