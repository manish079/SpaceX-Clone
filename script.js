// left social animation
//
(function () {
  let socials = document.querySelectorAll(".social-icons div");

  socials.forEach(function (social, index) {
    social.style.animation = `anim 0.6s cubic-bezier(.51, .92, .24, 1.15) forwards ${
      index / 8 + 0.2
    }s`; //delay 1s, 2s
  });

  let rocket_nozzle = document.querySelector(".top");

  let rocketPieces = document.querySelectorAll(".middle-rocket span");

  let rocket = document.querySelector(".rocket-section");

  //Where we starting animation
  let triggerStart = window.innerHeight / 5;
  let rocketOffSetTop = rocket.offsetTop;
  let thirdOffSetTop = rocketPieces[2].offsetTop;

  //We can use also scrollY instead of pageYOffSet

  document.addEventListener("scroll", (e) => {
    if (window.pageYOffset > rocketOffSetTop - triggerStart) {
      rocketPieces[0].classList.add("active");
      rocketPieces[1].classList.add("active");
    } else {
      rocketPieces[0].classList.remove("active");
      rocketPieces[1].classList.remove("active");
    }

    if (window.scrollY > thirdOffSetTop - triggerStart) {
      rocketPieces[2].classList.add("active");
    } else {
      rocketPieces[2].classList.remove("active");
    }
  });
})();
