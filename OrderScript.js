var message = "";

$("#Submit").on("click", function() {
    message = $("#contactform").serialize();
    $.ajax({
        url: "//formspree.io/admin@californiatitle24.net", 
        method: "POST",
        data: {message: message},
        dataType: "json"
    });
    alert('Thanks for the email, we\'ll be in touch promptly.');
    return false;
});