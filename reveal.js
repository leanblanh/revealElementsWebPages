/**
 * Function to apply the animation when the object with reveal class hit the offset when scroll down the screen
 * It's necessary to add the reveal.css style to the page html
 */

function reveal(){
    // change to position where the effect will be aplied
    const offset = 100

    document.querySelectorAll(".reveal").forEach(item => {
               
        if (item.getBoundingClientRect().top - window.innerHeight < -(offset)){
            item.classList.add("active")
        }
    })

    //when the scroll back to beginning of page all the object will be hiden again
    if (window.scrollY==0){
        document.querySelectorAll(".reveal").forEach(item => {
            item.classList.remove("active")
        })
    }
}

//add the function on the scroll event in the window
window.addEventListener("scroll", reveal)
