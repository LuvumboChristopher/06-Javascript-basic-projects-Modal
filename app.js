// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const btn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal-overlay');
const modalCloseBtn = document.querySelector('.close-btn');

btn.addEventListener('click', ()=>{
    modal.classList.add('open-modal');
})

modalCloseBtn.addEventListener('click',()=>{
    modal.classList.remove('open-modal');
})