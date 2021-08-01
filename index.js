//Global variables
let _billInput = document.querySelector("._billInput");
let num_of_people = document.querySelector(".num_of_people");
let _tipButtons = Array.from(document.querySelectorAll(".tip_button"));
//Set Interface Rules
class Bill {
    set billAmount(value) {
        this._billAmount = value;
    }
    set tipAmount(value) {
        this._tipAmount = value;
    }
    set numOfPeople(value) {
        this._numOfPeople = value;
    }
}
//Create Bill Object from class Bill
let billObj = new Bill();
//Dynamically gets input value and set object properties
_billInput === null || _billInput === void 0 ? void 0 : _billInput.addEventListener('input', () => {
    let getBillAmt = _billInput.value;
    if (getBillAmt.length > 0) {
        billObj._billAmount = parseFloat(getBillAmt);
    }
});
//Get the items that was clicked;
for (let button of _tipButtons) {
    button === null || button === void 0 ? void 0 : button.addEventListener("click", (e) => {
        let tipAmt = Number(e.target.value);
        billObj._tipAmount = tipAmt;
    });
}
//Dynamically gets input value and set object properties
num_of_people === null || num_of_people === void 0 ? void 0 : num_of_people.addEventListener("input", () => {
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
const checkProp = () => {
    const isObjEmpty = Object.keys(billObj);
    if (isObjEmpty.length === 0) {
        console.log("Empty");
    }
    else {
        //console.log(isObjEmpty)
        /* Pass into new function for document write? */
        displayAmount(isObjEmpty);
    }
};
checkProp();
function displayAmount(x) {
    console.log(x);
}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters
