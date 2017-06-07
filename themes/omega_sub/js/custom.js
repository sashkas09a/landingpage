(function ($) {
  Drupal.behaviors.myModuleBehavior = {
	attach: function () {
	  $("div.contact-message-feedback-form").submit(function() {
		var msg =  $("div.contact_message_feedback_form").serialize();
		$.ajax({
		  type: "POST",
		  data: msg,
		  async: false,
		  cache: false,
		  success: function(){
			$("div.contact-message-feedback-form").append("<p>Message send!</p>");
		  }
		});
		return false;
	  });
	}
  };
})(jQuery);
















// (function ($) {
//   Drupal.behaviors.myModuleBehavior = {
//     attach: function () {
//       $("html.no-touchevents.details.js body.toolbar-tray-open.toolbar-fixed.toolbar-horizontal div.layout-container main div.layout-content div div#block-contactblock.contact-message-feedback-form.contact-message-form.contact-form.contextual-region").click(function () {
//         alert("Hello");
//       });
//     }
//   };
// })(jQuery);







// (function ($) {
//   Drupal.behaviors.myModuleBehavior = {
//     attach: function () {
//       $("input[value='Send message']").click(function () {
//         alert("Hello!");
//       });
//     }
//   };
// })(jQuery);