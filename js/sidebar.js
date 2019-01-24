var carea = document.getElementById('center-area'),
    larea = document.getElementById('left-area'),
    rarea = document.getElementById('right-area');

document.addEventListener('DOMContentLoaded', function() {
    doListInSidebar();
    doFadeOutSidebarElement();
});

function doListInSidebar()
{
    const styleClass = 'sidebar-elements-style';
    var sidebar = document.getElementById('sidebar');
    var element = null,
        link = null;

    // На главную
    link = document.createElement('a');
    link.setAttribute('href', '/');
    link.setAttribute('class', 'sidebar-link-style');
    sidebar.appendChild(link);
    element = document.createElement('div');
    element.setAttribute('id', 'main-page');
    element.setAttribute('class', styleClass);
    element.innerText = 'Главная';
    link.appendChild(element);

    // Материалы
    link = document.createElement('a');
    link.setAttribute('href', '/materials.html');
    link.setAttribute('class', 'sidebar-link-style');
    sidebar.appendChild(link);
    element = document.createElement('div');
    element.setAttribute('id', 'mat-page');
    element.setAttribute('class', styleClass);
    element.innerText = 'Материалы';
    link.appendChild(element);

    // О сайте
    link = document.createElement('a');
    link.setAttribute('href', '/about.html');
    link.setAttribute('class', 'sidebar-link-style');
    sidebar.appendChild(link);
    element = document.createElement('div');
    element.setAttribute('id', 'about-page');
    element.setAttribute('class', styleClass);
    element.innerText = 'О сайте';
    link.appendChild(element);
}

function doFadeOutSidebarElement()
{
    var link = window.location.pathname;
    if (link == '/' || link == '/index.html')
    {
        document.getElementById('main-page').style.background = '#CCC';
        document.getElementById('main-page').style.fontWeight = 'bold';
    }
    if (link == '/materials.html')
    {
        document.getElementById('mat-page').style.background = '#CCC';
        document.getElementById('mat-page').style.fontWeight = 'bold';
    }
    if (link == '/about.html')
    {
        document.getElementById('about-page').style.background = '#CCC';
        document.getElementById('about-page').style.fontWeight = 'bold';
    }
}

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

var hidden = false;

function changeSidebarCond(){
    var obj = document.getElementById('header-rollup-sidebar-btn');
    if (!hidden)
    {
        obj.setAttribute('class', 'img-rot anim1');
        doHiddenSidebar();
        hidden = true;
    }
    else
    {
        obj.setAttribute('class', 'img-rot anim2');
        doVisibleSidebar();
        hidden = false;
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