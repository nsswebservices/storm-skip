/**
 * @name storm-skip: Fixes skip to content links focus problem
 * @version 0.1.0: Fri, 21 Oct 2016 10:56:16 GMT
 * @author stormid
 * @license MIT
 */
{
	let focusable = ['a', 'select', 'input', 'button', 'textarea'];
  
	window.addEventListener('hashchange', () => {
		let element = document.getElementById(window.location.hash.substring(1));

		if (element) {
			if(!(focusable.indexOf(element.tagName.toLowerCase()) > -1)){
				element.tabIndex = -1;
			}
			element.focus();
		}
	});
}