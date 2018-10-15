module.exports = {
		RandomChar: 
		/**Returns a string of {desiredLength} random alphanumeric characters 
		 * 
		 * @param {*number} desiredLength length of the desired string
		 * @returns {string} str - string of alphanumeric chars  
		 */
		function (desiredLength){
	  let string = "abcdefghijklmnopqrstuvwxyz0123456789";
	  let str = '';
	  let i = 0;
	  while(i < desiredLength){
		str += string.charAt(Math.floor(Math.random() * string.length));
		i++;
	  }
	  return str;
	}
}