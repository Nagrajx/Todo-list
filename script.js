
submit.addEventListener("click", (e) => {
    inputc = input.value
    localStorage.setItem("show", JSON.stringify([inputc]));

    show.innerHTML = `

    <h2>Your Task is </h2> 
    <h1>${inputc}</h1>
    
    `
    input.value = " "
})

Delete.addEventListener("click", (ee) => {
    localStorage.removeItem("show");
    show.innerHTML = " "
})
