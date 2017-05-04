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


        // fixed logo error

        function fixLogoError(user_object_logo){
                var logo;

                if (user_object_logo == null){
                    logo = "https://s22.postimg.org/e8tf320ep/error-image.png"; 
                }

                else {
                     logo = user_object_logo;
                }                  
                return logo;
        }

       // adds streamers info to html

       function addStreamInfo(stream_object, user_object){

            var logo, status, user, url;

          
            if (user_object.status === 422){
                  status = "-";
                  url = "#"; 
                  user =  user_object.message;
                  logo = "https://s22.postimg.org/e8tf320ep/error-image.png"; 
                  class_status = "offline"; 

            }

            else if (stream_object.stream == null){
                status = "offline";
                url = "https://twitch.tv/" + user_object.name; 
                user =  user_object.display_name;
                class_status = "offline";
                logo = fixLogoError(user_object.logo);  
     
            }

            else {

                status = stream_object.stream.channel.status; 
                user = user_object.display_name;
                url = stream_object.stream.channel.url;
                class_status = "offline";
                logo = fixLogoError(user_object.logo);
            }


                
            $('.streamers-title').append(
                "<li class=" + "w3-padding " + class_status + ">"
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
    
});