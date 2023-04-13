let currLang;

const addTabs = () => {
    let langType;
    let langContent;
    const tabs = document.querySelectorAll(".tab");
    langContent = document.querySelectorAll(".content");

    langContent.forEach(content => {
        if (content.getAttribute("data-tab") == 1) { // 1 ==> web (le champ de départ)
            currLang = content;
        }
    });

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) {
                return;
            }
            else {
                tab.classList.add('active');
            }

            langType = tab.getAttribute('data-tab');

            for (let j = 0; j < langContent.length; ++j) {
                if (langContent[j].getAttribute("data-tab") != langType) {
                    langContent[j].classList.remove("active-content");
                }
                else {
                    langContent[j].classList.add("active-content");
                    console.log(langContent[j]);
                    currLang = langContent[j];
                }
            }

            for (let i = 0; i < tabs.length; ++i) {
                if (tabs[i].getAttribute("data-tab") != langType && tabs[i].classList.contains("active")) {
                    tabs[i].classList.remove("active");
                    return;
                }
            }
        });
    });
}

const positionAbsolute = (object) => {
    object.style.position = "absolute";
    object.style.transform = "translate(-50%, -50%)";
    object.style.left = "50%";
    object.style.top = "56%";
    // object.style.border = "solid red 2px";
}

const notAbsolute = (object) => {
    object.style.position = "";
    object.style.transform = "";
    object.style.left = "";
    object.style.top = "";
}

const makeOnlyATypeOfProjectVisible = () => {
    const tabProject = document.querySelectorAll(".tab-project");
    const containerContent = document.querySelectorAll("#project .container");

    window.addEventListener("resize", () => {
        if (window.innerWidth <= 900 && !document.querySelector("#project").classList.contains("onOne")) {
            document.querySelector("#project").classList.add("onOne");
            document.querySelector("#line-separator").style.display = "none";

            for (let i = 0; i < containerContent.length; ++i) {
                positionAbsolute(containerContent[i]);
                // if (containerContent[i].getAttribute("data-project") == 1) {
            }

            tabProject.forEach(tab => {
                tab.addEventListener("click", ()=>{
                    // alert("yas");
                    if (tab.classList.contains("active-tab-project")) {
                        return;
                    }
                    else {
                        tab.classList.add('active-tab-project');
                    }

                    if (tab.textContent == "En cours") {
                        currLang.classList.remove("active-content");
                    }
                    else {
                        currLang.classList.add("active-content");
                    }

                    idx = tab.getAttribute('data-project');

                    for (let j = 0; j < containerContent.length; ++j) {
                        if (containerContent[j].getAttribute("data-project") != idx) {
                            containerContent[j].classList.remove("active-container");
                        }
                        else {
                            containerContent[j].classList.add("active-container");
                        }
                    }

                    for (let i = 0; i < tabProject.length; ++i) {
                        if (tabProject[i].getAttribute("data-project") != idx && tabProject[i].classList.contains("active-tab-project")) {
                            tabProject[i].classList.remove("active-tab-project");
                            return;
                        }
                    }
                });
            });
        }
        else if (window.innerWidth > 900) {
            document.querySelector("#project").classList.remove("onOne");
            document.querySelector("#line-separator").style.display = "block";
            for (let i = 0; i < containerContent.length; ++i) {
                notAbsolute(containerContent[i]);
                // tabProject[i].removeEventListener("click");
            }
            // tabProject.forEach(tab =>{
            //     tab.removeEventListener("click", tabHandler);
            // });
        }
    });
}

const initProject = () => {
    addTabs();
    makeOnlyATypeOfProjectVisible();
}

window.addEventListener("DOMContentLoaded", initProject);