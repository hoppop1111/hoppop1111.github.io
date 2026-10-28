import type { Localized } from "@/types/portfolio";

/** Interface copy (navigation, buttons, section labels, margin notes) — not portfolio content. */
export const strings = {
  navAbout: { th: "เกี่ยวกับ", en: "about" },
  navExperience: { th: "ประสบการณ์", en: "experience" },
  navWork: { th: "ผลงาน", en: "work" },
  navCerts: { th: "เกียรติบัตร", en: "certificates" },
  navContact: { th: "ติดต่อ", en: "contact" },
  resume: { th: "ดาวน์โหลดเรซูเม่", en: "download my resume" },
  switchTheme: { th: "สลับธีมสว่าง/มืด", en: "Toggle light/dark theme" },
  switchLanguage: { th: "เปลี่ยนภาษา", en: "Switch language" },

  hello: { th: "สวัสดีครับ, ผมชื่อ", en: "hi, my name is" },
  thatsMe: { th: "นี่ผมเองครับ", en: "that's me!" },
  orEmail: { th: "หรือส่งอีเมลมาที่", en: "or email me at" },

  aboutTitle: { th: "สิ่งที่ผมทำได้", en: "What I can do" },
  aboutNote: { th: "ยังเรียนเพิ่มอยู่เรื่อยๆ", en: "still learning more" },
  experience: { th: "ที่ทำงานที่ผ่านมา", en: "Where I've worked" },
  education: { th: "ที่เรียนมา", en: "Where I studied" },
  workTitle: { th: "ผลงาน", en: "Things I've made" },
  workLead: {
    th: "แดชบอร์ด, Machine Learning และงานวิเคราะห์ข้อมูล กดที่ชื่อเพื่อดูรายละเอียด",
    en: "Dashboards, machine learning and data analysis. Tap a title to read more.",
  },
  certsTitle: { th: "เกียรติบัตร", en: "Certificates" },
  certsNote: { th: "เปิดดูไฟล์ PDF ได้", en: "click to open the PDF" },

  favourite: { th: "อันนี้ชอบ ★", en: "a favourite ★" },
  steps: { th: "ขั้นตอน", en: "Steps" },
  challenge: { th: "โจทย์", en: "The problem" },
  approach: { th: "วิธีทำ", en: "What I did" },
  outcome: { th: "ผลลัพธ์", en: "Result" },

  contactTitle: { th: "ร่วมงานกับผม", en: "Let's work together" },
  contactBody: {
    th: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ",
    en: "Feel free to reach out for collaborations or just a friendly hello.",
  },
  signOff: { th: "ขอบคุณที่แวะมาครับ — กมล", en: "thanks for stopping by — Kamol" },
  backToTop: { th: "กลับด้านบน ↑", en: "back to top ↑" },
} satisfies Record<string, Localized>;
