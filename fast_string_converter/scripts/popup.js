$( document ).ready(function() {
	
	var pasteTextArea = $('#pasteTextArea');
	var copyTextArea = $('#copyTextArea');

	function copyToClipboardAndPasteToTextArea() {

		// Copy
		copyTextArea.select();
		document.execCommand('copy');

		// Paste
		pasteTextArea.val(copyTextArea.val());

	}

	// String conversion functions

	function allLowerCase() {
		copyTextArea.val(pasteTextArea.val().toLowerCase());
	}

	function allUpperCase() {
		copyTextArea.val(pasteTextArea.val().toUpperCase());
	}

	function sentenceType() {
		let clipboardText = pasteTextArea.val();
		copyTextArea.val(clipboardText.charAt(0).toUpperCase() + clipboardText.slice(1) + (clipboardText.endsWith('.') ? "" : '.'));
	}

	function firstLettersUpperCase() {
		copyTextArea.val(pasteTextArea.val().split(' ').map(w =>  w.charAt(0).toUpperCase() + w.substring(1)).join(' '));
	}

	function alternateCase() {
		copyTextArea.val(pasteTextArea.val().split('').map(w =>  {if (w == w.toUpperCase()) {return w.toLowerCase()} else { return w.toUpperCase() }} ).join(''));
	}

	// The text contained in the clipboard is pasted to the pasteTextArea when the popup is opened.
	pasteTextArea.select();
	document.execCommand('paste');

	$("input").click(function()
	{ 
		eval(this.id + "()");
		copyToClipboardAndPasteToTextArea();
	});

});





