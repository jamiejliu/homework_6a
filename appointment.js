// Load Existing Appointments onto Appointments Page
function loadAppointments() {
  let upcomingText = document.getElementById("upcomingText");
  var appts = JSON.parse(localStorage.getItem("appts"));
  let upcomingAppointments = document.getElementById("upcomingAppointments");
  console.log(appts);
  if (appts === null) {
    appts = [];
    let noAppointments = document.createElement("p");
    noAppointments.innerHTML = "You have no upcoming appointments scheduled.";
    upcomingAppointments.appendChild(noAppointments);
    upcomingText.innerHTML = "Upcoming Appointments: 0";
  }

  else {
    let col1 = document.getElementById("upcomingAppointmentsLeft");
    let col2 = document.getElementById("upcomingAppointmentsRight");
    for (let i=0; i < appts.length; i++) {
      upcomingText.innerHTML = "You have " + appts.length + " upcoming appointment(s).";
      let appt = document.createElement("div");
      appt.classList.add("upcoming-appointments");
      let type = document.createElement("h3");
      let date = document.createElement("dateText");
      let viewDetails = document.createElement("expandModal");
      type.innerHTML = appts[i].type;
      date.innerHTML = appts[i].date;
      appt.appendChild(type);
      appt.appendChild(date);
      viewDetails.setAttribute("id", "expandModal");

      // Fill in Appointment Details
      viewDetails.setAttribute("onclick", `apptModal("${appts[i].type}", "${appts[i].date}", "${appts[i].time}")`);
      viewDetails.classList.add("expandModal");
      viewDetails.innerHTML = "More Details";
      appt.appendChild(viewDetails);
      if(i%2 == 0){
        col1.appendChild(appt);
      }
      else {
        col2.appendChild(appt);
      }
    }
  }
}

// Create Modal for Upcoming Appointments
function apptModal(type, date, time) {

  var modal = document.getElementById("detailsModal");
  let modalType = document.getElementById("modalType");
  let modalDate = document.getElementById("modalDate");
  let modalTime = document.getElementById("modalTime")
  modalType.innerHTML = type;
  modalDate.innerHTML = "Date: " + date;
  modalTime.innerHTML = "Time: " + time;
  modal.style.display = "block";


  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function spanClose(){
  var modal = document.getElementById("detailsModal");
  modal.style.display = "none";
}

loadAppointments();

