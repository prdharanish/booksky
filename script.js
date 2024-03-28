var popupbox=document.querySelector(".popup-box")
var popupoverlay=document.querySelector(".popup-overlay")
var addpopupbutton= document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
popupbox.style.display="block"
popupoverlay.style.display="block"
})
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
event.preventDefault()    
popupbox.style.display="none"
popupoverlay.style.display="none"
})
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")
var addbook=document.getElementById("add-book")
var container=document.querySelector(".container") 
addbook.addEventListener("click",function(event){
event.preventDefault()
var div=document.createElement("div")
div.setAttribute("class","container-book")
div.innerHTML=`<h2>${booktitleinput.value}</h2>
<h5>${bookauthorinput.value}</h5>
<p>${bookdescriptioninput.value}</p>
<button onclick="deletebook(event)">delete</button>`
container.append(div)
popupbox.style.display="none"
popupoverlay.style.display="none"
})
function deletebook(event){
    event.target.parentElement.remove()
}
