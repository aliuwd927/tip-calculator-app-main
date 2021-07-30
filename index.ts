//Global variables
let _billInput:HTMLInputElement  =  document.querySelector("._billInput");
let num_of_people:HTMLInputElement = document.querySelector(".num_of_people");
let _tipButtons:Array<HTMLElement> =  Array.from(document.querySelectorAll(".tip_button"));

//Set Interface Rules
interface Bill{
  billAmount: number,
  tipAmount: number,
  numOfPeople: number
}

/* 
Bill Object to pass into function?? 
How?? 
Async and Await because of value undefined?
 */
let billObj:Bill = {
  billAmount: undefined,
  tipAmount: undefined,
  numOfPeople: undefined
}

//Dynamically get input value
_billInput?.addEventListener('input', () =>{
  let getBillAmt = _billInput.value;
    if(getBillAmt.length > 0){
      billObj.billAmount = parseFloat(getBillAmt);
    }
});
//Get the items that was clicked;
for(let button of _tipButtons){
  button?.addEventListener("click", (e)=>{
  let tipAmt:number = Number((e.target as HTMLButtonElement).value);
  billObj.tipAmount = tipAmt;
  });
}
//Dynamically get input value
num_of_people?.addEventListener("input", () =>{
  let amtOfPeople = num_of_people.value;
    if(amtOfPeople.length > 0){
      billObj.numOfPeople = parseInt(amtOfPeople);
    }
});

/* 
Async and await because intial value is undefined 
until value specified. 
*/

const math = (x):void =>{
  console.log(x)
}
//Math
math(billObj)