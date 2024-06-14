const inputBox = document.getElementById("input-box")
const listContainerp = document.getElementById("list-container")

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


