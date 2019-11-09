// Adapted from http://web.mit.edu/6.813/www/sp18/assignments/as1-implementation/logging.js
//
// A simple Google-spreadsheet-based event logging framework.
//
// Add logging.js to your Web App to log standard input and custom events.
//
// This is currently set up to log every mousedown and keydown
// event, as well as any events that might be triggered within
// the app by triggering the 'log' event anywhere in the doc
// as follows:
//
// document.dispatchEvent(new CustomEvent('log', { detail: {
//   eventName: 'myevent',
//   info: {key1: val1, key2: val2}
// }}));

var ENABLE_NETWORK_LOGGING = true; // Controls network logging.
var ENABLE_CONSOLE_LOGGING = true; // Controls console logging.
var LOG_VERSION = '0.1';           // Labels every entry with version: "0.1".

// These event types are intercepted for logging before jQuery handlers.
var EVENT_TYPES_TO_LOG = {
  mousedown: false
};

// These event properties are copied to the log if present.
var EVENT_PROPERTIES_TO_LOG = {
  which: true,
  pageX: true,
  pageY: true
};

// This function is called to record some global state on each event.
var GLOBAL_STATE_TO_LOG = function() {
  return {
  };
};

var uid = "";
var clickTotal = 0;
var startTime = 0;
var autopass = false;
var attemptsLeft = 3;
var score = 0;
var taskCode = "";

var loggingjs = (function() { // Immediately-Invoked Function Expression (IIFE); ref: http://benalman.com/news/2010/11/immediately-invoked-function-expression/

// A persistent unique id for the user.
    startTime = (new Date).getTime();
    var urlParams = new URLSearchParams(window.location.search);
    var carryOverScore = urlParams.get('score');
    //console.log("carry over score is " + carryOverScore);
    if ((carryOverScore == null) || (carryOverScore == "0")) {
        score = 0;
    } else {
        score = parseInt(carryOverScore);
    }
    //console.log(score);
    taskCode = urlParams.get('task');
    uid = urlParams.get('id');

// Hooks up all the event listeners.
function hookEventsToLog() {
  // Set up low-level event capturing.  This intercepts all
  // native events before they bubble, so we log the state
  // *before* normal event processing.
  for (var event_type in EVENT_TYPES_TO_LOG) {
    document.addEventListener(event_type, logEvent, true);
  }
}

// Returns a CSS selector that is descriptive of
// the element, for example, "td.left div" for
// a class-less div within a td of class "left".
function elementDesc(elt) {
  if (elt == document) {
    return 'document';
  } else if (elt == window) {
    return 'window';
  }
  function descArray(elt) {
    var desc = [elt.tagName.toLowerCase()];
    if (elt.id) {
      desc.push('#' + elt.id);
    }
    for (var j = 0; j < elt.classList.length; j++) {
      desc.push('.' + elt.classList[j]);
    }
    return desc;
  }
  var desc = [];
  while (elt && desc.length <= 1) {
    var desc2 = descArray(elt);
    if (desc.length == 0) {
      desc = desc2;
    } else if (desc2.length > 1) {
      desc2.push(' ', desc[0]);
      desc = desc2;
    }
    elt = elt.parentElement;
  }
  return desc.join('');
}

// Parse user agent string by looking for recognized substring.
function findFirstString(str, choices) {
  for (var j = 0; j < choices.length; j++) {
    if (str.indexOf(choices[j]) >= 0) {
      return choices[j];
    }
  }
  return '?';
}

// Generates or remembers a somewhat-unique ID with distilled user-agent info.
function getUniqueId() {
  if (!('uid' in localStorage)) {
    var browser = findFirstString(navigator.userAgent, [
      'Seamonkey', 'Firefox', 'Chromium', 'Chrome', 'Safari', 'OPR', 'Opera',
      'Edge', 'MSIE', 'Blink', 'Webkit', 'Gecko', 'Trident', 'Mozilla']);
    var os = findFirstString(navigator.userAgent, [
      'Android', 'iOS', 'Symbian', 'Blackberry', 'Windows Phone', 'Windows',
      'OS X', 'Linux', 'iOS', 'CrOS']).replace(/ /g, '_');
    var unique = ('' + Math.random()).substr(2);
    localStorage['uid'] = os + '-' + browser + '-' + unique;
  }
  return localStorage['uid'];
}

// Log the given event.
function logEvent(event, customName, customInfo) {
	
	console.log('event', event, 'customName', customName, 'customInfo', customInfo);
    clickTotal++;
  var time = (new Date).getTime();
  var eventName = customName || event.type;
  // By default, monitor some global state on every event.
  var infoObj = GLOBAL_STATE_TO_LOG();
  // And monitor a few interesting fields from the event, if present.
  for (var key in EVENT_PROPERTIES_TO_LOG) {
	if (event && key in event) {
      infoObj[key] = event[key];
    }
  }
  // Let a custom event add fields to the info.
  if (customInfo) {
    infoObj = Object.assign(infoObj, customInfo);
  }
  var info = JSON.stringify(infoObj);
  var target = document;
  if (event) {target = elementDesc(event.target);}
    //var state = location.hash;
    var state = clickTotal;

  if (ENABLE_CONSOLE_LOGGING) {
    console.log(uid, time, eventName, target, info, state, LOG_VERSION);
  }
  if (ENABLE_NETWORK_LOGGING) {
    //sendNetworkLog(uid, time, eventName, target, info, state, LOG_VERSION);
  }
}

// OK, go.
if (ENABLE_NETWORK_LOGGING) {
  hookEventsToLog();
}

// module pattern to allow some key functions to be "public"
return {
	logEvent
};

}());


/////////////////////////////////////////////////////////////////////////////
// CHANGE ME:
// ** Replace the function below by substituting your own google form. **
/////////////////////////////////////////////////////////////////////////////
//
// 1. Create a Google form called "Network Log" at forms.google.com.
// 2. Set it up to have several "short answer" questions; here we assume
//    seven questions: uid, time, eventName, target, info, state, version.
// 3. Run googlesender.py to make a javascript
//    function that submits records directly to the form.
// 4. Put that function in here, and replace the current sendNetworkLog
//    so that your version is called to log events to your form.
//
// For example, the following code was written as follows:
// python googlesender.py https://docs.google.com/forms/d/e/1.../viewform
//
// This preocess changes the ids below to direct your data into your own
// form and spreadsheet. The formid must be customized, and also the form
// field names such as "entry.1291686978" must be matched to your form.
// (The numerical field names for a Google form can be found by inspecting
// the form input fields.) This can be done manually, but since this is an
// error-prone process, it can be easier to use googlesender.py.
//
/////////////////////////////////////////////////////////////////////////////

// submits to the google form at this URL:
// docs.google.com/forms/d/e/1FAIpQLScO9eSAfZ-pTZsUihSfBH-hMTqwCW17TNKc5esCMG6gfFITYg/viewform?usp=sf_link



function sendNetworkLog(
  uid,
  timeTaken,
  totalClicks,
  numberOfAttempts,
  scoreForThisTask,
  taskCode,
  totalScoreForThisTrialSoFar,
  answerFromUser) {
var formid = "e/1FAIpQLSeMTHpXueC-10DI5mPSUDmJoVNQqAz4mUOTgS_PPr9Dgfmzag";
var data = {
  "entry.1946410942": uid,
  "entry.74613006": timeTaken,
  "entry.678269898": totalClicks,
  "entry.429085135": numberOfAttempts,
  "entry.873705970": scoreForThisTask,
  "entry.230343975": taskCode,
  "entry.1699343754": totalScoreForThisTrialSoFar,
  "entry.778885727": answerFromUser
};
var params = [];
for (key in data) {
  params.push(key + "=" + encodeURIComponent(data[key]));
}

// Submit the form using an image to avoid CORS warnings; warning may still happen, but log will be sent. Go check result in Google Form
(new Image).src = "https://docs.google.com/forms/d/" + formid +
   "/formResponse?" + params.join("&");
}


function reviewAnswers(taskNum) {

    if (taskNum == 1) {
        var x = $('#Room-options').val();
        var y = "Room BM10";
        var bool = false;
        for (var i = 0; i < x.length; i++) {
            if (x[i] == y) {
                bool = true;
            }
        }
        var bool2 = $('#start-time-select').find('option:selected').text() == "12:00";
        var bool3 = $('#end-time-select').find('option:selected').text() == "15:00";
        var startDate = new Date($('#startDate').val().replace(/-/g, '\/'));
        var day = startDate.getDate();
        var month = startDate.getMonth() + 1;
        var year = startDate.getFullYear();
        var answer = month + "/" + day + "/" + year;
        var bool4 = (answer == "2/24/2020");

        attemptsLeft--;
        if (bool && bool2 && bool3 && bool4) {
            score = score + 1;
            

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 1;

            clickTotal = 0;

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score, "");

            alert("You have successfully cleared this task! Please proceed to the next Task.");
            window.location.href = "task2pre.html?score=" + score + "&task=5B" + "&id=" + uid;
            return;
        }
    }
    if (taskNum == 2) {
        var x = $('#Room-options').val();
        var y = "Room AO14";
        var bool = false;
        for (var i = 0; i < x.length; i++) {
            if (x[i] == y) {
                bool = true;
            }
        }
        var bool2 = $('#start-time-select').find('option:selected').text() == "20:00";
        var bool3 = $('#end-time-select').find('option:selected').text() == "21:00";
        var startDate = new Date($('#startDate').val().replace(/-/g, '\/'));
        var day = startDate.getDate();
        var month = startDate.getMonth() + 1;
        var year = startDate.getFullYear();
        var answer = month + "/" + day + "/" + year;
        var bool4 = (answer == "11/29/2019");
         
        attemptsLeft--;
        if (bool && bool2 && bool3 && bool4) {
            score = score + 1;

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 1;

            clickTotal = 0;

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score,'');
            alert("You have successfully cleared this task! Please proceed to the next Task.");
            window.location.href = "task3pre.html?score=" + score + "&task=5C" + "&id=" + uid;
            return;
        }
    }
    if (taskNum == 3) {
        var x = $('#Room-options').val();
        var y = "Room BS13";
        var bool = false;
        for (var i = 0; i < x.length; i++) {
            if (x[i] == y) {
                bool = true;
            }
        }
        var bool2 = $('#start-time-select').find('option:selected').text() == "10:00";
        var bool3 = $('#end-time-select').find('option:selected').text() == "13:00";
        var startDate = new Date($('#startDate').val().replace(/-/g, '\/'));
        var day = startDate.getDate();
        var month = startDate.getMonth() + 1;
        var year = startDate.getFullYear();
        var answer = month + "/" + day + "/" + year;
        var bool4 = (answer == "12/31/2019");

        //console.log(bool)
        //console.log(bool2)
        //console.log(bool3)
        //console.log(answer)
        //console.log(bool4)

        attemptsLeft--;
        if (bool && bool2 && bool3 && bool4) {
            score = score + 1;

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 1;

            clickTotal = 0;

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score,'');
            alert("You have successfully cleared this task! Please proceed to the next page to receive a code.");
            window.location.href = "end.html?score=" + score + "&id=" + uid;
            return;
        }
    }
    if (autopass) {
        alert("You have made some wrong selections. You have ran out of attempts. Please move on to the next task.");
        var startDate = new Date($('#startDate').val().replace(/-/g, '\/'));
        var day = startDate.getDate();
        var month = startDate.getMonth() + 1;
        var year = startDate.getFullYear();
        var answer = month + "/" + day + "/" + year;
        var starttime = $('#start-time-select').find('option:selected').text();
        var endtime = $('#end-time-select').find('option:selected').text();
        var ansString = answer + " " + starttime + " "+ endtime + " " + $('#Room-options').val();

        if (taskNum == 1) {
            window.location.href = "task2pre.html?score=" + score + "&task=5B" + "&id=" + uid;

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 0;

            clickTotal = 0;
            $("#type-dropdown-list").each(function(){
              if ($(this).is(":checked")) {
                ansString = ansString + $(this).prop('id') + " ";
              }
            });

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score, ansString);
            return;
        }

        if (taskNum == 2) {
            window.location.href = "task3pre.html?score=" + score + "&task=5C" + "&id=" + uid;

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 0;

            clickTotal = 0;

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score, ansString);
            return;
        }

        if (taskNum == 3) {
            window.location.href = "end.html?score=" + score + "&id=" + uid;

            var timeTaken = (new Date).getTime() - startTime;
            var totalClicks = clickTotal;
            var attempts = 3 - attemptsLeft;
            //var eventName = "search";
            var correctness = 0;

            clickTotal = 0;

            sendNetworkLog(uid, timeTaken, totalClicks, attempts, correctness, taskCode, score, ansString);
            return;
        }
    }

      // todo: add in logic for answer checking. for now assume wrong
    alert("You have made some wrong selections. Please try again. You have " + attemptsLeft + " attempts left");
      window.location.href = "javascript: void(0)";
        if (attemptsLeft == 1) {
            autopass = true;
        }
 
}

function goToTask1() {
    window.location.href = "index.html?score=" + score + "&task=5A" + "&id=" + uid;
}

function goToTask2() {
    window.location.href = "index2.html?score=" + score + "&task=5B" + "&id=" + uid;
}

function goToTask3() {
    window.location.href = "index3.html?score=" + score + "&task=5C" + "&id=" + uid;
}