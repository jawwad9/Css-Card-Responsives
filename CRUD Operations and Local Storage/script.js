// Select HTML elements where data and form will appear
const tableData = document.querySelector(".data-table");
const createData = document.querySelector(".create-form");

// Get existing data from localStorage OR create default array
let data = JSON.parse(localStorage.getItem("object")) || [
  { id: 1, name: "anas", email: "anas@gmail.com" },
  { id: 2, name: "bilal", email: "bilal@gmail.com" },
];

// ✅ Function to read all data and show it in the table
function readAll() {
  // Save data into localStorage
  localStorage.setItem("object", JSON.stringify(data));

  // Get data back from localStorage
  let object = localStorage.getItem("object");
  let objectData = JSON.parse(object);

  let elements = ""; // HTML rows container

  console.log(objectData); // for debugging

  // Loop through each record and make table rows
  objectData.map((record) => {
    elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
          <button class="editBtn" onclick="editBtn(${record.id})">Edit</button>
          <button class="deleteBtn" onclick="deleteBtn(${record.id})">Delete</button>
        </td>
      </tr>`;
  });

  // Add rows into table body
  tableData.innerHTML = elements;
}

// ✅ Function to show create form
function create() {
  createData.style.display = 'block'; // show form
  addBtn.style.display = 'none';      // hide add button
  console.log("create function");
}

// ✅ Function to add a new record
function add() {
  const name = document.querySelector(".name").value;
  const email = document.querySelector(".email").value;

//   Blank input field check 
  if (name === "" || email === "") {
  alert(" Please enter both Name and Email!");
  return; // stop the function here
}

  // Create new object with static id (better: use dynamic id)
  let newObj = { id: data.length + 1, name: name, email: email };

  // Push new record into array
  data.push(newObj);

  // Update localStorage and re-render table
  localStorage.setItem("object", JSON.stringify(data));
  readAll();

  // Hide form and show add button again
  createData.style.display = 'none';
  addBtn.style.display = 'block';
}

// ✅ Function to open edit form and fill old data
function editBtn(id) {
  console.log("edit", id);

  // Show update form
  document.querySelector(".update-form").style.display = "block";

  // Find record by id
  let obj = data.find((rec) => rec.id === id);

  // Fill form fields with old values
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id;
}

// ✅ Function to update existing record
function update() {
  // Get updated values from input fields
  let id = document.querySelector(".id").value;
  let name = document.querySelector(".uname").value;
  let email = document.querySelector(".uemail").value;

  // Find index of record in array
  let index = data.findIndex((rec) => rec.id === parseInt(id));

  // Replace old record with new data
  data[index] = { id: parseInt(id), name, email };

  // Hide update form and refresh table
  document.querySelector(".update-form").style.display = "none";
  readAll();
}

// ✅ Function to delete a record by id
function deleteBtn(id) {
  console.log("delete", id);

  id = parseInt(id);
  // Find record index
  const index = data.findIndex((rec) => rec.id === id);

  // If record found, remove it from array
  if (index !== -1) {
    data.splice(index, 1);
  }

  // Save updated data to localStorage
  localStorage.setItem("object", JSON.stringify(data));

  // Refresh table
  readAll();
}
