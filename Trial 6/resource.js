var Buildingchecked = false;
var typechecked = false;
var buildingA = false;
var buildingB = false;
var buildingC = false;
var buildingD = false;
var anyBuilding = false;
var anyFacil = true;
var facilA = false;
var facilB = false;
var facilC = false;
var facilD = false;
var facilE = false;

$('#type-checkbox-list :checkbox').click(function (eventObj) {
    $("#type-checkbox-list :checkbox").each(function(){
        if ($(this).prop('id') != eventObj.target.id) {
            $(this).prop('checked', false);
        } else {
            typechecked = $(this).prop('checked');
            anyFacil = !typechecked;
            facilA = facilB = facilC = facilD = facilE = anyFacil;
            if ($(this).prop('id') == 'StudyRoom') {
                facilA = typechecked;
                facilB = false;
                facilC = false;
                facilD = false;
                facilE = false;
            } else if ($(this).prop('id') == 'ConferenceRoom') {
                facilA = false;
                facilB = typechecked;
                facilC = false;
                facilD = false;
                facilE = false;
            } else if ($(this).prop('id') == 'MusicRoom') {
                facilA = false;
                facilB = false;
                facilC = typechecked;
                facilD = false;
                facilE = false;
            } else if ($(this).prop('id') == 'PracticeRoom') {
                facilA = false;
                facilB = false;
                facilC = false;
                facilD = typechecked;
                facilE = false;
            } else if ($(this).prop('id') == 'OpenSpace') {
                facilA = false;
                facilB = false;
                facilC = false;
                facilD = false;
                facilE = typechecked;
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
            buildingA = buildingB = buildingC = buildingD = false;
            Buildingchecked = $(this).prop('checked');
            if ($(this).prop('id') == 'BuildingA') {
                buildingA = Buildingchecked;
                buildingB = false;
                buildingC = false;
                buildingD = false;
            } else if ($(this).prop('id') == 'BuildingB') {
                buildingA = false;
                buildingB = Buildingchecked;
                buildingC = false;
                buildingD = false;
            } else if ($(this).prop('id') == 'BuildingC') {
                buildingA = false;
                buildingB = false;
                buildingC = Buildingchecked;
                buildingD = false;
            } else if ($(this).prop('id') == 'BuildingD') {
                buildingA = false;
                buildingB = false;
                buildingC = false;
                buildingD = Buildingchecked;
            } else if ($(this).prop('id') == 'anyBuilding') {
                buildingA = Buildingchecked;
                buildingB = Buildingchecked;
                buildingC = Buildingchecked;
                buildingD = Buildingchecked;
            }
        }
    })
    displayOptions();
});
    
function displayOptions() {
   // console.log(Buildingchecked + " type: "+ typechecked);
   // if (Buildingchecked || typechecked) {
        $('#Room-options').show();
        if (buildingA) {
            $('.location-BuildingA').css('display', "inline-flex");
        } else {
            $('.location-BuildingA').css('display', "none");
            $('.location-BuildingA').prop('checked', false);
        }

        if (buildingB) {
            $('.location-BuildingB').css('display', "inline-flex");
        } else {
            $('.location-BuildingB').css('display', "none");
            $('.location-BuildingB').prop('checked', false);
        }

        if (buildingC) {
            $('.location-BuildingC').css('display', "inline-flex");
        } else {
            $('.location-BuildingC').css('display', "none");
            $('.location-BuildingC').prop('checked', false);
        }

        if (buildingD) {
            $('.location-locationD').css('display', "inline-flex");
        } else {
            $('.location-locationD').css('display', "none");
            $('.location-locationD').prop('checked', false);
    }

    if (!anyFacil) {
        if (facilA) {
            if (!Buildingchecked) {
                $('.faciltype-StudyRoom').css('display', 'inline-flex');
            }
            
        } else {
            $('.faciltype-StudyRoom').css('display', 'none');
            $('.faciltype-StudyRoom').prop('checked', false);
        }

        if (facilB) {
            if (!Buildingchecked) {
                $('.faciltype-ConferenceRoom').css('display', 'inline-flex');
            }
            // $('.faciltype-typeB').css('display', 'inline-flex');
        } else {
            $('.faciltype-ConferenceRoom').css('display', 'none');
            $('.faciltype-ConferenceRoom').prop('checked', false);
        }

        if (facilC) {
            if (!Buildingchecked) {
                $('.faciltype-MusicRoom').css('display', 'inline-flex');
            }
            //$('.faciltype-typeC').css('display', 'inline-flex');
        } else {
            $('.faciltype-MusicRoom').css('display', 'none');
            $('.faciltype-MusicRoom').prop('checked', false);
        }

        if (facilD) {
            if (!Buildingchecked) {
                $('.faciltype-PracticeRoom').css('display', 'inline-flex');
            }
        } else {
            $('.faciltype-PracticeRoom').css('display', 'none');
            $('.faciltype-PracticeRoom').prop('checked', false);
        }
        if (facilE) {
            if (!Buildingchecked) {
                $('.faciltype-OpenSpace').css('display', 'inline-flex');
            }
        } else {
            $('.faciltype-OpenSpace').css('display', 'none');
            $('.faciltype-OpenSpace').prop('checked', false);
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
