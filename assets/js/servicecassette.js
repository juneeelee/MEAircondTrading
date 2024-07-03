const translations = {
    en: {
        servicecassettenav:"Services",
        servicecassetteandpricingnav:"Services and Pricing",
        servicingheader:"Service Cassette and Ceiling Price List",
        servicing1:"Servicing",
        cassetteprice:"Price",
        cassettefree:"Includes FREE : Top Up Gas + Checking Whole Air Conditioner",
    },
    
    zh: {
        servicecassettenav: "服务",
        servicecassetteandpricingnav: "服务和定价",
        servicingheader: "服务盒和天花板价格表",
        servicing1: "服务",
        cassetteprice: "价格",
        cassettefree: "包括免费：加注燃气 + 检查整个空调",
    },
    
    ms: {
        servicecassettenav: "Perkhidmatan",
        servicecassetteandpricingnav: "Perkhidmatan dan Harga",
        servicingheader: "Senarai Harga Kaset Servis dan Siling",
        servicing1: "Servis",
        cassetteprice: "Harga",
        cassettefree: "Termasuk PERCUMA: Isi Gas + Pemeriksaan Keseluruhan Penyaman Udara",
    },
    
};


const servicecassettenav = document.getElementById("servicecassettenav");
const servicecassetteandpricingnav = document.getElementById("servicecassetteandpricingnav");
const servicingheader = document.getElementById("servicingheader");
const servicing1 = document.getElementById("servicing1");
const cassetteprice = document.getElementById("cassetteprice");
const cassettefree = document.getElementById("cassettefree");


const setLanguage = (language) => {
    if (translations[language]) {
        servicecassettenav.querySelector('a').textContent = translations[language].servicecassettenav;
        servicecassetteandpricingnav.textContent = translations[language].servicecassetteandpricingnav;
        servicingheader.textContent = translations[language].servicingheader;
        servicing1.textContent = translations[language].pricservicing1e1;
        cassetteprice.textContent = translations[language].cassetteprice;
        cassettefree.textContent = translations[language].cassettefree;     
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

