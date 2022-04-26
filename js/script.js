document.getElementById("submit").addEventListener("click", event => {
    var distance = document.getElementById("distance").value;
    var na100 = document.getElementById("na100").value;
    var cena = document.getElementById("cena").value;
    var check = document.getElementById("check");

    if (check.checked) {
        result.innerHTML = "<br><br>Spalisz " + ((distance / 100) * na100) + " litrów paliwa i zapłacisz " + Math.round((((distance / 100) * na100) * cena) * 100) / 100 + " zł";
    }

    else {
        result.innerHTML = "<br><br>Spalisz " + ((distance / 100) * na100) + " litrów paliwa";
    }
})

document.getElementById("reset").addEventListener("click", event => {
    document.getElementById("result").innerHTML = "";
})