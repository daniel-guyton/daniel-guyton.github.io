// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
let unicorns = document.querySelectorAll('.inflate-an-image')

unicorns.forEach((unicorn, index) => {
  unicorn.addEventListener('click', () => {
    if (unicorn.src.match('./images/unicorn-0.png')) {
      unicorn.src = './images/unicorn-1.png'
    } else if (unicorn.src.match('./images/unicorn-1.png')) {
      unicorn.src = './images/unicorn-2.png'
    } else if (unicorn.src.match('./images/unicorn-2.png')) {
      unicorn.src = './images/unicorn-3.png'
      alert(`Unicorn number ${index + 1} says thanks you!`)
    }
  })
})

//https://www.freecodecamp.org/news/javascript-regex-match-example-how-to-use-the-js-replace-method-on-a-string/
// on click go to next image

// specify a index for each image

// add an event argument to your function to be able to identify which element is clicked.