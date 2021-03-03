$(document).ready(function() {
    console.log('js đã sẵn sàng')
    $(window).scroll(function() {
        var doDai = $('html').scrollTop();
        if (doDai > 200) {
            $('.back-to-top').addClass('show-back-to-top')
        } else {
            $('.back-to-top').removeClass('show-back-to-top')
        }
    })
    $('.back-to-top').click(function() {
        $('html').animate({ 'scrollTop': 0 })
    })
    $('.nav-search').click(function() {
        $('.search-bar').addClass('show-search')
        $('.black-drop').addClass('active')
        return false;
    })
    $('.black-drop').click(function() {
        $('.search-bar').removeClass('show-search')
        $('.black-drop').removeClass('active')
    })
    $('.exit-search-bar').click(function() {
        $('.search-bar').removeClass('show-search')
        $('.black-drop').removeClass('active')
    })

    $('.submit-search').click(function() {
        $('.search-bar').removeClass('show-search')
        $('.black-drop').removeClass('active')
    })
})