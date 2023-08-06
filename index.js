// select div
const pairBlock = document.querySelectorAll(".pair_block");
const TotalPriceOfCurrentPair = document.getElementById("TotalPriceOfCurrentPair");
const inputtype = document.querySelectorAll(".Add_Cart_Btn input");

// Remove comment to check in console
// console.log(inputtype); 

// CallBack fun for insert atribute into input data

function GiveInput(pair, price, off, atri) {
    for (let index = 0; index < inputtype.length - 1; index++) {
        const element = inputtype[index];
        if (element.name === "PairCount") {
           element.value = pair
        }else if (element.name === "PairPrice") {
            element.value = price
        } else if (element.name === "PairOffer") {
            element.value = off
        }else if (element.name === "Size"){
            let size;
            if (atri.Size.Size1) {
                size = atri.Size.Size1;
            }
            if (atri.Size.Size2) {
                size = atri.Size.Size1 + "," + atri.Size.Size2;
            }
            if (atri.Size.Size3) {
                size = atri.Size.Size1 + "," + atri.Size.Size2 + "," + atri.Size.Size3;
            }
            element.value = size;
        }else if (element.name === "Colour"){
            let Color;
            if (atri.Color.Color1) {
                Color = atri.Color.Color1;
            }
            if (atri.Color.Color2) {
                Color = atri.Color.Color1 + "," + atri.Color.Color2;
            }
            if (atri.Size.Size3) {
                Color = atri.Color.Color1 + "," + atri.Color.Color2 + "," + atri.Color.Color3;
            }
            element.value = Color;
        }
    }
}


// method for pair-BLock div selecetor or manipulate
function ClickMe() {

    // Pass each div to check wich one is clicked
    pairBlock.forEach(ClickedBlock => {
        // check in cosole
        // console.log(ClickedBlock);

        //add a event listener for remove active class from all the pair block div and add active class wich is clicked

        ClickedBlock.addEventListener('click', ()=>{
            let i = 1;
            let j = 3;
            let k = 5;
            let m = 7;

            // active class remove and radio checked removed from all div
        
            pairBlock.forEach(restBlock=>{
                restBlock.classList.remove("active");
                restBlock.childNodes[i].childNodes[i].childNodes[i].checked = ""
            })

            // added active class current clicked div and Cheched current radio
        
            ClickedBlock.classList.add("active");
            ClickedBlock.childNodes[i].childNodes[i].childNodes[i].checked = "checked";

            // get the price of current block and assigning it to total price div 
        
            const PriceOfPair = ClickedBlock.childNodes[i].childNodes[j].childNodes[j].childNodes[i].childNodes[i].innerHTML

            // crated custom addon texes
            const Texes = "15.00";
            const total = parseFloat(PriceOfPair) + parseFloat(Texes);

            //assign total price
            TotalPriceOfCurrentPair.innerHTML = total.toFixed(2);

            // get current active data
            const PairS = ClickedBlock.childNodes[i].childNodes[j].childNodes[i].innerHTML;
            const OffPrice = ClickedBlock.childNodes[i].childNodes[k].childNodes[j].innerHTML;
            const Condition = ClickedBlock.childNodes[j].childNodes.length;

            
            const Size1 = ClickedBlock.childNodes[j].childNodes[j].childNodes[j].childNodes[i].value;
            const Color1 = ClickedBlock.childNodes[j].childNodes[j].childNodes[k].childNodes[i].value;
            
            // returning objact data for selected PairBlock's atributes (Size and Color)
            const SizeAtribute = ()=>{    
                if (Condition === 5) {
                return {Size: {Size1}, Color: {Color1}}
            }else if (Condition === 7) {
                const Size2 = ClickedBlock.childNodes[j].childNodes[k].childNodes[j].childNodes[i].value;
                const Color2 = ClickedBlock.childNodes[j].childNodes[k].childNodes[k].childNodes[i].value; 
                return {Size:{Size1, Size2}, Color:{Color1, Color2}}
            } else if (Condition === 9) {
                const Size2 = ClickedBlock.childNodes[j].childNodes[k].childNodes[j].childNodes[i].value;
                const Color2 = ClickedBlock.childNodes[j].childNodes[k].childNodes[k].childNodes[i].value;    
                const Size3 = ClickedBlock.childNodes[j].childNodes[m].childNodes[j].childNodes[i].value;
                const Color3 = ClickedBlock.childNodes[j].childNodes[m].childNodes[k].childNodes[i].value;
                return {Size:{Size1, Size2, Size3}, Color:{Color1, Color2, Color3}}
            }
        };

        // Uncomment below line to check what object is returning in console
        // console.log(SizeAtribute());

        //Sending params for Callback fun's inputes
            GiveInput(PairS, TotalPriceOfCurrentPair.innerText, OffPrice, SizeAtribute());

        })
    })
}
ClickMe();
