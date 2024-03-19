
const modal = document.getElementById('modal');
const list = document.getElementById('list');
const temp = `
<div>
    <h2>New Employee</h2>
    <form class="forms">
        <label for="fName">First Name:</label>
        <input type="text" id="fName" name="fName" placeholder="First Name" required>
        <label for="lName">Last Name:</label>
        <input type="text" id="lName" name="fName" placeholder="Last Name" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="E-mail" required>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Phone" required>
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Location" required>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>
    </form>

</div>
`
const modal2 = document.getElementById('modal2');
const list2 = document.getElementById('list2');
const temp2 = `
<div>
    <h2>Change Employee Info</h2>
    <form class="forms">
        <label for="fName">First Name:</label>
        <input type="text" id="fName" name="fName" placeholder="First Name" required>
        <label for="lName">Last Name:</label>
        <input type="text" id="lName" name="fName" placeholder="Last Name" required>
        <label for="email">E-mail:</label>
        <input type="email" id="email" name="email" placeholder="E-mail" required>
        <label for="phone">Phone:</label>
        <input type="tel" id="phone" name="phone" placeholder="Phone" required>
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" placeholder="Location" required>
        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required>
    </form>

</div>
`

openModal = () => {
    modal.style.display = "block";
    list.innerHTML = temp;
}


closeModal = () => {
    modal.style.display = "none";
}

openModal2 = () => {
    modal2.style.display = "block";
    list2.innerHTML = temp2;
}

closeModal2 = () => {
    modal2.style.display = "none";
}

addEmployee = () => {
    const fName = document.getElementById('fName').value;
    const lName = document.getElementById('lName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const location = document.getElementById('location').value;
    const dob = document.getElementById('dob').value;
    
    const table = document.querySelector('table');

    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${table.rows.length - 1}</td>
        <td>${fName}</td>
        <td>${lName}</td>
        <td>${email}</td>
        <td>${phone}</td>
        <td>${location}</td>
        <td>${dob}</td>
        <td>
            <button onclick="openModal2()"><i class="fa-regular fa-pen-to-square"></i></button>
            <button id="${table.rows.length - 1}rowsDelete" onclick="deleteRow()"><i class="fa-regular fa-trash-can"></i></button>
        </td>
    `;

    table.appendChild(newRow);

    updateRowIds();

    closeModal();
}

saveChanges = () => {
    
}

deleteRow = () => {
    const table = document.querySelector('table');
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[7].onclick = function () {
            table.deleteRow(this.parentElement.rowIndex);

            updateRowIds();
        }
    }
}

updateRowIds = () => {
    const table = document.querySelector('table');
    for (let i = 1; i < table.rows.length; i++) {
        table.rows[i].cells[0].textContent = i - 1;
        table.rows[i].cells[7].querySelector('button').id = `${i}rowsDelete`;
    }
}