/*!
 * 
 *   simple-keyboard 
 *   https://github.com/hodgef/simple-keyboard
 * 
 *   Copyright (c) Francisco Hodge (https://github.com/hodgef)
 *  
 *   simple-kayboard-layouts-switcher-GEO-ENG-RUS
 * 
 *   https://github.com/e404r/simple-kayboard-layouts-switcher-GEO-ENG-RUS
 * 
 *   Copyright (c) E404R (https://github.com/e404r/)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */






let Keyboard = window.SimpleKeyboard.default;

///The multi-language keyboard layout kit for simple-keyboard
///https://github.com/hodgef/simple-keyboard-layouts

let keyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button),
  layout: {

    default: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{lock_en} a s d f g h j k l ; ' {enter}",
      "{shift_en} z x c v b n m , . / {shift_en} {RU}",
      ".com @ {space}"
    ],
    shift: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P { } |",
      '{lock_en} A S D F G H J K L : " {enter}',
      "{shift_en} Z X C V B N M < > ? {shift_en} {RU}",
      ".com @ {space}"
    ],
    default_ru: [
      "\u0451 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} \u0439 \u0446 \u0443 \u043a \u0435 \u043d \u0433 \u0448 \u0449 \u0437 \u0445 \u044a \\",
      "{lock} \u0444 \u044b \u0432 \u0430 \u043f \u0440 \u043e \u043b \u0434 \u0436 \u044d {enter}",
      "{shift} \\ \u044f \u0447 \u0441 \u043c \u0438 \u0442 \u044c \u0431 \u044e / {shift} {en-us}",
      ".com @ {space}"
    ],
    shift_ru: [
      '\u0401 ! " \u2116 ; % : ? * ( ) _ + {bksp}',
      "{tab} \u0419 \u0426 \u0423 \u041a \u0415 \u041d \u0413 \u0428 \u0429 \u0417 \u0425 \u042a /",
      "{lock} \u0424 \u042b \u0412 \u0410 \u041f \u0420 \u041e \u041b \u0414 \u0416 \u042d {enter}",
      "{shift} / \u042f \u0427 \u0421 \u041c \u0418 \u0422 \u042c \u0411 \u042e / {shift} {en-us}",
      ".com @ {space}"
    ]
    
  },
  

  display: {
    "{RU}": "Русский",
    "{en-us}": "ENGLISH",
    "{tab}":"Tab",
    "{lock}":"Caps",
    "{shift}":"Shift",
    "{lock_en}":"Caps",
    "{shift_en}":"Shift",
    "{enter}":"Enter",
    "{bksp}":"Backspace",
    "{space}":"Space"
  
  },

  buttonTheme: [
    {
      class: "hg-lang",
      buttons: "{en-us}"
    },
    {
      class: "hg-lang",
      buttons: "{RU}"
    }
    
  ]



});


document.querySelector(".input").addEventListener("input", event => {
  keyboard.setInput(event.target.value);
});

console.log(keyboard);

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
}

function onKeyPress(button) {
  
 
   
  if (button === "{RU}" || button === "{en-us}") handleLang();
  if (button === "{shift}" || button === "{lock}") handleShift();
  if (button === "{shift_en}" || button === "{lock_en}") handleShift_en();

  console.log("Button pressed", button);
}




function handleLang() {
  let currentLayout = keyboard.options.layoutName;
  let switchTogglelang = currentLayout === "default" ? "default_ru" : "default";

  keyboard.setOptions({
    layoutName: switchTogglelang
  });
}




function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default_ru" ? "shift_ru" : "default_ru";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}



function handleShift_en() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle_en = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle_en
  });
}