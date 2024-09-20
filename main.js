let txt = document.getElementById("txt"); 
let b_button = document.getElementById("bold"); 
let fontSize = document.getElementById("fontS");

txt.style.fontFamily=localStorage.getItem("font");
txt.style.fontWeight= localStorage.getItem("fntW");
let S = localStorage.getItem("fnts");
fontSize.innerHTML = localStorage.getItem("fnts");
txt.style.fontSize = `${S}px`;
txt.style.backgroundColor = localStorage.getItem("bgc");
txt.style.color = localStorage.getItem("col");


function changeFont(value){
    localStorage.font=value;
txt.style.fontFamily = localStorage.getItem("font");
}

function boldit(){
    if(txt.style.fontWeight === "bold"){
        localStorage.fntW = "300";
        txt.style.fontWeight= localStorage.getItem("fntW");
    }else{
        localStorage.fntW = "bold";
    txt.style.fontWeight= localStorage.getItem("fntW");
}
    // console.log("hello");
}
function sizer(id){
    localStorage.fnts = fontSize.innerHTML;
    let i = localStorage.getItem("fnts");
    if(id === 'min'){
     +i--;
     localStorage.fnts = i;
     fontSize.innerHTML =localStorage.getItem("fnts");
     txt.style.fontSize = `${localStorage.getItem("fnts")}px`;
    console.log(i);
    }
    if(id === 'plus'){
     +i++;
     localStorage.fnts = i;
     fontSize.innerHTML =localStorage.getItem("fnts");
     txt.style.fontSize = `${localStorage.getItem("fnts")}px`;
    console.log(i);
    }
}
// let txt = document.getElementById("txt");
// let col = 'normal';
function invertit(){
  if(txt.style.color == "black"){
    console.log("hello")
    localStorage.bgc= "black";
    localStorage.col= "white";
    txt.style.backgroundColor = localStorage.getItem("bgc");
    txt.style.color = localStorage.getItem("col");
  }else{
    console.log("hello f")

    localStorage.bgc= "white";
    localStorage.col= "black";
    txt.style.backgroundColor = localStorage.getItem("bgc");
    txt.style.color = localStorage.getItem("col");
}

}