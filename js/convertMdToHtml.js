/*
MIT License

Copyright (c) 2018 Oscar Morrison

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

document.addEventListener('DOMContentLoaded', function() {
    var converter = new showdown.Converter({
        noHeaderId: true,
        strikethrough: true,
        tables: true,
        tasklists: true,
        disableForced4SpacesIndentedSublists: true,
        simpleLineBreaks: true,
        emoji: true,
    });

    /*
    converter.addExtension(function () {
        return [{
            type: 'output',
            regex: /<a\shref[^>]+>/g,
            replace : function (text) {
                var url = text.match(/"(.*?)"/)[1]
                if(url.includes(window.location.hostname) || url[0] == '/' || url[0] == '.' || url[0] == '#'){
                    return text
                }
                return '<a href="' + url + '" target="_blank">'
            }
        }]
    }, 'externalLink')
     */
    
    var text = document.querySelector('noscript').innerText.trim(),
        html = converter.makeHtml(text);
    
    console.log(text); // just preventive debug, will be remove
    document.getElementById('html-output-area').innerHTML = html;

    setTimeout(function() {
        var hash = window.location.hash;
        window.location.hash = '';
        window.location.hash = hash;
    }, 100);
});