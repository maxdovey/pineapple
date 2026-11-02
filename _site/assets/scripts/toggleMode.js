const toggleMode = () => {
    const elem = document.body;
    const trigger = document.querySelector('.toggle-mode');

    const darkModeIsSet = localStorage.getItem('dark-mode');

    if (darkModeIsSet === 'on') {
        elem.classList.add('dark-mode');
    }

    trigger.addEventListener('click', () => {
        if (elem.classList.contains('dark-mode')) {
            elem.classList.remove('dark-mode');
            localStorage.removeItem('dark-mode');
        } else {
            elem.classList.add('dark-mode');
            localStorage.setItem('dark-mode', 'on');
        }
    });
}

export { toggleMode }