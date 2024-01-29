// Description: This file contains the javascript code for the animations of the website.

//when top animation is needed

const observer1 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('up-animation');
        }
    });
});

const targets1 = document.querySelectorAll('.up');
targets1.forEach((target1) => observer1.observe(target1));

//when left animation is needed
const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('left-animation');
        }
    });
});

const targets2 = document.querySelectorAll('.left');
targets2.forEach((target2) => observer2.observe(target2));


//when right animation is needed
const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('rigth-animation');
        }
    });
});

const targets3 = document.querySelectorAll('.rigth');
targets3.forEach((target3) => observer3.observe(target3));