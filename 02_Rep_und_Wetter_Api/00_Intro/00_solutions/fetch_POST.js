// Senden Sie einen POST-Request an https://jsonplaceholder.typicode.com/posts und geben Sie Ihren Namen sowie ihre Lieblingspizza mit
// https://jsonplaceholder.typicode.com/posts

// Daten-Obhekt vorbereiten, das wir an den Server senden wollen
let inputData = {
    name: 'Santiago',
    lieblingsPizza: 'Margherita'
};

// Daten-Objekt zu einem JSON-String umwandeln
let jsonInputData = JSON.stringify(inputData);

// Sende einen Request an den Server
fetch('https://jsonplaceholder.typicode.com/posts',{
        // weil wir Daten mitsenden, ist es ein POST-Request
        method: 'POST',
        // die Daten, den wir senden, sind in JSON-Format
        headers: {
            'Content-Type': 'application/json'
        },
        // hier geben wir unsere Daten dem Request mit
        body: jsonInputData
    })
    // warten auf die Antwort des Servers
    .then(response => { 
        // dann prüfen, ob der Request erfolgreich ist (2XX Statuscode)
        if (response.ok) {
            // wir erhalten eine JSON-Antwort, das heisst wir wandeln zu JSON UM --> response.json()
            return response.json();
        } else {
            // Fehler werfen
            throw new Error('Fehler beim Request');
        }
    })
    // warten bis die Umwandlung fertig ist
    .then(data => {
        // dann die Daten in die Browser-Konsole ausgeben
        console.log(data); 
    })
    // FALLS ein Fehler auftritt bei den oberen Schritten
    .catch(err => { 
        // Fehler auf die Browser-Konsole ausgeben
        console.log(err); 
    });
