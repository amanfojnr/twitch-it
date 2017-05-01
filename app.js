// code for the app

$("document").ready(function() {

    // channels to check 
    var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp",
                     "storbeck", "habathcx", "RobotCaleb",
                      "noobs2ninjas", "comster404"]; 

    var channel_results = []; // store acquired channel info here
    var user_results = []; // for users

    for (i = 0; i < channels.length; i++) {

        // get info from channels through the twitch API

        $.ajax('https://wind-bow.gomix.me/twitch-api/streams/' + channels[i] + '?callback=?',
               {
                   'method': 'GET',
                   'data': {
                       'format': 'json',
                   },
                   'dataType': 'jsonp',
                   'success': function(data) {
                       channel_results.push(data);
                                        
                   }
               });

        // get info from users through the twitch API

      $.ajax('https://wind-bow.gomix.me/twitch-api/users/' + channels[i] + '?callback=?',
        {
            'method': 'GET',
            'data': {
                'format': 'JSON',
            },
            'async': 'false',
            'dataType': 'jsonp',
            'success': function(data) {
                user_results.push(data);
               
            }
        });
    }

    console.log(user_results + "jj");
    channel_results.forEach(function(element){
        console.log(element);

    });

});