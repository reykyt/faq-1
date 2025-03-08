let accordion = document.querySelector(".accordion");
let items = document.querySelectorAll(".accordion__item");
let tabs = document.querySelectorAll(".accordion__tab");
let contents = document.querySelectorAll(".accordion__content");


accordion.addEventListener("click", (event) => {
    let elTarget = event.target;
    console.log(elTarget)

    for (let item of items) {
            item.classList.remove("active");
    }
    // closest ищет родителя с классом accordion__item
    elTarget.closest(".accordion__item").classList.toggle('active')

})