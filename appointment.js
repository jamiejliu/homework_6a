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
  // let location = document.getElementById("location");
  // let edit = document.createElement("button")
  // let notes = document.createElement("p");
  // let modalContent = document.getElementById('modalContent')
  // let leftContent = document.getElementById("modalLeft");
  // let rightContent = document.getElementById("modalRight");
  modalType.innerHTML = type;
  modalDate.innerHTML = "Date: " + date;
  modalTime.innerHTML = "Time: " + time;
  // location.innerHTML = "Location: E Campus Garage";
  // notes.innerHTML = "Notes: Please arrive to your appointment within the 15 minute grace period.";
  // edit.innerHTML = "Edit Appointment";

  // modalContent.appendChild(modalType);
  // modalLeft.appendChild(modalDate);
  // modalLeft.appendChild(modalTime);
  // modalLeft.appendChild(edit);
  // modalRight.appendChild(location);
  // modalRight.appendChild(notes);

  modal.style.display = "block";



  // span.onclick = function() {
  //   modal.style.display = "none";
  //   document.getElementById("modalContent").innerHTML = "";
  //   };

  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
      //document.getElementById("modalContent").innerHTML = "";
    }
  };
}

function spanClose(){
  var modal = document.getElementById("detailsModal");
  modal.style.display = "none";
   //document.getElementById("modalContent").innerHTML = "";
}

loadAppointments();

