
//navigation menu

(() =>{

    const hamburgerBtn = document.querySelector(".hamburger-btn"),
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click", showNavMenu);
    closeNavBtn.addEventListener("click", hideNavMenu);


    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }
    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(() =>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }


    //attach an event handler to document
    document.addEventListener("click",(event) =>{
        // console.log(event.target);
        if(event.target.classList.contains('link-item')){
            //console.log(event.target.hash);

            //make sure event.target.hash has a value before overridding default behaviour 
            if(event.target.hash !==""){
                //prevent default anchor click behaviour 
                event.preventDefault();
                const hash = event.target.hash;
                //++console.log(hash);
                //deactivate existing active section
                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");
                //active new section
                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                // deactiviting existing active navigation  menu link-item
                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");


                //if clicked link-item is contained within the navigation menu
                if(navMenu.classList.contains("open")){

                
                    // activate new navigation menu link-item
                    event.target.classList.add("active","inner-shadow");
                    event.target.classList.remove("outer-shadow","hover-in-shadow");
                    //hide navigation menu
                    hideNavMenu();
                    
                 }
                 else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash === item.hash){
                            //activate new navigation menu link-item
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }

                    })
                    fadeOutEffect();

                 }

                 //add # to url
                 window.location.hash = hash;
                 

            }
        }
        
    })
     
})();




// about section tabs

(() =>{
     const aboutSection = document.querySelector(".about-section"),
     tabsContainer = document.querySelector(".about-tabs");

     tabsContainer.addEventListener("click", (event) =>{
         // if event.target contins "tab-item" class and not contains active class  
         if(event.target.classList.contains("tab-item") && 
         !event.target.classList.contains("active")){
             const target = event.target.getAttribute("data-target");
             //detective existing active tab-item
             tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");
             //active new tab-item 
             event.target.classList.add("active","outer-shadow");
             // deactivate existing active tab-content
             aboutSection.querySelector(".tab-content.active").classList.remove("active");
             //activate new tab-content
             aboutSection.querySelector(target).classList.add("active");
         }
     })
})();


function bodyScrollingToggle(){
    document.body.classList.toggle("hidden-scrolling");
}

// portfolio filter and popup


(() =>{
    const filterContainer = document.querySelector(".portfolio-filter"),
    portfolioItemsContainer = document.querySelector(".portfolio-items"),
    portfolioItems = document.querySelectorAll(".portfolio-item");
    popup = document.querySelector(".portfolio-popup"),
    prevBtn = popup.querySelector(".pp-prev"),
    nextBtn = popup.querySelector(".pp-next"),
    closeBtn = popup.querySelector(".pp-close"),
    projectDetailsContainer = popup.querySelector(".pp-details"),
    projectDetailsBtn = popup.querySelector(".pp-project-details-btn");
    let itemIndex, slideIndex, screenshots;


    // filter portfolio item

    filterContainer.addEventListener("click",(event)=>{
        if(event.target.classList.contains("filter-item")&&
        !event.target.classList.contains("active")){
            //deactivate existing filter item
            filterContainer.querySelector(".active").classList.remove("outer-shadow","active");
            // activate new filter item 
            event.target.classList.add("active","outer-shadow");
            const target = event.target.getAttribute("data-target");
            console.log(target);
            portfolioItems.forEach((item)=>{
                if(target === item.getAttribute("data-category") || target === 'all'){
                    item.classList.remove("hide");
                    item.classList.add("show");
                }
                else{
                    item.classList.remove("show");
                    item.classList.add("hide");
                }
            })

            
        }
        // !event.target.classList.contains("active")){
        //     console.log("true");
        // }
        // else{
        //     console.log("false");
        // }
        // console.log(event.target);
    })



    //88888888888888888888888888888888888888888888888888888888888888
    // portfolioItemsContainer.addEventListener("click",(event)=>{
    //     if(event.target.closest(".portfolio-item-inner")){
    //         const portfolioItems = event.target.closest(".portfolio-item-inner").parentElement;
    //         //get the portfolio item index
    //         itemIndex = Array.from(portfolioItems.parentElement.children).indexOf(portfolioItems);
    //         screenshots = portfolioItems[itemIndex].querySelector(".portfolio-item-img img").getAttribute("data-screenshots");
    //         //convert screenshorts into array
    //         screenshots = screenshots.split(",");
    //         if(screenshots.length === 1){
    //             prevBtn.style.display="none";
    //             nextBtn.style.display="none";

    //         }
    //         else{
    //             prevBtn.style.display="block";
    //             nextBtn.style.display="block";
    //         }
    //         slideIndex = 0;
    //         popupToggle();
    //         popupSlideshow();
    //         popupDetails();
        
    //     }
    // })

    // closeBtn.addEventListener("click",()=>{
    //     popupToggle();
    //     if(projectDetailsContainer.classList.contains("active")){
    //         popupDetailsToggle();
    //     }
    // })

    // function popupToggle(){
    //     popup.classList.toggle("open");
    //     bodyScrollingToggle();
    // }

    // function popupSlideshow(){
    //     const imgSrc = screenshots[slideIndex];
    //     const popupImg = popup.querySelector(".pp-img");
    //     //activate loader until the popupImg loaded
    //     popup.querySelector(".pp-loader").classList.add("active");
    //     popupImg.src=imgSrc;
    //     popupImg.onload = () =>{
    //         // deactivate loader after the popupImg  loaded
    //         popup.querySelector(".pp-loader").classList.remove("active");
    //     }
    //     popup.querySelector(".pp-counter").innerHTML = (slideIndex+1) + " of " + screenshots.length;
    // }

    // nextBtn.addEventListener("click",()=>{
    //     if(slideIndex === screenshots.length-1){
    //         slideIndex = 0;
    //     }
    //     else{
    //         slideIndex++;
    //     }
    //     popupSlideshow();

    // })

    // //prev slide
    // prevBtn.addEventListener("click",()=>{
    //     if(slideIndex === 0){
    //         slideIndex = screenshots.length-1
    //     }
    //     else{
    //         slideIndex--;
    //     }
    //     popupSlideshow();
        
    // })


    // function popupDetails(){
    //     //if portfolio-item-details not exists
    //     if(!portfolioItems[itemIndex].querySelector(".portfolio-item-details")){
    //         projectDetailsBtn.style.display = "none";
    //         return; //end function execution
    //     }
    //     projectDetailsBtn.style.display = "block";
    //     // get the project details
    //     const details = portfolioItems[itemIndex].querySelector(".portfolio-item-details").innerHTML;
    //     // set the project details
    //     popup.querySelector(".pp-project-details").innerHTML = details;
    //     // get the project title
    //     const title = portfolioItems[itemIndex].querySelector(".portfolio-item-title").innerHTML;
    //     // set the project title
    //     popup.querySelector(".pp-title h2").innerHTML = title;
    //     // get the project category
    //     const category = portfolioItems[itemIndex].getAttribute("data-category");
    //     // set the project category
    //     popup.querySelector("pp-project-category").innerHTML = category.split("-").join(" ");
    // }

    // projectDetailsBtn.addEventListener("click",()=>{
    //     popupDetailsToggle();
    // })

    // function popupDetailsToggle(){
    //     if(projectDetailsContainer.classList.contains("active")){
    //         projectDetailsBtn.querySelector("i").classList.remove("fa-minus");
    //         projectDetailsBtn.querySelector("i").classList.add("fa-plus");
    //         projectDetailsContainer.classList.remove("active");
    //         projectDetailsContainer.style.maxHeight = 0 + "px"
    //     }
    //     else{
    //         projectDetailsBtn.querySelector("i").classList.remove("fa-plus");
    //         projectDetailsBtn.querySelector("i").classList.add("fa-minus");
    //         projectDetailsContainer.classList.add("active");
    //         projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + 'px';
    //         popup.scrollTo(0,projectDetailsContainer.offsetTop);
    //     }
    // }




})();//okkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk

// testimonial slider

// (() =>{
//     const sliderContainer = document.querySelector(".testi-slider-container"),
//     slides = sliderContainer.querySelectorAll(".testi-item");
//     console.log("slides");
// })();





// hide all sections except active




//88888888888888888888888888888888888888888888888888888888888888888888888
(() =>{

  const section = document.querySelectorAll(".section");
  section.forEach((section) =>{
      if(!section.classList.contains("active")){
        section.classList.add("hide");
      }
  })


})();

// window.addEventListener("load",() =>{
//     //preloader
//     document.querySelector(".preloader").classList.add("fade-out");
//     setTimeout(()=>{
//         document.querySelector(".preloader").style.display="none;"
//     },600)
// })