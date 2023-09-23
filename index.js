function validateForm() {
    var tagline = document.getElementById("tagline").value;
    if (tagline.length > 50) {
        alert("Tagline should be less than 50 characters.");
        return false;
    }
    var mobileNumber = document.getElementById("Phone").value;
    if (!/^\d{10}$/.test(mobileNumber)) {
        alert("Please enter a valid 10-digit mobile number.");
        return false;
    }
    generateReceipt();
    return true;
}


function generateReceipt() {
    var tagline = document.getElementById("tagline").value;
    var color = document.getElementById("color").value;
    var size = document.getElementById("size").value;
    var quantity = document.getElementById("quantity").value;
    var deliveryDate = document.getElementById("delivery_date").value;


    var society = document.getElementById("Society").value;
    var lane = document.getElementById("Lane").value;
    var city = document.getElementById("City").value;
    var state = document.getElementById("State").value;
    var pincode = document.getElementById("Pincode").value;
    var email = document.getElementById("Email").value;
    var phone = document.getElementById("Phone").value;


    var currentDate = new Date();
    var formattedDate = currentDate.toDateString();


    var receiptMessage = "Customized T-Shirt Order Receipt\n";
    receiptMessage += "Date: " + formattedDate + "\n\n";
    receiptMessage += "Tagline: " + tagline + "\n";
    receiptMessage += "Color: " + color + "\n";
    receiptMessage += "Size: " + size + "\n";
    receiptMessage += "Quantity: " + quantity + "\n";
    receiptMessage += "Delivery Date: " + deliveryDate + "\n\n";
    receiptMessage += "Address Information:\n";
    receiptMessage += "Society: " + society + "\n";
    receiptMessage += "Lane: " + lane + "\n";
    receiptMessage += "City: " + city + "\n";
    receiptMessage += "State: " + state + "\n";
    receiptMessage += "Pincode: " + pincode + "\n\n";
    receiptMessage += "Contact Information:\n";
    receiptMessage += "Email: " + email + "\n";
    receiptMessage += "Phone: " + phone + "\n";
    alert(receiptMessage);
}


