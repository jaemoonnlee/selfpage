window.onload = function () {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    console.log(coll);
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            console.log('...')
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}