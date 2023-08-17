$(window).ready(function () {
    $('.btmTel_item').eq(1).on('click',function(){
        $(".btmTel_pip").show();
    })
    $(".btmTel_pip_box a").on('click', function () {
        $(".btmTel_pip").hide();
    })
    $(".btmTel_pip").on('click', function () {
        $(".btmTel_pip").hide();
    })
    $(".btmTel_pip_box").on('click',function(){
        return false
    })
    // index - service
    $(".project-title").on('mousemove', function () {
        $(this).parents(".item-project-wrap").find(".porImg").stop(true, true).addClass("show")
    })
    $(".project-title").on('mouseleave', function () {
        $(".porImg").removeClass("show")
    });

    // header
    $(".headBg").on('click', function () {
        $("header").toggleClass('click');
        $("#main_nav").toggleClass("show")
        $("#main_nav").slideToggle();
    });
    $(".main_nav_ul li").hover(function () {
        $(this).find(".sub_list").slideDown();
    }, function () {
        $(this).find(".sub_list").slideUp();
    });
    // 咨询弹窗

    function Popup() {
        $(".consulta").fadeIn();
    }
    setTimeout(Popup, 30000);
    $(".ind_zb").click(function () {
        $(".consulta").fadeOut();
    })
    $(".ys_clock").click(function () {
        $(".consulta").fadeOut();
    })
    $(".caseTit .indBtns .btn").eq(0).click(function () {
        $(".consulta").fadeIn();
    })

    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            // 手机端
            $(window).scroll(function () {
                var top = $(window).scrollTop();
                if (top > 10) {
                    $('header').addClass("white").addClass("font");
                } else {
                    $('header').removeClass("white");

                }
            })



        } else {
            // PC端
            //  2020-04-02 s
            var scrollFunc = function (e) {
                var h = $(window).scrollTop(),
                    e = e || window.event,
                    isScroll = e.wheelDelta ? e.wheelDelta : -e.detail;

                if (h > 28) {
                    if ($("header").hasClass("font") && isScroll > 0) {
                        $('header').addClass("white").removeClass("hide");
                    } else {
                        $('header').removeClass("white").addClass("hide");

                    }
                } else {
                    $('header').removeClass("white");
                }
            };

            //给页面绑定滑轮滚动事件
            if (document.addEventListener) {
                document.addEventListener('DOMMouseScroll', scrollFunc, false);
            }
            //滚动滑轮触发scrollFunc方法
            window.onmousewheel = document.onmousewheel = scrollFunc;

            //  2020-04-02 e

        }
    }
    browserRedirect();



    // header bg-cursor 
    setInterval(function () {
        if ($('header').hasClass("white")) {
            $(".headBg_cursor").addClass("white")
        } else {
            $(".headBg_cursor").removeClass("white")
        }
    }, 200)
    // slide
    $(".ysUtil").addClass("on")
    $(".ysUtil").hover(function () {
        $("body").addClass("navHovered")
    }, function () {
        $("body").removeClass("navHovered")
    });
    $(".ysUtil_top").on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000, function () {
            isMove = false;
        });
    });
    // index - service
    if ($(window).width > 1025) {
        $(".project-title").on('mousemove', function () {
            $(this).parents(".item-project-wrap").find(".porImg").stop(true, true).addClass("show")
        })
        $(".item-project-wrap").on('mouseleave', function () {
            $(this).find(".porImg").removeClass("show")
        });
    }

    // index - footer
    $("body").on('click', function () {
        $(this).removeClass("color")
    });
    $(".conItem_form form>div").on('click', function () {
        $(this).addClass("color")
    });
    // inner - title -line
    if ($("div").hasClass("ysFirst")) {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 10) {
                $(".ysFirst").addClass("line")
            } else {
                $(".ysFirst").removeClass("line")
            }

        })
    }

})