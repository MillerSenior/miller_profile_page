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
  console.log('Opening resume in new tab:', resumeFile);
  
  // Close any existing mobile modal first
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
    Opening resume...<br>
    <span style="font-size: 14px; opacity: 0.8;">The resume will open in a new tab</span></div>`;
  document.body.appendChild(feedbackElement);
  
  // Simply open the PDF in a new tab - this works on all devices
  window.open(resumeFile, '_blank');
  
  // Remove feedback after a short delay
  setTimeout(() => {
    document.body.removeChild(feedbackElement);
  }, 2000);
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
  link.target = '_blank';
  
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
  
  // Clone content to modal
  mobileContent.innerHTML = content;
  
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
        
        // Close mobile modal
        closeMobileModal();
        
        // Open resume in new tab
        openResumeModal();
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
  
  // Show modal
  mobileModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function closeMobileModal() {
  const mobileModal = document.getElementById('mobileContentModal');
  if (mobileModal) {
    mobileModal.classList.remove('active');
    
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
      // Certificates with PDF links if available
      data[tab].forEach(cert => {
        const li = document.createElement('li');
        li.className = 'item';
        li.style.marginBottom = "10px";
        
        if (cert.pdf) {
          const link = document.createElement('a');
          link.href = cert.pdf;
          link.target = "_blank";
          link.rel = "noopener";
          link.style.color = "var(--accent)";
          link.textContent = cert.title;
          li.appendChild(link);
        } else {
          li.textContent = cert.title;
        }
        
        ul.appendChild(li);
      });
    }
    
    listContainer.appendChild(ul);
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
    const resumeContainer = document.createElement('div');
    resumeContainer.className = 'resume-container';
    
    // Resume preview card
    const resumePreview = document.createElement('div');
    resumePreview.className = 'resume-preview';
    
    // Resume thumbnail visualization
    const thumbnail = document.createElement('div');
    thumbnail.className = 'resume-thumbnail';
    // Create line elements to suggest text content
    for (let i = 0; i < 6; i++) {
      const line = document.createElement('div');
      line.className = 'line';
      thumbnail.appendChild(line);
    }
    
    resumePreview.innerHTML = `
      <h3>Anthony Miller - Resume</h3>
      <p>Last updated: February 3, 2025</p>
    `;
    resumePreview.prepend(thumbnail);
    
    // Resume action buttons
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'resume-actions';
    
    // View button with direct event handler
    const viewBtn = document.createElement('button');
    viewBtn.className = 'resume-btn outline';
    viewBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/><path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/></svg> View Resume';
    
    // Use an event listener instead of onclick
    viewBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      
      // Close mobile modal if open
      closeMobileModal();
      
      // Open resume in new tab
      openResumeModal();
    });
    
    // Download button with direct event handler
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'resume-btn';
    downloadBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg> Download Resume';
    
    // Use an event listener instead of onclick
    downloadBtn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation(); // Prevent event bubbling
      
      // Close mobile modal
      closeMobileModal();
      
      // Download resume
      downloadResume();
    });
    
    actionsDiv.appendChild(viewBtn);
    actionsDiv.appendChild(downloadBtn);
    
    resumePreview.appendChild(actionsDiv);
    resumeContainer.appendChild(resumePreview);
    
    contentInner.appendChild(resumeContainer);
  }
}

// Make closeMobileModal available globally
window.closeMobileModal = closeMobileModal;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Check if we're on mobile
  const isMobile = window.innerWidth <= 768;
  
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
}); 