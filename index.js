//Global variables
let _billInput = document.querySelector("._billInput");
let num_of_people = document.querySelector(".num_of_people");
let _tipButtons = Array.from(document.querySelectorAll(".tip_button"));
let reset_btn = document.querySelector(".display_reset_btn");
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
//Function updates everytime a change happens and output to DOM
function calculateTotal() {
    let tipPerPerson = (billObj._billAmount * billObj._tipAmount) / billObj._numOfPeople;
    let billPerPerson = billObj._billAmount / billObj._numOfPeople;
    let totalAmount = tipPerPerson + billPerPerson;
    if (isNaN(tipPerPerson) && isNaN(billPerPerson)) {
        return;
    }
    else {
        //This should output to DOM;
        document.querySelector(".display_tip_value").innerHTML = tipPerPerson.toFixed(2).toString();
        document.querySelector(".display_total_value").innerHTML = totalAmount.toFixed(2).toString();
    }
    ;
}
reset_btn === null || reset_btn === void 0 ? void 0 : reset_btn.addEventListener("click", () => {
    document.querySelector(".display_tip_value").innerHTML = Number(0).toString();
    document.querySelector(".display_total_value").innerHTML = Number(0).toString();
});
