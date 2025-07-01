import React, { useEffect } from 'react';

const SearchHandler = () => {
  // Configuration of websites with standards, URLs and styles
  const sites = {
    r: {
      patterns: [/^r$/, /^r\/.*/],
      url: (input) => input === 'r' ? 'https://reddit.com/' : `https://reddit.com/r/${input.slice(2)}`,
      style: { backgroundImage: "linear-gradient(135deg, rgb(255, 132, 86), rgb(255, 69, 0))", color: "#d4d4d4" }
    },
    tt: {
      patterns: [/^tt$/, /^tt\/.*/, /^tt:/],
      url: (input) => {
        if (input === 'tt') return 'https://twitter.com/';
        if (input.startsWith('tt:')) return `https://twitter.com/search?q=${encodeURIComponent(input.slice(3))}`;
        return `https://twitter.com/${input.slice(3)}`;
      },
      style: { backgroundImage: "linear-gradient(135deg, rgb(29, 161, 242), rgb(25, 96, 143))", color: "#d4d4d4" }
    },
    y: {
      patterns: [/^y$/, /^y\/.*/, /^y:/],
      url: (input) => {
        if (input === 'y') return 'https://youtube.com/';
        if (input.startsWith('y:')) return `https://youtube.com/results?search_query=${encodeURIComponent(input.slice(2))}`;
        return `https://youtube.com/${input.slice(2)}`;
      },
      style: { backgroundImage: "linear-gradient(135deg, rgb(205, 32, 31), rgb(205, 76, 31))", color: "#d4d4d4" }
    },
    g: {
      patterns: [/^g$/, /^g\/.*/, /^g:/],
      url: (input) => {
        if (input === 'g') return 'https://github.com/';
        if (input.startsWith('g:')) return `https://github.com/search?q=${encodeURIComponent(input.slice(2))}`;
        return `https://github.com/${input.slice(2)}`;
      },
      style: { backgroundImage: "linear-gradient(135deg, rgb(28, 33, 40), rgb(45, 51, 59))", color: "#d4d4d4" }
    },
    i: {
      patterns: [/^i$/, /^i\/.*/],
      url: (input) => input === 'i' ? 'https://instagram.com/' : `https://instagram.com/${input.slice(2)}`,
      style: { backgroundImage: "linear-gradient(45deg, rgb(64, 93, 230), rgb(88, 81, 219), rgb(131, 58, 180), rgb(193, 53, 132), rgb(225, 48, 108), rgb(253, 29, 29))", color: "#d4d4d4" }
    },
    tw: {
      patterns: [/^tw$/, /^tw\/.*/, /^tw:/],

      url: (input) => {
        if (input === 'tw') return 'https://twitch.tv/';
        if (input.startsWith('tw:')) return `https://twitch.tv/search?term=${encodeURIComponent(input.slice(3))}`;
        return `https://twitch.tv/${input.slice(3)}`;
      },
      style: { backgroundImage: "linear-gradient(135deg, rgb(169, 112, 255), rgb(67, 44, 101))", color: "#d4d4d4" }
    },
    mk: {
      patterns: [/^mk$/, /^mk\/.*/],
      url: () => 'https://monkeytype.com/',
      style: { backgroundImage: "none", backgroundColor: "#323437", color: "#d4d4d4" }
    },
    s: {
      patterns: [/^s$/, /^s\/.*/],
      url: () => 'https://spotify.com/',
      style: { backgroundImage: "linear-gradient(135deg, rgb(29, 211, 94), rgb(30, 215, 96))", color: "#d4d4d4" }
    },
    w: {
      patterns: [/^w$/, /^w\/.*/],
      url: () => 'https://web.whatsapp.com/',
      style: { backgroundImage: "linear-gradient(135deg, rgb(37, 211, 102), rgb(18, 140, 126), rgb(7, 94, 84))", color: "#d4d4d4" }
    },
    tr: {
      patterns: [/^tr$/, /^tr\/.*/, /^tr:/],

      url: (input) => {
        if (input === 'tr') return 'https://translate.google.com/';
        if (input.startsWith('tr:')) return `https://translate.google.com/?text=${encodeURIComponent(input.slice(3))}`;
        return `https://translate.google.com/${input.slice(3)}`;
      },
      style: { backgroundImage: "none", backgroundColor: "rgb(26, 115, 232)", color: "#d4d4d4" }
    },
    dc: {
      patterns: [/^dc$/, /^dc\/.*/],
      url: () => 'https://discord.com/',
      style: { backgroundImage: "none", backgroundColor: "#7289da", color: "#d4d4d4" }
    },
    m: {
      patterns: [/^m$/, /^m\/.*/],
      url: () => 'https://gmail.com/',
      style: { backgroundImage: "none", backgroundColor: "#dd5145", color: "#d4d4d4" }
    },
    n: {
      patterns: [/^n$/, /^n\/.*/],
      url: () => 'https://netflix.com/',
      style: { backgroundImage: "linear-gradient(135deg, #E50914, #CB020C)", color: "#d4d4d4" }
    },
    p: {
      patterns: [/^p$/, /^p:.*/],
      url: (input) => {
        if (input === 'p') return 'https://pinterest.com/';
        if (input.startsWith('p:')) return `https://pinterest.com/search/pins/?q=${encodeURIComponent(input.slice(2))}`;
        return 'https://pinterest.com/';
      },
      style: { backgroundImage: "none", backgroundColor: "#c42027", color: "#d4d4d4" }
    },
    a: {
      patterns: [/^a$/, /^a:/],
      url: (input) => {
        if (input === 'a') return 'https://aliexpress.com/';
        if (input.startsWith('a:')) return `https://www.aliexpress.com/wholesale?SearchText=${encodeURIComponent(input.slice(2))}`;
        return 'https://aliexpress.com/';
      },
      style: { backgroundImage: "linear-gradient(135deg, #E52D03, #FD9300)", color: "#d4d4d4" }
    },
    htb: {
      patterns: [/^htb$/],
      url: () => 'https://hackthebox.com/',
      style: { backgroundImage: "linear-gradient(135deg, #1A2332, #111927)", color: "#9FEF00" }
    },
    thm: {
      patterns: [/^thm$/],
      url: () => 'https://tryhackme.com/',
      style: { backgroundImage: "linear-gradient(135deg, #1C2538, #161E2D)", color: "#d4d4d4" }
    },
    pv: {
      patterns: [/^pv$/],
      url: () => 'https://primevideo.com/',
      style: { backgroundImage: "none", backgroundColor: "#1b242f", color: "#d4d4d4" }
    },
    l: {
      patterns: [/^l$/],
      url: () => 'https://linkedin.com/',
      style: { backgroundImage: "linear-gradient(135deg, #0a66c2, #0d86ff)", color: "#d4d4d4" }
    },
    t: {
      patterns: [/^t$/],
      url: () => 'https://trello.com/',
      style: { backgroundImage: "none", backgroundColor: "#0077bd", color: "#d4d4d4" }
    },
    c: {
      patterns: [/^c$/],
      url: () => 'https://chat.openai.com/',
      style: { backgroundImage: "none", backgroundColor: "#343541", color: "#bdbdca" }
    },
    o: {
      patterns: [/^o$/],
      url: () => 'https://outlook.com/',
      style: { backgroundImage: "none", backgroundColor: "#0f6cbd", color: "#bdbdca" }
    },
    no: {
      patterns: [/^no$/],
      url: () => 'https://notion.so/',
      style: { backgroundImage: "none", backgroundColor: "#ffffff", color: "#37352f" }
    },
    d: {
      patterns: [/^d$/],
      url: () => 'https://drive.google.com/',
      style: { backgroundImage: "linear-gradient(135deg, #FFD04B, #1EA362, #4688F3)", color: "#d4d4d4" }
    },
    h: {
      patterns: [/^h$/],
      url: () => 'https://habbo.com/',
      style: { backgroundImage: "none", backgroundColor: "#f7c600", color: "#000000" }
    },
    u: {
      patterns: [/^u$/],
      url: () => 'https://unisantos.br/',
      style: { backgroundImage: "none", backgroundColor: "#52659b", color: "#FFFFFF" }
    },
    cv: {
      patterns: [/^cv$/],
      url: () => 'https://canva.com/',
      style: { backgroundImage: "linear-gradient(135deg, #01c3cc, #7d2ae7)", color: "#FFFFFF" }
    },
    pg: {
      patterns: [/^pg$/],
      url: () => 'https://pontogo.com.br/',
      style: { backgroundImage: "none", backgroundColor: "#000099", color: "#FFFFFF" }
    },
    z: {
      patterns: [/^z$/],
      url: () => 'https://zoho.com/',
      style: { backgroundImage: "linear-gradient(135deg, #e42527, #089949, #226db4, #f9b21d)", color: "#FFFFFF" }
    },
    sh: {
      patterns: [/^sh$/],
      url: () => 'https://shopee.com.br/',
      style: { backgroundImage: "linear-gradient(135deg, #f53d2d, #fe6432)", color: "#FFFFFF" }
    },
    ml: {
      patterns: [/^ml$/],
      url: () => 'https://mercadolivre.com.br/',
      style: { backgroundImage: "none", backgroundColor: "#ffe600", color: "#2a2a2a" }
    },
    st: {
      patterns: [/^st$/],
      url: () => 'https://speedtest.net/',
      style: { backgroundImage: "none", backgroundColor: "#141526", color: "#ffffff" }
    },
    nc: {
      patterns: [/^nc$/],
      url: () => 'https://calendar.notion.so/',
      style: { backgroundImage: "none", backgroundColor: "#242424", color: "#ffffff" }
    },
    f: {
      patterns: [/^f$/],
      url: () => 'https://figma.com/',
      style: { backgroundImage: "none", backgroundColor: "#2c2c2c", color: "#ffffff" }
    }
  };

  const body = document.body;
  const defaultStyle = { backgroundImage: "none", backgroundColor: "#101010", color: "#d4d4d4" };

  // Function to apply background styles
  const applyBackground = (input) => {
    for (const [key, site] of Object.entries(sites)) {
      if (site.patterns.some(pattern => pattern.test(input))) {
        Object.assign(body.style, site.style);
        return;
      }
    }
    Object.assign(body.style, defaultStyle);
  };

  // Function to process input and redirect
  const processInput = (input) => {
    // Check URLs
    const urlPatterns = [
      { pattern: /(http|https):\/\//, action: (match) => window.open(match, "_self") },
      { pattern: /(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/, action: (match) => window.open(`http://${match}`, "_self") },
      { pattern: /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/, action: (match) => window.open(`http://${match}`, "_self") }
    ];

    for (const { pattern, action } of urlPatterns) {
      if (pattern.test(input)) {
        action(input);
        return;
      }
    }

    // Configured Sites Verification
    for (const [key, site] of Object.entries(sites)) {
      if (site.patterns.some(pattern => pattern.test(input))) {
        window.open(site.url(input), "_self");
        return;
      }
    }

    // Google Search as Fallback
    window.open(`https://google.com/search?q=${encodeURIComponent(input)}`, "_self");
  };

  useEffect(() => {
    const Clock = document.getElementById('Clock');
    const Search = document.getElementById('Search');

    // Handler for keys
    const keydownHandler = (event) => {
      const ignoredKeys = ['Escape', 'ScrollLock', 'AltLeft', 'AltRight', 'ControlLeft', 'ControlRight', 'ShiftRight', 'ShiftLeft', 'CapsLock', 'Tab', 'OsLeft', 'OSRight', 'Enter', 'Backspace', 'Meta', 'MetaLeft'];
      
      if (event.code === 'Escape') {
        Clock.style.display = "block";
        Search.value = "";
        Search.style.display = "none";
        Search.blur();
        Object.assign(body.style, defaultStyle);
        return;
      }
      
      if (!ignoredKeys.includes(event.code)) {
        Clock.style.display = "none";
        Search.style.display = "block";
        Search.focus();
      }
    };

    // Handler for input
    const keyupHandler = () => {
      if (Search.value === "") {
        Search.style.display = "none";
        Search.blur();
        Clock.style.display = "block";
        Object.assign(body.style, defaultStyle);
      } else {
        applyBackground(Search.value);
      }
    };

    // Handler for blur
    const blurHandler = () => {
      Search.style.display = "none";
      Clock.style.display = "block";
      Search.value = "";
      Object.assign(body.style, defaultStyle);
    };

    // Handler for Enter
    const keypressHandler = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        processInput(Search.value);
      }
    };

    // Add event listeners
    window.addEventListener('keydown', keydownHandler);
    Search.addEventListener('keyup', keyupHandler);
    Search.addEventListener('blur', blurHandler);
    Search.addEventListener('keypress', keypressHandler);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', keydownHandler);
      Search.removeEventListener('keyup', keyupHandler);
      Search.removeEventListener('blur', blurHandler);
      Search.removeEventListener('keypress', keypressHandler);
    };
  }, []);

  return (
    <textarea id="Search" spellCheck="false" wrap="off"></textarea>
  );
};

export default SearchHandler;