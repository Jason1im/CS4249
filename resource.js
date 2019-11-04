var locationchecked = false;
var typechecked = false;
var locationA = false;
var locationB = false;
var locationC = false;
var locationD = false;
var anyLocation = false;
var anyFacil = true;
var facilA = false;
var facilB = false;
var facilC = false;
var facilD = false;

$('#type-checkbox-list :checkbox').click(function (eventObj) {
    $("#type-checkbox-list :checkbox").each(function(){
        if ($(this).prop('id') != eventObj.target.id) {
            $(this).prop('checked', false);
        } else {
            typechecked = $(this).prop('checked');
            anyFacil = !typechecked;
            facilA = facilB = facilC = facilD = anyFacil;
            if ($(this).prop('id') == 'typeA') {
                facilA = typechecked;
                facilB = false;
                facilC = false;
                facilD = false;
            } else if ($(this).prop('id') == 'typeB') {
                facilA = false;
                facilB = typechecked;
                facilC = false;
                facilD = false;
            } else if ($(this).prop('id') == 'typeC') {
                facilA = false;
                facilB = false;
                facilC = typechecked;
                facilD = false;
            } else if ($(this).prop('id') == 'typeD') {
                facilA = false;
                facilB = false;
                facilC = false;
                facilD = typechecked;
            }
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
       console.log($('parent-Room-options').length);
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

    if (!anyFacil) {
        if (facilA) {
            if (!locationchecked) {
                $('.faciltype-typeA').css('display', 'inline-flex');
            }
            
        } else {
            $('.faciltype-typeA').css('display', 'none');
            $('.faciltype-typeA').prop('checked', false);
        }

        if (facilB) {
            if (!locationchecked) {
                $('.faciltype-typeB').css('display', 'inline-flex');
            }
            // $('.faciltype-typeB').css('display', 'inline-flex');
        } else {
            $('.faciltype-typeB').css('display', 'none');
            $('.faciltype-typeB').prop('checked', false);
        }

        if (facilC) {
            if (!locationchecked) {
                $('.faciltype-typeC').css('display', 'inline-flex');
            }
            //$('.faciltype-typeC').css('display', 'inline-flex');
        } else {
            $('.faciltype-typeC').css('display', 'none');
            $('.faciltype-typeC').prop('checked', false);
        }

        if (facilD) {
            if (!locationchecked) {
                $('.faciltype-typeD').css('display', 'inline-flex');
            }
            // $('.faciltype-typeD').css('display', 'inline-flex');
        } else {
            $('.faciltype-typeD').css('display', 'none');
            $('.faciltype-typeD').prop('checked', false);
        }
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
