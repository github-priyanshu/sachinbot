var cls=9,real=false;
function selectCls(e){
	cls=e.value;
	op("#clsShow").innerHTML=cls + ' ';
}
function fakeOrReal(e){
	real=Boolean(e.value);
	op("#clsShow").innerHTML=(real)?cls+" real record":cls+" fake record";
}

function next(){
	op('.qBox').style.display="none";
	op('.sendBox').style.display="unset";
	var txt=cls+' ';
	txt+=(real)?"real record":"fake record";
	op("#clsShow").innerHTML=txt;
}