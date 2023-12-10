const images = [
    {
        id: 1,
        path: './assets/img01.jpg',
        name: 'image gta 01'
    },
    {
        id: 2,
        path: './assets/img02.jpg',
        name: 'image gta 02'
    },
    {
        id: 3,
        path: './assets/img03.jpg',
        name: 'image gta 03'
    }
]

// Select container slider in the DOM
const slider = document.querySelector(".slider");

// Initialize an array of img DOM component
let imgArr = [];

// Generate multiple img with images object array
images.forEach((element) => {
    let img = document.createElement("img");
    img.setAttribute("src", element.path);
    img.setAttribute("alt", element.name);
    img.classList.add("image-slider");
    slider.appendChild(img)
    imgArr.push(img);
});

let indexSlide = 0;

function showImageSlide(){
    let i;
    for(i = 0; i < imgArr.length; i++){
        imgArr[i].classList.remove("active");
    }
    indexSlide++;
    if(indexSlide > imgArr.length) {indexSlide = 1}

    imgArr[indexSlide-1].classList.add("active")
    setTimeout(showImageSlide,5000);
}

showImageSlide()







