// declaration 
var hearts = document.getElementsByClassName("like");
var qte = document.getElementsByClassName("Quant");
var min = document.getElementsByClassName("minus-btn");
var plus = document.getElementsByClassName("plus-btn");
var del = document.getElementsByClassName("delete");
var price = document.getElementsByClassName("price");
var total = document.getElementById("finalPrice");


// Update total

for (var i = 0; i < qte.length; i++) {
    qte[i].addEventListener('change', function () {
        updateTotal();
    });
}

function updateTotal() {
    var totalPrice = 0;
    for (var i = 0; i < qte.length; i++) {
        totalPrice += (parseInt(qte[i].value) * parseFloat(price[i].textContent));
    }
    total.value = totalPrice;
}

// delete function & update

for (var i = 0; i < del.length; i++) {
    (function (i) {
        del[i].addEventListener('click', function () {
            DeleteEl(qte[i]);
            updateTotal();
        });
    })(i);
}

function DeleteEl(qte) {
    qte.value = 0;
}

// min function

for (var i = 0; i < min.length; i++) {
    (function (i) {
        min[i].addEventListener('click', function () {
            minQte(qte[i]);
        });
    })(i);
}

function minQte(qte) {
    if (qte.value > 1) {
        qte.value = parseInt(qte.value) - 1;
        updateTotal();
    }
}

// plus function

for (var i = 0; i < plus.length; i++) {
    (function (i) {
        plus[i].addEventListener('click', function () {
            plusQte(qte[i]);
            updateTotal();
        });
    })(i);
}

function plusQte(qte) {
    qte.value = parseInt(qte.value) + 1;
}

// Change heart Color

for (var i = 0; i < hearts.length; i++) {
    hearts[i].addEventListener('click', function () {
        ChangeColor(this);
    });
}

function ChangeColor(heart) {
    if (heart.style.color == "red") {
        heart.style.color = "black";
    } else {
        heart.style.color = "red";
    }
}