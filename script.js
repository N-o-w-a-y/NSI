const popup = document.getElementById("cookieConsent");
var feur = Math.floor(Math.random()*10);
if (feur!=1){
  popup.className='feur';
}
else {
  const acceptBtn = document.getElementById("acceptButton");
  const declineBtn = document.getElementById("declineButton");

  acceptBtn.addEventListener("click", function() {
    const fileUrl = "cookies.jpeg";
    const fileName = "cookies.jpeg";
    const a = document.createElement("a");
    a.href = fileUrl;
    a.download = fileName;
    a.click();
  });

  declineBtn.addEventListener("click", function() {
    popup.className='feur';
  });
}




window.onscroll = function() {setShadowBox()};

function setShadowBox() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("mainHeaderButtons").className = "shadow";
  } else {
    document.getElementById("mainHeaderButtons").className = "";
  }
}
