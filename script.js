window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

console.log("Portfolio Website Loaded Successfully");
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        toggleBtn.textContent = "☀️";
    }else{
        toggleBtn.textContent = "🌙";
    }

});
