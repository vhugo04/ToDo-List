const inputBox = document.querySelector(".input");
const listContainer = document.querySelector("#task-container");

const error = document.querySelector(".error");

function addTask() {
    if(inputBox.value === ''){
        error.style.display = "block"
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        error.style.display = "none"

    }
    inputBox.value = "";

    keepData();
}

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        keepData()
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        keepData()
    }
}, false);

function keepData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function openTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
openTask();