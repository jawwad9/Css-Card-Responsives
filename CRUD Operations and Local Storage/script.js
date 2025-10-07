const tableData = document.querySelector(".data-table")
const createData = document.querySelector(".create-form")

let data = [
    {id: 1, name: "anas", email: "anas@gmail.com"},
    {id: 2, name: "bilal", email: "bilal@gmail.com"}
]

function readAll(){
    localStorage.setItem("object", JSON.stringify(data));
    let object = localStorage.getItem('object')
    let objectData = JSON.parse(object);
    let elements = "" ;
    console.log(objectData);
    

    objectData.map((record)=>{
        elements += `<tr>
        <td>${record.name}</td>
        <td>${record.email}</td>
        <td>
        <button  class="editBtn" onclick="editBtn()">Edit</button>
        <button  class="deleteBtn" onclick="deleteBtn()">Delete</button>
        </td>
        <tr/>`
    })

    tableData.innerHTML = elements;
}

function create(){
    createData.style.display = 'block';
    addBtn.style.display = 'none';
    console.log("create function");
    
}

function add(){
    const name = document.querySelector(".name").value;
    const email = document.querySelector(".email").value;

    let newObj = {id: 3, name: name, email: email};
    data.push(newObj);

    readAll();

    createData.style.display = 'none';
    addBtn.style.display = 'block';
}

function editBtn(){
    console.log("edit");
    
}

function deleteBtn(){
    console.log("delete");
    
}