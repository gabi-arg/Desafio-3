const contPrincipal = document.querySelector('.container');
const contThanks = document.querySelector('.container-thanks');
const btnSubmit = document.querySelector('.container-btn-submit')
const btnNumber = document.querySelectorAll('.btn-number')
let selection = document.querySelector('.container-thanks-selection')


btnNumber.forEach(num => {
    num.addEventListener('click', ()=>{
            num.style.backgroundColor ='#FB7312';
            let selectNum = num.id
            selection.innerHTML =  `<p>You selected ${selectNum} out of 5</p>`
        })
        
    }); 
contThanks.style.display = 'none';
btnSubmit.addEventListener('click', ()=>{
    contPrincipal.style.display = 'none';
    contThanks.style.display = 'flex';
});