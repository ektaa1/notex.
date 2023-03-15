$(function () {
	$(".open").on("click", function(){
		$(".popup, .popup-content").addClass("active");
		});
		$(".close, .popup").on("click", function(){
			$(".popup, .popup-content").removeClass("active");
			});
    $(".like").click(function () {
        var input = $(this).find('.qty1');
        input.val(parseInt(input.val())+ 1);
    });
	

    $(".dislike").click(function () {
        var input = $(this).find('.qty2');
        input.val(input.val() - 1);
    });
});
// Scroll.js

$(window).on('popstate',function(e){
	e.preventDefault();
	var target = window.location.href.split("#")[1];
	if(target != "" && target!=undefined && document.getElementById(target)!=null){
		$('html, body').stop().animate({'scrollTop': $("#"+target).offset().top}, 500, 'swing', function () {
			window.location.hash = target;
		});
	}
});
$(document).ready(function(){

    $("#loginForm").validate({
        rules: {
            email: {
                required: true
            },
            password: {
                required: true
            }
        },
        messages: {
            email: {
                required: "specify email"
            },
            password: {
                required: "specify password"
            }
        }
    });

});