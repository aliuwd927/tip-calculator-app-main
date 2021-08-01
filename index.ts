//Global variables
let _billInput: HTMLInputElement = document.querySelector("._billInput");
let num_of_people: HTMLInputElement = document.querySelector(".num_of_people");
let _tipButtons: Array<HTMLElement> = Array.from(document.querySelectorAll(".tip_button"));

//Set Interface Rules
class Bill {
  _billAmount: number;
  _tipAmount: number;
  _numOfPeople: number;
  set billAmount(value: number) {
    this._billAmount = value;
  }
  set tipAmount(value: number) {
    this._tipAmount = value;
  }
  set numOfPeople(value: number) {
    this._numOfPeople = value;
  }
}

//Create Bill Object from class Bill
let billObj: Bill = new Bill();

//Dynamically gets input value and set object properties
_billInput?.addEventListener('input', () => {
  let getBillAmt = _billInput.value;
  if (getBillAmt.length > 0) {
    billObj._billAmount = parseFloat(getBillAmt);
  }
});
//Get the items that was clicked;
for (let button of _tipButtons) {
  button?.addEventListener("click", (e) => {
    let tipAmt: number = Number((e.target as HTMLButtonElement).value);
    billObj._tipAmount = tipAmt;
  });
}
//Dynamically gets input value and set object properties
num_of_people?.addEventListener("input", () => {
  let amtOfPeople = num_of_people.value;
  if (amtOfPeople.length > 0) {
    billObj._numOfPeople = parseInt(amtOfPeople);
  }
});

//Test to see if Object Properties are empty
/* 
Figure out how to async and await new items to retrigger function.
Try while loop?
*/
const checkProp = ():void=>{
  const isObjEmpty = Object.keys(billObj);
      if(isObjEmpty.length === 0){
      console.log("Empty");
    }else{
      //console.log(isObjEmpty)
      
      /* Pass into new function for document write? */
      
      displayAmount(isObjEmpty);
    } 
    
  }
checkProp();

  function displayAmount(x):void{
   console.log(x)
  }


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters