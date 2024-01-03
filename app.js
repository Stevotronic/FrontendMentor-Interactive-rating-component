let choice = 0;
const arr = document.querySelectorAll('.btn');
const btnSubmit = document.getElementById('submit');

for (let i=0; i<arr.length; i++){
    arr[i].addEventListener('click', ()=>{
        // reset all states
        arr.forEach((element)=>element.style.background= "var(--dark-grey)"); 
        
        // sets chosen state
        arr[i].style.background = "var(--orange)";
        arr[i].style.color = "var(--white)";
        choice = i+1;
    });
}

btnSubmit.addEventListener('click', ()=>{
    if(choice==0) {
        btnSubmit.innerHTML = "select your rating and submit";
    }  else {

    document.querySelector('.score').innerHTML = `You selected ${choice} out of 5`;

// animatie svg
gsap.set('.thankyou-card', {
    rotateY: '-90deg'
});
gsap.set('#phone', {
    rotate: -2.5
});

    let tl = gsap.timeline();

    gsap.to('#ccard', 1.7, {
        rotate: 7,
        scale:1.1,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    });

    tl.to('.card', 0.6, {
        rotateY: '90deg',
        ease: "power2.in",
        display:"none"
    })
    .to('.thankyou-card', 1, {
        rotateY: '0deg',
        opacity:1,
        ease: "elastic.out(1,0.5)",
        display: "block"
    })
    .to('#ccard', 1, {
        y: 7,
        
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    }, '<')
    .to('#circle', 1, {
        y:-8,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    }, '<')
    .to('#phone', 1.5, {
        rotate:2.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut"
    }, '<')   
}
});
