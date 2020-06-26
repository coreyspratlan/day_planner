$(document).ready(function () {

    // Current date and time was showing before I created my if/else if statments.
    timer = setInterval(refreshTime, 1000);
    function refreshTime() {
        var date = moment(Date.now()).format("dddd, MMMM Do YYYY, h a");
        $("#currentDay").html(date);
    }


    var currentTime = moment().hour()

    //parseInt(moment(Date.now()).format("h"));
    // var timeId = parseInt("");
    //     console.log(timeId);

    function setInterval() {
        $("textarea").each(function () {
            var name = parseInt($(this).attr("name"))

            if (name == currentTime) {
                $(this).addClass("present");
                // textarea show red
            }

            else if (name < currentTime) {
                $(this).addClass("past");
                // textarea show gray
            }

            else if (name > currentTime) {
                $(this).addClass("future");
            }
            // textarea show green
        
        })
    }
        $(".time-block").on("click", function (event) {
            event.preventDefault();
            if (event.target.className === "col-md-1 saveBtn") {
                var inputData = (this.children[1].value);
                console.log(inputData);

            }
        })


        // The inputData from the above function needs to be stored locally JSON.strinify
    })