let _billInput:HTMLInputElement  =  document.querySelector("._billInput");
let num_of_people:HTMLInputElement = document.querySelector(".num_of_people");
let _tipButtons:Array<HTMLElement> =  Array.from(document.querySelectorAll(".tip_button"));

interface Bill{
  billAmount: number;
  numOfPeople: number;
  tipAmount: number;
};

let billObj:Bill[] = [];

//Dynamically get input value
_billInput?.addEventListener('input', () =>{
  let getBillAmt = _billInput.value;
    if(getBillAmt.length > 0){
      //console.log(getBillAmt);
      //billObj.billAmount = parseFloat(getBillAmt);
    }
});

num_of_people?.addEventListener("input", () =>{
  let amtOfPeople = num_of_people.value;
    if(amtOfPeople.length > 0){
      console.log(amtOfPeople);
    }
});

//Get all buttons
for(let button of _tipButtons){
  button?.addEventListener("click", (e)=>{
  let tipAmt:number = Number((e.target as HTMLButtonElement).value);
  console.log(tipAmt);
  });
}

//Math
function calculate(amt):void{
  //Change :void to :number later
  console.log(amt)
}