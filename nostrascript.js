//headerpopup

var divPopup = document.querySelector(".sectionPopUp");
var headerPopup = document.getElementById("headerPop");
headerPopup.addEventListener("click", function () {
    divPopup.style.display = "none";
}
)


//side menu close


//show side menu
var divSideMenuPopup = document.querySelector(".navbarSideMenu");
var sideMenu = document.getElementById("sidebaricon");
sideMenu.addEventListener("click", function () {

    divSideMenuPopup.style.left = 0;
}
)


var divSideMenuPopup = document.querySelector(".navbarSideMenu");
var sideMenu = document.getElementById("sideMenuClose");
sideMenu.addEventListener("click", function () {

    divSideMenuPopup.style.left = "-50%";
}
)


/*Slider Images */
let sliderItems = document.querySelectorAll(".sliderimage"),
    leftArrow = document.querySelector("#leftArrow"),
    rightArrow = document.querySelector("#rightArrow"),
    sliderList = document.querySelector(".slide_image_container")


let activeIndex = 0

rightArrow.addEventListener("click", function () {
    activeIndex = (activeIndex + 1) % sliderItems.length
    console.log("the active inde right", activeIndex, sliderItems.length);
    updateSliderPosition()
})

leftArrow.addEventListener("click", function () {
    activeIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length
    console.log("the active inde left", activeIndex);

    updateSliderPosition()
})

function updateSliderPosition() {
    const offset = -activeIndex * sliderItems[0].clientWidth
    sliderList.style.transform = `translateX(${offset}px)`
}


// document.addEventListener('scroll', this.onWindowScroll);
// function onWindowScroll(e) 
// {
//     alert('scroll');
//     var elements = this.document.querySelectorAll(".initial-scroll-animate")
//     elements.forEach((el)=>{
//         windowHeight = window.innerHeight
//      var elbound = el.getBoundingClientRect()
   

//      console.log(windowHeight)
//      console.log(elbound.top)
//      if(windowHeight>elbound.top-100)
//      {
//         console.log("Hi")
//     el.classList.remove("reveal-scroll-animate")

//     }
    
//   })
// }


document.getElementById("arrivalLink").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("arrivalSection").scrollIntoView({
        behavior:"smooth"
    })
})


document.getElementById("wantedLink").addEventListener("click",function(event){
    event.preventDefault()
    document.getElementById("wantedImageSection").scrollIntoView({
        behavior:"smooth"
    })
})

