window.addEventListener("scroll", function () {
    let scrollValue = window.scrollY;
    let blurValue = Math.min(scrollValue / 300, 10); // Blur increases with scroll
    document.querySelector("#enter").style.filter = `blur(${blurValue}px)`;
});
    let h2=document.querySelector("h2")
    let p = document.querySelector("p")
  let qot = document.getElementById("qot");
  let enter = document.getElementById("enter");

  qot.addEventListener("mouseenter", function() {
      enter.style.transform = "translateY(-200px)";
      qot.style.transform = "translatey(-100px)"
      p.style.transform = "translatey(-100px)"
       h2.style.transform = "translatey(-100px)"
  });

  qot.addEventListener("mouseleave", function() {
      enter.style.transform = "translateY(0)";
      qot.style.transform = "translatey(0)"
     p.style.transform = "translatey(0)"
        h2.style.transform = "translatey(0)"
  });



