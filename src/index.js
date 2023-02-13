import './less/index.less'

// Your code goes here!

const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', (e) => {
    e.target.style.background = 'green';
})

nav.addEventListener('mousedown', (e) => {
   e.target.style.background = 'purple';
})

/* mousedown, mouseup, and click
When you click an element, there are no less than three mouse events fire in the following sequence:

The mousedown fires when you depress the mouse button on the element.
The mouseup fires when you release the mouse button on the element.
The click fires when one mousedown and one mouseup detected on the element.
JavaScript mouse event - click event
If you depress the mouse button on an element and move your mouse off the element, and then release the mouse button. The only mousedown event fires on the element.

Likewise, if you depress the mouse button, move the mouse over the element, and release the mouse button, the only mouseup event fires on the element.

In both cases, the click event never fires.*/



const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'red';
    
})
logo.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'white';
})
logo.addEventListener('mouseover', (e) => {
 e.target.style.transform = 'rotate(360deg)';
 e.target.style.transition = '3s';

})
window.addEventListener('load', () => {
    alert('Fun Bus Adventures!!')
})
const header = document.querySelector('header')
 
header.addEventListener('wheel', function() {
 
header.style.background = 'yellow';
 
})

let help = document.querySelector('.logo-heading');
help.addEventListener('dragstart', (e) => {
    e.target.textContent = 'Have fun with  the FUN BUS!!'
});

// const introImg = document. querySelector('.intro');
// introImg.addEventListener('mouseenter', () => {
//     introImg.style.transform = 'scale(1.2)';
//     introImg.style.transition = 'all 0.3s';
    
// })
// introImg.addEventListener('mouseleave', (e) => {
//     e.target.transform = 'scale(0.0)';
   
// })

const introImg = document.querySelector('.intro');
introImg.addEventListener('resize', (e) => {
    e.target.resize = ''
})