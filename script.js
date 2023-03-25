// LISTA RAPERÓW
let raperNames = [
    "Sentino",
    "Szpaku",
    "OIO",
];

// GLOBALNY VAR
var iloscprob;

// LOSOWANIE RAPERA
const randomRaper = Math.floor(Math.random() * raperNames.length);
var wylosowanyRaper = raperNames[randomRaper];

console.log("Wylosowany raper "+wylosowanyRaper);

// WPISYWANIE DO TABELI
function AddToTable() {
    // Pobranie rapera z pola input
    let inputRaper = document.getElementById("input").value;

    // Zamiana nicku wpisanego rapera na male litery
    let inputstring = inputRaper.toLowerCase();

    // Zamiana nicku wylosowanego rapera na male litery
    let wylosowanyraperLowerCase = wylosowanyRaper.toLowerCase();

    var table = document.getElementById("GuessesTable");
    var tdbg = document.getElementById("GuessesTable").getElementsByTagName("td");

    if (!inputRaper) {
        Swal.fire({
            icon: 'error',
            title: 'Nie możesz zostawić tego pola pustego :(',
            confirmButtonColor: "#DEE2E6",
        })
    }else if (raperNames.indexOf(inputRaper) == -1 ){
        Swal.fire({
            icon: 'error',
            title: 'Nie znamy nikogo takiego :/',
            text: 'Sprawdź czy napewno wybrałeś osobę którą chciałeś wybrać',
            confirmButtonColor: "#DEE2E6",
        })
    }else{
        var row = table.insertRow(1);

        let cell_photo = row.insertCell(0);
        let cell_groupsize = row.insertCell(1);
        let cell_gender = row.insertCell(2);
        let cell_genre = row.insertCell(3);
        let cell_nationality = row.insertCell(4);
        let cell_born = row.insertCell(5);
        let cell_album = row.insertCell(6);

        // ZDJECIE
        cell_photo.innerHTML = "<img src='"+raperzy.find(raper => raper.name == inputstring).details.photo+"' width='80px' height='80px'> ";
        
        // ILOSC WYKONAWCOW
        if( (raperzy.find(raper => raper.name == inputstring).details["group-size"]) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details["group-size"]) ){
            tdbg[8].style.backgroundColor = "green";
            cell_groupsize.innerHTML = raperzy.find(raper => raper.name == inputstring).details["group-size"];
        }else{
            tdbg[8].style.backgroundColor = "red";
            cell_groupsize.innerHTML = raperzy.find(raper => raper.name == inputstring).details["group-size"];
        }

        // PŁEĆ
        if( (raperzy.find(raper => raper.name == inputstring).details.gender) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details.gender) ){
            tdbg[9].style.backgroundColor = "green";
            cell_gender.innerHTML = raperzy.find(raper => raper.name == inputstring).details.gender;
        }else{
            tdbg[9].style.backgroundColor = "red";
            cell_gender.innerHTML = raperzy.find(raper => raper.name == inputstring).details.gender;
        }

        // GATUNEK
        if( (raperzy.find(raper => raper.name == inputstring).details.genre) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details.genre) ){
            tdbg[10].style.backgroundColor = "green";
            cell_genre.innerHTML = raperzy.find(raper => raper.name == inputstring).details.genre;
        }else{
            tdbg[10].style.backgroundColor = "red";
            cell_genre.innerHTML = raperzy.find(raper => raper.name == inputstring).details.genre;
        }

        // NARODOWOSC
        if( (raperzy.find(raper => raper.name == inputstring).details.nationality) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details.nationality) ){
            tdbg[11].style.backgroundColor = "green";
            cell_nationality.innerHTML = raperzy.find(raper => raper.name == inputstring).details.nationality;
        }else{
            tdbg[11].style.backgroundColor = "red";
            cell_nationality.innerHTML = raperzy.find(raper => raper.name == inputstring).details.nationality;
        }

        // KRAJ URODZENIA
        if( (raperzy.find(raper => raper.name == inputstring).details["born-country"]) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details["born-country"]) ){
            tdbg[12].style.backgroundColor = "green";
            cell_born.innerHTML = raperzy.find(raper => raper.name == inputstring).details["born-country"];
        }else{
            tdbg[12].style.backgroundColor = "red";
            cell_born.innerHTML = raperzy.find(raper => raper.name == inputstring).details["born-country"];
        }

        // ROK WYDANIA DEBIUTANCKIEGO ALBUMU
        if( (raperzy.find(raper => raper.name == inputstring).details.album) == (raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details.album) ){
            tdbg[13].style.backgroundColor = "green";
            cell_album.innerHTML = raperzy.find(raper => raper.name == inputstring).details.album;
        }else{
            tdbg[13].style.backgroundColor = "red";
            cell_album.innerHTML = raperzy.find(raper => raper.name == inputstring).details.album;
        }
    }
    // SPRWDZENIE CZY PODANO WYLOSOWANEGO RAPERA
    check()
}

function winalert(){
    let wylosowanyraperLowerCase = wylosowanyRaper.toLowerCase();
    Swal.fire({
        title: 'Tak jeeeest!',
        text: 'Twoim wylosowanym raperem jest '+(raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).name).toUpperCase()+'!',
        imageUrl: raperzy.find(raperdwa => raperdwa.name == wylosowanyraperLowerCase).details.photo,
        imageWidth: 200,
        imageHeight: 200,
        confirmButtonColor: "#DEE2E6",
        footer: '<a href="javascript:startnewgame()">Zagraj ponownie</a>'
    })
    document.getElementById("input").disabled = true;
    document.getElementById("check-btn").disabled = true;
}

function check(){
    let wpisanyRaper = document.getElementById("input").value;
    let wpisanyRaperLowerCase = wpisanyRaper.toLowerCase();
    let wylosowanyraperLowerCase = wylosowanyRaper.toLowerCase();

    if ( wpisanyRaperLowerCase == wylosowanyraperLowerCase ){
        setTimeout(winalert, 300);
    }else{
        counter();
    }
}

function startnewgame(){
    location.reload();
}

function counter() {

}