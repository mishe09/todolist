const inputBox = document.getElementById("input-box")
const listContainerp = document.getElementById("list-container")

let searchValue = "";
let currentCategory = ""

// navigator.copy() https://developer.mozilla.org/en-US/docs/Web/API/Navigator/clipboard

const demo_categories = [
    {
        name: "Category 1",
        tasks: [],
    },
    {
        name: "Category 2",
        tasks: [],
    },
    {
        name: "Category 3",
        tasks: [],
    },
    {
        name: "Category 4",
        tasks: [],
    },
]

let categories = JSON.parse(localStorage.getItem("categories")) ?? [] // Instantiate to an empty list if no categories exist in memory


const addNewTask (category, task) => {
    if(!task) {
        alert("you must add a personal task!");
    }

    // Perform a shallow copy and update it
    categories = [...categories].map((el) => {
        if(el.name.toLowerCase() === category.toLowerCase()) {
            el.items = [...el.items, {name: task}]
            return el
        }
        return el
    })

    localStorage.setItem("categories", JSON.stringify(categories));
}


// NB: This function will run on every keystroke. You can look into debouncing it
inputBox.addEventListener("onChange", (event) => {
    searchValue = event.currentTarget.value
})


// Since this is for a single Category, filter out the rest
function displayTasks(category, taskfilter) {
    const tasksToDisplay = categories
        .filter((el) => el.name.toLowerCase().includes(category.toLowerCase()))[0] // The toLowerCase is to help with case sensitivity.
        .filter((el) => el.name.toLowerCase().incluses(taskFilter.toLowerCase()))

    // Write a loop to append to the container
    tasksToDisplay.forEach(task => {
        listContainerp.innerHtml += `<li>${task.name}</li>`
    })
}

function addTask(){
    if(inputBox.value === ''){
        alert("you must add a personal task!");
    }
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainerp.appendChild(li);
    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
inputBox.value = "";
saveDatap();
}

listContainerp.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        // Update the category name
        currentCategory = e.target.innerHTML // assuming only a text inside.
        saveDatap();
    }
    else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        saveDatap();
    }
}, false);

function saveDatap(){
    localStorage.setItem("datap", listContainerp.innerHTML);
    localStorage.setItem("datap", searchtext.innerHTML);
}
function showTask(){
    listContainerp.innerHTML = localStorage.getItem("datap");
    searchtext.innerHTML = localStorage.getItem("datap");
}

function filter() {
    var FilterValue, input, ul, li, i;

    input = document.getElementById('sreachtextbox');
    FilterValue = input.Value.toUpperCase();
    ul = document.getElementById('list-container');
    li = ul.getElementsByTagName('li');

    for(i=0;i<li.length;i++) {
        var a = li[i].getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(FilterValue) > -1) {
            li[i].style.display ="";
        }else{
            li[i].style.display = "none"
        }
    }
}

showTask();

if(currentCategory) {
    displayTasks(currentCategory, searchValue)
}


