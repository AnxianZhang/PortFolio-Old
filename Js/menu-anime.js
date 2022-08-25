const menuBox = document.querySelector("#menu-box");
const buttonMenu = document.querySelector("#button-menu");

buttonMenu.addEventListener("click", () => {
    menuBox.classList.toggle("buttonTriggered")
});
