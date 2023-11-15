function addMessage(message, me = true) {
    const template = `<div class="message">
    <div class="${me ? "myMessage" : "fromThem"}"
    data-date="${new Date().toLocaleTimeString()}">
      <p>${message}</p>
      <date> ${new Date().toLocaleTimeString()} </date>
    </div>
  </div>`;

    document.querySelector(".chat .messages").innerHTML += template;
}

function typing() {
    document.querySelector(".typing").classList.toggle("active");
    setTimeout(() => {
        document.querySelector(".typing").classList.toggle("active");
    }, 1000);
}
typing();

addMessage("Hi!", false);
addMessage("In this exercise you will work with events in JS", false);
addMessage("Let's go!");

/**
 * Listen to the submit of the form and add a new message
 * with addMessage()
 */

// Code here

/**
 * Listen to the click on each message and create an alert
 * https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
 */

// Code here

/**
 * Listen to every Keydown (from the keyboard) in the input and call
 * the function typing()
 */

// Code here
