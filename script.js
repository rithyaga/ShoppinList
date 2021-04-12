var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

var deleteButton = document.getElementById("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	 var onclick1 = document.createAttribute("onClick");
    onclick1.value = "Toggle(this)";
    li.setAttributeNode(onclick1);
	li.appendChild(document.createTextNode(input.value));
	var x = document.createElement("button");
    var new_attr = document.createAttribute("id");
    new_attr.value = "delete";
    var onclick = document.createAttribute("onClick");
    onclick.value = "DeleteItem(this)";
    x.setAttributeNode(onclick);
    x.setAttributeNode(new_attr);   
	var y = document.createTextNode("delete");	
	li.appendChild(x);
	x.appendChild(y);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function DeleteItem(e){		
	var listItem = e.parentElement;
	listItem.remove();
}
function Toggle(e){
	  if (e.classList) { 
    e.classList.toggle("done");
  } else {
    var classes = e.className.split(" ");    
    var i = classes.indexOf("done");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("done");
      element.className = classes.join(" "); 
}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

