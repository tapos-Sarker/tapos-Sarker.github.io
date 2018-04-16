var ourreq = new XMLHttpRequest();
ourreq.open('GET','https://drive.google.com/file/d/13VTNEct9eLhV7afBBppV0Vtz7Javqxbh/view?usp=sharing','jsonp')
ourreq.onload = function(){
	 console.log(ourreq.responseText);
};
ourreq.send();