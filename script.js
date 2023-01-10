// Declaration 
let hearts = document.querySelectorAll(".like")
let qte = document.querySelectorAll(".Quant")
let min = document.querySelectorAll(".minus-btn")
let plus = document.querySelectorAll(".plus-btn")
let total = document.getElementById("finalPrice")
let del = document.querySelectorAll(".delete")
let DivItems = document.querySelector(".items")
let ItemDiv = document.querySelectorAll('.Item')

updateTotal()

for (let i = 0; i < hearts.length; i++) {

    // Change Heart Color
    hearts[i].addEventListener('click', function () {
        if (hearts[i].style.color == "red") {
            hearts[i].style.color = "black"
        } else {
            hearts[i].style.color = "red"
        }
    })

    // Plus Function & Update Total
    plus[i].addEventListener('click', function () {
        qte[i].value ++
        updateTotal()
    })

// Min Function & Update Total
    min[i].addEventListener('click', function () {
        if (qte[i].value > 1) {
            qte[i].value --
            updateTotal()
        }
    })


// Delete Function & Update Total
    del[i].addEventListener('click', function () {
        DivItems.removeChild(ItemDiv[i])
        updateTotal()
    })


// change qte & Update Total 
    qte[i].addEventListener('change', function () {
        updateTotal()
    })
}


// function updte total price
function updateTotal() {
    let price = document.querySelectorAll(".price")
    let qte = document.querySelectorAll(".Quant")

    let totalPrice = 0
    for (let i = 0; i < qte.length; i++) {
        totalPrice += qte[i].value * price[i].textContent
    }
    total.value = totalPrice
}
