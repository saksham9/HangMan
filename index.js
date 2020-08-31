
let key=['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];

let hard=["abruptly","bagpipes","bandwagon","cockiness","grogginess"];
let medium=["juicy","kilobyte","puzzling","quartz","queue"];
let easy=["cat","obey","watch","movie","light"];
let life=0;



const keyboard=()=>{
    const keyboard=document.getElementById("keyboard");
    for(let i=0;i<26;i++){
        const cell=document.createElement("div");
        cell.classList="cell";
        cell.innerHTML=key[i];
        cell.addEventListener("click",()=>handleclick(cell));
        keyboard.appendChild(cell);
    }
}
const creategrid=(len)=>{
    const blanks=document.getElementById("blanks");
    for(let i=0;i<len;i++){
        const blank=document.createElement("div");
        blank.classList="blank";
        blank.id=String(i);
        blanks.appendChild(blank);
    }
}
const createlife=()=>{
    const hearts=document.getElementById("hearts");
    const heading=document.getElementById("lifeheading");
    heading.innerHTML="Life:";
    for(let i=0;i<5;i++){
        const heart=document.createElement("div");
        heart.classList="heart";
        heart.id="heart"+i;
        hearts.appendChild(heart);
    }

}
const startGame=(el)=>{
    window.selected="";
    if(el.id==="hard"){
        selected=hard[Math.floor(Math.random()*hard.length)];
    }
    else if(el.id==="medium"){
        selected=medium[Math.floor(Math.random()*hard.length)];
    } 
    else{
        selected=easy[Math.floor(Math.random()*hard.length)];
    }
    keyboard();
    createlife();
    console.log(selected);
    creategrid(selected.length);
}
const playerwin=()=>{
for(let i=0;i<selected.length;i++){
    const blank=document.getElementById(String(i));
    if(blank.innerHTML===""){
        return false;
    }
}
return true;
}
const handleclick = (el)=>{
    if(life===5){
        alert("Game already Over");
        return;
    }
    if(life===-1){
        alert("You Already Win");
        return;
    }

    let find=false;
    for(let i=0;i<selected.length;i++){
        if(el.innerHTML===selected.charAt(i)){
            find=true;
            const blank=document.getElementById(String(i));
            blank.innerHTML=selected.charAt(i);
            if(playerwin()){
                alert("Huuary You Win");
                life=-1;
            }
        }
    }
    if(find===false){
        //console.log("heart"+(4-life));
        const heart=document.getElementById("heart"+(4-life));
        heart.classList.remove("heart");
        life++;
    }
    if(life===5){
        alert("Game Over");
        return;
    }
}

