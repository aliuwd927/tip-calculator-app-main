let _billInput = document.querySelector("._billInput");
let num_of_people = document.querySelector(".num_of_people");
let _tipButtons = Array.from(document.querySelectorAll(".tip_button"));
;
let billObj = [];
//Dynamically get input value
_billInput === null || _billInput === void 0 ? void 0 : _billInput.addEventListener('input', () => {
    let getBillAmt = _billInput.value;
    if (getBillAmt.length > 0) {
        //console.log(getBillAmt);
        //billObj.billAmount = parseFloat(getBillAmt);
    }
});
num_of_people === null || num_of_people === void 0 ? void 0 : num_of_people.addEventListener("input", () => {
    let amtOfPeople = num_of_people.value;
    if (amtOfPeople.length > 0) {
        console.log(amtOfPeople);
    }
});
//Get all buttons
for (let button of _tipButtons) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let tipAmt = Number(e.target.value);
        console.log(tipAmt);
    });
}
//Math
function calculate(amt) {
    //Change :void to :number later
    console.log(amt);
}
