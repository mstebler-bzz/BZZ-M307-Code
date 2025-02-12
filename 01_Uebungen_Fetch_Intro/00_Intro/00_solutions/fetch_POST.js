// Daten-Obhekt vorbereiten, das wir an den Server senden wollen
let inputData = {
    name: 'Max',
};

// Daten-Objekt zu einem JSON-String umwandeln
let jsonInputData = JSON.stringify(inputData);

// Sende einen Request an den Server
fetch('https://m307test.requestcatcher.com/test?name=IHRNAME',{
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
            // gibt der Server die Antwort im Format json zurück --> response.json()
            // gibt der Servier die Antwort als reinen Text zurück, z.B. HTML --> response.text()
            // wollen wir das komplette response-Objekt zurückgeben, mit allen Infos wie Statuscode --> response
            return response;
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
