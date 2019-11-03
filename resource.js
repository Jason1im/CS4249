$("#defaultUnchecked").change(function() {
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

