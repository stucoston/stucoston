// stu toggle functions
// ========================================================
var stu = {};
stu.styleElement = function (element, prop, val) {
  element.style.setProperty(prop, val);
};
stu.toggleShow = function (sel) {
  var i, x = stu.getElements(sel), xl = x.length;
  for (i = 0; i < xl; i++) {    
    if (x[i].style.display == "none") {
      stu.styleElement(x[i], "display", "block");
    } else {
      stu.styleElement(x[i], "display", "none");
    }
  }
};
stu.togglePaddingProj = function (sel) {
  var i, x = stu.getElements(sel), l = x.length;
  for (i = 0; i < l; i++) {    
    if (x[i].style.padding == "0px") {
      stu.styleElement(x[i], "padding", "48px 24px 24px");
    } else {
      stu.styleElement(x[i], "padding", "0px");
    }
  }
};
stu.addClass = function (sel, name) {
  stu.addClassElements(stu.getElements(sel), name);
};
stu.addClassElements = function (elements, name) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {
    stu.addClassElement(elements[i], name);
  }
};
stu.addClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
};
stu.removeClass = function (sel, name) {
  stu.removeClassElements(stu.getElements(sel), name);
};
stu.removeClassElements = function (elements, name) {
  var i, l = elements.length, arr1, arr2, j;
  for (i = 0; i < l; i++) {
    stu.removeClassElement(elements[i], name);
  }
};
stu.removeClassElement = function (element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
};
stu.toggleClass = function (sel, c1, c2) {
  stu.toggleClassElements(stu.getElements(sel), c1, c2);
};
stu.toggleClassElements = function (elements, c1, c2) {
  var i, l = elements.length;
  for (i = 0; i < l; i++) {    
    stu.toggleClassElement(elements[i], c1, c2);
  }
};
stu.toggleClassElement = function (element, c1, c2) {
  var t1, t2, t1Arr, t2Arr, j, arr, allPresent;
  t1 = (c1 || "");
  t2 = (c2 || "");
  t1Arr = t1.split(" ");
  t2Arr = t2.split(" ");
  arr = element.className.split(" ");
  if (t2Arr.length == 0) {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      stu.removeClassElement(element, t1);
    } else {
      stu.addClassElement(element, t1);
    }
  } else {
    allPresent = true;
    for (j = 0; j < t1Arr.length; j++) {
      if (arr.indexOf(t1Arr[j]) == -1) {allPresent = false;}
    }
    if (allPresent) {
      stu.removeClassElement(element, t1);
      stu.addClassElement(element, t2);          
    } else {
      stu.removeClassElement(element, t2);        
      stu.addClassElement(element, t1);
    }
  }
};
stu.getElements = function (id) {
  if (typeof id == "object") {
    return [id];
  } else {
    return document.querySelectorAll(id);
  }
};


jQuery(function($){
  var windowWidth = $(window).width();
  var windowHeight = $(window).height();
  $(window).resize(function() {
    if(windowWidth != $(window).width() || windowHeight != $(window).height()) {
      location.reload();
      return;
    }
  });
});
