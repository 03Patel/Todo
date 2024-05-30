let inp=document.querySelector("input");
let btn=document.querySelector(".add");
let ui=document.querySelector("ul");
let delbtns=document.querySelectorAll(".btn");


// for(del of delbtns){
// del.addEventListener("click",()=>{
//   let par=del.parentElement;
//   console.log(par);
//   par.remove(); 
  
// })
// }


ui.addEventListener("click",(event)=>{
  if(event.target.nodeName=="BUTTON"){
   let list=event.target.parentElement;
   list.remove();
  }
})



btn.addEventListener("click",()=>{
  let key=document.createElement("li");
  key.innerText=inp.value;

  let del=document.createElement("button");
  del.innerText="delete";
  del.classList="delte";
  key.append(del);
  ui.appendChild(key);
  inp.value="";
});