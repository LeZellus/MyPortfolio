function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

docReady(function() {
    const toggleNav = (isOpen) => {
        const action = isOpen ? 'add' : 'remove';
        nav.classList[action]('nav-open');
        nav.classList[action === 'add' ? 'remove' : 'add']('nav-close');
        navFooterBorder.classList[action]('nav-footer-open');
        navFooterBorder.classList[action === 'add' ? 'remove' : 'add']('nav-footer-close');
    };

    const nav = document.getElementById('nav');
    const navFooterBorder = document.getElementById('nav-footer-border');
    const buttonOpen = document.getElementById('nav-button-open');
    const buttonClose = document.getElementById('nav-button-close');

    if (!nav || !buttonOpen || !buttonClose || !navFooterBorder) {
        console.error("Navigation elements are missing!");
        return;
    }

    buttonOpen.addEventListener('click', () => toggleNav(true));
    buttonClose.addEventListener('click', () => toggleNav(false));
});