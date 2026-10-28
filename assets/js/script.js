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
                    list: [
                        {
                            role: "Telecom Technician",
                            company: "Wire and Wireless Co., Ltd.",
                            time: "2022-2023",
                            desc: [
                                "Maintained telecommunication equipment & fiber optics.",
                                "Diagnosed hardware/network issues for customers.",
                                "Provided on-site support ensuring service quality."
                            ]
                        },
                        {
                            role: "OCS - Oder taker",
                            company: "ADECCO PHAHOLYOTHIN COMPANY LIMITED",
                            time: "02/2026-09/2026",
                            desc: [
                                "Receive orders from customers (stores/restaurants) and accurately input them into the company system.",
                                "Pick and pack products according to the processed orders to ensure they are ready for delivery.",
                                "Verify the accuracy of prepared orders and hand them over to the delivery team for final distribution."
                            ]
                        }
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
                    btnShowMore: "Show More",
                    btnShowLess: "Show Less",
                    list: [
                        {
                            title: "IT & Sales Dashboard",
                            desc: "Excel dashboard for monitoring performance metrics.",
                            tags: ["Excel", "Dashboard"],
                            link: "assets/dashboard/EX_1.xlsx"
                        },
                        {
                            title: "E-commerce Analysis",
                            desc: "Cleaned large datasets to optimize inventory.",
                            tags: ["Data Cleaning", "Logic"],
                            link: "assets/dashboard/EX_2.xlsx"
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
                        },
                        {
                            title: "byd_analysis",
                            desc: "Exploratory Data Analysis on BYD stock.",
                            tags: ["EDA", "Visualization"],
                            link: "https://www.kaggle.com/code/kamolsupsaengin/byd-analysis"
                        },
                        {
                            title: "Top_100_notebooks",
                            desc: "Data scraping 100 notebooks with the highest usage.",
                            tags: ["Data Scraping", "Kaggle"],
                            link: "https://www.kaggle.com/code/kamolsupsaengin/top-100-notebooks"
                        }
                    ]
                },
                certificates: {
                    header: "Certificates",
                    list: [
                        { name: "Google Sheets Crash Course", file: "assets/certs/google-sheets-crash-course.pdf" },
                        { name: "SQL Crash Course", file: "assets/certs/sql-crash-course.pdf" },
                        { name: "Mini Data Science Bootcamp", file: "assets/certs/mini-data-science-bootcamp.pdf" },
                        { name: "Microsoft Learn Achievements", file: "assets/certs/microsoft-learn.pdf" },
                        { name: "R Crash Course", file: "assets/certs/r-crash-course.pdf" },
                        { name: "Prompt Design with Bard AI", file: "assets/certs/prompt-design-bard-ai.pdf" },
                        { name: "Value Chain & Stakeholders", file: "assets/certs/Certificate-BMD1001-TH.pdf" },
                        { name: "Digital Marketing", file: "assets/certs/Certificate-BMD1004-TH.pdf" },
                        { name: "Design Thinking", file: "assets/certs/Certificate-S02-TH.pdf" }
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
                    list: [
                        {
                            role: "ช่างเทคนิคโทรคมนาคม",
                            company: "บจก. ไวร์ แอนด์ ไวร์เลส",
                            time: "2565-2566",
                            desc: [
                                "ดูแลและซ่อมบำรุงอุปกรณ์โทรคมนาคม/Fiber Optic",
                                "วิเคราะห์แก้ไขปัญหา Network และ Hardware หน้างาน",
                                "ให้บริการและแก้ปัญหาทางเทคนิคให้ลูกค้า"
                            ]
                        },
                        {
                            role: "OCS - Oder taker",
                            company: "บริษัท อเด็คโก้ พหลโยธิน จำกัด",
                            time: "02/2569-09/2569",
                            desc: [
                                "รับคำสั่งซื้อจากลูกค้า (ร้านค้า/ร้านอาหาร) และคีย์ข้อมูลเข้าสู่ระบบของบริษัทให้ถูกต้อง",
                                "จัดเตรียมและรวบรวมสินค้าตามรายการออเดอร์ที่คีย์เข้าระบบ เพื่อเตรียมพร้อมสำหรับการจัดส่ง",
                                "ตรวจสอบความถูกต้องของสินค้าก่อนส่งมอบให้พนักงานขนส่ง เพื่อกระจายสินค้าไปยังลูกค้าต่อไป"            
                            ]
                        }
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
                    btnShowMore: "เพิ่มเติม",
                    btnShowLess: "แสดงน้อยลง",
                    list: [
                        {
                            title: "Sales Dashboard",
                            desc: "แดชบอร์ด Excel ติดตาม KPI แสดงทักษะจัดการข้อมูล.",
                            tags: ["Excel", "Dashboard"],
                            link: "assets/dashboard/EX_1.xlsx"
                        },
                        {
                            title: "Order Analysis",
                            desc: "ระบบวิเคราะห์ข้อมูลคำสั่งซื้อเพื่อจัดการสต็อก.",
                            tags: ["Data", "Logic"],
                            link: "assets/dashboard/EX_2.xlsx"
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
                        },
                        {
                            title: "byd_analysis",
                            desc: "วิเคราะห์หุ้น BYD ด้วย EDA และ Visualization.",
                            tags: ["EDA", "Visualization"],
                            link: "https://www.kaggle.com/code/kamolsupsaengin/byd-analysis"
                        },
                        {
                            title: "Top_100_notebooks",
                            desc: "datascraping 100 notebooks ที่มีการใช้งานสูงสุด.",
                            tags: ["Data Scraping", "Kaggle"],
                            link: "https://www.kaggle.com/code/kamolsupsaengin/top-100-notebooks"
                        }
                    ]
                },
                certificates: {
                    header: "เกียรติบัตร",
                    list: [
                        { name: "Google Sheets Crash Course", file: "assets/certs/google-sheets-crash-course.pdf" },
                        { name: "SQL Crash Course", file: "assets/certs/sql-crash-course.pdf" },
                        { name: "Mini Data Science Bootcamp", file: "assets/certs/mini-data-science-bootcamp.pdf" },
                        { name: "Microsoft Learn Achievements", file: "assets/certs/microsoft-learn.pdf" },
                        { name: "R Crash Course", file: "assets/certs/r-crash-course.pdf" },
                        { name: "Prompt Design with Bard AI", file: "assets/certs/prompt-design-bard-ai.pdf" },
                        { name: "Value Chain & Stakeholders", file: "assets/certs/Certificate-BMD1001-TH.pdf" },
                        { name: "Digital Marketing", file: "assets/certs/Certificate-BMD1004-TH.pdf" },
                        { name: "Design Thinking", file: "assets/certs/Certificate-S02-TH.pdf" }
                    ]
                },
                contact: { title: "ช่องทางติดต่อ", btn: "ติดต่อฉัน" }
            }
        };

        // UI strings that are not part of the portfolio content above
        const ui = {
            en: {
                nav: { skills: "skills", experience: "experience", projects: "projects", certs: "certificates", contact: "Contact" },
                status: "Open to opportunities",
                skillSub: "Technical",
                stats: { projects: "Projects", certs: "Certificates", skills: "Skills & Tools" },
                contactLabel: "contact"
            },
            th: {
                nav: { skills: "ทักษะ", experience: "ประสบการณ์", projects: "ผลงาน", certs: "เกียรติบัตร", contact: "ติดต่อ" },
                status: "พร้อมรับโอกาสใหม่ๆ",
                skillSub: "ด้านเทคนิค",
                stats: { projects: "ผลงาน", certs: "เกียรติบัตร", skills: "ทักษะ & เครื่องมือ" },
                contactLabel: "ติดต่อ"
            }
        };

        let currentLang = 'th';
        let showAllProjects = false; // transient state to track whether to show all projects or just a subset

        function setText(id, value) {
            const el = document.getElementById(id);
            if (el) el.textContent = value;
        }

        function refreshIcons() {
            if (window.lucide) {
                lucide.createIcons();
            }
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

        function toggleProjects() {
            showAllProjects = !showAllProjects;
            renderContent();
        }

        // Typewriter effect for the hero role
        let typeTimer = null;
        function typeRole(text) {
            const el = document.getElementById('hero-role');
            clearTimeout(typeTimer);
            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                el.textContent = text;
                return;
            }
            const chars = Array.from(text);
            let i = 0;
            el.textContent = '';
            (function step() {
                el.textContent = chars.slice(0, ++i).join('');
                if (i < chars.length) typeTimer = setTimeout(step, 70);
            })();
        }

        // Count-up animation for the stat cards
        function countUp(id, target) {
            const el = document.getElementById(id);
            const start = performance.now();
            const duration = 1200;
            (function frame(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(frame);
            })(start);
        }

        const chip = s =>
            `<span class="chip font-code inline-flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 text-xs"><span class="chip-dot"></span>${s}</span>`;

        function renderContent() {
            const t = data[currentLang];
            const u = ui[currentLang];
            document.documentElement.lang = currentLang;

            // Navbar
            setText('lang-btn-text', currentLang.toUpperCase());
            setText('nav-skills', u.nav.skills);
            setText('nav-experience', u.nav.experience);
            setText('nav-projects', u.nav.projects);
            setText('nav-certs', u.nav.certs);
            setText('nav-contact', u.nav.contact);

            // Hero
            setText('hero-status', u.status);
            setText('hero-name', t.hero.name);
            typeRole(t.hero.role);
            setText('hero-bio', t.hero.bio);
            setText('btn-contact', t.contact.btn);
            setText('txt-resume', t.hero.btnResume);

            // Stats
            setText('stat-projects-label', u.stats.projects);
            setText('stat-certs-label', u.stats.certs);
            setText('stat-skills-label', u.stats.skills);

            // Marquee (list is doubled so the loop is seamless)
            const marqueeItems = [...t.skills.list, ...t.skills.toolsList];
            document.getElementById('marquee-track').innerHTML = [...marqueeItems, ...marqueeItems].map(s =>
                `<span class="flex items-center gap-8 pr-8 whitespace-nowrap"><span>${s}</span><span class="accent text-base">✦</span></span>`
            ).join('');

            // Skills
            setText('skill-header', t.skills.header);
            setText('skill-subheader', u.skillSub);
            document.getElementById('skill-list').innerHTML = t.skills.list.map(chip).join('');

            // Tools
            setText('tools-header', t.skills.toolsHeader);
            document.getElementById('tools-list').innerHTML = t.skills.toolsList.map(chip).join('');

            // Experience
            setText('exp-title', t.experience.title);
            document.getElementById('exp-container').innerHTML = t.experience.list.map(exp => `
                <div class="card card-lift flex flex-col rounded-3xl p-7">
                    <div class="mb-5 flex items-start justify-between gap-4">
                        <div class="arrow-box flex h-11 w-11 shrink-0 items-center justify-center rounded-xl" style="transform:none;">
                            <i data-lucide="briefcase" class="h-5 w-5"></i>
                        </div>
                        <span class="tag font-code rounded-full px-3 py-1 text-[11px] whitespace-nowrap">${exp.time}</span>
                    </div>
                    <h4 class="font-display text-xl font-bold">${exp.role}</h4>
                    <p class="accent font-code mb-4 text-xs">@ ${exp.company}</p>
                    <ul class="muted space-y-2 text-sm leading-relaxed">
                        ${exp.desc.map(d => `<li class="flex gap-2"><span class="accent font-code">▹</span><span>${d}</span></li>`).join('')}
                    </ul>
                </div>
            `).join('');

            // Education
            setText('edu-title', t.education.title);
            document.getElementById('edu-list').innerHTML = t.education.list.map(e => `
                <div class="relative">
                    <span class="timeline-dot" style="left: -31px;"></span>
                    <span class="tag font-code mb-2 inline-block rounded-full px-2.5 py-0.5 text-[11px]">${e.year}</span>
                    <h4 class="font-display text-base font-bold">${e.school}</h4>
                    <p class="accent mb-1 text-sm font-medium">${e.degree}</p>
                    <p class="muted text-sm leading-relaxed">${e.desc}</p>
                </div>
            `).join('');

            // Contact
            setText('contact-label', u.contactLabel);
            setText('contact-cta-title', t.contactSection.title);
            setText('contact-cta-desc', t.contactSection.desc);

            // Projects - showAllProjects
            setText('section-projects', t.projects.header);
            const projectsToRender = showAllProjects ? t.projects.list : t.projects.list.slice(0, 3);
            document.getElementById('projects-grid').innerHTML = projectsToRender.map((p, i) => `
                <a href="${p.link}" target="_blank" rel="noopener" class="card card-lift group flex h-full flex-col rounded-3xl p-6">
                    <div class="mb-8 flex items-start justify-between">
                        <span class="project-num font-code text-sm">${String(i + 1).padStart(2, '0')}</span>
                        <span class="arrow-box flex h-9 w-9 items-center justify-center rounded-full">
                            <i data-lucide="arrow-up-right" class="h-4 w-4"></i>
                        </span>
                    </div>
                    <h4 class="font-display mb-2 text-xl font-bold">${p.title}</h4>
                    <p class="muted mb-6 flex-grow text-sm leading-relaxed">${p.desc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${p.tags.map(tag => `<span class="tag font-code rounded-md px-2 py-0.5 text-[10px] tracking-wider uppercase">${tag}</span>`).join('')}
                    </div>
                </a>
            `).join('');

            //  Show More
            const btnContainer = document.getElementById('projects-btn-container');
            if (t.projects.list.length > 3) {
                btnContainer.style.display = 'block';
                setText('txt-show-projects', showAllProjects ? t.projects.btnShowLess : t.projects.btnShowMore);
                document.getElementById('icon-show-projects').innerHTML =
                    `<i data-lucide="${showAllProjects ? 'chevron-up' : 'chevron-down'}" class="h-4 w-4"></i>`;
            } else {
                btnContainer.style.display = 'none';
            }

            // Certificates
            setText('section-certs', t.certificates.header);
            document.getElementById('certs-list').innerHTML = t.certificates.list.map(c => `
                <a href="${c.file}" target="_blank" rel="noopener" class="card group flex items-center gap-3 rounded-2xl p-4">
                    <span class="arrow-box flex h-9 w-9 shrink-0 items-center justify-center rounded-xl" style="transform:none;">
                        <i data-lucide="file-check" class="h-4 w-4"></i>
                    </span>
                    <span class="text-sm font-medium transition-transform group-hover:translate-x-1">${c.name}</span>
                </a>
            `).join('');

            refreshIcons();
        }

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'th' : 'en';
            renderContent();
        }

        // Cursor spotlight on the page and on cards
        document.addEventListener('pointermove', e => {
            const spot = document.getElementById('spotlight');
            spot.style.setProperty('--x', e.clientX + 'px');
            spot.style.setProperty('--y', e.clientY + 'px');
            const card = e.target.closest && e.target.closest('.card');
            if (card) {
                const r = card.getBoundingClientRect();
                card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
                card.style.setProperty('--my', (e.clientY - r.top) + 'px');
            }
        });

        // Reveal sections on scroll
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

        // Init
        setText('year', new Date().getFullYear());
        renderContent();
        countUp('stat-projects', data.en.projects.list.length);
        countUp('stat-certs', data.en.certificates.list.length);
        countUp('stat-skills', data.en.skills.list.length + data.en.skills.toolsList.length);
