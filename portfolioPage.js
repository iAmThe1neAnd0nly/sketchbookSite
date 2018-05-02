var dir = "img/";

var fileextension = ".png";

console.log('js loaded');

$(document).ready(function () {

    if(getCurentFileName() == 'sketchbook.html'){
        dir += "sketchbook/";
    }
    else if(getCurentFileName() == 'vizdev.html'){
        dir += "vizDev/";
    }
    else if(getCurentFileName() == 'characterArt.html'){
        dir+= "charArt/";
    }

    $.ajax({
        url: dir,
        success: function (data) {
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                var filename = this.href.replace(window.location.host, "").replace("http:///", "");
                console.log(filename);
                $("#container").append($("<img src= /" + filename + " width='30px' height='auto'></img>"));
            });
        }
    });
});

function getCurentFileName(){
    var pagePathName= window.location.pathname;
    return pagePathName.substring(pagePathName.lastIndexOf("/") + 1);
}

