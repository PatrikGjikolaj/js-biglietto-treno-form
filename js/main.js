let genera = document.getElementById("calcola")

genera.addEventListener("click", function(){

    const prezzoPerKm = 0.21;
    let nome = document.getElementById("utente").value;
    let distanza = parseInt( document.getElementById("chilometri").value );
    let prezzo = 0;

    if( isNaN(distanza) ) {
        console.error("I chilometri non sono corretti");
    }
    
    prezzo = distanza * prezzoPerKm;

    let fasciaEta = document.getElementById("eta").value;


    if( fasciaEta=="1" ) {
        prezzo *= 0.8;
    } else if ( fasciaEta=="3") {
        prezzo *= 0.6;
    }
    prezzo = prezzo.toFixed(2);

    document.getElementById("importo").innerText = prezzo;

} );