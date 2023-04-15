(function () {
  let socials = document.querySelectorAll(".social-icons div");

  socials.forEach(function (social, index) {
    social.style.animation = `anim 0.6s cubic-bezier(.51, .92, .24, 1.15) forwards ${
      index / 8 + 0.2
    }s`; //delay 1s, 2s
  });
})();
