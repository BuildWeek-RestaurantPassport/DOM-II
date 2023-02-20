import './less/index.less'

// Your code goes here!


/* mousedown, mouseup, and click
When you click an element, there are no less than three mouse events fire in the following sequence:

The mousedown fires when you depress the mouse button on the element.
The mouseup fires when you release the mouse button on the element.
The click fires when one mousedown and one mouseup detected on the element.
JavaScript mouse event - click event
If you depress the mouse button on an element and move your mouse off the element, and then release the mouse button. The only mousedown event fires on the element.

Likewise, if you depress the mouse button, move the mouse over the element, and release the mouse button, the only mouseup event fires on the element.

In both cases, the click event never fires.*/



window.addEventListener('load', () => {
    alert('Fun Bus Adventures!!')
})
const header = document.querySelector('header')
 
header.addEventListener('wheel', function() {
 
header.style.background = 'yellow';
 
})
const nav = document.querySelector('.nav');
nav.addEventListener('mouseup', (e) => {
    e.target.style.background = 'green';
})

nav.addEventListener('mousedown', (e) => {
   e.target.style.background = 'purple';
})
let help = document.querySelector('.logo-heading');
help.addEventListener('dragstart', (e) => {
    e.target.textContent = 'Have fun with  the FUN BUS!!';

    help.addEventListener('dragend', (e) => {
      e.target.classList.textContent.remove = 'Have fun with  the FUN BUS!!'
    })
});

const introImg = document. querySelector('.intro');
introImg.addEventListener('mouseenter', (e) => {
  e.target.style.backgroundColor = 'red';
    
  introImg.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
  })
})




function buttonCreator(text){
    let button = document.createElement('button');// creates butoon in memory
  
    button.textContent = text;
    button.classList.add('button');// adds a class
    button.classList.add('large-button');// adds a class
  
  
  
    button.addEventListener('click', (event) => {
      alert(`The button clicked says: ${event.target.textContent}`)
    });
    return button
  }
  
  const button = buttonCreator('THIS IS A BUTTON COMPONENT');
  const button2 = buttonCreator('THIS IS A SECOND COMPONENT');
  console.log('the product is this:', button)
  
  
  let textContent = document.querySelector('.text-content');// parent element
  textContent.appendChild(button);
  textContent.appendChild(button2)
  textContent.appendChild(buttonCreator('THIS IS A THIRD COMPONENT'));
  textContent.appendChild(buttonCreator('THIS IS A FOURTH COMPONENT'));
  



