import { plansList } from "./data.js";

const table = document.getElementById("plansTable");


function toEmoji (attribute) {
    if (attribute === "true") {
        attribute = "✔";
    } else if( attribute ==="false") {
         attribute = "✖";
        }
    return attribute;
};



for (let i = 0; i < plansList.length; i++) {

    let rows = document.querySelectorAll("table#plansTable tr");
 
    let nameTh = document.createElement("th");
    nameTh.textContent = plansList[i].name;
    rows[0].appendChild(nameTh);

    let planBr = document.createElement("br");
    nameTh.appendChild(planBr);
    
    let planBtn = document.createElement("button");
    planBtn.onclick = (target => {
        window.location = "./cycle.html?plan=" + i ;
    });

    planBtn.textContent= plansList[i].yearlySubPrice +"$";
    nameTh.appendChild(planBtn);





    let monthlySubTh = document.createElement("th");
    monthlySubTh.textContent = plansList[i].monthlySubPrice;
    rows[1].appendChild(monthlySubTh);
    
    let yearlySubTh = document.createElement("th");
    yearlySubTh.textContent = plansList[i].yearlySubPrice;
    rows[2].appendChild(yearlySubTh);


    //####################################### start updating as needed #######################################


    let playrs = document.createElement("th");
    playrs.textContent = plansList[i].playrs;
    rows[3].appendChild(playrs);
    
    let mangeres = document.createElement("th");
    mangeres .textContent = plansList[i].mangeres ;
    rows[4].appendChild(mangeres );
    
    let ads = document.createElement("th");
    ads.textContent = plansList[i].ads;
    ads.textContent= toEmoji(ads.textContent);
    rows[5].appendChild(ads);
    
    let ultamte team = document.createElement("th");
    ultamte team.textContent = plansList[i].ultamte team;
    ultamte team.textContent =toEmoji(ultamte team.textContent);
    rows[6].appendChild(ultamte team);

    let customerCare = document.createElement("th");
    customerCare.textContent = plansList[i].customerCare;
    customerCare.textContent=toEmoji(customerCare.textContent);
    rows[7].appendChild(customerCare);

    //#######################################      stop  updating      #######################################


};

// ready