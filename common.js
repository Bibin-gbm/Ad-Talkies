"use strict";
$(document).ready(function() {
  function e() {
    $(".subscribe-form")[0].reset(), i(!0, "Excellent! Check your email."), setTimeout(function() {
      $("#validator-subscribe").addClass("hide")
    }, 4e3)
  }

  function t() {
    $(".subscribe-form").addClass("animated shake"), setTimeout(function() {
      $(".subscribe-form").removeClass("animated shake")
    }, 1e3)
  }

  function i(e, t) {
    if (e) i = "validation-success";
    else var i = "validation-danger";
    $("#validator-subscribe").removeClass().addClass(i).text(t)
  }

  function a() {
    var e = $("#firstName").val(),
      t = $("#lastName").val(),
      i = $("#email").val(),
      a = $("#phone").val(),
      r = $("#message").val();
    $.ajax({
      type: "POST",
      url: "php/form-contact.php",
      data: "firstName=" + e + "&lastName=" + t + "&email=" + i + "&phone=" + a + "&message=" + r,
      success: function(e) {
        "success" == e ? o() : (n(), s(!1, e))
      }
    })
  }

  function o() {
    $("#contact-form")[0].reset(), s(!0, "Congratulations! Message Submitted!")
  }

  function n() {
    $("#contact-form").removeClass().addClass("animated shake").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function() {
      $(this).removeClass()
    })
  }

  function s(e, t) {
    if (e) i = "validation-success";
    else var i = "validation-danger";
    $("#validator-contact").removeClass().addClass(i).text(t)
  }
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? $("html").addClass("touch") : $("html").addClass("no-touch"), $("body").imagesLoaded({
    background: !0
  }).always(function(e) {
    setTimeout(function() {
      $(".loading").addClass("bounceOutRight")
    }, 2e3)
  }), $(".hamburger").on("click", function() {
    $(this).toggleClass("is_active"), $("body").toggleClass("menu__open")
  }), $(document).keyup(function(e) {
    27 === e.keyCode && $(".menu__open .hamburger").click()
  }), $("#open-overlay-nav").on("click", function() {
    $("body").toggleClass("show-overlay-nav")
  }), $(".dl-menu__wrap").dlmenu({
    animationClasses: {
      classin: "dl-animate-in-3",
      classout: "dl-animate-out-3"
    }
  });
  var r = $(".top:not(.navbar-fixed)");
  $(".top").affix({
    offset: {
      top: 1
    }
  }), $(".top").on("affix.bs.affix", function() {
    r.hasClass("affix") || r.addClass("animated slideInDown")
  }), $(".top").on("affix-top.bs.affix", function() {
    r.removeClass("animated slideInDown")
  }), $('.navbar-nav li a[href="#"]').on("click", function() {
    return $(this).closest("li").toggleClass("current"), $(this).closest("li").children("ul").slideToggle(400), !1
  }), $(".filter-categories__item").on("click", function() {
    $(this).addClass("filter-categories__item_current"), $(this).siblings().removeClass("filter-categories__item_current")
  }), $("#open-popup").on("click", function() {
    $("body").toggleClass("show-popup")
  }), $("#close-popup").on("click", function() {
    $("body").removeClass("show-popup")
  }), $(document).keyup(function(e) {
    27 === e.keyCode && $("#close-popup").click()
  }), $(".input").focus(function() {
    $(this).parent().addClass("is-completed")
  }), $(".input").focusout(function() {
    "" === $(this).val() && $(this).parent().removeClass("is-completed")
  });
  var l = function(e) {
    this.$video = $(e), this.$wrapper = $(e).parent().addClass("paused"), this.$controls = this.$wrapper.find(".video-controls"), this.$video.removeAttr("controls"), this.$video.attr("autoplay") && this.$wrapper.removeClass("paused").addClass("playing"), "true" !== this.$video.attr("muted") && 0 !== this.$video[0].volume || (this.$video[0].muted = !0, this.$wrapper.addClass("muted")), this.attachEvents()
  };
  l.prototype.attachEvents = function() {
    var e, t = this;
    this.$wrapper.on("click", "[data-media]", function() {
      var e = $(this).data("media");
      "play-pause" === e && t.playPause(), "mute-unmute" === e && t.muteUnmute()
    }), this.$video.on("click", function() {
      t.playPause()
    }), this.$video.on("play", function() {
      t.$wrapper.removeClass("paused").addClass("playing")
    }), this.$video.on("pause", function() {
      t.$wrapper.removeClass("playing").addClass("paused")
    }), this.$video.on("volumechange", function() {
      $(this)[0].muted ? t.$wrapper.addClass("muted") : t.$wrapper.removeClass("muted")
    }), this.$wrapper.on("mousemove", function() {
      t.$controls.addClass("video-controls_show"), clearTimeout(e), e = setTimeout(function() {
        t.$controls.removeClass("video-controls_show")
      }, 2250)
    }).on("mouseleave", function() {
      t.$controls.removeClass("video-controls_show")
    })
  }, l.prototype.playPause = function() {
    this.$video[0].paused ? this.$video[0].play() : this.$video[0].pause()
  }, l.prototype.muteUnmute = function() {
    !1 === this.$video[0].muted ? this.$video[0].muted = !0 : this.$video[0].muted = !1
  }, $(".video-hero").each(function() {
    new l(this)
  });
  var c = $(".grid-gallery__base").isotope({
    itemSelector: ".item__portfolio",
    layoutMode: "masonry",
    transitionDuration: "0.8s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    }
  });
  c.imagesLoaded().progress(function() {
    c.masonry()
  });
  var d = $(".grid-gallery__fixed").isotope({
    itemSelector: ".item__portfolio",
    percentPosition: !0,
    layoutMode: "masonry",
    transitionDuration: "0.8s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    },
    masonry: {
      gutter: 30,
      isFitWidth: !0
    }
  });
  d.imagesLoaded().progress(function() {
    d.masonry({
      gutter: 30,
      isFitWidth: !0
    })
  });
  var u = $(".grid-news").isotope({
    itemSelector: ".item-news",
    percentPosition: !0,
    layoutMode: "masonry",
    transitionDuration: "0.8s",
    hiddenStyle: {
      opacity: 0,
      transform: "scale(0.001)"
    },
    visibleStyle: {
      opacity: 1,
      transform: "scale(1)"
    },
    masonry: {
      gutter: 60,
      isFitWidth: !0
    }
  });
  u.imagesLoaded().progress(function() {
    u.masonry({
      gutter: 60,
      isFitWidth: !0
    })
  });
  new Swiper(".client-carousel", {
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    spaceBetween: 140,
    paginationClickable: !0,
    pagination: ".swiper-pagination",
    paginationType: "fraction",
    speed: 1e3,
    autoplay: 3e3,
    roundLengths: !0,
    parallax: !0,
    keyboardControl: !0,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      0: {
        spaceBetween: 15
      },
      580: {
        spaceBetween: 30
      },
      768: {
        spaceBetween: 60
      },
      900: {
        spaceBetween: 80
      },
      1200: {
        spaceBetween: 80
      },
      1800: {
        spaceBetween: 140
      }
    }
  }), new Swiper(".pricing-grid", {
    slidesPerView: 4,
    loop: !0,
    paginationClickable: !0,
    pagination: ".swiper-pagination",
    paginationType: "fraction",
    speed: 1e3,
    roundLengths: !0,
    parallax: !0,
    keyboardControl: !0,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      900: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 2
      },
      1600: {
        slidesPerView: 3
      },
      1800: {
        slidesPerView: 4
      }
    }
  }), new Swiper(".clients-logo", {
    slidesPerView: 4,
    loop: !0,
    paginationClickable: !0,
    pagination: ".swiper-pagination",
    paginationType: "fraction",
    speed: 1e3,
    roundLengths: !0,
    parallax: !0,
    keyboardControl: !0,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 1
      },
      900: {
        slidesPerView: 2
      },
      1100: {
        slidesPerView: 2
      },
      1600: {
        slidesPerView: 3
      },
      1800: {
        slidesPerView: 4
      }
    }
  }), new Swiper(".photo-carousel", {
    centeredSlides: !0,
    slidesPerView: "auto",
    loop: !0,
    spaceBetween: 200,
    paginationClickable: !0,
    pagination: ".swiper-pagination",
    paginationType: "fraction",
    speed: 1e3,
    autoplay: 3e3,
    mousewheelControl: !0,
    roundLengths: !0,
    parallax: !0,
    keyboardControl: !0,
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    breakpoints: {
      0: {
        spaceBetween: 15
      },
      580: {
        spaceBetween: 30
      },
      768: {
        spaceBetween: 60
      },
      900: {
        spaceBetween: 80
      },
      1200: {
        spaceBetween: 100
      },
      1500: {
        spaceBetween: 160
      },
      1800: {
        spaceBetween: 200
      }
    }
  });
  $("textarea").each(function() {
    autosize(this)
  }), $('a[href^="!#"]').on("click", function(e) {
    e.preventDefault();
    var t = this.hash,
      i = $(t);
    $("html, body").stop().animate({
      scrollTop: i.offset().top
    }, 900, "swing", function() {
      window.location.hash = t
    })
  });
  var p = [];
  $(".grid-gallery").find("figure").each(function() {
    var e = $(this).find("a"),
      t = {
        src: e.attr("href"),
        w: e.data("width"),
        h: e.data("height"),
        title: e.data("caption")
      };
    p.push(t)
  }), $("a.link-photo").on("click", function(e) {
    e.preventDefault();
    var t = $(".pswp")[0],
      i = {
        index: $(this).parent("figure").index(),
        bgOpacity: 1,
        showHideOpacity: !0,
        history: !1
      };
    new PhotoSwipe(t, PhotoSwipeUI_Default, p, i).init()
  });
  skrollr.init({
    forceHeight: !1,
    mobileCheck: function() {
      return !1
    }
  });
  $("body").imagesLoaded({
    background: !0
  }).always(function(e) {
    setTimeout(function() {
      $(".section-counters").waypoint(function() {
        $(".counter__date").countimator()
      }, {
        offset: "86%"
      }), $(".os").waypoint(function() {
        $(this.element).addClass("animated")
      }, {
        offset: "100%"
      }), $(".effect-reveal").waypoint(function() {
        $(this.element).addClass("animated")
      }, {
        offset: "80%"
      }), $(".item__block-number").waypoint(function() {
        $(this.element).addClass("animated")
      }, {
        offset: "80%"
      }), $(".item__block-description .title").waypoint(function() {
        $(this.element).addClass("bounceInLeft animated")
      }, {
        offset: "80%"
      }), $(".reveal").waypoint(function() {
        $(this.element).addClass("animated")
      }, {
        offset: "60%"
      }), $(".item__block-image").waypoint(function() {
        $(this.element).addClass("animated")
      }, {
        offset: "50%"
      })
    }, 2e3)
  }), objectFitImages(), $(".subscribe-form").validator().on("submit", function(e) {
    e.isDefaultPrevented() ? (t(), i(!1, "Please fill in the form...")) : e.preventDefault()
  }), $(".subscribe-form").ajaxChimp({
    url: "http://netgon.us13.list-manage.com/subscribe/post?u=b3954a95f1a55ffe65dd25050&amp;id=50b6fd13c3",
    callback: function(i) {
      "success" === i.result ? e() : t()
    }
  }), $("#contact-form").validator().on("submit", function(e) {
    e.isDefaultPrevented() ? (n(), s(!1, "Please fill in the form...")) : (e.preventDefault(), a())
  })


  !function(d){var c="portfilter";var b=function(e){this.$element=d(e);this.stuff=d("[data-tag]");this.target=this.$element.data("target")||""};b.prototype.filter=function(g){var e=[],f=this.target;this.stuff.fadeOut("fast").promise().done(function(){d(this).each(function(){if(d(this).data("tag")==f||f=="all"){e.push(this)}});d(e).show()})};var a=d.fn[c];d.fn[c]=function(e){return this.each(function(){var g=d(this),f=g.data(c);if(!f){g.data(c,(f=new b(this)))}if(e=="filter"){f.filter()}})};d.fn[c].defaults={};d.fn[c].Constructor=b;d.fn[c].noConflict=function(){d.fn[c]=a;return this};d(document).on("click.portfilter.data-api","[data-toggle^=portfilter]",function(f){d(this).portfilter("filter")})}(window.jQuery);

});
