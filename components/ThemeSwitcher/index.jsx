import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [ mounted, setMounted ] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true)
  }, []);

  if (!mounted) return null;

  const titleByTheme = `Changer en ${theme === "light" ? "dark" : "light"} mode`;

  return (
    <div className="ThemeSwitcher" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <MdOutlineDarkMode className="modeIcon" title={titleByTheme}/> : <MdOutlineLightMode className="modeIcon" title={titleByTheme}/>}

      {/* <select value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Noir</option>
        <option value="light">Blanc</option>
      </select> */}
    </div>

  )
}

export default ThemeSwitcher;