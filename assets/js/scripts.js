$(document).ready( function (){

    // modal showing
    $(".js-modal-button").click(function (){
        var currentModal = $(this).attr("href");
        $(currentModal).addClass('is-active');
        return false;
    });


    $(".modal .delete, .modal-background").click(function (){
        $(this).parents(".modal").removeClass('is-active');

        // if iframe inside the modal
        var currentModal = $(this).parents(".modal");
        var currentVideo = currentModal.find(".modal-card-body iframe");
        currentModal.find(".modal-card-body iframe").attr("src", currentVideo.attr("src"));
        return false;
    });
    $(document).keydown(function(e) {
        if (e.keyCode == 27) {
            $(".modal").removeClass('is-active');
        }
    });

    // scroll link
    $(".scroll").on('click', function(event) {
        if (this.hash !== "") {
          event.preventDefault();
          // Store hash
          var hash = this.hash;
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800);
        }
        return false;
     });


    // notification delete on click
    $(".notification .delete").click(function (){
        $(this).parents(".notification").fadeOut();
        return false;
    });

     // mobile header fixec
    if($(window).width() < 1024){
        // $(window).scroll(function() {    
        //     var scroll = $(window).scrollTop();
        //     if (scroll >= 10) {
        //         $("#header").addClass("header-fixed");
        //     }
        //     else{
        //         $("#header").removeClass("header-fixed");
        //     }
        // });

        $(".close-log").click(function (){
            $(".fill-wrap").hide();
            return false;
        });

        $(".menu-icon").click(function (){
            $(".nav-wrap").addClass('active');
            return false;
        });
        $(".close-sidebar").click(function (){
            $(".nav-wrap").removeClass('active');
            return false;
        });

        $(".menu-icon-secondary").click(function (){
            $("#container-fluid").addClass('has-sidebar');
            $(".sidebar").addClass('active');
            return false;
        });
        $(".close-sidebar").click(function (){
            $("#container-fluid").removeClass('has-sidebar');
            $(".sidebar").removeClass('active');
            return false;
        });

        // mobile notificaiton appear on click
        $(".dropdown-trigger > a").click(function (){
            $(this).parents('.dropdown').addClass('active-dropdown');
            return false;
        });
        $(".close-dropdown").click(function (){
            $(".dropdown").removeClass('active-dropdown');
            return false;
        });

    }


    //  navigation start from 992px
    $(".js-like").click(function (){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
        }
        else{
            $(this).addClass('active');
        }
        return false;
    });

    // slider
    $('.joy-slider').slick({
        arrows: false,
        dots: true
    });
    //  navigation start from 992px
    $(".js-radios a").click(function (){
        $(".js-radios a").removeClass('active');
        $(this).addClass('active');
        return false;
    });

    // accordion
    $(".accordin-desc-wrap > h3 > a").click(function (){

        $(".accordin-desc-wrap").removeClass('active');
        $(".accordin-desc").slideUp();

        if( $(this).parents(".accordin-desc-wrap").hasClass('active')){
            $(this).parents(".accordin-desc-wrap").removeClass('active');
            $(this).parent().next('.accordin-desc').stop(true,true).slideUp();
        }
        else{
            $(this).parents(".accordin-desc-wrap").addClass('active');
            $(this).parent().next('.accordin-desc').stop(true,true).slideDown();
        }
        return false;
    });

    // tabs
    $(".js-tabs a").click(function (){
        var currentVal = $(this).attr("href");
        $(this).parents(".js-tabs").find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");

        $(".tabs-content").hide();
        $(currentVal).show();

        $('.experience-slider').slick('setPosition');

        return false;
    });


    // tabs secondary
    $(".js-tabs-seconary a").click(function (){
        var currentVal2 = $(this).attr("href");
        $(this).parents(".js-tabs-seconary").find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");

        $(".tabs-secondary-content").hide();
        $(currentVal2).show();

        return false;
    });

    // tabs three
    $(".js-tabs-three a").click(function (){
        var currentVal3 = $(this).attr("href");
        $(this).parents(".js-tabs-three").find("li").removeClass("is-active");
        $(this).parent().addClass("is-active");

        $(".tabs-content-myspecialists").hide();
        $(currentVal3).show();

        return false;
    });


    // tabs Messages
    if($(window).width() > 768){
        $(".js-message-sidebar a").click(function (){
            var currentVal4 = $(this).attr("href");
            $(this).parents(".js-message-sidebar").find("li").removeClass("is-active");
            $(this).parent().addClass("is-active");

            $(".mymessages-tabs-content").hide();
            $(currentVal4).show();

            return false;
        });
    }
    if($(window).width() < 768){
        $(".js-message-sidebar a").click(function (){
            var currentVal4 = $(this).attr("href");
            $(this).parents(".js-message-sidebar").find("li").removeClass("is-active");
            $(this).parent().addClass("is-active");

            $(".mymessages-tabs-content").hide();
            $(".sidebar-message, .my-messages-title").hide();
            $(".back-messages").show();
            $(currentVal4).show();
            return false;
        });
        $(".js-back-messages").click(function (){
            $(".back-messages, .mymessages-tabs-content").hide();
            $(".sidebar-message, .my-messages-title").show();
            return false;
        });
    }

    // 
    $(".js-by-vouchers, .js-5").click(function (){
        $(".title-bar .js-tabs li:nth-child(5) a").trigger('click');
        return false;
    });
    $(".js-changeEmail").click(function (){
        $(".title-bar .js-tabs li:nth-child(2) a").trigger('click');
        return false;
    });
    $(".js-trial").click(function (){
        $(".title-bar .js-tabs li:nth-child(3) a").trigger('click');
    });
    $(".js-message").click(function (){
        $(".title-bar .js-tabs li:nth-child(4) a").trigger('click');
    });
    

    $(".js-comment-link").click(function (){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).parents('.comment-ans-qus').removeClass('comment-active');
        }
        else{
            $(this).addClass('active');
            $(this).parents('.comment-ans-qus').addClass('comment-active');
        }
        return false;
    });


    $(".js-show-info").click(function (){
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).text('show info');
            $(this).parents('.special-article').removeClass('special-article-active');
        }
        else{
            $(this).addClass('active');
            $(this).text('less info');
            $(this).parents('.special-article').addClass('special-article-active');
        }
        return false;
    });



    // My Specialiist > Invite your exiting dummy submit form to show design only
    $(".js-dummy-click").click(function (){
        $(".invite-form-wrap").hide();
        $(".invite-sent-box").show();
        return false;
    });
    $(".js-dummy-showSections").click(function (){
        $("#invite-contains").show();
        return false;
    });

    // table more opton start
    $(".dots").click(function (){
        $(".dots-nav").hide();
        $(this).next(".dots-nav").fadeIn();
        return false;
    });
    $("body").click(function (){
        $(".dots-nav").fadeOut();
    });
    $(".dots-nav").click(function(e) {
        e.stopPropagation();
        return false;
    });
    $(".dots-nav a").click(function(e) {
        window.location.href = $(this).attr('href');
        return false;
    });
    // table more opton end

    // Grup add and remove
    $(".js-add-group").click(function (){
        $(".my-group-content").hide();
        $(".add-group-content").show();
        $('html, body').animate({scrollTop: '0px'}, 300);
        return false;
    });
    $(".js-create-group").click(function (){
        $(".add-group-content").hide();
        $(".grop-created-wrap").show();
        $('html, body').animate({scrollTop: '0px'}, 300);
        return false;
    });


    // show more module
    $(".js-view-module-check").click(function(e) {
        if( $(this).hasClass('active')){
            $(this).removeClass('active');
            $(".hide-check-module").slideUp();
            $(this).children('span').text('View');
        }
        else{
            $(this).addClass('active');
            $(".hide-check-module").slideDown();
            $(this).children('span').text('Less');
        }
        return false;
    });


});