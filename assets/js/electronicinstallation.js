const translations = {
    en: {
        electronicnav:"Services",
        electronicservicesandpricingnav:"Services and Pricing",
        electronicheader:"Electronic Installation Price List",
        electronic1:"Electronic Installation",
        electronic2:"Electronic",
        electronicprice1:"Price",
        fan:"Fan",
        tv:"TV Hanging Stand Bracket",
        rangehood:"Range Hood",
        waterheater:"Water Heater",
        deliveryfee:"Delivery Fees",
        deliveryarea:"Delivery Area",
        electronicprice2:"Price / Order",
        delivery1:"Within Delivery Place",
        delivery2:"Out of Delivery Place",
    },
    
    zh: {
        electronicnav: "服务",
        electronicservicesandpricingnav: "服务和定价",
        electronicheader: "电子安装价格表",
        electronic1: "电子安装",
        electronic2: "电子",
        electronicprice: "价格",
        fan: "风扇",
        tv: "电视挂架",
        rangehood: "抽油烟机",
        waterheater: "热水器",
        deliveryfee: "配送费",
        deliveryarea: "配送区域",
        electronicprice2: "价格 / 订单",
        delivery1: "在配送地点内",
        delivery2: "在配送地点外",
    },
    
    ms: {
        electronicnav: "Perkhidmatan",
        electronicservicesandpricingnav: "Perkhidmatan dan Harga",
        electronicheader: "Senarai Harga Pemasangan Elektronik",
        electronic1: "Pemasangan Elektronik",
        electronic2: "Elektronik",
        electronicprice: "Harga",
        fan: "Kipas",
        tv: "Pendakap Gantung TV",
        rangehood: "Hud Dapur",
        waterheater: "Pemanas Air",
        deliveryfee: "Yuran Penghantaran",
        deliveryarea: "Kawasan Penghantaran",
        electronicprice2: "Harga / Pesanan",
        delivery1: "Dalam Kawasan Penghantaran",
        delivery2: "Luar Kawasan Penghantaran",
    }    
    
    
};


const electronicnav = document.getElementById("electronicnav");
const electronicservicesandpricingnav = document.getElementById("electronicservicesandpricingnav");
const electronicheader = document.getElementById("electronicheader");
const electronic1 = document.getElementById("electronic1");
const electronic2 = document.getElementById("electronic2");
const electronicprice = document.getElementById("electronicprice");
const fan = document.getElementById("fan");
const tv = document.getElementById("tv");
const rangehood = document.getElementById("rangehood");
const waterheater = document.getElementById("waterheater");
const deliveryfee = document.getElementById("deliveryfee");
const deliveryarea = document.getElementById("deliveryarea");
const electronicprice2 = document.getElementById("electronicprice2");
const delivery1 = document.getElementById("delivery1");
const delivery2 = document.getElementById("delivery2");



const setLanguage = (language) => {
    if (translations[language]) {
        electronicnav.querySelector('a').textContent = translations[language].electronicnav;
        electronicservicesandpricingnav.textContent = translations[language].electronicservicesandpricingnav;
        electronicheader.textContent = translations[language].electronicheader;
        electronic1.textContent = translations[language].electronic1;
        electronic2.textContent = translations[language].electronic2;
        electronicprice.textContent = translations[language].electronicprice;
        fan.textContent = translations[language].fan;     
        tv.textContent = translations[language].tv;     
        rangehood.textContent = translations[language].rangehood;
        waterheater.textContent = translations[language].waterheater;
        deliveryfee.textContent = translations[language].deliveryfee;
        deliveryarea.textContent = translations[language].deliveryarea;
        electronicprice2.textContent = translations[language].electronicprice2;
        delivery1.textContent = translations[language].delivery1;
        delivery2.textContent = translations[language].delivery2;     
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

