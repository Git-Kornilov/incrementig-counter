'use strict';

const counters = document.querySelectorAll('.counter');
const stepCounter = 200;
const speedCounterMs = 1;

counters.forEach(counter => {
  counter.innerText = '0';

  const udateCounter = () => {
    const target = +counter.getAttribute('data-target');

    const partOfCounter = +counter.innerText;

    const increment = target / stepCounter;

    if (partOfCounter < target) {
      counter.innerText = `${Math.ceil(partOfCounter + increment)}`;
      setTimeout(udateCounter, speedCounterMs);
    } else {
      counter.innerText = target;
    }
  };

  udateCounter();
});
