var myurl = "localhost:7000/api";


$(document).ready( function () {
	$(document).on("click", "#makeburger", function () {
		var urlTemp = myurl + "/data";
        $.ajax({
            type: "GET",
            url: urlTemp,
            timeout: 10000,
     
            success: function(data) {
                //show content
                
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+ textStatus +', err '+err);
                if (err === "timeout") {
                	console.log("waiting for server...");
                }
            }
        });
	});



});