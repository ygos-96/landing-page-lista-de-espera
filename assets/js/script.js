document.addEventListener("DOMContentLoaded", function () {

    var modal = document.getElementById("modal-lista-de-espera");

    var btns = document.querySelectorAll(".abrir-modal, .abrir-modal-mob");


    var span = document.querySelector(".btn-fechar");

    btns.forEach(function (btn) {
        btn.onclick = function () {
            modal.style.display = "block";
        }
    });

    span.onclick = function () {
        modal.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});