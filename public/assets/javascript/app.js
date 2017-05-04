var myurl = "http://localhost:7000/api";


$(document).ready( function () {
	console.log("start app");
	getuserName();
	$(document).on("click", "#makeburger", function () {
		eventpreventDefault();
        var myBurger = $('#myburger').val();
        postBurger(myBurger);

    });
    $(document).on('click', '#setcreator', function () {
    	eventpreventDefault();
    	var user = $('#myname').val();
    	console.log(user);
    	postCreator(user);

    });

});
function getBurgers() {
    var urlTemp = myurl + "/burgers/";
    $.ajax({
        type: "GET",
        url: urlTemp,
        timeout: 10000,
     
        success: function(data) {
            //show content
            // $('#burger').html("");
            // for (var i = 0; i < data.length; i++) {
            //     $('#burger').append("<div class='text-center'>" + data[i].id + ". <textarea id='tx1' class='area text-center' type='text' name='burger_name'>" + data[i].burger_name + "</textarea><br>");
            //     $('#burger').append("<button type='submit' class='btn btn-md makeburger btnburger' value='"+data[i].id+"'>UPDATE Burger!</button>");
            //     $('#burger').append("<button type='submit' class='btn btn-md makeburger btnburger' data-devoured='true' value='"+data[i].id+"'>DEVOUR Burger!</button>");
            //     $('#burger').append("</div>");
            // }
            console.log("successful Burger Post");
        },
        error: function(jqXHR, textStatus, err) {
            //show error message
            console.log('text status '+ textStatus +', err '+err);
            if (err === "timeout") {
                console.log("waiting for server...");
            }
        }
    });
}
function getuserName () {
	$('#setname').css('display', "block");
	$('#start').css('display', 'none');
}
function allowmakeBurgers() {
	$('#setname').css('display', "none");
	$('#start').css('display', 'block');
	getBurgers();
}
function postCreator (name) {
	var urlTemp = myurl + "/creators/";
    
        $.ajax({
            type: "POST",
            url: urlTemp,
            timeout: 4000,
            data: name,
            success: function(data) {
                //show content to console for testing
                //console.log(JSON.stringify(data));
                console.log("successful Creator Post");
                allowmakeBurgers();
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+textStatus+', err '+err);
                if (err === "timeout") {
                    console.log("waiting for server...");
                    postItem(myJson);
                }
            }
        });
}

function postBurger (myJson) {
    var urlTemp = myurl + "/burgers/";
    
        $.ajax({
            type: "POST",
            url: urlTemp,
            timeout: 4000,
            data: myJson,
            success: function(data) {
                //show content to console for testing
                //console.log(JSON.stringify(data));
                console.log("successful Post");
            },
            error: function(jqXHR, textStatus, err) {
                //show error message
                console.log('text status '+textStatus+', err '+err);
                if (err === "timeout") {
                    console.log("waiting for server...");
                    postItem(myJson);
                }
            }
        });
}
