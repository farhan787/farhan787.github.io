var i = 1;
var j = -1;
var list = ['Software Engineer who ❤️ Open Source, FullStack Web Development and Web3'];
var a = list[0];
var len = list.length;
var num = 0;

function txt() {
  var strs = a.slice(0, i);

  $('#textdisp').html(strs + '|');

  if (i >= 0) {
    if (i != a.length) {
      i++;
    } else {
      //Don't delete yourself
      //i = -1;
    }
  } else {
    if (-1 * i != a.length) {
      //Don't delete yourself
      //i--;
    } else {
      //Don't delete yourself
      //i=1;
      //var flag = ret_index(a);
      //a = list[flag];
    }
  }
}

function ret_index(a) {
  var index = list.indexOf(a);
  if (index != len - 1) {
    return index + 1;
  } else {
    return 0;
  }
}

setInterval(txt, 80);
