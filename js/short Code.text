
copy(document.forms[0].action);

copy(fbzx=document.querySelector("input[name=fbzx]").value);

document.querySelectorAll("label").forEach(val=>{val.click()});

var str='"';

setTimeout(()=>{
	var questionsIn=document.querySelectorAll("div[jsname=o6bZLc] input");

	questionsIn.forEach(val=>{str+=val.name+'","'});

	copy(str);

	str='';

	var options=document.querySelectorAll(".docssharedWizToggleLabeledLabelWrapper");

	options.forEach(val=>{str+=`${val.innerText}","`});

	copy(str);
},500)
function copy(txt) {
	console.log(txt)
	let elem=document.createElement("textarea");
	document.body.insertAdjacentElement("beforeend",elem)
	elem.value=txt;
  elem.select();
  elem.setSelectionRange(0, 99999); 
  document.execCommand("copy");
  navigator.clipboard.writeText(elem.value);
  elem.remove();
  alert(txt)
}
