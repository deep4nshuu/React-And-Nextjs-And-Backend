import { createContext, useContext, useState } from "react"



const ThemeContext = createContext()

// Theme Provider component
export function ThemeProvider({children}){
  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  )
}

// Custom hook to use theme
export function useTheme(){
  const context = useContext(ThemeContext)

  if(!context){
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}


// Here context is a hook or wrapper that gives access to ThemeContext or Container
// If we want to use this Container or ThemeContext, we can import useTheme hook and use it
function ThemeToggleButton(){
  const {theme, toggleTheme, isDark} = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 
        ${isDark ? "bg-blue-600" : "bg-gray-300"}
      `}
    >
      <div
        className={`absolute top-1 left-1 w-6 h-6 rounded-full bg-white transition-transform duration-300 flex items-center justify-center ${isDark ? "transform translate-x-8" : ""}
        `}
      >
        {isDark ? "🌙" : "🌞"}
      </div>
    </button>
  )
}


function ThemeCard({title, children}){
  const {isDark} = useTheme()
  return (
    <div
    className={`${isDark ? "bg-dark-600 text-white" : "bg-white text-gray-800"}`}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}


// Themed Button Component
function ThemedButton({children, variant="primary", onClick}){
  const {isDark} = useTheme()

  const getButtonClasses = () => {
    if(variant === "primary"){
      return isDark
        ? "bg-blue-600 hover:bg-blue-700 text-white" 
        : "bg-orange-500 hover:bg-blue-600 text-white"
    }
    if(variant === "secondary"){
      return isDark
        ? "bg-gray-700 hover:bg-gray-600 text-white" 
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }
  }

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-lg font-medium transition-colors ${getButtonClasses()}`}
    >
      {children}
    </button>
  )

}




export default function ThemeToggler() {

  const {isDark} = useTheme()
  const [clickCount, setClickCount] = useState(0)


  return (
    <section
      className={`p-8 rounded-xl shadow-lg transition-colors duration-300
        ${isDark ? "bg-gray-900 text-white" : "bg-white text-gray-800"}  
      `}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold">Theme Toggler</h2>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium">
            {isDark ? "Dark Mode" : "Light Mode"}
          </span>
          <ThemeToggleButton />
        </div>
      </div>
      <p className={`mb-6 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
        This section demonstrates theme toggling using Context API and props. The theme state is shared across all child components without prop 
      </p>
      <div className="flex gap-6 mb-4 mt-4"
      >
        <div className={`flex-1 rounded-lg p-4 shadow-xl ${
        isDark ? "bg-gray-800 text-white" : "bg-white"
        }`}>
          <h3 className="text-xl font-semibold mb-2">User Information</h3>
          <p>Name: John Doe</p>
          <p>Email: john@gmail.com</p>
          <p>Role: Developer</p>
          <div className='flex flex-wrap gap-3 mt-2'>
            <button
            className={`rounded-md px-2 py-1 text-sm ${isDark ? "bg-blue-700" : "bg-orange-500 text-white"}`}
            >
              Edit Profile
            </button>
            <button
            className={`rounded-md px-2 py-1 text-sm ${isDark ? "bg-gray-700" : "bg-gray-200 text-gray-800"}`}
            >
              Settings
            </button>
          </div>
        </div>
        <div className={`flex-1 rounded-lg p-4 shadow-xl ${
        isDark ? "bg-gray-800 text-white" : "bg-white"
        }`}>
          <h3 className="text-xl font-semibold mb-2">Statistics</h3>
          <div className="flex justify-between mt-2 mb-2">
            <span>Total Clicks:</span>
            <strong className="text-blue-700">0</strong>
          </div>
          <div className="flex justify-between mt-2 mb-2">
            <span>Theme:</span>
            <strong>{isDark ? "Dark" : "Light"}</strong>
          </div>
          <div className="flex justify-between">
            <span>Revenue:</span>
            <strong className="text-green-700">Active</strong>
          </div>
        </div>
      </div>
      <div className={`mb-4 mt-4 rounded-lg p-4 shadow-xl ${isDark ? "bg-gray-800 text-white" : "bg-white"}`}>
        <h3 className="text-xl font-semibold mb-2">Interactive Demo</h3>
        <p className={`mb-3 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Try clicking the button below to see how they adapt to the current theme:
        </p>
        <div className='flex flex-wrap gap-3 mt-2'>
          <button
          className={`rounded-md px-2 py-1 text-sm ${isDark ? "bg-blue-700" : "bg-orange-500 text-white"}`}
          >
            Primary Action
          </button>
          <button
          className={`rounded-md px-2 py-1 text-sm ${isDark ? "bg-gray-700" : "bg-gray-200 text-gray-800"}`}
          >
            Secondary Action
          </button>
          <button
          className={`rounded-md px-2 py-1 text-sm ${isDark ? "bg-blue-700" : "bg-orange-500 text-white"}`}
          >
            Reset Counter
          </button>
        </div>
      </div>
      <div className={`mb-4 mt-4 border-l-4 border-blue-500 rounded-lg p-4  ${isDark ? "bg-blue-700 text-white" : "bg-blue-50"}`}>
        <h3 className="text-xl font-semibold mb-2">Why Context + Props?</h3>
        <ul className="list-disc list-inside">
          <li>Avoids "props driling" through multiple component layers</li>
          <li>Makes theme accessible to any component in the tree</li>
          <li>Components can still recieve other props normally</li>
          <li>Combines global state (context) with local configuration (props)</li>
        </ul>
      </div>
    </section>
  )
}

