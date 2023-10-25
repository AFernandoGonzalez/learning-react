import { ThemeContext } from '../../context/switcher'
import { useContext } from 'react';
import './switcher.css';



export const SwitcherApp = () => {
    const { theme, toggleSwitch } = useContext(ThemeContext);

    return (
        <section className={`sectionTheme ${theme}`}>
            <h4>Switcher App</h4>
            <button
                onClick={toggleSwitch}
                style={{ color: "white" }}
            >
                Toggle Theme
            </button>
        </section>
    );
}
