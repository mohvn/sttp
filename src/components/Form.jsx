import React from 'react';

const Form = () => {

  // Function to check if the input matches any pattern above
  function searchInput(input) {
    
    const list_of_patterns =
      {
        check_if_url_with_http: /(http|https)?\/\//g,
        check_if_url_without_http: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
        check_if_ip: /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})/g,

        reddit_without_slash: /^r$/g,
        reddit_with_slash: /^r\/.*/g,

        twitter_without_slash: /^tt$/g, 
        twitter_with_slash: /^tt\/.*/g, 
        twitter_with_colon: /^tt:/g,

        youtube_without_slash: /^y$/g,
        youtube_with_slash: /^y\/.*/g,
        youtube_with_colon: /^y:/g,

        github_without_slash: /^g$/g,
        github_with_slash: /^g\/.*/g,
        github_with_colon: /^g:/g,

        instagram_without_slash: /^i$/g,
        instagram_with_slash: /^i\/.*/g,

        twitch_without_slash: /^tw$/g,
        twitch_with_slash: /^tw\/.*/g,
        twitch_with_colon: /^tw:/g,

        monkeytype_without_slash: /^mk$/g,
        monkeytype_with_slash: /^mk\/.*/g,

        spotify_without_slash: /^s$/g,
        spotify_with_slash: /^s\/.*/g,

        whatsapp_without_slash: /^w$/g,
        whatsapp_with_slash: /^w\/.*/g,

        translator_without_slash: /^tr$/g,
        translator_with_slash: /^tr\/.*/g,
        translator_with_colon: /^tr:/g,

        discord_without_slash: /^dc$/g,
        discord_with_slash: /^dc\/.*/g,

        gmail_without_slash: /^m$/g,
        gmail_with_slash: /^m\/.*/g,

        netflix_without_slash: /^n$/g,
        netflix_with_slash: /^n\/.*/g,

        hackthebox_without_slash: /^htb$/g,
        hackthebox_with_slash: /^htb\/.*/g,

        tryhackme_without_slash: /^thm$/g,
        tryhackme_with_slash: /^thm\/.*/g,

        primevideo_without_slash: /^pv$/g,
        primevideo_with_slash: /^pv\/.*/g,

        pinterest_without_slash: /^p$/g,
        pinterest_with_slash: /^p\/.*/g,

        chat_gpt_without_slash: /^c$/g,
        chat_gpt_with_slash: /^c\/.*/g,

        linkedin_without_slash: /^l$/g,
        linkedin_with_slash: /^l\/+/g,

        aliexpress_without_slash: /^a$/g,
        aliexpress_with_slash: /^a\/+/g,

        trello_without_slash: /^t$/g,
        trello_with_slash: /^t\/+/g,

        outlook_without_slash: /^o$/g,
        outlook_with_slash: /^o\/+/g,

        notion_without_slash: /^no$/g,
        notion_with_slash: /^no\/+/g,

        gdrive_without_slash: /^d$/g,
        gdrive_with_slash: /^d\/+/g,

        habbo_without_slash: /^h$/g,
        habbo_with_slash: /^h\/+/g,

        unisantos_without_slash: /^u$/g,
        unisantos_with_slash: /^u\/+/g,

        canva_without_slash: /^cv$/g,
        canva_with_slash: /^cv\/+/g,
      }

    const patterns = [
      {
        pattern: list_of_patterns.check_if_url_with_http,
        action: (match) => {
          window.open(match, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.check_if_url_without_http,
        action: (match) => {
          if (!match.startsWith("http://") && !match.startsWith("https://")) {
            match = `http://${match}`;
          }
          window.open(match, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.check_if_ip,
        action: (match) => {
          window.open(`http://${match}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.reddit_without_slash,
        action: () => {
          window.open("https://reddit.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.reddit_with_slash,
        action: (match) => {
          window.open(`https://reddit.com/${match}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitter_without_slash,
        action: () => {
          window.open("https://twitter.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitter_with_slash,
        action: () => {
          let tt_input = input.replace(/^tt\/+/g, "");
          window.open(`https://twitter.com/${tt_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitter_with_colon,
        action: () => {
          let tts_input = input.replace(/^tt:/g, "");
          window.open(`https://twitter.com/search?q=${tts_input}&src=typed_query`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_without_slash,
        action: () => {
          window.open("https://youtube.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_with_slash,
        action: () => {
          let y_input = input.replace(/^y\/+/g, "");
          window.open(`https://youtube.com/${y_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.youtube_with_colon,
        action: () => {
          let ys_input = input.replace(/^y:/g, "").replace(" ", "+");
          window.open(`https://youtube.com/results?search_query=${ys_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_without_slash,
        action: () => {
          window.open("https://github.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_with_slash,
        action: () => {
          let g_input = input.replace(/^g\/+/g, "");
          window.open(`https://github.com/${g_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.github_with_colon,
        action: () => {
          let gs_input = input.replace(/^g:/g, "").replace(" ", "+");
          window.open(`https://github.com/search?q=${gs_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.instagram_without_slash,
        action: () => {
          window.open("https://instagram.com", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.instagram_with_slash,
        action: () => {
          let i_input = input.replace(/^i\/+/g, "");
          window.open(`https://instagram.com/${i_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitch_without_slash,
        action: () => {
          window.open("https://twitch.tv/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitch_with_slash,
        action: () => {
          let tw_input = input.replace(/^tw\/+/g, "");
          window.open(`https://twitch.tv/${tw_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.twitch_with_colon,
        action: () => {
          let tws_input = input.replace(/^tw:/g, "");
          window.open(`https://twitch.tv/search?term=${tws_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.monkeytype_without_slash,
        action: () => {
          window.open("https://monkeytype.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.monkeytype_with_slash,
        action: () => {
          let mk_input = input.replace(/^mk\/+/g, "");
          window.open(`https://monkeytype.com/${mk_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.spotify_without_slash,
        action: () => {
          window.open("https://open.spotify.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.spotify_with_slash,
        action: () => {
          let s_input = input.replace(/^s\/+/g, "");
          window.open(`https://open.spotify.com/${s_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.whatsapp_without_slash,
        action: () => {
          window.open("https://web.whatsapp.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.whatsapp_with_slash,
        action: () => {
          window.open("https://web.whatsap.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.translator_without_slash,
        action: () => {
          window.open("https://translate.google.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.translator_with_slash,
        action: () => {
          window.open("https://translate.google.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.translator_with_colon,
        action: () => {
          let trs_input = input.replace(/^tr:/g, "");
          window.open(`https://translate.google.com/#view=home&op=translate&sl=auto&tl=pt&text=${trs_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.discord_without_slash,
        action: () => {
          window.open("https://discord.com/app", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.discord_with_slash,
        action: () => {
          window.open("https://discord.com/app", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gmail_without_slash,
        action: () => {
          window.open("https://gmail.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gmail_with_slash,
        action: () => {
          window.open("https://gmail.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.netflix_without_slash,
        action: () => {
          window.open("https://netflix.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.netflix_with_slash,
        action: () => {
          window.open("https://netflix.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.hackthebox_without_slash,
        action: () => {
          window.open("https://app.hackthebox.com/login/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.hackthebox_with_slash,
        action: () => {
          window.open("https://app.hackthebox.com/login/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.tryhackme_without_slash,
        action: () => {
          window.open("https://tryhackme.com/login/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.tryhackme_with_slash,
        action: () => {
          window.open("https://tryhackme.com/login/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.primevideo_without_slash,
        action: () => {
          window.open("https://primevideo.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.primevideo_with_slash,
        action: () => {
          window.open("https://primevideo.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.pinterest_without_slash,
        action: () => {
          window.open("https://pinterest.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.pinterest_with_slash,
        action: () => {
          window.open("https://pinterest.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.chat_gpt_without_slash,
        action: () => {
          window.open("https://chat.openai.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.chat_gpt_with_slash,
        action: () => {
          window.open("https://chat.openai.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.linkedin_without_slash,
        action: () => {
          window.open("https://linkedin.com/", "_self", false);
        }
      },
      {
        pattern: list_of_patterns.linkedin_with_slash,
        action: () => {
          let l_input = input.replace(/^l\/+/g, "");
          window.open(`https://www.linkedin.com/in/${l_input}`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.aliexpress_without_slash,
        action: () => {
          window.open(`https://www.aliexpress.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.aliexpress_with_slash,
        action: () => {
          window.open(`https://www.aliexpress.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.trello_without_slash,
        action: () => {
          window.open(`https://trello.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.trello_with_slash,
        action: () => {
          window.open(`https://trello.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.outlook_without_slash,
        action: () => {
          window.open(`https://outlook.live.com/mail/0/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.outlook_with_slash,
        action: () => {
          window.open(`https://outlook.live.com/mail/0/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.notion_without_slash,
        action: () => {
          window.open(`https://www.notion.so/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.notion_with_slash,
        action: () => {
          window.open(`https://www.notion.so/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gdrive_without_slash,
        action: () => {
          window.open(`https://drive.google.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.gdrive_with_slash,
        action: () => {
          window.open(`https://drive.google.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.habbo_without_slash,
        action: () => {
          window.open(`https://habbo.com.br/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.habbo_with_slash,
        action: () => {
          window.open(`https://habbo.com.br/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.unisantos_without_slash,
        action: () => {
          window.open(`https://ww2.unisantos.br/portal/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.unisantos_with_slash,
        action: () => {
          window.open(`https://ww2.unisantos.br/portal/`, "_self", false);
        }
      },

      {
        pattern: list_of_patterns.canva_without_slash,
        action: () => {
          window.open(`https://www.canva.com/`, "_self", false);
        }
      },
      {
        pattern: list_of_patterns.canva_with_slash,
        action: () => {
          window.open(`https://www.canva.com/`, "_self", false);
        }
      },

    ]

    for (const { pattern, action } of patterns) {
      if (pattern.test(input)) {
        const match = input.match(pattern)[0];
        action(match);
        return;
      }
    }

    window.open(`https://google.com/search?q=${input}`, "_self", false);
  }

  React.useEffect(() => {
    const searchInputHandler = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        searchInput(Search.value);
      }
    };
    Search.addEventListener("keypress", searchInputHandler);

    return () => {
      Search.removeEventListener("keypress", searchInputHandler);
    };
  }, []);

  return (
   <textarea id="Search" spellCheck="false" wrap="off" > 
   </textarea>
  )

}

export default Form
