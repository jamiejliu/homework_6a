// Modal for Upcoming Appointments
function appointmentModal(type, date, time) {
  var modal = document.getElementById("details-modal");
  var lnk = document.getElementById("expandModal");
  var span = document.getElementsByClassName("close")[0];



  modal.style.display = "block";

  span.onclick = function() {
    modal.style.display = "none";

  }

  window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
    }

}