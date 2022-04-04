function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Fcilr4jzCg":
        Script1();
        break;
      case "6FYqGNyIzCA":
        Script2();
        break;
  }
}

function Script1()
{
  var myAudioDiv = document.getElementById("audioDiv");

if (myAudioDiv == null || myAudioDiv == undefined) {
 var myDiv = document.createElement('audio');
 myDiv.id = 'audioDiv';
 myDiv.src = "one.mp3"
 document.getElementsByTagName('body')[0].appendChild(myDiv);
 myDiv.loop = true;
 myDiv.autoplay = true;
 myDiv.load();
 myDiv.play();
 myDiv.style.visibility = "hidden";
}
}

function Script2()
{
  var myAudioDiv = document.getElementById("audioDiv");

if (myAudioDiv == null || myAudioDiv == undefined) {
 var myDiv = document.createElement('audio');
 myDiv.id = 'audioDiv';
 myDiv.src = "one.mp3"
 document.getElementsByTagName('body')[0].appendChild(myDiv);
 myDiv.loop = true;
 myDiv.autoplay = true;
 myDiv.load();
 myDiv.play();
 myDiv.style.visibility = "hidden";
}
}

