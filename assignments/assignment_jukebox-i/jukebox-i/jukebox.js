
var parseNote = function(string) {
  var parts = string.split('*');
  var pitch = parts[0];
  var beats;

  if (typeof parts[1] === "undefined") {
    beats = 1;
  } else {
    beats = parseInt(parts[1]);
  }

  return {
    pitch: pitch,
    beats: beats
  };
};


var parseSong = function(string) {
  var noteStrings = string.split(/\s+/);
  var notes = [];

  for (var i=0; i < noteStrings.length; i++) {
    notes.push( parseNote(noteStrings[i]) );
  }
  return notes;
};
