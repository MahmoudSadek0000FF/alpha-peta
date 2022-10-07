
var div2 = document.getElementById("div2"); // عرفت متغير عشان اعرف اتحكم في الديف
var div3 = document.getElementById("div3");
var generate = document.getElementById("generate");//نفس الكلام الي فوق
var input = document.getElementById("input"); //نفس لكلام الي فوق برضه
var letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// here to add the path of the each img to array to store it becuase we will need it leter 
litterImg = [];
for (let i = 0;i < 26;i++) {
    litterImg[i] = 'img\\'+i+'.jpg';
};
var randomLetter = [];
var getRandomLetter = [];
var linkImg = [];
var numberOfLitters;
generate.addEventListener("click",function(e){//عملت ايفينت ليسينر عشان اجينريت حروف بقا لما يدوس
    numberOfLitters = input.valueAsNumber;//عرف متغير عشان احفظ فيه القيمة او الرقم الي اليوسر هيدخله في الانبوت اريا تمام
    if (numberOfLitters >26) {
        window.alert("must be less than 26");
        window. location.reload(); 
        
    }
    if (numberOfLitters <1) {
        window.alert("must be above 1");
        window. location.reload();
    } 
    else {
        
    
    for (let index = 0; index < numberOfLitters; index++) {//لووب بقا عشان نجينريت الحروف ك بوتن  
        let x = randomNumbers();
        randomLetter[index]  = document.createElement("input");
        randomLetter[index].setAttribute("type","button");
        randomLetter[index].setAttribute("value",letters[x]);
        randomLetter[index].setAttribute("id", x);
        randomLetter[index].setAttribute("class","Litter");
        div2.appendChild(randomLetter[index]);
    }}
    //make array to store the clicks on generate button
    let arrayOfStordClicks = [];
    //check if theres tasks in local storage 
    if (localStorage.getItem("Clicked-Button")) {
        arrayOfStordClicks = JSON.parse(localStorage.getItem("Clicked-Button"));
    }
    //function to store the clicks
    function addStoredClicksToArray(){
        let storedClicks = {
            eventTarget : e.target.value,
            eventType : "Click",
            timeOfEvent : new Date()
        };
        //here we push the object to the array [arrayOfStordClicks]
        arrayOfStordClicks.push(storedClicks);
        addToLocalStorge(arrayOfStordClicks);
        //console.log(arrayOfStordLitters);
        //console.log(JSON.stringify(arrayOfStordLitters) );
        getDataFromLocalStorage();
    }
    //function to add the data to the local storage 
    function addToLocalStorge(arrayOfStordClicks){
        window.localStorage.setItem("Clicked-Button",JSON.stringify(arrayOfStordClicks));// here we use JSON like i saw in the vedio -i think becouse to convert the object to string-
    };
    //here to get the data from the local storage 
    function getDataFromLocalStorage(){
        let data = window.localStorage.getItem("Clicked-Button");
        if(data){ // here if the data avilable we 
            let Clicked_Button = JSON.parse(data);
        }
    };
    addStoredClicksToArray();//here we declare the function 
});
// function to generate random numbers 
function randomNumbers(){
    return Math.floor(Math.random()*26);
};
// event to add the images when i click on a litter  
div2.addEventListener("click",function(e){
    for (let index = 0; index < 26; index++) {
        if (e.target.id == index) {
            div3.firstElementChild.remove();
            linkImg[index] = document.createElement("img");
            linkImg[index].setAttribute("src",litterImg[index]);
            linkImg[index].setAttribute("width","1080px");
            linkImg[index].setAttribute("height","720px");
            linkImg[index].setAttribute("class","img");
            div3.appendChild(linkImg[index]);
        }
    }
    let arrayOfStordLitters = [];
    //check if theres stored litters in local storage 
    if (localStorage.getItem("Clicked-Litter")) {
        arrayOfStordLitters = JSON.parse(localStorage.getItem("Clicked-Litter"));
    }
    //function to store the array of objects 
    function addStoredLettersToArray(){
        let storedLetter = {
            eventTarget : e.target.value,
            eventType : "Click",
            timeOfEvent : new Date()
        };
        //to push the object to the array
        arrayOfStordLitters.push(storedLetter);
        addToLocalStorge(arrayOfStordLitters);
        //console.log(arrayOfStordLitters);
        //console.log(JSON.stringify(arrayOfStordLitters) );
        getDataFromLocalStorage();
    }
    function addToLocalStorge(arrayOfStordLitters){
        window.localStorage.setItem("Clicked-Litter",JSON.stringify(arrayOfStordLitters));
    };
    function getDataFromLocalStorage(){
        let data = window.localStorage.getItem("Clicked-Litter");
        if(data){
            let Clicked_Litter = JSON.parse(data);
        }
    };
    addStoredLettersToArray();
});
// event to store the loads in the local storage  as objects
window.addEventListener("load",function (e) {
    let arrOfLoads = [];
    if (localStorage.getItem("Window-Load")) {
        arrOfLoads = JSON.parse(localStorage.getItem("Window-Load"));
    }
    function addNumOfLoadToArray(){
        let loadsTime = {
            eventTarget : e.target,
            eventType : "Load",
            timeOfEvent : new Date()
        }
        arrOfLoads.push(loadsTime);
        addToLocalStorge(arrOfLoads);
        getDataFromLocalStorage();
    };
    function addToLocalStorge(arrOfLoads){
        window.localStorage.setItem("Window-Load",JSON.stringify(arrOfLoads));
    };
    function getDataFromLocalStorage(){
        let data = window.localStorage.getItem("Window-Load");
        if(data){
            let Window_Load = JSON.parse(data);
        }
    };
    addNumOfLoadToArray();
});
// event to store the unloads in the local storage  as objects
window.addEventListener("unload",function (e) {
    let arrOfunLoads = []; // array to store the data and we will pass it ot local storage
    // check if there is a data in local storage -we do that becuase every time we refresh the page the data losed-
    if (localStorage.getItem("Window-unLoad")) {
        arrOfunLoads = JSON.parse(localStorage.getItem("Window-unLoad"));
    }
    // create object to get the data we need 
    function addNumOfunLoadToArray(){
        let unloadsTime = {
            eventTarget : e.target,
            eventType : "unLoad",
            timeOfEvent : new Date()
        }
        arrOfunLoads.push(unloadsTime);// add the object to the array
        addToLocalStorge(arrOfunLoads);// add the array to local storage
        getDataFromLocalStorage();
    };
    function addToLocalStorge(arrOfLoads){   // function to add the array of objects to the L-S
        window.localStorage.setItem("Window-unLoad",JSON.stringify(arrOfunLoads));
    };
    function getDataFromLocalStorage(){  // to get the data from the l-s  -as i siad before the data we be lose if we refresh the page-
        let data = window.localStorage.getItem("Window-unLoad");
        if(data){
            let Window_unLoad = JSON.parse(data);
        }
    };
    addNumOfunLoadToArray();
})
