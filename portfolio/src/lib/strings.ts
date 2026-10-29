import type { Localized } from "@/types/portfolio";

/** Interface copy (navigation, buttons, section labels) — not portfolio content. */
export const strings = {
  navAbout: { th: "เกี่ยวกับ", en: "About" },
  navExperience: { th: "ประสบการณ์", en: "Experience" },
  navWork: { th: "ผลงาน", en: "Work" },
  navCerts: { th: "เกียรติบัตร", en: "Certificates" },
  navContact: { th: "ติดต่อ", en: "Contact" },
  resume: { th: "ดาวน์โหลดเรซูเม่", en: "Download resume" },
  emailMe: { th: "ส่งอีเมล", en: "Email me" },
  switchTheme: { th: "สลับธีมสว่าง/มืด", en: "Toggle light/dark theme" },
  switchLanguage: { th: "เปลี่ยนภาษา", en: "Switch language" },

  hello: { th: "สวัสดีครับ ผมชื่อ", en: "Hi, I'm" },
  scroll: { th: "เลื่อนลง", en: "Scroll" },

  aboutTitle: { th: "สิ่งที่ผมทำได้", en: "What I can do" },
  aboutLead: {
    th: "ตั้งแต่ซ่อมฮาร์ดแวร์ ติดตั้งเครือข่าย ไปจนถึงวิเคราะห์ข้อมูลด้วย SQL และ Python",
    en: "From fixing hardware and setting up networks to analysing data with SQL and Python.",
  },
  experience: { th: "ประสบการณ์ทำงาน", en: "Experience" },
  education: { th: "การศึกษา", en: "Education" },
  workTitle: { th: "ผลงาน", en: "Selected work" },
  workLead: {
    th: "แดชบอร์ด, Machine Learning และงานวิเคราะห์ข้อมูล กดที่การ์ดเพื่อดูรายละเอียด",
    en: "Dashboards, machine learning and data analysis. Tap a card to read more.",
  },
  certsTitle: { th: "เกียรติบัตร", en: "Certificates" },
  certsLead: { th: "กดเพื่อเปิดไฟล์ PDF", en: "Click to open the PDF" },

  featured: { th: "ผลงานเด่น", en: "Featured" },
  steps: { th: "ขั้นตอน", en: "Steps" },
  challenge: { th: "โจทย์", en: "The problem" },
  approach: { th: "วิธีทำ", en: "What I did" },
  outcome: { th: "ผลลัพธ์", en: "Result" },

  contactTitle: { th: "ร่วมงานกับผม", en: "Let's work together" },
  contactBody: {
    th: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ",
    en: "Feel free to reach out for collaborations or just a friendly hello.",
  },
  backToTop: { th: "กลับด้านบน ↑", en: "Back to top ↑" },
} satisfies Record<string, Localized>;
