const button = document.querySelector('.works__btn-active');
const hiddenItems = document.querySelectorAll('.hidden-item');
let isHidden = true;
button.addEventListener('click', () => {
    button.textContent = isHidden
        ? 'Hide'
        : 'See all';

    isHidden = !isHidden;
    hiddenItems.forEach(item => item.classList.toggle('hidden'));
});
