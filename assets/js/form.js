const apptDate = document.getElementById("appointmentdate");
var currentDate

apptDate.addEventListener('change', () => {
    currentDate = document.getElementById("appointmentdate").value
    $.get(`http://localhost:3000/api/availability?date=${currentDate}`, function (data) {
        data.available.forEach(time => {
            $('#booking-form').append(`<input type="radio"> ${time}`);
        });
    });
})