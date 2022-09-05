function shuffle(array){
    var currentIndex = array.length, 
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex], 
            array[currentIndex],
    ];
    }
    return array;
}

function spin(){
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";


    let ALGIZ = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle([1750, 2110, 2470]);
    let Drone = shuffle([1630, 1990, 2350])
    let ROG = shuffle([1570, 1930, 2290]);

    let results = shuffle([
        ALGIZ[0],
        Camera[0],
        Zonk[0],
        PS[0],
        Headset[0],
        Drone[0],
        ROG[0],
    ]);


if(ALGIZ.includes(results[0])) SelectedItem = "ALGIZ";
if(Camera.includes(results[0])) SelectedItem = "URUZ";
if(Zonk.includes(results[0])) SelectedItem = "LAGUZ";
if(PS.includes(results[0])) SelectedItem = "RAIDO";
if(Headset.includes(results[0])) SelectedItem = "DAGAZ";
if(Drone.includes(results[0])) SelectedItem = "WUNJO";
if(ROG.includes(results[0])) SelectedItem = "FEHU";

box.style.setProperty("transition", "all ease 5s");
box.style.transform = "rotate(" + results[0] + "deg)";
element.classList.remove("animate");
setTimeout(function(){
    element.classList.add("animate");
}, 5000);
   
setTimeout(function(){
    applause.play();
    Swal.fire({
        title: 'The Norns Have spoken<br>This is your fate!',
        html: 'You won&nbsp' + SelectedItem + ' | ' + '<a href="#" style="text-size: 80px; font-weight: 900; color: darkblue;"> Claim Now </a>',
        imageUrl: './media/Logo-Sepia-Honu.JPG',
        imageWidth: 500,
        imageHeight: 500,
        imageAlt: 'Custom image',
      })
}, 5500)

setTimeout(function(){
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
}, 6000);
}