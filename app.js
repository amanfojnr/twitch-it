// code for the app

$("document").ready(function() {

    // channels to check 
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                     "storbeck", "habathcx", "RobotCaleb",
                      "noobs2ninjas", "comster404"]; 
                      


    


    for (i = 0; i < channels.length; i++) {
        getAPIInfo('streams','users', channels[i]); 
        
    }




        // functions

    
    function getAPIInfo(group1, group2, channel){
        
        $.ajax('https://wind-bow.gomix.me/twitch-api/' + group1 + '/' + channel + '?callback=?',
               {
                   'method': 'GET',
                   'data': {
                       'format': 'json',
                   },
                   'dataType': 'jsonp',
                   'success': (data) => {
                       var streamData = data;
                       
                       // get user info
                        $.ajax('https://wind-bow.gomix.me/twitch-api/' + group2 + '/' + channel + '?callback=?',
                            {
                                'method': 'GET',
                                'data': {
                                    'format': 'json',
                                },
                                'dataType': 'jsonp',
                                'success': (data) => {
                                    userData = data;
                                    addStreamInfo(streamData, userData);
                       
                                     }
                        });
                } });
    }



       function addStreamInfo(stream_object, user_object){

            var logo, status, user, url;

        
            
            if (stream_object.stream == null){
                console.log("stream is null YEP YEP");
                status = "offline";
                url = "offline"; 
                user =  user_object.display_name;
                logo = user_object.logo;       
            }

            else {

                logo = user_object.logo;
                status = stream_object.stream.channel.status; 
                user = user_object.display_name;
                url = stream_object.stream.channel.url;
            }
                
            $('.streamers-title').append(
                "<li class='w3-padding'>"
                + "<img src='" + logo
                + "' class='w3-left w3-circle w3-margin-right' style='width:50px'>"
                + "<span class='w3-large'>" + "<a href='"
                + url 
                + "' target='_blank'>" 
                + user
                + "</a></span><br>"
                + "<span>" + status + "</span>"
            );
    }

    function addUserInfo(user_object){

    }
    

});