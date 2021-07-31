var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function test(x) {
    return __awaiter(this, void 0, void 0, function* () {
        if (x.billAmount !== undefined) {
            yield Promise.resolve(console.log(x.billAmount));
        }
        ;
    });
}
;
//Math
test(billObj);
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#defining_getters_and_setters
