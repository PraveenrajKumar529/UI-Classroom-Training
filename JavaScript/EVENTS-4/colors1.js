function changecolor(){
    document.getElementById("xyz").style.backgroundColor="yellow"
}
function mouseout(){
     document.getElementsByTagName("button")[1].style.backgroundColor="blue"
}
function onClick(){
       document.querySelector(".btn3").style.backgroundColor="red"
}
function ondblClick(){
    document.getElementsByClassName("789")[0].style.backgroundColor="green"
}
function onFocus(){
    document.getElementById("abc").style.backgroundColor="lightgreen"
}
function onBlur(){
    let input=document.getElementById("six");
    input.value=input.value.toUpperCase(); 
}