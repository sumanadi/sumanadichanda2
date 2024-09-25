function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6dg6S4r5Qh1":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musikku.mp3";
audio.load();
audio.play();
}

