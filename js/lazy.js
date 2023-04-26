function debounce(callback, limit = 100) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(()=>{
            callback.apply(this, args);
        }, limit);
    };
}

const imgBoxes = document.querySelectorAll(".lazy");

const loadLazyImg = debounce((e)=>{
    const {clientHeight, scrollTop, scrollHeight} = e.target.scrollingElement;

    imgBoxes.forEach((box)=>{
        if (box.offsetTop < clientHeight + scrollTop) {
            const $img = box.querySelector("img");
            $img.src = $img.dataset.src;
            $img.classList.remove("lazy");
        }
    });
},150);

document.addEventListener("scroll", loadLazyImg);