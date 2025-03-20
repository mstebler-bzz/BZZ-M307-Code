/**
 * Aufgabe 2: 
 * 
 * Kopieren Sie die Anfrage von Aufgabe 1c und fügen Sie einen Filter hinzu, 
 * sodass nur Filme mit einem Rating von 3 oder höher ausgegeben werden (Infos auf Folien zu Filtern).
 */

fetch("https://pb-stma.toiwxr.easypanel.host/api/collections/movies/records?filter=(rating>=3)")
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
