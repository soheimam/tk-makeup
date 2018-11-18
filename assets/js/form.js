const apptDate = document.getElementById("appointmentdate");
var currentDate

apptDate.addEventListener('change', () => {
    currentDate = document.getElementById("appointmentdate").value
    console.log(currentDate)
    $.get( "http://localhost:3000/api/availability", function( data ) {
        console.log(data)
  });
})

