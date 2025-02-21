document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    
    if (name && phone) {
        let table = document.getElementById("contactList");
        let newRow = table.insertRow();
        
        let nameCell = newRow.insertCell(0);
        let phoneCell = newRow.insertCell(1);
        
        nameCell.textContent = name;
        phoneCell.textContent = phone;
        
        document.getElementById("contactForm").reset();
    }
});