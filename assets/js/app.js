
let cl = console.log;

let liElement = document.querySelectorAll(".myTab > li");
let tabContent = document.querySelectorAll(".mytabContent p")

liElement = Array.from(liElement);

const ontabClick = (e) => {
    cl(e.target.dataset.id);
    let getId = e.target.dataset.id;
    tabContent.forEach(p => p.style.display = "none");
    document.getElementById(getId).style.display = "block";
    liElement.forEach(li => li.classList.remove('active'))
    e.target.classList.add('active')
}





liElement.forEach(li => {
    li.addEventListener("click", ontabClick)
})

