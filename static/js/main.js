$(window).on("unload", function () {
    $(window).scrollTop(0);
});

$(document).ready(function () {

    // device detection
    var isMobile = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));

    if (isMobile) {

        // remove download link
        $(".link-restrict-phone").attr("href", "#!");

        // show warning
        $(".mobile-warning-div").show();
    }

    $("#thread-tab").on("click", function () {

        if ($("#download-tab-contents").is(":visible")) {
            $("#download-tab-contents").hide();
        }

        if ($("#support-tab-contents").is(":visible")) {
            $("#support-tab-contents").hide();
        }

        $("#download-tab-div").removeClass("tab-active-dark");
        $("#support-tab-div").removeClass("tab-active-dark");

        $("#thread-tab-div").addClass("tab-active-dark");

        $("#thread-tab-contents").show();
    });

    $("#download-tab").on("click", function () {

        if ($("#thread-tab-contents").is(":visible")) {
            $("#thread-tab-contents").hide();
        }

        if ($("#support-tab-contents").is(":visible")) {
            $("#support-tab-contents").hide();
        }

        $("#thread-tab-div").removeClass("tab-active-dark");
        $("#support-tab-div").removeClass("tab-active-dark");

        $("#download-tab-div").addClass("tab-active-dark");

        $("#download-tab-contents").show();
    });

    $("#support-tab").on("click", function () {

        if ($("#download-tab-contents").is(":visible")) {
            $("#download-tab-contents").hide();
        }

        if ($("#thread-tab-contents").is(":visible")) {
            $("#thread-tab-contents").hide();
        }

        $("#thread-tab-div").removeClass("tab-active-dark");
        $("#download-tab-div").removeClass("tab-active-dark");

        $("#support-tab-div").addClass("tab-active-dark");

        $("#support-tab-contents").show();
    });
});