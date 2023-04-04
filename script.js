window.onscroll = function() {setShadowBox()};

function setShadowBox() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("mainHeaderButtons").className = "shadow";
  } else {
    document.getElementById("mainHeaderButtons").className = "";
  }
}