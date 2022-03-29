if (window.location.search.indexOf('client=') > -1) {
  const reviewTitle = getParams('client');
  const review = document.querySelector("[data-review='" + reviewTitle + "']");
  const offsetTop = window.scrollY + review.getBoundingClientRect().top;
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
