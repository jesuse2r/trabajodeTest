


function fromDollarToYen (dollarValue) {
    return dollarValue * 153.48;
}
function fromEuroToDollar (euroValue) {
    return euroValue * 1.20;
}
function fromYentoPound (yenValue) {
    return yenValue * 122.78;
}
let dollarValue = 153.48;
let euroValue = fromDollarToYen(dollarValue);
let yenValue = fromEuroToDollar(euroValue);
let resultado = fromYentoPound(yenValue);
console.log(resultado);


module.exports = {
    fromEuroToDollar : fromEuroToDollar,
    fromDollarToYen : fromDollarToYen,
    fromYentoPound : fromYentoPound,
 };

