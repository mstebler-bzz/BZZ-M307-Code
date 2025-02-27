// Sende einen Request and die gewünschte URL.
// Falls keine HTTP-Methode angegeben wird, wird automatisch GET verwendet
fetch('https://jsonplaceholder.typicode.com/posts')
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
