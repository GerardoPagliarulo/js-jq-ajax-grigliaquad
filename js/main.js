$(document).ready( function () {
    /**
     *   QUADRATINI AJAX
     * 
     * - Griglia 6x6 (36 boxes), 
     *   ad ogni click parte una richiesta AJAX 
     *   che prende un numero random da 1 a 9 (scegliere API opportuna).
     * - Se è <= 5 il quadrato diventa giallo, se è > di 5 il quadrato diventa verde.
     * - Il numero ottenuto appare al centro del quadrato
     */
    // References
    var myApi =' https://flynn.boolean.careers/exercises/api/random/int';
    var boxes = $('.box');
    // Click Box
    boxes.click(function () {
        var self = $(this);
        // Chiamata Ajax numero random da 1 a 9
        $.ajax({
            url: myApi,
            method: 'GET',
            success: function (data) {
                //console.log(data);
                var number = data.response;
                // Controllo Valore
                if (self.text() === '0') {
                    // Assegnazione colore
                    if (number <= 5) {
                        self.addClass('yellow');
                    }
                    else if (number > 5) {
                        self.addClass('green');
                    }
                    self.text(number);
                }
                else {
                    alert('Casella già cliccata!');
                }
            },
            error: function () {
                console.log('ERRORE chiamata API');
            }
        });
    });
}); // <-- End Doc Ready