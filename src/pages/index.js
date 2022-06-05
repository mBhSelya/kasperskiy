const buttonSelect = document.querySelector('.buy-block__select-button');
const buttonSelectText = document.querySelector('.buy-block__select-button-text');
const selectItems = document.querySelectorAll('.buy-block__select-item');
const containerSelect = document.querySelector('.buy-block__select');
const newPrice = document.querySelector('.buy-block__price-new-big');
const buyBlock = document.querySelector('.buy-block');
const intro = document.querySelector('.intro');
const fullBlock = document.querySelector('.buy-block__full');
const miniBlock = document.querySelector('.buy-block__mini');
const miniPrice = document.querySelector('.buy-block__mini-price');
const miniLength = document.querySelector('.buy-block__mini-length');
const miniInfo = document.querySelector('.buy-block__mini-info');

function handleSelectActive() {
    selectItems.forEach((item) => {
        item.classList.toggle('buy-block__select-item_show');
    })
    containerSelect.classList.toggle('buy-block__select_active')
}

buttonSelect.addEventListener('click', () => {
    handleSelectActive();
})

function handleСhoice(e) {
    buttonSelectText.textContent = e.target.textContent.slice(0, -7);
    newPrice.textContent = e.target.textContent.slice(-6, -3)
    miniPrice.textContent = e.target.textContent.slice(-7, e.target.textContent.length);
    miniLength.textContent = e.target.textContent.slice(-e.target.textContent.length, -7);
    console.log();
    selectItems.forEach((item) => {
        item.classList.remove('buy-block__select-item_active');
    }) 
    e.target.classList.add('buy-block__select-item_active');
}

selectItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        handleСhoice(e);
        handleSelectActive();
    })
})

miniInfo.addEventListener('click', openBlock);

function openBlock() {
    miniBlock.classList.toggle('buy-block__mini_active');
    fullBlock.classList.toggle('buy-block__full_active');
    buyBlock.classList.add('buy-block_mini-full');
}

document.addEventListener('scroll', scrolling);
let oldRect = intro.getBoundingClientRect();

function scrolling(event) {
    event.preventDefault();
    console.log('asd');
    let rect = intro.getBoundingClientRect();
    console.log(rect);
    if( rect.width > 1128) {
        return
    }
    if (oldRect.top != rect.top) {
            if (rect.top < 0) {
                buyBlock.classList.add('buy-block_mini')
                miniBlock.classList.add('buy-block__mini_active');
                fullBlock.classList.remove('buy-block__full_active');
                buyBlock.classList.remove('buy-block_mini-full');
            } else {
                buyBlock.classList.remove('buy-block_mini');
                miniBlock.classList.remove('buy-block__mini_active');
                fullBlock.classList.add('buy-block__full_active');
                buyBlock.classList.remove('buy-block_mini-full');
            }
    }
    oldRect = rect;
}