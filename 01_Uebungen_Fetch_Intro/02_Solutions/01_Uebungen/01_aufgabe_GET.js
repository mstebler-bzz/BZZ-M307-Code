/**
 * Aufgabe:
 * Machen Sie eine GET-Request auf den Testserver und prüfen Sie, ob der Request ok ist (200)
 *
 *  Testserver URL: https://m307test.requestcatcher.com/test?name=IHRNAME
 */

fetch('https://m307test.requestcatcher.com/test?name=IHRNAME')
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
