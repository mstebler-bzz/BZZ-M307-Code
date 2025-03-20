/**
 * 
 * Besuchen Sie die Ihnen zugewiesen Pocketbase Instanz und loggen Sie sich ein.

Aufgabe 1:
Erstellen Sie eine neue Collection mit dem Namen "movies".
Fügen Sie der Collection folgende Spalten hinzu:
- title (String / plain text)
- year (Number)
- rating (Number)
- genre (String)
- director (String)
- isInCinema (Boolean)

Aufgabe 1b:
Jedes Teammitglied fügt 2 Filme in die Collection ein.
*/


/**
 * Aufgabe 1c:
 * Versuchen Sie mittels "fetch" alle Filme aus der Collection zu lesen und geben Sie diese in der Konsole aus.
 * Den Aufbau der entsprechenden URL finden Sie in den Unterrichtsfolien. Versuchen Sie die korrekte URL für Ihre Gruppe zusammenzustellen, um ihre Filme zu lesen.
 */

fetch("https://pb-stma.toiwxr.easypanel.host/api/collections/movies/records")
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
