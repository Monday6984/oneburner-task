/// some script

// jquery ready start
$(document).ready(function() {
	// jQuery code

	//////////////////////// Prevent closing from click inside dropdown
    $(document).on('hover', '.dropdown-menu', function (e) {
      e.stopPropagation();
    });
    
	
}); // jquery end