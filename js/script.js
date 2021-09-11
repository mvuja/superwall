const line = $('.line')

const social = $('#social')
const token = $('#token')
const crowd = $('#crowd')
const goods = $('#goods')

const socialTxt = $('.social-txt')
const tokenTxt = $('.tokens-txt')
const crowdTxt = $('.crowd-txt')
const goodsTxt = $('.goods-txt')


social.on('click', function(){
    social.addClass('active')
    token.removeClass('active')
    crowd.removeClass('active')
    goods.removeClass('active')

    socialTxt.addClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.removeClass('active')

    line.css('left', '15.2rem')
    line.css('right', '50%')
})
token.on('click', function(){
    social.removeClass('active')
    token.addClass('active')
    crowd.removeClass('active')
    goods.removeClass('active')

    socialTxt.removeClass('active')
    tokenTxt.addClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.removeClass('active')

    line.css('left', '47.8rem')
    line.css('right', '50%')
})
crowd.on('click', function(){
    social.removeClass('active')
    token.removeClass('active')
    crowd.addClass('active')
    goods.removeClass('active')

    socialTxt.removeClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.addClass('active')
    goodsTxt.removeClass('active')

    line.css('left', '50%')
    line.css('right', '47.6rem')
})
goods.on('click', function(){
    social.removeClass('active')
    token.removeClass('active')
    crowd.removeClass('active')
    goods.addClass('active')

    socialTxt.removeClass('active')
    tokenTxt.removeClass('active')
    crowdTxt.removeClass('active')
    goodsTxt.addClass('active')

    line.css('left', '50%')
    line.css('right', '15rem')
})