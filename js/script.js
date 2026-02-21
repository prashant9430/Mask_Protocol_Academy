window.onload=function(){
setTimeout(()=>{
document.getElementById("bootScreen").classList.add("hidden");
document.getElementById("mainSite").classList.remove("hidden");
},3000);

typeTerminal();
}

/* Terminal */

const terminal=document.getElementById("terminalOutput");

document.getElementById("terminalInput").addEventListener("keydown",function(e){

if(e.key==="Enter"){

let cmd=this.value.toLowerCase();

let response="";

if(cmd==="help"){
response=`
Commands:
learn cyber
learn phishing
learn network
clear
`;
}

else if(cmd==="learn phishing"){
response="Phishing is social engineering attack used to steal information.";
}

else if(cmd==="learn cyber"){
response="Cybersecurity protects digital systems from threats.";
}

else if(cmd==="learn network"){
response="Network security protects communication communication systems.";
}

else if(cmd==="clear"){
terminal.innerHTML="";
this.value="";
return;
}

else{
response="Unknown command";
}

terminal.innerHTML+="<br>> "+cmd+"<br>"+response+"<br>";

this.value="";
}
});

/* Terminal Intro Animation */

function typeTerminal(){

let text="Welcome to Mask Protocol Academy Learning Environment...";

let i=0;

let interval=setInterval(()=>{

if(i<text.length){
terminal.innerHTML+=text[i];
i++;
}else{
clearInterval(interval);
}

},40);

}

/* Sound Simulation */

function playAlert(){
console.log("Academy Entry Activated");
}
