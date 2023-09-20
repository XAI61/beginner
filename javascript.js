let slideBtnLeft = document.getElementById("slide-btn-left")
let slideBtnRight = document.getElementById("slide-btn-right")
let imgItem = document.querySelectorAll(".hero-item")

console.log(imgItem.length-1 )

let startSlider=0;
let endSlider =(imgItem.length-1)*100;
slideBtnLeft.addEventListener("click",handleleftbtn)
function handleleftbtn(){
    if(startSlider < 0){
        startSlider = startSlider + 100;
        }
    
        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`;
        })
}

slideBtnRight.addEventListener("click",handlerightbtn)
function handlerightbtn(){
    if(startSlider >= -endSlider+100){
        startSlider = startSlider - 100;
        }
    
        imgItem.forEach(element =>{
            element.style.transform = `translateX(${startSlider}%)`;
        })
}
// render automatic
function renderSlide(){
    
    if(startSlider >= -endSlider+100){
        handlerightbtn()
    }
    else{
        startSlider = 0
    }
}
setInterval(renderSlide, 2500)
// sidebar-container-navigation

    const sidebarNavigationE1 = document.getElementById("sidebar-container-navigation-id");
    const sidebarOpenNavigationE1 = document.getElementById("open-nav-sidebar");
    const sidebarCloseNavigationE1 = document.getElementById("sidebar-nav-close");
    
    
    console.log(sidebarNavigationE1);

    sidebarOpenNavigationE1.addEventListener("click", () => {
        sidebarNavigationE1.classList.toggle("sidebar-show");
    })

sidebarCloseNavigationE1.addEventListener("click", () => {
    sidebarNavigationE1.classList.toggle("sidebar-show")
})
