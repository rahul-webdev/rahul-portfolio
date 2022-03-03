var title = document.querySelector(".title");


console.log(title);
    title.addEventListener("mouseover", ()=>{
        var title = document.querySelectorAll(".glow-line");
        title.forEach(element => {
            element.classList.add("glowhover");
        });
    });

    title.addEventListener("mouseout", ()=>{
        var title = document.querySelectorAll(".glow-line");
        title.forEach(element => {
            element.classList.remove("glowhover");
            // element.classList.add("addreversni");
        });
    });



