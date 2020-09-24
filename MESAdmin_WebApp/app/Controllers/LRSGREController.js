(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('LRSGREcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'LRSCorpService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, LRSCorpService) {

        //$(document).ready(function () {
        //    $('#Reports').load(function () {
        //        //alert($(this).get(0).contentWindow.location.href);
        //        alert($(this).get(0).src);
        //    });
        //});

        //$("#loading").ajaxStart(function () {
        //    $(this).show();
        //});

        //$("#loading").ajaxStop(function () {
        //    $(this).hide();
        //});


    }



})();

function ajaxStart() {

    document.getElementById("loading").style.display = 'block';
    document.getElementById("Reports").style.display = 'none';

}
function ajaxStop() {

    document.getElementById("loading").style.display = 'none';
    document.getElementById("Reports").style.display = 'block';

}
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.marginLeft = "350px";
    //document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    //document.body.style.backgroundColor = "#444";
}

function setURLLoad() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'Production Reports';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "../LeprinoLogo.png";
}

function Redirect(plant) {
    Reports.src = "";
    //document.getElementById("headermsg").innerHTML = 'Starter RC Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    var totalURL = "http://" + plant + "denm2012litt/Reports/Pages/Report.aspx?ItemPath=%2fReports%2fCheese%2fStarter+RC";
    console.log(totalURL);
    Reports.src = totalURL;
}

function setURLRC() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'Starter RC Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "http://denm2012litt/Reports/Pages/Report.aspx?ItemPath=%2fReports%2fCheese%2fStarter+RC";
}
function setURLPROB() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'Starter Probiotic Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "http://denm2012litt/Reports/Pages/Report.aspx?ItemPath=%2fReports%2fCheese%2fStarter+Probiotic";
}
function setURLVATMAKE() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'VAT Make Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "http://denm2012litt/Reports/Pages/Report.aspx?ItemPath=%2fReports%2fVAT+Make";
}
function setURLSLURRYMAKE() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'Slurry Make Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "http://denm2012litt/Reports/Pages/Report.aspx?ItemPath=%2fReports%2fCheese%2fSlurry+Make";
}
function setURLMain() {
    Reports.src = "";
    document.getElementById("headermsg").innerHTML = 'Slurry Make Report';
    // Chart.src = 
    // Reports.src = thelink;//"app\\Views\\Chart.html?"
    Reports.src = "http://denm2012litt/Reports/Pages/Folder.aspx?ItemPath=%2fReports&ViewMode=List";
}

//var clicked = 0;
//$(document).ready(function () {
//    $('Reports').load(function () {
//        var iframe = $(this).contents();
//        var src = iframe.find(".link").attr('href');
//        //notices if a tag is clicked within iframe
//        iframe.find(".link").click(function () {
//            //has the URL changed?
//            if (src != iframe.find(".link").attr('href')) {
//                clicked = 1;
//            } else {
//                clicked = 0;
//            }
//            console.log(clicked);
//        });
//    });
//});

function maximizeNew() {
    var url = document.getElementById('Reports').src;
    var tabOrWindow = window.open(url, '_blank');
    tabOrWindow.focus();
}

function maximize() {
    //var myWindow = window.open(document.getElementById("Reports").contentWindow.location.href, "MsgWindow", "width=100%,height=100%");
    //myWindow.document.write("<p>This window's name is: " + myWindow.name + "</p>");



    var url = document.getElementById('Reports').src;
    // var url = document.getElementById('Reports').contentWindow.location.href;


    var tabOrWindow = window.location.href = url;
    tabOrWindow.focus();

}


function resizeIframe() {
    //var height = document.documentElement.clientHeight;
    //height -= pageY(document.getElementById('Reports')) + buffer;
    //height = (height < 0) ? 0 : height;

    //var width = document.documentElement.clientWidth;
    //width -= pageY(document.getElementById('Reports')) + buffer;
    //width = (width < 0) ? 0 : width;
    // document.getElementById('Reports').style.height = height + 'px';
    //document.getElementById('Reports').style.height = '100%';
    //////$(window).height();   // returns height of browser viewport
    //////$(document).height(); // returns height of HTML document (same as pageHeight in screenshot)
    //////$(window).width();   // returns width of browser viewport
    //////$(document).width(); // returns width of HTML document (same as pageWidth in screenshot)
    var w = window,
        d = document,
        e = d.documentElement,
        g = d.getElementsByTagName('body')[0],
        x = w.innerWidth || e.clientWidth || g.clientWidth,
        y = w.innerHeight || e.clientHeight || g.clientHeight;
    //alert(x + ' × ' + y);


    document.getElementById('Reports').style.height = x + 'px';
    document.getElementById('Reports').style.width = '100%';
}

