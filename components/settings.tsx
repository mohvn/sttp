'use client'

import React, { useState, useEffect, useMemo, useCallback } from 'react'
import { Search, Check, X } from 'lucide-react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import { SettingsIcon as SettingsIconIcon } from '@/components/settings-icon'

interface Font {
  id: string
  name: string
  family: string
  googleFontUrl: string
}

const fonts: Font[] = [
  {
    id: 'geist',
    name: 'Geist',
    family: "'Geist', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Geist:wght@100..900&display=swap"
  },
  {
    id: 'inter',
    name: 'Inter',
    family: "'Inter', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
  },
  {
    id: 'roboto',
    name: 'Roboto',
    family: "'Roboto', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    family: "'Open Sans', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap"
  },
  {
    id: 'lato',
    name: 'Lato',
    family: "'Lato', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700;900&display=swap"
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    family: "'Montserrat', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'raleway',
    name: 'Raleway',
    family: "'Raleway', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'poppins',
    name: 'Poppins',
    family: "'Poppins', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'nunito',
    name: 'Nunito',
    family: "'Nunito', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'ubuntu',
    name: 'Ubuntu',
    family: "'Ubuntu', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap"
  },
  {
    id: 'source-sans-pro',
    name: 'Source Sans Pro',
    family: "'Source Sans Pro', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap"
  },
  {
    id: 'oswald',
    name: 'Oswald',
    family: "'Oswald', sans-serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
  },
  {
    id: 'playfair-display',
    name: 'Playfair Display',
    family: "'Playfair Display', serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap"
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    family: "'Merriweather', serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
  },
  {
    id: 'lora',
    name: 'Lora',
    family: "'Lora', serif",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Lora:wght@400;500;600;700&display=swap"
  },
  {
    id: 'roboto-mono',
    name: 'Roboto Mono',
    family: "'Roboto Mono', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap"
  },
  {
    id: 'source-code-pro',
    name: 'Source Code Pro',
    family: "'Source Code Pro', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'fira-code',
    name: 'Fira Code',
    family: "'Fira Code', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap"
  },
  {
    id: 'jetbrains-mono',
    name: 'JetBrains Mono',
    family: "'JetBrains Mono', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100;200;300;400;500;600;700;800&display=swap"
  },
  {
    id: 'inconsolata',
    name: 'Inconsolata',
    family: "'Inconsolata', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Inconsolata:wght@200;300;400;500;600;700;800;900&display=swap"
  },
  {
    id: 'space-mono',
    name: 'Space Mono',
    family: "'Space Mono', monospace",
    googleFontUrl: "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap"
  },
]

export function Settings() {
  const [open, setOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFont, setSelectedFont] = useState<string>('geist')
  const [loadedFonts, setLoadedFonts] = useState<Set<string>>(new Set(['geist']))

  const loadFont = useCallback((fontId: string) => {
    setLoadedFonts(prev => {
      if (prev.has(fontId)) return prev

      const font = fonts.find(f => f.id === fontId)
      if (!font) return prev

      const link = document.createElement('link')
      link.rel = 'stylesheet'
      link.href = font.googleFontUrl
      link.id = `font-${fontId}`
      document.head.appendChild(link)

      return new Set([...prev, fontId])
    })
  }, [])

  const applyFont = useCallback((fontId: string) => {
    const font = fonts.find(f => f.id === fontId)
    if (font) {
      loadFont(fontId)
      // Apply font immediately
      document.documentElement.style.setProperty('--font-family', font.family)
      // Save to localStorage
      localStorage.setItem('font-family', fontId)
    }
  }, [loadFont])

  // Load all fonts when dialog opens
  useEffect(() => {
    if (open) {
      fonts.forEach(font => {
        if (!loadedFonts.has(font.id)) {
          loadFont(font.id)
        }
      })
    }
  }, [open, loadedFonts, loadFont])

  useEffect(() => {
    // Load saved font preference on mount
    const savedFont = localStorage.getItem('font-family')
    if (savedFont) {
      const font = fonts.find(f => f.id === savedFont)
      if (font) {
        setSelectedFont(savedFont)
        // Load font first, then apply
        loadFont(savedFont)
        // Use setTimeout to ensure font is loaded
        setTimeout(() => {
          document.documentElement.style.setProperty('--font-family', font.family)
        }, 100)
      } else {
        // Invalid font, reset to default
        applyFont('geist')
      }
    } else {
      applyFont('geist')
    }
  }, [loadFont, applyFont])

  const handleFontSelect = (fontId: string) => {
    setSelectedFont(fontId)
    applyFont(fontId)
  }

  // Handle Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if user is typing in an input or textarea
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[contenteditable="true"]')
      ) {
        return
      }

      // Check for Ctrl+K (Windows/Linux) or Cmd+K (Mac)
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  const filteredFonts = useMemo(() => {
    if (!searchQuery.trim()) return fonts
    const query = searchQuery.toLowerCase()
    return fonts.filter(font =>
      font.name.toLowerCase().includes(query) ||
      font.family.toLowerCase().includes(query)
    )
  }, [searchQuery])

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            id="Settings"
            type="button"
            className="fixed top-4 right-4 z-50 textButton view-settings inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:opacity-80"
            aria-label="Settings"
            title="settings"
            data-settings-button="true"
            onClick={(e) => e.currentTarget.blur()}
          >
            <div className="icon">
              <SettingsIconIcon className="size-4" />
            </div>
          </button>
        </DialogTrigger>
        <DialogContent
          className="max-w-sm rounded-md p-0 overflow-hidden data-[state=open]:slide-in-from-bottom-4 data-[state=closed]:slide-out-to-bottom-4"
          showCloseButton={false}
        >
          <div className="flex size-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground relative">
            {/* Search Input */}
            <div className="flex gap-x-3 gap-y-2 flex-row items-center place-content-start flex-wrap px-3 -mb-px border-b pr-10 relative">
              <Search className="size-4 shrink-0 opacity-50" aria-hidden="true" />
              <input
                type="text"
                placeholder="Type to search..."
                value={searchQuery}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                className="appearance-none min-h-0 w-full self-stretch bg-background text-foreground break-words transition duration-150 py-2 rounded-md px-0 flex-1 truncate text-sm outline-none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
              />
              <span className="inline-flex gap-[0.1em] -my-0.5 px-[0.4em] py-[0.088em] whitespace-nowrap tabular-nums rounded-sm border text-xs/tight font-medium text-muted-foreground bg-background shrink-0">
                <span>⌘</span>
                <span>K</span>
              </span>
              <DialogClose className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </div>

            {/* Font List */}
            <div className="max-h-96 overflow-y-auto overscroll-contain p-1">
              {filteredFonts.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted-foreground">
                  No fonts found
                </div>
              ) : (
                <div className="overflow-hidden text-foreground">
                  {filteredFonts.map((font) => (
                    <button
                      key={font.id}
                      onClick={() => handleFontSelect(font.id)}
                      className={cn(
                        "relative flex items-center gap-2 rounded-sm px-2 py-1.5 scroll-m-2 text-sm select-none cursor-pointer transition-colors outline-none w-full text-left",
                        "hover:bg-accent hover:text-accent-foreground",
                        selectedFont === font.id && "bg-accent text-accent-foreground"
                      )}
                    >
                      <span className="flex-1 truncate" style={{ fontFamily: font.family }}>
                        {font.name}
                      </span>
                      {selectedFont === font.id && (
                        <Check className="size-4 shrink-0" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

