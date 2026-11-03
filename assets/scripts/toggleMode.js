const toggleMode = () => {
    const elem = document.documentElement;
    const trigger = document.querySelector('.toggle-mode');
    const darkMode = 'dark-mode';

    trigger.addEventListener('click', () => {
        if (elem.classList.contains(darkMode)) {
            elem.classList.remove(darkMode);
            localStorage.removeItem(darkMode);
        } else {
            elem.classList.add(darkMode);
            localStorage.setItem(darkMode, 'on');
        }
    });
}

export { toggleMode }