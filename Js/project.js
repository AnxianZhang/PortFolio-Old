// const makeImagesTransition = transistionTime =>{
//     Array.from(document.querySelectorAll(".tab")).forEach(element =>{
//         element.addEventListener("click", ()=>{
//             Array.from(document.querySelectorAll(".larger-content-box img")).forEach(img =>{
//                 img.style.transition = "all .0s 0s ease-in-out";
//             });
//         });
//     });
// };

const addTabs = () => {
    const tabs = document.querySelectorAll(".tab");
    const contents = document.querySelectorAll(".content");

    let idx;

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            else {
                tab.classList.add('active');
            }

            idx = tab.getAttribute('data-tab');

            for (let j = 0; j < contents.length; ++j) {
                if (contents[j].getAttribute("data-tab") != idx) {
                    contents[j].classList.remove("active-content");
                }
                else {
                    contents[j].classList.add("active-content");
                }
            }

            for (let i = 0; i < tabs.length; ++i) {
                if (tabs[i].getAttribute("data-tab") != idx && tabs[i].classList.contains("active")) {
                    tabs[i].classList.remove("active");
                    return;
                }
            }
        });
    });
}

const initProject = () => {
    addTabs();
}

window.addEventListener("DOMContentLoaded", initProject);