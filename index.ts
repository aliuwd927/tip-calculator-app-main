//Global variables
let _billInput:HTMLInputElement  =  document.querySelector("._billInput");
let num_of_people:HTMLInputElement = document.querySelector(".num_of_people");
let _tipButtons:Array<HTMLElement> =  Array.from(document.querySelectorAll(".tip_button"));

//Set Interface Rules
class Bill{
  _billAmount: number;
  _tipAmount: number;
  _numOfPeople: number;
  
  set billAmount(value:number){
    this._billAmount = value;
  }
  set tipAmount(value:number){
    this._tipAmount = value;
  }
  set numOfPeople(value:number){
    this._numOfPeople = value;
  }

  calculate(){
    if(this._billAmount !== undefined){
      console.log(this._billAmount);
    }else{
      console.log('error')
    }
  }
}

/* 
Bill Object to pass into function?? 
How?? 
Async and Await because of value undefined?
 */
let billObj:Bill = new Bill();

//Dynamically get input value
_billInput?.addEventListener('input', () =>{
  let getBillAmt = _billInput.value;
    if(getBillAmt.length > 0){
      billObj._billAmount = parseFloat(getBillAmt);
    }
});
//Get the items that was clicked;
for(let button of _tipButtons){
  button?.addEventListener("click", (e)=>{
  let tipAmt:number = Number((e.target as HTMLButtonElement).value);
  billObj._tipAmount = tipAmt;
  });
}
//Dynamically get input value
num_of_people?.addEventListener("input", () =>{
  let amtOfPeople = num_of_people.value;
    if(amtOfPeople.length > 0){
      billObj._numOfPeople = parseInt(amtOfPeople);
    }
});

/* 
Async and await because intial value is undefined 
until value specified. 
*/

async function test(x){
  if(x.billAmount !== undefined){
    await Promise.resolve(console.log(x.billAmount));
  };
};
//Math
test(billObj)


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters