
let infoForm = document.querySelector('.form-update .info-update');
console.log(infoForm);
document.querySelector('#btn-info').addEventListener('click', function() {
    console.log("has update");
    infoForm.classList.toggle('active');
});

let accForm = document.querySelector('.form-update .account-update');
console.log(accForm);
document.querySelector('#btn-acc').addEventListener('click', function() {
    console.log("has update");
    accForm.classList.toggle('active');
})

document.querySelector('#close-info').addEventListener('click', function() {
    console.log("has close");
    infoForm.classList.remove('active');
});

document.querySelector('#close-acc').addEventListener('click', function() {
    console.log("has close");
    accForm.classList.remove('active');
});