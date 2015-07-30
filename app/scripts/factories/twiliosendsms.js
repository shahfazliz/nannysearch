function twiliosendsmsjquery(to, msg, callbackSucess, callbackFail){
    $.ajax({
        method:     'POST',
        url:        'https://api.twilio.com/2010-04-01/Accounts/AC6659e644be085e375752a51422018eef/Messages.json',
        headers:{   'Authorization': 'Basic ' + btoa('AC6659e644be085e375752a51422018eef:7f0d9b9ddaa6ee68318efee2f4a229d2')},
        data: {
            'To':     to,
            'From':   '+14155992671',
            'Body':   msg
        }
    })
    .done(callbackSucess)
    .fail(callbackFail);
}


// Example execute function
function sendSMSJquery(){
    twiliosendsmsjquery('+60163064256', 'Another twilio test from jquery!!', function(data){
        $('#twilioresult').html(JSON.stringify(data));
    }, function(data){
        $('#twilioresult').html(JSON.stringify(data));
    });
}


// function twiliosendsmsangular(to, msg, callbackSucess, callbackFail){
//     $resource({
//         method:     'POST',
//         url:        'https://api.twilio.com/2010-04-01/Accounts/AC6659e644be085e375752a51422018eef/Messages.json',
//         headers:{   'Authorization': 'Basic ' + btoa('AC6659e644be085e375752a51422018eef:7f0d9b9ddaa6ee68318efee2f4a229d2')},
//         data: {
//             'To':     to,
//             'From':   '+14155992671',
//             'Body':   msg
//         }
//     })
//     .success(callbackSucess)
//     .error(callbackFail);
// }


// Example execute function
// function sendSMSAngular(){
//     twiliosendsmsangular('+60163064256', 'Another twilio test from angular!!', function(data){
//         $('#twilioresult').html(JSON.stringify(data));
//     }, function(data){
//         $('#twilioresult').html(JSON.stringify(data));
//     });
// }