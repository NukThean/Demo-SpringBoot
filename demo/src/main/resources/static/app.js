// Handle form submission
document
  .getElementById("studentForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting normally

    const name = document.getElementById("studentName").value;
    const email = document.getElementById("studentEmail").value;
    const dob = document.getElementById("studentDob").value;

    // Send POST request to add student to the database
    fetch("/api/v1/student", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, dob }),
    })
      .then((response) => {
        if (response.ok) {
          fetchStudents(); // Refresh student list after successful registration
          document.getElementById("studentForm").reset(); // Clear the form
        } else {
          console.error("Failed to register student");
        }
      })
      .catch((error) => console.error("Error registering student:", error));
  });

// Fetch students and display them
function fetchStudents() {
  fetch("/api/v1/student")
    .then((response) => response.json())
    .then((data) => {
      const studentList = document.getElementById("studentList");
      studentList.innerHTML = ""; // Clear existing list
      data.forEach((student) => {
        const div = document.createElement("div");
        div.textContent = `ID: ${student.id}, Name: ${student.name}, Email: (${student.email}), DOB: ${student.dob}, Age: ${student.age}`;
        studentList.appendChild(div);
      });
    })
    .catch((error) => console.error("Error fetching students:", error));
}

// Fetch students on page load
window.onload = fetchStudents;
