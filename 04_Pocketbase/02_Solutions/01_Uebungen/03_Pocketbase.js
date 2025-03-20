/**
 * Aufgabe 3:
 * 
 * Kopieren Sie die Anfrage von Aufgabe 2 und fügen Sie zusätzlich einen Filter hinzu, 
 * sodass alle Filme mit einem Rating von 3 oder höher ausgegeben werden und nur solche, die im Kino laufen (isInCinema=true).
 */

// Achtung, das Zeichen & ist bereits reserviert in URLs, statt && müssen Sie also sie encodete Variante %26%26 verwenden
fetch("https://pb-stma.toiwxr.easypanel.host/api/collections/movies/records?filter=(rating>=3 %26%26 isInCinema=true)")
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
