/*
* @Last modified in Sublime on Mar 03, 2020 10:57:11 PM
*/

const shortcutHelperName = 'Fitbit Importer Helper';

function getHashParam(name) {
  var match = RegExp(`[#&]${name}=([^&]*)`).exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function () {
	document.querySelector('#open-fitbit-importer').addEventListener('click', function (event) {
		event.preventDefault();

		window.location.href = `shortcuts://run-shortcut?name=${encodeURIComponent(shortcutHelperName)}&input=text&text={"command":"save-authorization","authorization":{"access_token":"${getHashParam('access_token')}","user_id":"${getHashParam('user_id')}"}}`;
	}, true)
}, true);
