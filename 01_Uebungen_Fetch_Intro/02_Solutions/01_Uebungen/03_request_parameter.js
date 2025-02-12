/**
 * Aufgabe 1:
 * Bringen Sie in Erfahrung, was Query-String-Parameter sind und wie sie in einer URL aussehen.
 * 
 * 1) Schreiben Sie unten einen kurzen Satz als erklärung was Query-String-Parameter sind.
 * 2) Machen Sie ein Beispiel einer URL mit Query-String-Parametern.
 */

/**
 * Erklärung: 
Query-Parameter sind zusätzliche Informationen, die in der URL einer Anfrage übergeben werden, um spezifische Daten oder Einstellungen anzugeben.
Sie stehen nach dem Fragezeichen ? in der URL und bestehen aus Schlüssel-Wert-Paaren, die durch ein Gleichheitszeichen = verbunden sind.
Mehrere Parameter werden durch ein & getrennt.
Query-Parameter sind sichtbar im Aufruf (Browser), im Gegensatz zu POST-Daten, welche im "body" des Requests mitgesendet werden.
 */
// https://m307test.requestcatcher.com/test?name=IHRNAME&hobby=Tanzen


/**
 * Aufgabe 2:
 * Machen Sie einen GET-Request mit Query-String-Parametern auf den Testserver sodass die Spalte "Query Params" wie folgt aussieht: {"vorname": "IHRNAME"}
 */

fetch('https://m307test.requestcatcher.com/test?vorname=IHRNAME')
    .then(response => {
        if (response.ok) {
            // gibt der Server die Antwort im Format json zurück --> response.json()
            // gibt der Servier die Antwort als reinen Text zurück, z.B. HTML --> response.text()
            // wollen wir das komplette response-Objekt zurückgeben, mit allen Infos wie Statuscode --> response
            return response;
        } else {
            throw new Error('Fehler beim Request');
        }
    })
    .then(response => {
        // gibt die response auf die Konsole aus, damit wir sie sehen können
        console.log(response)
    });
