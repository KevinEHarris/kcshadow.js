//if (window.jQuery) {
//    alert('jQuery loaded');
//}
//else {
//    alert('jQuery not loaded');
//}

// Create a jQuery object from the DOM Document Object
console.log($(document));

// Check for the existance of element with jQuery length
$(document).ready(function() {
    if ($('#divFirst').length) {
        console.log('Found first div') ;       
    }

    var listItems=$('li');
    console.log(listItems);
    
    // Use jQuery .eq() to get item in selection
    var secondListItem = listItems.eq(1);
    secondListItem.remove();
    
});