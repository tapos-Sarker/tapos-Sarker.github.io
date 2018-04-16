var ourreq = new XMLHttpRequest();
ourreq.open('GET','https://tapos-sarker.github.io/datas.json')
ourreq.onload = function(){
	 console.log(ourreq.responseText);
};
ourreq.send();