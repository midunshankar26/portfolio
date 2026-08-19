window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

const themeToggle =
document.getElementById("themeToggle");

// Load Saved Theme

if(localStorage.getItem("theme") === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
    "☀️ Light Mode";

}

// Toggle Theme

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")){

        themeToggle.innerHTML =
        "☀️ Light Mode";

        localStorage.setItem(
            "theme",
            "dark"
        );

    }else{

        themeToggle.innerHTML =
        "🌙 Dark Mode";

        localStorage.setItem(
            "theme",
            "light"
        );

    }

});
