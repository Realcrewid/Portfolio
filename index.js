let footerDate=document.querySelector("#footer-date");
let date=new Date().getFullYear();
footerDate.innerText=`© ${date} SumitGupta, Inc`;


let aboutme=document.querySelector(".aboutme");
aboutme.addEventListener("load",(evt)=>{
    console.log(evt);
    aboutme.classList.add("fadein");
})

document.addEventListener("DOMContentLoaded",()=>{
    let aboutme=document.querySelector(".aboutme");
    aboutme.classList.add("fadein");
})
// const scrollDiv = document.getElementById('scrollDiv');
//     const scrollPosition = scrollDiv.scrollTop;
//     const windowHeight = scrollDiv.clientHeight;
//     console.log(scrollDiv);
//     console.log(windowHeight);