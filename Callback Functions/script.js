const attachEventListeners = () => {
    let count = 0;
    document.getElementById("click-me").addEventListener("click", () => {
        console.log("button clicked", ++count);
    });
};

attachEventListeners();
