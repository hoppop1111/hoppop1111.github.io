import type { PortfolioData } from "@/types/portfolio";

/**
 * Single source of content for the site.
 *
 * Paths starting with /assets/ are copied from the repo-root `assets/` folder
 * into `public/assets/` by `scripts/sync-assets.mjs` (runs before dev/build).
 *
 * Case-study media without a `src` render as placeholder frames: drop an
 * image into `public/projects/<slug>/` and set `src` to show it.
 */
export const portfolioData: PortfolioData = {
  profile: {
    name: { th: "กมล สืบแสงอินทร์", en: "Kamol Supsaengin" },
    role: { th: "IT Support & Data Analyst", en: "IT Support & Data Analyst" },
    tagline: {
      th: "IT · Network · Data Science",
      en: "IT · Network · Data Science",
    },
    bio: {
      th: "ผมมีความชื่นชอบในด้าน IT และ Data Science มีประสบการณ์ในการทำงานด้าน โทรคมนาคม และสนใจในการวิเคราะห์ข้อมูลเพื่อแก้ไขปัญหาต่างๆ",
      en: "I am a multi-talented individual with an interest in IT and data science. I have experience in telecommunications and am interested in analyzing data to solve problems.",
    },
    status: { th: "พร้อมรับโอกาสใหม่ๆ", en: "Open to opportunities" },
    resume: {
      href: "/assets/docs/Resume_Kamol_Supsaengin.pdf",
      downloadName: "Resume_Kamol_Supsaengin.pdf",
    },
    contacts: [
      { kind: "email", label: "K.supsaengin@gmail.com", href: "mailto:K.supsaengin@gmail.com" },
      { kind: "phone", label: "062-615-9722", href: "tel:+66626159722" },
      { kind: "line", label: "hopzoo00687", href: "https://line.me/ti/p/~hopzoo00687" },
      { kind: "linkedin", label: "kamol-supsaengin", href: "https://www.linkedin.com/in/kamol-supsaengin" },
      { kind: "github", label: "hoppop1111", href: "https://github.com/hoppop1111" },
      { kind: "kaggle", label: "kamolsupsaengin", href: "https://www.kaggle.com/kamolsupsaengin" },
    ],
  },

  skills: [
    {
      id: "technical",
      title: { th: "ทักษะความสามารถ", en: "Skills" },
      icon: "cpu",
      items: [
        { th: "ซ่อม/ประกอบคอมพิวเตอร์", en: "Hardware Troubleshooting" },
        { th: "ติดตั้ง Network/WiFi", en: "Network Config" },
        { th: "Windows / Linux", en: "Windows / Linux" },
        { th: "Remote Support", en: "Remote Support" },
        { th: "Microsoft 365", en: "Microsoft 365" },
        { th: "SQL / Python", en: "SQL / Python" },
      ],
    },
    {
      id: "tools",
      title: { th: "เครื่องมือ", en: "Tools" },
      icon: "wrench",
      items: [
        { th: "Microsoft Excel", en: "Microsoft Excel" },
        { th: "Power BI", en: "Power BI" },
        { th: "Command Line", en: "Command Line" },
        { th: "Git", en: "Git" },
        { th: "VS Code", en: "VS Code" },
        { th: "Google Analytics 4", en: "Google Analytics 4" },
      ],
    },
  ],

  experience: [
    {
      id: "adecco",
      title: { th: "OCS - Oder taker", en: "OCS - Oder taker" },
      org: {
        th: "บริษัท อเด็คโก้ พหลโยธิน จำกัด",
        en: "ADECCO PHAHOLYOTHIN COMPANY LIMITED",
      },
      period: { th: "02/2569-09/2569", en: "02/2026-09/2026" },
      points: [
        {
          th: "รับคำสั่งซื้อจากลูกค้า (ร้านค้า/ร้านอาหาร) และคีย์ข้อมูลเข้าสู่ระบบของบริษัทให้ถูกต้อง",
          en: "Receive orders from customers (stores/restaurants) and accurately input them into the company system.",
        },
        {
          th: "จัดเตรียมและรวบรวมสินค้าตามรายการออเดอร์ที่คีย์เข้าระบบ เพื่อเตรียมพร้อมสำหรับการจัดส่ง",
          en: "Pick and pack products according to the processed orders to ensure they are ready for delivery.",
        },
        {
          th: "ตรวจสอบความถูกต้องของสินค้าก่อนส่งมอบให้พนักงานขนส่ง เพื่อกระจายสินค้าไปยังลูกค้าต่อไป",
          en: "Verify the accuracy of prepared orders and hand them over to the delivery team for final distribution.",
        },
      ],
    },
    {
      id: "wire-and-wireless",
      title: { th: "ช่างเทคนิคโทรคมนาคม", en: "Telecom Technician" },
      org: { th: "บจก. ไวร์ แอนด์ ไวร์เลส", en: "Wire and Wireless Co., Ltd." },
      period: { th: "2565-2566", en: "2022-2023" },
      points: [
        {
          th: "ดูแลและซ่อมบำรุงอุปกรณ์โทรคมนาคม/Fiber Optic",
          en: "Maintained telecommunication equipment & fiber optics.",
        },
        {
          th: "วิเคราะห์แก้ไขปัญหา Network และ Hardware หน้างาน",
          en: "Diagnosed hardware/network issues for customers.",
        },
        {
          th: "ให้บริการและแก้ปัญหาทางเทคนิคให้ลูกค้า",
          en: "Provided on-site support ensuring service quality.",
        },
      ],
    },
  ],

  education: [
    {
      id: "sripatum",
      title: { th: "การตลาดดิจิทัล", en: "Digital Marketing" },
      org: { th: "มหาวิทยาลัยศรีปทุม", en: "Sripatum University" },
      period: { th: "2564-2567", en: "2021-2024" },
      points: [
        {
          th: "ศึกษาการใช้เครื่องมือดิจิทัล, การวิเคราะห์ข้อมูลเพื่อการตลาด และเทคโนโลยีใหม่ๆ",
          en: "Focus on digital tools, data analysis for marketing, and new technologies.",
        },
      ],
    },
    {
      id: "nawamin",
      title: {
        th: "ประกาศนียบัตรวิชาชีพชั้นสูง (ปวส.) สาขาโทรคมนาคม",
        en: "Telecommunications (Vocational Diploma)",
      },
      org: { th: "วิทยาลัยการอาชีพนวมินทราชูทิศ", en: "Nawamin Thrachutit College" },
      period: { th: "2560-2564", en: "2017-2021" },
      points: [
        {
          th: "พื้นฐานระบบเครือข่าย, อิเล็กทรอนิกส์, และการซ่อมบำรุงอุปกรณ์สื่อสาร",
          en: "Studied telecom systems, networking basics, and electronics maintenance.",
        },
      ],
    },
  ],

  certificates: [
    { id: "gsheets", name: "Google Sheets Crash Course", file: "/assets/certs/google-sheets-crash-course.pdf" },
    { id: "sql", name: "SQL Crash Course", file: "/assets/certs/sql-crash-course.pdf" },
    { id: "mini-ds", name: "Mini Data Science Bootcamp", file: "/assets/certs/mini-data-science-bootcamp.pdf" },
    { id: "ms-learn", name: "Microsoft Learn Achievements", file: "/assets/certs/microsoft-learn.pdf" },
    { id: "r", name: "R Crash Course", file: "/assets/certs/r-crash-course.pdf" },
    { id: "bard", name: "Prompt Design with Bard AI", file: "/assets/certs/prompt-design-bard-ai.pdf" },
    { id: "bmd1001", name: "Value Chain & Stakeholders", file: "/assets/certs/Certificate-BMD1001-TH.pdf" },
    { id: "bmd1004", name: "Digital Marketing", file: "/assets/certs/Certificate-BMD1004-TH.pdf" },
    { id: "s02", name: "Design Thinking", file: "/assets/certs/Certificate-S02-TH.pdf" },
  ],

  categories: [
    {
      id: "dashboards",
      accent: "#e8b04a",
      label: { th: "แดชบอร์ด", en: "Dashboards" },
      logline: {
        th: "ตัวเลขที่เล่าเรื่องได้ในหน้าเดียว",
        en: "Numbers that tell the story on one screen",
      },
    },
    {
      id: "machine-learning",
      accent: "#8b7cf6",
      label: { th: "Machine Learning", en: "Machine Learning" },
      logline: {
        th: "สอนเครื่องให้มองเห็นรูปแบบ",
        en: "Teaching machines to see patterns",
      },
    },
    {
      id: "data-analysis",
      accent: "#4fd1c5",
      label: { th: "วิเคราะห์ข้อมูล", en: "Data Analysis" },
      logline: {
        th: "ขุดหาคำตอบจากข้อมูลจริง",
        en: "Digging answers out of real data",
      },
    },
  ],

  caseStudies: [
    // -----------------------------------------------------------------------
    // Fully structured example: every viewer section has entries.
    // -----------------------------------------------------------------------
    {
      slug: "sales-dashboard",
      category: "dashboards",
      featured: true,
      title: { th: "Sales Dashboard", en: "IT & Sales Dashboard" },
      role: { th: "ออกแบบและสร้างแดชบอร์ด", en: "Dashboard design & build" },
      summary: {
        th: "แดชบอร์ด Excel ติดตาม KPI แสดงทักษะจัดการข้อมูล",
        en: "Excel dashboard for monitoring performance metrics.",
      },
      challenge: {
        th: "ข้อมูลยอดขายกระจายอยู่หลายตาราง ทำให้มองภาพรวม KPI ได้ยาก",
        en: "Sales data lived across several tables, making KPIs hard to see at a glance.",
      },
      approach: {
        th: "จัดโครงสร้างข้อมูลใหม่ และออกแบบหน้าแดชบอร์ดให้อ่านง่ายในหน้าเดียว",
        en: "Restructured the data and laid out a single-screen dashboard.",
      },
      outcome: {
        th: "ไฟล์แดชบอร์ดที่เปิดดู KPI หลักได้ทันที",
        en: "A dashboard file that surfaces the key KPIs immediately.",
      },
      tags: ["Excel", "Dashboard"],
      cover: {
        alt: { th: "ภาพหน้าแดชบอร์ด", en: "Dashboard overview" },
      },
      moodboard: [
        {
          id: "ref-layout",
          span: "wide",
          alt: { th: "Reference: เลย์เอาต์แดชบอร์ดที่ชอบ", en: "Reference: dashboard layouts" },
          caption: { th: "แรงบันดาลใจด้านเลย์เอาต์", en: "Layout inspiration" },
        },
        {
          id: "ref-palette",
          span: "square",
          alt: { th: "Reference: โทนสี", en: "Reference: colour palette" },
          caption: { th: "โทนสีที่เลือกใช้", en: "Chosen palette" },
        },
        {
          id: "ref-charts",
          span: "tall",
          alt: { th: "Reference: รูปแบบกราฟ", en: "Reference: chart styles" },
          caption: { th: "สไตล์กราฟ", en: "Chart styles" },
        },
      ],
      process: [
        {
          id: "raw",
          label: { th: "ข้อมูลดิบ", en: "Raw data" },
          note: { th: "ตารางยอดขายก่อนจัดระเบียบ", en: "Sales tables before cleanup" },
          alt: { th: "ภาพข้อมูลดิบ", en: "Raw data screenshot" },
        },
        {
          id: "cleaned",
          label: { th: "จัดระเบียบ", en: "Cleaned" },
          note: { th: "ข้อมูลหลังทำความสะอาดและสรุปผล", en: "Cleaned and summarised data" },
          alt: { th: "ภาพข้อมูลหลังจัดระเบียบ", en: "Cleaned data screenshot" },
        },
        {
          id: "final",
          label: { th: "แดชบอร์ด", en: "Final" },
          note: { th: "หน้าแดชบอร์ดที่เสร็จสมบูรณ์", en: "The finished dashboard" },
          alt: { th: "ภาพแดชบอร์ดฉบับสมบูรณ์", en: "Final dashboard screenshot" },
        },
      ],
      mockups: [
        {
          id: "laptop",
          surface: "laptop",
          caption: { th: "แดชบอร์ดบนแล็ปท็อป", en: "Dashboard on a laptop" },
          alt: { th: "Mockup แล็ปท็อป", en: "Laptop mockup" },
          hotspots: [
            { id: "kpi", x: 22, y: 28, label: { th: "การ์ด KPI หลัก", en: "Headline KPI cards" } },
            { id: "trend", x: 64, y: 58, label: { th: "กราฟแนวโน้มยอดขาย", en: "Sales trend chart" } },
          ],
        },
        {
          id: "screen",
          surface: "screen",
          caption: { th: "แสดงบนจอประชุม", en: "On a meeting-room screen" },
          alt: { th: "Mockup จอแสดงผล", en: "Display mockup" },
        },
      ],
      links: [
        { kind: "file", href: "/assets/dashboard/EX_1.xlsx", label: { th: "ดาวน์โหลดไฟล์ Excel", en: "Download Excel file" } },
      ],
    },
    {
      slug: "mnist-ai",
      category: "machine-learning",
      featured: true,
      title: { th: "MNIST AI Model", en: "MNIST AI" },
      role: { th: "สร้างและเทรนโมเดล", en: "Model building & training" },
      summary: {
        th: "โปรเจกต์ AI จำแนกตัวเลขลายมือเขียน",
        en: "Digit classification using Neural Networks.",
      },
      challenge: {
        th: "จำแนกภาพตัวเลขลายมือเขียน 0-9 ให้ถูกต้อง",
        en: "Correctly classify handwritten digits 0-9 from images.",
      },
      approach: {
        th: "เตรียมข้อมูลภาพ สร้าง Neural Network และเทรน/ประเมินผลบน Kaggle",
        en: "Prepared the image data, built a neural network, and trained/evaluated it on Kaggle.",
      },
      outcome: {
        th: "Notebook ที่แสดงขั้นตอนตั้งแต่ข้อมูลจนถึงผลการทำนาย",
        en: "A notebook walking from raw data to predictions.",
      },
      tags: ["AI", "Deep Learning", "Python"],
      cover: { alt: { th: "ตัวอย่างภาพตัวเลข MNIST", en: "MNIST digit samples" } },
      moodboard: [
        {
          id: "digits",
          span: "wide",
          alt: { th: "ตัวอย่างภาพตัวเลขในชุดข้อมูล", en: "Sample digits from the dataset" },
        },
        {
          id: "architecture",
          span: "tall",
          alt: { th: "แผนภาพโครงสร้างโมเดล", en: "Model architecture diagram" },
        },
      ],
      process: [
        {
          id: "data",
          label: { th: "ข้อมูล", en: "Data" },
          note: { th: "สำรวจและเตรียมภาพตัวเลข", en: "Exploring and preparing the digit images" },
          alt: { th: "ภาพการสำรวจข้อมูล", en: "Data exploration" },
        },
        {
          id: "training",
          label: { th: "เทรนโมเดล", en: "Training" },
          note: { th: "กราฟ loss / accuracy ระหว่างเทรน", en: "Loss / accuracy curves during training" },
          alt: { th: "กราฟการเทรน", en: "Training curves" },
        },
        {
          id: "predictions",
          label: { th: "ผลลัพธ์", en: "Predictions" },
          note: { th: "ตัวอย่างผลการทำนาย", en: "Sample predictions" },
          alt: { th: "ภาพผลการทำนาย", en: "Prediction samples" },
        },
      ],
      mockups: [
        {
          id: "notebook",
          surface: "laptop",
          caption: { th: "Notebook บน Kaggle", en: "The Kaggle notebook" },
          alt: { th: "Mockup notebook", en: "Notebook mockup" },
        },
      ],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/mnist",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },

    // -----------------------------------------------------------------------
    // Lighter entries: viewer sections with no items are hidden.
    // -----------------------------------------------------------------------
    {
      slug: "order-analysis",
      category: "dashboards",
      title: { th: "Order Analysis", en: "E-commerce Analysis" },
      role: { th: "ทำความสะอาดและวิเคราะห์ข้อมูล", en: "Data cleaning & analysis" },
      summary: {
        th: "ระบบวิเคราะห์ข้อมูลคำสั่งซื้อเพื่อจัดการสต็อก",
        en: "Cleaned large datasets to optimize inventory.",
      },
      challenge: { th: "ข้อมูลคำสั่งซื้อจำนวนมากและไม่เป็นระเบียบ", en: "A large, messy order dataset." },
      approach: { th: "ทำความสะอาดข้อมูลและสรุปเพื่อใช้วางแผนสต็อก", en: "Cleaned and summarised the data for stock planning." },
      outcome: { th: "ไฟล์วิเคราะห์ที่ใช้ประกอบการจัดการสต็อก", en: "An analysis file that supports inventory decisions." },
      tags: ["Data Cleaning", "Logic"],
      cover: { alt: { th: "ภาพไฟล์วิเคราะห์คำสั่งซื้อ", en: "Order analysis workbook" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        { kind: "file", href: "/assets/dashboard/EX_2.xlsx", label: { th: "ดาวน์โหลดไฟล์ Excel", en: "Download Excel file" } },
      ],
    },
    {
      slug: "machine-learning",
      category: "machine-learning",
      title: { th: "Machine Learning", en: "Machine Learning" },
      role: { th: "ศึกษาและเขียนโค้ด", en: "Study & implementation" },
      summary: {
        th: "ศึกษาและเขียน Code พื้นฐาน ML บน Kaggle",
        en: "Implemented ML algorithms on Kaggle.",
      },
      challenge: { th: "ทำความเข้าใจอัลกอริทึม ML พื้นฐาน", en: "Understanding core ML algorithms." },
      approach: {
        th: "ลงมือเขียนโค้ดอัลกอริทึมบน Kaggle Notebook",
        en: "Implemented the algorithms hands-on in a Kaggle notebook.",
      },
      outcome: { th: "Notebook สรุปการทดลอง", en: "A notebook documenting the experiments." },
      tags: ["Python", "Kaggle"],
      cover: { alt: { th: "ภาพ Notebook ML", en: "ML notebook" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/machine-learning",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },
    {
      slug: "covid-19-thailand",
      category: "data-analysis",
      title: { th: "COVID-19 Analysis", en: "COVID-19 Stats" },
      role: { th: "วิเคราะห์และทำ Visualization", en: "Analysis & visualization" },
      summary: {
        th: "วิเคราะห์สถิติโควิดในไทยด้วย Python",
        en: "Visualizing pandemic trends in Thailand.",
      },
      challenge: { th: "ทำให้แนวโน้มสถิติโควิดในไทยเข้าใจง่าย", en: "Make Thailand's COVID-19 trends easy to read." },
      approach: { th: "วิเคราะห์ข้อมูลและสร้างกราฟด้วย Python", en: "Analysed the data and charted it with Python." },
      outcome: { th: "Notebook พร้อมกราฟแนวโน้ม", en: "A notebook of trend charts." },
      tags: ["Visualization", "Python"],
      cover: { alt: { th: "กราฟสถิติโควิด", en: "COVID-19 trend chart" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/covid-19-in-thailand",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },
    {
      slug: "university-rankings",
      category: "data-analysis",
      title: { th: "University Rankings", en: "University Rankings" },
      role: { th: "สำรวจข้อมูล (EDA)", en: "Exploratory data analysis" },
      summary: {
        th: "วิเคราะห์ข้อมูลการจัดอันดับมหาวิทยาลัยโลก",
        en: "Exploratory Data Analysis on global education.",
      },
      challenge: { th: "หาแพทเทิร์นในข้อมูลอันดับมหาวิทยาลัยโลก", en: "Find patterns in global university rankings." },
      approach: { th: "ทำ EDA และสรุปผลด้วยกราฟ", en: "Ran an EDA and summarised it in charts." },
      outcome: { th: "Notebook สรุปข้อค้นพบ", en: "A notebook of findings." },
      tags: ["EDA", "Research"],
      cover: { alt: { th: "กราฟอันดับมหาวิทยาลัย", en: "University ranking chart" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/top-university-2024",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },
    {
      slug: "byd-analysis",
      category: "data-analysis",
      title: { th: "byd_analysis", en: "byd_analysis" },
      role: { th: "วิเคราะห์ข้อมูลหุ้น", en: "Stock data analysis" },
      summary: {
        th: "วิเคราะห์หุ้น BYD ด้วย EDA และ Visualization",
        en: "Exploratory Data Analysis on BYD stock.",
      },
      challenge: { th: "ทำความเข้าใจความเคลื่อนไหวของหุ้น BYD", en: "Understand how BYD's stock has moved." },
      approach: { th: "ทำ EDA และ Visualization ข้อมูลราคาหุ้น", en: "EDA and visualization of the price data." },
      outcome: { th: "Notebook พร้อมกราฟวิเคราะห์", en: "A notebook of analysis charts." },
      tags: ["EDA", "Visualization"],
      cover: { alt: { th: "กราฟราคาหุ้น BYD", en: "BYD price chart" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/byd-analysis",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },
    {
      slug: "top-100-notebooks",
      category: "data-analysis",
      title: { th: "Top_100_notebooks", en: "Top_100_notebooks" },
      role: { th: "ดึงข้อมูล (Data Scraping)", en: "Data scraping" },
      summary: {
        th: "datascraping 100 notebooks ที่มีการใช้งานสูงสุด",
        en: "Data scraping 100 notebooks with the highest usage.",
      },
      challenge: { th: "รวบรวมข้อมูล 100 notebooks ยอดนิยม", en: "Collect data on the 100 most-used notebooks." },
      approach: {
        th: "เขียนสคริปต์ scraping และจัดเก็บเป็นชุดข้อมูล",
        en: "Wrote a scraper and stored the results as a dataset.",
      },
      outcome: { th: "ชุดข้อมูลพร้อมวิเคราะห์ต่อ", en: "A dataset ready for further analysis." },
      tags: ["Data Scraping", "Kaggle"],
      cover: { alt: { th: "ตารางข้อมูล notebooks", en: "Notebook data table" } },
      moodboard: [],
      process: [],
      mockups: [],
      links: [
        {
          kind: "notebook",
          href: "https://www.kaggle.com/code/kamolsupsaengin/top-100-notebooks",
          label: { th: "ดู Notebook", en: "View notebook" },
        },
      ],
    },
  ],
};
