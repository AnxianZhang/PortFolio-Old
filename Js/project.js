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
                tab.addEventListener("click", () => {
                    // alert("yas");
                    if (tab.classList.contains("active-tab-project")) {
                        return;
                    }
                    else {
                        tab.classList.add('active-tab-project');
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
        }
    });


}

const initProject = () => {
    addTabs();
    makeOnlyATypeOfProjectVisible();
}

window.addEventListener("DOMContentLoaded", initProject);