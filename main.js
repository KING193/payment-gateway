const form = document.querySelector("form");
const notification = document.querySelector(".notification");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const getValue = (selector) => form.querySelector(selector).value;

    const fullName = getValue('input[type="text"][placeholder="john deo"]');
    const email = getValue('input[type="email"]');
    const address = getValue('input[type="text"][placeholder="room - street - locality"]');
    const city = getValue('input[type="text"][placeholder="mumbai"]');
    const state = getValue('input[type="text"][placeholder="india"]');
    const zipCode = getValue('input[type="text"][placeholder="123 456"]');
    const nameOnCard = getValue('input[type="text"][placeholder="mr. john deo"]');
    const creditCardNumber = getValue('input[type="number"]');
    const expMonth = getValue('input[type="text"][placeholder="january"]');
    const expYear = getValue('input[type="number"]');
    const cvv = getValue('input[type="text"][placeholder="1234"]');

    const requiredFields = [fullName, email, address, city, state, zipCode, nameOnCard, creditCardNumber, expMonth, expYear, cvv];

    if (requiredFields.some(field => field === "")) {
        notification.textContent = "Please enter all required fields";
        notification.style.color = "red";
        notification.style.padding = "10px 0 0 200px";
        notification.style.display = "block";
        return;
    }

    notification.style.display = "inline";
    notification.style.color = "#12fd50";
    notification.style.padding = "15px 0 0 250px";

});
