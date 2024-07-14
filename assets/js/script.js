function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    };
}
function toggle() {
    const widthScreen = window.innerWidth
    const clientWidthDocument = document.body.clientWidth
    const paddingScroll = widthScreen - clientWidthDocument
    const jsToggle = document.querySelectorAll('.js-toggle')
    if (!jsToggle) return
    jsToggle.forEach(button => {
        const selectorId = button.getAttribute('target-toggle')
        const isNoScroll = button.getAttribute('no-scroll')
        const targetEl = document.querySelector(`#${selectorId}`)
        if (!targetEl) return
        button.onclick = (e) => {
            e.preventDefault();

            requestAnimationFrame(() => {
                targetEl.classList.toggle("hide");
                targetEl.classList.toggle("show");
                if (isNoScroll === 'true') {
                    if (targetEl.classList.contains('hide')) {
                        document.body.style.overflow = ''
                        document.body.style.paddingRight = ``
                    } else {
                        document.body.style.overflow = 'hidden'
                        document.body.style.paddingRight = `${paddingScroll}px`
                    }
                    window.addEventListener('resize', debounce(() => {
                        if (!(window.innerWidth > 991)) return;
                        targetEl.classList.add("hide");
                        targetEl.classList.remove("show");
                        document.body.style.overflow = ''
                        document.body.style.paddingRight = ``
                    }))
                }
            });
        };
    })

}

toggle()