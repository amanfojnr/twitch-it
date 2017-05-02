// code for the app

$("document").ready(function() {

    // channels to check 
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                     "storbeck", "habathcx", "RobotCaleb",
                      "noobs2ninjas", "comster404"]; 
                      


    function addStreamInfo(stream_object){
     

        $('.streamers-title').append(
            "<li class='w3-padding'>"
            + "<img src='" + stream_object.stream.channel.logo
            + "' class='w3-left w3-circle w3-margin-right' style='width:50px'>"
            + "<span class='w3-large'>" + "<a href='"
            + stream_object.stream.channel.url 
            + "' target='_blank'>" 
            + stream_object.stream.channel.display_name 
            + "</a></span><br>"
            + "<span>" + stream_object.stream.channel.status + "</span>"
        );
    }

    
    function getAPIInfo(group, channels){
        
        $.ajax('https://wind-bow.gomix.me/twitch-api/' + group + '/' + channels[i] + '?callback=?',
               {
                   'method': 'GET',
                   'data': {
                       'format': 'json',
                   },
                   'dataType': 'jsonp',
                   'success': (data) => {addStreamInfo(data);}
               });
    }


  /*  function fetchAPIInfo(group, channels, new_results) {
        fetch('https://wind-bow.gomix.me/twitch-api/' + group + '/' + channels[i] + '?callback=?')
        .then((response) => {response.json()})
        .then((data) => {
            new_results.push(data);
            console.log(data);
        });
    }
*/


    for (i = 0; i < channels.length; i++) {
        getAPIInfo('streams', channels); 
        
    }

});