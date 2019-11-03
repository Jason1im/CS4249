$('#type-checkbox-list :checkbox').click(function (e) {
    $("#type-checkbox-list :checkbox").each(function(){
        if ($(this).prop('id') != e.target.id) {
            $(this).prop('checked', false);
        }
    })
    displayOptions('#' + e.target.id, '#Room-options')
});

$('#Location-options :checkbox').click(function (e) {
    $("#Location-options :checkbox").each(function(){
        if ($(this).prop('id') != e.target.id) {
            $(this).prop('checked', false);
        }
    })
    displayOptions('#' + e.target.id, '#Room-options');
});
    
function displayOptions(id, nextid) {       
    $(id).change(function() {
        if (this.checked) {
          $(nextid).show();
        //   $('#otherField').attr('required', '');
        //   $('#otherField').attr('data-error', 'This field is required.');
        } else {
          $(nextid).hide();
        //   $('#otherField').removeAttr('required');
        //   $('#otherField').removeAttr('data-error');
        }
    });
}

$("#Room-options").wrapAll("<div class='custom-checkbox'></div>");
