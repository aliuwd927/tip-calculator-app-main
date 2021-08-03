//Global variables
let _billInput = document.querySelector("._billInput");
let num_of_people = document.querySelector(".num_of_people");
let _tipButtons = Array.from(document.querySelectorAll(".tip_button"));
//Set Interface Rules
class Bill {
}
//Create Bill Object from class Bill
let billObj = new Bill();
//Dynamically gets input value and set object properties
_billInput === null || _billInput === void 0 ? void 0 : _billInput.addEventListener('input', () => {
    let getBillAmt = _billInput.value;
    if (getBillAmt.length > 0) {
        billObj._billAmount = parseFloat(getBillAmt);
    }
    calculateTotal();
});
//Get the items that was clicked;
for (let button of _tipButtons) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let tipAmt = Number(e.target.value);
        billObj._tipAmount = tipAmt;
        calculateTotal();
    });
}
//Dynamically gets input value and set object properties
num_of_people === null || num_of_people === void 0 ? void 0 : num_of_people.addEventListener("input", () => {
    let amtOfPeople = num_of_people.value;
    if (amtOfPeople.length > 0) {
        billObj._numOfPeople = parseInt(amtOfPeople);
    }
    calculateTotal();
});
//Test to see if Object Properties are empty
const checkProp = () => {
    const isObjEmpty = Object.keys(billObj);
    if (isObjEmpty.length === 0) {
        console.log("Empty");
    }
    else {
        console.log(isObjEmpty);
    }
};
//Fucntion updates everytime a change happens.
function calculateTotal() {
    let tipPerPerson = (billObj._billAmount * billObj._tipAmount) / billObj._numOfPeople;
    let billPerPerson = billObj._billAmount / billObj._numOfPeople;
    let totalAmount = tipPerPerson + billPerPerson;
    if (isNaN(tipPerPerson) && isNaN(billPerPerson)) {
        return;
    }
    else {
        //This should output to DOM;
        console.log(tipPerPerson.toFixed(2));
        console.log(totalAmount.toFixed(2));
    }
}
