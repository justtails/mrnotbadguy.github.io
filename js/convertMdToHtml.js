document.addEventListener('DOMContentLoaded', function() {
    var httpRequest = new XMLHttpRequest();

    var converter = new showdown.Converter(),
        text = document.querySelector('noscript').innerText.toString(),
        html = converter.makeHtml(text);
    
    console.log(text);
    document.getElementById('outputBox').innerHTML = html;
});