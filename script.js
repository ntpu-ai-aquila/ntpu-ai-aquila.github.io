const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const languageButton = document.querySelector(".lang-btn");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const translations = {
  zh: {
    "nav.about": "團隊介紹",
    "nav.services": "服務內容",
    "nav.faculty": "指導教授",
    "nav.team": "團隊成員",
    "nav.projects": "成果展示",
    "nav.contact": "聯絡我們",
    "hero.title": "AI 技術研發、<br>實作支援與教育訓練",
    "hero.lead": "由跨領域學生組成的技術研發團隊，將人工智慧應用於校園服務、研究與實務需求。",
    "hero.cta": "探索我們的成果",
    "about.title": "讓技術真正落地的跨領域團隊",
    "about.lead": "從需求釐清、原型開發到實際部署，建立完整的 AI 專案協作流程。",
    "about.p1": "NTPU AI Aquila Project 結合資訊管理、統計與企業管理背景，協助校園與合作單位發展可實際使用的人工智慧應用。",
    "about.p2": "我們不只關注模型與程式，也重視使用情境、資訊倫理、溝通品質及成果的可持續性。",
    "stats.faculty": "位指導教授",
    "stats.members": "位公開成員",
    "stats.projects": "項上線成果",
    "services.title": "核心服務",
    "services.lead": "提供技術開發、專案實作支援與教育訓練協作。",
    "services.dev.title": "技術開發",
    "services.dev.desc": "生成式 AI、代理式 AI、影像辨識、自動化流程及智慧系統原型開發。",
    "services.support.title": "實作支援",
    "services.support.desc": "協助需求分析、技術選型、測試除錯、部署與成果展示。",
    "services.edu.title": "教育訓練",
    "services.edu.desc": "擔任 AI 課程助教，提供實作指導、教材協作與學習問題排解。",
    "faculty.title": "指導教授",
    "faculty.lead": "提供研究、技術發展與專案實作方向指導。",
    "faculty.wang.name": "汪志堅",
    "faculty.wang.role": "國立臺北大學資訊中心主任",
    "faculty.wang.desc": "研究專長為網路行銷、電子商務與人工智慧應用。",
    "faculty.dai.name": "戴敏育",
    "faculty.dai.role": "國立臺北大學資訊管理研究所教授兼所長",
    "faculty.dai.desc": "研究專長涵蓋人工智慧、代理式 AI、綠色金融科技、大數據分析、電子商務與生物醫學資訊。",
    "team.title": "團隊成員",
    "team.lead": "跨資訊、統計與管理領域的技術研發成員。",
    "member.lu.name": "盧信廷",
    "member.lu.role": "資訊管理研究所・碩二",
    "member.lu.focus": "生成式 AI 應用、ESG",
    "member.borjen.name": "陳柏臻",
    "member.borjen.role": "資訊管理研究所・碩二",
    "member.borjen.focus": "AI 應用於 ESG 報告書",
    "member.li.name": "李庭甄",
    "member.li.role": "資訊管理研究所・碩二",
    "member.li.focus": "AI 系統開發、影像辨識",
    "member.huang.name": "黃暐宸",
    "member.huang.role": "統計學系・大四",
    "member.huang.focus": "生成式 AI、Agent、Automation",
    "member.wenze.name": "陳文澤",
    "member.wenze.role": "資訊管理研究所・碩二",
    "member.wenze.focus": "應用於牙科植體的 VLM",
    "member.hou.name": "侯惠晏",
    "member.hou.role": "資訊管理研究所・碩二",
    "member.hou.focus": "AI 系統開發、影像辨識",
    "member.chieh.name": "陳杰威",
    "member.chieh.role": "企業管理研究所・碩二",
    "member.chieh.focus": "行銷、人力資源管理",
    "projects.title": "成果展示",
    "projects.lead": "將 AI 實際應用於校園資訊查詢與行政服務。",
    "projects.ntpu": "整合 AI Chat、校內搜尋、網路搜尋與檔案分析的智慧對話平台。",
    "projects.sports.title": "AI 體育室助理",
    "projects.sports.desc": "提供體育室資訊、場地與行政問題查詢的智慧校園服務。",
    "projects.sports.preview": "AI Sports Office Assistant",
    "common.live": "已上線",
    "common.preview": "瀏覽網站 ↗",
    "common.development": "UNDER DEVELOPMENT",
    "common.development.zh": "開發中",
    "common.coming": "網站建置中",
    "common.profile": "個人網站 ↗",
    "common.visit": "前往體驗 ↗",
    "contact.title": "與我們一起推動 AI 應用",
    "contact.lead": "歡迎洽詢技術開發、實作支援與教育訓練合作。",
    "contact.button": "聯絡團隊"
  },
  en: {
    "nav.about": "About",
    "nav.services": "Services",
    "nav.faculty": "Faculty",
    "nav.team": "Team",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.title": "AI Development,<br>Implementation Support & Training",
    "hero.lead": "A cross-disciplinary technical R&D team applying artificial intelligence to campus services, research, and practical needs.",
    "hero.cta": "Explore Our Projects",
    "about.title": "A Cross-disciplinary Team Delivering Practical AI",
    "about.lead": "A complete AI project workflow from requirements analysis and prototyping to deployment.",
    "about.p1": "NTPU AI Aquila Project brings together information management, statistics, and business backgrounds to develop usable AI solutions for the university and partner organizations.",
    "about.p2": "We focus not only on models and code, but also user context, information ethics, communication quality, and sustainable outcomes.",
    "stats.faculty": "Faculty Advisors",
    "stats.members": "Public Members",
    "stats.projects": "Live Projects",
    "services.title": "Core Services",
    "services.lead": "Technology development, project implementation support, and education collaboration.",
    "services.dev.title": "Technology Development",
    "services.dev.desc": "Generative AI, agentic AI, computer vision, automation, and intelligent system prototyping.",
    "services.support.title": "Implementation Support",
    "services.support.desc": "Requirements analysis, technology selection, testing, debugging, deployment, and demonstration.",
    "services.edu.title": "Education & Training",
    "services.edu.desc": "Teaching assistance, hands-on guidance, material collaboration, and learner support.",
    "faculty.title": "Faculty Advisors",
    "faculty.lead": "Guidance in research, technology development, and project implementation.",
    "faculty.wang.name": "Chih-Chien Wang",
    "faculty.wang.role": "Director, Computer Center, National Taipei University",
    "faculty.wang.desc": "Research interests include internet marketing, e-commerce, and AI applications.",
    "faculty.dai.name": "Min-Yuh Day",
    "faculty.dai.role": "Professor and Director, Graduate Institute of Information Management, NTPU",
    "faculty.dai.desc": "Research includes AI, agentic AI, green fintech, big data analytics, e-commerce, and biomedical informatics.",
    "team.title": "Team Members",
    "team.lead": "Technical R&D members from information, statistics, and management fields.",
    "member.lu.name": "Hsin-Ting Lu",
    "member.lu.role": "M.S. Student, Information Management",
    "member.lu.focus": "Generative AI Applications, ESG",
    "member.borjen.name": "Bor-Jen Chen",
    "member.borjen.role": "M.S. Student, Information Management",
    "member.borjen.focus": "AI for ESG Reports",
    "member.li.name": "Ting-Chen Li",
    "member.li.role": "M.S. Student, Information Management",
    "member.li.focus": "AI System Development, Computer Vision",
    "member.huang.name": "Wei-Chen Huang",
    "member.huang.role": "B.S. Student, Statistics",
    "member.huang.focus": "Generative AI, Agents, Automation",
    "member.wenze.name": "Wen-Ze Chen",
    "member.wenze.role": "M.S. Student, Information Management",
    "member.wenze.focus": "VLM for Dental Implant Applications",
    "member.hou.name": "Hui-Yen Hou",
    "member.hou.role": "M.S. Student, Information Management",
    "member.hou.focus": "AI System Development, Computer Vision",
    "member.chieh.name": "Chieh-Wei Chen",
    "member.chieh.role": "M.S. Student, Business Administration",
    "member.chieh.focus": "Marketing, Human Resource Management",
    "projects.title": "Selected Projects",
    "projects.lead": "Applying AI to campus information retrieval and administrative services.",
    "projects.ntpu": "A smart dialogue platform integrating AI chat, campus search, web search, and file analysis.",
    "projects.sports.title": "AI Sports Office Assistant",
    "projects.sports.desc": "A smart campus service for sports office information, venue, and administrative inquiries.",
    "projects.sports.preview": "AI Sports Office Assistant",
    "common.live": "Live",
    "common.preview": "View Website ↗",
    "common.development": "UNDER DEVELOPMENT",
    "common.development.zh": "In Development",
    "common.coming": "Website Coming Soon",
    "common.profile": "Profile ↗",
    "common.visit": "Visit Project ↗",
    "contact.title": "Build AI Applications With Us",
    "contact.lead": "Contact us for technology development, implementation support, and education collaboration.",
    "contact.button": "Contact the Team"
  }
};

let currentLanguage = localStorage.getItem("aquila-language") || "zh";

function applyLanguage(language) {
  document.documentElement.lang = language === "zh" ? "zh-Hant" : "en";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (translations[language][key]) {
      element.innerHTML = translations[language][key];
    }
  });

  currentLanguage = language;
  languageButton.textContent = language === "zh" ? "EN" : "中";
  localStorage.setItem("aquila-language", language);
}

languageButton.addEventListener("click", () => {
  applyLanguage(currentLanguage === "zh" ? "en" : "zh");
});

document.getElementById("year").textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
