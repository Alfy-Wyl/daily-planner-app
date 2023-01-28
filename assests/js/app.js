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


    // Create a function to handle cuurent time and hourly updates 
    $(".time-block").each(function() {
        let timeBlock = $(this).attr("id").split("-")[1];

        // Set an IF Statement to handle past, present and future updates
        if (currentHour === timeBlock) {
            $(this).addClass("present");
            $(this).children(".description").addClass("text");
        } else if (currentHour < timeBlock) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > timeBlock) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }

    });
})