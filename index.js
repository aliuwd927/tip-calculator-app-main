//Global variables
let _billInput = document.querySelector("._billInput");
let num_of_people = document.querySelector(".num_of_people");
let _tipButtons = Array.from(document.querySelectorAll(".tip_button"));
/*
Bill Object to pass into function??
How??
Async and Await because of value undefined?
 */
let billObj = {
    billAmount: undefined,
    tipAmount: undefined,
    numOfPeople: undefined
};
//Dynamically get input value
_billInput === null || _billInput === void 0 ? void 0 : _billInput.addEventListener('input', () => {
    let getBillAmt = _billInput.value;
    if (getBillAmt.length > 0) {
        billObj.billAmount = parseFloat(getBillAmt);
    }
});
//Get the items that was clicked;
for (let button of _tipButtons) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let tipAmt = Number(e.target.value);
        billObj.tipAmount = tipAmt;
    });
}
//Dynamically get input value
num_of_people === null || num_of_people === void 0 ? void 0 : num_of_people.addEventListener("input", () => {
    let amtOfPeople = num_of_people.value;
    if (amtOfPeople.length > 0) {
        billObj.numOfPeople = parseInt(amtOfPeople);
    }
});
/*
Async and await because intial value is undefined
until value specified.
*/
const math = (x) => {
    console.log(x);
};
//Math
math(billObj);
