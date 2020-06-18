$('document').ready(function () {
    // header
    document.onscroll = function () {
        if (window.screen.availWidth < 988) return;

        let menu = document.querySelector('.header');

        if (window.scrollY > 150 && !menu.classList.contains('header_slim')) {
            menu.classList.add('header_slim');
        }

        if (window.scrollY <= 150 && menu.classList.contains('header_slim')) {
            menu.classList.remove('header_slim');
        }
    };


    // button to contacts
    $('.button_to-contacts').on('click', () => {
        $('a[href="#contacts"]').trigger('click');
    })


    // scroll
    jQuery(window).scroll(function () {

        if (window.screen.availWidth < 988) return;

        var $sections = $('.section');
        $sections.each(function (i, el) {
            var top = $(el).offset().top - 100;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('a.active').removeClass('active');
                $('a[href="#' + id + '"]').addClass('active');
            }
        });
    });

    $('nav, .header__logo, .footer__logo ').on('click', 'a', function (event) {
        event.preventDefault();
        const headerHeight = (window.screen.availWidth > 988) ? 78 : -20;

        var id = $(this).attr('href'),
            top = $(id).offset().top - headerHeight;
        $('body,html').animate({ scrollTop: top }, 600);
    });


    // front
    setTimeout(() => {
        if (window.screen.availWidth < 1400) return;
        $('.front__img_left').addClass('animated slideInLeft visible');
        $('.front__img_right').addClass('animated slideInRight visible');
    }, 300);


    // advantages images
    new Waypoint({
        element: document.getElementById('advantages'),
        offset: 500,
        handler: function (direction) {
            const $items = $('#advantages .adv__img');

            for (let i = 0; i < $items.length; i++) {
                setTimeout(() => {
                    $items.eq(i).addClass('animated flipInY visible');
                }, 200 * i);
            }
        },
    });


    // expertise list
    new Waypoint({
        element: document.getElementById('expertise'),
        offset: 600,
        handler: function (direction) {
            const $items = $('#expertise .exp__li');

            for (let i = 0; i < $items.length; i++) {
                setTimeout(() => {
                    $items.eq(i).addClass('animated fadeIn visible');
                }, 250 * i);
            }
        },
    });


    // order list
    new Waypoint({
        element: document.getElementById('order'),
        offset: 300,
        handler: function (direction) {
            const $items = $('#order .order__item');

            for (let i = 0; i < $items.length; i++) {
                setTimeout(() => {
                    $items.eq(i).addClass('animated fadeIn visible');
                }, 300 * i);
            }
        },
    });


    // copyright
    //document.getElementById("yearNow").innerHTML = new Date().getFullYear();


    // burger
    $(".hamburger").click(function(){
        $(this).toggleClass("is-active");
        $('.header').removeClass('header_slim')
        $('#header').toggleClass('header_open');
    });

    $('.header__nav-link').on('click', () => {
        if ( $('#header').hasClass('header_open') ) {
            setTimeout( () => {
                $('#hamburger-1').trigger('click');
            }, 300);
        }
    }); 


	//E-mail Ajax Send
	$("form").submit(function() { //Change
        var th = $(this);
        let test = th.find('[name="project_name"]');
        if (test.val() !== test.attr('value')) return;

		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
    });

});
