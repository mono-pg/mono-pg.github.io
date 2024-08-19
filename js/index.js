const menu = document.querySelectorAll(".menu a");

menu.forEach(item => {
    item.onclick = () => {
        const active = document.querySelector(".menu a.active");
        if (active) {
            active.classList.remove("active");
        }
        item.classList.add("active");
    }
});

