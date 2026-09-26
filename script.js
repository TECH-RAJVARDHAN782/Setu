const KEY = "setu-gov-v8";

const defaultUsers = [
  { id: "u-admin", name: "Platform Admin", email: "admin@setu.gov.in", password: "Setu@2026", role: "admin", department: "Government of Maharashtra" },
  { id: "u-reviewer", name: "Department Reviewer", email: "reviewer@setu.gov.in", password: "Review@2026", role: "reviewer", department: "Revenue Department" },
  { id: "u-citizen", name: "Aarav Patil", email: "citizen@example.com", password: "Citizen@2026", role: "citizen", department: "" }
];

const defaultUserProfiles = {
  "citizen@example.com": {
    fatherName: "Suryakant Patil", motherName: "Sunita Patil", dob: "2002-05-14", gender: "Male", maritalStatus: "Unmarried", religion: "Hindu", category: "General",
    phone: "+91 98765 43210", email: "citizen@example.com",
    aadhaarNo: "4821 9901 8823", panNo: "ABCDE1234F", voterId: "MH/04/012/981242",
    addressLine1: "42, Green Enclave, Shivaji Nagar", state: "Maharashtra", district: "Pune", taluka: "Haveli", pincode: "411005", village: "Shivaji Nagar",
    cAddressLine1: "42, Green Enclave, Shivaji Nagar", cState: "Maharashtra", cDistrict: "Pune", cTaluka: "Haveli", cPincode: "411005",
    domicileCert: "Yes", domicileNo: "DOM-2025-8821", annualIncome: "120000", incomeCertNo: "INC-2025-9921", landRecordNo: "7/12-HAV-9921",
    bankAccount: "5010029812411", bankName: "HDFC Bank", ifscCode: "HDFC0000142",
    casteCertNo: "", rationCardNo: "RC-MH-981242", rationType: "Saffron (APL)", isHandicapped: "No", udidNo: "",
    parentOccupation: "Farmer", employmentStatus: "Student", qualification: "Undergraduate",
    courseName: "B.Tech Computer Engineering", collegeName: "AISSMS IOIT Pune", isHosteller: "No",
    vaultDocuments: {
      aadhaarDoc: "Aadhaar_Card_Verified.pdf",
      panDoc: "PAN_Card_Verified.pdf",
      addressDoc: "Electricity_Bill_Address.pdf",
      photoDoc: "Applicant_Photo.jpg",
      passbookDoc: "Bank_Passbook_Copy.pdf",
      rationDoc: "Ration_Card_Family.pdf"
    }
  }
};

const defaultServices = [
  { id: "income", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`, name: "Income Certificate", department: "Revenue Department", description: "Request an income certificate with secure identity and income verification.", time: "5-7 working days", fee: "No fee", active: true },
  { id: "scholarship", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`, name: "Student Scholarship", department: "Education Department", description: "Apply for eligible student scholarship programmes through one connected workflow.", time: "10-15 working days", fee: "No fee", active: true },
  { id: "business", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, name: "Business Registration", department: "Industries Department", description: "Submit a business registration request and follow cross-department progress.", time: "7-10 working days", fee: "Varies", active: true },
  { id: "birth", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><circle cx="10" cy="13" r="2"/></svg>`, name: "Birth Certificate", department: "Municipal Services", description: "Request a birth certificate and track municipal verification in one place.", time: "3-5 working days", fee: "Rs. 20", active: true },
  { id: "pension", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`, name: "Senior Citizen Pension", department: "Social Justice Department", description: "Apply for pension benefits with consent-based eligibility checks.", time: "15-20 working days", fee: "No fee", active: true },
  { id: "residence", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`, name: "Residence Certificate", department: "Revenue Department", description: "Request proof of residence using information already held by government.", time: "5-7 working days", fee: "No fee", active: true },
  { id: "caste", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/></svg>`, name: "Caste Certificate", department: "Revenue Department", description: "Submit and track a caste certificate request with transparent status updates.", time: "10-15 working days", fee: "No fee", active: true },
  { id: "trade", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>`, name: "Trade Licence", department: "Municipal Services", description: "Apply for a local trade licence with coordinated municipal review.", time: "7-10 working days", fee: "Varies", active: true },
  { id: "water", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>`, name: "Water Connection", department: "Municipal Services", description: "Request a new water connection and monitor the service workflow.", time: "10-15 working days", fee: "Varies", active: true },
  { id: "ration", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="7" y1="8" x2="17" y2="8"/><line x1="7" y1="12" x2="13" y2="12"/></svg>`, name: "Ration Card Renewal", department: "Food & Civil Supplies", description: "Renew or update family members in public distribution system ration card.", time: "5-7 working days", fee: "No fee", active: true },
  { id: "driving", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="3" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="21"/></svg>`, name: "Driving Licence NOC", department: "Transport Department", description: "Apply for No Objection Certificate for vehicle transfer or driving licence.", time: "3-5 working days", fee: "Rs. 50", active: true },
  { id: "property", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M9 12l2 2 4-4"/></svg>`, name: "Property Tax Clearance", department: "Municipal Services", description: "Obtain digital property tax clearance NOC for estate transactions.", time: "4-6 working days", fee: "No fee", active: true }
];

const defaultState = {
  users: defaultUsers,
  userProfiles: defaultUserProfiles,
  applications: [
    { id: "SET-2026-1048", service: "Income Certificate", department: "Revenue Department", applicant: "Aarav Patil", email: "citizen@example.com", date: "2026-03-14", status: "Approved", step: "Completed", note: "Verified against revenue digital records.", serviceDetails: { occupation: "Agriculture & Service", incomeSource: "Salaried & Farm Income", annualIncome: "120000" }, history: ["Application received", "Identity check completed", "Department verification completed", "Approved"] },
    { id: "SET-2026-1047", service: "Student Scholarship", department: "Education Department", applicant: "Sana Shaikh", email: "sana@example.com", date: "2026-03-13", status: "Information requested", step: "Document validation", note: "Please provide current academic year enrollment proof.", serviceDetails: { collegeName: "COEP Pune", courseName: "B.Tech Computer Science", semester: "Semester 6", marks: "88.5%" }, history: ["Application received", "Document validation", "Additional information requested"] },
    { id: "SET-2026-1046", service: "Business Registration", department: "Industries Department", applicant: "Meera Joshi", email: "meera@example.com", date: "2026-03-12", status: "Approved", step: "Completed", note: "Registration issued.", serviceDetails: { businessName: "Joshi IT Solutions Pvt Ltd", businessType: "Private Limited", investment: "500000" }, history: ["Application received", "Department verification", "Approved"] },
    { id: "SET-2026-1045", service: "Birth Certificate", department: "Municipal Services", applicant: "Rohan Deshmukh", email: "rohan@example.com", date: "2026-03-11", status: "Submitted", step: "Application received", note: "", serviceDetails: { childName: "Advait Deshmukh", birthPlace: "Sahyadri Hospital Pune", birthDate: "2026-02-10" }, history: ["Application received"] },
    { id: "SET-2026-1044", service: "Senior Citizen Pension", department: "Social Justice Department", applicant: "Leela Kulkarni", email: "leela@example.com", date: "2026-03-10", status: "In review", step: "Eligibility check", note: "", serviceDetails: { pensionType: "Indira Gandhi National Old Age Pension", spouseStatus: "Widowed" }, history: ["Application received", "Eligibility check in progress"] }
  ],
  services: defaultServices,
  integrations: [
    { id: "aadhaar", name: "Aadhaar e-KYC (UIDAI)", department: "Identity & Population", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`, status: true, latency: 142, uptime: "99.98%" },
    { id: "revenue", name: "MahaRevenue", department: "Tax & Land Records", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`, status: true, latency: 186, uptime: "99.91%" },
    { id: "education", name: "MahaDBT", department: "Education & Scholarships", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>`, status: true, latency: 203, uptime: "99.96%" },
    { id: "municipal", name: "Municipal Civil Registry", department: "Civil & Approvals", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`, status: true, latency: 174, uptime: "99.87%" },
    { id: "business", name: "Industries Portal", department: "Business Registrations", iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/></svg>`, status: false, latency: 0, uptime: "99.72%" }
  ],
  consents: { identity: true, income: true, education: false, notifications: true },
  workflows: [
    { name: "Income certificate verification", description: "Coordinates identity, income, and Revenue Department checks.", steps: ["Citizen request", "Identity check", "Income verification", "Department approval", "Notify citizen"] },
    { name: "Student scholarship application", description: "Connects student identity, education records, and benefit eligibility checks.", steps: ["Consent check", "Student record", "Eligibility check", "Review", "Outcome update"] },
    { name: "Business registration", description: "Orchestrates department review with one application tracking reference.", steps: ["Application intake", "Identity validation", "Registry check", "Department review", "Registration outcome"] }
  ],
  audit: [
    { time: "09:42:18", actor: "Platform Admin", action: "Viewed integration health", resource: "All connected systems", result: "Success" },
    { time: "09:36:05", actor: "Revenue Department", action: "Verified application data", resource: "SET-2026-1048", result: "Success" },
    { time: "09:21:44", actor: "Aarav Patil", action: "Granted data-sharing consent", resource: "Income Certificate", result: "Success" },
    { time: "08:58:12", actor: "Education Department", action: "Requested additional information", resource: "SET-2026-1047", result: "Success" }
  ]
};

function clone(x) { return JSON.parse(JSON.stringify(x)); }
function loadState() {
  try {
    const loaded = JSON.parse(localStorage.getItem(KEY) || "{}");
    return { ...clone(defaultState), ...loaded };
  } catch {
    return clone(defaultState);
  }
}

let state = loadState(), currentUser = null, currentPage = "dashboard", toastTimer;

function save() {
  localStorage.setItem(KEY, JSON.stringify(state));
  updateCount();
}

function esc(x) {
  return String(x ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function toast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

function isAdmin() { return currentUser?.role === "admin"; }
function isReviewer() { return currentUser?.role === "reviewer"; }
function isCitizen() { return currentUser?.role === "citizen"; }
function canReview() { return isAdmin() || isReviewer(); }
function roleName(role) { return role === "admin" ? "Platform administrator" : role === "reviewer" ? "Department reviewer" : "Citizen"; }

function updateCount() {
  const el = document.getElementById("appCount");
  if (el) el.textContent = visibleApps().length;
}

function visibleApps() {
  if (!currentUser) return [];
  if (isAdmin()) return state.applications;
  if (isReviewer()) return state.applications.filter(a => a.department === currentUser.department);
  return state.applications.filter(a => a.email.toLowerCase() === currentUser.email.toLowerCase() || a.applicant.toLowerCase() === currentUser.name.toLowerCase());
}

/* Retrieve or initialize live profile vault for any user by email */
function getUserProfile(userEmail) {
  const email = (userEmail || currentUser?.email || "").toLowerCase();
  if (!state.userProfiles[email]) {
    state.userProfiles[email] = {
      fatherName: "", motherName: "", dob: "", gender: "Male", maritalStatus: "Unmarried", religion: "", category: "General",
      phone: "+91 98765 43210", email: email,
      aadhaarNo: "4821 " + Math.floor(1000 + Math.random() * 9000) + " " + Math.floor(1000 + Math.random() * 9000),
      panNo: "ABCPE" + Math.floor(1000 + Math.random() * 9000) + "K",
      voterId: "MH/04/012/" + Math.floor(100000 + Math.random() * 900000),
      addressLine1: "101, Civil Lines", state: "Maharashtra", district: "Pune", taluka: "Haveli", pincode: "411001", village: "Shivaji Nagar",
      cAddressLine1: "101, Civil Lines", cState: "Maharashtra", cDistrict: "Pune", cTaluka: "Haveli", cPincode: "411001",
      domicileCert: "Yes", domicileNo: "DOM-2026-" + Math.floor(1000 + Math.random() * 9000),
      annualIncome: "150000", incomeCertNo: "INC-2026-" + Math.floor(1000 + Math.random() * 9000),
      landRecordNo: "7/12-HAV-" + Math.floor(1000 + Math.random() * 9000),
      bankAccount: "50100" + Math.floor(10000000 + Math.random() * 90000000), bankName: "State Bank of India", ifscCode: "SBIN0000300",
      casteCertNo: "", rationCardNo: "RC-MH-" + Math.floor(100000 + Math.random() * 900000), rationType: "Saffron (APL)",
      isHandicapped: "No", udidNo: "", parentOccupation: "Service", employmentStatus: "Employed", qualification: "Graduate",
      courseName: "B.Sc Computer Science", collegeName: "Pune University", isHosteller: "No",
      vaultDocuments: {
        aadhaarDoc: "Aadhaar_Card_Verified.pdf",
        panDoc: "PAN_Card_Verified.pdf",
        addressDoc: "Electricity_Bill_Address.pdf",
        photoDoc: "Applicant_Photo.jpg",
        passbookDoc: "Bank_Passbook_Copy.pdf",
        rationDoc: "Ration_Card_Family.pdf"
      }
    };
  }
  return state.userProfiles[email];
}

function logAudit(action, resource, actor = currentUser?.name || "System") {
  const time = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  state.audit.unshift({ time, actor, action, resource, result: "Success" });
  save();
}

function statusClass(s) {
  if (["Approved", "Success"].includes(s)) return "status-success";
  if (["In review", "Information requested", "Pending", "Submitted"].includes(s)) return "status-warning";
  if (["Rejected", "Failed"].includes(s)) return "status-danger";
  return "status-neutral";
}

const titles = {
  dashboard: "Overview & System Status",
  profile: "Applicant Profile & Data Vault",
  services: "Service Directory",
  applications: "Applications & Tracking",
  integrations: "Connected Department APIs",
  workflows: "Workflow Orchestration",
  consent: "Consent & Privacy Engine",
  analytics: "Platform Analytics",
  audit: "Immutable Audit Trail",
  team: "User Roles & Access Control"
};

/* Role tab selector */
function selectRole(role) {
  document.getElementById("selectedRole").value = role;

  const citizenBtn = document.getElementById("roleCitizenBtn");
  const reviewerBtn = document.getElementById("roleReviewerBtn");
  const adminBtn = document.getElementById("roleAdminBtn");
  const emailInput = document.getElementById("authEmail");
  const passInput = document.getElementById("authPassword");
  const authLabel = document.getElementById("authLabel");
  const submitBtn = document.getElementById("authSubmit");
  const deptField = document.getElementById("deptField");
  const infoBox = document.getElementById("roleInfoBox");
  const mode = document.getElementById("authMode").value;

  citizenBtn.classList.toggle("active", role === "citizen");
  reviewerBtn.classList.toggle("active", role === "reviewer");
  adminBtn.classList.toggle("active", role === "admin");

  if (role === "citizen") {
    deptField.style.display = "none";
    authLabel.textContent = "CITIZEN EMAIL / USERNAME";
    if (mode === "signin") {
      emailInput.value = "citizen@example.com";
      passInput.value = "Citizen@2026";
      submitBtn.textContent = "Sign In as Citizen ->";
    } else {
      submitBtn.textContent = "Sign Up as Citizen ->";
    }
    infoBox.innerHTML = "<strong>Citizen Portal:</strong> Apply for certificates, scholarships, and pensions with one-time profile entry.";
  } else if (role === "reviewer") {
    deptField.style.display = "grid";
    authLabel.textContent = "REVIEWER OFFICER ID / EMAIL";
    if (mode === "signin") {
      emailInput.value = "reviewer@setu.gov.in";
      passInput.value = "Review@2026";
      submitBtn.textContent = "Sign In as Reviewer ->";
    } else {
      submitBtn.textContent = "Sign Up as Reviewer ->";
    }
    infoBox.innerHTML = "<strong>Reviewer Workspace:</strong> Review incoming department requests, issue eligibility decisions, and request information.";
  } else if (role === "admin") {
    deptField.style.display = "none";
    authLabel.textContent = "ADMIN ID / EMAIL";
    if (mode === "signin") {
      emailInput.value = "admin@setu.gov.in";
      passInput.value = "Setu@2026";
      submitBtn.textContent = "Sign In as Admin ->";
    } else {
      submitBtn.textContent = "Sign Up as Admin ->";
    }
    infoBox.innerHTML = "<strong>Admin Console:</strong> Full access to REST API connectors, system audit logs, user permissions, and analytics.";
  }
}

/* Toggle between Sign In and Sign Up */
function toggleAuthMode() {
  const modeInput = document.getElementById("authMode");
  const titleEl = document.getElementById("authTitle");
  const nameField = document.getElementById("nameField");
  const switchBtn = document.getElementById("authSwitchBtn");
  const role = document.getElementById("selectedRole").value;

  if (modeInput.value === "signin") {
    modeInput.value = "signup";
    titleEl.textContent = "Sign Up";
    nameField.style.display = "grid";
    switchBtn.textContent = "Already have an account? Sign In";
    selectRole(role);
  } else {
    modeInput.value = "signin";
    titleEl.textContent = "Sign In";
    nameField.style.display = "none";
    switchBtn.textContent = "Don't have an account? Sign Up";
    selectRole(role);
  }
}

/* Handle Auth Form Submit (Sign In or Sign Up) */
document.getElementById("authForm").addEventListener("submit", e => {
  e.preventDefault();
  const role = document.getElementById("selectedRole").value;
  const mode = document.getElementById("authMode").value;
  const input = document.getElementById("authEmail").value.trim();
  const passVal = document.getElementById("authPassword").value;
  const selectedDept = document.getElementById("authDept")?.value || "";
  const nameVal = document.getElementById("authName")?.value.trim() || "";

  if (!input) {
    toast("Please enter a username or email.");
    return;
  }

  let user = state.users.find(u => u.email.toLowerCase() === input.toLowerCase() || u.name.toLowerCase() === input.toLowerCase());

  if (mode === "signup") {
    if (!nameVal && !user) {
      toast("Please enter your full name for sign up.");
      return;
    }
    if (user) {
      toast("Account already exists. Logging you in...");
    } else {
      const formattedEmail = input.includes("@") ? input : `${input.toLowerCase().replace(/\s+/g, '')}@example.com`;
      user = {
        id: "u-" + Date.now(),
        name: nameVal || input.split("@")[0],
        email: formattedEmail.toLowerCase(),
        password: passVal || "default123",
        role: role,
        department: role === "reviewer" ? selectedDept : role === "admin" ? "Government of Maharashtra" : ""
      };
      state.users.push(user);
      getUserProfile(user.email);
      save();
      toast("Account created successfully!");
    }
  } else {
    if (!user) {
      const formattedEmail = input.includes("@") ? input : `${input.toLowerCase().replace(/\s+/g, '')}@example.com`;
      const displayName = input.includes("@") ? input.split("@")[0] : input;

      user = {
        id: "u-" + Date.now(),
        name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
        email: formattedEmail.toLowerCase(),
        password: passVal || "default123",
        role: role,
        department: role === "reviewer" ? selectedDept : role === "admin" ? "Government of Maharashtra" : ""
      };
      state.users.push(user);
      getUserProfile(user.email);
      save();
    }
  }

  user.role = role;
  if (role === "reviewer" && selectedDept) user.department = selectedDept;
  save();

  login(user);
  logAudit(`Authenticated via ${role.toUpperCase()} portal`, user.email, user.name);
  toast(`Logged in as ${roleName(user.role)}`);
});

function login(user) {
  currentUser = user;
  document.getElementById("authScreen").classList.add("hidden");
  document.getElementById("appShell").classList.remove("hidden");

  // Sync Live User Name & Email across Shell UI
  document.getElementById("profileName").textContent = user.name;
  document.getElementById("profileRole").textContent = roleName(user.role) + (user.department ? " · " + user.department : "");
  document.getElementById("profileAvatar").textContent = user.name.split(/\s+/).map(x => x[0]).slice(0, 2).join("").toUpperCase();

  const isUserCitizen = isCitizen();
  const isUserAdmin = isAdmin();

  document.querySelectorAll(".citizen-only-nav").forEach(el => el.classList.toggle("hidden", !isUserCitizen));
  document.querySelectorAll(".admin-nav").forEach(el => el.classList.toggle("hidden", !isUserAdmin));

  go("dashboard");
}

function logout() {
  currentUser = null;
  document.getElementById("appShell").classList.add("hidden");
  document.getElementById("authScreen").classList.remove("hidden");
  selectRole("citizen");
}

function go(page) {
  if (["profile", "consent"].includes(page) && !isCitizen()) {
    toast("Profile & Consent Engine are accessible to Citizens only.");
    return;
  }
  if (["integrations", "workflows", "analytics", "audit", "team"].includes(page) && !isAdmin()) {
    toast("This workspace is restricted to platform administrators.");
    return;
  }
  currentPage = page;
  document.querySelectorAll(".nav-item[data-page]").forEach(x => x.classList.toggle("active", x.dataset.page === page));
  document.getElementById("breadcrumb").textContent = titles[page] || "Overview";
  if (window.innerWidth <= 790) document.getElementById("sidebar").classList.remove("open");
  render();
}

function heading(title, desc, actions = "") {
  return `<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${actions ? `<div class="heading-actions">${actions}</div>` : ""}</div>`;
}

function rowsApps(list) {
  if (!list.length) return `<tr><td colspan="7" class="empty">No matching applications found.</td></tr>`;
  return list.map(a => `<tr class="clickable" data-action="application-detail" data-id="${esc(a.id)}">
 <td><div class="main-cell">${esc(a.id)}</div><div class="sub-cell">${esc(a.date)}</div></td>
 <td><div class="main-cell">${esc(a.service)}</div><div class="sub-cell">${esc(a.department)}</div></td>
 <td>${esc(a.applicant)}</td><td><span class="status ${statusClass(a.status)}">${esc(a.status)}</span></td>
 <td>${esc(a.step)}</td>
 <td><button class="btn btn-small btn-primary" data-action="application-detail" data-id="${esc(a.id)}">${canReview() ? "Review" : "View"}</button></td>
 <td>${a.status === "Approved" ? `<button class="btn btn-small btn-dark" data-action="view-certificate" data-id="${esc(a.id)}">Certificate</button>` : `<button class="btn btn-small btn-danger" data-action="delete-application" data-id="${esc(a.id)}">Delete</button>`}</td>
 </tr>`).join("");
}

/* Dashboard View */
function dashboard() {
  const apps = visibleApps();
  const inProgress = apps.filter(a => ["Submitted", "In review", "Information requested"].includes(a.status)).length;
  const approved = apps.filter(a => a.status === "Approved").length;
  const activeSystems = state.integrations.filter(i => i.status).length;
  const citizenContext = isAdmin() ? "All departments" : isReviewer() ? currentUser.department : "Your services";
  const adminAction = isAdmin() ? `<button class="btn" data-action="export-apps">Export Data</button>` : "";

  return `${heading(`Welcome, ${esc(currentUser.name.split(" ")[0])}`, `${citizenContext} · Interoperability dashboard for government services.`, `${adminAction}<button class="btn btn-primary" data-action="new-application">+ New Service Request</button>`)}
 <div class="grid metrics">
  <div class="metric">
    <div class="metric-top"><span>${isAdmin() ? "Total Applications" : "Your Requests"}</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg></div>
    </div>
    <div class="metric-value">${apps.length}</div>
    <div class="metric-foot">Unified tracking across systems</div>
  </div>
  <div class="metric">
    <div class="metric-top"><span>${canReview() ? "Needs Action" : "In Processing"}</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
    </div>
    <div class="metric-value">${inProgress}</div>
    <div class="metric-foot">${isAdmin() ? "Awaiting department response" : "Active cross-department steps"}</div>
  </div>
  <div class="metric">
    <div class="metric-top"><span>Delivered</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
    </div>
    <div class="metric-value">${approved}</div>
    <div class="metric-foot">Service outcomes finalized</div>
  </div>
  ${isAdmin() ? `
  <div class="metric">
    <div class="metric-top"><span>Active APIs</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg></div>
    </div>
    <div class="metric-value">${activeSystems}<span style="font-size:13px;color:#64748b"> / ${state.integrations.length}</span></div>
    <div class="metric-foot">Connected department connectors</div>
  </div>` : `
  <div class="metric">
    <div class="metric-top"><span>Directory</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/></svg></div>
    </div>
    <div class="metric-value">${state.services.filter(s => s.active).length}</div>
    <div class="metric-foot">Single access point services</div>
  </div>`}
 </div>

 <div class="grid dashboard" style="grid-template-columns:1fr;">
  <div class="panel">
    <div class="panel-head">
      <div>
        <h2 class="panel-title">${canReview() ? "Department Application Queue" : "Your Recent Applications"}</h2>
        <div class="panel-subtitle">Select a request to view progress, issue decisions, or download approved certificates.</div>
      </div>
      <button class="link-btn" data-page="applications">View all -></button>
    </div>
    <div class="table-wrap">
      <table>
        <thead>
          <tr><th>Reference</th><th>Service</th><th>Applicant</th><th>Status</th><th>Current Step</th><th>Action</th><th></th></tr>
        </thead>
        <tbody>${rowsApps(apps.slice(0, 6))}</tbody>
      </table>
    </div>
  </div>
 </div>

 ${isCitizen() ? `
 <div class="grid two">
  <div class="panel">
    <div class="panel-head">
      <div><h2 class="panel-title">Popular Government Services</h2><div class="panel-subtitle">Submit applications with consent-based data reuse</div></div>
      <button class="link-btn" data-page="services">Directory -></button>
    </div>
    ${state.services.filter(s => s.active).slice(0, 3).map(s => `
    <div class="health-row">
      <div class="health-icon">${s.iconSvg}</div>
      <div>
        <div class="health-name">${esc(s.name)}</div>
        <div class="health-detail">${esc(s.department)} · ${esc(s.time)}</div>
      </div>
      <button class="btn btn-small btn-primary" data-action="apply-service" data-service="${s.id}">Apply -></button>
    </div>`).join("")}
  </div>
  <div class="panel">
    <div class="panel-head">
      <div><h2 class="panel-title">Live Citizen Vault Summary</h2><div class="panel-subtitle">Government verified details & document attachments</div></div>
      <button class="link-btn" data-page="profile">Manage Vault -></button>
    </div>
    <div class="health-row">
      <div class="health-icon"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div>
      <div><div class="health-name">Logged In User Profile</div><div class="health-detail">Name: <b>${esc(currentUser.name)}</b> (${esc(currentUser.email)})</div></div>
      <span class="health-status">Live Dynamic Data</span>
    </div>
    <div class="health-row">
      <div class="health-icon"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
      <div><div class="health-name">Sharing Consent Engine</div><div class="health-detail">${state.consents.identity ? "Auto pre-fill active for service requests" : "Auto pre-fill disabled (Manual entry required)"}</div></div>
      <span class="health-status" style="color:${state.consents.identity ? "var(--green)" : "var(--amber)"}">${state.consents.identity ? "Consent ON" : "Consent OFF"}</span>
    </div>
  </div>
 </div>` : ""}`;
}

/* Expanded Applicant Profile & Data Vault - Matching Reference Blueprint */
function profilePage() {
  if (!isCitizen()) return "";
  const p = getUserProfile(currentUser.email);
  const docs = p.vaultDocuments || {};

  return `${heading("Applicant Profile & Data Vault", `Reusable Citizen Data & Document Vault for ${esc(currentUser.name)}. Authorized departments fetch these verified details upon your explicit application consent.`, `<button class="btn btn-primary" data-action="save-profile-details">Save Profile Vault Changes</button>`)}
 <div class="notice">
   <b>Interoperability Protocol Blueprint:</b> Store common information once, apply consent-based sharing, and allow each department to request only the additional service-specific details/documents required for its workflow.
 </div>
 <div class="accordion" id="profileAccordion">

  <!-- 1. Common Citizen Data (Identity & Family) -->
  <div class="accordion-item open">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>1. Common Citizen Data (Identity & Family)</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Full Applicant Name *</label><input id="p_name" value="${esc(currentUser?.name || "")}"></div>
     <div class="field"><label>Email Address (Account ID) *</label><input id="p_email" readonly style="background:#f1f5f9;" value="${esc(currentUser?.email || "")}"></div>
     <div class="field"><label>Father's Name</label><input id="p_father" value="${esc(p.fatherName || "")}"></div>
     <div class="field"><label>Mother's Name</label><input id="p_mother" value="${esc(p.motherName || "")}"></div>
     <div class="field"><label>Date of Birth / Age</label><input id="p_dob" type="date" value="${esc(p.dob || "")}"></div>
     <div class="field"><label>Gender</label><select id="p_gender"><option ${p.gender === "Male" ? "selected" : ""}>Male</option><option ${p.gender === "Female" ? "selected" : ""}>Female</option><option ${p.gender === "Other" ? "selected" : ""}>Other</option></select></div>
     <div class="field"><label>Marital Status</label><select id="p_marital"><option ${p.maritalStatus === "Unmarried" ? "selected" : ""}>Unmarried</option><option ${p.maritalStatus === "Married" ? "selected" : ""}>Married</option><option ${p.maritalStatus === "Widowed" ? "selected" : ""}>Widowed</option></select></div>
     <div class="field"><label>Mobile Number (OTP Verified) *</label><input id="p_phone" value="${esc(p.phone || "+91 98765 43210")}"></div>
    </div>
   </div>
  </div>

  <!-- 2. Common Verified Document Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>2. Reusable Document Vault (Digital Attachments)</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <p class="muted" style="font-size:11px;margin-top:0">Documents uploaded here are automatically attached to government service requests when consent is granted.</p>
    <div class="form-grid">
     <div class="field"><label>Aadhaar Card (Identity Proof)</label><input value="${esc(docs.aadhaarDoc || "Aadhaar_Card_Verified.pdf")}" readonly style="background:#f8fafc"></div>
     <div class="field"><label>PAN Card (Tax Proof)</label><input value="${esc(docs.panDoc || "PAN_Card_Verified.pdf")}" readonly style="background:#f8fafc"></div>
     <div class="field"><label>Address Proof (Electricity Bill / Ration Card)</label><input value="${esc(docs.addressDoc || "Electricity_Bill_Address.pdf")}" readonly style="background:#f8fafc"></div>
     <div class="field"><label>Passport Photograph & Signature</label><input value="${esc(docs.photoDoc || "Applicant_Photo.jpg")}" readonly style="background:#f8fafc"></div>
     <div class="field"><label>Bank Passbook Copy</label><input value="${esc(docs.passbookDoc || "Bank_Passbook_Copy.pdf")}" readonly style="background:#f8fafc"></div>
     <div class="field"><label>Ration Card Copy</label><input value="${esc(docs.rationDoc || "Ration_Card_Family.pdf")}" readonly style="background:#f8fafc"></div>
    </div>
   </div>
  </div>

  <!-- 3. Government Identity & UID Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>3. Government Identity & Tax Verification (UIDAI / IT Dept)</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Aadhaar Number (12-Digit UID)</label><input id="p_aadhaar" value="${esc(p.aadhaarNo || "")}" placeholder="e.g. 4821 9901 8823"></div>
     <div class="field"><label>PAN Card Number</label><input id="p_pan" value="${esc(p.panNo || "")}" placeholder="e.g. ABCDE1234F"></div>
     <div class="field full"><label>Voter ID / EPIC Number</label><input id="p_voter" value="${esc(p.voterId || "")}" placeholder="e.g. MH/04/012/981242"></div>
    </div>
   </div>
  </div>

  <!-- 4. Location & Address Details -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>4. Permanent & Correspondence Address</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field full"><label>Permanent Address Line 1</label><input id="p_addr" value="${esc(p.addressLine1 || "")}"></div>
     <div class="field"><label>State</label><input id="p_state" value="${esc(p.state || "Maharashtra")}"></div>
     <div class="field"><label>District</label><input id="p_district" value="${esc(p.district || "Pune")}"></div>
     <div class="field"><label>Taluka / Tehsil</label><input id="p_taluka" value="${esc(p.taluka || "")}"></div>
     <div class="field"><label>Village / City</label><input id="p_village" value="${esc(p.village || "Shivaji Nagar")}"></div>
     <div class="field"><label>Pincode</label><input id="p_pincode" value="${esc(p.pincode || "")}"></div>
    </div>
   </div>
  </div>

  <!-- 5. Income, Land & Revenue Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>5. Income, Domicile & Land Records (MahaRevenue)</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Are you a Domicile of Maharashtra?</label><select id="p_domicile"><option ${p.domicileCert === "Yes" ? "selected" : ""}>Yes</option><option ${p.domicileCert === "No" ? "selected" : ""}>No</option></select></div>
     <div class="field"><label>Domicile Certificate Number</label><input id="p_dom_no" value="${esc(p.domicileNo || "")}"></div>
     <div class="field"><label>Family Annual Income (Rs.)</label><input id="p_income" value="${esc(p.annualIncome || "")}"></div>
     <div class="field"><label>Income Certificate Number</label><input id="p_income_no" value="${esc(p.incomeCertNo || "")}"></div>
     <div class="field full"><label>7/12 Extract Khata / Land Record Ref (MahaBhulekh)</label><input id="p_land" value="${esc(p.landRecordNo || "")}" placeholder="e.g. 7/12-HAV-9921"></div>
    </div>
   </div>
  </div>

  <!-- 6. Direct Benefit Transfer (DBT) Bank Account Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>6. Direct Benefit Transfer (DBT) Bank Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Bank Account Number</label><input id="p_bank_acc" value="${esc(p.bankAccount || "")}" placeholder="Account Number"></div>
     <div class="field"><label>Bank Name</label><input id="p_bank_name" value="${esc(p.bankName || "")}" placeholder="e.g. State Bank of India"></div>
     <div class="field full"><label>IFSC Code</label><input id="p_bank_ifsc" value="${esc(p.ifscCode || "")}" placeholder="e.g. SBIN0000300"></div>
    </div>
   </div>
  </div>

  <!-- 7. Social Category, Ration & Inclusion Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>7. Social Category, Ration & Inclusion Vault</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Category</label><select id="p_cat"><option ${p.category === "General" ? "selected" : ""}>General</option><option ${p.category === "OBC" ? "selected" : ""}>OBC</option><option ${p.category === "SC" ? "selected" : ""}>SC</option><option ${p.category === "ST" ? "selected" : ""}>ST</option><option ${p.category === "EWS" ? "selected" : ""}>EWS</option></select></div>
     <div class="field"><label>Caste Certificate Number</label><input id="p_caste_no" value="${esc(p.casteCertNo || "")}"></div>
     <div class="field"><label>Ration Card Number</label><input id="p_ration_no" value="${esc(p.rationCardNo || "")}"></div>
     <div class="field"><label>Ration Card Category</label><select id="p_ration_type"><option ${p.rationType === "Yellow (BPL)" ? "selected" : ""}>Yellow (BPL)</option><option ${p.rationType === "Saffron (APL)" ? "selected" : ""}>Saffron (APL)</option><option ${p.rationType === "White" ? "selected" : ""}>White</option></select></div>
     <div class="field"><label>Person with Disability (Divyang)?</label><select id="p_disabled"><option ${p.isHandicapped === "No" ? "selected" : ""}>No</option><option ${p.isHandicapped === "Yes" ? "selected" : ""}>Yes</option></select></div>
     <div class="field"><label>UDID Certificate Number (If Divyang)</label><input id="p_udid" value="${esc(p.udidNo || "")}"></div>
    </div>
   </div>
  </div>

  <!-- 8. Educational & Employment Vault -->
  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>8. Educational Qualifications & Employment Vault</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Highest Qualification</label><input id="p_qual" value="${esc(p.qualification || "")}"></div>
     <div class="field"><label>Employment Status</label><select id="p_emp_status"><option ${p.employmentStatus === "Student" ? "selected" : ""}>Student</option><option ${p.employmentStatus === "Employed" ? "selected" : ""}>Employed</option><option ${p.employmentStatus === "Self-Employed" ? "selected" : ""}>Self-Employed</option><option ${p.employmentStatus === "Unemployed" ? "selected" : ""}>Unemployed</option></select></div>
     <div class="field"><label>College / Institution Name</label><input id="p_college" value="${esc(p.collegeName || "")}"></div>
     <div class="field"><label>Degree / Course Name</label><input id="p_course" value="${esc(p.courseName || "")}"></div>
    </div>
   </div>
  </div>

 </div>`;
}

function toggleAccordion(btn) {
  const item = btn.parentElement;
  item.classList.toggle("open");
}

/* Save profile data dynamically */
function saveProfileDataFromUI() {
  const email = currentUser.email.toLowerCase();
  const nameInput = document.getElementById("p_name")?.value.trim();

  if (nameInput) {
    currentUser.name = nameInput;
    document.getElementById("profileName").textContent = currentUser.name;
    document.getElementById("profileAvatar").textContent = currentUser.name.split(/\s+/).map(x => x[0]).slice(0, 2).join("").toUpperCase();

    const matchedUser = state.users.find(u => u.email.toLowerCase() === email);
    if (matchedUser) matchedUser.name = currentUser.name;
  }

  state.userProfiles[email] = {
    ...getUserProfile(email),
    fatherName: document.getElementById("p_father")?.value || "",
    motherName: document.getElementById("p_mother")?.value || "",
    dob: document.getElementById("p_dob")?.value || "",
    gender: document.getElementById("p_gender")?.value || "Male",
    maritalStatus: document.getElementById("p_marital")?.value || "Unmarried",
    religion: document.getElementById("p_religion")?.value || "",
    category: document.getElementById("p_cat")?.value || "General",
    phone: document.getElementById("p_phone")?.value || "",
    email: email,
    aadhaarNo: document.getElementById("p_aadhaar")?.value || "",
    panNo: document.getElementById("p_pan")?.value || "",
    voterId: document.getElementById("p_voter")?.value || "",
    addressLine1: document.getElementById("p_addr")?.value || "",
    state: document.getElementById("p_state")?.value || "Maharashtra",
    district: document.getElementById("p_district")?.value || "Pune",
    taluka: document.getElementById("p_taluka")?.value || "",
    village: document.getElementById("p_village")?.value || "",
    pincode: document.getElementById("p_pincode")?.value || "",
    domicileCert: document.getElementById("p_domicile")?.value || "Yes",
    domicileNo: document.getElementById("p_dom_no")?.value || "",
    annualIncome: document.getElementById("p_income")?.value || "",
    incomeCertNo: document.getElementById("p_income_no")?.value || "",
    landRecordNo: document.getElementById("p_land")?.value || "",
    bankAccount: document.getElementById("p_bank_acc")?.value || "",
    bankName: document.getElementById("p_bank_name")?.value || "",
    ifscCode: document.getElementById("p_bank_ifsc")?.value || "",
    casteCertNo: document.getElementById("p_caste_no")?.value || "",
    rationCardNo: document.getElementById("p_ration_no")?.value || "",
    rationType: document.getElementById("p_ration_type")?.value || "Saffron (APL)",
    isHandicapped: document.getElementById("p_disabled")?.value || "No",
    udidNo: document.getElementById("p_udid")?.value || "",
    qualification: document.getElementById("p_qual")?.value || "",
    employmentStatus: document.getElementById("p_emp_status")?.value || "Student",
    collegeName: document.getElementById("p_college")?.value || "",
    courseName: document.getElementById("p_course")?.value || ""
  };

  save();
  logAudit("Updated e-Governance live profile vault", currentUser.email);
  toast("Profile data saved dynamically to your vault!");
}

function servicesPage() {
  const list = state.services.filter(s => s.active);
  return `${heading("Service Directory", "Select a connected government service to apply.", isAdmin() ? `<button class="btn btn-primary" data-action="add-service">+ Add Service</button>` : "")}
 <div class="grid service-grid">${list.map(s => `<article class="service-card">
 <div class="service-top"><div class="service-icon">${s.iconSvg}</div><span class="status status-success">Available</span></div>
 <h3>${esc(s.name)}</h3><p>${esc(s.description)}</p>
 <div class="service-meta"><span>Time: ${esc(s.time)}</span><span>Fee: ${esc(s.fee)}</span></div>
 <div class="service-meta">Dept: ${esc(s.department)}</div>
 <div class="card-actions">
   <button class="btn btn-primary btn-small" data-action="apply-service" data-service="${esc(s.id)}">Start Application -></button>
   ${isAdmin() ? `<button class="btn btn-small btn-danger" data-action="delete-service" data-id="${esc(s.id)}">Delete</button>` : ""}
 </div></article>`).join("")}</div>`;
}

function applicationsPage() {
  let apps = visibleApps();
  return `${heading(canReview() ? "Application Review Workspace" : "My Applications", canReview() ? "Review requests, inspect fetched applicant vault data, or issue official certificates." : "Track request milestones across processing departments.", `${canReview() ? `<button class="btn" data-action="export-apps">Export CSV</button>` : ""}<button class="btn btn-primary" data-action="new-application">+ New Request</button>`)}
 <div class="panel">
   <div class="panel-head">
     <div><h2 class="panel-title">${canReview() ? "Department Application Queue" : "Your Submitted Requests"}</h2><div class="panel-subtitle">${apps.length} request(s) found · Click row to view details, inspect fetched vault data, or generate certificates.</div></div>
     <select id="statusFilter" class="btn"><option value="">All Statuses</option><option>Submitted</option><option>In review</option><option>Information requested</option><option>Approved</option><option>Rejected</option></select>
   </div>
   <div class="table-wrap">
     <table><thead><tr><th>Reference</th><th>Service</th><th>Applicant</th><th>Status</th><th>Current Step</th><th>Action</th><th></th></tr></thead><tbody id="applicationTable">${rowsApps(apps)}</tbody></table>
   </div>
 </div>`;
}

function integrationsPage() {
  if (!isAdmin()) return "";
  return `${heading("Connected Systems", "Monitor REST API adapters linking department databases.", `<button class="btn" data-action="api-info">API Protocols</button><button class="btn btn-primary" data-action="add-connector">+ Register Connector</button>`)}
 <div class="notice">Interoperability Layer: Reusable REST connectors, common JSON schemas, role-based access, latency monitoring, and auditability.</div>
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Active Department Connectors</h2><div class="panel-subtitle">${state.integrations.filter(i => i.status).length} of ${state.integrations.length} endpoints online</div></div><span class="status ${state.integrations.every(i => i.status) ? "status-success" : "status-warning"}">${state.integrations.every(i => i.status) ? "All Systems Operational" : "Degraded Status"}</span></div>
 <div class="integration-list">${state.integrations.map(i => `<div class="integration-card"><div class="integration-logo">${i.iconSvg}</div><div class="integration-info"><div class="integration-name">${esc(i.name)}</div><div class="integration-desc">${esc(i.department)}</div></div><div class="integration-meta">${i.status ? i.latency + " ms" : "—"}<br>${esc(i.uptime)} uptime</div><span class="status ${i.status ? "status-success" : "status-neutral"}">${i.status ? "Connected" : "Paused"}</span><label class="switch"><input type="checkbox" data-action="toggle-integration" data-id="${esc(i.id)}" ${i.status ? "checked" : ""}><span class="slider"></span></label><button class="btn btn-small btn-danger" data-action="delete-connector" data-id="${esc(i.id)}">Delete</button></div>`).join("")}</div></div>`;
}

function workflowsPage() {
  if (!isAdmin()) return "";
  return `${heading("Workflow Orchestration", "Configure automated multi-step verification sequences across departments.", `<button class="btn btn-primary" data-action="add-workflow">+ Create Workflow</button>`)}
 <div class="workflow-list">${state.workflows.map((w, i) => `<div class="workflow-card"><div class="workflow-number">${String(i + 1).padStart(2, "0")}</div><div class="workflow-body"><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(w.name)}</h3><button class="btn btn-small btn-danger" data-action="delete-workflow" data-index="${i}">Delete</button></div><p>${esc(w.description)}</p><div class="step-tags">${w.steps.map((s, j) => `<span class="step-tag">${j + 1}. ${esc(s)}</span>`).join("")}</div></div></div>`).join("")}</div>`;
}

function consentPage() {
  if (!isCitizen()) return "";
  const opts = [
    ["identity", "Identity Verification", "Allow authorized departments to verify identity and fetch saved profile details for requested services."],
    ["income", "Income & Revenue Records", "Share verified income certificate and land details for scholarship or benefit eligibility."],
    ["education", "Education Records", "Allow education institutions to check qualification and enrollment status."],
    ["notifications", "Service Updates", "Receive realtime application status notifications and data requests."]
  ];
  return `${heading("Consent & Privacy Engine", "Manage granular data-sharing permissions for government services.", `<button class="btn" data-action="privacy-info">Privacy Principles</button>`)}
 <div class="grid two"><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Citizen Sharing Preferences</h2><div class="panel-subtitle">Toggle department data access permissions.</div></div></div>
 ${opts.map(o => `<div class="consent-item"><div class="consent-icon"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div><div class="consent-text"><strong>${o[1]}</strong><span>${o[2]}</span></div><label class="switch"><input type="checkbox" data-action="toggle-consent" data-id="${o[0]}" ${state.consents[o[0]] ? "checked" : ""}><span class="slider"></span></label></div>`).join("")}
 </div><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Security Guarantees</h2><div class="panel-subtitle">Interoperability Governance Standards</div></div></div>
 ${[["Purpose-Limited Use", "Information used solely to process requested service"], ["Role-Based Access", "Restricted to verified department officers"], ["Immutable Audit", "All data transactions recorded in access log"], ["Citizen Control", "Permissions revocable by citizen at any time"]].map(x => `<div class="health-row"><div class="health-icon"><svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div><div><div class="health-name">${x[0]}</div><div class="health-detail">${x[1]}</div></div></div>`).join("")}</div></div>`;
}

function analyticsPage() {
  if (!isAdmin()) return "";
  const apps = state.applications, total = apps.length, approved = apps.filter(a => a.status === "Approved").length, rejected = apps.filter(a => a.status === "Rejected").length, review = apps.filter(a => ["In review", "Submitted", "Information requested"].includes(a.status)).length, online = state.integrations.filter(i => i.status).length;
  const pct = (n) => total ? Math.round(n / total * 100) : 0;
  return `${heading("Analytics", "Measure platform throughput and service delivery performance.", `<button class="btn" data-action="export-apps">Export CSV</button>`)}
 <div class="grid metrics">
 ${[["Total Requests", total], ["Approved", approved], ["Processing", review], ["Active APIs", online + " / " + state.integrations.length]].map(x => `<div class="metric"><div class="metric-top"><span>${x[0]}</span></div><div class="metric-value">${x[1]}</div><div class="metric-foot">Current platform metrics</div></div>`).join("")}
 </div><div class="grid two"><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Application Outcomes</h2><div class="panel-subtitle">Status breakdown across departments</div></div></div>
 ${[["Approved", approved, "#16a34a"], ["In progress", review, "#d97706"], ["Rejected", rejected, "#dc2626"]].map(x => `<div class="progress-row"><div class="progress-label"><span>${x[0]}</span><b>${x[1]} (${pct(x[1])}%)</b></div><div class="progress"><span style="width:${pct(x[1])}\%;background:${x[2]}"></span></div></div>`).join("")}</div>
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">API Endpoint Availability</h2><div class="panel-subtitle">Connected department connector status</div></div></div>
 <div style="font-size:28px;font-weight:850;color:#0f172a">${state.integrations.length ? Math.round(online / state.integrations.length * 100) : 0}%</div><div class="muted" style="font-size:10px;margin:4px 0 12px">${online} of ${state.integrations.length} connectors online</div>
 <div class="notice" style="margin:0">Monitored continuously via automated HTTP health checks.</div></div></div>`;
}

function auditPage() {
  if (!isAdmin()) return "";
  return `${heading("Audit Trail", "Immutable event log recording cross-department requests and decisions.", `<button class="btn" data-action="export-audit">Export Log CSV</button>`)}
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Transaction Log</h2><div class="panel-subtitle">${state.audit.length} event(s) recorded in current session</div></div><span class="status status-success">Logging Active</span></div>
 <div class="table-wrap"><table><thead><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Resource</th><th>Result</th></tr></thead><tbody>${state.audit.map(a => `<tr><td>${esc(a.time)}</td><td>${esc(a.actor)}</td><td>${esc(a.action)}</td><td>${esc(a.resource)}</td><td><span class="status status-success">${esc(a.result)}</span></td></tr>`).join("")}</tbody></table></div></div>`;
}

function teamPage() {
  if (!isAdmin()) return "";
  return `${heading("User Roles & Access Control", "Manage platform user accounts and department permissions.", `<button class="btn btn-primary" data-action="add-user">+ Create User</button>`)}
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Registered Accounts</h2><div class="panel-subtitle">${state.users.length} user account(s) configured</div></div></div>
 <div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Access Level</th><th>Action</th></tr></thead><tbody>${state.users.map((u) => `<tr><td><b>${esc(u.name)}</b></td><td>${esc(u.email)}</td><td>${esc(roleName(u.role))}</td><td>${esc(u.department || "—")}</td><td><span class="status ${u.role === "admin" ? "status-success" : "status-neutral"}">${u.role === "admin" ? "Admin" : u.role === "reviewer" ? "Reviewer" : "Citizen"}</span></td><td>${u.id !== currentUser.id ? `<button class="btn btn-small btn-danger" data-action="delete-user" data-id="${esc(u.id)}">Delete</button>` : "—"}</td></tr>`).join("")}</tbody></table></div></div>`;
}

function render() {
  if (!currentUser) return;
  const views = { dashboard, profile: profilePage, services: servicesPage, applications: applicationsPage, integrations: integrationsPage, workflows: workflowsPage, consent: consentPage, analytics: analyticsPage, audit: auditPage, team: teamPage };
  document.getElementById("content").innerHTML = (views[currentPage] || dashboard)();
  updateCount();
}

function openModal(title, body, foot = "") {
  document.getElementById("modalRoot").innerHTML = `<div class="modal-backdrop" data-action="backdrop-close"><div class="modal" role="dialog" aria-modal="true"><div class="modal-head"><h2>${title}</h2><button class="modal-close" data-action="close-modal">X</button></div><div class="modal-body">${body}</div>${foot ? `<div class="modal-foot">${foot}</div>` : ""}</div></div>`;
}
function closeModal() { document.getElementById("modalRoot").innerHTML = ""; }

/* Dynamic Service-Specific Input Fields generator matching reference blueprint */
function renderServiceSpecificFields(serviceId, profile, hasConsent) {
  switch (serviceId) {
    case "income":
      return `
     <div class="field"><label>Occupation *</label><input id="app_occ" value="${esc(hasConsent ? profile.parentOccupation || "Service & Agriculture" : "")}" placeholder="e.g. Salaried / Farmer / Business"></div>
     <div class="field"><label>Income Source *</label><input id="app_inc_source" value="${esc(hasConsent ? "Salary & Agriculture" : "")}" placeholder="e.g. Salary, Agriculture, Rent"></div>
     <div class="field full"><label>Annual Family Income (Rs.) *</label><input id="app_inc_amt" value="${esc(hasConsent ? profile.annualIncome || "150000" : "")}" placeholder="e.g. 150000"></div>`;
    case "scholarship":
      return `
     <div class="field"><label>College / Institution Name *</label><input id="app_college" value="${esc(hasConsent ? profile.collegeName || "AISSMS IOIT Pune" : "")}" placeholder="e.g. COEP Pune"></div>
     <div class="field"><label>Course Name *</label><input id="app_course" value="${esc(hasConsent ? profile.courseName || "B.Tech Computer Engineering" : "")}" placeholder="e.g. B.Tech Computer Science"></div>
     <div class="field"><label>Year / Semester *</label><input id="app_sem" value="Semester 6" placeholder="e.g. 3rd Year / Sem 6"></div>
     <div class="field"><label>Previous Marksheet Percentage *</label><input id="app_marks" value="88.5%" placeholder="e.g. 88.5%"></div>`;
    case "business":
      return `
     <div class="field"><label>Business / Company Name *</label><input id="app_biz_name" placeholder="e.g. Apex Tech Solutions Pvt Ltd"></div>
     <div class="field"><label>Business Type *</label><select id="app_biz_type"><option>Private Limited</option><option>Partnership</option><option>Proprietorship</option><option>LLP</option></select></div>
     <div class="field"><label>Investment Amount (Rs.) *</label><input id="app_biz_inv" placeholder="e.g. 500000"></div>
     <div class="field"><label>Number of Employees *</label><input id="app_biz_emp" placeholder="e.g. 12"></div>`;
    case "birth":
      return `
     <div class="field"><label>Child's Full Name *</label><input id="app_child_name" placeholder="Enter child's full name"></div>
     <div class="field"><label>Date & Time of Birth *</label><input id="app_child_dob" type="datetime-local"></div>
     <div class="field full"><label>Place of Birth / Hospital Name *</label><input id="app_hospital" placeholder="e.g. Sahyadri Hospital, Pune"></div>`;
    case "pension":
      return `
     <div class="field"><label>Pension Scheme Type *</label><select id="app_pension_type"><option>Indira Gandhi National Old Age Pension</option><option>State Senior Citizen Support</option></select></div>
     <div class="field"><label>Spouse Status *</label><select id="app_spouse_status"><option>Married</option><option>Widowed</option><option>Single</option></select></div>`;
    case "residence":
      return `
     <div class="field"><label>Duration of Residence (Years) *</label><input id="app_res_years" value="15" placeholder="e.g. 15 Years"></div>
     <div class="field"><label>Purpose of Certificate *</label><input id="app_res_purpose" value="Education & Employment" placeholder="e.g. Passport / Education"></div>`;
    case "caste":
      return `
     <div class="field"><label>Caste *</label><input id="app_caste" placeholder="e.g. Maratha / Kunbi / Mahars"></div>
     <div class="field"><label>Sub-Caste *</label><input id="app_subcaste" placeholder="Sub-caste details"></div>
     <div class="field full"><label>Ancestral District *</label><input id="app_caste_dist" value="${esc(hasConsent ? profile.district || "Pune" : "")}"></div>`;
    case "trade":
      return `
     <div class="field"><label>Business Premises Name *</label><input id="app_trade_name" placeholder="e.g. Green Leaf Organics"></div>
     <div class="field"><label>Premises Area (Sq. Ft.) *</label><input id="app_trade_area" placeholder="e.g. 450 sq ft"></div>
     <div class="field"><label>Premises Ownership *</label><select id="app_trade_ownership"><option>Owned</option><option>Rented / Rented with Owner NOC</option></select></div>
     <div class="field"><label>Shop Registration No</label><input id="app_shop_reg" placeholder="Optional Shop Act No"></div>`;
    case "water":
      return `
     <div class="field"><label>Property / Plot Number *</label><input id="app_water_plot" placeholder="e.g. Plot No 42, Sector 4"></div>
     <div class="field"><label>Connection Type *</label><select id="app_water_type"><option>Residential</option><option>Commercial</option></select></div>
     <div class="field full"><label>Required Pipe Size (Inches) *</label><select id="app_water_pipe"><option>0.5 Inch (Standard Domestic)</option><option>0.75 Inch</option><option>1.0 Inch (Commercial)</option></select></div>`;
    case "ration":
      return `
     <div class="field"><label>Existing Ration Card Number *</label><input id="app_ration_no" value="${esc(hasConsent ? profile.rationCardNo || "RC-MH-981242" : "")}"></div>
     <div class="field"><label>Ration Card Category *</label><select id="app_ration_cat"><option ${profile.rationType?.includes("Saffron") ? "selected" : ""}>Saffron (APL)</option><option ${profile.rationType?.includes("Yellow") ? "selected" : ""}>Yellow (BPL)</option></select></div>
     <div class="field full"><label>Head of Family Name *</label><input id="app_head_family" value="${esc(hasConsent ? profile.fatherName || currentUser.name : "")}"></div>`;
    case "driving":
      return `
     <div class="field"><label>Driving Licence Number *</label><input id="app_dl_no" placeholder="e.g. MH-12-20210098124"></div>
     <div class="field"><label>Issuing RTO Office *</label><input id="app_rto_source" value="MH-12 Pune RTO"></div>
     <div class="field full"><label>Destination RTO / State for Transfer *</label><input id="app_rto_dest" placeholder="e.g. MH-02 Mumbai West / Karnataka"></div>`;
    case "property":
      return `
     <div class="field"><label>Property ID / Assessment Number *</label><input id="app_prop_id" placeholder="e.g. PMC-PROP-99214"></div>
     <div class="field"><label>Ward Number *</label><input id="app_ward_no" value="Ward 14"></div>
     <div class="field full"><label>Property Type *</label><select id="app_prop_type"><option>Residential Apartment</option><option>Commercial Shop</option><option>Plot / Open Land</option></select></div>`;
    default:
      return `<div class="field full"><label>Additional Request Details</label><input placeholder="Provide context"></div>`;
  }
}

/* Start Application Modal - Implementation matching 12-Service Blueprint */
function openApply(serviceId = "") {
  const service = state.services.find(s => s.id === serviceId && s.active) || state.services.find(s => s.active);
  const opts = state.services.filter(s => s.active).map(s => `<option value="${esc(s.id)}" ${s.id === service?.id ? "selected" : ""}>${esc(s.name)} — ${esc(s.department)}</option>`).join("");

  const hasConsent = !!state.consents.identity;
  const profile = getUserProfile(currentUser?.email);
  const docs = profile.vaultDocuments || {};

  const prefilledName = hasConsent ? (currentUser?.name || "") : "";
  const prefilledEmail = hasConsent ? (currentUser?.email || "") : "";
  const prefilledPhone = hasConsent ? (profile.phone || "+91 98765 43210") : "";
  const prefilledAadhaar = hasConsent ? (profile.aadhaarNo || "") : "";

  openModal(`Start Service Request — ${esc(service.name)}`, `
 <p class="muted" style="font-size:11px;line-height:1.5;margin-top:0">
   ${hasConsent ? "<b>Interoperability Protocol Active:</b> Common citizen data & verified vault documents are auto-reused below." : "Consent Disabled: Common citizen details must be typed manually."}
 </p>
 <form id="appForm">
   <div class="form-grid">
     <div class="field full"><label>Target Government Service *</label><select id="serviceSelect" onchange="updateServiceModalFields(this.value)" required>${opts}</select></div>
     
     <div style="grid-column:1/-1;background:#f8fafc;border:1px solid #e2e8f0;padding:10px;border-radius:8px;margin-bottom:10px">
       <div style="font-size:10px;font-weight:800;color:#0f172a;margin-bottom:6px">1. REUSED COMMON CITIZEN DATA (FROM VAULT)</div>
       <div class="form-grid">
         <div class="field"><label>Applicant Name *</label><input id="appName" required value="${esc(prefilledName)}" placeholder="Full Name"></div>
         <div class="field"><label>Mobile Number *</label><input id="appPhone" required type="tel" value="${esc(prefilledPhone)}" placeholder="+91 98765 43210"></div>
         <div class="field"><label>Email Address *</label><input id="appEmail" type="email" required value="${esc(prefilledEmail)}" placeholder="you@example.com"></div>
         <div class="field"><label>Aadhaar / UID Reference</label><input id="appAadhaar" value="${esc(prefilledAadhaar)}" placeholder="12-digit UID"></div>
       </div>
       <div style="font-size:9px;color:#64748b;margin-top:4px">
         <b>Auto-Attached Vault Documents:</b> ${hasConsent ? `${esc(docs.aadhaarDoc || "Aadhaar.pdf")}, ${esc(docs.panDoc || "PAN.pdf")}, ${esc(docs.addressDoc || "Address_Proof.pdf")}` : "None (Consent OFF)"}
       </div>
     </div>

     <div style="grid-column:1/-1;background:#f0fdf4;border:1px solid #bbf7d0;padding:10px;border-radius:8px;margin-bottom:10px">
       <div style="font-size:10px;font-weight:800;color:#166534;margin-bottom:6px">2. SERVICE-SPECIFIC DATA &amp; DOCUMENTS FOR ${esc(service.department.toUpperCase())}</div>
       <div class="form-grid" id="serviceSpecificContainer">
         ${renderServiceSpecificFields(service.id, profile, hasConsent)}
       </div>
     </div>

     <div class="field full">
       <label class="checkbox-line">
         <input id="appConsent" type="checkbox" ${hasConsent ? "checked" : ""}>
         I AUTHORIZE SETU INTEROPERABILITY PROTOCOL TO SHARE MY REUSABLE VAULT DETAILS &amp; ATTACHMENTS WITH ${esc(service.department.toUpperCase())}.
       </label>
     </div>
   </div>
 </form>`,
    `<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="submit-application">Submit Service Application -></button>`
  );

  setTimeout(() => {
    const consentBox = document.getElementById("appConsent");
    if (consentBox) {
      consentBox.addEventListener("change", (e) => {
        state.consents.identity = e.target.checked;
        save();
        openApply(document.getElementById("serviceSelect").value);
        toast(e.target.checked ? "Consent enabled: Reused common vault data auto-filled." : "Consent disabled: Manual entry required.");
      });
    }
  }, 50);
}

function updateServiceModalFields(selectedServiceId) {
  openApply(selectedServiceId);
}

/* Application detail modal - Shows fetched citizen vault data to Department Officers */
function showApplication(id) {
  const app = state.applications.find(a => a.id === id);
  if (!app) return;
  const canAct = canReview() && (isAdmin() || app.department === currentUser.department) && !["Approved", "Rejected"].includes(app.status);
  const history = app.history || [app.step];
  const profile = getUserProfile(app.email);
  const docs = profile.vaultDocuments || {};

  openModal(`Application Reference: ${esc(app.id)}`, `
 <div style="display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:14px">
   <div><b style="font-size:13px">${esc(app.service)}</b><div class="muted" style="font-size:10px;margin-top:2px">${esc(app.department)}</div></div>
   <span class="status ${statusClass(app.status)}">${esc(app.status)}</span>
 </div>
 <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px;background:#f8fafc;padding:12px;border-radius:8px">
   <div><small class="muted">APPLICANT</small><div style="font-size:11px;font-weight:750;margin-top:2px">${esc(app.applicant)}</div></div>
   <div><small class="muted">DATE SUBMITTED</small><div style="font-size:11px;font-weight:750;margin-top:2px">${esc(app.date)}</div></div>
   <div><small class="muted">REFERENCE ID</small><div style="font-size:11px;font-weight:750;margin-top:2px">${esc(app.id)}</div></div>
   <div><small class="muted">CURRENT STEP</small><div style="font-size:11px;font-weight:750;margin-top:2px">${esc(app.step)}</div></div>
 </div>

 <!-- Fetched Department Data Vault Section (Common Data & Documents) -->
 <div style="margin-top:14px;background:#f0fdf4;border:1px solid #bbf7d0;padding:12px;border-radius:8px">
   <div style="font-size:11px;font-weight:800;color:#166534;margin-bottom:6px">1. Reused Common Vault Data (Consent Verified)</div>
   <div class="grid" style="grid-template-columns:1fr 1fr;gap:6px;font-size:10px;color:#14532d">
     <div><b>Aadhaar UID:</b> ${esc(profile.aadhaarNo || "Verified")}</div>
     <div><b>PAN Number:</b> ${esc(profile.panNo || "Verified")}</div>
     <div><b>Annual Income:</b> Rs. ${esc(profile.annualIncome || "150000")}</div>
     <div><b>Income Cert No:</b> ${esc(profile.incomeCertNo || "INC-2025-9921")}</div>
     <div><b>Domicile Cert No:</b> ${esc(profile.domicileNo || "DOM-2025-8821")}</div>
     <div><b>DBT Bank Account:</b> ${esc(profile.bankAccount || "Verified")} (${esc(profile.bankName || "SBI")})</div>
   </div>
   <div style="font-size:9px;color:#15803d;margin-top:6px;border-top:1px dashed #bbf7d0;padding-top:4px">
     <b>Attached Verified Vault Docs:</b> ${esc(docs.aadhaarDoc || "Aadhaar.pdf")}, ${esc(docs.panDoc || "PAN.pdf")}, ${esc(docs.addressDoc || "Address_Proof.pdf")}
   </div>
 </div>

 <!-- Submitted Service-Specific Intake Details -->
 ${app.serviceDetails ? `
 <div style="margin-top:10px;background:#eff6ff;border:1px solid #bfdbfe;padding:12px;border-radius:8px">
   <div style="font-size:11px;font-weight:800;color:#1e40af;margin-bottom:6px">2. Service-Specific Intake Details (${esc(app.department)})</div>
   <div class="grid" style="grid-template-columns:1fr 1fr;gap:6px;font-size:10px;color:#1e3a8a">
     ${Object.entries(app.serviceDetails).map(([k, v]) => `<div><b>${esc(k.charAt(0).toUpperCase() + k.slice(1))}:</b> ${esc(v)}</div>`).join("")}
   </div>
 </div>` : ""}

 ${app.note ? `<div class="notice" style="margin:12px 0 0"><b>Latest Department Note:</b> ${esc(app.note)}</div>` : ""}
 <h3 style="font-size:12px;margin:16px 0 8px">Processing History</h3>
 ${history.map((h, i) => `<div style="display:flex;gap:8px;padding:4px 0;font-size:11px;color:#475569"><span>-</span><span>${esc(h)}</span></div>`).join("")}`,
    `${app.status === "Approved" ? `<button class="btn btn-dark" data-action="view-certificate" data-id="${esc(id)}">View Certificate</button>` : `<button class="btn btn-danger" data-action="delete-application" data-id="${esc(id)}">Delete Record</button>`}
 <button class="btn" data-action="close-modal">Close</button>
 ${canAct ? `<button class="btn btn-danger" data-action="decision" data-id="${esc(id)}" data-decision="Rejected">Reject</button><button class="btn" data-action="request-info" data-id="${esc(id)}">Request Info</button><button class="btn btn-primary" data-action="decision" data-id="${esc(id)}" data-decision="Approved">Approve</button>` : ""}`
  );
}

/* View / Print Official Certificate Modal */
function generateCertificate(appId) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;
  const profile = getUserProfile(app.email);
  openModal(`Official Certificate - ${esc(app.id)}`, `
 <div class="certificate-card" id="certDocument">
   <div class="cert-header">
     <div class="cert-sub">Government of Maharashtra · Service Exchange</div>
     <h2>${esc(app.service)} Certificate</h2>
     <div style="font-size:10px;color:var(--teal);font-weight:800">REF NO: ${esc(app.id)}</div>
   </div>
   <div class="cert-body">
     <p>This is to certify that <b>${esc(app.applicant)}</b> (${esc(app.email)}) has successfully fulfilled all government department verification requirements for <b>${esc(app.service)}</b> under the <b>${esc(app.department)}</b>.</p>
     <div class="cert-field"><span class="cert-label">Applicant Name:</span><span class="cert-val">${esc(app.applicant)}</span></div>
     <div class="cert-field"><span class="cert-label">Aadhaar Reference:</span><span class="cert-val">${esc(profile.aadhaarNo || "VERIFIED")}</span></div>
     <div class="cert-field"><span class="cert-label">Service Title:</span><span class="cert-val">${esc(app.service)}</span></div>
     <div class="cert-field"><span class="cert-label">Issuing Authority:</span><span class="cert-val">${esc(app.department)}</span></div>
     <div class="cert-field"><span class="cert-label">Application Reference:</span><span class="cert-val">${esc(app.id)}</span></div>
     <div class="cert-field"><span class="cert-label">Approval Date:</span><span class="cert-val">${esc(app.date)}</span></div>
     <div class="cert-field"><span class="cert-label">Digital Status:</span><span class="cert-val" style="color:var(--green)">VERIFIED &amp; ISSUED</span></div>
   </div>
   <div class="cert-seal">
     <div style="font-size:9px;color:var(--muted)">Digitally Signed by Setu Interoperability Middleware Node</div>
     <div class="seal-badge">SETU<br>GOVT<br>VERIFIED</div>
   </div>
 </div>`,
    `<button class="btn" data-action="close-modal">Close</button><button class="btn btn-primary" onclick="window.print()">Print / Save PDF</button>`
  );
}

function exportCSV(name, rows) {
  const csv = rows.map(r => r.map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = name;
  a.click();
  URL.revokeObjectURL(a.href);
  toast("CSV downloaded successfully.");
}

/* Global Event Listeners */
document.addEventListener("click", e => {
  const page = e.target.closest("[data-page]");
  if (page) { go(page.dataset.page); return; }

  const el = e.target.closest("[data-action]");
  if (!el) return;
  const a = el.dataset.action;

  if (a === "logout") { logout(); return; }
  if (a === "save-profile-details") { saveProfileDataFromUI(); return; }
  if (a === "new-application") openApply();
  if (a === "apply-service") openApply(el.dataset.service);
  if (a === "close-modal") closeModal();
  if (a === "backdrop-close" && e.target === el) closeModal();
  if (a === "application-detail") showApplication(el.dataset.id);
  if (a === "view-certificate") generateCertificate(el.dataset.id);

  if (a === "delete-application") {
    const id = el.dataset.id;
    if (confirm("Are you sure you want to delete application " + id + "?")) {
      const idx = state.applications.findIndex(x => x.id === id);
      if (idx !== -1) {
        state.applications.splice(idx, 1);
        logAudit("Deleted application record", id);
        save(); closeModal(); render(); toast("Application record deleted.");
      }
    }
    return;
  }

  if (a === "delete-service") {
    const id = el.dataset.id;
    if (confirm("Are you sure you want to delete this service?")) {
      const idx = state.services.findIndex(x => x.id === id);
      if (idx !== -1) {
        const sName = state.services[idx].name;
        state.services.splice(idx, 1);
        logAudit("Deleted service", sName); save(); render(); toast("Service removed.");
      }
    }
    return;
  }

  if (a === "delete-connector") {
    const id = el.dataset.id;
    if (confirm("Delete this API connector endpoint?")) {
      const idx = state.integrations.findIndex(x => x.id === id);
      if (idx !== -1) {
        const cName = state.integrations[idx].name;
        state.integrations.splice(idx, 1);
        logAudit("Deleted connector endpoint", cName); save(); render(); toast("Connector endpoint deleted.");
      }
    }
    return;
  }

  if (a === "delete-user") {
    const id = el.dataset.id;
    if (confirm("Delete this user account?")) {
      const idx = state.users.findIndex(x => x.id === id);
      if (idx !== -1) {
        const uEmail = state.users[idx].email;
        state.users.splice(idx, 1);
        logAudit("Deleted user account", uEmail); save(); render(); toast("User account deleted.");
      }
    }
    return;
  }

  if (a === "submit-application") {
    const f = document.getElementById("appForm");
    if (!f.reportValidity()) return;
    const service = state.services.find(s => s.id === document.getElementById("serviceSelect").value);
    const id = "SET-2026-" + String(Math.max(1000, ...state.applications.map(x => Number(x.id.split("-").pop()) || 0)) + 1);
    const applicant = document.getElementById("appName").value.trim();
    const email = document.getElementById("appEmail").value.trim();

    // Collect service-specific details
    const serviceDetails = {};
    const container = document.getElementById("serviceSpecificContainer");
    if (container) {
      container.querySelectorAll("input, select").forEach(inp => {
        if (inp.id && inp.value) {
          const key = inp.id.replace("app_", "");
          serviceDetails[key] = inp.value;
        }
      });
    }

    state.applications.unshift({
      id, service: service.name, department: service.department, applicant, email,
      date: new Date().toISOString().slice(0, 10), status: "Submitted", step: "Application received",
      serviceDetails, note: document.getElementById("appNote")?.value.trim() || "", history: ["Application received", "Consent recorded"]
    });
    logAudit("Submitted service request", id, applicant);
    save(); closeModal(); go("applications"); toast("Request submitted! Reference: " + id);
  }

  if (a === "decision") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    if (!canReview() || (!isAdmin() && app.department !== currentUser.department)) { toast("Permission denied."); return; }
    const decision = el.dataset.decision;
    if (decision === "Rejected" && !confirm("Reject this application?")) return;
    app.status = decision;
    app.step = decision === "Approved" ? "Completed" : "Decision recorded";
    app.note = decision === "Rejected" ? "Rejected by " + currentUser.name : "Approved by " + currentUser.name;
    app.history = app.history || [];
    app.history.push(decision + " by " + currentUser.name);
    logAudit(decision + " application", app.id);
    save(); closeModal(); render(); toast("Application " + decision.toLowerCase() + ".");
  }

  if (a === "request-info") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    const msg = prompt("What information should the applicant provide?");
    if (!msg || !msg.trim()) return;
    app.status = "Information requested";
    app.step = "Awaiting citizen information";
    app.note = msg.trim();
    app.history = app.history || [];
    app.history.push("Additional information requested: " + msg.trim());
    logAudit("Requested additional information", app.id);
    save(); closeModal(); render(); toast("Information request sent.");
  }

  if (a === "add-service") {
    openModal("Add Government Service", `
   <div class="form-grid">
     <div class="field full"><label>Service Name *</label><input id="newServiceName" required></div>
     <div class="field"><label>Department *</label><input id="newServiceDept" required></div>
     <div class="field"><label>Estimated Time</label><input id="newServiceTime" value="5-7 working days"></div>
     <div class="field"><label>Fee</label><input id="newServiceFee" value="No fee"></div>
     <div class="field full"><label>Description</label><textarea id="newServiceDesc"></textarea></div>
   </div>`,
      `<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-service">Add Service</button>`
    );
  }

  if (a === "save-service") {
    const name = document.getElementById("newServiceName").value.trim();
    const dept = document.getElementById("newServiceDept").value.trim();
    if (!name || !dept) { toast("Name and department are required."); return; }
    state.services.push({
      id: "svc-" + Date.now(), name, department: dept,
      iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>`,
      time: document.getElementById("newServiceTime").value || "5-7 working days",
      fee: document.getElementById("newServiceFee").value || "No fee",
      description: document.getElementById("newServiceDesc").value || "A connected government service.", active: true
    });
    logAudit("Added service", name); save(); closeModal(); render(); toast("Service added.");
  }

  if (a === "add-connector") {
    openModal("Register Department Connector", `<p class="muted" style="font-size:11px">Register a REST endpoint adapter.</p><div class="form-grid"><div class="field full"><label>System Name *</label><input id="connectorName" placeholder="Department Portal"></div><div class="field full"><label>Department *</label><input id="connectorDept" placeholder="Owning Ministry"></div></div>`, `<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-connector">Register Connector</button>`);
  }
  if (a === "save-connector") {
    const name = document.getElementById("connectorName").value.trim(), dept = document.getElementById("connectorDept").value.trim();
    if (!name || !dept) { toast("System name and department required."); return; }
    state.integrations.push({ id: "custom-" + Date.now(), name, department: dept, iconSvg: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>`, status: false, latency: 0, uptime: "—" });
    logAudit("Registered connector", name); save(); closeModal(); render(); toast("Connector registered.");
  }

  if (a === "add-workflow") {
    openModal("Create Workflow", `<div class="field"><label>Workflow Name *</label><input id="workflowName"></div><div class="field"><label>Description</label><textarea id="workflowDesc"></textarea></div><div class="field"><label>Steps (comma separated) *</label><input id="workflowSteps" placeholder="Intake, Verification, Approval, Delivery"></div>`, `<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-workflow">Create Workflow</button>`);
  }
  if (a === "save-workflow") {
    const name = document.getElementById("workflowName").value.trim(), steps = document.getElementById("workflowSteps").value.split(",").map(s => s.trim()).filter(Boolean);
    if (!name || !steps.length) { toast("Provide workflow name and steps."); return; }
    state.workflows.push({ name, description: document.getElementById("workflowDesc").value.trim() || "Department workflow.", steps });
    logAudit("Created workflow", name); save(); closeModal(); render(); toast("Workflow created.");
  }
  if (a === "delete-workflow") {
    if (!confirm("Remove this workflow?")) return;
    const w = state.workflows.splice(Number(el.dataset.index), 1)[0];
    logAudit("Removed workflow", w.name); save(); render(); toast("Workflow removed.");
  }

  if (a === "add-user") {
    openModal("Create Platform User", `<div class="form-grid"><div class="field full"><label>Full Name *</label><input id="userName"></div><div class="field full"><label>Email Address *</label><input id="userEmail" type="email"></div><div class="field full"><label>Temporary Password * (8+ chars)</label><input id="userPassword" type="password"></div><div class="field"><label>Role *</label><select id="userRole"><option value="reviewer">Department Reviewer</option><option value="admin">Platform Administrator</option></select></div><div class="field"><label>Department</label><input id="userDept" placeholder="Revenue Department"></div></div>`, `<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-user">Create User</button>`);
  }
  if (a === "save-user") {
    const name = document.getElementById("userName").value.trim(), email = document.getElementById("userEmail").value.trim().toLowerCase(), password = document.getElementById("userPassword").value, role = document.getElementById("userRole").value, department = document.getElementById("userDept").value.trim();
    if (!name || !email || password.length < 8) { toast("Complete all fields (password >= 8 chars)."); return; }
    if (state.users.some(u => u.email.toLowerCase() === email)) { toast("Email already registered."); return; }
    state.users.push({ id: "u-" + Date.now(), name, email, password, role, department });
    logAudit("Created " + role + " account", email); save(); closeModal(); render(); toast("User created.");
  }

  if (a === "export-apps") exportCSV("setu-applications.csv", [["Reference", "Service", "Department", "Applicant", "Email", "Date", "Status", "Current step"], ...state.applications.map(x => [x.id, x.service, x.department, x.applicant, x.email, x.date, x.status, x.step])]);
  if (a === "export-audit") exportCSV("setu-audit.csv", [["Time", "Actor", "Action", "Resource", "Result"], ...state.audit.map(x => [x.time, x.actor, x.action, x.resource, x.result])]);
});

document.addEventListener("change", e => {
  const el = e.target;
  if (el.matches('[data-action="toggle-integration"]')) {
    const i = state.integrations.find(x => x.id === el.dataset.id); if (!i) return;
    i.status = el.checked; i.latency = i.status ? 156 : 0; logAudit(i.status ? "Enabled connector" : "Paused connector", i.name); save(); render(); toast(i.name + (i.status ? " connected." : " paused."));
  }
  if (el.matches('[data-action="toggle-consent"]')) {
    state.consents[el.dataset.id] = el.checked;
    logAudit(el.checked ? "Granted sharing permission" : "Revoked sharing permission", el.dataset.id);
    save();
    toast(el.checked ? "Consent enabled: Information will auto pre-fill." : "Consent disabled: Auto pre-fill turned off.");
  }
  if (el.id === "statusFilter") {
    const apps = visibleApps().filter(a => !el.value || a.status === el.value);
    document.getElementById("applicationTable").innerHTML = rowsApps(apps);
  }
});

document.getElementById("searchForm").addEventListener("submit", e => {
  e.preventDefault();
  const q = document.getElementById("globalSearch").value.trim().toLowerCase();
  if (!q) return;
  go("applications");
  const found = visibleApps().filter(a => [a.id, a.service, a.department, a.applicant, a.status].some(v => String(v).toLowerCase().includes(q)));
  document.getElementById("applicationTable").innerHTML = rowsApps(found);
  if (!found.length) toast("No matching requests found.");
});

document.getElementById("notificationBtn").onclick = () => {
  const p = document.getElementById("notificationPop");
  p.innerHTML = `<h3>System Notifications</h3>
 <div class="notification-line"><strong>${visibleApps().filter(a => ["Submitted", "In review", "Information requested"].includes(a.status)).length} Pending Requests</strong>Requests requiring department verification.</div>
 <div class="notification-line"><strong>Security &amp; Consent Active</strong>Token authentication enabled.</div>
 <div class="notification-line"><strong>Interoperability Mode</strong>Running local service simulation.</div>`;
  p.classList.toggle("open");
};

document.addEventListener("click", e => {
  if (!e.target.closest("#notificationBtn") && !e.target.closest("#notificationPop")) {
    document.getElementById("notificationPop").classList.remove("open");
  }
});

/* Sidebar slide toggle and mouse edge interaction */
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.onclick = () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("collapsed");
};

document.addEventListener("mousemove", e => {
  if (window.innerWidth > 790 && e.clientX <= 20) {
    sidebar.classList.add("open");
  }
});

sidebar.addEventListener("mouseleave", () => {
  if (window.innerWidth > 790 && sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("open");
  }
});

if (window.innerWidth > 790) {
  sidebar.classList.add("collapsed");
}

selectRole("citizen");
