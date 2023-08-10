let supplybtn = document.getElementById("supply");
let tradebtn = document.getElementById("trade");
let part1 = document.getElementById("part1");
let part2 = document.getElementById("part2");

supplybtn.addEventListener("click",()=>{
    part1.classList.remove("d-none")
    part2.classList.add("d-none","mb-5")
})

tradebtn.addEventListener("click",()=>{
    part2.classList.remove("d-none")
    part1.classList.add("d-none","mb-5")
})

// let hambergerbtn = document.getElementById("hamberger");
// let items = document.getElementById("items")
// hambergerbtn.addEventListener("click",()=>{
//     items.classList.remove("none")
// })