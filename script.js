function firstWord(s) {
	if(!s) return "";
	s = s.trimStart();

	const index = s.indexOf(" ");

	if(index == -1) return s;
	return s.substring(0, index);
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
