const lazyAttributes = ["srcLazy", "styleLazy"].forEach(attribute => {

    const lazyImages = document.querySelectorAll(`[${attribute}]`);
    let imagesToLoad = lazyImages.length;
    const io = new IntersectionObserver(entries => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target[attribute.replace("Lazy", "")] = entry.target.getAttribute(attribute);
                io.unobserve(entry.target);
                imagesToLoad--;
            }
        }

        if (imagesToLoad == 0) {
            io.disconnect();
        }
    });

    for (const image of lazyImages) {
        io.observe(image);
    }


});