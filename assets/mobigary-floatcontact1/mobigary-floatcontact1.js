function toggleFade(selector) {
  t = document.querySelector(selector);
  event.preventDefault();
  if (t.style.opacity == 0 || t.style.opacity == "") {
    t.style.display = "block";
    t.style.opacity = 0;
    setTimeout( function() { t.style.opacity = 1 }, 1 );
  }
  else {
    t.style.opacity = 0;
    setTimeout(function() {
      if (t.style.opacity == 0)
        t.style.display = "none";
    }, 1000);
  }
}