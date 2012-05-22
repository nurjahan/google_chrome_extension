$(function() {
	$("img").each(function(i) {
		var $img = $(this);
		console.debug("KENS_DEBUG: " + $img.attr('src'));
		chrome.extension.sendRequest({
			greeting: "happy",
			url: $img.attr('src')
		}, function(response) {
			$img.attr('src', response.farewell);
		});
	});
});