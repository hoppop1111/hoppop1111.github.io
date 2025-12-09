const data = {
    en: {
        nav: { about: "About", skills: "Skills", projects: "Projects", certs: "Certificates", contact: "Contact" },
        hero: { 
            greeting: "Hello, I'm", 
            name: "Kamol Supsaengin",
            role: "Data Analyst", 
            bio: "Aspiring Data Analyst with a background in Digital Marketing and Telecommunications. Passionate about using data to solve problems and drive decisions." 
        },
        skills: { title: "Technical Skills", tools: "Tools & Tech", expTitle: "Experience" },
        skillList: ["Python / SQL", "Power BI / Looker Studio", "Microsoft Excel / Google Sheets", "Data Cleaning (Power Query)", "Data Analysis"],
        experience: {
            role: "Telecom Technician & Consumer Service",
            company: "Wire and Wireless Co., Ltd.",
            desc: [
                "Install, inspect, repair and maintain telecommunication equipment.",
                "Analyze technical problems and find solutions.",
                "Communicate effectively with customers to meet their needs."
            ]
        },
        sectionProjects: "Projects",
        sectionCerts: "Certificates",
        contact: { title: "Contact Me", address: "Bangkok, Thailand", btn: "Contact Me" },
        education: { title: "Education", uni: "Sripatum University", degree: "Digital Marketing" },
        projects: [
            {
                title: "Sales Performance Dashboard",
                desc: "Interactive Excel dashboard analyzing sales across regions, products, and sales representatives. Features dynamic pivot tables and profit margin tracking.",
                tags: ["Excel", "Dashboard", "Pivot Table"],
                link: "dashboard/EX_1.xlsx",
                btnText: "View Excel File",
                icon: "file-spreadsheet"
            },
            {
                title: "E-commerce Order Analysis",
                desc: "Comprehensive analysis of 2023 order data including fulfillment status, sales channels, and product SKU performance to optimize inventory.",
                tags: ["Excel", "Data Cleaning", "Business Intelligence"],
                link: "dashboard/EX_2.xlsx",
                btnText: "View Excel File",
                icon: "table"
            },
            {
                title: "COVID-19 in Thailand",
                desc: "Data analysis and visualization of COVID-19 trends and statistics in Thailand using Python.",
                tags: ["Python", "Data Analysis", "Visualization"],
                link: "https://www.kaggle.com/code/kamolsupsaengin/covid-19-in-thailand",
                btnText: "View on Kaggle",
                icon: "bar-chart-2"
            },
            {
                title: "Top University 2024",
                desc: "Analysis of global university rankings for the year 2024, identifying key trends in higher education.",
                tags: ["Python", "EDA", "Ranking Analysis"],
                link: "https://www.kaggle.com/code/kamolsupsaengin/top-university-2024",
                btnText: "View on Kaggle",
                icon: "pie-chart"
            }
        ],
        certificates: [
            { name: "Mini Data Science Bootcamp", issuer: "DataRockie", file: "certs/mini-data-science-bootcamp.pdf" },
            { name: "SQL Crash Course", issuer: "DataRockie", file: "certs/sql-crash-course.pdf" },
            { name: "R Crash Course", issuer: "DataRockie", file: "certs/r-crash-course.pdf" },
            { name: "Google Sheets Crash Course", issuer: "DataRockie", file: "certs/google-sheets-crash-course.pdf" },
            { name: "Prompt Design with Bard AI", issuer: "DataRockie", file: "certs/prompt-design-bard-ai.pdf" },
            { name: "Digital Marketing", issuer: "SET e-Learning", file: "certs/Certificate-BMD1004-TH.pdf" },
            { name: "Design Thinking", issuer: "SET e-Learning", file: "certs/Certificate-S02-TH.pdf" },
            { name: "Value Chain & Stakeholder Analysis", issuer: "SET e-Learning", file: "certs/Certificate-BMD1001-TH.pdf" },
            { name: "Microsoft Learn Achievements", issuer: "Microsoft", file: "certs/microsoft-learn.pdf" }
        ]
    },
    th: {
        nav: { about: "เกี่ยวกับฉัน", skills: "ทักษะ", projects: "ผลงาน", certs: "เกียรติบัตร", contact: "ติดต่อ" },
        hero: { 
            greeting: "สวัสดีครับ ผมชื่อ", 
            name: "กมล สืบแสงอินทร์",
            role: "นักวิเคราะห์ข้อมูล (Data Analyst)", 
            bio: "มีความมุ่งมั่นในการเป็น Data Analyst มีพื้นฐานด้านการตลาดดิจิทัลและโทรคมนาคม หลงใหลในการใช้ข้อมูลเพื่อแก้ปัญหาและขับเคลื่อนการตัดสินใจ" 
        },
        skills: { title: "ทักษะความสามารถ", tools: "เครื่องมือและเทคโนโลยี", expTitle: "ประสบการณ์ทำงาน" },
        skillList: ["Python / SQL", "Power BI / Looker Studio", "Microsoft Excel / Google Sheets", "Data Cleaning (Power Query)", "การวิเคราะห์ข้อมูล (Data Analysis)"],
        experience: {
            role: "ช่างเทคนิคโทรคมนาคมและบริการลูกค้า",
            company: "บริษัท ไวร์ แอนด์ ไวร์เลส จำกัด",
            desc: [
                "ติดตั้ง ตรวจสอบ ซ่อมแซม และบำรุงรักษาอุปกรณ์โทรคมนาคม",
                "วิเคราะห์ปัญหาทางเทคนิค และหาแนวทางแก้ไข",
                "สื่อสารกับลูกค้าอย่างมีประสิทธิภาพ เพื่อตอบสนองความต้องการ"
            ]
        },
        sectionProjects: "ผลงาน",
        sectionCerts: "เกียรติบัตร",
        contact: { title: "ช่องทางติดต่อ", address: "กรุงเทพมหานคร, ไทย", btn: "ติดต่อฉัน" },
        education: { title: "การศึกษา", uni: "มหาวิทยาลัยศรีปทุม", degree: "การตลาดดิจิทัล" },
        projects: [
            {
                title: "Sales Performance Dashboard",
                desc: "แดชบอร์ด Excel วิเคราะห์ยอดขายตามภูมิภาค สินค้า และพนักงานขาย พร้อมติดตามกำไร (Profit Margin) ด้วย Pivot Table",
                tags: ["Excel", "Dashboard", "Pivot Table"],
                link: "dashboard/EX_1.xlsx",
                btnText: "ดาวน์โหลดไฟล์ Excel",
                icon: "file-spreadsheet"
            },
            {
                title: "E-commerce Order Analysis",
                desc: "การวิเคราะห์ข้อมูลคำสั่งซื้อปี 2023 ติดตามสถานะการจัดส่ง ช่องทางการขาย และประสิทธิภาพของสินค้าเพื่อบริหารสต็อก",
                tags: ["Excel", "Data Cleaning", "Business Intelligence"],
                link: "dashboard/EX_2.xlsx",
                btnText: "ดาวน์โหลดไฟล์ Excel",
                icon: "table"
            },
            {
                title: "COVID-19 in Thailand",
                desc: "การวิเคราะห์ข้อมูลและการแสดงภาพแนวโน้มและสถิติของ COVID-19 ในประเทศไทยด้วย Python",
                tags: ["Python", "Data Analysis", "Visualization"],
                link: "https://www.kaggle.com/code/kamolsupsaengin/covid-19-in-thailand",
                btnText: "ดูบน Kaggle",
                icon: "bar-chart-2"
            },
            {
                title: "Top University 2024",
                desc: "การวิเคราะห์การจัดอันดับมหาวิทยาลัยโลกปี 2024 เพื่อดูแนวโน้มสำคัญในการศึกษาขั้นสูง",
                tags: ["Python", "EDA", "Ranking Analysis"],
                link: "https://www.kaggle.com/code/kamolsupsaengin/top-university-2024",
                btnText: "ดูบน Kaggle",
                icon: "pie-chart"
            }
        ],
        certificates: [
            { name: "มินิ Data Science บูทแคมป์", issuer: "DataRockie", file: "certs/mini-data-science-bootcamp.pdf" },
            { name: "คอร์ส SQL ฉบับเร่งรัด", issuer: "DataRockie", file: "certs/sql-crash-course.pdf" },
            { name: "คอร์สภาษา R ฉบับเร่งรัด", issuer: "DataRockie", file: "certs/r-crash-course.pdf" },
            { name: "คอร์ส Google Sheets ฉบับเร่งรัด", issuer: "DataRockie", file: "certs/google-sheets-crash-course.pdf" },
            { name: "การออกแบบ Prompt ด้วย Bard AI", issuer: "DataRockie", file: "certs/prompt-design-bard-ai.pdf" },
            { name: "Digital Marketing", issuer: "ตลาดหลักทรัพย์แห่งประเทศไทย", file: "certs/Certificate-BMD1004-TH.pdf" },
            { name: "Design Thinking", issuer: "ตลาดหลักทรัพย์แห่งประเทศไทย", file: "certs/Certificate-S02-TH.pdf" },
            { name: "การวิเคราะห์ห่วงโซ่คุณค่าและผู้มีส่วนได้เสีย", issuer: "ตลาดหลักทรัพย์แห่งประเทศไทย", file: "certs/Certificate-BMD1001-TH.pdf" },
            { name: "ความสำเร็จจาก Microsoft Learn", issuer: "Microsoft", file: "certs/microsoft-learn.pdf" }
        ]
    }
};

// ตั้งค่าเริ่มต้นเป็นภาษาไทย ('th')
let currentLang = 'th';

// Check theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark');
}

function toggleTheme() {
    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    } else {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    }
}

function renderContent() {
    const t = data[currentLang];

    // Render Common Text
    document.getElementById('nav-about').innerText = t.nav.about;
    document.getElementById('nav-skills').innerText = t.nav.skills;
    document.getElementById('nav-projects').innerText = t.nav.projects;
    document.getElementById('nav-certificates').innerText = t.nav.certs;
    document.getElementById('nav-contact').innerText = t.nav.contact;
    document.getElementById('lang-btn-text').innerText = currentLang.toUpperCase();
    
    // Hero
    document.getElementById('hero-greeting').innerText = t.hero.greeting;
    document.getElementById('hero-name').innerText = t.hero.name;
    document.getElementById('hero-role').innerText = t.hero.role;
    document.getElementById('hero-bio').innerText = t.hero.bio;
    document.getElementById('btn-contact').innerText = t.contact.btn;

    document.getElementById('section-skills').innerText = t.skills.title;
    document.getElementById('skill-tools').innerText = t.skills.tools;
    
    // Render Skills
    const skillListEl = document.getElementById('skill-list');
    skillListEl.innerHTML = '';
    t.skillList.forEach(skill => {
        skillListEl.innerHTML += `<span class="px-4 py-2 bg-blue-50/50 dark:bg-gray-700/50 text-gray-700 dark:text-gray-200 rounded-lg text-sm font-medium transition-colors border border-blue-100 dark:border-gray-600">${skill}</span>`;
    });

    // Render Experience
    document.getElementById('exp-title').innerText = t.skills.expTitle;
    document.getElementById('exp-role').innerText = t.experience.role;
    document.getElementById('exp-company').innerText = t.experience.company;
    const expListEl = document.getElementById('exp-desc');
    expListEl.innerHTML = '';
    t.experience.desc.forEach(item => {
        expListEl.innerHTML += `<li>${item}</li>`;
    });

    // Render Projects
    document.getElementById('section-projects').innerText = t.sectionProjects;
    const projectGrid = document.getElementById('projects-grid');
    projectGrid.innerHTML = '';
    t.projects.forEach(proj => {
        const tagsHtml = proj.tags.map(tag => 
            `<span class="text-xs font-semibold px-2 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded border border-blue-100 dark:border-blue-900/50">#${tag}</span>`
        ).join('');

        const cardHtml = `
        <div class="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-white/20 dark:border-gray-700 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col transform hover:-translate-y-1">
            <div class="h-48 bg-gradient-to-br from-gray-800 to-black dark:from-gray-900 dark:to-black flex items-center justify-center text-white p-8 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
                <i data-lucide="${proj.icon}" class="w-12 h-12 opacity-80 group-hover:scale-110 transition duration-500 text-white relative z-10"></i>
            </div>
            <div class="p-8 flex flex-col flex-grow">
                <h3 class="text-xl font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 dark:text-white transition">${proj.title}</h3>
                <p class="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    ${proj.desc}
                </p>
                <div class="flex flex-wrap gap-2 mb-6">
                    ${tagsHtml}
                </div>
                <a href="${proj.link}" target="_blank" class="inline-flex items-center gap-2 text-sm font-bold text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition self-start group-hover:translate-x-1 duration-300">
                    <span>${proj.btnText}</span> <i data-lucide="external-link" class="w-4 h-4"></i>
                </a>
            </div>
        </div>`;
        projectGrid.innerHTML += cardHtml;
    });

    // Render Certificates
    document.getElementById('section-certs').innerText = t.sectionCerts;
    const certsGrid = document.getElementById('certs-grid');
    certsGrid.innerHTML = '';
    t.certificates.forEach(cert => {
        const certHtml = `
        <div class="flex justify-between items-center p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-white/90 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm hover:shadow-md transition hover:-translate-y-0.5">
            <div class="flex items-start gap-4">
                <div class="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-blue-600 dark:text-blue-400 mt-1">
                    <i data-lucide="award" class="w-5 h-5"></i>
                </div>
                <div>
                    <h4 class="font-bold text-gray-900 dark:text-white text-sm md:text-base">${cert.name}</h4>
                    <p class="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">${cert.issuer}</p>
                </div>
            </div>
            <a href="${cert.file}" target="_blank" class="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition" title="View Certificate">
                <i data-lucide="eye" class="w-5 h-5"></i>
            </a>
        </div>`;
        certsGrid.innerHTML += certHtml;
    });

    // Re-initialize Icons after HTML injection
    lucide.createIcons();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'th' : 'en';
    renderContent();
}

// Initial Run
lucide.createIcons();
renderContent();