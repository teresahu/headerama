// This code was hacked together in a
// few hours and should be refactored

function expand(d) {
  d.style.height = '300%';
  d.style.width = '104%';
  d.style.left = "-40px";
  d.style.border = "1px solid #e0e3e8";
  d.style.padding = '1em 1em 4em 1em';
  d.style.boxShadow = "0 -1px 8px 0 rgba(115, 114, 114, 0.39)";
  d.style.borderRadius = "4px";
}

function contract(d) {
  d.style.height = '100%';
  d.style.width = '500px';
  d.style.left = "0px";
  d.style.border = "none";
  d.style.padding = "0em .25em 1.5em .25em";
  d.style.boxShadow = "none";
}

window.addEventListener('click', function(e){
  var first = document.getElementById("first");
  var second = document.getElementById("second");
  var third = document.getElementById("third");
  if (first.contains(e.target)){
    expand(first);
    contract(second);
    contract(third);
  }
  else if (second.contains(e.target)){
    expand(second);
    contract(first);
    contract(third);
  }
  else if (third.contains(e.target)){
    expand(third);
    contract(first);
    contract(second);
  }
  else {
    contract(first);
    contract(second);
    contract(third);

  }
});

if (document.activeElement === ("empty-field")[0]) {
  console.log("YO");
}
