var locationchecked = false;
var typechecked = false;

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
            locationchecked = $(this).prop('checked');
        }
    })
    displayOptions();
});
    
function displayOptions() {
    console.log(locationchecked + " type: "+ typechecked);
    if (locationchecked || typechecked) {
        $('#Room-options').show();
    //   $('#otherField').attr('required', '');
    //   $('#otherField').attr('data-error', 'This field is required.');
    } else {
        $('#Room-options').hide();
        var children = $('.parent-Room-options').prop('checked', false); // uncheck when hidden
    //   $('#otherField').removeAttr('required');
    //   $('#otherField').removeAttr('data-error');
    }
}

// $("#Room-options").wrapAll("<div class='custom-checkbox'></div>");
