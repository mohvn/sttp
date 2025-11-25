import Clock from '@/components/clock'
import SearchHandler from '@/components/search-handler'
import { Settings } from '@/components/settings'

export default function Home() {
  return (
    <div className="App">
      <Settings />
      <Clock />
      <SearchHandler />
    </div>
  )
}

