function ChangeMoney() {
let Amount = document.getElementById("Dauvao").value;
let FromCurrency = document.getElementById("from").value;
let ToCurrency = document.getElementById("to").value;
let Result;

if (FromCurrency === "VND" && ToCurrency === "USD") {
    Result = "Result: " + (Amount /23000) + "$"
}
else if (FromCurrency === "USD" && ToCurrency ==="VND") {
    Result = "Result: " + (Amount *23000) + "VND"
}
else if (FromCurrency === "VND") {
    Result = "Result: " + Amount + "VND"
} else {
    Result = "Result: " + Amount + "USD"
}
document.getElementById("Result").innerHTML = Result;
}