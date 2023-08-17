
$winwidth = 0; $winheight = 0;

$(document).ready(function () {
    $winwidth = $(window).width();
    $winheight = $(window).height();
    ST = $(window).scrollTop();
    homebanner();
	cont();
    $(window).resize(function () {
        $winwidth = $(window).width();
        $winheight = $(window).height();
        homebanner();
        cont();
    });

     $('.ma_right ul li .a_list i').click(function(event) {
       $(this).toggleClass('cur');
       $(this).parents('li').find('div').slideToggle();
    });

    //微网站&移动开发
    if ($winwidth > 1660) {
        if ($('.mo_ban_con').length > 0) {
            var m1 = $('.mo_ban_con .moban_L');
            var m2 = $('.mo_ban_con .moban_R');
            var m3 = $('.mo_ban_con .img-04');
            var m4 = $('.mo_ban_con .img-03');
            TweenMax.set(m1, { x: 200, alpha: 0 });
            TweenMax.set(m2, { x: -200, alpha: 0 });
            TweenMax.set(m3, { x: -158, y: 18, alpha: 1 });
            TweenMax.set(m4, { x: -346, y: 54, alpha: 1 });

            TweenMax.to(m1, 1, { x: 0, alpha: 1, delay: 0.2 });
            TweenMax.to(m2, 1, { x: 0, alpha: 1, delay: 0.2, onComplete: function () {
                    TweenMax.to([m3, m4], 1, { x: 0, y: 0, alpha: 1, delay: 0.1 });
                }});
        }
    } else {

        if ($('.mo_ban_con').length > 0) {
            var m1 = $('.mo_ban_con .moban_L');
            var m2 = $('.mo_ban_con .moban_R');
            var m3 = $('.mo_ban_con .img-04');
            var m4 = $('.mo_ban_con .img-03');
            TweenMax.set(m1, { x: 200, alpha: 0 });
            TweenMax.set(m2, { x: -200, alpha: 0 });
            TweenMax.set(m3, { x: -130, y: 18, alpha: 1 });
            TweenMax.set(m4, { x: -285, y: 54, alpha: 1 });

            TweenMax.to(m1, 1, { x: 0, alpha: 1, delay: 0.2 });
            TweenMax.to(m2, 1, {
                x: 0, alpha: 1, delay: 0.2, onComplete: function () {
                    TweenMax.to([m3, m4], 1, { x: 0, y: 0, alpha: 1, delay: 0.1 });
                }
            });
        }

    }
    if ($('.web_ban').length > 0) {
        var m5 = $('.web_ban_l');
        var m6 = $('.web_ban_r');
        TweenMax.set(m5, { x: 200, alpha: 0 });
        TweenMax.set(m6, { x: -200, alpha: 0 });
        TweenMax.to(m5, 1, { x: 0, alpha: 1, delay: 0.2 });
        TweenMax.to(m6, 1, { x: 0, alpha: 1, delay: 0.2 });
    }

    if ($('.opera_ban').length > 0) {
        var m7 = $('.opera_ban div');
        var m8 = $('.opera_ban>img');
        TweenMax.set(m7, { y: 200, alpha: 0 });
        TweenMax.set(m8, { y: -200, alpha: 0 });
        TweenMax.to(m7, 1, { y: 0, alpha: 1, delay: 0.2 });
        TweenMax.to(m8, 1, { y: 0, alpha: 1, delay: 0.2 });
    }

    if ($('.des_ban').length > 0) {
        var m9 = $('.des_ban div');
        var m10 = $('.des_ban>img');
        TweenMax.set(m9, { y: 200, alpha: 0 });
        TweenMax.set(m10, { y: -200, alpha: 0 });
        TweenMax.to(m9, 1, { y: 0, alpha: 1, delay: 0.2 });
        TweenMax.to(m10, 1, { y: 0, alpha: 1, delay: 0.2 });
    }

    if ($('.cloud_ba').length > 0) {
        var m11 = $('.cloud_ba div');
        var m12 = $('.cloud_ba>ul');
        TweenMax.set(m11, { y: 200, alpha: 0 });
        TweenMax.set(m12, { y: -200, alpha: 0 });
        TweenMax.to(m11, 1, { y: 0, alpha: 1, delay: 0.2 });
        TweenMax.to(m12, 1, { y: 0, alpha: 1, delay: 0.2 });
    }

    if ($('.tel_ban_con').length > 0) {
        var m13 = $('.tel_ban_l');
        var m14 = $('.tel_ban_r');
        TweenMax.set(m13, { x: 200, alpha: 0 });
        TweenMax.set(m14, { x: -200, alpha: 0 });
        TweenMax.to(m13, 1, { x: 0, alpha: 1, delay: 0.2 });
        TweenMax.to(m14, 1, { x: 0, alpha: 1, delay: 0.2 });
    }

    $('.con_img').click(function (event) {
        $('.con_map').addClass('open')
    });
    $('.con_map .close1').click(function (event) {
        $('.con_map').removeClass('open')
    });

    // 新闻
    if ($('.news_sj').length > 0) {
        var swiperH = new Swiper('.swiper-container-h', {
            pagination: '.swiper-pagination-h',
            autoplay: 5000,
            speed: 1000,
            loop: true,
            paginationClickable: true,
        });
    }
    if ($('.inC_con_sj').length > 0) {
        var inC_con_sj = new Swiper('.inC_con_sj .swiper-container', {
            pagination: '.inC_con_sj .swiper-pagination',
            autoplay: 5000,
            speed: 1000,
            loop: true,
            paginationClickable: true,
        });
    }

    if ($('.webD_con_sj').length > 0) {
        var webD_con_sj = new Swiper('.webD_con_sj .swiper-container', {
            pagination: '.webD_con_sj .swiper-pagination',
            autoplay: 5000,
            speed: 1000,
            loop: true,
            paginationClickable: true,
        });
    }

    if ($('.desA_sj').length > 0) {
        var desA_sj = new Swiper('.desA_sj .swiper-container', {
            pagination: '.desA_sj .swiper-pagination',
            autoplay: 5000,
            speed: 1000,
            loop: true,
            paginationClickable: true,
        });
    }
    // 新闻结束
    if ($('.mobE_sj').length > 0) {
        var mobE_sj = new Swiper('.mobE_sj .swiper-container', {
            pagination: '.mobE_sj .swiper-pagination',
            slidesPerView:2,
            paginationClickable: true,
            spaceBetween:10
        });
    }

    $('.such_t_r').click(function (event) {
        $(this).toggleClass('cur');
        $('.such_t_con').slideToggle();
    });

    // 文本框
    $(':input').focus(function () {
        if ($(this).val() == this.defaultValue && $(this).val() != '提交需求') {
            $(this).val('');
        }
    }).blur(function () {
        if ($(this).val() == '') {
            $(this).val(this.defaultValue);
        }
    });
    // 文本框结束
    var h_height = $(window).height() - 102;
    $('.banner_con>span').click(function () {
        $('body,html').stop().animate({ 'scrollTop': h_height }, 500);
    });

    $('.inA_c_R li').each(function (index, el) {
        $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
    });

    
    if ($winwidth < 1200) {

            if ($('.sj_about').length > 0) {
            var Os = {
                        useEasing: true,
                        useGrouping: true,
                        separator: ',',
                        decimal: '.',
                        prefix: '',
                        suffix: ''
            };
            var demo4 = new CountUp("num4", 0, 50, 0, 2.5, Os);
            var demo5 = new CountUp("num5", 0, 10, 0, 2.5, Os);
            var demo6 = new CountUp("num6", 0, 2000, 0, 1, Os);
            demo4.start();
            demo5.start();
            demo6.start();
           }

           $(".inF_con li:gt(8)").hide();
    }

    
    // 右侧固定菜单
    var floatBool = false;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) {
            if (!floatBool) {
                $(".fixed").stop(false, true).fadeIn(500);
                floatBool = true;
            }
        } else {
            if (floatBool) {
                $(".fixed").stop(false, true).fadeOut(500);
                floatBool = false;
            }
        }
    });
    $(".fixedCode").mouseover(function () {
        $(".fixedCodeInfo").stop(false, true).fadeIn(500);
    }).mouseleave(function () {
        $(".fixedCodeInfo").stop(false, true).fadeOut(500);
    });
    $('.fixedTop').click(function () {
        $('body,html').stop().animate({ 'scrollTop': 0 }, 500);
    });
    $('#caselink').click(function () {
        d = { key: $(this).attr('d-val'), __RequestVerificationToken: $('[name="__RequestVerificationToken"]').val() };
        $.post('/api/caselike', d, function (res) {
            if (res.code === 'ok') {
                $('#caselink i').html('喜欢：' + res.num);
            }
        }, 'JSON');
    });
    $('.tel').blur(function () {
        obj = $(this);
        if (obj.val().length <= 0) {
            obj.css({'border':'1px #f00 solid'});
            layer.msg('请输入您的电话！'); return; }
        if (!vtel.test(obj.val())) {
            obj.css({ 'border': '1px #f00 solid' });
            layer.msg('电话格式错误！');
            return;
        }
        obj.removeAttr('style');
    })
    $('.un').blur(function () {
        obj = $(this);
        if (obj.val().length <= 0) {
            obj.css({ 'border': '1px #f00 solid' });
            layer.msg('请输入您的姓名！'); return;
        }
        obj.removeAttr('style');
    })
    $('.code').blur(function () {
        obj = $(this);
        if (obj.val().length <= 0) {
            obj.css({ 'border': '1px #f00 solid' });
            layer.msg('请输入验证码！'); return;
        }
        obj.removeAttr('style');
    })
    $('.btndemand').click(function () {
        obj = $(this).parents('.frmdemand');

        d = { un: obj.find('.un').val(), com: obj.find('.com').val(), tel: obj.find('.tel').val(), sub: obj.find('.sub').val(), con: obj.find('.con').val(), code: obj.find('.code').val(), __RequestVerificationToken: $('[name="__RequestVerificationToken"]').val() };
        if (d.un.length === 0) { obj.find('.un').css({ 'border': '1px #f00 solid' }); layer.msg('请输入您的姓名！'); return; }
        if (d.tel.length <= 0) { obj.find('.tel').css({ 'border': '1px #f00 solid' }); layer.msg('请输入您的电话！'); return; }
        if (d.code.length <= 0) { obj.find('.code').css({ 'border': '1px #f00 solid' }); layer.msg('请输入验证码！'); return; }

        $.post('/ajax/demand', d, function (res) {
            if (res.code === 'ok') {
                obj.find(':text').val('');
                obj.find('.con').val('');
                layer.msg('您的需求已经提交，我们会尽快与您处理，感谢您的关注！');
            } else {
                layer.msg(res.msg);
            }
        }, 'JSON');
    });
    $('.dbtn').click(function () {
        obj = $(this).parents('.frmprice');
        d = { un: obj.find('.dun').val(), tel: obj.find('.dtel').val(), email: obj.find('.demail').val(), __RequestVerificationToken: $('[name="__RequestVerificationToken"]').val() };
        if (d.un.length === 0) { obj.find('.dun').focus(); layer.msg('请输入您的称呼！'); return; }
        if (d.tel.length === 0) { obj.find('.dtel').focus(); layer.msg('请输入您的电话！'); return; }

        $.ajax({
            url: '/ajax/contact',
            type: 'POST',
            data: d,
            dataType: 'json',
            success: function (res) {
                if (res.code === 'ok') {
                    $(':text').val('');
                    layer.msg('您的信息已经提交，我们会尽快与您取得联系！');
                } else {
                    layer.msg(res.msg);
                }
            },
            error: function (e) {
                layer.msg(e.statusText);
            }
        });
    });
    $('#btntelask').click(function () {
        d = { tel: $('#telask').val(),  __RequestVerificationToken: $('[name="__RequestVerificationToken"]').val() };
        if (d.tel.length === 0) { $('#telask').focus(); layer.msg('请输入您的电话号码！'); return; }

        $.ajax({
            url: '/ajax/telask',
            type: 'POST',
            data: d,
            dataType: 'json',
            success: function (res) {
                if (res.code === 'ok') {
                    $(':text').val('');
                    layer.msg('客服尽快与您取得联系！');
                } else {
                    layer.msg(res.msg);
                }
            },
            error: function (e) {
                layer.msg(e.statusText);
            }
        });
    });
    $(".skey").keypress(function (e) {
        if (e.keyCode === 13) {
            key = $(this).val();
            if (key.length > 0) {
                location.href = '/search?key=' + key;
            }
        }
    });
});
vtel = /^\d{3,4}-\d{7,8}$|^\d{3,4} \d{7,8}$|^\d{7,8}$|^[1]\d{10}$/;
function homebanner() {
    // banner
    if ($winwidth > 1200) {
        $('.banner').height($winheight - $('.header').height());
        // 搜索
        $('.search').click(function (event) {
            $('.sear_con').addClass('cur')
            $('.he_r ul li a').addClass('cur');
        });
        $('.sear_con>p').click(function (event) {
            $('.sear_con').removeClass('cur');
            $('.he_r ul li a').removeClass('cur')
        });
        $('.menu').click(function (event) {
            $('.top').slideDown().find('.formList_right .yzm img').trigger('click');
            $('.main').removeClass('left');
            $('.header').removeClass('left');
            $('.ma_right').removeClass('show');
        });
        $('.top>i').click(function (event) {
            $('.top').slideUp();
        });
        var pc_operaC_con = new Swiper('.pc_operaC_con .swiper-container', {
            pagination: '.pc_operaC_con .swiper-pagination',
            slidesPerView: 5,
            autoplay: 5000,
            loop: true,
            speed: 1000,
            grabCursor: true,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
        });
    } else {
        $('.banner').css({ 'height': 'auto' });
        $('.menu').click(function (event) {
            $('.main').addClass('left');
            $('.header').addClass('left');
            $('.ma_right').addClass('show');
        });
        $('.top-box .fr').click(function (event) {
            $('.main').removeClass('left');
            $('.header').removeClass('left');
            $('.ma_right').removeClass('show');
        });
        $('.top-box .fl').click(function (event) {
            $('.ma_right').removeClass('show');
            $('.main').removeClass('left');
            $('.header').removeClass('left');
            $('.ma_search').show();
        });
        $('.ma_search .close').click(function (event) {
            $('.ma_search').hide();
        });

        var pc_operaC_conm = new Swiper('.pc_operaC_con .swiper-container', {
            pagination: '.pc_operaC_con .swiper-pagination',
            slidesPerView: 2,
            autoplay: 5000,
            loop: true,
            speed: 1000,
            grabCursor: true,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
        });
    }
    if ($('.banner').length > 0) {
        //$('.banner_con .swiper-slide').eq(0).attr('data-swiper-autoplay','10000');//第一个banner停留时间
        var swiper = new Swiper('.banner_con .swiper-container', {
            pagination: '.banner_con .swiper-pagination',
            // loop: true,
            autoplay:3000,
            speed: 1000,
            grabCursor: true,
            paginationClickable: true,
            autoplayDisableOnInteraction: false,
            onInit: function (swiper) { //Swiper2.x的初始化是onFirstInit
                swiperAnimateCache(swiper); //隐藏动画元素
                swiperAnimate(swiper); //初始化完成开始动画
            },
            onSlideChangeEnd: function (swiper) {
                swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
            }
        })
    }
    $('.lay_huoqu').click(function(event) {
        $('.lay_fix').show();
    });

    $('.lay_fix dl dt em').click(function(event) {
        $(this).parents('.lay_fix').hide();
    });

    $('.fix_a_tel').click(function(event) {
        $('.lay_tel').show();
    });
    $('.lay_tel dl dt').click(function(event) {
        $('.lay_tel').hide();
    });
       
}

cont();

function cont() {
$winwidth = $(window).width();
$winheight = $(window).height();
    if ($('.ban_right').length > 0) {
        var options = {
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.',
            prefix: '',
            suffix: ''
        };
        var demo = new CountUp("num1", 0, 50, 0, 2.5, options);
        var demo2 = new CountUp("num2", 0, 10, 0, 2.5, options);
        var demo3 = new CountUp("num3", 0, 2000, 0, 1, options);
        if ($winwidth > 1200) {
            $(window).scroll(function () {
                ST = $(window).scrollTop();
                $winheight = $(window).height();
                if (ST >= 40) {
                    $('.ban_right ul').addClass('active');
                    demo.start();
                    demo2.start();
                    demo3.start();
                } else {
                    $('.ban_right ul').removeClass('active');
                }
            });
        } else {
            demo.start();
            demo2.start();
            demo3.start();
        }
    }

    if ($winwidth > 1200) {
        $('.aboutB_con li').each(function (index, el) {
            $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
        });
        $('.ser_ba_en li').each(function (index, el) {
            $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
        });
        $('.webA ul li').each(function (index, el) {
            $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
        });
        $('.mobA dl').each(function (index, el) {
            $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
        });
        $('.cloudC_con li').each(function (index, el) {
            $(this).css({ "transition": "700ms " + (index * 200 + 300) + "ms" });
        });
        $('.ab_banA').addClass('tranShow');
        $('.ab_banA>img').addClass('tranShow');
        $('.ser_ba_top').addClass('tranShow');
        $('.ser_ba_en li').addClass('tranShow');
        $('.ab_banA').addClass('tranShow');
        $('.ab_banA>img').addClass('tranShow');
        $(window).scroll(function () {
            ST = $(window).scrollTop();
            $winheight = $(window).height();
            
            if ($('.inA_con_a').length > 0) {
                if (ST > $('.inA_con_a').offset().top - $winheight * 0.7) {
                    $('.inA_con_a .inA_con_L').addClass('XtranShow');
                    $('.inA_con_a .inA_c_R li').addClass('tranShow');
                } else {
                    $('.inA_con_a .inA_con_L').removeClass('XtranShow');
                    $('.inA_con_a .inA_c_R li').removeClass('tranShow');
                }
            }
            if ($('.inA_con_b').length > 0) {
                if (ST > $('.inA_con_b').offset().top - $winheight * 0.7) {
                    $('.inA_con_b .inA_con_L').addClass('XtranShow');
                    $('.inA_con_b .inA_c_R li').addClass('tranShow');
                } else {
                    $('.inA_con_b .inA_con_L').removeClass('XtranShow');
                    $('.inA_con_b .inA_c_R li').removeClass('tranShow');
                }
            }
            if ($('.inB').length > 0) {
                if (ST > $('.inB').offset().top - $winheight * 0.7) {
                    $('.inB').addClass('XtranShow');
                    setTimeout(function () {
                        $('.inB_R').addClass('tranShow');
                    }, 500)
                } else {
                    $('.inB').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.inB_R').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.inC').length > 0) {
                if (ST > $('.inC').offset().top - $winheight * 0.7) {
                    $('.inC .title').addClass('tranShow');
                    setTimeout(function () {
                        $('.inC_con').addClass('tranShow');
                    }, 500)
                } else {
                    $('.inC .title').removeClass('tranShow');
                    setTimeout(function () {
                        $('.inC_con').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.inD').length > 0) {
                if (ST > $('.inD').offset().top - $winheight * 0.7) {
                    $('.inD .title').addClass('tranShow');
                    setTimeout(function () {
                        $('.inD_con').addClass('tranShow');
                    }, 500)
                } else {
                    $('.inD .title').removeClass('tranShow');
                    setTimeout(function () {
                        $('.inD_con').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.inE').length > 0) {
                if (ST > $('.inE').offset().top - $winheight * 0.7) {
                    $('.inE').addClass('XtranShow');
                    setTimeout(function () {
                        $('.inE dl').addClass('XtranShow');
                    }, 500)
                } else {
                    $('.inE').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.inE dl').removeClass('XtranShow');
                    }, 500)
                }
            }
            if ($('.inF').length > 0) {
                if (ST > $('.inF').offset().top - $winheight * 0.7) {
                    $('.inF .title').addClass('tranShow');
                    setTimeout(function () {
                        $('.inF_con').addClass('tranShow');
                    }, 500)
                } else {
                    $('.inF').removeClass('tranShow');
                    setTimeout(function () {
                        $('.inF_con').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.contactA_B').length > 0) {
                if (ST > $('.contactA_B').offset().top - $winheight * 0.7) {
                    $('.contactA_B').addClass('tranShow');
                } else {
                    $('.contactA_B').removeClass('tranShow');

                }
            }
            if ($('.contactB_l').length > 0) {
                if (ST > $('.contactB_l').offset().top - $winheight * 0.7) {
                    $('.contactB_l').addClass('tranShow');
                    setTimeout(function () {
                        $('.contactB_R').addClass('tranShow');
                    }, 500)
                } else {
                    $('.contactB_l').removeClass('tranShow');
                    setTimeout(function () {
                        $('.contactB_R').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.aboutA_one').length > 0) {
                if (ST > $('.aboutA_one').offset().top - $winheight * 0.7) {
                    $('.aboutA_one>p').addClass('tranShow');
                    setTimeout(function () {
                        $('.aboutA_one .aboutA_R').addClass('tranShow');
                    }, 500)
                } else {
                    $('.aboutA_one>p').removeClass('tranShow');
                    setTimeout(function () {
                        $('.aboutA_one .aboutA_R').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.aboutB').length > 0) {
                if (ST > $('.aboutB').offset().top - $winheight * 0.7) {
                    $('.aboutB').addClass('XtranShow');
                    setTimeout(function () {
                        $('.aboutB_con li').addClass('tranShow');
                    }, 500); setTimeout(function () {
                        $('.aboutB dl').addClass('tranShow');
                    }, 500)
                } else {
                    $('.aboutB').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.aboutB_con li').removeClass('tranShow');
                    }, 500); setTimeout(function () {
                        $('.aboutB dl').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.aboutC').length > 0) {
                if (ST > $('.aboutC').offset().top - $winheight * 0.7) {
                    $('.aboutC .aboutA_R').addClass('tranShow');
                    setTimeout(function () {
                        $('.aboutC>p').addClass('tranShow');
                    }, 500)
                } else {
                    $('.aboutC .aboutA_R').removeClass('tranShow');
                    setTimeout(function () {
                        $('.aboutC>p').removeClass('tranShow');
                    }, 500)
                }
            }
            if ($('.aboutD').length > 0) {
                if (ST > $('.aboutD').offset().top - $winheight * 0.7) {
                    $('.aboutD').addClass('XtranShow');
                    setTimeout(function () {
                        $('.aboutD_con').addClass('tranShow');
                    }, 500)
                } else {
                    $('.aboutD').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.aboutD_con').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.ser1').length > 0) {
                if (ST > $('.ser1').offset().top - $winheight * 0.8) {
                    $('.ser1').addClass('tranShow');

                } else {
                    $('.ser1').removeClass('tranShow');
                }
            }
            if ($('.ser2').length > 0) {
                if (ST > $('.ser2').offset().top - $winheight * 0.8) {
                    $('.ser2').addClass('tranShow');

                } else {
                    $('.ser2').removeClass('tranShow');
                }
            }
            if ($('.ser3').length > 0) {
                if (ST > $('.ser3').offset().top - $winheight * 0.8) {
                    $('.ser3').addClass('tranShow');

                } else {
                    $('.ser3').removeClass('tranShow');
                }
            }
            if ($('.ser4').length > 0) {
                if (ST > $('.ser4').offset().top - $winheight * 0.8) {
                    $('.ser4').addClass('tranShow');

                } else {
                    $('.ser4').removeClass('tranShow');
                }
            }
            if ($('.ser5').length > 0) {
                if (ST > $('.ser5').offset().top - $winheight * 0.8) {
                    $('.ser5').addClass('tranShow');

                } else {
                    $('.ser5').removeClass('tranShow');
                }
            }

            if ($('.webA').length > 0) {
                if (ST > $('.webA').offset().top - $winheight * 0.7) {
                    $('.webA .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.webA ul li').addClass('tranShow');
                    }, 500)
                } else {
                    $('.webA .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.webA ul li').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.webB').length > 0) {
                if (ST > $('.webB').offset().top - $winheight * 0.7) {
                    $('.webB .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.webB .webB_con').addClass('tranShow');
                    }, 500)
                } else {
                    $('.webB .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.webB .webB_con').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.webC').length > 0) {
                if (ST > $('.webC').offset().top - $winheight * 0.8) {
                    $('.webC').addClass('tranShow');

                } else {
                    $('.webC').removeClass('tranShow');
                }
            }

            if ($('.webD').length > 0) {
                if (ST > $('.webD').offset().top - $winheight * 0.7) {
                    $('.webD .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.webD ul').addClass('tranShow');
                    }, 500)
                } else {
                    $('.webD .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.webD ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.webE').length > 0) {
                if (ST > $('.webE').offset().top - $winheight * 0.7) {
                    $('.webE .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.webE ul').addClass('tranShow');
                    }, 500)
                } else {
                    $('.webE .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.webE ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.mobA').length > 0) {
                if (ST > $('.mobA').offset().top - $winheight * 0.7) {
                    $('.mobA dl').addClass('tranShow');

                } else {
                    $('.mobA dl').removeClass('tranShow');
                }
            }

            if ($('.mobB').length > 0) {
                if (ST > $('.mobB').offset().top - $winheight * 0.8) {
                    $('.mobB').addClass('tranShow');

                } else {
                    $('.mobB').removeClass('tranShow');
                }
            }


            if ($('.mobC').length > 0) {
                if (ST > $('.mobC').offset().top - $winheight * 0.8) {
                    $('.mobC').addClass('tranShow');
                    setTimeout(function () {
                        $('.mobC_R').addClass('tranShow');
                    }, 500)

                } else {
                    $('.mobC').removeClass('tranShow');
                    setTimeout(function () {
                        $('.mobC_R').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.mobD').length > 0) {
                if (ST > $('.mobD').offset().top - $winheight * 0.8) {
                    $('.mobD .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.mobD_con').addClass('tranShow');
                        $('.mobD>p img').addClass('tranShow');
                    }, 500)

                } else {
                    $('.mobD .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.mobD_con').removeClass('tranShow');
                        $('.mobD>p img').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.mobE').length > 0) {
                if (ST > $('.mobE').offset().top - $winheight * 0.8) {
                    $('.mobE .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.mobE ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.mobE .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.mobE ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.mobF').length > 0) {
                if (ST > $('.mobF').offset().top - $winheight * 0.8) {
                    $('.mobF .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.mobF ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.mobF .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.mobF ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.operaA').length > 0) {
                if (ST > $('.operaA').offset().top - $winheight * 0.8) {
                    $('.operaA_L').addClass('tranShow');
                    setTimeout(function () {
                        $('.operaA_R').addClass('tranShow');
                    }, 500)

                } else {
                    $('.operaA_L').removeClass('tranShow');
                    setTimeout(function () {
                        $('.operaA_R').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.operaB').length > 0) {
                if (ST > $('.operaB').offset().top - $winheight * 0.8) {
                    $('.operaB .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.operaB_bo').addClass('tranShow');
                    }, 500)

                } else {
                    $('.operaB .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.operaB_bo').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.operaC').length > 0) {
                if (ST > $('.operaC').offset().top - $winheight * 0.8) {
                    $('.operaC .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.operaC_con').addClass('tranShow');
                    }, 500)

                } else {
                    $('.operaC .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.operaC_con').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.operaD').length > 0) {
                if (ST > $('.operaD').offset().top - $winheight * 0.8) {
                    $('.operaD .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.operaD ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.operaD .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.operaD ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.desA').length > 0) {
                if (ST > $('.desA').offset().top - $winheight * 0.8) {
                    $('.desA .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.desA ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.desA .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.desA ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.desB').length > 0) {
                if (ST > $('.desB').offset().top - $winheight * 0.8) {
                    $('.desB').addClass('tranShow');

                } else {
                    $('.desB').removeClass('tranShow');
                }
            }

            if ($('.desC').length > 0) {
                if (ST > $('.desC').offset().top - $winheight * 0.8) {
                    $('.desC').addClass('tranShow');

                } else {
                    $('.desC').removeClass('tranShow');
                }
            }

            if ($('.cloudD').length > 0) {
                if (ST > $('.cloudD').offset().top - $winheight * 0.8) {
                    $('.cloudD .c_tit').addClass('tranShow');
                    setTimeout(function () {
                        $('.cloudD ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.cloudD .c_tit').removeClass('tranShow');
                    setTimeout(function () {
                        $('.cloudD ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.cloudE').length > 0) {
                if (ST > $('.cloudE').offset().top - $winheight * 0.8) {
                    $('.cloudE').addClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudE div').addClass('tranShow');
                    }, 500)

                } else {
                    $('.cloudE').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudE div').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.cloudA').length > 0) {
                if (ST > $('.cloudA').offset().top - $winheight * 0.8) {
                    $('.cloudA .c_tit').addClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudA ul').addClass('tranShow');
                    }, 500)

                } else {
                    $('.cloudA .c_tit').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudA ul').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.cloudB').length > 0) {
                if (ST > $('.cloudB').offset().top - $winheight * 0.8) {
                    $('.cloudB').addClass('tranShow');

                } else {
                    $('.cloudB').removeClass('tranShow');
                }
            }

            if ($('.cloudC').length > 0) {
                if (ST > $('.cloudC').offset().top - $winheight * 0.8) {
                    $('.cloudC .c_tit').addClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudC_con li').addClass('tranShow');
                    }, 500)

                } else {
                    $('.cloudC .c_tit').removeClass('XtranShow');
                    setTimeout(function () {
                        $('.cloudC_con li').removeClass('tranShow');
                    }, 500)
                }
            }

            if ($('.footer').length > 0) {
                if (ST > $('.footer').offset().top - $winheight * 0.7) {
                    $('.fo_top dl dt').addClass('tranShow');
                    $('.fo_t_R').addClass('tranShow');
                    setTimeout(function () {
                        $('.fo_top dl dd').addClass('tranShow');
                    }, 500)
                } else {
                    $('.fo_top dl dt').removeClass('tranShow');
                    $('.fo_t_R').removeClass('tranShow');
                    setTimeout(function () {
                        $('.fo_top dl dd').removeClass('tranShow');
                    }, 500)
                }
            }
        })
    }
}