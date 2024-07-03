const translations = {
    en: {
        chemicalnav:"Services",
        chemicalservicesandpricingnav:"Services and Pricing",
        chemicalheader:"Installation Chemical Service Price List",
        chemical1:"Chemical Service",
        chemicalprice:"Price",
        chemicalfree:"Includes FREE : Top Up Gas + Checking Whole Air Conditioner",
        chemicalpromo:"Wash 3 A/C RM 400",
        chemicalpromo2:"Wash 5 A/C RM 620",
    },
    
    zh: {
        chemicalnav: "服务",
        chemicalservicesandpricingnav: "服务和定价",
        chemicalheader: "安装化学服务价格表",
        chemical1: "化学服务",
        chemicalprice: "价格",
        chemicalfree: "包括免费：加注燃气+检查整个空调",
        chemicalpromo: "清洗3台空调 RM 400",
        chemicalpromo2: "清洗5台空调 RM 620",
    },
    
    ms: {
        chemicalnav: "Perkhidmatan",
        chemicalservicesandpricingnav: "Perkhidmatan dan Harga",
        chemicalheader: "Senarai Harga Perkhidmatan Kimia Pemasangan",
        chemical1: "Perkhidmatan Kimia",
        chemicalprice: "Harga",
        chemicalfree: "Termasuk PERCUMA: Isi Gas + Pemeriksaan Keseluruhan Penyaman Udara",
        chemicalpromo: "Basuh 3 A/C RM 400",
        chemicalpromo2: "Basuh 5 A/C RM 620",
    },
    
    
};


const chemicalnav = document.getElementById("chemicalnav");
const chemicalservicesandpricingnav = document.getElementById("chemicalservicesandpricingnav");
const chemicalheader = document.getElementById("chemicalheader");
const chemical1 = document.getElementById("chemical1");
const chemicalprice = document.getElementById("chemicalprice");
const chemicalfree = document.getElementById("chemicalfree");
const chemicalpromo = document.getElementById("chemicalpromo");
const chemicalpromo2 = document.getElementById("chemicalpromo2");

const setLanguage = (language) => {
    if (translations[language]) {
        chemicalnav.querySelector('a').textContent = translations[language].chemicalnav;
        chemicalservicesandpricingnav.textContent = translations[language].chemicalservicesandpricingnav;
        chemicalheader.textContent = translations[language].chemicalheader;
        chemical1.textContent = translations[language].chemical1;
        chemicalprice.textContent = translations[language].chemicalprice;
        chemicalfree.textContent = translations[language].chemicalfree;     
        chemicalpromo.textContent = translations[language].chemicalpromo;
        chemicalpromo2.textContent = translations[language].chemicalpromo2;
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

