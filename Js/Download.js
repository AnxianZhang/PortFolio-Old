const initDownload = () =>{
    document.querySelector("#contact-links button").addEventListener("click",  ()=>{
        url = "./CV-Anxian-Zhang.pdf";
        const a = document.createElement('a');
        a.href = url;
        // a.download = url.split('/').pop();
        a.target = "_blank"
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

window.addEventListener("DOMContentLoaded", initDownload);