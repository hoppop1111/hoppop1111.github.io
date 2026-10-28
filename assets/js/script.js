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
                nav: { skills: "Skills", experience: "Experience", projects: "Projects", certs: "Certificates", contact: "Contact" },
                status: "Open to opportunities",
                skillSub: "Technical",
                stats: { projects: "Projects", certs: "Certificates", skills: "Skills & Tools" },
                contactLabel: "Contact"
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

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

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

        // Split the hero name into letters that rise in one by one.
        // Thai combining marks (vowels/tone marks above or below) stay attached to their base letter.
        function splitName(text) {
            const el = document.getElementById('hero-name');
            el.setAttribute('aria-label', text);
            if (reduceMotion) {
                el.textContent = text;
                return;
            }
            const clusters = Array.from(text).reduce((acc, ch) => {
                if (/[ัิ-ฺ็-๎]/.test(ch) && acc.length) acc[acc.length - 1] += ch;
                else acc.push(ch);
                return acc;
            }, []);
            // background-clip:text doesn't reach the animated spans, so each letter gets its own
            // color along the gradient; once the intro ends the plain gradient text takes over again.
            const last = clusters.length - 1;
            const colorAt = i => {
                const p = last ? i / last : 0;
                return p < 0.5
                    ? `color-mix(in oklab, var(--c2) ${Math.round(p * 200)}%, var(--c1))`
                    : `color-mix(in oklab, var(--c3) ${Math.round((p - 0.5) * 200)}%, var(--c2))`;
            };
            el.classList.remove('text-grad');
            // letters are grouped per word so a word never breaks across lines mid-animation
            let html = '<span style="white-space:nowrap">';
            clusters.forEach((c, i) => {
                html += c === ' '
                    ? '</span> <span style="white-space:nowrap">'
                    : `<span class="char" aria-hidden="true" style="animation-delay:${0.25 + i * 0.045}s;color:${colorAt(i)}">${c}</span>`;
            });
            el.innerHTML = html + '</span>';
            el.querySelector('.char:last-child').addEventListener('animationend', () => {
                el.innerHTML = text.split(' ').map(w => `<span style="white-space:nowrap">${w}</span>`).join(' ');
                el.classList.add('text-grad');
            }, { once: true });
        }

        // Typewriter effect for the hero role
        let typeTimer = null;
        function typeRole(text, delay = 0) {
            const el = document.getElementById('hero-role');
            clearTimeout(typeTimer);
            if (reduceMotion) {
                el.textContent = text;
                return;
            }
            const chars = Array.from(text);
            let i = 0;
            el.textContent = '';
            const step = () => {
                el.textContent = chars.slice(0, ++i).join('');
                if (i < chars.length) typeTimer = setTimeout(step, 65);
            };
            typeTimer = setTimeout(step, delay);
        }

        // Count-up animation for the stat cards
        function countUp(id, target) {
            const el = document.getElementById(id);
            if (reduceMotion) {
                el.textContent = target;
                return;
            }
            const start = performance.now();
            const duration = 1600;
            (function frame(now) {
                const p = Math.min((now - start) / duration, 1);
                el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
                if (p < 1) requestAnimationFrame(frame);
            })(start);
        }

        const chip = s =>
            `<span class="chip inline-flex cursor-default items-center gap-2 rounded-full px-4 py-2 text-sm font-medium"><span class="chip-dot"></span>${s}</span>`;

        const marqueePill = s =>
            `<span class="glass font-display mr-4 inline-flex items-center gap-3 rounded-full px-6 py-3 text-lg font-semibold whitespace-nowrap md:text-xl"><span class="chip-dot"></span>${s}</span>`;

        function renderContent(isFirst = false) {
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
            splitName(t.hero.name);
            typeRole(t.hero.role, isFirst ? 1000 : 0);
            setText('hero-bio', t.hero.bio);
            setText('btn-contact', t.contact.btn);
            setText('txt-resume', t.hero.btnResume);

            // Stats
            setText('stat-projects-label', u.stats.projects);
            setText('stat-certs-label', u.stats.certs);
            setText('stat-skills-label', u.stats.skills);

            // Marquee: two rows going opposite ways (each list doubled so the loop is seamless)
            const row1 = t.skills.list.map(marqueePill).join('');
            const row2 = t.skills.toolsList.map(marqueePill).join('');
            document.getElementById('marquee-track-1').innerHTML = row1 + row1;
            document.getElementById('marquee-track-2').innerHTML = row2 + row2;

            // Skills
            setText('skill-header', t.skills.header);
            setText('skill-subheader', u.skillSub);
            document.getElementById('skill-list').innerHTML = t.skills.list.map(chip).join('');

            // Tools
            setText('tools-header', t.skills.toolsHeader);
            document.getElementById('tools-list').innerHTML = t.skills.toolsList.map(chip).join('');

            // Experience
            setText('exp-title', t.experience.title);
            document.getElementById('exp-container').innerHTML = t.experience.list.map((exp, i) => `
                <div class="glass tilt reveal flex flex-col rounded-[2rem] p-7 md:p-9" style="--d:${i * 0.12}s">
                    <div class="mb-6 flex items-start justify-between gap-4">
                        <span class="icon-tile flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl"><i data-lucide="briefcase" class="h-5 w-5"></i></span>
                        <span class="tag rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap">${exp.time}</span>
                    </div>
                    <h4 class="font-display text-2xl font-bold">${exp.role}</h4>
                    <p class="text-grad mb-5 text-sm font-semibold">${exp.company}</p>
                    <ul class="muted space-y-2.5 text-sm leading-relaxed">
                        ${exp.desc.map(d => `<li class="flex gap-3"><span class="chip-dot mt-2 shrink-0"></span><span>${d}</span></li>`).join('')}
                    </ul>
                </div>
            `).join('');

            // Education
            setText('edu-title', t.education.title);
            document.getElementById('edu-list').innerHTML = t.education.list.map(e => `
                <div class="relative pl-9">
                    <span class="timeline-dot"></span>
                    <span class="tag mb-2 inline-block rounded-full px-3 py-0.5 text-xs font-semibold">${e.year}</span>
                    <h4 class="font-display text-lg font-bold">${e.school}</h4>
                    <p class="text-grad mb-1 text-sm font-semibold">${e.degree}</p>
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
                <a href="${p.link}" target="_blank" rel="noopener" class="glass tilt reveal project-card flex h-full flex-col rounded-[2rem] p-7" style="--d:${(i % 3) * 0.1}s">
                    <div class="mb-10 flex items-start justify-between">
                        <span class="num font-display text-5xl font-bold">${String(i + 1).padStart(2, '0')}</span>
                        <span class="arrow flex h-11 w-11 items-center justify-center rounded-full">
                            <i data-lucide="arrow-up-right" class="h-5 w-5"></i>
                        </span>
                    </div>
                    <h4 class="font-display mb-2 text-xl font-bold">${p.title}</h4>
                    <p class="muted mb-6 flex-grow text-sm leading-relaxed">${p.desc}</p>
                    <div class="flex flex-wrap gap-2">
                        ${p.tags.map(tag => `<span class="tag rounded-full px-3 py-1 text-xs font-semibold">${tag}</span>`).join('')}
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
            document.getElementById('certs-list').innerHTML = t.certificates.list.map((c, i) => `
                <a href="${c.file}" target="_blank" rel="noopener" class="glass tilt reveal group flex items-center gap-4 rounded-2xl p-4" style="--d:${(i % 3) * 0.08}s">
                    <span class="icon-tile flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"><i data-lucide="award" class="h-5 w-5"></i></span>
                    <span class="text-sm font-semibold transition-transform duration-300 group-hover:translate-x-1">${c.name}</span>
                </a>
            `).join('');

            refreshIcons();
            observeReveals();
        }

        function toggleLanguage() {
            currentLang = currentLang === 'en' ? 'th' : 'en';
            renderContent();
        }

        // Reveal elements on scroll (re-run after each render for newly injected cards)
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        function observeReveals() {
            document.querySelectorAll('.reveal:not(.in)').forEach(el => revealObserver.observe(el));
        }

        // Count up the stats the first time they scroll into view
        const statsObserver = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) return;
            countUp('stat-projects', data.en.projects.list.length);
            countUp('stat-certs', data.en.certificates.list.length);
            countUp('stat-skills', data.en.skills.list.length + data.en.skills.toolsList.length);
            statsObserver.disconnect();
        }, { threshold: 0.4 });
        statsObserver.observe(document.getElementById('stats'));

        // Scroll: progress bar + parallax (blobs and section headings)
        const root = document.documentElement;
        let ticking = false;
        function onScroll() {
            const max = root.scrollHeight - innerHeight;
            root.style.setProperty('--progress', max > 0 ? scrollY / max : 0);
            if (!reduceMotion) {
                root.style.setProperty('--sy', scrollY);
                document.querySelectorAll('.parallax').forEach(el => {
                    const r = el.getBoundingClientRect();
                    const offset = (r.top + r.height / 2 - innerHeight / 2) * parseFloat(el.dataset.speed || 0.1);
                    // clamp so headings never drift into the cards below them
                    el.style.setProperty('--py', Math.max(-18, Math.min(18, offset)).toFixed(1));
                });
            }
            ticking = false;
        }
        addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(onScroll);
                ticking = true;
            }
        }, { passive: true });
        addEventListener('resize', onScroll);

        // Mouse-driven effects (desktop only): blob parallax, 3D card tilt, magnetic buttons
        if (finePointer && !reduceMotion) {
            document.addEventListener('pointermove', e => {
                root.style.setProperty('--mx', (e.clientX / innerWidth - 0.5).toFixed(3));
                root.style.setProperty('--my', (e.clientY / innerHeight - 0.5).toFixed(3));

                const card = e.target.closest('.tilt');
                if (card) {
                    const r = card.getBoundingClientRect();
                    const x = (e.clientX - r.left) / r.width;
                    const y = (e.clientY - r.top) / r.height;
                    card.style.setProperty('--ry', ((x - 0.5) * 10).toFixed(2) + 'deg');
                    card.style.setProperty('--rx', ((0.5 - y) * 10).toFixed(2) + 'deg');
                    card.style.setProperty('--gx', (x * 100) + '%');
                    card.style.setProperty('--gy', (y * 100) + '%');
                }

                const mag = e.target.closest('.magnetic');
                if (mag) {
                    const r = mag.getBoundingClientRect();
                    mag.style.setProperty('--tx', ((e.clientX - r.left - r.width / 2) * 0.25).toFixed(1) + 'px');
                    mag.style.setProperty('--ty', ((e.clientY - r.top - r.height / 2) * 0.35).toFixed(1) + 'px');
                }
            });
            document.addEventListener('pointerout', e => {
                const card = e.target.closest('.tilt');
                if (card && !card.contains(e.relatedTarget)) {
                    card.style.setProperty('--rx', '0deg');
                    card.style.setProperty('--ry', '0deg');
                }
                const mag = e.target.closest('.magnetic');
                if (mag && !mag.contains(e.relatedTarget)) {
                    mag.style.setProperty('--tx', '0px');
                    mag.style.setProperty('--ty', '0px');
                }
            });
        }

        // Init
        setText('year', new Date().getFullYear());
        renderContent(true);
        onScroll();
