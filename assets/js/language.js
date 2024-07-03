// const translations = {
//     en: {
//       p1:"Top Quality Air Conditioning Service at the Best Price!",
//       p2:"Book Your Air Conditioning Service Today via WhatsApp!",
//       p3:"Choose us for affordable and efficient service"
//     },
  
//     zh : {
//       p1:"以最优惠的价格提供最优质的空调服务！",
//       p2:"立即通过 WhatsApp 预订空调服务！",
//       p3:"选择我们，享受实惠且高效的服务",
//     },
  
//   ms : {
//     p1: "Perkhidmatan Penyaman Udara Berkualiti Terbaik pada Harga Terbaik!",
//     p2: "Tempah Perkhidmatan Penyaman Udara Anda Hari Ini melalui WhatsApp!",
//     p3: "Pilih kami untuk perkhidmatan yang berpatutan dan cekap",
//   }
// }
  
//   const languageSelector = document.querySelector("select");
//   let p1 = document.getElementById("header1");
//   let p2 = document.getElementById("header2");
//   let p3 = document.getElementById("lchoose");
  
  
  
//   languageSelector.addEventListener("change", (event) => {
//     setLanguage(event.target.value);
//     localStorage.setItem('selectedLanguage', event.target.value);
//   })
  
//   const setLanguage = (langauge) => {
//     if(langauge == "zh"){
//       p1.innerText = translations.zh.p1;
//       p2.innerText = translations.zh.p2;
//       p3.innerText = translations.zh.p3;
//     } else if (langauge == "en"){
//       p1.innerText = translations.en.p1;
//       p2.innerText = translations.en.p2;
//       p3.innerText = translations.en.p3;
//     } else if (langauge == "ms"){
//     p1.innerText = translations.ms.p1;
//     p2.innerText = translations.ms.p2;
//     p3.innerText = translations.ms.p3;
//   }
//   }

//   // Check if a language preference is saved in localStorage
// const savedLanguage = localStorage.getItem('selectedLanguage');
// if (savedLanguage) {
//     setLanguage(savedLanguage);
//     languageSelector.value = savedLanguage;
// } else {
//     setLanguage('en'); // Default language
// }


const translations = {
    en: {
        header1: "Top-Quality Air Conditioning Service at the ",
        header1Span: "Best Price!",
        header2: "Book Your Air Conditioning Service Today via WhatsApp!",
        lchoose: "Choose Us For ",
        lchooseSpan1: "Affordable ",
        lchoose2: "And ",
        lchooseSpan2: "Efficient",
        lchooseEnd: " Service",
        chooseus1:"Expert Technicians",
        whyus1:"Our highly trained and certified professionals are experts in diagnosing and fixing all types of airconditioning issues",
        chooseus2:"Same Day Service",
        whyus2:"Reach out to us on WhatsApp for immediate assistance, and your order will be ready within 10 minutes",
        chooseus3:"Affordable Aircond Service",
        whyus3:"Enjoy low prices acress Klang, Selangor, Shah Alam, and Kuala Lumpur",
        servicestitle:"Our Services",
        servicesdesc:"Aircond Service & Installation in Klang, Selangor, Shah Alam, & Kuala Lumpur",
        service1:"Installation Cassette and Ceiling",
        service1desc:"Our Services Includes: Free Copper Pipe 10ft, Free Wiring 10ft, Free Outdoor Bracket, Free Top Us Gas + Free Checking Whole Air Conditional",
        service2:"Service Cassette and Ceiling",
        service2desc:"Our Services Includes: Free Top Up Gas + Free Checking Whole Air Conditional",
        service3:"Installation Wall Type",
        service3desc:"Our Services Includes: Free Copper Pipe 10ft, Free Wiring 10ft, Free Outdoor Bracket, Free 13 AMP Plug, Free Top Us Gas + Free Checking Whole Air Conditional",
        service4:"Installation Chemical Service",
        service4desc:"Our Services Includes: Free Top Up Gas + Free Checking Whole Air Conditional",
        service5:"Electronic Installation Service",
        service5desc:"We Provide Installation for Electronic Fan, TV Hanging Stand Bracket, Range Hood and Water Heater",
        samedaytitle:"Service Aircond ",
        samedaytitlespan:"Same Day!",
        samedaydesc:"Appointment In Just 3 Steps",
        sameday1:"Book at Appointment",
        sameday1desc:"Give us a call or click on the link below.",
        sameday2:"Options & Locations",
        sameday2desc:"Tell us the location & quantity of aircond service.",
        sameday3:"Enjoy Your Cool Space",
        sameday3desc:"Our technicians will handle the rest ensuring your satisfaction.",
        ctatitle:"Book Aircond Services ",
        ctatitlespan:"Today!",
        ctadesc:"Our airconditioning service slots are limited everyday. WhatsApp us now to secure your appointment!",
        ourprojects:"OUR PROJECTS",
        ourprojectsdesc:"Whether it's at home or in the office, expect a refreshingly cool environment with our services!",
        reachout:"NEED TO REACH OUT?",
        reachoutdesc:"We Ensure Your Comfort with Our Premier AC Services! Feel Free to Get in Touch",

    },
    
    zh: {
        header1: "以最优惠的价格提供 ",
        header1Span: "最优质的空调服务!",
        header2: "立即通过 WhatsApp 预订空调服务！",
        lchoose: "选择我们，享受 ",
        lchooseSpan1: "实惠 ",
        lchoose2: "且 ",
        lchooseSpan2: "高效 ",
        lchooseEnd: "的服务",
        chooseus1:"专家技术员",
        whyus1:"我们经过高度培训和认证的专业人员，精通诊断和解决各种空调问题。",
        chooseus2:"当日服务",
        whyus2:"通过WhatsApp联系我们, 即可获得即时帮助, 您的订单将在10分钟内准备好。",
        chooseus3:"经济实惠的空调服务",
        whyus3:"在巴生、雪兰莪、莎阿南和吉隆坡地区，尽享低价优惠。",
        servicestitle:"我们的服务",
        servicesdesc:"巴生、雪兰莪、莎阿南和吉隆坡地区的空调服务与安装",
        service1:"安装卡式和天花板",
        service1desc:"我们的服务包括：免费铜管10英尺，免费电线10英尺，免费室外支架，免费顶部加气 + 免费检查整个空调设备",
        service2:"服务卡式和天花板",
        service2desc:"我们的服务包括：免费加气 + 免费检查整个空调设备",
        service3:"安装壁挂式",
        service3desc:"我们的服务包括：免费铜管10英尺，免费电线10英尺，免费室外支架，免费13安培插头，免费顶部加气 + 免费检查整个空调设备",
        service4:"化学清洗安装服务",
        service4desc:"我们的服务包括：免费加气 + 免费检查整个空调设备",
        service5:"电子安装服务",
        service5desc:"我们提供电子风扇、电视悬挂支架、抽油烟机和热水器的安装服务",
        samedaytitle:"空调服务，",
        samedaytitlespan:"当日进行！",
        samedaydesc:"只需要三步就可以预约",
        sameday1:"做个预约",
        sameday1desc:"给我们打电话或点击下面的链接。",
        sameday2:"选择和地点",
        sameday2desc:"告诉我们空调服务的地点和数量。",
        sameday3:"享受您的凉爽空间",
        sameday3desc:"我们的技术人员将处理剩余的工作，确保您满意。",
        ctatitle:"预订今天的空调服务",
        ctatitlespan:"",
        ctadesc:"我们每天的空调服务名额有限。立即通过WhatsApp联系我们以确保您的预约！",
        ourprojects:"我们的项目",
        ourprojectsdesc:"无论是在家中还是在办公室，通过我们的服务，您都可以期待一个清爽凉爽的环境! ",
        reachout:"需要联系我们吗？",
        reachoutdesc:"我们通过我们的高级空调服务确保您的舒适！随时联系我们。",


        
    },
    ms: {
        header1: "Perkhidmatan Penyaman Udara Berkualiti Tinggi pada ",
        header1Span: "Harga Terbaik!",
        header2: "Tempah Perkhidmatan Penyaman Udara Anda Hari Ini melalui WhatsApp!",
        lchoose: "Pilih kami untuk perkhidmatan yang ",
        lchooseSpan1: "berpatutan ",
        lchoose2: "dan ",
        lchooseSpan2: "cekap",
        lchooseEnd: "",
        chooseus1:"Juruteknik Pakar",
        whyus1:"Pakar kami yang sangat terlatih dan bersijil adalah pakar dalam mendiagnos dan memperbaiki pelbagai masalah penyaman udara.",
        chooseus2:"Servis Hari Sama",
        whyus2:"Hubungi kami melalui WhatsApp untuk bantuan segera, dan pesanan anda akan siap dalam masa 10 minit.",
        chooseus3:"Perkhidmatan Penyaman Udara Berpatutan",
        whyus3:"Nikmati harga rendah di seluruh Klang, Selangor, Shah Alam, dan Kuala Lumpur.",
        servicestitle:"Services Kami",
        servicesdesc:"Perkhidmatan & Pemasangan Penyaman Udara di Klang, Selangor, Shah Alam, & Kuala Lumpur",
        service1:"Pemasangan Cassette dan Siling",
        service1desc:"Perkhidmatan kami termasuk: Paip Tembaga 10 kaki Percuma, Pendawaian 10 kaki Percuma, Bracket Luar Percuma, Gas Us Top Percuma + Pemeriksaan Percuma Keseluruhan Kondisi Udara",
        service2:"Perkhidmatan untuk Cassette dan Siling",
        service2desc:"Perkhidmatan Kami Termasuk: Pengisian Gas Percuma + Pemeriksaan Percuma Keseluruhan Penghawa Dingin",
        service3:"Pemasangan Jenis Dinding",
        service3desc:"Perkhidmatan kami termasuk: Paip Tembaga 10 kaki Percuma, Pendawaian 10 kaki Percuma, Bracket Luar Percuma, Penyambung 13 AMP Percuma, Gas Us Top Percuma + Pemeriksaan Percuma Keseluruhan Kondisi Udara",
        service4:"Perkhidmatan Pemasangan Kimia",
        service4desc:"Perkhidmatan kami termasuk: Pengisian Gas Percuma + Pemeriksaan Percuma Keseluruhan Penghawa Dingin",
        service5:"Perkhidmatan Pemasangan Elektronik",
        service5desc:"Kami menyediakan perkhidmatan pemasangan kipas elektronik, dinding penggantungan televisyen, penyaring asap dan pemanas air",
        samedaytitle:"Servis Aircon ",
        samedaytitlespan:"Pada Hari Sama!",
        samedaydesc:"Temujanji Hanya Dalam 3 Langkah",
        sameday1:"Buat temujanji",
        sameday1desc:"Hubungi kami atau klik pautan di bawah.",
        sameday2:"Pilihan & Lokasi",
        sameday2desc:"Beritahu kami lokasi & bilangan perkhidmatan penyaman udara.",
        sameday3:"Nikmati Ruang Sejuk Anda",
        sameday3desc:"Juruteknik kami akan uruskan yang lain untuk memastikan kepuasan anda.",
        ctatitle:"Tempah Perkhidmatan Penyaman Udara",
        ctatitlespan:" Hari Ini!",
        ctadesc:"Slot perkhidmatan penyaman udara kami adalah terhad setiap hari. WhatsApp kami sekarang untuk menjamin temujanji anda!",
        ourprojects:"PROJEK KAMI",
        ourprojectsdesc:"Sama ada di rumah atau di pejabat, harapkan persekitaran yang sejuk dengan perkhidmatan kami!",
        reachout:"PERLU MENGHUBUNGI KAMI?",
        reachoutdesc:"Kami memastikan keselesaan anda dengan Perkhidmatan Penyaman Udara Premier kami! Jangan ragu untuk menghubungi kami.",

    }
};

const languageSelect = document.getElementById("languageSelector");
const header1 = document.getElementById("header1");
const header1Span = document.getElementById("header1-span");
const header2 = document.getElementById("header2");
const lchoose = document.getElementById("lchoose");
const lchoose2 = document.getElementById("lchoose2");
const lchooseSpan1 = document.getElementById("lchoose-span1");
const lchooseSpan2 = document.getElementById("lchoose-span2");
const lchooseEnd = document.getElementById("lchooseEnd");
const chooseus1 = document.getElementById("chooseus1");
const whyus1 = document.getElementById("whyus1");
const chooseus2 = document.getElementById("chooseus2");
const whyus2 = document.getElementById("whyus2");
const chooseus3 = document.getElementById("chooseus3");
const whyus3 = document.getElementById("whyus3");
const servicestitle = document.getElementById("servicestitle");
const servicesdesc = document.getElementById("servicesdesc");
const service1 = document.getElementById("service1");
const service1desc = document.getElementById("service1desc");
const service2 = document.getElementById("service2");
const service2desc = document.getElementById("service2desc");
const service3 = document.getElementById("service3");
const service3desc = document.getElementById("service3desc");
const service4 = document.getElementById("service4");
const service4desc = document.getElementById("service4desc");
const service5 = document.getElementById("service5");
const service5desc = document.getElementById("service5desc");
const samedaytitle = document.getElementById("samedaytitle");
const samedaytitlespan = document.getElementById("samedaytitlespan");
const samedaydesc = document.getElementById("samedaydesc");
const sameday1 = document.getElementById("sameday1");
const sameday1desc = document.getElementById("sameday1desc");
const sameday2 = document.getElementById("sameday2");
const sameday2desc = document.getElementById("sameday2desc");
const sameday3 = document.getElementById("sameday3");
const sameday3desc = document.getElementById("sameday3desc");
const ctatitle = document.getElementById("ctatitle");
const ctatitlespan = document.getElementById("ctatitlespan");
const ctadesc = document.getElementById("ctadesc");
const ourprojects = document.getElementById("ourprojects");
const ourprojectsdesc = document.getElementById("ourprojectsdesc");
const reachout = document.getElementById("reachout");
const reachoutdesc = document.getElementById("reachoutdesc");


const setLanguage = (language) => {
    if (translations[language]) {
        header1.childNodes[0].nodeValue = translations[language].header1;
        header1Span.innerText = translations[language].header1Span;

        header2.childNodes[0].nodeValue = translations[language].header2;

        lchoose.childNodes[0].nodeValue = translations[language].lchoose;
        lchooseSpan1.innerText = translations[language].lchooseSpan1;
        lchoose.childNodes[2].nodeValue = translations[language].lchoose2;
        lchooseSpan2.innerText = translations[language].lchooseSpan2;
        lchoose.childNodes[4].nodeValue = translations[language].lchooseEnd;

        chooseus1.childNodes[0].nodeValue = translations[language].chooseus1;
        whyus1.childNodes[0].nodeValue = translations[language].whyus1;
        chooseus2.childNodes[0].nodeValue = translations[language].chooseus2;
        whyus2.childNodes[0].nodeValue = translations[language].whyus2;
        chooseus3.childNodes[0].nodeValue = translations[language].chooseus3;
        whyus3.childNodes[0].nodeValue = translations[language].whyus3;

        servicestitle.childNodes[0].nodeValue = translations[language].servicestitle;
        servicesdesc.childNodes[0].nodeValue = translations[language].servicesdesc;

        service1.querySelector('a').textContent = translations[language].service1;
        service1desc.textContent = translations[language].service1desc;
        
        service2.querySelector('a').textContent = translations[language].service2;
        service2desc.textContent = translations[language].service2desc;
        
        service3.querySelector('a').textContent = translations[language].service3;
        service3desc.textContent = translations[language].service3desc;
        
        service4.querySelector('a').textContent = translations[language].service4;
        service4desc.textContent = translations[language].service4desc;
        
        service5.querySelector('a').textContent = translations[language].service5;
        service5desc.textContent = translations[language].service5desc;
        

        samedaytitle.childNodes[0].nodeValue = translations[language].samedaytitle;
        samedaytitlespan.innerText = translations[language].samedaytitlespan;
        samedaydesc.childNodes[0].nodeValue = translations[language].samedaydesc;
        sameday1.childNodes[0].nodeValue = translations[language].sameday1;
        sameday1desc.childNodes[0].nodeValue = translations[language].sameday1desc;
        sameday2.childNodes[0].nodeValue = translations[language].sameday2;
        sameday2desc.childNodes[0].nodeValue = translations[language].sameday2desc;
        sameday3.childNodes[0].nodeValue = translations[language].sameday3;
        sameday3desc.childNodes[0].nodeValue = translations[language].sameday3desc;

        ctatitle.childNodes[0].nodeValue = translations[language].ctatitle;
        ctatitlespan.childNodes[0].nodeValue = translations[language].ctatitlespan;
        ctadesc.childNodes[0].nodeValue = translations[language].ctadesc;

        ourprojects.childNodes[0].nodeValue = translations[language].ourprojects;
        ourprojectsdesc.childNodes[0].nodeValue = translations[language].ourprojectsdesc;
        reachout.childNodes[0].nodeValue = translations[language].reachout;
        reachoutdesc.childNodes[0].nodeValue = translations[language].reachoutdesc;




    }
};


languageSelect.addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;
    setLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    languageSelect.value = savedLanguage;
    setLanguage(savedLanguage);
});


