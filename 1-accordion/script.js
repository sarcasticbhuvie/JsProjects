console.log('Hello Js');
const data= [
    {
        id : 1,
        question : "Your Name?",
        answer : "Bhupendra Verma"
    },
    {
        id : 2,
        question : "Your Course?",
        answer : "MCA"
    },
    {
        id : 3,
        question : "Your College?",
        answer : "IISE LUCKNOW"
    },
    {
        id : 4,
        question : "Your Gender?",
        answer : "Male"
    },
    {
        id : 5,
        question : "Your Mo.No.?",
        answer : "8953834949"
    },
];
const accordionWrapper=document.querySelector(".accordion");

function accordionCreation(){
    accordionWrapper.innerHTML=data.map(dataItem=>`
    <div class="accordion_item">
    <div class="accordion_title">
        <h2>${dataItem.question}</h2>
        <i class="fa-solid fa-arrow-up"></i>
        </div>
        <div class="accordion_answer">
        <p>${dataItem.answer}</p>
        </div>
    </div`)
}
accordionCreation();
const getAccordionTitles= document.querySelectorAll(".accordion_title")
console.log(getAccordionTitles);
getAccordionTitles.forEach(currentItem=>{
    currentItem.addEventListener("click",(event)=>{
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active')
        }
        else{
            let  getAlreadyAddedActiveClasses=document.querySelectorAll(".active")
            getAlreadyAddedActiveClasses.forEach(currentactiveItem=>{
                currentactiveItem.classList.remove('active')
            })
            currentItem.classList.add('active');
        }
    }) 
})