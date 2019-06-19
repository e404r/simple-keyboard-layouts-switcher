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
      "„ 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} ქ წ ე რ ტ ყ უ ი ო პ [ ] \\",
      "{lock} ა ს დ ფ გ ჰ ჯ კ ლ ; ' {enter}",
      "{shift} ზ ხ ც ვ ბ ნ მ , . / {shift} {en-us}",
      ".com @ {space}"
    ],

    shift: [
      "“ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} ქ ჭ ე ღ თ ყ უ ი ო პ { } | ~",
      '{lock} ა შ დ ფ გ ჰ ჟ კ ₾ : " {enter}',
      "{shift} ძ ხ ჩ ვ ბ ნ მ < > ? {shift} {en-us}",
      ".com @ {space}"
    ],

    default_en: [
      "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
      "{tab} q w e r t y u i o p [ ] \\",
      "{lock_en} a s d f g h j k l ; ' {enter}",
      "{shift_en} z x c v b n m , . / {shift_en} {ka-geo}",
      ".com @ {space}"
    ],
    shift_en: [
      "~ ! @ # $ % ^ & * ( ) _ + {bksp}",
      "{tab} Q W E R T Y U I O P { } |",
      '{lock_en} A S D F G H J K L : " {enter}',
      "{shift_en} Z X C V B N M < > ? {shift_en} {ka-geo}",
      ".com @ {space}"
    ]
    
  },
  

  display: {
    "{ka-geo}": "ქართული",
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
      buttons: "{ka-geo}"
    },
    {
      class: "hg-geo-shift",
      buttons: "ჭ ღ თ შ ჟ ₾ ძ ჩ"
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
  
 
   
  if (button === "{ka-geo}" || button === "{en-us}") handleLang();
  if (button === "{shift}" || button === "{lock}") handleShift();
  if (button === "{shift_en}" || button === "{lock_en}") handleShift_en();

  console.log("Button pressed", button);
}




function handleLang() {
  let currentLayout = keyboard.options.layoutName;
  let switchTogglelang = currentLayout === "default" ? "default_en" : "default";

  keyboard.setOptions({
    layoutName: switchTogglelang
  });
}




function handleShift() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle = currentLayout === "default" ? "shift" : "default";

  keyboard.setOptions({
    layoutName: shiftToggle
  });
}



function handleShift_en() {
  let currentLayout = keyboard.options.layoutName;
  let shiftToggle_en = currentLayout === "default_en" ? "shift_en" : "default_en";

  keyboard.setOptions({
    layoutName: shiftToggle_en
  });
}

