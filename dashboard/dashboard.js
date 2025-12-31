const employees = [
  { id: 1, name: "Rajesh Kumar", role: "Developer", email: "rajesh@resecops.com", dept: "Engineering" },
  { id: 2, name: "Priya Sharma", role: "Product Manager", email: "priya@resecops.com", dept: "Product" }
];

function renderEmployees() {
  const table = document.getElementById("employeeTable");
  table.innerHTML = "";

  employees.forEach(emp => {
    table.innerHTML += `
      <tr>
        <td><img src="https://i.pravatar.cc/40" style="border-radius:50%"></td>
        <td>${emp.name}</td>
        <td>${emp.role}</td>
        <td>${emp.email}</td>
        <td>${emp.dept}</td>
        <td><button onclick="editEmployee(${emp.id})">Edit</button></td>
      </tr>
    `;
  });

  document.getElementById("totalEmployees").innerText = employees.length;
}

function openAddModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function saveEmployee() {
  const name = document.getElementById("name").value;
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;
  const department = document.getElementById("department").value;

  employees.push({
    id: Date.now(),
    name,
    role,
    email,
    dept: department
  });

  closeModal();
  renderEmployees();
}

function editEmployee(id) {
  alert("Edit feature can be connected to backend");
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "/my-project/login.html";
}

renderEmployees();
