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
        if (navFooterBorder) {
            navFooterBorder.classList[action]('nav-footer-open');
            navFooterBorder.classList[action === 'add' ? 'remove' : 'add']('nav-footer-close');
        }
    };

    const nav = document.getElementById('nav');
    const navFooterBorder = document.getElementById('nav-footer-border');
    const buttonOpen = document.getElementById('nav-button-open');
    const buttonClose = document.getElementById('nav-button-close');
    const scrollableElement = document.getElementById('scrollable-element');

    if (!nav || !buttonOpen || !buttonClose) {
        console.error("Navigation elements are missing!");
        return;
    }

    buttonOpen.addEventListener('click', () => toggleNav(true));
    buttonClose.addEventListener('click', () => toggleNav(false));

    // Assurer que navLinks est défini seulement si nav existe
    if (nav) {
        const navLinks = nav.querySelectorAll('a');

        // Ajouter un gestionnaire d'événements pour chaque lien
        navLinks.forEach(link => {

            link.addEventListener('click', () => {

                toggleNav(false); // Fermer la nav et le nav footer au clic sur un lien
            });
        });
    }

    // Fonction pour afficher ou cacher le navFooter
    const toggleNavFooter = (show) => {
        if (navFooterBorder) {
            if (show) {
                navFooterBorder.classList.add('nav-footer-open');
                navFooterBorder.classList.remove('nav-footer-close');
            } else {
                navFooterBorder.classList.remove('nav-footer-open');
                navFooterBorder.classList.add('nav-footer-close');
            }
        }
    };
    const isAtBottomOfElement = (element) => {
        // Hauteur de défilement actuelle plus la hauteur visible
        const scrolled = element.scrollTop + element.clientHeight;
        // Hauteur totale du contenu de l'élément
        const totalHeight = element.scrollHeight;

        // Retourne true si la position de défilement est proche de la hauteur totale du contenu
        return scrolled >= totalHeight - 10; // Le seuil de 10px pour la marge d'erreur
    };

    // Gestionnaire d'événements pour le défilement sur l'élément spécifique
    scrollableElement.addEventListener('scroll', () => {
        toggleNavFooter(isAtBottomOfElement(scrollableElement));
    });
});