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
    
  $("#beta-software").on("click", function(e) {

      e.preventDefault();

        Swal.fire({
            title: '<span style="color: red">Warning</span>', 
            html: '<span style="color: white">THIS IS A BETA RELEASE! UNEXPECTED ERRORS IN THE PROGRAM MAY OCCUR. THE DEVELOPER OF THIS SOFTWARE ASSUMES NO LIABILITY FOR POSSIBLE DAMAGE TO EQUIPMENT USED INCLUDING BUT NOT LIMITED TO DATA LOSS. ONLY USE THIS SOFTWARE IF YOU KNOW WHAT YOU ARE DOING. THE USE OF THIS SOFTWARE IS AT YOUR OWN RISK!</span>',
            icon: 'warning',
            confirmButtonText: 'I understand, take me to download',
            confirmButtonColor: 'red',
            focusConfirm: false,
            background: '#222222'
        }).then((result) => {
            if (result.isConfirmed) {
                location.href = $("#beta-software").attr("href");
            }
        });
   });

    $("#btc-crypto").on("click", function() {
        Swal.fire({
        title: '<span style="color: white">Bitcoin</span>',
        width: 400,
        html: '<span style="color: white">39TU9TUQVyQDDnP7yr8Qd6jq79TJM6BQJj</span>',
        imageUrl: 'static/img/bitcoin.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Bitcoin Address',
        background: '#222222'
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
        title: '<span style="color: white">Ethereum</span>',
        width: 400,
        html: '<span style="color: white">0xc3a52e81dba203cAD8De692676264b405888d010</span>',
        imageUrl: 'static/img/ethereum.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Ethereum Address',
        background: '#222222'
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
        title: '<span style="color: white">Litecoin</span>',
        width: 400,
        html: '<span style="color: white">MTW8EKQoQJgoX3VjQkjaWD5v39bNSYuqdY</span>',
        imageUrl: 'static/img/litecoin.jpg',
        imageWidth: 300,
        imageHeight: 300,
        confirmButtonText: `Copy Address`,
        imageAlt: 'Litecoin Address',
        background: '#222222'
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
