// Typing effect from profile5.html
const titles = [
  "Software Engineer",
  "Web Developer",
  "Data Solutions Developer",
  "Full Stack Developer",
  "Prompt Engineer"
];
let index = 0;
const typingEl = document.getElementById('typing');

// Define resume path - ensure this is correct
const resumeFile = "resume/resume.pdf"; // Updated path to match the directory structure

function typeNext() {
  typingEl.style.animation = 'none';
  void typingEl.offsetWidth;
  typingEl.textContent = titles[index];
  typingEl.style.animation = 'typing 2.5s steps(30, end), blink 0.7s step-end infinite';
  index = (index + 1) % titles.length;
}

// Theme toggle from profile5.html
let dark = true;
function toggleTheme() {
  document.body.classList.toggle('light-mode');
  
  if (document.body.classList.contains('light-mode')) {
    // Light mode styles
    document.querySelectorAll('.card, .portfolio-card, .content-area, .profile-card')
      .forEach(element => {
        element.style.background = 'rgba(0, 0, 0, 0.05)';
      });
    
    document.querySelectorAll('.portfolio-card-actions')
      .forEach(element => {
        element.style.background = 'rgba(245, 245, 245, 0.8)';
      });
    
    document.querySelector('#topnav').style.background = 'rgba(245, 245, 245, 0.95)';
    
  } else {
    // Dark mode styles
    document.querySelectorAll('.card, .portfolio-card, .content-area, .profile-card')
      .forEach(element => {
        element.style.background = 'rgba(255, 255, 255, 0.05)';
      });
    
    document.querySelectorAll('.portfolio-card-actions')
      .forEach(element => {
        element.style.background = 'rgba(18, 18, 18, 0.7)';
      });
    
    document.querySelector('#topnav').style.background = 'rgba(18, 18, 18, 0.95)';
  }
}

// Tab content from profile6.html
const data = {
  experience: [
    {
      title: "Software Engineer – Unlocked Labs",
      duration: "January 2024 – Present",
      desc: "Developing education and data platforms expanding educational access for incarcerated individuals. Building data-driven solutions to analyze and improve educational programs within the justice system. Designing and implementing scalable open-source software to help states support re-entry, increase access to rehabilitation programs, and analyze program effectiveness."
    },
    {
      title: "AI Solutions Developer – Paid2Learn",
      duration: "December 2023 – December 2024",
      desc: "Employed prompt engineering and ChatGPT to develop data and user experiences aimed at exploring the feasibility of an innovative legal assistance platform powered by generative AI. Designed and implemented pro bono legal resource solutions tailored to underserved communities with limited access to legal representation. Leveraged advanced natural language processing (NLP) and prompt engineering techniques to create structured dialogue templates for common legal scenarios, ensuring clarity, accuracy, and accessibility for users with diverse legal literacy levels."
    },
    {
      title: "Teaching Assistant – LaunchCode",
      duration: "February 2023 – December 2023",
      desc: "Assisted lead instructors in teaching full-stack web development as part of the LC101 program. Provided hands-on guidance in JavaScript, Java, and web development fundamentals. Helped students build real-world applications to demonstrate their technical skills."
    }
  ],
  education: [
    {
      title: "Business Administration",
      duration: "April 2022 – June 2024",
      desc: "Central Methodist University"
    },
    {
      title: "Java Developer Certification",
      duration: "May 2022 – December 2022",
      desc: "LaunchCode"
    },
    {
      title: "Personal Fitness Trainer",
      duration: "September 2019 – March 2019",
      desc: "U.S. Career Institute"
    },
    {
      title: "Legal Assistant Paralegal",
      duration: "February 2018 – July 2018",
      desc: "Blackstone Career Institute"
    }
  ],
  skills: [
    "Python, JavaScript, Java, SQL",
    "React, Next.js, Angular, Node.js",
    "HTML5, CSS3, TypeScript, PHP",
    "Flask, Spring Boot, Express",
    "Pandas, NumPy, Matplotlib, Seaborn",
    "PostgreSQL, MySQL, MongoDB",
    "Data Analysis & Visualization",
    "Automated Data Processing",
    "VS Code, IntelliJ, Jupyter Notebook",
    "Git, Docker, BobCAD, AutoCAD",
    "NLP-based sentiment analysis",
    "Interactive Dashboard Creation",
    "Qualitative & Thematic Data Analysis",
    "Generative AI & Large Language Models",
    "Prompt Engineering & LLM Optimization",
    "AI Application Development with Python",
    "Building AI-powered Web Applications",
    "Flask for AI Application Deployment"
  ],
  certs: [
    {
      title: "IBM — IBM AI Developer (2025)",
      pdf: "certs/IBM_IbmAiDeveloper.pdf"
    },
    {
      title: "IBM — Building Generative AI-Powered Applications with Python (2025)",
      pdf: "certs/IBM_BuildingGenerativeAI-PoweredApplicationsWithPython.pdf"
    },
    {
      title: "IBM — Developing AI Applications with Python and Flask (2025)",
      pdf: "certs/IBM_DevelopingAIAppWPythonAndFlask.pdf"
    },
    {
      title: "IBM — Python For Data Science AI Development (2025)",
      pdf: "certs/IBM_PythonForDataScience-AI-Development.pdf"
    },
    {
      title: "IBM — Software Development Career Guide And Interview Preparation (2025)",
      pdf: "certs/IBM_SoftwareDevelopmentCareerGuideAndInterviewPreparation.pdf"
    },
    {
      title: "IBM — Introduction To Software Engineering (2025)",
      pdf: "certs/IBM_ Introduction to Software Engineering.pdf"
    },
    {
      title: "IBM — Introduction To Artificial Intelligence (2025)",
      pdf: "certs/IBM_IntroductionToArtificialIntelligence.pdf"
    },
    {
      title: "IBM — Introduction to HTML, CSS, & JavaScript (2025)",
      pdf: "certs/IBM_ Introduction to HTML, CSS, & JavaScript.pdf"
    },
    {
      title: "META — Introduction to Frontend Development (2024)",
      pdf: "certs/META_IntroToFrontendDevelopment.pdf"
    },
    {
      title: "META — Introduction to Backend Development (2024)",
      pdf: "certs/META_IntroductionToBackendDevelopment.pdf"
    },
    {
      title: "IBM — Generative AI for Software Developers (2024)",
      pdf: "certs/IBM_GenerativeAIForSoftwareDevelopers.pdf"
    },
    {
      title: "IBM — Generative AI: Introduction and Applications (2024)",
      pdf: "certs/IBM_GenerativeAI- Introduction and Applications.pdf"
    },
    {
      title: "IBM — Generative AI: Elevate Your Software Engineering Career (2024)",
      pdf: "certs/IBM_GenAIElevateYourSoftwareDevelopmentCareer.pdf"
    },
    {
      title: "Scrimba — Prompt Engineering for Web Developers (2024)",
      pdf: "certs/Scrimba_PromptEngineeringForWebDevelopers.pdf"
    },
    {
      title: "IBM — Generative AI: Prompt Engineering Basics (2024)",
      pdf: "certs/IBM_GenAI-Prompt Engineering Basics.pdf"
    },
    {
      title: "AWS — Introduction to Information Technology and AWS Cloud (2024)",
      pdf: "certs/AWS_IntroductionToInformationTechAndAWSCloud.pdf"
    },
    {
      title: "LaunchCode — Recognition of Support for Web Development Course (2023)",
      pdf: "certs/teaching_assistant.pdf"
    },
    {
      title: "LaunchCode — Java Developer Certification (2022)",
      pdf: "certs/lc101.pdf"
    },
    {
      title: "Blackstone Career Institute — Legal Assistant/Paralegal with Distinction (2019)",
      pdf: "certs/blackstone.pdf"
    },
    {
      title: "U.S. Career Institute — Certified Personal Fitness Trainer (2019)",
      pdf: "certs/Anthony Miller-PersonalFitnessTrainer.pdf"
    }
  ],
  portfolio: [
    {
      title: "Education Platform for Corrections",
      desc: "Developed a platform that expands educational access for incarcerated individuals, addressing the 60% illiteracy rate in prisons.",
      url: "https://unlockedlabs.org"
    },
    {
      title: "Rehabilitation Program Analytics",
      desc: "Built data visualization dashboards to analyze and improve educational and rehabilitation programs within the justice system.",
      url: "https://data-solutions.example.com"
    },
    {
      title: "Re-entry Support System",
      desc: "Designed open-source software to help states support re-entry with student achievement records and program tracking.",
      url: "https://reentry-support.example.com"
    },
    {
      title: "Parole Tracking Application",
      desc: "Enhanced parole and release tracking systems, ensuring fair implementation of earned credit policies.",
      url: "https://parole-tracker.example.com"
    },
    {
      title: "Education Outcomes Dashboard",
      desc: "Created interactive visualization tools for real-time analysis of education outcomes for justice reform initiatives.",
      url: "https://edu-outcomes.example.com"
    },
    {
      title: "Accessible Learning Platform",
      desc: "Developed intuitive, accessible web applications for incarcerated students and program administrators.",
      url: "https://accessible-learning.example.com"
    }
  ],
  contact: [
    {
      title: "Email",
      value: "anthony@unlockedlabs.org",
      url: "mailto:anthony@unlockedlabs.org",
      icon: "✉️"
    },
    {
      title: "GitHub",
      value: "@MillerSenior",
      url: "https://github.com/MillerSenior/",
      icon: "💻"
    },
    {
      title: "LinkedIn",
      value: "Anthony Miller Sr",
      url: "https://www.linkedin.com/in/anthony-miller-sr-a38bb02b9/",
      icon: "🔗"
    },
    {
      title: "Location",
      value: "St. Louis, MO",
      url: "",
      icon: "📍"
    },
    {
      title: "Phone",
      value: "(314) 885-8610",
      url: "tel:+13148858610",
      icon: "📱"
    }
  ],
  resume: "resume.pdf" // Path to the resume file
};

const content = document.getElementById('content');
const buttons = document.querySelectorAll('.tab-btn');
let currentPortfolioPage = 1;
const projectsPerPage = 3;

function showTab(tab) {
  // Update nav links
  document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
  document.querySelector(`.nav-link[onclick="showTab('${tab}')"]`).classList.add('active');
  
  // Reset portfolio pagination when switching tabs
  if (tab !== 'portfolio') {
    currentPortfolioPage = 1;
  }
  
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  if (isMobile) {
    // For mobile, render content and show in modal
    let tempContainer = document.createElement('div');
    
    // First render the content without displaying it
    renderContent(tab, tempContainer);
    
    // If it's a resume tab, ensure it has the proper z-index and event handling
    if (tab === 'resume') {
      tempContainer.style.zIndex = '2500';
    }
    
    // Then open it in the mobile modal
    openMobileModal(tempContainer.innerHTML);
  } else {
    // For desktop, render as usual
    renderTab(tab);
  }
  
  // Close mobile menu when a tab is selected
  const bsCollapse = new bootstrap.Collapse(document.getElementById('navbarNav'), {
    toggle: false
  });
  bsCollapse.hide();
}

function renderTab(tab) {
  // Fade out content before replacing it
  content.style.opacity = 0;
  
  setTimeout(() => {
    // Use the renderContent function
    renderContent(tab, content);
    
    // Fade content back in
    content.style.opacity = 1;
    
    // Adjust height for mobile
    setTimeout(handleMobileView, 250);
  }, 200);
}

// Add CSS transitions to content
content.style.transition = 'opacity 0.2s ease';

function openResumeModal() {
  console.log('Opening resume in app viewer:', resumeFile);
  
  // Close any existing mobile modal first
  const mobileModal = document.getElementById('mobileContentModal');
  if (mobileModal && mobileModal.classList.contains('active')) {
    closeMobileModal();
  }
  
  // For mobile, we'll handle this differently - show the resume tab
  if (window.innerWidth <= 768) {
    showTab('resume');
  } else {
    // On desktop, load the PDF in the main content area
    const content = document.getElementById('content');
    if (content) {
      renderTab('resume');
    }
  }
}

function downloadResume() {
  console.log('Attempting to download resume from:', resumeFile);
  
  // Close mobile modal first if it's open
  const mobileModal = document.getElementById('mobileContentModal');
  if (mobileModal && mobileModal.classList.contains('active')) {
    closeMobileModal();
  }
  
  // Show feedback message
  const feedbackElement = document.createElement('div');
  feedbackElement.innerHTML = `<div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
    background: rgba(0, 242, 254, 0.9); color: black; padding: 15px 20px; 
    border-radius: 10px; z-index: 9999; box-shadow: 0 0 20px rgba(0, 0, 0, 0.7);
    font-weight: bold; font-size: 16px; text-align: center; width: 80%;">
    Downloading resume...<br>
    <span style="font-size: 14px; opacity: 0.8;">If download doesn't start automatically, check your browser settings</span></div>`;
  document.body.appendChild(feedbackElement);
  
  // Create a download link and click it
  const link = document.createElement('a');
  link.href = resumeFile;
  link.download = 'Anthony_Miller_Resume.pdf'; // Specify filename
  
  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  
  // Remove feedback after a delay
  setTimeout(() => {
    document.body.removeChild(feedbackElement);
  }, 3000);
}

// Make these functions available globally
window.openResumeModal = openResumeModal;
window.downloadResume = downloadResume;
window.showTab = showTab;
window.toggleTheme = toggleTheme;

// Toggle mobile menu
function toggleMenu() {
  document.getElementById('topnav-links').classList.toggle('active');
}

// Make the function available globally
window.toggleMenu = toggleMenu;

// Ensure footer doesn't overlap content on small screens
function adjustFooterPadding() {
  const footerHeight = document.querySelector('.footer')?.offsetHeight || 0;
  const mainWrapper = document.querySelector('.main-wrapper');
  
  // Only modify padding if main-wrapper exists
  if (mainWrapper) {
    mainWrapper.style.paddingBottom = (footerHeight + 30) + 'px';
  }
  
  // Fix for resume card in mobile view
  if (window.innerWidth <= 768) {
    const resumeContainer = document.querySelector('.resume-container');
    if (resumeContainer) {
      resumeContainer.style.position = 'relative';
      resumeContainer.style.top = 'auto';
    }
  }
}

// Adjust layout for better spacing
function adjustLayout() {
  // Ensure content has proper minimum height
  const windowHeight = window.innerHeight;
  const navHeight = document.querySelector('#topnav').offsetHeight;
  const footerHeight = document.querySelector('.footer').offsetHeight;
  const contentArea = document.querySelector('.content-area');
  
  if (contentArea) {
    contentArea.style.minHeight = (windowHeight - navHeight - footerHeight - 100) + 'px';
  }
}

// Function to handle mobile-specific adjustments
function handleMobileView() {
  const isMobile = window.innerWidth <= 768;
  const contentArea = document.querySelector('.content-area');
  
  if (isMobile) {
    // For mobile, we don't need to modify content area height
    // as it's hidden and content is shown in modals
    // Hide the main content area and show mobile tab interface
    if (contentArea) {
      contentArea.parentElement.style.display = 'none';
    }
  } else if (contentArea) {
    // For desktop, adjust content area for fixed footer
    const windowHeight = window.innerHeight;
    const navHeight = document.querySelector('#topnav').offsetHeight;
    const footerHeight = document.querySelector('.footer').offsetHeight;
    
    // Calculate appropriate height to prevent page scrolling
    // and ensure content doesn't touch navbar or footer
    const contentHeight = windowHeight - navHeight - footerHeight - 60; // 60px for margins
    contentArea.style.height = `${contentHeight}px`;
    contentArea.style.minHeight = 'auto';
    contentArea.style.maxHeight = `${contentHeight}px`;
    contentArea.style.overflowY = 'auto';
    contentArea.style.webkitOverflowScrolling = 'touch';
    
    // Show the content area
    contentArea.parentElement.style.display = 'block';
  }
}

// Functions to handle mobile content modal
function openMobileModal(content) {
  const mobileModal = document.getElementById('mobileContentModal');
  const mobileContent = document.getElementById('mobileModalContent');
  
  // Clear previous content
  mobileContent.innerHTML = '';
  
  // Add the content - either as HTML string or DOM element
  if (typeof content === 'string') {
    mobileContent.innerHTML = content;
  } else {
    mobileContent.appendChild(content);
  }
  
  // Make sure we have a visible close button
  // Check if a close button already exists, if not add one
  const existingCloseBtn = mobileModal.querySelector('.mobile-modal-close');
  if (!existingCloseBtn) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'mobile-modal-close';
    closeBtn.innerHTML = '<span style="font-size: 24px; line-height: 1;">✕</span>';
    closeBtn.onclick = closeMobileModal;
    mobileModal.querySelector('.mobile-modal-content').prepend(closeBtn);
  }
  
  // Set proper height for modal content
  const windowHeight = window.innerHeight;
  const navHeight = document.querySelector('#topnav').offsetHeight;
  const footerHeight = document.querySelector('.footer').offsetHeight;
  
  // Leave space for navbar and footer
  const availableHeight = windowHeight - navHeight - footerHeight - 40; // 40px buffer
  const modalContent = document.querySelector('.mobile-modal-content');
  
  // Set max height
  modalContent.style.maxHeight = `${availableHeight}px`;
  
  // Check if this is the resume modal and reattach event listeners
  if (mobileContent.querySelector('.resume-container')) {
    // Reattach the event listeners for the resume buttons
    const viewBtn = mobileContent.querySelector('.resume-btn.outline');
    const downloadBtn = mobileContent.querySelector('.resume-btn:not(.outline)');
    
    if (viewBtn) {
      viewBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // First close this mobile modal
        closeMobileModal();
        
        // Create new mobile modal content for PDF viewing
        const pdfViewerContent = createMobilePDFViewer(data.resume, 'Anthony Miller - Resume', {
          showBackToResume: true
        });
        
        // Open a new modal with the PDF viewer
        setTimeout(() => {
          openMobileModal(pdfViewerContent);
        }, 300);
      });
    }
    
    if (downloadBtn) {
      downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        // Close mobile modal
        closeMobileModal();
        
        // Download resume
        downloadResume();
      });
    }
  }
  // Check if this contains certificate links and attach event listeners
  else if (mobileContent.querySelectorAll('.cert-link').length > 0) {
    const certLinks = mobileContent.querySelectorAll('.cert-link');
    
    certLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const pdfPath = this.getAttribute('data-pdf');
        const title = this.textContent.trim();
        
        // First close this mobile modal
        closeMobileModal();
        
        // Create new mobile modal content for PDF viewing
        const pdfViewerContent = createMobilePDFViewer(pdfPath, title, {
          showBackToCerts: true
        });
        
        // Open a new modal with the PDF viewer
        setTimeout(() => {
          openMobileModal(pdfViewerContent);
        }, 300);
      });
    });
  }
  
  // Show modal
  mobileModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
  
  // Add click outside to close functionality
  mobileModal.addEventListener('click', function(e) {
    // If the click is directly on the modal background (not on its children), close the modal
    if (e.target === mobileModal) {
      closeMobileModal();
    }
  });
}

// Function to create a PDF viewer in mobile modal
function createMobilePDFViewer(pdfPath, title, options = {}) {
  console.log('Creating mobile PDF viewer for:', pdfPath);
  
  // Container for everything
  const container = document.createElement('div');
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.display = 'flex';
  container.style.flexDirection = 'column';
  
  // Header with title and buttons
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '15px';
  
  const titleEl = document.createElement('h3');
  titleEl.textContent = title;
  titleEl.style.margin = '0';
  
  const buttonsContainer = document.createElement('div');
  buttonsContainer.style.display = 'flex';
  buttonsContainer.style.gap = '10px';
  
  // Back button - conditionally added
  if (options.showBackToCerts) {
    const backBtn = document.createElement('button');
    backBtn.className = 'resume-btn outline cert-back-btn'; // Added class for identification
    backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg> Back';
    // Use direct event handler instead of inline function
    backBtn.addEventListener('click', function(e) {
      console.log('Back button clicked for certs view');
      e.preventDefault(); // Prevent any default behavior
      e.stopPropagation(); // Stop event from bubbling
      closeMobileModal();
      setTimeout(() => { 
        console.log('Showing certs tab');
        showTab('certs'); 
      }, 300);
    });
    buttonsContainer.appendChild(backBtn);
  } 
  else if (options.showBackToResume) {
    const backBtn = document.createElement('button');
    backBtn.className = 'resume-btn outline resume-back-btn'; // Added class for identification
    backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg> Back';
    // Use direct event handler instead of inline function
    backBtn.addEventListener('click', function(e) {
      console.log('Back button clicked for resume view');
      e.preventDefault(); // Prevent any default behavior
      e.stopPropagation(); // Stop event from bubbling
      closeMobileModal();
      setTimeout(() => { 
        console.log('Showing resume tab');
        showTab('resume'); 
      }, 300);
    });
    buttonsContainer.appendChild(backBtn);
  }
  
  // View in new tab button
  const viewBtn = document.createElement('button');
  viewBtn.className = 'resume-btn outline';
  viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg> View';
  viewBtn.addEventListener('click', function(e) { 
    console.log('View button clicked for:', pdfPath);
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event from bubbling
    window.open(pdfPath, '_blank');
  });
  buttonsContainer.appendChild(viewBtn);
  
  // Download button - only for resume
  if (options.showBackToResume) {
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'resume-btn';
    downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg> Download';
    downloadBtn.addEventListener('click', function(e) {
      console.log('Download button clicked for resume');
      e.preventDefault(); // Prevent any default behavior
      e.stopPropagation(); // Stop event from bubbling
      downloadResume();
    });
    buttonsContainer.appendChild(downloadBtn);
  }
  
  header.appendChild(titleEl);
  header.appendChild(buttonsContainer);
  container.appendChild(header);
  
  // PDF container
  const pdfContainer = document.createElement('div');
  pdfContainer.style.position = 'relative';
  pdfContainer.style.flex = '1';
  pdfContainer.style.border = '2px solid var(--accent)';
  pdfContainer.style.borderRadius = '8px';
  pdfContainer.style.overflow = 'hidden';
  
  // Check if file exists first
  checkFileExists(pdfPath, function(exists) {
    if (!exists) {
      const loading = document.createElement('div');
      loading.className = 'resume-loading';
      loading.innerHTML = `Error: File not found. Path: ${pdfPath}`;
      loading.style.position = 'absolute';
      loading.style.top = '50%';
      loading.style.left = '50%';
      loading.style.transform = 'translate(-50%, -50%)';
      loading.style.zIndex = '5';
      loading.style.background = 'rgba(0,0,0,0.7)';
      loading.style.padding = '15px 25px';
      loading.style.borderRadius = '8px';
      pdfContainer.appendChild(loading);
      return;
    }
  });
  
  // Loading indicator
  const loading = document.createElement('div');
  loading.className = 'resume-loading';
  loading.id = `mobile-loading-${Date.now()}`; // Unique ID for tracking
  loading.innerHTML = `Loading ${options.loadingText || 'PDF'}... <div class="spinner"></div>`;
  loading.style.position = 'absolute';
  loading.style.top = '50%';
  loading.style.left = '50%';
  loading.style.transform = 'translate(-50%, -50%)';
  loading.style.zIndex = '5';
  loading.style.background = 'rgba(0,0,0,0.7)';
  loading.style.padding = '15px 25px';
  loading.style.borderRadius = '8px';
  
  // PDF object
  const pdfObj = document.createElement('object');
  const pdfObjId = `mobile-pdf-obj-${Date.now()}`; // Unique ID for tracking
  pdfObj.id = pdfObjId;
  pdfObj.data = pdfPath;
  pdfObj.type = 'application/pdf';
  pdfObj.width = '100%';
  pdfObj.height = '100%';
  pdfObj.style.position = 'absolute';
  pdfObj.style.top = '0';
  pdfObj.style.left = '0';
  
  // Set a timeout to check if the PDF has loaded
  setTimeout(function() {
    // Find the loading and PDF objects in the document
    const loadingElem = document.getElementById(loading.id);
    console.log(`Checking mobile PDF load status after 3 seconds for ${pdfPath}`);
    if (loadingElem && loadingElem.style.display !== 'none') {
      console.warn(`Mobile PDF may not have loaded properly: ${pdfPath}`);
      // Try to manually check if the object has content
      const pdfObjElem = document.getElementById(pdfObjId);
      if (pdfObjElem) {
        try {
          // Check if PDF object has content
          if (pdfObjElem.contentDocument && pdfObjElem.contentDocument.body) {
            if (pdfObjElem.contentDocument.body.childElementCount > 0) {
              console.log('Mobile PDF appears to have loaded but onload did not fire');
              loadingElem.style.display = 'none';
            } else {
              loadingElem.innerHTML = `Error loading PDF. Please check the path: ${pdfPath}`;
            }
          }
        } catch (e) {
          console.error('Error checking mobile PDF object:', e);
        }
      }
    }
  }, 3000);
  
  // Add event listeners for PDF loading
  pdfObj.onload = function() {
    console.log('Mobile PDF loaded successfully:', pdfPath);
    loading.style.display = 'none';
  };
  
  pdfObj.onerror = function() {
    console.error('Error loading mobile PDF:', pdfPath);
    loading.innerHTML = `Error loading PDF. Please try again later.`;
  };
  
  // Fallback for browsers that don't support embedded PDFs
  pdfObj.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <p>Your browser doesn't support embedded PDFs.</p>
      <a href="${pdfPath}" target="_blank" class="resume-btn outline" style="display: inline-block; margin-top: 15px;">
        Open PDF
      </a>
    </div>
  `;
  
  pdfContainer.appendChild(loading);
  pdfContainer.appendChild(pdfObj);
  container.appendChild(pdfContainer);
  
  return container;
}

function closeMobileModal() {
  const mobileModal = document.getElementById('mobileContentModal');
  if (mobileModal) {
    mobileModal.classList.remove('active');
    
    // Remove the click outside event listener to prevent memory leaks
    mobileModal.removeEventListener('click', function(e) {
      if (e.target === mobileModal) {
        closeMobileModal();
      }
    });
    
    // Clear the content after animation completes to prevent memory leaks
    setTimeout(() => {
      const mobileContent = document.getElementById('mobileModalContent');
      if (mobileContent) {
        mobileContent.innerHTML = '';
      }
    }, 300);
    
    document.body.style.overflow = ''; // Restore scrolling
  }
}

// Add a function to check file existence
function checkFileExists(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('HEAD', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(`File exists: ${url}`);
        callback(true);
      } else {
        console.error(`File does not exist: ${url}, status: ${xhr.status}`);
        callback(false);
      }
    }
  };
  xhr.onerror = function() {
    console.error(`Error checking file: ${url}`);
    callback(false);
  };
  xhr.send();
}

// Modify the createPDFViewer function to add better error handling
function createPDFViewer(pdfPath, title, options = {}) {
  console.log('Creating PDF viewer for:', pdfPath, 'with title:', title);
  
  // Container for the PDF viewer
  const viewerContainer = document.createElement('div');
  viewerContainer.style.display = 'flex';
  viewerContainer.style.flexDirection = 'column';
  viewerContainer.style.width = '100%';
  viewerContainer.style.minHeight = '500px';
  
  // Create header with title and buttons
  const header = document.createElement('div');
  header.style.display = 'flex';
  header.style.justifyContent = 'space-between';
  header.style.alignItems = 'center';
  header.style.marginBottom = '20px';
  
  // Create title element
  const titleElement = document.createElement('h3');
  titleElement.textContent = title;
  titleElement.style.margin = '0';
  
  // Create buttons container
  const buttonContainer = document.createElement('div');
  buttonContainer.style.display = 'flex';
  buttonContainer.style.gap = '10px';
  
  // Add custom buttons from options
  if (options.buttons && Array.isArray(options.buttons)) {
    options.buttons.forEach(button => {
      buttonContainer.appendChild(button);
    });
  }
  
  // Assemble header
  header.appendChild(titleElement);
  header.appendChild(buttonContainer);
  viewerContainer.appendChild(header);
  
  // Create PDF container
  const pdfContainer = document.createElement('div');
  pdfContainer.style.flex = '1';
  pdfContainer.style.position = 'relative';
  pdfContainer.style.border = '2px solid var(--accent)';
  pdfContainer.style.borderRadius = '8px';
  pdfContainer.style.overflow = 'hidden';
  pdfContainer.style.minHeight = '500px';
  
  // Add loading indicator
  const loading = document.createElement('div');
  loading.className = 'pdf-loading';
  loading.id = `loading-${Date.now()}`; // Unique ID for reference
  loading.innerHTML = `Loading ${options.loadingText || 'PDF'}... <div class="spinner"></div>`;
  loading.style.position = 'absolute';
  loading.style.top = '50%';
  loading.style.left = '50%';
  loading.style.transform = 'translate(-50%, -50%)';
  loading.style.zIndex = '5';
  loading.style.background = 'rgba(0,0,0,0.7)';
  loading.style.padding = '15px 25px';
  loading.style.borderRadius = '8px';
  
  // First check if file exists
  checkFileExists(pdfPath, function(exists) {
    if (!exists) {
      loading.innerHTML = `Error: File not found. Path: ${pdfPath}`;
      return;
    }
  });
  
  // Create PDF object element
  const pdfObj = document.createElement('object');
  const pdfObjId = `pdf-obj-${Date.now()}`; // Unique ID for reference
  pdfObj.id = pdfObjId;
  pdfObj.data = pdfPath;
  pdfObj.type = 'application/pdf';
  pdfObj.width = '100%';
  pdfObj.height = '100%';
  pdfObj.style.position = 'absolute';
  pdfObj.style.top = '0';
  pdfObj.style.left = '0';
  
  // Log when PDF tries to load and if there are errors
  console.log('Setting up PDF object with path:', pdfPath);
  
  // Set a timeout to check if the PDF has loaded
  setTimeout(function() {
    const loadingElem = document.getElementById(loading.id);
    console.log(`Checking PDF load status after 3 seconds for ${pdfPath}`);
    if (loadingElem && loadingElem.style.display !== 'none') {
      console.warn(`PDF may not have loaded properly: ${pdfPath}`);
      // Try to manually check if the object has content
      const pdfObjElem = document.getElementById(pdfObjId);
      if (pdfObjElem) {
        try {
          // Check if PDF object has content
          if (pdfObjElem.contentDocument && pdfObjElem.contentDocument.body) {
            if (pdfObjElem.contentDocument.body.childElementCount > 0) {
              console.log('PDF appears to have loaded but onload did not fire');
              loadingElem.style.display = 'none';
            } else {
              loadingElem.innerHTML = `Error loading PDF. Please check the path: ${pdfPath}`;
            }
          }
        } catch (e) {
          console.error('Error checking PDF object:', e);
        }
      }
    }
  }, 3000);
  
  // Hide loading when PDF loads
  pdfObj.onload = function() {
    console.log('PDF loaded successfully:', pdfPath);
    loading.style.display = 'none';
  };
  
  // Add error handling
  pdfObj.onerror = function() {
    console.error('Error loading PDF:', pdfPath);
    loading.innerHTML = `Error loading PDF. Please try again later.`;
  };
  
  // Fallback content for browsers that don't support embedded PDFs
  pdfObj.innerHTML = `
    <div style="padding: 20px; text-align: center;">
      <p>Your browser doesn't support embedded PDFs.</p>
      <a href="${pdfPath}" target="_blank" class="resume-btn outline" style="display: inline-block; margin-top: 15px;">
        Open PDF
      </a>
    </div>
  `;
  
  // Assemble PDF container
  pdfContainer.appendChild(loading);
  pdfContainer.appendChild(pdfObj);
  viewerContainer.appendChild(pdfContainer);
  
  return viewerContainer;
}

// Function to show certificate in-app
function showCertificate(pdfPath, title) {
  // Get container references - these need to be looked up on each call
  const certViewContainer = document.getElementById('cert-view-container');
  const certListContainer = document.getElementById('cert-list-container');
  
  // Hide cert list and show cert view
  certListContainer.style.display = 'none';
  certViewContainer.style.display = 'flex';
  
  // Clear previous content
  certViewContainer.innerHTML = '';
  
  // Create back button
  const backBtn = document.createElement('button');
  backBtn.className = 'resume-btn outline';
  backBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/></svg> Back to List';
  backBtn.onclick = function() {
    certViewContainer.style.display = 'none';
    certListContainer.style.display = 'block';
  };
  
  // Create view button
  const viewBtn = document.createElement('button');
  viewBtn.className = 'resume-btn outline';
  viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg> View in New Tab';
  viewBtn.onclick = function() {
    window.open(pdfPath, '_blank');
  };
  
  // Use the universal PDF viewer
  const pdfViewer = createPDFViewer(pdfPath, title, {
    buttons: [backBtn, viewBtn],
    loadingText: 'certificate'
  });
  
  certViewContainer.appendChild(pdfViewer);
}

// Separated content rendering logic from renderTab
function renderContent(tab, container) {
  // Create a container for all content that will be scrollable
  container.innerHTML = '<div class="content-inner"></div>';
  const contentInner = container.querySelector('.content-inner');
  
  if (tab === 'experience' || tab === 'education') {
    data[tab].forEach(item => {
      const div = document.createElement('div');
      div.className = 'card';
      div.innerHTML = `
        <h3>${item.title}</h3>
        <span>${item.duration}</span>
        <p>${item.desc}</p>
      `;
      contentInner.appendChild(div);
    });
  } else if (tab === 'skills' || tab === 'certs') {
    const listContainer = document.createElement('div');
    listContainer.className = 'card';
    
    const ul = document.createElement('ul');
    ul.style.paddingLeft = "20px";
    
    if (tab === 'skills') {
      data[tab].forEach(skill => {
        const li = document.createElement('li');
        li.className = 'item';
        li.style.marginBottom = "10px";
        li.textContent = skill;
        ul.appendChild(li);
      });
    } else {
      // Create certificate view container (initially hidden)
      const certViewContainer = document.createElement('div');
      certViewContainer.id = 'cert-view-container';
      certViewContainer.style.display = 'none';
      certViewContainer.style.flexDirection = 'column';
      certViewContainer.style.width = '100%';
      certViewContainer.style.minHeight = '500px';
      
      // Create list container (initially visible)
      const certListContainer = document.createElement('div');
      certListContainer.id = 'cert-list-container';
      
      // Certificates with PDF links if available
      data[tab].forEach(cert => {
        const li = document.createElement('li');
        li.className = 'item';
        li.style.marginBottom = "15px";
        
        if (cert.pdf) {
          // Create a button-like link
          const link = document.createElement('a');
          link.href = '#';
          link.className = 'cert-link';
          link.setAttribute('data-pdf', cert.pdf);
          link.style.color = "var(--accent)";
          link.style.textDecoration = "none";
          link.style.display = "inline-flex";
          link.style.alignItems = "center";
          link.textContent = cert.title;
          
          // Add a certificate icon
          const icon = document.createElement('span');
          icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" style="margin-right: 8px" viewBox="0 0 16 16">
            <path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
            <path d="M8 4.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5a.5.5 0 0 1 .5-.5z"/>
          </svg>`;
          
          link.prepend(icon);
          
          // Handle click event to show the certificate in-app
          link.addEventListener('click', function(e) {
            e.preventDefault();
            showCertificate(cert.pdf, cert.title);
          });
          
          li.appendChild(link);
        } else {
          li.textContent = cert.title;
        }
        
        ul.appendChild(li);
      });
      
      certListContainer.appendChild(ul);
      listContainer.appendChild(certListContainer);
      listContainer.appendChild(certViewContainer);
    }
    
    if (tab !== 'certs') {
      listContainer.appendChild(ul);
    }
    
    contentInner.appendChild(listContainer);
  } else if (tab === 'portfolio') {
    // Instead of a grid, use a more flexible layout for portfolio items
    const portfolioDiv = document.createElement('div');
    portfolioDiv.style.display = 'grid';
    portfolioDiv.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    portfolioDiv.style.gap = '25px';
    portfolioDiv.style.width = '100%';
    
    // Calculate pagination
    const totalProjects = data.portfolio.length;
    const totalPages = Math.ceil(totalProjects / projectsPerPage);
    const startIndex = (currentPortfolioPage - 1) * projectsPerPage;
    const endIndex = Math.min(startIndex + projectsPerPage, totalProjects);
    
    // Show only projects for current page
    for (let i = startIndex; i < endIndex; i++) {
      const project = data.portfolio[i];
      const card = document.createElement('div');
      card.className = 'card portfolio-card';
      
      // Content container
      const contentDiv = document.createElement('div');
      contentDiv.className = 'portfolio-card-content';
      contentDiv.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
      `;
      
      // Action container fixed at bottom
      const actionDiv = document.createElement('div');
      actionDiv.className = 'portfolio-card-actions';
      
      const linkElement = document.createElement('a');
      linkElement.href = project.url;
      linkElement.target = "_blank";
      linkElement.className = "button-style";
      linkElement.textContent = "Visit Project";
      linkElement.style.display = "inline-block";
      linkElement.style.background = "var(--accent)";
      linkElement.style.color = "black";
      linkElement.style.padding = "6px 10px";
      linkElement.style.borderRadius = "5px";
      linkElement.style.textDecoration = "none";
      linkElement.style.fontWeight = "bold";
      linkElement.style.transition = "all 0.3s";
      
      actionDiv.appendChild(linkElement);
      
      card.appendChild(contentDiv);
      card.appendChild(actionDiv);
      portfolioDiv.appendChild(card);
    }
    
    contentInner.appendChild(portfolioDiv);
    
    // Add pagination controls if needed
    if (totalPages > 1) {
      const paginationDiv = document.createElement('div');
      paginationDiv.className = 'pagination-controls';
      
      // Previous button
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn';
      prevBtn.textContent = '← Prev';
      prevBtn.disabled = currentPortfolioPage === 1;
      prevBtn.onclick = () => {
        if (currentPortfolioPage > 1) {
          currentPortfolioPage--;
          showTab('portfolio');
        }
      };
      paginationDiv.appendChild(prevBtn);
      
      // Page indicators
      for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn';
        if (i === currentPortfolioPage) {
          pageBtn.classList.add('active');
        }
        pageBtn.textContent = i;
        pageBtn.onclick = () => {
          currentPortfolioPage = i;
          showTab('portfolio');
        };
        paginationDiv.appendChild(pageBtn);
      }
      
      // Next button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn';
      nextBtn.textContent = 'Next →';
      nextBtn.disabled = currentPortfolioPage === totalPages;
      nextBtn.onclick = () => {
        if (currentPortfolioPage < totalPages) {
          currentPortfolioPage++;
          showTab('portfolio');
        }
      };
      paginationDiv.appendChild(nextBtn);
      
      contentInner.appendChild(paginationDiv);
    }
  } else if (tab === 'contact') {
    const contactList = document.createElement('div');
    contactList.className = 'card';
    
    data[tab].forEach(item => {
      const contactItem = document.createElement('div');
      contactItem.style.display = 'flex';
      contactItem.style.alignItems = 'center';
      contactItem.style.marginBottom = '20px';
      
      if (item.url) {
        contactItem.innerHTML = `
          <div style="font-size: 2rem; margin-right: 15px; width: 40px; text-align: center;">${item.icon}</div>
          <div>
            <h3 style="margin: 0;">${item.title}</h3>
            <a href="${item.url}" target="${item.url.startsWith('mailto:') || item.url.startsWith('tel:') ? '_self' : '_blank'}" style="color: var(--accent);">${item.value}</a>
          </div>
        `;
      } else {
        contactItem.innerHTML = `
          <div style="font-size: 2rem; margin-right: 15px; width: 40px; text-align: center;">${item.icon}</div>
          <div>
            <h3 style="margin: 0;">${item.title}</h3>
            <span>${item.value}</span>
          </div>
        `;
      }
      
      contactList.appendChild(contactItem);
    });
    contentInner.appendChild(contactList);
  } else if (tab === 'resume') {
    // Create open PDF button
    const openPdfBtn = document.createElement('a');
    openPdfBtn.className = 'resume-btn';
    openPdfBtn.href = resumeFile;
    openPdfBtn.target = '_blank';
    openPdfBtn.rel = 'noopener noreferrer';
    openPdfBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg> Open PDF';
    openPdfBtn.style.display = 'inline-block';
    openPdfBtn.style.textDecoration = 'none';
    openPdfBtn.style.cursor = 'pointer';
    
    // Create a simple message instead of trying to embed the PDF
    const resumeContainer = document.createElement('div');
    resumeContainer.className = 'card';
    resumeContainer.style.textAlign = 'center';
    resumeContainer.style.padding = '40px 20px';
    
    const resumeHeading = document.createElement('h3');
    resumeHeading.textContent = 'Anthony Miller - Resume';
    resumeHeading.style.marginBottom = '20px';
    
    const resumeMessage = document.createElement('p');
    resumeMessage.textContent = 'Click the button below to view the resume in a new tab.';
    resumeMessage.style.marginBottom = '30px';
    
    const buttonContainer = document.createElement('div');
    buttonContainer.appendChild(openPdfBtn);
    
    resumeContainer.appendChild(resumeHeading);
    resumeContainer.appendChild(resumeMessage);
    resumeContainer.appendChild(buttonContainer);
    
    contentInner.appendChild(resumeContainer);
    
    console.log('Resume view simplified to direct PDF open button');
  }
}

// Make closeMobileModal available globally
window.closeMobileModal = closeMobileModal;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
  // Check that we're using the correct resume path
  console.log('Using resume file path:', resumeFile);
  if (data.resume) {
    console.warn('data.resume is defined but not being used. Value:', data.resume);
    // Update data.resume to use the correct path
    data.resume = resumeFile;
    console.log('Updated data.resume to:', data.resume);
  }
  
  // Initialize first tab only on desktop
  if (!isMobile) {
    showTab('experience');
  } else {
    // On mobile, just update the active nav link without opening the dropdown
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    document.querySelector('.nav-link[onclick="showTab(\'experience\')"]').classList.add('active');
  }
  
  // Start typing effect
  typeNext();
  setInterval(typeNext, 4000);
  
  window.addEventListener('load', adjustFooterPadding);
  window.addEventListener('resize', adjustFooterPadding);
  
  // Call footer adjustment when tabs change
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      setTimeout(adjustFooterPadding, 300);
    });
  });
  
  // Handle mobile view adjustments
  handleMobileView();
  window.addEventListener('resize', handleMobileView);
  window.addEventListener('orientationchange', handleMobileView);
  
  // Check if resume file exists
  checkFileExists(resumeFile, function(exists) {
    if (exists) {
      console.log('Resume file exists and is accessible');
    } else {
      console.error('Resume file does not exist or is not accessible. Please check the path:', resumeFile);
    }
  });
}); 

