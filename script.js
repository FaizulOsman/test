// ========================= 18 - Document Object Model (DOM) ========================

// =============== Browser er Console a html tag gula dekha jai =================
// console.log(document)
// console.log(document.body)



// =========== Id k directly call kora jai ===========
// document.getElementById('test').style.color = "red";


// =========== Class k directly call kora jai jai na ===========
// var lorem = document.getElementsByClassName('lorem');
// for(var i=0; i < lorem.length; i++){
//     var element = lorem[i];
//     element.style.color="blue"; 
//     // element.innerHTML="Change Element - "+i;
// }
// // lorem[1].style.color="blue";





// =========== QuerySelector sesect only first one ===========
// document.querySelector(".selector p").style.color="red";



// =========== QuerySelectorAll sesect All items as input ===========
// var selector = document.querySelectorAll(".selector p");
// for(var i=0; i < selector.length; i++){
//     var element = selector[i];
//     element.style.color="blue"; 
// }
// // selector[0].style.color="red";





// =========== Body Syle ===========
// document.body.style.backgroundColor="cyan";





// =========== setAttribute ===========
// document.querySelector(".selector p").setAttribute('title', 'hi');



// =========== Add new "p" in a "Id" ===========
// var selector = document.getElementById('selector');
// const newParagraph = document.createElement('p');
// newParagraph.innerHTML="Hello! This is new paragraph.";
// selector.appendChild(newParagraph);




// =========== Add new li in ul ===========
// var list = document.getElementById("list");
// var addList = document.createElement("li");
// addList.innerHTML="List - 4";
// list.appendChild(addList);




// =========== Child Nodes ===========
// var childNodes = document.getElementById("selector").childNodes;
// console.log(childNodes);


// =========== Parent Node ===========
// var parentNode = document.getElementById("test").parentNode;
// console.log(parentNode);















// ========================= 19 - Document Object Model (DOM) ========================
