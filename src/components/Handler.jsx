import React from 'react';

const Handler = () => {

  var body = document.body

  function backgroundColor(input) {
  /*
    CHECK IF PREFIX FOR EACH WEBSITE WAS TYPED
    THEN APPLY THE BACKGROUND COLOR
  */
    switch (true) {

    // REDDIT
    case /^r$/g.test(input):
    case /^r\/+/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))";
      body.style.color = "#d4d4d4";
      break;

    // TWITTER
    case /^tt\/+/g.test(input):
    case /^tt$/g.test(input):
    case /^tt:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))";
      body.style.color = "#d4d4d4";
      break;

    // YOUTUBE
    case /^y\/+/g.test(input):
    case /^y$/g.test(input):
    case /^y:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))";
      body.style.color = "#d4d4d4";
      break;

    // GITHUB
    case /^g\/+/g.test(input):
    case /^g$/g.test(input):
    case /^g:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59)";
      body.style.color = "#d4d4d4";
      break;

    // INSTAGRAM
    case /^i\/+/g.test(input):
    case /^i$/g.test(input):
      body.style.backgroundImage = "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29)";
      body.style.color = "#d4d4d4";
      break;

    // TWITCH
    case /^tw\/+/g.test(input):
    case /^tw$/g.test(input):
    case /^tw:/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101)";
      body.style.color = "#d4d4d4";
      break;

    // MONKEYTYPE
    case /^mk\/+/g.test(input):
    case /^mk$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#323437";
      body.style.color = "#d4d4d4";
      break;

    // SPOTIFY
    case /^s\/+/g.test(input):
    case /^s$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(29, 211, 94), rgb(30, 215, 96)";
      body.style.color = "#d4d4d4";
      break;

    // WHATSAPP
    case /^w\/+/g.test(input):
    case /^w$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126), rgb(7, 94, 84))";
      body.style.color = "#d4d4d4";
      break;

    // TRANSLATOR
    case /^tr\/+/g.test(input):
    case /^tr$/g.test(input):
    case /^tr:/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "rgb(26, 115, 232)";
      body.style.color = "#d4d4d4";
      break;

    // DISCORD
    case /^dc\/+/g.test(input):
    case /^dc$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#7289da";
      body.style.color = "#d4d4d4";
      break;

    // GMAIL
    case /^m\/+/g.test(input):
    case /^m$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#dd5145";
      body.style.color = "#d4d4d4";
      break;

    // NETFLIX
    case /^n\/+/g.test(input):
    case /^n$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #E50914, #CB020C)";
      body.style.color = "#d4d4d4";
      break;

    // HACKTHEBOX 
    case /^htb\/+/g.test(input):
    case /^htb$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #1A2332, #111927)";
      body.style.color = "#9FEF00";
      break;
    
    // TRYHACKME
    case /^thm\/+/g.test(input):
    case /^thm$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #1C2538, #161E2D)";
      body.style.color = "#d4d4d4";
      break;

		// PRIME VIDEO
		case /^pv\/+/g.test(input):
		case /^pv$/g.test(input):
      body.style.backgroundImage = "none";
			body.style.backgroundColor = "#1b242f";
      body.style.color = "#d4d4d4";
			break;

    // PINTEREST
		case /^p\/+/g.test(input):
		case /^p$/g.test(input):
      body.style.backgroundImage = "none";
			body.style.backgroundColor = "#c42027";
      body.style.color = "#d4d4d4";
			break;

    // LINKEDIN
		case /^l\/+/g.test(input):
		case /^l$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #0a66c2, #0d86ff)";
      body.style.color = "#d4d4d4";
			break;

    // ALIEXPRESS
		case /^a\/+/g.test(input):
		case /^a$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #E52D03, #FD9300)";
      body.style.color = "#d4d4d4";
			break;

    // TRELLO
		case /^t\/+/g.test(input):
		case /^t$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#0077bd";
      body.style.color = "#d4d4d4";
			break;

    // CHATGPT
		case /^c\/+/g.test(input):
		case /^c$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#343541";
      body.style.color = "#bdbdca";
			break;

    // OUTLOOK
		case /^o\/+/g.test(input):
		case /^o$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#0f6cbd";
      body.style.color = "#bdbdca";
			break;

    // NOTION
		case /^no\/+/g.test(input):
		case /^no$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#ffffff";
      body.style.color = "#37352f";
			break;

    // GDRIVE
    case /^d\/+/g.test(input):
    case /^d$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)";
      body.style.color = "#d4d4d4";
      break;

    // HABBO
		case /^h\/+/g.test(input):
		case /^h$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#f7c600";
      body.style.color = "#000000";
			break;

    // UNISANTOS
		case /^u\/+/g.test(input):
		case /^u$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#52659b";
      body.style.color = "#FFFFFF";
			break;

    // CANVA
		case /^cv\/+/g.test(input):
		case /^cv$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #01c3cc, #7d2ae7)";
      body.style.color = "#FFFFFF";
			break;

    // PONTOGO 
		case /^pg\/+/g.test(input):
		case /^pg$/g.test(input):
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#000099";
      body.style.color = "#FFFFFF";
			break;

    // ZOHO 
		case /^z\/+/g.test(input):
		case /^z$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #e42527, #089949, #226db4, #f9b21d)";
      body.style.color = "#FFFFFF";
			break;

    // ORANGE TESTING
		case /^ot\/+/g.test(input):
		case /^ot$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #ffa500, #dfd11e)";
      body.style.color = "#FFFFFF";
			break;

    // SHOPEE  
		case /^sh\/+/g.test(input):
		case /^sh$/g.test(input):
      body.style.backgroundImage = "linear-gradient(135deg, #f53d2d, #fe6432)";
      body.style.color = "#FFFFFF";
			break;


    default:
      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#191919";
      body.style.color = "#d4d4d4";
      break;
    } 
  }

  React.useEffect(() => {
    // Escape to clean the search input
    window.addEventListener('keydown', (event) => {
      console.log(event.code)
      switch (event.code) {
        case "Escape":
          Clock.style.display = "block";
          Search.value = "";
          Search.style.display = "none";
          Search.blur();
        case "ScrollLock":
        case "AltLeft":
        case "AltRight":
        case "ControlLeft":
        case "ControlRight":
        case "ShiftRight":
        case "ShiftLeft":
        case "CapsLock":
        case "Tab":
        case "OsLeft":
        case "OSRight":
        case "Enter":
        case "Backspace":
        case "Meta":
        case "MetaLeft":
          return;
        default: 
          Clock.style.display = "none";
          Search.style.display = "block";
          Search.focus();
      }
    })

    // Check if search input is empty to blur the search field
    Search.addEventListener('keyup', (event) => {
      if (Search.value == "") {
        Search.style.display = "none";
        Search.blur();
        Clock.style.display = "block";
      } else {
        backgroundColor(Search.value)
      }
    })
    
    Search.addEventListener('blur', () => {
      Search.style.display = "none";
      Clock.style.display = "block";
      Search.value = "";

      body.style.backgroundImage = "none";
      body.style.backgroundColor = "#191919";
      body.style.color = "#d4d4d4";
      Clock.style.color = "#d4d4d4";
    })

  });

      

}

export default Handler
