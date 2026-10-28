import type { Localized } from "@/types/portfolio";

/** Interface copy (navigation, buttons, section labels) — not portfolio content. */
export const strings = {
  navAbout: { th: "เกี่ยวกับ", en: "About" },
  navWork: { th: "ผลงาน", en: "Work" },
  navContact: { th: "ติดต่อ", en: "Contact" },
  viewWork: { th: "ดูผลงาน", en: "View work" },
  resume: { th: "เรซูเม่", en: "Resume" },
  scroll: { th: "เลื่อนลง", en: "Scroll" },
  skills: { th: "ทักษะ", en: "Skills" },
  tools: { th: "เครื่องมือ", en: "Tools" },
  experience: { th: "ประสบการณ์", en: "Experience" },
  education: { th: "การศึกษา", en: "Education" },
  certificates: { th: "เกียรติบัตร", en: "Certificates" },
  role: { th: "บทบาท", en: "Role" },
  challenge: { th: "โจทย์", en: "Challenge" },
  approach: { th: "วิธีทำ", en: "Approach" },
  outcome: { th: "ผลลัพธ์", en: "Outcome" },
  moodboard: { th: "Moodboard", en: "Moodboard" },
  process: { th: "กระบวนการ", en: "Process" },
  mockups: { th: "ผลงานจริง", en: "In context" },
  dragCompare: { th: "ลากเพื่อเทียบ", en: "Drag to compare" },
  clickEnlarge: { th: "คลิกเพื่อดูภาพใหญ่", en: "Click to enlarge" },
  moreWork: { th: "ผลงานอื่นๆ", en: "More work" },
  close: { th: "ปิด", en: "Close" },
  contactTitle: { th: "ร่วมงานกับผม", en: "Let's work together" },
  contactBody: {
    th: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ",
    en: "Feel free to reach out for collaborations or just a friendly hello.",
  },
} satisfies Record<string, Localized>;
