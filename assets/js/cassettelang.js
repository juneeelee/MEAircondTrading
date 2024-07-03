
const translations = {
    en: {
        servicesnav:"Services",
        servicesandpricingnav:"Services and Pricing",
        installationheader:"Installation Cassette And Ceiling",
        installation1:"Installation",
        price1:"Price",
        free1:"Includes FREE : Cooper Pipe 10FT, Wiring 10FT, Outdoor Bracket, Top Up Gas + Checking Whole Air Conditioner",
        overcopper1:"Over Copper Pipe",
        price2:"Price",
        overwiring1:"Over Wiring",
        price3:"Price",


    },
    
    zh: {
        servicesnav:"服务",
        servicesandpricingnav:"服务和价格",
        installationheader:"安装卡式和天花板",
        installation1:"安装",
        price1:"价格",
        free1:"包括免费：铜管10英尺，电线10英尺，室外支架，加气 + 检查整个空调机",
        overcopper1:"超出铜管",
        price2:"价格",
        overwiring1:"超出电线",
        price3:"价格",



        
    },
    ms: {
        servicesnav:"Perkhidmatan",
        servicesandpricingnav:"Perkhidmatan Dan Harga",
        installationheader:"Pemasangan Cassette Dan Siling",
        installation1:"Pemasangan",
        price1:"Harga",
        free1:"PERCUMA: Paip Kuprum 10 Kaki, Pendawaian 10 Kaki, Bracket Luar, Isian Gas + Pemeriksaan Seluruh Penghawa Dingin",
        overcopper1:"Lebih daripada Paip Kuprum",
        price2:"Harga",
        overwiring1:"Lebih daripada Pendawaian",
        price3:"Harga",



    }
};


const installationheader = document.getElementById("installationheader");
const servicesnav = document.getElementById("servicesnav");
const servicesandpricingnav = document.getElementById("servicesandpricingnav");
const installation1 = document.getElementById("installation1");
const price1 = document.getElementById("price1");

const free1 = document.getElementById("free1");
const overcopper1 = document.getElementById("overcopper1");
const price2 = document.getElementById("price2");
const overwiring1 = document.getElementById("overwiring1");
const price3 = document.getElementById("price3");


const setLanguage = (language) => {
    if (translations[language]) {
        installationheader.textContent = translations[language].installationheader;
        servicesnav.querySelector('a').textContent = translations[language].servicesnav;
        servicesandpricingnav.textContent = translations[language].servicesandpricingnav;
        installation1.textContent = translations[language].installation1;
        price1.textContent = translations[language].price1;
        free1.textContent = translations[language].free1;
        price2.textContent = translations[language].price2;
        overcopper1.textContent = translations[language].overcopper1;
        overwiring1.textContent = translations[language].overwiring1;
        price3.textContent = translations[language].price3;



        
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

