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

if ( $('#startDate')[0].type != 'date' ) $('#startDate').datepicker();

$('#type-dropdown-list').change(function () {
    if (this.value == "Choose a facility type") {
        typechecked = false;
        anyFacil = true;
        facilA = facilB = facilC = facilD = facilE = false;
    }
    if (this.value == "Study Room") {
        typechecked = true;
        anyFacil = false;
        facilA = true;
        facilB = facilC = facilD = facilE = false;
    }
    if (this.value == "Conference Room") {
        typechecked = true;
        anyFacil = false;
        facilB = true;
        facilA = facilC = facilD = facilE = false;
    }
    if (this.value == "Music Room") {
        typechecked = true;
        anyFacil = false;
        facilC = true;
        facilA = facilB = facilD = facilE = false;
    }
    if (this.value == "Practice Room") {
        typechecked = true;
        anyFacil = false;
        facilD = true;
        facilA = facilB = facilC = facilE = false;
    }
    if (this.value == "Open Space") {
        typechecked = true;
        anyFacil = false;
        facilE = true;
        facilA = facilB = facilC = facilD = false;
    }
    //    if ($(this).prop('id') != eventObj.target.id) {
    //        $(this).prop('checked', false);
    //    } else {
    //        typechecked = $(this).prop('checked');
    //        anyFacil = !typechecked;
    //        facilA = facilB = facilC = facilD = facilE = anyFacil;
    //        if ($(this).prop('id') == 'StudyRoom') {
    //            facilA = typechecked;
    //            facilB = false;
    //            facilC = false;
    //            facilD = false;
    //            facilE = false;
    //        } else if ($(this).prop('id') == 'ConferenceRoom') {
    //            facilA = false;
    //            facilB = typechecked;
    //            facilC = false;
    //            facilD = false;
    //            facilE = false;
    //        } else if ($(this).prop('id') == 'MusicRoom') {
    //            facilA = false;
    //            facilB = false;
    //            facilC = typechecked;
    //            facilD = false;
    //            facilE = false;
    //        } else if ($(this).prop('id') == 'PracticeRoom') {
    //            facilA = false;
    //            facilB = false;
    //            facilC = false;
    //            facilD = typechecked;
    //            facilE = false;
    //        } else if ($(this).prop('id') == 'OpenSpace') {
    //            facilA = false;
    //            facilB = false;
    //            facilC = false;
    //            facilD = false;
    //            facilE = typechecked;
    //        }
    //    }
    //})
    displayOptions();
});



$('#location-dropdown-list').change(function () {
    if (this.value == "Choose a location") {
        Buildingchecked = false;
        buildingA = buildingB = buildingC = buildingD = false;
    }
    if (this.value == "Any Location") {
        Buildingchecked = true;
        buildingA = buildingB = buildingC = buildingD = true;
    }
    if (this.value == "Building A") {
        Buildingchecked = true;
        buildingA = true;
        buildingB = buildingC = buildingD = false;
    }
    if (this.value == "Building B") {
        Buildingchecked = true;
        buildingB = true;
        buildingA = buildingC = buildingD = false;
    }
    if (this.value == "Building C") {
        Buildingchecked = true;
        buildingC = true;
        buildingA = buildingB = buildingD = false;
    }
    //    if ($(this).prop('id') != eventObj.target.id) {
    //        $(this).prop('checked', false);
    //    } else {
    //        buildingA = buildingB = buildingC = buildingD = false;
    //        Buildingchecked = $(this).prop('checked');
    //        if ($(this).prop('id') == 'BuildingA') {
    //            buildingA = Buildingchecked;
    //            buildingB = false;
    //            buildingC = false;
    //            buildingD = false;
    //        } else if ($(this).prop('id') == 'BuildingB') {
    //            buildingA = false;
    //            buildingB = Buildingchecked;
    //            buildingC = false;
    //            buildingD = false;
    //        } else if ($(this).prop('id') == 'BuildingC') {
    //            buildingA = false;
    //            buildingB = false;
    //            buildingC = Buildingchecked;
    //            buildingD = false;
    //        } else if ($(this).prop('id') == 'BuildingD') {
    //            buildingA = false;
    //            buildingB = false;
    //            buildingC = false;
    //            buildingD = Buildingchecked;
    //        } else if ($(this).prop('id') == 'anyBuilding') {
    //            buildingA = Buildingchecked;
    //            buildingB = Buildingchecked;
    //            buildingC = Buildingchecked;
    //            buildingD = Buildingchecked;
    //        }
    //    }
    //})
    displayOptions();
});
    
function displayOptions() {
   // console.log(Buildingchecked + " type: "+ typechecked);
   // if (Buildingchecked || typechecked) {
        $('#Room-options').show();
        if (buildingA) {
            $('.location-BuildingA').css('display', "block");
        } else {
            $('.location-BuildingA').css('display', "none");
           // $('.location-BuildingA').prop('checked', false);
        }

        if (buildingB) {
            $('.location-BuildingB').css('display', "block");
        } else {
            $('.location-BuildingB').css('display', "none");
            //$('.location-BuildingB').prop('checked', false);
        }

        if (buildingC) {
            $('.location-BuildingC').css('display', "block");
        } else {
            $('.location-BuildingC').css('display', "none");
            //$('.location-BuildingC').prop('checked', false);
        }

        if (buildingD) {
            $('.location-locationD').css('display', "block");
        } else {
            $('.location-locationD').css('display', "none");
            //$('.location-locationD').prop('checked', false);
    }

    if (!anyFacil) {
        if (facilA) {
            if (!Buildingchecked) {
                $('.faciltype-StudyRoom').css('display', 'block');
            }
            
        } else {
            $('.faciltype-StudyRoom').css('display', 'none');
            //$('.faciltype-StudyRoom').prop('checked', false);
        }

        if (facilB) {
            if (!Buildingchecked) {
                $('.faciltype-ConferenceRoom').css('display', 'block');
            }
            // $('.faciltype-typeB').css('display', 'inline-flex');
        } else {
            $('.faciltype-ConferenceRoom').css('display', 'none');
            //$('.faciltype-ConferenceRoom').prop('checked', false);
        }

        if (facilC) {
            if (!Buildingchecked) {
                $('.faciltype-MusicRoom').css('display', 'block');
            }
            //$('.faciltype-typeC').css('display', 'inline-flex');
        } else {
            $('.faciltype-MusicRoom').css('display', 'none');
           // $('.faciltype-MusicRoom').prop('checked', false);
        }

        if (facilD) {
            if (!Buildingchecked) {
                $('.faciltype-PracticeRoom').css('display', 'block');
            }
        } else {
            $('.faciltype-PracticeRoom').css('display', 'none');
            //$('.faciltype-PracticeRoom').prop('checked', false);
        }
        if (facilE) {
            if (!Buildingchecked) {
                $('.faciltype-OpenSpace').css('display', 'block');
            }
        } else {
            $('.faciltype-OpenSpace').css('display', 'none');
            //$('.faciltype-OpenSpace').prop('checked', false);
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
