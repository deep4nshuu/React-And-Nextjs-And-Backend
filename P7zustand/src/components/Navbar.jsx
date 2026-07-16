import { useAppStore } from "../store/appStore"


function Navbar() {

    const user = useAppStore((state) => (state.user))
    const theme = useAppStore((state) => (state.theme))
    const logOut = useAppStore((state) => (state.logOut))
    const toggleTheme = useAppStore((state) => (state.toggleTheme))

  return (
    <nav>
      <span>Theme: {theme}</span>
      <button>Theme Toggle</button>
      {user ? (<>
        <span></span>
        <button onClick={logOut}>logOut</button>
      </>     
      ) : (
        <span>Guest</span>
      )}
    </nav>
  )
}

export default Navbar
