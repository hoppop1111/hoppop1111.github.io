const data = {
    en: {
        hero: { 
            name: "Kamol Supsaengin",
            role: "Jack of all trades🦆", 
            bio: "I am a multi-talented individual with an interest in IT and data science. I have experience in telecommunications and am interested in analyzing data to solve problems.",
            btnResume: "Resume"
        },
        skills: { 
            header: "Skills", 
            list: ["Hardware Troubleshooting", "Network Config", "Windows / Linux", "Remote Support", "Microsoft 365", "SQL / Python"],
            toolsHeader: "Tools",
            toolsList: ["Microsoft Excel", "Power BI", "Command Line", "Git", "VS Code","Google Analytics 4"]
        },
        experience: {
            title: "Experience",
            role: "Telecom Technician",
            company: "Wire and Wireless Co., Ltd.",
            time: "2022-2023",
            desc: [
                "Maintained telecommunication equipment & fiber optics.",
                "Diagnosed hardware/network issues for customers.",
                "Provided on-site support ensuring service quality."
            ]
        },
        education: {
            title: "Education",
            list: [
                {
                    school: "Sripatum University",
                    year: "2021-2024",
                    degree: "Digital Marketing",
                    desc: "Focus on digital tools, data analysis for marketing, and new technologies."
                },
                {
                    school: "Nawamin Thrachutit College",
                    year: "2017-2021",
                    degree: "Telecommunications (Vocational Diploma)",
                    desc: "Studied telecom systems, networking basics, and electronics maintenance."
                }
            ]
        },
        contactSection: {
            title: "Let's work together",
            desc: "Feel free to reach out for collaborations or just a friendly hello."
        },
        projects: {
            header: "Selected Projects",
            list: [
                {
                    title: "IT & Sales Dashboard",
                    desc: "Excel dashboard for monitoring performance metrics.",
                    tags: ["Excel", "Dashboard"],
                    link: "dashboard/EX_1.xlsx"
                },
                {
                    title: "E-commerce Analysis",
                    desc: "Cleaned large datasets to optimize inventory.",
                    tags: ["Data Cleaning", "Logic"],
                    link: "dashboard/EX_2.xlsx"
                },
                {
                    title: "Machine Learning",
                    desc: "Implemented ML algorithms on Kaggle.",
                    tags: ["Python", "Kaggle"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/machine-learning"
                },
                {
                    title: "MNIST AI",
                    desc: "Digit classification using Neural Networks.",
                    tags: ["AI", "Deep Learning"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/mnist"
                },
                {
                    title: "COVID-19 Stats",
                    desc: "Visualizing pandemic trends in Thailand.",
                    tags: ["Visualization", "Python"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/covid-19-in-thailand"
                },
                {
                    title: "University Rankings",
                    desc: "Exploratory Data Analysis on global education.",
                    tags: ["EDA", "Research"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/top-university-2024"
                }
            ]
        },
        certificates: {
            header: "Certificates",
            list: [
                { name: "Google Sheets Crash Course", file: "certs/google-sheets-crash-course.pdf" },
                { name: "SQL Crash Course", file: "certs/sql-crash-course.pdf" },
                { name: "Mini Data Science Bootcamp", file: "certs/mini-data-science-bootcamp.pdf" },
                { name: "Microsoft Learn Achievements", file: "certs/microsoft-learn.pdf" },
                { name: "R Crash Course", file: "certs/r-crash-course.pdf" },
                { name: "Prompt Design with Bard AI", file: "certs/prompt-design-bard-ai.pdf" },
                { name: "Value Chain & Stakeholders", file: "certs/Certificate-BMD1001-TH.pdf" },
                { name: "Digital Marketing", file: "certs/Certificate-BMD1004-TH.pdf" },
                { name: "Design Thinking", file: "certs/Certificate-S02-TH.pdf" }
            ]
        },
        contact: { title: "Contact", btn: "Contact Me" }
    },
    th: {
        hero: { 
            name: "กมล สืบแสงอินทร์",
            role: "มนุษย์เป็ด🦆", 
            bio: "ผมเป็นมนุษย์เป็ด ที่มีความชื่นชอบในด้าน IT และ Data Science มีประสบการณ์ในการทำงานด้าน โทรคมนาคม และสนใจในการวิเคราะห์ข้อมูลเพื่อแก้ไขปัญหาต่างๆ",
            btnResume: "เรซูเม่"
        },
        skills: { 
            header: "ทักษะความสามารถ", 
            list: ["ซ่อม/ประกอบคอมพิวเตอร์", "ติดตั้ง Network/WiFi", "Windows / Linux", "Remote Support", "Microsoft 365", "SQL / Python"],
            toolsHeader: "เครื่องมือ",
            toolsList: ["Microsoft Excel", "Power BI", "Command Line", "Git", "VS Code","Google Analytics 4"]
        },
        experience: {
            title: "ประสบการณ์ทำงาน",
            role: "ช่างเทคนิคโทรคมนาคม",
            company: "บจก. ไวร์ แอนด์ ไวร์เลส",
            time: "2565-2566",
            desc: [
                "ดูแลและซ่อมบำรุงอุปกรณ์โทรคมนาคม/Fiber Optic",
                "วิเคราะห์แก้ไขปัญหา Network และ Hardware หน้างาน",
                "ให้บริการและแก้ปัญหาทางเทคนิคให้ลูกค้า"
            ]
        },
        education: {
            title: "ประวัติการศึกษา",
            list: [
                {
                    school: "มหาวิทยาลัยศรีปทุม",
                    year: "2564-2567",
                    degree: "การตลาดดิจิทัล",
                    desc: "ศึกษาการใช้เครื่องมือดิจิทัล, การวิเคราะห์ข้อมูลเพื่อการตลาด และเทคโนโลยีใหม่ๆ"
                },
                {
                    school: "วิทยาลัยการอาชีพนวมินทราชูทิศ",
                    year: "2560-2564",
                    degree: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาโทรคมนาคม",
                    desc: "พื้นฐานระบบเครือข่าย, อิเล็กทรอนิกส์, และการซ่อมบำรุงอุปกรณ์สื่อสาร"
                }
            ]
        },
        contactSection: {
            title: "ร่วมงานกับผม",
            desc: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ"
        },
        projects: {
            header: "ผลงานเด่น",
            list: [
                {
                    title: "Sales Dashboard",
                    desc: "แดชบอร์ด Excel ติดตาม KPI แสดงทักษะจัดการข้อมูล.",
                    tags: ["Excel", "Dashboard"],
                    link: "dashboard/EX_1.xlsx"
                },
                {
                    title: "Order Analysis",
                    desc: "ระบบวิเคราะห์ข้อมูลคำสั่งซื้อเพื่อจัดการสต็อก.",
                    tags: ["Data", "Logic"],
                    link: "dashboard/EX_2.xlsx"
                },
                {
                    title: "Machine Learning",
                    desc: "ศึกษาและเขียน Code พื้นฐาน ML บน Kaggle.",
                    tags: ["Python", "Learning"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/machine-learning"
                },
                {
                    title: "MNIST AI Model",
                    desc: "โปรเจกต์ AI จำแนกตัวเลขลายมือเขียน.",
                    tags: ["AI", "Deep Learning"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/mnist"
                },
                {
                    title: "COVID-19 Analysis",
                    desc: "วิเคราะห์สถิติโควิดในไทยด้วย Python.",
                    tags: ["Python", "Viz"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/covid-19-in-thailand"
                },
                {
                    title: "University Rankings",
                    desc: "วิเคราะห์ข้อมูลการจัดอันดับมหาวิทยาลัยโลก.",
                    tags: ["EDA", "Research"],
                    link: "https://www.kaggle.com/code/kamolsupsaengin/top-university-2024"
                }
            ]
        },
        certificates: {
            header: "เกียรติบัตร",
            list: [
                { name: "Google Sheets Crash Course", file: "certs/google-sheets-crash-course.pdf" },
                { name: "SQL Crash Course", file: "certs/sql-crash-course.pdf" },
                { name: "Mini Data Science Bootcamp", file: "certs/mini-data-science-bootcamp.pdf" },
                { name: "Microsoft Learn Achievements", file: "certs/microsoft-learn.pdf" },
                { name: "R Crash Course", file: "certs/r-crash-course.pdf" },
                { name: "Prompt Design with Bard AI", file: "certs/prompt-design-bard-ai.pdf" },
                { name: "Value Chain & Stakeholders", file: "certs/Certificate-BMD1001-TH.pdf" },
                { name: "Digital Marketing", file: "certs/Certificate-BMD1004-TH.pdf" },
                { name: "Design Thinking", file: "certs/Certificate-S02-TH.pdf" }
            ]
        },
        contact: { title: "ช่องทางติดต่อ", btn: "ติดต่อฉัน" }
    }
};

let currentLang = 'th';

// Theme Check
if (localStorage.theme === 'light') {
    document.documentElement.classList.remove('dark');
} else {
    document.documentElement.classList.add('dark');
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
    
    // Navbar
    document.getElementById('lang-btn-text').innerText = currentLang.toUpperCase();
    
    // Hero
    document.getElementById('hero-name').innerText = t.hero.name;
    document.getElementById('hero-role').innerText = t.hero.role;
    document.getElementById('hero-bio').innerText = t.hero.bio;
    document.getElementById('btn-contact').innerText = t.contact.btn;
    document.getElementById('txt-resume').innerText = t.hero.btnResume;

    // Skills
    document.getElementById('skill-header').innerHTML = `<i data-lucide="cpu" class="w-4 h-4"></i> ${t.skills.header}`;
    document.getElementById('skill-list').innerHTML = t.skills.list.map(s => 
        `<span class="px-3 py-1.5 bg-slate-50 dark:bg-gray-800 text-xs font-medium rounded-lg text-slate-700 dark:text-gray-300 border border-slate-100 dark:border-gray-700 cursor-default hover:border-accent/50 transition-colors">${s}</span>`
    ).join('');

    // Tools
    document.getElementById('tools-header').innerHTML = `<i data-lucide="wrench" class="w-4 h-4"></i> ${t.skills.toolsHeader}`;
    document.getElementById('tools-list').innerHTML = t.skills.toolsList.map(s => 
        `<span class="px-3 py-1.5 bg-slate-50 dark:bg-gray-800 text-xs font-medium rounded-lg text-slate-700 dark:text-gray-300 border border-slate-100 dark:border-gray-700 cursor-default hover:border-accent/50 transition-colors">${s}</span>`
    ).join('');

    // Experience
    document.getElementById('exp-title').innerHTML = `<i data-lucide="briefcase" class="w-4 h-4"></i> ${t.experience.title}`;
    document.getElementById('exp-role').innerText = t.experience.role;
    document.getElementById('exp-company').innerText = t.experience.company;
    document.getElementById('exp-date').innerText = t.experience.time;
    document.getElementById('exp-desc').innerHTML = t.experience.desc.map(d => `<li>${d}</li>`).join('');

    // Education
    document.getElementById('edu-title').innerHTML = `<i data-lucide="graduation-cap" class="w-4 h-4"></i> ${t.education.title}`;
    document.getElementById('edu-list').innerHTML = t.education.list.map(e => `
        <div class="relative pl-4 border-l-2 border-slate-200 dark:border-gray-700">
            <div class="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-gray-600 ring-4 ring-white dark:ring-dark-card"></div>
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                <h4 class="font-bold text-slate-800 dark:text-white text-sm">${e.school}</h4>
                <span class="text-xs font-mono text-slate-400 dark:text-gray-500 bg-slate-50 dark:bg-gray-800 px-2 py-0.5 rounded whitespace-nowrap">${e.year}</span>
            </div>
            <p class="text-xs font-medium text-accent mb-1">${e.degree}</p>
            <p class="text-xs text-slate-500 dark:text-gray-400 leading-relaxed">${e.desc}</p>
        </div>
    `).join('');

    // Contact Box
    document.getElementById('contact-cta-title').innerText = t.contactSection.title;
    document.getElementById('contact-cta-desc').innerText = t.contactSection.desc;

    // Projects
    document.getElementById('section-projects').innerText = t.projects.header;
    document.getElementById('projects-grid').innerHTML = t.projects.list.map(p => `
        <a href="${p.link}" target="_blank" class="group block h-full">
            <div class="bg-card-light dark:bg-dark-card p-6 rounded-3xl h-full border border-transparent dark:border-gray-800 hover:shadow-soft dark:hover:border-gray-700 transition-all duration-300 flex flex-col relative overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-transparent to-slate-50/50 dark:to-white/5 opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div class="flex items-start justify-between mb-4 relative z-10">
                    <h4 class="font-bold text-lg text-slate-800 dark:text-gray-200 group-hover:text-accent transition-colors">${p.title}</h4>
                    <i data-lucide="arrow-up-right" class="w-4 h-4 text-slate-300 group-hover:text-slate-800 dark:group-hover:text-white transition"></i>
                </div>
                <p class="text-sm text-slate-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed relative z-10">${p.desc}</p>
                <div class="flex flex-wrap gap-2 relative z-10">
                    ${p.tags.map(tag => `<span class="text-[10px] uppercase tracking-wider font-semibold text-slate-400 dark:text-gray-500 group-hover:text-slate-600 dark:group-hover:text-gray-300 transition-colors">#${tag}</span>`).join('')}
                </div>
            </div>
        </a>
    `).join('');

    // Certificates
    document.getElementById('section-certs').innerText = t.certificates.header;
    document.getElementById('certs-list').innerHTML = t.certificates.list.map(c => `
        <a href="${c.file}" target="_blank" class="flex items-center gap-3 p-4 rounded-2xl bg-card-light dark:bg-dark-card border border-transparent dark:border-gray-800 hover:bg-slate-50 dark:hover:bg-gray-800/50 hover:shadow-sm transition group">
            <div class="p-2 rounded-full bg-slate-100 dark:bg-gray-800 text-slate-400 group-hover:text-slate-800 dark:group-hover:text-white transition">
                <i data-lucide="file-check" class="w-4 h-4"></i>
            </div>
            <span class="text-sm font-medium text-slate-700 dark:text-gray-200 group-hover:translate-x-1 transition-transform">${c.name}</span>
        </a>
    `).join('');

    lucide.createIcons();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'th' : 'en';
    renderContent();
}

// Init
renderContent();

