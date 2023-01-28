// Create function to store the different values user inputs
$(document).ready(function(){

    // Add event listener to listen for the Save Button Click
    $(".saveBtn").on("click", function(){

        // Set variables to be saved in local storage
        let hourID = $(this).parent().attr('id')
        let value = $(this).siblings(".description").val();

        localStorage.setItem(hourID, value);

        // Set function to save and display notification after user inputs
        $(".notification").addClass("show");

        // Set function to remove displayed notification after 5 seconds
        setTimeout(function() {
            $(".notification").removeClass("show");
        }, 5000)

    })


    // Create function to handle hourly updates
    function hourUpdate(){
        let currentHour = moment().hours();

        // Set a For Loop for hourly updates
        for(let a = 0; a < $(".time-block").length; a++){
            let hour = parseInt($(".time-block")[a].getAttribute("id").split("-")[1]) 

        

            // Set an IF Statement to handle past, present and future updates
            if (hour < currentHour) {
                $(".time-block")[a].classList.add("past")
            } else if(hour === currentHour){
                $(".time-block")[a].classList.add("past")
                $(".time-block")[a].classList.remove("present")
            } else {
                $(".time-block")[a].classList.remove("past")
                $(".time-block")[a].classList.remove("present")
                $(".time-block")[a].classList.add("future")
            }
        }
    }


    hourUpdate();

    let interval = setInterval(hourUpdate, 10000 )


    $("#hour-9 .description").val(localStorage.getItem("9"));
    $("#hour-10 .description").val(localStorage.getItem("10"));
    $("#hour-11 .description").val(localStorage.getItem("11"));
    $("#hour-12 .description").val(localStorage.getItem("12"));
    $("#hour-13 .description").val(localStorage.getItem("13"));
    $("#hour-14 .description").val(localStorage.getItem("14"));
    $("#hour-15 .description").val(localStorage.getItem("15"));
    $("#hour-16 .description").val(localStorage.getItem("16"));
    $("#hour-17 .description").val(localStorage.getItem("17"));

    $("#currentDay").text(moment().format("Do MMMM YYYY"))

})