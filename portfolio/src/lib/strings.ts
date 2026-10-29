import type { Localized } from "@/types/portfolio";

/** Interface copy (navigation, buttons, section labels) — not portfolio content. */
export const strings = {
  navAbout: { th: "เกี่ยวกับ", en: "About" },
  navExperience: { th: "ประสบการณ์", en: "Experience" },
  navWork: { th: "ผลงาน", en: "Projects" },
  navCerts: { th: "เกียรติบัตร", en: "Certificates" },
  navContact: { th: "ติดต่อ", en: "Contact" },
  menu: { th: "เมนู", en: "Menu" },
  closeMenu: { th: "ปิดเมนู", en: "Close menu" },
  switchLanguage: { th: "เปลี่ยนภาษา", en: "Switch language" },
  backToTop: { th: "กลับด้านบน", en: "Back to top" },

  heroLines: [
    { th: "ดูแลระบบ", en: "Fixing systems," },
    { th: "อ่านข้อมูล", en: "Reading data," },
    { th: "แก้ปัญหา", en: "Solving problems" },
  ],
  seeProjects: { th: "ดูผลงาน", en: "See projects" },
  getInTouch: { th: "ติดต่อผม", en: "Get in touch" },
  scroll: { th: "เลื่อนลง", en: "Scroll" },

  aboutTitle: { th: "เกี่ยวกับผม", en: "About me" },
  profile: { th: "โปรไฟล์", en: "Profile" },
  basedIn: { th: "ที่อยู่", en: "Based in" },
  country: { th: "ประเทศไทย", en: "Thailand" },
  role: { th: "ตำแหน่ง", en: "Role" },
  focus: { th: "ความสนใจ", en: "Focus" },
  status: { th: "สถานะ", en: "Status" },
  viewResume: { th: "ดูเรซูเม่", en: "View resume" },
  downloadResume: { th: "ดาวน์โหลดเรซูเม่", en: "Download resume" },
  skills: { th: "ทักษะ", en: "Skills" },
  numbers: { th: "ตัวเลข", en: "By the numbers" },
  statProjects: { th: "ผลงานด้านข้อมูลและ ML", en: "Data & ML projects" },
  statCerts: { th: "เกียรติบัตรที่ได้รับ", en: "Certificates earned" },
  statJobs: { th: "ตำแหน่งงานที่ผ่านมา", en: "Roles held" },

  experience: { th: "ประสบการณ์ทำงาน", en: "Professional experience" },
  education: { th: "การศึกษา", en: "Education" },
  workTitle: { th: "ผลงานที่เลือกมา", en: "Selected projects" },
  workLead: {
    th: "แดชบอร์ด, Machine Learning และงานวิเคราะห์ข้อมูล ตั้งแต่ทำความสะอาดข้อมูลไปจนถึงสรุปผล",
    en: "Dashboards, machine learning and data analysis — from cleaning the data to presenting the result.",
  },
  viewDetails: { th: "ดูรายละเอียด", en: "View details" },
  hideDetails: { th: "ซ่อนรายละเอียด", en: "Hide details" },
  open: { th: "เปิด", en: "Open" },
  certsTitle: { th: "เกียรติบัตร", en: "Certificates" },
  certsLead: { th: "กดเพื่อเปิดไฟล์ PDF", en: "Click a row to open the PDF" },

  steps: { th: "ขั้นตอน", en: "Steps" },
  challenge: { th: "โจทย์", en: "The problem" },
  approach: { th: "วิธีทำ", en: "What I did" },
  outcome: { th: "ผลลัพธ์", en: "Result" },

  contactTitle: { th: "มาทำงานด้วยกัน", en: "Let's work together" },
  contactBody: {
    th: "หากคุณกำลังมองหาคนรุ่นใหม่ที่พร้อมเรียนรู้ ติดต่อผมได้เลยครับ",
    en: "Feel free to reach out for collaborations or just a friendly hello.",
  },
} satisfies Record<string, Localized | Localized[]>;
