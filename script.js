// Declaration 
var hearts = document.getElementsByClassName("like");
var qte = document.getElementsByClassName("Quant");
var min = document.getElementsByClassName("minus-btn");
var plus = document.getElementsByClassName("plus-btn");
var del = document.getElementsByClassName("delete");
var price = document.getElementsByClassName("price");
var total = document.getElementById("finalPrice");


// Update Total

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

// Delete Function & Update Total

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

// Min Function & Update Total

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

// Plus Function & Update Total

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

// Change Heart Color

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