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
    var element = null;

    // На главную
    element = document.createElement('div');
    element.setAttribute('id', 'main-page');
    element.setAttribute('class', styleClass);
    // Добавить создание ссылки
    element.innerText = 'Главная';
    sidebar.appendChild(element);

    // О сайте
    element = document.createElement('div');
    element.setAttribute('id', 'about-page');
    element.setAttribute('class', styleClass);
    element.innerText = 'О сайте';
    sidebar.appendChild(element);
}

function doFadeOutSidebarElement()
{
    var link = window.location.pathname;
    if (link == '/' || link == '/index.html')
    {
        document.getElementById('main-page').style.background = '#CCC';
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