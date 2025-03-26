$(document).ready(function () {
    $(".top-menu a").on("click", function (event) {
        event.stopPropagation(); // 他のイベントをブロック
    });
});
$(document).ready(function () {
    $(".top-icons").on("click", function (event) {
        event.stopPropagation(); // 他のイベントをブロック
    });
});$(document).ready(function () {
    $(".fullscreen-menu").on("click", function (event) {
        event.stopPropagation(); // 他のイベントをブロック
    });
});
$(document).ready(function () {
    $(".footer_container").on("click", function (event) {
        event.stopPropagation(); // 他のイベントをブロック
    });
});
$(document).ready(function () {

    $("menu-open-container").on("click", function (event) {
        event.stopPropagation(); // 他のイベントをブロック
    });
});
$(document).ready(function () {

    $(".top-square-button2, .detail, .faq_examples, .kyousan_image, .fukidashi-container, .swiper-wrapper").on("click", function (event) {

        event.stopPropagation(); // 他のイベントをブロック
    });
});
$(document).ready(function () {
    // 初回ロード時に `html, body` に width: 100%; height: 100%; を適用
    $("html, body").css({"width": "100%", "height": "100%"});

    // スマホ版では最初に `mojimoji h1` の `font-size` を 200px に設定
    if (window.innerWidth <= 1200) {
        $("html, body").css({"width": "100%", "height": "100dvh"});
        $(".mojimoji h1").css("font-size", "350px");
        $("html, body").css({"overflow": "hidden"});
        $("#change-text-button").on("click", function () {
                if (window.innerWidth <= 1000) {  
                    // スクロールを無効化
                    $(".scroll-container2, .scroll-container3").css({
                        "display": "none" // 完全に削除
                    });
        
                    // さらに誤作動を防ぐためのイベント無効化
                    $(".scroll-container2, .scroll-container3").on("touchstart touchmove click", function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    });
                }
        });
        
    }
    if (window.innerWidth <= 700) {
        $(".mojimoji h1").css("font-size", "200px");
    }
    // カスタムカーソルをスマホ版では非表示
    if (window.innerWidth > 1000) {
        $('body').append('<div class="custom-cursor">Tap</div>');
        
        let $cursor = $('.custom-cursor');

        // マウスが動いたときにカーソルを追従させる
        $(document).on('mousemove', function (e) {
            $cursor.css({
                top: e.clientY + 'px',
                left: e.clientX + 'px'
            });
        });

        // メニューやアイコン上でカスタムカーソルを非表示
        $('.top-loading, .top-menu, .top-icons, .next-section, .next-section, .additional-content2, .additionalcontent3, footer, .additional-content').on('mouseenter', function () {
            $cursor.css('display', 'none');
            $('body').css('cursor', 'auto');
        }).on('mouseleave', function () {
            $cursor.css('display', 'flex');
            $('body').css('cursor', 'none');
        }); 
    } else {
        // スマホ版では通常のカーソル
        $('body').css('cursor', 'auto');
    }

    let tapCount = 0;
    let lastTapTime = 0;
    const tapThreshold = 1000; // 1秒以内に3回タップ
    const fadeDuration = 500; // フェードアウト時間
    const resizeInitialDuration = 500;
    const resizeFinalDuration = 300;
    let isHidden = false;

    function handleTap() {
        let now = new Date().getTime();

        if (now - lastTapTime > tapThreshold) {
            tapCount = 0;
        }

        tapCount++;
        lastTapTime = now;

        let scrollPosition = $(window).scrollTop();
        let nextSectionTop = $(".next-section").offset().top;

        if (scrollPosition >= nextSectionTop) {
            return;
        }

        if (tapCount === 1) {
            if (!isHidden) {
                $(".mojimoji h1").css({
                    "transition": `font-size ${resizeInitialDuration}ms ease-in-out`,
                    "font-size": "100px"
                });

                setTimeout(() => {
                    $(".mojimoji h1").css({
                        "transition": `font-size ${resizeFinalDuration}ms ease-in-out`,
                        "font-size": "1000px"
                    });

                    setTimeout(() => {
                        $(".top_first h1, .scroll-container2, .scroll-container3, .top-menu, .top_matsuri_btn, .top_btn, .top-icons").css({
                            "opacity": "0",
                            "transition": `opacity ${fadeDuration}ms ease-in-out`,
                        });
                        if (window.innerWidth <= 1000) {$(".scroll-container2, .scroll-container3").css({
                            "display": "none" // 完全に削除
                        });
                    }
                        $(".mojimoji h1").css({
                            "display": "none" // 完全に削除,
                        });
                        $(".scroll-container2, .scroll-container3").css({
                            "display": "none" // 完全に削除,
                        });
                        $(".top-menu").css({
                            "display": "none" // 完全に削除,
                        });
                        $(".top-icons").css({
                            "display": "none" // 完全に削除,
                        });
                        $(".top_first").css({
                            "-webkit-background-clip": "unset",
                            "background-clip": "unset",
                            "transition": `opacity ${fadeDuration}ms ease-in-out`
                        });

                        $(".background").css({
                            "opacity": "0",
                            "transition": `opacity ${fadeDuration}ms ease-in-out`
                        });

                        // タップ後に `html, body` の width, height を削除
                        $("html, body").css({ "height": ""});
                        if (window.innerWidth <= 1000) {
                            $("html, body").css({"overflow": "visible"});
                            $("top_first").css({"overflow-x": "hidden"});

                        }
                        setTimeout(() => {
                            $(".header").css({
                                "display": "block",  // `display: none;` を解除
                                "opacity": "1",
                                "transition": `opacity ${fadeDuration}ms ease-in-out`
                            });
                        }, fadeDuration);
                    }, 200);

                    setTimeout(() => {
                        $(".sentence").css({
                            "opacity": "1",
                            "transition": `opacity 2s ease-in-out`,
                            "overflow": "auto"
                        });

                    }, fadeDuration + 500);

                }, resizeInitialDuration);

                isHidden = true;
            } else {
                // $(".sentence").css({
                //     "opacity": "0",
                //     "transition": `opacity 2s ease-in-out`,
                //     "overflow": "hidden"
                // });
                // $(".mojimoji h1").css({
                //     "display": "block" // 完全に削除,
                // });
                setTimeout(() => {
                    // $(".background").css({
                    //     "opacity": "1",
                    //     "transition": `opacity ${fadeDuration}ms ease-in-out`
                    // });

                    // $(".top_first h1, .scroll-container2, .scroll-container3, .top-menu, .top-icons").css({
                    //     "opacity": "1",
                    //     "transition": `opacity ${fadeDuration}ms ease-in-out`
                    // });

                    // $(".top_first").css({
                    //     "-webkit-background-clip": "text",
                    //     "background-clip": "text",
                    //     "transition": `opacity ${fadeDuration}ms ease-in-out`
                    // });

                    // $(".mojimoji h1").css({
                    //     "transition": `font-size ${resizeFinalDuration}ms ease-in-out`,
                    //     "font-size": "600px"
                    // });

                    // タップ後に `html, body` の width, height を再設定（元に戻す）
                    // $("html, body").css({"width": "100%", "height": "100%"});

                    isHidden = false;
                }, fadeDuration);
            }

            tapCount = 0;
        }
    }

    // スマホ版では `top_matsuri_btn` のクリックでトリガーし、ボタンを完全に非表示
    if (window.innerWidth <= 1000) {
        $("#change-text-button").on("click", function (event) {
            event.preventDefault();
            $(this).fadeOut(100, function () {
                $(this).css("display", "none"); // 完全に非表示
            });
            handleTap();
        });
    } else {
        // PC版ではタップでトリガー
        $(document).on("touchstart click", function (event) {
            event.preventDefault();
            handleTap();
        });
    }
});
$(document).ready(function () {
    function restoreScreen() {
        let fadeDuration = 500; // 透明度の変更時間
        let resizeFinalDuration = 300; // サイズ変更時間

        $(".background").css({
            "opacity": "1",
            "transition": `opacity ${fadeDuration}ms ease-in-out`
        });

        $(".top_first h1, .scroll-container2, .scroll-container3, .top-menu, .top-icons").css({
            "opacity": "1",
            "transition": `opacity ${fadeDuration}ms ease-in-out`
        });

        $(".top_first").css({
            "-webkit-background-clip": "text",
            "background-clip": "text",
            "transition": `opacity ${fadeDuration}ms ease-in-out`
        });

        $(".mojimoji h1").css({
            "transition": `font-size ${resizeFinalDuration}ms ease-in-out`,
            "font-size": "600px"
        });

        // タップ後に `html, body` の width, height を再設定（元に戻す）
        $("html, body").css({"width": "100%", "height": "100%"});
    }

    // 「画面を元に戻す」ボタンを押したときに実行
    $("#restore-screen-button").on("click", function () {
        restoreScreen();
    });

    // 2回目のタップで実行されないようにする
    let isHidden = false;

    function handleTap() {
        if (!isHidden) {
            $(".mojimoji h1").css({
                "transition": "font-size 500ms ease-in-out",
                "font-size": "100px"
            });

            setTimeout(() => {
                $(".mojimoji h1").css({
                    "transition": "font-size 300ms ease-in-out",
                    "font-size": "1000px"
                });

                setTimeout(() => {
                    $(".top_first h1, .scroll-container2, .scroll-container3, .top-menu, .top_matsuri_btn, .top_btn, .top-icons").css({
                        "opacity": "0",
                        "transition": `opacity ${fadeDuration}ms ease-in-out`
                    });

                    $(".background").css({
                        "opacity": "0",
                        "transition": `opacity ${fadeDuration}ms ease-in-out`
                    });

                    $("html, body").css({ "height": "" });

                }, 200);

                setTimeout(() => {
                    $(".sentence").css({
                        "opacity": "1",
                        "transition": `opacity 2s ease-in-out`,
                        "overflow": "auto"
                    });
                

                }, fadeDuration + 500);
                

            }, 500);

            isHidden = true;
        }
    }

    $("#change-text-button").on("click", function (event) {
        event.preventDefault();
        $(this).fadeOut(100, function () {
            $(this).css("display", "none");
        });
        handleTap();
    });
});
$(document).ready(function () {
    // カスタムカーソルを無効化する関数
    function disableCustomCursor() {
        $(".custom-cursor").remove(); // カスタムカーソルを削除
        $("body").css("cursor", "auto"); // 通常のカーソルに戻す
        $(document).off("mousemove"); // カスタムカーソルの動作を無効化
    }

    // タップ後にカスタムカーソルを無効化
    $(document).on("click touchstart", function () {
        disableCustomCursor();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let isMobile = window.innerWidth <= 768;

    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 6000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        slidesPerView: 5, // スマホでは1つのみ
        centeredSlides: true,
        spaceBetween: 30,
        effect: "slide",
        speed: 500,
    });

    // スマホ版でボタンが機能するように明示的にクリックイベントを設定
    document.querySelector('.swiper-button-next').addEventListener('click', function () {
        swiper.slideNext();
    });

    document.querySelector('.swiper-button-prev').addEventListener('click', function () {
        swiper.slidePrev();
    });
});

