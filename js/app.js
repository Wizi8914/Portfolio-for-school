window.addEventListener('load', function() {
    setTimeout(function() {
        var monElement = document.querySelector('.next-page-button');
        monElement.style.display = 'block';
    }, 3800);
});

function nextPage() {
    var monElement = document.querySelector('.first-container');
    monElement.className = 'first-container-fadeOut';
    setTimeout(function() {
        monElement.style.display = 'none';
        document.body.style.overflow = 'auto'
    }, 2000);
}