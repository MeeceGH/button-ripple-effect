const button = document.querySelector('.btn');

button.addEventListener('click', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    const top = e.target.offsetTop;
    const left = e.target.offsetLeft;

    const xInside = x - left;
    const yInside = y - top;

    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.top = yInside + 'px';
    ripple.style.left = xInside + 'px';

    this.appendChild(ripple);

    setTimeout(() => ripple.remove(), 500)
})