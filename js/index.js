window.onload = function() {
    var teacher = document.getElementById('teacher');
    var ulObj=document.getElementById("uu");
    teacher.onclick = function() {
    	console.log(ulObj.className);
    	ulObj.className=ulObj.className!='bl'?'bl':'no'
    }

}