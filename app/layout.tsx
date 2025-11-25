import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'sttp.',
  description: 'sttp - Search Tool',
  icons: {
    icon: '/sttp.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedFont = localStorage.getItem('font-family');
                  if (savedFont && savedFont !== 'geist') {
                    const fontUrls = {
                      'inter': 'https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap',
                      'roboto': 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
                      'open-sans': 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap',
                      'lato': 'https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap',
                      'montserrat': 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap',
                      'raleway': 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap',
                      'poppins': 'https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap',
                      'nunito': 'https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap',
                      'ubuntu': 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
                      'source-sans-pro': 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap',
                      'oswald': 'https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap',
                      'playfair-display': 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap',
                      'merriweather': 'https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap',
                      'lora': 'https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap',
                      'roboto-mono': 'https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap',
                      'source-code-pro': 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700;800;900&display=swap',
                      'fira-code': 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap',
                      'jetbrains-mono': 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap',
                      'inconsolata': 'https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap',
                      'space-mono': 'https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap'
                    };
                    const fontFamilies = {
                      'geist': "'Geist', sans-serif",
                      'inter': "'Inter', sans-serif",
                      'roboto': "'Roboto', sans-serif",
                      'open-sans': "'Open Sans', sans-serif",
                      'lato': "'Lato', sans-serif",
                      'montserrat': "'Montserrat', sans-serif",
                      'raleway': "'Raleway', sans-serif",
                      'poppins': "'Poppins', sans-serif",
                      'nunito': "'Nunito', sans-serif",
                      'ubuntu': "'Ubuntu', sans-serif",
                      'source-sans-pro': "'Source Sans Pro', sans-serif",
                      'oswald': "'Oswald', sans-serif",
                      'playfair-display': "'Playfair Display', serif",
                      'merriweather': "'Merriweather', serif",
                      'lora': "'Lora', serif",
                      'roboto-mono': "'Roboto Mono', monospace",
                      'source-code-pro': "'Source Code Pro', monospace",
                      'fira-code': "'Fira Code', monospace",
                      'jetbrains-mono': "'JetBrains Mono', monospace",
                      'inconsolata': "'Inconsolata', monospace",
                      'space-mono': "'Space Mono', monospace"
                    };
                    const fontUrl = fontUrls[savedFont];
                    const fontFamily = fontFamilies[savedFont] || fontFamilies['geist'];
                    if (fontUrl) {
                      const link = document.createElement('link');
                      link.rel = 'stylesheet';
                      link.href = fontUrl;
                      link.id = 'font-' + savedFont;
                      document.head.appendChild(link);
                    }
                    document.documentElement.style.setProperty('--font-family', fontFamily);
                  }
                } catch (e) {
                  console.error('Error loading font preference:', e);
                }
              })();
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}

