// Load Existing Appointments onto Appointments Page
function loadAppointments() {
  let upcomingText = document.getElementById("upcomingText");
  let upcomingAppointments = document.getElementById("upcomingAppointments");
  var appts = JSON.parse(localStorage.getItem("appts"));
  console.log(appts);
  if (appts === null) {
    appts = [];
    let noAppointments = document.createElement("p");
    noAppointments.innerHTML = "No upcoming appointments scheduled.";
    upcomingAppointments.appendChild(noAppointments);
    upcomingText.innerHTML = "Upcoming Appointments: 0"
  }

  else {
    // Display Each Upcoming Appointment
    for (let i=0; i < appts.length; i++) {
      upcomingText.innerHTML = "Upcoming Appointments: " + appts.length;
      let appt = document.createElement("div");
      appt.classList.add("appointment");
      let type = document.createElement("p");
      let date = document.createElement("p");
      let viewDetails = document.createElement("a");
      type.innerHTML = appts[i].type;
      date.innerHTML = appts[i].date;
      appt.appendChild(type);
      appt.appendChild(date);
      viewDetails.setAttribute("id", "modalLink");

      //Fill in Appointment Details
      viewDetails.setAttribute("onclick", 'apptModal("${appts[i].type}", "${appts[i].date}, "${appts[i].time}")');
      edit.classList.add("small-button");
      edit.innerHTML = "Edit Appointment";
      cancel.classList.add("small-button");
      cancel.innerHTML = "Cancel Appointment";
      appt.appendChild(viewDetails);
      appt.appendChild(edit);
      appt.appendChild(cancel);
      upcomingAppointments(appts);
    }
  }
}

// Create Modal for Upcoming Appointments
function apptModal(type, date, time) {
  var modal = document.getElementById("details-modal");
  var lnk = document.getElementById("modalLink");
  var span = document.getElementsByClassName("close")[0];
  let modalType = document.createElement("p");
  let modalDate = document.createElement("p");
  let location = document.createElement("p");
  let modalContent = document.getElementById("modalContent");
  modalType.innerHTML = // fill
  modalDate = // fill
  location.innerHTML = // fill

  modalContent.append(modalType);
  modalContent.append(modalDate);
  modalContent.append(location);

  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("modalContent").innerHTML = "";
    }

  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("modalContent").innerHTML = "";
    }
  }
}

loadAppointments();