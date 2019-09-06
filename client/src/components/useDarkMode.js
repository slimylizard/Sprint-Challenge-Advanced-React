import useLocalStorage from './useLocalStorage.js';
import { useEffect } from 'react';

const useDarkMode = () => {
    const [darkModeClass, setDarkModeClass] = useLocalStorage('dark-mode');

    useEffect(() => {
        let className = 'dark-mode';
        let element = window.document.body;
        if(darkModeClass) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [darkModeClass])
    return [darkModeClass, setDarkModeClass];
}

export default useDarkMode;