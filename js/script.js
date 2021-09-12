const line = $('.line')
const line2 = $('.line2')

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



    line.css('left', '15.5rem')
    line.css('right', 'calc(100% - 15.5rem)')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('right', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
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

    // line.css('left', '47.8rem')
    // line.css('right', '50%')

    // line2.css('height', 70)

    line.css('left', '47.8rem')
    line.css('right', 'calc(100% - 47.8rem)')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('right', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
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

    // line.css('left', '50%')
    // line.css('right', '47.6rem')

    // line2.css('height', 70)

    line.css('left', 'calc(100% - 47.6rem)')
    line.css('right', '47.6rem')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('left', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
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

    // line.css('left', '50%')
    // line.css('right', '15rem')

    // line2.css('height', 70)

    line.css('left', 'calc(100% - 15rem)')
    line.css('right', '15rem')
    line.css('transition', 'none')

    setTimeout(() => {
        line.css('left', '50%')
        line.css('transition', 'all .4s linear')
    },200)

    line2.css('height', 0)
    line2.css('transition', 'none')
    
    setTimeout(() => {        
        line2.css('height', 70)
        line2.css('transition', 'all .2s linear')
    }, 600)
})