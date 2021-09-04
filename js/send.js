var ibox=op(".formBox"),
inter,num=0,formData,studentData,gender="Male",properStudent,
totalStudent,sentBox=op("#sent"),recordSent=0;


function start(){
	formData=data[cls].form;
	studentData=data[cls].student;
	totalStudent=studentData.Male.length+studentData.Female.length;


	inter=setInterval(()=>{
		var form=`<form action="${formData.action}">${formData.defaultTags()} ${returnQuestion()} <button>Submit</button></form>`;

    var frame=document.createElement('iframe');
    ibox.insertAdjacentElement("afterbegin",frame)

    frame.contentWindow.document.querySelector("body").innerHTML=form;
    frame.contentWindow.document.querySelector("button").click();
    num++;
    recordSent++;
    if(real && recordSent>=totalStudent){stop();}
    
    sentBox.innerHTML=real?recordSent+' out of '+totalStudent+' students':recordSent;
    deleteIframe();
	},2000)
}
function deleteIframe(){
	if(ibox.childElementCount>5){
		ibox.lastElementChild.remove();
	}
}

function returnQuestion(){
	let str="";
	var questionNum=1;
	for(question of formData.questionList){
		str+=`<input name="${question}" value="${getOption(questionNum)}">`
		questionNum++;
	}
	return str;
}
function getOption(questionNum){
	var options=formData.options;
	return options[(questionNum-1)*4+Math.floor(Math.random()*4)].trim();
}

function getName(){
	if(real){
		if(num>= totalStudent){stop();}
		if(num>=studentData.Male.length){gender="Female";num=0}
		log(gender)
		properStudent= studentData[gender][num];
		return properStudent[0];
	}else{
		if(!real){gender="Female"}
		return fakeName[Math.floor(Math.random()*fakeName.length)];
	}
}
function getTel(){
	if(real){
		return properStudent[1];
	}else{

		var tempAry=[12,23,27,75,56,62,21,90,30],stNum="62";
		for(var a=0; a< 4; a++){
			stNum+=tempAry[Math.floor(Math.random()*tempAry.length)];
		}
		return stNum
	}
}

function stop(){
	log('stoped')
	clearInterval(inter)
}