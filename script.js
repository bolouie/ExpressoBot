// Attach event listeners
$(document).on("click", "#speak", recognize);
$(document).on("submit", "#user", send);

// Initialize speech recognition
const recognition = new webkitSpeechRecognition();

// Handle speech recognition results
recognition.onresult = function (e) {
  const transcript = e.results[0][0].transcript;
  $("#msg").val(transcript);
  recognition.stop();
  $("#speak").removeClass("activated");
  $("#user").submit();
};

// Start speech recognition
function recognize() {
  recognition.start();
  $(this).addClass("activated");
}

// Send user message to chatbot
function send(e) {
  e.preventDefault();

  const msg = $("#msg").val();
  if (msg === "") {
    return false;
  }

  appendToChat("YOU", msg);
  $("#msg").val("");

  const path = "bo.siu/eliza/chat.py";
  const encodedMsg = encodeURIComponent(msg);
  const serverUrl = getServerUrl();
  const url = `${serverUrl}/chat/?path=${path}&msg=${encodedMsg}`;

  $.ajax({
    url: url,
    success: (output) => appendToChat("BOT", output),
  });
}

// Append message to the chat
function appendToChat(sender, message) {
  $("#chat").append(`${sender}: ${message}\n`);
  $("#chat").scrollTop(9999999999);
}

// Get server URL from configuration
function getServerUrl() {
  // Replace this with the server URL that users need to configure
  return "https://your.server.com";
}
