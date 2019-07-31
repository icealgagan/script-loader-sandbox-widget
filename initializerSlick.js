//container of the slider
let containerSlider = $(element).find(".mainSliderContainer"); 
let scriptSrc = "https://irp-cdn.multiscreensite.com/f49f126e/files/uploaded/slick.min.js";
let styleSrc  = "https://use.fontawesome.com/releases/v5.5.0/css/all.css";
const cssId = 'fontAwesomeSource';//CREATE FONT AWESOME LINK SOURCE

if (!document.getElementById(cssId)){
    let head  = document.getElementsByTagName('head')[0];
    let link  = document.createElement('link');
    link.id   = 'fontAwesomeSource';
    link.rel  = 'stylesheet';
    link.type = 'text/css';
    link.href =  styleSrc;
    link.integrity = 'sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU';
    link.crossOrigin = 'anonymous';
    head.appendChild(link);
}

//settings for the slider get from your data config settings of widget
loadSlick(document, 'script', 'slickJS', scriptSrc, function(){
    containerSlider.fadeIn();
    containerSlider.slick({
        autoplay:autoplay,
        infinite:true,
        dots:dots,
        autoplaySpeed:interval,
        draggable:draggable,
        arrows:arrows,
        appendDots:dotsWrap,
        slidesToShow:slidesShow,
        slidesToScroll:1,
        prevArrow:'<button type="button" class="cSlickPrev cSarrow">'+slideArrw+'</button>',
        nextArrow:'<button type="button" class="cSlickNext cSarrow">'+slideArrw2+'</button>',
        easing:'linear'
    });
});

function loadSlick(d,s,id,url,callback){
    $('#'+id).remove();
    var fjs = d.getElementsByTagName(s)[0];
    if(d.getElementById(id)){return}
    script = d.createElement(s);
    script.id = id;
    script.src = url;
    fjs.parentNode.insertBefore(script,fjs);

    if (script.readyState){  //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" ||
                    script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        script.onload = function(){
            callback();
        };
    }

    script.src = url;
    fjs.parentNode.insertBefore(script,fjs);
}


