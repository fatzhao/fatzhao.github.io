/*
comments
*/

// comments

/*
var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/gosling.jpg'){
        myImage.setAttribute('src','images/gosling2.jpg');
    }else{
        myImage.setAttribute('src','images/gosling.jpg');
    }
}
*/

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('please enter your name');
    localStorage.setItem('name',myName);
    myHeading.textContent = 'mozilla is cool,' + myName;
}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'mozilla is cool,' + storedName;
}

myButton.onclick = function(){
    setUserName();
}