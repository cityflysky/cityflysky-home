// mobileMenu need to go here
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myMenu() {
  var x = document.getElementById("myMain");
  if (x.className === "mainnav") {
    x.className += " responsive";
  } else {
    x.className = "mainnav";
  }
}

// countUp NFTs and traits
const counters = document.querySelectorAll('.count');
const speed = 100;

counters.forEach((counter) => {
  const updateCount = () => {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = parseInt(counter.innerText);
    const increment = Math.trunc(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Scroll trigger
function scrollTrigger(selector, options = {}) {
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
    addObserver(el, options)
  })
}