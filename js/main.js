let clickingArea = document.querySelector('.js-clicking-area-container'); //megkeresi az elemet


let seconds = 0;
let gold = 0;
let goldPerClick = 1;
let goldPerSec = 0;


function getClickingAreaTemplate() {
    return `
<p><strong>${seconds} másodperc</strong></p>
<img class="gold-coin" src="/assets/gold-coin-4844191_640.png" alt="Arany klikkelő" data-enable_click="true" > 
<p><strong>${gold} arany</strong></p>
<p>${goldPerClick} arany / klikk</p>
<p>${goldPerSec} arany / mp</p>
`};

/* --------------------------------- */

function handleGoldClicked(event) {
    if (event.target.dataset.enable_click === "true") {
        gold += goldPerClick;

        //újra megjeleníti a módosított html-t minden klikk után (nem így csináljuk)
        /* clickingArea.innerHTML = getClickingAreaTemplate(); */

        render();

    };
};

/* ------------------------------------- */

function formatPrice(price) {
    if (price < 1000) return price;
    let kValue = price / 1000;
    return `${kValue}K`;
};

/* ------------------------------------------ */

let skillList = [
    {
        skillName: "Aranykutatás",
        goldPerClickIncrement: "1",
        description: "Ahol a víz áramlását akadályok megváltoztatják, aranyat találhatunk.",
        amount: 0,
        price: 10,
        link: "./assets/prospecting.png",
    },
    {
        skillName: "Bagolyidomítás",
        goldPerClickIncrement: 10,
        description: "Baglyok betanítását készpénzre válthatjuk. Magasabb szinten postabaglyokat is nevelhetünk.",
        amount: 0,
        price: 200,
        link: "./assets/owl.png",
    },
    {
        skillName: "Gyógyfőzetkészítés",
        goldPerClickIncrement: 25,
        description: `Minél jobban kitanuljuk a gyógyfőzetek készítésének tudományát, 
                     annál több gyógyfőzetet tudunk értékesíteni aranyért cserébe.`,
        amount: 0,
        price: 750,
        link: "./assets/potion.png",
    },
    {
        skillName: "Kereskedelem",
        goldPerClickIncrement: 100,
        description: "Varázstárgyak készítésével és értékesítésével profitot zsebelhetünk be.",
        amount: 0,
        price: 4000,
        link: "./assets/barter.png",
    },
    {
        skillName: "Alkímia",
        goldPerClickIncrement: 300,
        description: "Az aranykészítés tudománya titkos recept alapján.",
        amount: 0,
        price: 15000,
        link: "./assets/alchemy.png",
    },
    {
        skillName: "Varázstudomány",
        goldPerClickIncrement: 1000,
        description: "Az alkímia hatását tovább erősíti és oktatási tevékenységet is végezhetünk.",
        amount: 0,
        price: 100000,
        link: "./assets/wizardry.png",
    },
];


function getSkill({ skillName, goldPerClickIncrement, description, amount, price, link }) {
    return `
<tr>
    <td class="upgrade-text-cell">
        <p><strong>${skillName} (${goldPerClickIncrement} arany / klikk)</strong></p>
        <p>${description}</p>
    </td>
    <td class="upgrade-stats-cell">
        <p>db: ${amount}</p>
        <p>ár: ${formatPrice(price)}</p>
    </td>
    <td class="upgrade-icon-cell">
        <img class="skill-image" src="${link}" alt="${skillName}">
    </td>
</tr>
`
}

/* --------------------------------------------------- */


let employeeList = [
    {
        employeeName: "Aranykutató",
        goldPerSecIncrement: 1,
        description: "Aranyat keres és talál.",
        amount: 0,
        price: 100,
        link: "./assets/prospector.png",
    },
    {
        employeeName: "Bagolyidomár",
        goldPerSecIncrement: 5,
        description: "Szerződéses munkatársként baglyokat tanít.",
        amount: 0,
        price: 1000,
        link: "./assets/owl_trainer.png",
    },
    {
        employeeName: "Győgyfőzet készítő",
        goldPerSecIncrement: 10,
        description: "Gyógyfőzeteket készít és értékesít a piacon.",
        amount: 0,
        price: 3000,
        link: "./assets/potion_mixer.png",
    },
    {
        employeeName: "Kereskedő",
        goldPerSecIncrement: 25,
        description: "Varázstárgyakat készít és értékesít.",
        amount: 0,
        price: 10000,
        link: "./assets/merchant.png",
    },
    {
        employeeName: "Varázsló Professzor",
        goldPerSecIncrement: 100,
        description: "Tanulókat képez ki szerződéses munkatársként. Szabadidejében alkímiával foglalkozik.",
        amount: 0,
        price: 50000,
        link: "./assets/alchemist.png",
    },
    {
        employeeName: "Befektető Kacsa",
        goldPerSecIncrement: 250,
        description: "Dagobert bácsihoz hasonló szakértelemmel kezeli és fialtatja a vagyonodat.",
        amount: 0,
        price: 200000,
        link: "./assets/gold_duck.png",
    },
];

function getEmployee({ employeeName, goldPerSecIncrement, description, amount, price, link }) {
    return `
        <tr>
            <td class="upgrade-icon-cell">
                <img class="skill-image" src="${link}" alt="${employeeName}" />
            </td>
            <td class="upgrade-stats-cell">
                <p>db: ${amount}</p>
                <p>ár: ${formatPrice(price)}</p>
            </td>
            <td class="upgrade-text-cell">
                <p><strong>${employeeName} (${goldPerSecIncrement} arany / mp)</strong></p>
                <p>${description}</p>
            </td>
        </tr>    
    `
};

/* --------- */

function render() {
    clickingArea.innerHTML = getClickingAreaTemplate();  //megjeleníti a függvénnyel a html tartalmat
    document.querySelector(".js-skills-tbody").innerHTML = skillList.map(getSkill).join("");
    document.querySelector(".js-business-tbody").innerHTML = employeeList.map(getEmployee).join("");

};



function initialize() {
    seconds = 0;
    gold = 0;
    goldPerClick = 1;
    goldPerSec = 0;

    clickingArea.addEventListener('click', handleGoldClicked);  //figyeli a klikk eseményt 

    render();
};

initialize();