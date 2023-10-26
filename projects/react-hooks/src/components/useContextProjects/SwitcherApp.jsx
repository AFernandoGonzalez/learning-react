import { ThemeContext } from '../../context/switcher'
import { useContext } from 'react';
import './switcher.css';



export const SwitcherApp = () => {
    const { theme, toggleSwitch } = useContext(ThemeContext);

    return (
        <section className={`sectionTheme ${theme}`}>
            <h4>Switcher App</h4>
            <p>This switcher uses useContext to manage the state globally</p>
            <button
                onClick={toggleSwitch}
                style={{ color: "white" }}//"{+_
            >
                Change Theme Color
            </button>
        </section>
    );
}
