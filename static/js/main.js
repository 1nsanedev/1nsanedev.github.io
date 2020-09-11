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

    $(".atab").on("click", function () {
        
        var tab = $(this).html().toLowerCase();

        switch (tab) {
            case "threads": 
                $("#collection-tab-contents").hide();
                $("#download-tab-contents").hide();
                $("#support-tab-contents").hide();
                $("#collection-tab-div").removeClass("tab-active-dark");
                $("#download-tab-div").removeClass("tab-active-dark");
                $("#support-tab-div").removeClass("tab-active-dark");
                $("#thread-tab-div").addClass("tab-active-dark");
                $("#thread-tab-contents").show();
                break;

            case "collection":
                $("#thread-tab-contents").hide();
                $("#download-tab-contents").hide();
                $("#support-tab-contents").hide();
                $("#thread-tab-div").removeClass("tab-active-dark");
                $("#download-tab-div").removeClass("tab-active-dark");
                $("#support-tab-div").removeClass("tab-active-dark");
                $("#collection-tab-div").addClass("tab-active-dark");
                $("#collection-tab-contents").show(); 
            break;

            case "products": 
                $("#thread-tab-contents").hide();
                $("#collection-tab-contents").hide();
                $("#support-tab-contents").hide();
                $("#collection-tab-div").removeClass("tab-active-dark");
                $("#thread-tab-div").removeClass("tab-active-dark");
                $("#support-tab-div").removeClass("tab-active-dark");
                $("#download-tab-div").addClass("tab-active-dark");
                $("#download-tab-contents").show();
            break;

            case "support":
                $("#thread-tab-contents").hide(); 
                $("#collection-tab-contents").hide();
                $("#download-tab-contents").hide();
                $("#collection-tab-div").removeClass("tab-active-dark");
                $("#thread-tab-div").removeClass("tab-active-dark");
                $("#download-tab-div").removeClass("tab-active-dark");
                $("#support-tab-div").addClass("tab-active-dark");
                $("#support-tab-contents").show();
            break;
        }
    });

    $("#btc-crypto").on("click", function() {
        Swal.fire({
        title: 'Bitcoin',
        width: 400,
        text: '39TU9TUQVyQDDnP7yr8Qd6jq79TJM6BQJj',
        imageUrl: 'static/img/bitcoin.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Bitcoin Address'
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    width: 250,
                    icon: 'success',
                    title: 'Copied',
                    showConfirmButton: false,
                    timer: 1000
                });

                navigator.clipboard.writeText('39TU9TUQVyQDDnP7yr8Qd6jq79TJM6BQJj');
            }
        });
    });

    $("#eth-crypto").on("click", function() {
        Swal.fire({
        title: 'Ethereum',
        width: 400,
        text: '0xc3a52e81dba203cAD8De692676264b405888d010',
        imageUrl: 'static/img/ethereum.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Ethereum Address',
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    width: 250,
                    icon: 'success',
                    title: 'Copied',
                    showConfirmButton: false,
                    timer: 1000
                });

                navigator.clipboard.writeText('0xc3a52e81dba203cAD8De692676264b405888d010');
            }
        });
    });

    $("#ltc-crypto").on("click", function() {
        Swal.fire({
        title: 'Litecoin',
        width: 400,
        text: 'MTW8EKQoQJgoX3VjQkjaWD5v39bNSYuqdY',
        imageUrl: 'static/img/litecoin.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Litecoin Address',
        }).then((result) => {
            if (result.isConfirmed) {

                Swal.fire({
                    width: 250,
                    icon: 'success',
                    title: 'Copied',
                    showConfirmButton: false,
                    timer: 1000
                });

                navigator.clipboard.writeText('MTW8EKQoQJgoX3VjQkjaWD5v39bNSYuqdY');
            }
        });
    });
});