const screen = document.querySelector(".inp");
let screenvalue = "";
function ent(z){
  if(z === "CL"){
    screenvalue = String(screen.value).slice(0,-1);
    screen.value = String(screen.value).slice(0,-1);
  }
  else if (z === "DEL") {
    screenvalue = "";
    screen.value = "";
  }
  
  else if (z === "=") {
    screenvalue = Math.floor(eval(screenvalue));
    screen.value = screenvalue;
    screenvalue = screen.value;
  }
  else if ((screenvalue == 0) && (z != ".")){
    screenvalue = z;
    screen.value = screenvalue;
  }
  else{
    screenvalue += z;
    screen.value += ((z.replace("*","×")).replace("/","÷"));
  }
  
}