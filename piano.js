function playNote(note){
    console.log(note);
    var audio = new Audio();
    audio.src = "pianoNotes/" + note + ".mp3";
    audio.play();   
}