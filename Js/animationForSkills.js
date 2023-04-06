document.addEventListener("DOMContentLoaded", () =>{
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry =>{
            if (entry.isIntersecting)
                entry.target.classList.add('show');
            else
                entry.target.classList.remove('show');
        });
    });
    
    const skillsBoxes = document.querySelectorAll("#skill .content-box > div");
    skillsBoxes.forEach(box =>{
        observer.observe(box);
    })
});