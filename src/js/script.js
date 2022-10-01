function iframeToUrl(url){
    if(url != document.getElementById('frame').src){
        document.getElementById('frame').src = url;
    }else if(document.getElementById('frame').scrollTop != 0){
        document.getElementById('frame').scrollTop = 0;
    }
}