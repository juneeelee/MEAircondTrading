const translations = {
    en: {
        installationwallnav:"Services",
        installationwallservicesandpricingnav:"Services and Pricing",
        installationwallheader:"Installation Wall Type Price List",
        installationwall:"Installation",
        installationwallprice:"Price",
        installationwallfree:"Includes FREE : Cooper Pipe 10FT, Wiring 10FT, Outdoor Bracket, 13 AMP Plug, Top Up Gas + Checking Whole Air Conditioner",
        installationwallpipe:"Over Copper Pipe",
        installationwallpipeprice:"Price / FT",
        installationwallwire:"Over Wiring",
        installationwallwireprice:"Price",
        installationwallpromo:"Save More with Our Exclusive Bundle!",
        installationwallpromo2:"**With Purchases of Aircond Service Above 3 Unit",
        installationwallpromo3:"Installation",
        installationwallpromo4:"Get a discount when you service more than 3 air conditioners!",
        installationwallpromoprice:"Price",
    },
    
    zh: {
        installationwallnav: "服务",
        installationwallservicesandpricingnav: "服务和定价",
        installationwallheader: "墙体安装价格表",
        installationwall: "安装",
        installationwallprice: "价格",
        installationwallfree: "免费包括：10英尺铜管、10英尺电线、室外支架、13安培插头、加注燃气+检查整个空调",
        installationwallpipe: "超出铜管",
        installationwallpipeprice: "价格 / 英尺",
        installationwallwire: "超出电线",
        installationwallwireprice: "价格",
        installationwallpromo: "通过我们的独家套餐节省更多！",
        installationwallpromo2: "**购买超过3台空调服务时",
        installationwallpromo3: "安装",
        installationwallpromo4: "当您服务超过3台空调时获得折扣！",
        installationwallpromoprice: "价格",
    },
    
    ms: {
        installationwallnav: "Perkhidmatan",
        installationwallservicesandpricingnav: "Perkhidmatan dan Harga",
        installationwallheader: "Senarai Harga Jenis Pemasangan Dinding",
        installationwall: "Pemasangan",
        installationwallprice: "Harga",
        installationwallfree: "Termasuk PERCUMA: Paip Tembaga 10KAKI, Pendawaian 10KAKI, Kurungan Luar, Palam 13 AMP, Isi Gas + Pemeriksaan Keseluruhan Penyaman Udara",
        installationwallpipe: "Lebih Paip Tembaga",
        installationwallpipeprice: "Harga / KAKI",
        installationwallwire: "Lebih Pendawaian",
        installationwallwireprice: "Harga",
        installationwallpromo: "Jimat Lebih Banyak dengan Tawaran Eksklusif Kami!",
        installationwallpromo2: "**Dengan Pembelian Perkhidmatan Penyaman Udara Melebihi 3 Unit",
        installationwallpromo3: "Pemasangan",
        installationwallpromo4: "Dapatkan diskaun apabila anda menyervis lebih daripada 3 penyaman udara!",
        installationwallpromoprice: "Harga",
    },
    
};


const installationwallnav = document.getElementById("installationwallnav");
const installationwallservicesandpricingnav = document.getElementById("installationwallservicesandpricingnav");
const installationwallheader = document.getElementById("installationwallheader");
const installationwall = document.getElementById("installationwall");
const installationwallprice = document.getElementById("installationwallprice");
const installationwallfree = document.getElementById("installationwallfree");
const installationwallpipe = document.getElementById("installationwallpipe");
const installationwallpipeprice = document.getElementById("installationwallpipeprice");
const installationwallwire = document.getElementById("installationwallwire");
const installationwallwireprice = document.getElementById("installationwallwireprice");
const installationwallpromo = document.getElementById("installationwallpromo");
const installationwallpromo2 = document.getElementById("installationwallpromo2");
const installationwallpromo3 = document.getElementById("installationwallpromo3");
const installationwallpromo4 = document.getElementById("installationwallpromo4");
const installationwallpromoprice = document.getElementById("installationwallpromoprice");

const setLanguage = (language) => {
    if (translations[language]) {
        installationwallnav.querySelector('a').textContent = translations[language].installationwallnav;
        installationwallservicesandpricingnav.textContent = translations[language].installationwallservicesandpricingnav;
        installationwallheader.textContent = translations[language].installationwallheader;
        installationwall.textContent = translations[language].installationwall;
        installationwallprice.textContent = translations[language].installationwallprice;
        installationwallfree.textContent = translations[language].installationwallfree;     
        installationwallpipe.textContent = translations[language].installationwallpipe;
        installationwallpipeprice.textContent = translations[language].installationwallpipeprice;
        installationwallwire.textContent = translations[language].installationwallwire;
        installationwallwireprice.textContent = translations[language].installationwallwireprice;
        installationwallpromo.textContent = translations[language].installationwallpromo;     
        installationwallpromo2.textContent = translations[language].installationwallpromo2;
        installationwallpromo3.textContent = translations[language].installationwallpromo3;
        installationwallpromo4.textContent = translations[language].installationwallpromo4;
        installationwallpromoprice.textContent = translations[language].installationwallpromoprice;

    }
};


languageSelector.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelector.value = savedLanguage;
    setLanguage(savedLanguage);
});

