// ------------------------------
// Default Resume Data (John Smith)
// ------------------------------
const defaultResumeData = {
  name: "John Smith",
  contact: {
    email: "john.smith@outlook.com",
    phone: "(312) 555-8930",
    website: "https://linkedin.com/in/johnsmith-marketing"
  },
  education: [
    {
      school: "University of Illinois at Urbana-Champaign",
      location: "Champaign, IL",
      degree: "Bachelor of Science in Marketing, Minor in Digital Media",
      dates: "Aug. 2015 – May 2019"
    },
    {
      school: "Chicago Business Institute",
      location: "Chicago, IL",
      degree: "Professional Certificate in Brand Strategy",
      dates: "Jan. 2020 – Jun. 2020"
    }
  ],
  experience: [
    {
      title: "Digital Marketing Manager",
      company: "Brightline Media Group",
      location: "Chicago, IL",
      dates: "Mar. 2021 – Present",
      details: [
        "Develop and execute multi-channel digital campaigns increasing client engagement by 35%",
        "Lead a team of 5 in SEO/SEM, content strategy, and analytics for B2B and consumer clients",
        "Implemented marketing automation workflows with HubSpot and Salesforce"
      ]
    },
    {
      title: "Marketing Associate",
      company: "NextWave Communications",
      location: "Chicago, IL",
      dates: "Jun. 2019 – Feb. 2021",
      details: [
        "Supported product launches with email and social campaigns reaching over 200K users",
        "Coordinated cross-functional content creation with design and product teams",
        "Analyzed campaign performance using Google Analytics and prepared monthly reports"
      ]
    }
  ],
  projects: [
    {
      title: "EcoBrand Campaign",
      description: "Created a sustainability-focused social media campaign that boosted client visibility by 40% within 3 months"
    },
    {
      title: "BrandVoice Podcast",
      description: "Launched and produced a weekly podcast featuring marketing leaders, achieving over 10K monthly listeners"
    },
    {
      title: "Ad Optimization Dashboard",
      description: "Designed a Google Data Studio dashboard for tracking ad spend efficiency and ROI across 12 clients"
    }
  ],
  skills: [
    {
      category: "Marketing & Analytics",
      items: [
        "SEO/SEM",
        "Content Strategy",
        "Email Marketing",
        "Google Analytics",
        "HubSpot",
        "Salesforce Marketing Cloud"
      ]
    },
    {
      category: "Creative & Tools",
      items: [
        "Adobe Creative Suite (Photoshop, Illustrator, Premiere)",
        "Canva",
        "Figma",
        "Data Visualization (Tableau, Data Studio)"
      ]
    },
    {
      category: "Soft Skills",
      items: [
        "Team Leadership",
        "Cross-Functional Communication",
        "Strategic Planning",
        "Client Relationship Management"
      ]
    }
  ]
};

// ------------------ Debug Log ------------------
function logDebug(message) {
  const logBox = document.getElementById("log-box");
  logBox.value += message + "\n";
  logBox.scrollTop = logBox.scrollHeight;
}

// ------------------ Utility to create inputs ------------------
function createInput(value, placeholder, onChange) {
  const input = document.createElement("input");
  input.value = value || "";
  input.placeholder = placeholder;
  input.oninput = (e) => onChange(e.target.value);
  return input;
}

// ------------------ Utility to create remove button ------------------
function createRemoveButton(card) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "Remove";
  btn.className = "remove-btn";
  btn.onclick = () => card.remove();
  return btn;
}

// ------------------ Collapsible toggle ------------------
function setupCollapsible(section) {
  const header = section.querySelector("h2");
  const content = section.querySelector(".cards, .cards-container");
  if (!header || !content) return;

  const toggleIcon = document.createElement("span");
  toggleIcon.className = "toggle-icon";
  toggleIcon.innerHTML = "➕";
  header.prepend(toggleIcon);

  header.style.cursor = "pointer";
  header.addEventListener("click", () => {
    const isCollapsed = content.style.display === "none";
    content.style.display = isCollapsed ? "block" : "none";
    toggleIcon.innerHTML = isCollapsed ? "➖" : "➕";
  });
}

// ------------------ Education ------------------
function addEducationCard(data, skipAnim = false) {
  const container = document.getElementById("education-cards");
  const card = document.createElement("div");
  card.className = "card";
  if (!skipAnim) {
    card.classList.add("enter");
    setTimeout(() => card.classList.remove("enter"), 200);
  }

  const schoolInput = createInput(data?.school, "School Name", val => card.dataset.school = val);
  const locationInput = createInput(data?.location, "Location", val => card.dataset.location = val);
  const degreeInput = createInput(data?.degree, "Degree", val => card.dataset.degree = val);
  const datesInput = createInput(data?.dates, "Dates", val => card.dataset.dates = val);

  card.append(schoolInput, locationInput, degreeInput, datesInput);
  card.appendChild(createRemoveButton(card));
  container.appendChild(card);
}

// ------------------ Experience ------------------
function addExperienceCard(data, skipAnim = false) {
  const container = document.getElementById("experience-cards");
  const card = document.createElement("div");
  card.className = "card";
  if (!skipAnim) {
    card.classList.add("enter");
    setTimeout(() => card.classList.remove("enter"), 200);
  }

  const titleInput = createInput(data?.title, "Job Title", val => card.dataset.title = val);
  const companyInput = createInput(data?.company, "Company", val => card.dataset.company = val);
  const locationInput = createInput(data?.location, "Location", val => card.dataset.location = val);
  const datesInput = createInput(data?.dates, "Dates", val => card.dataset.dates = val);

  const detailsInput = document.createElement("textarea");
  detailsInput.placeholder = "Details (one per line)";
  detailsInput.value = (data?.details || []).join("\n");
  detailsInput.rows = 6;
  detailsInput.oninput = (e) => card.dataset.details = e.target.value.split("\n");

  card.append(titleInput, companyInput, locationInput, datesInput, detailsInput);
  card.appendChild(createRemoveButton(card));
  container.appendChild(card);
}

// ------------------ Projects ------------------
function addProjectCard(data, skipAnim = false) {
  const container = document.getElementById("projects-cards");
  const card = document.createElement("div");
  card.className = "card";
  if (!skipAnim) {
    card.classList.add("enter");
    setTimeout(() => card.classList.remove("enter"), 200);
  }

  const titleInput = createInput(data?.title, "Project Title", val => card.dataset.title = val);
  const descInput = document.createElement("textarea");
  descInput.placeholder = "Description";
  descInput.value = data?.description || "";
  descInput.rows = 4;
  descInput.oninput = (e) => card.dataset.description = e.target.value;

  card.append(titleInput, descInput);
  card.appendChild(createRemoveButton(card));
  container.appendChild(card);
}

// ------------------ Skills ------------------
function addSkillCard(data, skipAnim = false) {
  const container = document.getElementById("skills-cards");
  const card = document.createElement("div");
  card.className = "card";
  if (!skipAnim) {
    card.classList.add("enter");
    setTimeout(() => card.classList.remove("enter"), 200);
  }

  const categoryInput = createInput(data?.category, "Category", val => card.dataset.category = val);
  const itemsInput = createInput((data?.items || []).join(", "), "Comma-separated skills", val => card.dataset.items = val.split(",").map(s => s.trim()));

  card.append(categoryInput, itemsInput);
  card.appendChild(createRemoveButton(card));
  container.appendChild(card);
}

// ------------------ Collect Data from UI ------------------
function collectResumeData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const website = document.getElementById("website").value;

  const education = Array.from(document.getElementById("education-cards").children).map(card => ({
    school: card.children[0].value,
    location: card.children[1].value,
    degree: card.children[2].value,
    dates: card.children[3].value
  }));

  const experience = Array.from(document.getElementById("experience-cards").children).map(card => ({
    title: card.children[0].value,
    company: card.children[1].value,
    location: card.children[2].value,
    dates: card.children[3].value,
    details: card.children[4].value.split("\n")
  }));

  const projects = Array.from(document.getElementById("projects-cards").children).map(card => ({
    title: card.children[0].value,
    description: card.children[1].value
  }));

  const skills = Array.from(document.getElementById("skills-cards").children).map(card => ({
    category: card.children[0].value,
    items: card.children[1].value.split(",").map(s => s.trim())
  }));

  return { name, contact: { email, phone, website }, education, experience, projects, skills };
}

// ------------------ Generate PDF ------------------
async function generatePDF() {
  const resumeData = collectResumeData();
  logDebug("Sending data to backend...");
  logDebug("Resume JSON: " + JSON.stringify(resumeData, null, 2));

  const API_URL = "https://idea-ai-resumelatex.hf.space/api/generate";

  const spinner = document.createElement("div");
  spinner.id = "spinner-overlay";
  spinner.innerHTML = `
    <div class="spinner-container">
      <div class="spinner"></div>
      <p>Generating PDF...</p>
    </div>`;
  document.body.appendChild(spinner);

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(resumeData)
    });

    logDebug(`Response status: ${response.status}`);

    if (!response.ok) {
      const errText = await response.text();
      logDebug(`Error response: ${errText}`);
      alert("❌ Error generating PDF:\n" + errText);
      return;
    }

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    logDebug("PDF downloaded successfully.");
  } catch (error) {
    console.error("Failed to connect:", error);
    logDebug(`Failed to connect: ${error}`);
    alert("⚠️ Failed to connect to backend.\n" + error.message);
  } finally {
    document.getElementById("spinner-overlay")?.remove();
  }
}

// ------------------ Initialize UI ------------------
window.onload = () => {
  document.title = "NextGen Resume Lab";
  document.querySelector("h1").textContent = "🧠 NextGen Resume Lab";

  document.getElementById("name").value = defaultResumeData.name;
  document.getElementById("email").value = defaultResumeData.contact.email;
  document.getElementById("phone").value = defaultResumeData.contact.phone;
  document.getElementById("website").value = defaultResumeData.contact.website;

  defaultResumeData.education.forEach(e => addEducationCard(e, true));
  defaultResumeData.experience.forEach(e => addExperienceCard(e, true));
  defaultResumeData.projects.forEach(p => addProjectCard(p, true));
  defaultResumeData.skills.forEach(s => addSkillCard(s, true));

  document.getElementById("generate-btn").onclick = generatePDF;
  document.getElementById("add-education-btn").onclick = () => addEducationCard({});
  document.getElementById("add-experience-btn").onclick = () => addExperienceCard({});
  document.getElementById("add-project-btn").onclick = () => addProjectCard({});
  document.getElementById("add-skill-btn").onclick = () => addSkillCard({});

  // Set up collapsible sections
  document.querySelectorAll(".section").forEach(setupCollapsible);
};
