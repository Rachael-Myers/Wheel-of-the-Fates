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
    prompt("Ask your question of the Norns...");
    wheel.play();
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectItem = "";


    let ALGIZ = shuffle([1890, 2250, 2610]);
    let URUZ = shuffle([1850, 2210, 2570]);
    let RAIDO = shuffle([1810, 2170, 2530]);
    let LAGUZ = shuffle([1770, 2130, 2490]);
    let THURISAZ = shuffle([1730, 2090, 2450])
    let DAGAZ = shuffle([1690, 2050, 2410]);
    let WUNJO = shuffle([1650, 2010, 2370])
    let ISA = shuffle([1610, 1970, 2330]);
    let FEHU = shuffle([1570, 1930, 2290])

    let results = shuffle([
        ALGIZ[0],
        URUZ[0],
        LAGUZ[0],
        RAIDO[0],
        THURISAZ[0],
        DAGAZ[0],
        WUNJO[0],
        ISA[0],
        FEHU[0],
        
    ]);


if(ALGIZ.includes(results[0])) SelectedItem = "A L G I Z";
if(URUZ.includes(results[0])) SelectedItem = "U R U Z";
if(LAGUZ.includes(results[0])) SelectedItem = "L A G U Z";
if(RAIDO.includes(results[0])) SelectedItem = "R A I D O";
if(THURISAZ.includes(results[0])) SelectedItem = "T H U R I S A Z"
if(DAGAZ.includes(results[0])) SelectedItem = "D A G A Z";
if(WUNJO.includes(results[0])) SelectedItem = "W U N J O";
if(ISA.includes(results[0])) SelectedItem = "I S A"
if(FEHU.includes(results[0])) SelectedItem = "F E H U";


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
        html: 'YOUR FATE IS&nbsp' + SelectedItem + ' | ' + '<a href="meanings.html" style="font-size: 64px; font-weight: 900; color: darkblue;"> ACCEPT YOUR FATE... </a>',
        width: '64em',
        imageUrl: 'media\odin-allfather.png',
        imageWidth: 800,
        imageHeight: 500,
        imageAlt: 'artists rendering of the Norse god Odin Allfather, by R.A.Myers',
      })
}, 5500)

setTimeout(function(){
    box.style.setProperty("transition", "initial");
    box.style.transform = "rotate(90deg)";
}, 6000);
}