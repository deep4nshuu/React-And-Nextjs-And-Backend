import './App.css'
import BasicProps from './components/BasicProps'
import ChildrenProps from './components/ChildrenProps'
import RefProps from './components/RefProps'
import ComplexProps from './components/ComplexProps'
import ThemeToggler, {ThemeProvider, useTheme} from './components/ThemeToggler'


function Navigation(){
  const isDark = true

  const sections = [
    {id: "basic", label: "Basic Props", icons: "📦"},
    {id: "children", label: "Children Props", icons: "👶"},
    {id: "complex", label: "Complex Props", icons: "🧩"},
    {id: "ref", label: "Ref Props", icons: "🔗"},
    {id: "theme", label: "Theme Toggler", icons: "🎨"}
  ]

  const handleScroll = (id) => {
    const element = document.getElementById(id)
    if(element){
      element.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <nav className={`sticky top-0 z-50 shadow-md`}>
      <div>
        <div>
          {
            sections.map((section) => (
              <button
              onClick={() => handleScroll(section.id)}
              className={`px-4 py-2 rounded-lg font-medium bg-blue-600 text-white hover:bg-blue-400 mr-2 mt-2`}
              key={section.id}
              >
                <span className="mr-2">{section.icons}</span>
                {section.label}
              </button>
            ))
          }
        </div>
      </div>
    </nav>
  )
}

function AppContent(){
  // const isDark = true
  const {isDark} = useTheme()

  return (
    <div 
    className={`min-h-screen bg-gray-800 ${
      isDark ? "bg-gray-800" : "bg-red-200"
    }`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
        className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className='text-5xl font-bold mb-4'>React props explained</h1>
          <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-800"}`}>A comprehensive guide to understanding props in React</p>
          <div className={`mt-4 inline-block px-6 py-2 rounded-full `}>
            Built with Bun + Vite + React + Tailwind Css
          </div>
        </header>
        <div className='space-y-8'>
          <div id='basic' className='scroll-mt-30'>
            <BasicProps />
          </div>
          <div id='children' className='scroll-mt-30 text-white'>
            <ChildrenProps />
          </div>
          <div id='complex' className='scroll-mt-30'>
            <ComplexProps />
          </div>
          <div id='ref' className='scroll-mt-40'>
            <RefProps />
          </div>
          <div id='theme' className='scroll-mt-30'>
            <ThemeToggler />
          </div>
        </div>
        <footer
        className={`mt-12 text-center pb-8 transition-colors ${
          isDark ? "text-gray-400" : "text-gray-600"
        }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  )
}


function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
