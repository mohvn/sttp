import React from 'react';

const Form = () => {

  function searchInput(input) {
    switch (true) {
    /* 
     * CHECK INPUT FOR URLs WITH HTTP OR HTTPS
     */
    case /(http|https)?\/\//g.test(input):
      window.open(`${input}`, "_self", false);
      break;
    /*
     * CHECK INPUT FOR IP ADDRESSES
     */
    case /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g.test(input):
    /*
     * CHECK URLs WITHOUT HTTP://WWW OR HTTPS://WWW
     */
    case /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g.test(input):
      window.open(`http://${input}`, "_self", false);
      break;

    /*
     * SHORTCUTS FOR WEBSITES THAT I USE OFTEN
     */

    // REDDIT
    case /^r$/g.test(input):
      window.open("https://reddit.com/", "_self", false);
      break;
    case /^r\/+/g.test(input):
      window.open(`https://reddit.com/${input}`, "_self", false);
      break;

    // TWITTER
    case /^tt$/g.test(input):
      window.open("https://twitter.com","_self", false);
      break;
    case /^tt\/+/g.test(input):
      let tt_input = input.replace(/^tt\/+/g, "");
      window.open(`https://twitter.com/${tt_input}`, "_self", false);
      break;

    // YOUTUBE
    case /^y$/g.test(input):
      window.open("https://youtube.com/", "_self", false);
      break;
    case /^y\/+/g.test(input):
      let y_input = input.replace(/^y\/+/g, "");
      window.open(`https://youtube.com/${y_input}`, "_self", false);
      break;

    // GITHUB
    case /^g$/g.test(input):
      window.open("https://github.com/", "_self", false);
      break;
    case /^g\/+/g.test(input):
      let g_input = input.replace(/^g\/+/g, "");
      window.open(`https://github.com/${g_input}`, "_self", false);
      break;

    // INSTAGRAM
    case /^i$/g.test(input):
      window.open("https://instagram.com/", "_self", false);
      break;
    case /^i\/+/g.test(input):
      let i_input = input.replace(/^i\/+/g, "");
      window.open(`https://instagram.com/${i_input}`, "_self", false);
      break;

    // TWITCH
    case /^tw$/g.test(input):
      window.open("https://twitch.com/", "_self", false);
      break;
    case /^tw\/+/g.test(input):
      let tw_input = input.replace(/^tw\/+/g, "");
      window.open(`https://twitch.com/${tw_input}`, "_self", false);
      break;

    // MONKEYTYPE
    case /^mk$/g.test(input):
      window.open("https://monkeytype.com", "_self", false);
      break;
    case /^mk\/+/g.test(input):
      let mk_input = input.replace(/^mk\/+/g, "");
      window.open(`https://monkeytype.com/${mk_input}`, "_self", false);
      break;

    // SPOTIFY
    case /^s$/g.test(input):
      window.open("https://open.spotify.com/", "_self", false);
      break;
    case /^s\/+/g.test(input):
      let s_input = input.replace(/^s\/+/g, "");
      window.open(`https://open.spotify.com/${s_input}`, "_self", false);
      break;

    // WHATSAPP
    case /^w$/g.test(input):
      window.open("https://web.whatsapp.com/", "_self", false);
      break;
    case /^w\/+/g.test(input):
      window.open("https://web.whatsapp.com/", "_self", false);
      break;

    // TRANSLATOR
    case /^tr$/g.test(input):
      window.open("https://translate.google.com/", "_self", false);
      break;
    case /^tr\/+/g.test(input):
      window.open("https://translate.google.com/", "_self", false);
      break;

    // DISCORD
    case /^dc$/g.test(input):
      window.open("https://discord.com/app", "_self", false);
      break;
    case /^dc\/+/g.test(input):
      window.open("https://discord.com/app", "_self", false);
      break;

    // GMAIL
    case /^m$/g.test(input):
      window.open("https://gmail.com", "_self", false);
      break;
    case /^m\/+/g.test(input):
      let m_input = input.replace(/^m\/+/g, "");
      window.open(`https://gmail.com`, "_self", false);
      break;

    // NETFLIX
    case /^n$/g.test(input):
      window.open("https://netflix.com", "_self", false);
      break;
    case /^n\/+/g.test(input):
      let n_input = input.replace(/^n\/+/g, "");
      window.open(`https://netflix.com`, "_self", false);
      break;

    // HACKTHEBOX
    case /^htb$/g.test(input):
      window.open("https://hackthebox.com/login", "_self", false);
      break;
    case /^htb\/+/g.test(input):
      let htb_input = input.replace(/^htb\/+/g, "");
      window.open(`https://hackthebox.com/${htb_input}`, "_self", false);
      break;

    // TRYHACKME
    case /^thm$/g.test(input):
      window.open("https://tryhackme.com/", "_self", false);
      break;

		// PRIMEVIDEO
		case /^pv$/g.test(input):
			window.open("https://primevideo.com/", "_self", false);
			break;

		case /^p$/g.test(input):
			window.open("https://pinterest.com/", "_self", false);
			break;

    case /^thm\/+/g.test(input):
      let thm_input = input.replace(/^htb\/+/g, "");
      window.open(`https://tryhackme.com/${htb_input}`, "_self", false);
      break;

    /*
     * SHORTCUT FOR SEARCHES IN SOME SITES
     * Prefix for search [:]
     */

    // SEARCH ON YOUTUBE
    case /^y:/g.test(input):
      let ys_input = input.replace(/^y:/g, "").replace(" ", "+");
      window.open(`https://www.youtube.com/results?search_query=${ys_input}`, "_self", false);
      break;

    // SEARCH ON GITHUB
    case /^g:/g.test(input):
      let gs_input = input.replace(/^g:/g, "").replace(" ", "+");
      window.open(`https://github.com/search?q=${gs_input}`, "_self", false);
      break

    // SEARCH ON TWITCH
    case /^tw:/g.test(input):
      let tws_input = input.replace(/^tw:/g, "");
      window.open(`https://www.twitch.tv/search?term=${tws_input}`, "_self", false);
      break

    // SEARCH ON TWITTER
    case /^tt:/g.test(input):
      let tts_input = input.replace(/^tt:/g, "");
      window.open(`https://twitter.com/search?q=${tts_input}&src=typed_query`, "_self", false);
      break
    
    // SEARCH ON TRANSLATOR
    case /^tr:/g.test(input):
      let trs_input = input.replace(/^tr:/g, "");
      window.open(`https://translate.google.com/#view=home&op=translate&sl=auto&tl=pt&text=${trs_input}`, "_self", false);
      break

    default:
      window.open(`https://google.com/search?q=${input}`, "_self", false);
      break;

    }

  }

  React.useEffect(() => {
    // Prevent Enter key to break line
    Search.addEventListener("keypress" , (event) => {
      switch (event.code) {
        case "Enter":
          event.preventDefault();
          
          searchInput(Search.value)
      }
    })
  });

  return (
   <textarea id="Search" spellCheck="false" wrap="off" > 
   </textarea>
  )

}

export default Form
