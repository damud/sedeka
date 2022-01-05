function getCookie(nazwa)
{
    if (document.cookie!="") {
        var cookies=document.cookie.split("; "); 
        for (i=0; i<cookies.length; i++) {
            var nc=cookies[i].split("=")[0];
            var vc=cookies[i].split("=")[1];
            if (nc===nazwa) {
                return unescape(vc);
            }
        }
    }
return 0;
}

function setCookie(nazwa, wartosc, dni)
{
    var data = new Date();
    data.setTime(data.getTime()+(dni*24*60*60*1000));          
    var expires = "; expires="+data.toGMTString();
    document.cookie = nazwa+"=" + wartosc + expires + "; path=/";
}

if (navigator.cookieEnabled && window.navigator.doNotTrack!="yes" && window.navigator.doNotTrack!="1")
if (getCookie("zgoda")!=1)
{
var w=document.getElementById('warn');
w.innerHTML="<h3>Z konfiguracji twojej przeglądarki wynika, że prawdopodobnie chcesz być śledzony(a)<br><a onClick='setCookie(\"zgoda\", 1, 7);document.location.href=document.location.href;' href=''>Potwierdzam chcę, nie ostrzegaj ponownie</a><br><a href='http://miniskrypt.blogspot.com/p/blog-page.html'>Nie zgadzam się na śledzenie</a></h3>";
}
