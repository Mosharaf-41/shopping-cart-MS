
// this is my code ....
function increasePhoneCount() {
    const phoneCountElement = document.getElementById("phone-count");

    const phoneCount = phoneCountElement.value;
    const newNumber = parseFloat(phoneCount) + 1;

    phoneCountElement.value = newNumber;
    updatePhonePrice();
}

function decreasePhoneCount() {
    const phoneCountElement = document.getElementById("phone-count");
    const phoneCount = phoneCountElement.value;
    const newNumber = parseFloat(phoneCount) - 1;

    phoneCountElement.value = newNumber;
    updatePhonePrice();
}

function increaseCaseCount() {
    const caseCountElement = document.getElementById("case-count");
    const caseCount = caseCountElement.value;
    const countNumber = parseFloat(caseCount) + 1 ;

    caseCountElement.value = countNumber;
    updateCasePrice();
}
function decreaseCaseCount() {
    const caseCountElement = document.getElementById("case-count");
    const caseCount = caseCountElement.value;
    const countNumber = parseFloat(caseCount) - 1 ;

    caseCountElement.value = countNumber;
    updateCasePrice();
}

function updatePhonePrice() {
    const phoneCountElement = document.getElementById("phone-count");
     const phoneCount = phoneCountElement.value;
     const phonePrice = parseInt(phoneCount) * 1200;
     
     const phonePriceElement = document.getElementById("phone-price");
      phonePriceElement.innerText = '$' + phonePrice;
     updateTotalPrice();

}

 function updateCasePrice() {
    

    const caseCountElement = document.getElementById("case-count");
    const caseCount = caseCountElement.value;
    const casePrice = parseFloat(caseCount) * 59 ;
    
    const casePriceElement = document.getElementById("case-price");
    casePriceElement.innerText = '$' + casePrice;
    updateTotalPrice();
 }

 function updateTotalPrice() {
    const phoneCount = document.getElementById("phone-count").value;
    const caseCount = document.getElementById("case-count").value;
    const totalPrice = parseInt(phoneCount) * 1200 + parseFloat(caseCount) * 59 ;

    const taxAmount =(totalPrice / 100 * 10 ).toFixed(2);
    const grandTotal = totalPrice + parseFloat(taxAmount);
    
    const subTotalElement = document.getElementById("total-price");
    subTotalElement.innerText = "$" + totalPrice ; 
    const taxElement = document.getElementById("tax-amount");
    taxElement.innerText = "$" + taxAmount ;
    const grandTotalElement = document.getElementById("grand-total");
    grandTotalElement.innerText = "$" + grandTotal ;


    

 }