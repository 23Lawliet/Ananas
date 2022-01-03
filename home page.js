document.addEventListener("DOMContentLoaded", function(){
    //slide text in header
    var btnNext = document.querySelector(".bottom .arrow .fa-chevron-right"),
        btnPrev = document.querySelector(".bottom .arrow .fa-chevron-left"),
        textSlides = document.querySelectorAll(".bottom .text div"),
        indexTextSlide = 0;

    btnNext.addEventListener("click", function(){
        var currentTextSlide = textSlides[indexTextSlide];
        if(indexTextSlide < textSlides.length - 1){
            indexTextSlide++;
        } else{
            indexTextSlide=0;
        }
        var nextTextSlide = textSlides[indexTextSlide];
        //check the end of animation
        var end = function(){
            this.classList.remove("movingOutNext");
            this.classList.remove("activeText");
            this.classList.add("disappearText");
        }
        var next = function(){
            this.classList.remove("movingInNext");
            this.classList.add("activeText");
            this.classList.remove("disappearText");
        };
        currentTextSlide.addEventListener("webkitAnimationEnd", end);
        nextTextSlide.addEventListener("webkitAnimationEnd", next);
        
        //add class when clicking
        currentTextSlide.classList.add("movingOutNext");
        nextTextSlide.classList.add("movingInNext");
    });

    btnPrev.addEventListener("click", function(){
        var currentTextSlide = textSlides[indexTextSlide];
        if(indexTextSlide > 0){
            indexTextSlide--;
        } else{
            indexTextSlide = textSlides.length -1;
        }
        var prevTextSlide = textSlides[indexTextSlide];
        //check the end of animation
        var end = function(){
            this.classList.remove("movingOutPrev");
            this.classList.remove("activeText");
            this.classList.add("disappearText");
        }
        var prev = function(){
            this.classList.remove("movingInPrev");
            this.classList.add("activeText");
            this.classList.remove("disappearText");
        };
        currentTextSlide.addEventListener("webkitAnimationEnd", end);
        prevTextSlide.addEventListener("webkitAnimationEnd", prev);
        
        //add class when clicking
        currentTextSlide.classList.add("movingOutPrev");
        prevTextSlide.classList.add("movingInPrev");
    });


    //slide product
    var btnNextProduct = document.querySelector(".productSlide .owl-carousel .btn .btnSlideProduct_right"),
        btnPrevProduct = document.querySelector(".productSlide .owl-carousel .btn .btnSlideProduct_left"),
        productSlides = document.querySelectorAll(".productSlide .owl-carousel .product .item"),
        indexProductSlide = 0;
    console.log(productSlides)

    btnNextProduct.addEventListener("click", function(){
        var currentProductSlide = productSlides[indexProductSlide];
        if(indexProductSlide < productSlides.length - 1){
            indexProductSlide++;
        } else{
            indexProductSlide=0;
        }
        var nextProductSlide = productSlides[indexProductSlide];
        //check the end of animation
        var endProduct_Slide = function(){
            this.classList.remove("movingOutNext_ProductSlide");
            this.classList.remove("activeItem");
            this.classList.add("disappearItem");
        }
        var nextProduct_Slide = function(){
            this.classList.remove("movingInNext_ProductSlide");
            this.classList.add("activeItem");
            this.classList.remove("disappearItem");
        };
        currentProductSlide.addEventListener("webkitAnimationEnd", endProduct_Slide);
        nextProductSlide.addEventListener("webkitAnimationEnd", nextProduct_Slide);
        
        //add class when clicking
        currentProductSlide.classList.add("movingOutNext_ProductSlide");
        nextProductSlide.classList.add("movingInNext_ProductSlide");
    });

    btnPrevProduct.addEventListener("click", function(){
        var currentProductSlide = productSlides[indexProductSlide];
        if(indexProductSlide > 0){
            indexProductSlide--;
        } else{
            indexProductSlide = productSlides.length -1;
        }
        var prevProductSlide = productSlides[indexProductSlide];
        //check the end of animation
        var endProduct_Slide = function(){
            this.classList.remove("movingOutPrev_ProductSlide");
            this.classList.remove("activeItem");
            this.classList.add("disappearItem");
        }
        var prevProduct_Slide = function(){
            this.classList.remove("movingInPrev_ProductSlide");
            this.classList.add("activeItem");
            this.classList.remove("disappearItem");
        };
        currentProductSlide.addEventListener("webkitAnimationEnd", endProduct_Slide);
        prevProductSlide.addEventListener("webkitAnimationEnd", prevProduct_Slide);
        
        //add class when clicking
        currentProductSlide.classList.add("movingOutPrev_ProductSlide");
        prevProductSlide.classList.add("movingInPrev_ProductSlide");
    });


    //slide for big images
    var btn = document.querySelectorAll(".btnSlide ul li");
    var classSlide = document.querySelector(".slideWrapper .slides ul");

    for(var i=0; i<btn.length; i++){
        btn[i].addEventListener("click", function(){
            for(var i=0; i<btn.length; i++){
                btn[i].classList.remove("active");
            }
            this.classList.add("active");
            //js for button of slide

            var presentSlide = document.querySelector(".active");
            for(var index=0; presentSlide = presentSlide.previousElementSibling; index++){
            }
            //address of slide

            for (var j = 0; j < btn.length; j++) {
                classSlide.classList.remove("slide"+j);
            }
            classSlide.classList.add("slide"+index);
        })
    }
    
    

}, false)


           