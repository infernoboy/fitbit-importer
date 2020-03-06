/*
* @Last modified in Sublime on Mar 06, 2020 03:07:50 PM
*/

function getHashParam(name) {
  var match = RegExp(`[#&]${name}=([^&]*)`).exec(window.location.hash);
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

document.addEventListener('DOMContentLoaded', function () {
	const token = getHashParam('access_token');
	const userID = getHashParam('user_id');
	const shortcutName = getHashParam('state');

	const link = document.querySelector('#open-fitbit-importer');

	if (!token || !userID)
		link.innerHTML = 'Missing Fitbit Authorization';
	else
		link.addEventListener('click', function (event) {
			event.preventDefault();

			window.location.href = `shortcuts://run-shortcut?name=${encodeURIComponent(shortcutName)}&input=text&text={"command":"save-authorization","authorization":{"access_token":"${token}","user_id":"${userID}"}}`;
		}, true);
}, true);
