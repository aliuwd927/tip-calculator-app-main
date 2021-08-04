//Global variables
let _billInput: HTMLInputElement = document.querySelector("._billInput");
let num_of_people: HTMLInputElement = document.querySelector(".num_of_people");
let _tipButtons: Array<HTMLElement> = Array.from(document.querySelectorAll(".tip_button"));

//Set Interface Rules
class Bill {
  _billAmount: number;
  _tipAmount: number;
  _numOfPeople: number;
}

//Create Bill Object from class Bill
let billObj: Bill = new Bill();

//Dynamically gets input value and set object properties
_billInput?.addEventListener('input', () => {
  let getBillAmt = _billInput.value;
  if (getBillAmt.length > 0) {
    billObj._billAmount = parseFloat(getBillAmt);
  }
  calculateTotal();
});
//Get the items that was clicked;
for (let button of _tipButtons) {
  button?.addEventListener("click", (e) => {
    let tipAmt: number = Number((e.target as HTMLButtonElement).value);
    billObj._tipAmount = tipAmt;
    calculateTotal();
  });
  
}
//Dynamically gets input value and set object properties
num_of_people?.addEventListener("input", () => {
  let amtOfPeople = num_of_people.value;
  if (amtOfPeople.length > 0) {
    billObj._numOfPeople = parseInt(amtOfPeople);
  }
  calculateTotal();
});

//Test to see if Object Properties are empty
const checkProp = ():void=>{
  const isObjEmpty = Object.keys(billObj);
      if(isObjEmpty.length === 0){
      console.log("Empty");
    }else{
      console.log(isObjEmpty)
    } 
  }

//Function updates everytime a change happens and output to DOM
function calculateTotal(){
  let tipPerPerson = (billObj._billAmount* billObj._tipAmount)/billObj._numOfPeople;
  let billPerPerson = billObj._billAmount / billObj._numOfPeople;
  let totalAmount = tipPerPerson + billPerPerson;
    if(isNaN(tipPerPerson) && isNaN(billPerPerson)){
      return;
    }else{
      //This should output to DOM;
      document.querySelector(".display_tip_value").innerHTML = tipPerPerson.toFixed(2).toString();
      document.querySelector(".display_total_value").innerHTML = totalAmount.toFixed(2).toString();
    };
}