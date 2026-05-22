const frame = document.querySelector(".frame");
const btn = document.getElementById("btn");
const title = document.getElementById("title");

btn.addEventListener("click", () => {
    frame.classList.toggle("active");

    title.textContent = "Animation activée 🚀";

    setTimeout(() => {
        title.textContent = "hello world !";
        frame.classList.remove("active");
    }, 1500);
});