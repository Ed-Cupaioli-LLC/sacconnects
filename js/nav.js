let toggleLinks = document.querySelectorAll('.nav-link.submenu-toggle');
const slideToggle = (e) => {
  e.preventDefault();
  //close toggle
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    const toggleBox = e.target.nextElementSibling;
    toggleBox.style.height = '0px';
    toggleBox.addEventListener('transitionend', event => {
      toggleBox.classList.remove('active');
    }, {
      once: true
    });
  } else {
    //close other toggles
    toggleLinks.forEach(el => {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
      }
      const toggleBox = el.nextElementSibling;
       toggleBox.style.height = '0px';
        toggleBox.addEventListener('transitionend', event => {
          toggleBox.classList.remove('active');
        }, {
          once: true
        });
    });
    //open toggle
    e.target.classList.add('active');
    const toggleBox = e.target.nextElementSibling;
    toggleBox.style.height = 'auto';
    const height = toggleBox.clientHeight + 'px';
    toggleBox.style.height = '0px';
    setTimeout(function () {
      toggleBox.style.height = height;
    }, 0);
  }
}
toggleLinks.forEach(el => {
  el.addEventListener('click', slideToggle);
});

  
  