$('#type-checkbox-list :checkbox').click(function (e) {
    $("#type-checkbox-list :checkbox").each(function(){
        if ($(this).prop('id') != e.target.id) {
            $(this).prop('checked', false);
        }
    })
    displayOptions('#' + e.target.id)
});




    
function displayOptions(id) {
    $(id).change(function() {
        if (this.checked) {
          $('#Location-options').show();
        //   $('#otherField').attr('required', '');
        //   $('#otherField').attr('data-error', 'This field is required.');
        } else {
          $('#Location-options').hide();
        //   $('#otherField').removeAttr('required');
        //   $('#otherField').removeAttr('data-error');
        }
    });
}
// $("#defaultUnchecked").change(function() {
//     if (this.checked) {
//       $('#Location-options').show();
//     //   $('#otherField').attr('required', '');
//     //   $('#otherField').attr('data-error', 'This field is required.');
//     } else {
//       $('#Location-options').hide();
//     //   $('#otherField').removeAttr('required');
//     //   $('#otherField').removeAttr('data-error');
//     }
// });

