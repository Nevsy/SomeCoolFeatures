let index = 0,
    interval = 1000;

const rand = (min, max) => 
  Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--starLeft", `${rand(-10, 100)}%`);
  star.style.setProperty("--starTop", `${rand(-40, 80)}%`);

  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
}

for(const star of document.getElementsByClassName("specialStar")) {
  setTimeout(() => {
    animate(star);
    
    setInterval(() => animate(star), 1000);
  }, index++ * (interval / 3))
}


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElements = document.querySelectorAll(".hidden")
hiddenElements.forEach((element) => observer.observe(element))



const cursor = document.querySelector(".cursor")
addEventListener("mousemove", e => {
  cursor.style.left = e.clientX - 10 + "px"
  cursor.style.top = e.clientY - 10 + "px"
})


function other(){
    alert("This website was made by Nev, I hope you like it!")
}