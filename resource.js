var locationchecked = false;
var typechecked = false;
var locationA = false;
var locationB = false;
var locationC = false;
var locationD = false;
var anyLocation = false;

$('#type-checkbox-list :checkbox').click(function (eventObj) {
    $("#type-checkbox-list :checkbox").each(function(){
        if ($(this).prop('id') != eventObj.target.id) {
            $(this).prop('checked', false);
        } else {
            typechecked = $(this).prop('checked');
        }
    })
    displayOptions();
});



$('#Location-options :checkbox').click(function (eventObj) {
    $("#Location-options :checkbox").each(function(){
        if ($(this).prop('id') != eventObj.target.id) {
            $(this).prop('checked', false);
        } else {
            locationA = locationB = locationC = locationD = false;
            locationchecked = $(this).prop('checked');
            if ($(this).prop('id') == 'locationA') {
                locationA = locationchecked;
                locationB = false;
                locationC = false;
                locationD = false;
            } else if ($(this).prop('id') == 'locationB') {
                locationA = false;
                locationB = locationchecked;
                locationC = false;
                locationD = false;
            } else if ($(this).prop('id') == 'locationC') {
                locationA = false;
                locationB = false;
                locationC = locationchecked;
                locationD = false;
            } else if ($(this).prop('id') == 'locationD') {
                locationA = false;
                locationB = false;
                locationC = false;
                locationD = locationchecked;
            } else if ($(this).prop('id') == 'anyLocation') {
                locationA = locationchecked;
                locationB = locationchecked;
                locationC = locationchecked;
                locationD = locationchecked;
            }
        }
    })
    displayOptions();
});
    
function displayOptions() {
   // console.log(locationchecked + " type: "+ typechecked);
   // if (locationchecked || typechecked) {
        $('#Room-options').show();
        if (locationA) {
            $('.location-locationA').css('display', "inline-flex");
        } else {
            $('.location-locationA').css('display', "none");
            $('.location-locationA').prop('checked', false);
        }

        if (locationB) {
            $('.location-locationB').css('display', "inline-flex");
        } else {
            $('.location-locationB').css('display', "none");
            $('.location-locationB').prop('checked', false);
        }

        if (locationC) {
            $('.location-locationC').css('display', "inline-flex");
        } else {
            $('.location-locationC').css('display', "none");
            $('.location-locationC').prop('checked', false);
        }

        if (locationD) {
            $('.location-locationD').css('display', "inline-flex");
        } else {
            $('.location-locationD').css('display', "none");
            $('.location-locationD').prop('checked', false);
        }
    //   $('#otherField').attr('required', '');
    //   $('#otherField').attr('data-error', 'This field is required.');
  //  } else {
  //      $('#Room-options').hide();
   //     var children = $('.parent-Room-options').prop('checked', false); // uncheck when hidden
    //   $('#otherField').removeAttr('required');
    //   $('#otherField').removeAttr('data-error');
  //  }
}

// $("#Room-options").wrapAll("<div class='custom-checkbox'></div>");

//var LocA = document.getElementById('locationA');
//var LocB = document.getElementById('locationB');
//var LocC = document.getElementById('locationC');
//var LocD = document.getElementById('locationD');

//LocA.addEventListener("click", toggleFlag);
//LocB.addEventListener("click", toggleFlag);
//LocC.addEventListener("click", toggleFlag);
//LocD.addEventListener("click", toggleFlag);

//function toggleFlag() {
//    var locId = this.attributes.id;

//}

//function displayOptions2() {

//}
