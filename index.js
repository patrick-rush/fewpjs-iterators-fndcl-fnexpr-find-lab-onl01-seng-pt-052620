const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superbowls) {
  let win = superbowls.find( function(e) { return e.result === "W" })
  if (win) {
    return win.year
  }
}