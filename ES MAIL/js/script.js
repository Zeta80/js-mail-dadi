const emails = ["pippo@gmail.com", "judy@gmail.com", "panam@gmail.com", "john@gmail.com"];

// Chiedere all'utente che mail cerca
const userMail = prompt("Quale mail stai cercando?");

// Per ogni elemento
let isFound = false;

for (let i = 0; i < emails.length; i++) {
    const thisEmail = emails[i];
    // Se l'elemento corrisponde alla stringa di ricerca
    // isFound = "trovato"
    // ALTRIMENTI non faccio niente
    if (thisEmail == userMail) {
        isFound = true;
    }

    console.log(userMail, thisEmail, isFound);
}

if (isFound) {
    alert("Email trovata con successo, procedere con log-in")
} else {
    alert("Errore, Email non trovata, creare account")
}

