document.addEventListener('DOMContentLoaded', function() {
    var link = window.location.pathname;
    if (link == '/' || link == '/index.html')
    {
        document.getElementById('main-page').style.background = '#CCC';
    }
});

var carea = document.getElementById('center-area'),
    larea = document.getElementById('left-area'),
    rarea = document.getElementById('right-area');

window.onresize = function(e) {
    const _width = 770;    
    
    if (carea.clientWidth <= _width)
    {
        doHiddenSidebar();
    }
    else
    {
        doVisibleSidebar();
    }
}

function doHiddenSidebar()
{
    larea.style.visibility = 'hidden';
    larea.style.width = '0%';
    rarea.style.maxWidth = '100%';
}

function doVisibleSidebar()
{
    larea.style.visibility = 'visible';
    larea.style.width = '100%';
    rarea.style.maxWidth = '80%';
}