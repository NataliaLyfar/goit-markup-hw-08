(() => {
    const menuBtnRef = document.querySelector('[data-menu-button]');
    
    menuBtnRef.addEventListener('click', () => {
        const expanded =
        menuBtnRef.getAttribute("aria-expended") === "true" || false;
        menuBtnRef.classList.toggle('is-open');
        menuBtnRef.setAttribute("aria-expended", !expanded);
    });
  })();