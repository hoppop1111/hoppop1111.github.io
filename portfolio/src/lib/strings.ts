import type { Localized } from "@/types/portfolio";

/** Interface copy (navigation, buttons, section labels) — not portfolio content. */
export const strings = {
  navAbout: { th: "เกี่ยวกับ", en: "About" },
  navExperience: { th: "ประสบการณ์", en: "Experience" },
  navWork: { th: "ผลงาน", en: "Work" },
  navCerts: { th: "เกียรติบัตร", en: "Certificates" },
  navContact: { th: "ติดต่อ", en: "Contact" },
  menu: { th: "เมนู", en: "Menu" },
  viewWork: { th: "ดูผลงาน", en: "View work" },
  resume: { th: "เรซูเม่", en: "Resume" },
  switchTheme: { th: "สลับธีมสว่าง/มืด", en: "Toggle light/dark theme" },
  switchLanguage: { th: "เปลี่ยนภาษา", en: "Switch language" },

  statProjects: { th: "โปรเจกต์", en: "Projects" },
  statCerts: { th: "เกียรติบัตร", en: "Certificates" },
  statSkills: { th: "ทักษะ & เครื่องมือ", en: "Skills & tools" },
  findMe: { th: "ช่องทางออนไลน์", en: "Find me online" },

  aboutTitle: { th: "ทักษะ", en: "Skills" },
  aboutLead: {
    th: "ตั้งแต่ซ่อมฮาร์ดแวร์ เดินระบบเครือข่าย ไปจนถึงเขียน SQL / Python วิเคราะห์ข้อมูล",
    en: "From fixing hardware and wiring networks to writing SQL / Python for data analysis.",
  },
  experience: { th: "ประสบการณ์ทำงาน", en: "Experience" },
  experienceLead: {
    th: "งานที่ผ่านมาและเส้นทางการเรียน",
    en: "Where I've worked and what I've studied.",
  },
  education: { th: "การศึกษา", en: "Education" },
  workTitle: { th: "ผลงาน", en: "Selected work" },
  workLead: {
    th: "แดชบอร์ด, Machine Learning และงานวิเคราะห์ข้อมูล — คลิกเพื่อดูรายละเอียด",
    en: "Dashboards, machine learning and data analysis — click a project for the details.",
  },
  all: { th: "ทั้งหมด", en: "All" },
  featured: { th: "แนะนำ", en: "Featured" },
  certsTitle: { th: "เกียรติบัตร", en: "Certificates" },
  certsLead: {
    th: "คอร์สและการอบรมที่ผ่านมา เปิดดูไฟล์ PDF ได้เลย",
    en: "Courses and trainings I've completed — open any PDF.",
  },

  role: { th: "บทบาท", en: "Role" },
  challenge: { th: "โจทย์", en: "Challenge" },
  approach: { th: "วิธีทำ", en: "Approach" },
  outcome: { th: "ผลลัพธ์", en: "Outcome" },
  process: { th: "กระบวนการ", en: "Process" },
  gallery: { th: "ภาพผลงาน", en: "Gallery" },
  close: { th: "ปิด", en: "Close" },

  contactTitle: { th: "ร่วมงานกับผม", en: "Let's work together" },
  contactBody: {
    th: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ",
    en: "Feel free to reach out for collaborations or just a friendly hello.",
  },
  backToTop: { th: "กลับด้านบน", en: "Back to top" },
  madeIn: { th: "สร้างด้วย ♥ ในประเทศไทย", en: "Made with ♥ in Thailand" },
} satisfies Record<string, Localized>;
