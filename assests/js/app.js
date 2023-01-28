// Create function to store the different values user inputs
$(document).ready(function(){

    // Add event listener to listen for the Save Button Click
    $(".saveBtn").on("click", function(){

        // Set variables to be saved in local storage
        let hourID = $(this).parent().attr('id')
        let value = $(this).siblings(".description").val();

        localStorage.setItem(hourID, value);

        $(".notification").addClass("show");

    })
}) 