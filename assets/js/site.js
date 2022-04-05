/* for submit buttons*/
const btnShop = document.querySelector('#toBilling');
const btnBill = document.querySelector('#toCard');
const btnCard = document.querySelector('#toConfirm');

btnShop.addEventListener('click', function(event){
    window.location.href = "../billing"
});

btnBill.addEventListener('click', function(event){
    window.location.href = "../card"
});

btnCard.addEventListener('click', function(event){
    window.location.href = "../confirm"
});
/*-----------------------------*/
