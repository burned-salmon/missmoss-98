function showThing(thingId) {
  var x = thingId;
  document.getElementById(x).style.display = "block";
}

function hideThing(thingId) {
  var x = thingId;
  document.getElementById(x).style.display = "none";
}

function minimizeThing(thingId) {
  var x = thingId;
  document.getElementById(x).style.display = "none";
}

function createCursor() {
  new springyEmojiCursor({
    emoji: "🐟"
  });
}
