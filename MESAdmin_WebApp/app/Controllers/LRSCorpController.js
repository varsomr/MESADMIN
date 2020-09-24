(function () {
    //  'use strict';

    angular
        .module('myApp')
        .controller('LRSCorpcontroller', controller)

    controller.$inject = ['$scope', '$timeout', 'uiGridConstants', 'LRSCorpService'];

    app.config(function ($httpProvider) {

    });



    function controller($scope, $timeout, uiGridConstants, LRSCorpService) {




    }



})();

function ajaxStart() {

    document.getElementById("loading").style.display = 'block';
    document.getElementById("rptholder").style.display = 'none';


}
function OnPageLoad() {
    document.getElementById("zoom").disabled = true;
    document.getElementById("zoomN").disabled = true;

}

function ajaxStop() {

    document.getElementById("loading").style.display = 'none';
    document.getElementById("rptholder").style.display = 'block';

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
    //var url = document.getElementById('Reports').src;
    //var tabOrWindow = window.open(url, '_blank');
    //tabOrWindow.focus();
    //document.getElementsByTagName("iframe")[0].className = "fullScreen";
}



function fullScreen() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
}

function collapse() {
    $("#mySidenav").animate({ left: '0', width: '3%' });
    $("#rptholder").css({ marginLeft: '3%' });
    $("#Reports").animate({ left: '0', Top: '0', width: '100%' });
    $("#linkContainer").hide();
    $("#linkContainerSmall").show();
    $(':input[id="zoom"]').prop('disabled', false);
    maximize();
}
function Expand() {
    $("#mySidenav").animate({ Left: '10px', width: '8%', height: '100%' });
    $("#rptholder").css({ marginLeft: '6%' });
    $("#Reports").animate({ left: '120px', Top: '0', width: '80%' });
    $("#linkContainer").show();
    $("#linkContainerSmall").hide();
    $(':input[id="zoom"]').prop('disabled', false);
}

function maximize() {
    var url = document.getElementById('Reports').src;
    var tabOrWindow = window.location.href = url;
    tabOrWindow.focus();

}




