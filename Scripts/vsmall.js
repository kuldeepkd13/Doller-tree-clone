var smallImgs = document.querySelectorAll('.smallimgcol img');
var mainImg = document.querySelector('#mainimg');

smallImgs.forEach(function(img) {
    img.addEventListener('click', function() {
        var newSrc = this.getAttribute('src');
        mainImg.setAttribute('src', newSrc);
    });
});
