const KEY = "setu-gov-v10";

const defaultUsers = [
  { id: "u-admin", name: "Platform Admin", email: "admin@setu.gov.in", password: "Setu@2026", role: "admin", department: "Government of Maharashtra" },
  { id: "u-reviewer", name: "Department Reviewer", email: "reviewer@setu.gov.in", password: "Review@2026", role: "reviewer", department: "Government of Maharashtra" },
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
  let st;
  try {
    const loaded = JSON.parse(localStorage.getItem(KEY) || "{}");
    st = { ...clone(defaultState), ...loaded };
  } catch {
    st = clone(defaultState);
  }
  if (st && st.applications) {
    st.applications.forEach(a => ensureAppVerification(a));
  }
  return st;
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

function canReviewApp(app) {
  if (!currentUser) return false;
  if (isAdmin()) return true;
  if (isReviewer()) {
    if (!currentUser.department || currentUser.department === "Government of Maharashtra" || currentUser.department === "All Departments") return true;
    return app.department === currentUser.department;
  }
  return false;
}

function visibleApps() {
  if (!currentUser) return [];
  if (isAdmin()) return state.applications;
  if (isReviewer()) {
    if (!currentUser.department || currentUser.department === "Government of Maharashtra" || currentUser.department === "All Departments") {
      return state.applications;
    }
    return state.applications.filter(a => a.department === currentUser.department);
  }
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
  </div>` : (isCitizen() && !isReviewer()) ? `
  <div class="metric">
    <div class="metric-top"><span>Directory</span>
      <div class="metric-icon"><svg class="nav-svg" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/></svg></div>
    </div>
    <div class="metric-value">${state.services.filter(s => s.active).length}</div>
    <div class="metric-foot">Single access point services</div>
  </div>` : ``}
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

/* Expanded Applicant Profile & Data Vault */
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
     <div style="display:flex;gap:8px;flex-wrap:wrap">
       ${canReview() ? `
       <select id="deptFilter" class="btn">
         <option value="">All Departments</option>
         <option value="Municipal Services">Municipal Services</option>
         <option value="Education Department">Education Department</option>
         <option value="Revenue Department">Revenue Department</option>
         <option value="Industries Department">Industries Department</option>
         <option value="Social Justice Department">Social Justice Department</option>
         <option value="Transport Department">Transport Department</option>
         <option value="Food &amp; Civil Supplies">Food &amp; Civil Supplies</option>
       </select>` : ""}
       <select id="statusFilter" class="btn"><option value="">All Statuses</option><option>Submitted</option><option>In review</option><option>Information requested</option><option>Approved</option><option>Rejected</option></select>
     </div>
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
     <div class="field"><label>Income Source *</label><input id="app_inc_source" value="${esc(hasConsent ? "Salaried & Agriculture" : "")}" placeholder="e.g. Salary, Agriculture, Rent"></div>
     <div class="field full"><label>Annual Family Income (Rs.) *</label><input id="app_inc_amt" value="${esc(hasConsent ? profile.annualIncome || "120000" : "")}" placeholder="e.g. 120000"></div>`;
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

/* Start Application Modal */
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

/* Department Verification & Document Vault Engine */
function ensureAppVerification(app) {
  if (!app.verification) {
    app.verification = {
      registryStatus: "verified",
      registrySystem: "",
      registryTitle: "",
      registryData: {},
      registryMessage: "",
      documents: []
    };
  }

  const sLower = (app.service || "").toLowerCase();
  const profile = getUserProfile(app.email);
  const details = app.serviceDetails || {};

  if (sLower.includes("birth")) {
    app.verification.registrySystem = "Hospital Delivery Registry · Civil Registration System (CRS)";
    app.verification.registryTitle = "Hospital Birth Record Cross-Verification";
    const hospital = details.hospital || details.birthPlace || "Sahyadri Hospital, Pune";
    const childName = details.child_name || details.childName || "Advait Deshmukh";
    const dob = details.child_dob || details.birthDate || "2026-02-10";

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        hospital: hospital,
        childName: childName,
        dob: dob,
        parents: `${profile.motherName || "Sunita Patil"} & ${app.applicant}`,
        hospitalRegNo: "HOSP-CRS-2026-" + (app.id.split("-").pop() || "99214"),
        doctor: "Dr. R. K. Joshi, MD (Obstetrics & Gynaecology)",
        deliveryType: "Institutional Delivery (Normal)",
        statusInHospital: "Confirmed in Maternity Ward Digital Ledger"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = "Verified in Hospital Data";
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        {
          id: "doc-birth-summary",
          name: "Hospital Discharge Summary & Birth Report",
          filename: "Hospital_Discharge_Summary_Birth_Report.pdf",
          size: "1.4 MB",
          type: "hospital_report",
          status: "pending",
          details: { hospital, childName, dob, doctor: "Dr. R. K. Joshi", weight: "3.25 kg", gender: "Male" }
        },
        {
          id: "doc-delivery-slip",
          name: "Hospital IPD Admission & Delivery Slip",
          filename: "Hospital_Delivery_Admission_Slip.pdf",
          size: "820 KB",
          type: "delivery_slip",
          status: "pending",
          details: { hospital, admissionNo: "IPD-88219", bedNo: "Maternity-Ward-04", regDate: dob }
        },
        {
          id: "doc-parents-aadhaar",
          name: "Parents Joint Identity & Aadhaar Proof",
          filename: "Parents_Joint_Aadhaar_Proof.pdf",
          size: "950 KB",
          type: "aadhaar",
          status: "pending",
          details: { applicant: app.applicant, aadhaarNo: profile.aadhaarNo || "4821 9901 8823" }
        }
      ];
    }
  } else if (sLower.includes("scholarship")) {
    app.verification.registrySystem = "MahaDBT & University Student ERP Central Registry";
    app.verification.registryTitle = "University Academic & Enrollment Cross-Check";
    const college = details.college || details.collegeName || profile.collegeName || "COEP Technological University Pune";
    const course = details.course || details.courseName || profile.courseName || "B.Tech Computer Science";
    const marks = details.marks || "88.5%";

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        university: "Savitribai Phule Pune University (SPPU)",
        college: college,
        course: course,
        prnNo: "PRN-72019942B",
        academicYear: "2025-2026",
        attendance: "87.4% (Eligible)",
        marksVerified: marks + " (Official Grade Ledger Match)"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = "Verified in University Enrollment Database";
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        {
          id: "doc-allotment",
          name: "CAP Round College Allotment Letter",
          filename: "Allotment_Letter_CAP_Round_2025.pdf",
          size: "1.5 MB",
          type: "allotment_letter",
          status: "pending",
          details: { student: app.applicant, college, course, capRound: "CAP Round II", meritNo: "MH-2025-4129" }
        },
        {
          id: "doc-fee-receipt",
          name: "College Fee Receipt Paid by Student",
          filename: "College_Fee_Receipt_Paid_2025_26.pdf",
          size: "880 KB",
          type: "fee_receipt",
          status: "pending",
          details: { student: app.applicant, college, receiptNo: "FR-2025-99214", amountPaid: "Rs. 65,000/-", paymentMode: "Online UPI / NetBanking", status: "PAID IN FULL" }
        },
        {
          id: "doc-aadhaar",
          name: "Aadhaar Card (UIDAI Verified)",
          filename: "Aadhaar_Card_Verified.pdf",
          size: "710 KB",
          type: "aadhaar",
          status: "pending",
          details: { applicant: app.applicant, aadhaarNo: profile.aadhaarNo || "4821 9901 8823" }
        },
        {
          id: "doc-pan",
          name: "PAN Card (Income Tax Department)",
          filename: "PAN_Card_Verified.pdf",
          size: "520 KB",
          type: "pan",
          status: "pending",
          details: { applicant: app.applicant, panNo: profile.panNo || "ABCDE1234F" }
        },
        {
          id: "doc-marksheet",
          name: "Previous Semester Marksheet",
          filename: "Semester_Marksheet_Score.pdf",
          size: "1.2 MB",
          type: "marksheet",
          status: "pending",
          details: { student: app.applicant, college, course, percentage: marks, result: "PASS - FIRST CLASS WITH DISTINCTION" }
        },
        {
          id: "doc-income",
          name: "Annual Income Certificate",
          filename: "Income_Certificate_Verified.pdf",
          size: "980 KB",
          type: "income_cert",
          status: "pending",
          details: { applicant: app.applicant, certNo: profile.incomeCertNo || "INC-2025-9921", annualIncome: "Rs. " + (profile.annualIncome || "120,000") + "/-" }
        }
      ];
    }
  } else if (sLower.includes("income")) {
    app.verification.registrySystem = "MahaRevenue (MahaBhulekh 7/12) & Income Tax Department (ITR) API";
    app.verification.registryTitle = "Land & Income Tax Digital Ledger Verification";
    const inc = details.inc_amt || details.annualIncome || profile.annualIncome || "120000";

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        declaredIncome: "Rs. " + Number(String(inc).replace(/[^0-9]/g, "") || 120000).toLocaleString("en-IN") + "/-",
        landHolding: "7/12 Land Khata matched (1.8 Hectares, Haveli Taluka)",
        itrStatus: "ITR-V Assessment verified with zero discrepancy",
        tahsildarCircle: "Shivaji Nagar Circle Office, Pune"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = "Verified in MahaRevenue & ITR Database";
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        { id: "doc-panchanama", name: "Tahsildar Income Panchanama & Inquiry Report", filename: "Tahsildar_Panchanama_Report.pdf", size: "1.1 MB", type: "panchanama", status: "pending", details: { applicant: app.applicant, assessedIncome: "Rs. " + inc } },
        { id: "doc-itr", name: "Income Tax Return / Salary Slip", filename: "Income_Tax_Return_Form16.pdf", size: "1.4 MB", type: "itr", status: "pending", details: { applicant: app.applicant, panNo: profile.panNo || "ABCDE1234F" } },
        { id: "doc-ration", name: "Ration Card Family Unit Proof", filename: "Ration_Card_Family_Income_Proof.pdf", size: "890 KB", type: "ration", status: "pending", details: { rationNo: profile.rationCardNo || "RC-MH-981242" } },
        { id: "doc-aadhaar", name: "Aadhaar Card (UIDAI Verified)", filename: "Aadhaar_Card_Verified.pdf", size: "710 KB", type: "aadhaar", status: "pending", details: { aadhaarNo: profile.aadhaarNo || "4821 9901 8823" } }
      ];
    }
  } else if (sLower.includes("business")) {
    app.verification.registrySystem = "Ministry of Corporate Affairs (MCA21) & GSTN Network";
    app.verification.registryTitle = "Corporate & Tax Registration Verification";
    const biz = details.biz_name || details.businessName || "Joshi IT Solutions Pvt Ltd";

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        companyName: biz,
        cin: "U72900PN2026PTC192841",
        mcaStatus: "Active & Compliant",
        directorsKYC: "Approved (DIN: 08912411)",
        gstin: "27ABCDE1234F1Z5"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = "Verified in MCA21 Company Registry";
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        { id: "doc-coi", name: "Certificate of Incorporation (ROC Pune)", filename: "Certificate_Of_Incorporation.pdf", size: "1.3 MB", type: "coi", status: "pending", details: { companyName: biz } },
        { id: "doc-moa", name: "Memorandum & Articles of Association (MoA)", filename: "Memorandum_And_Articles_Of_Association.pdf", size: "2.4 MB", type: "moa", status: "pending", details: { companyName: biz } },
        { id: "doc-pan-dir", name: "Directors PAN & Aadhaar KYC", filename: "Directors_PAN_Aadhaar_KYC.pdf", size: "960 KB", type: "pan", status: "pending", details: { applicant: app.applicant } },
        { id: "doc-lease", name: "Registered Commercial Premises Lease Deed", filename: "Commercial_Premises_Lease_Deed.pdf", size: "1.8 MB", type: "lease", status: "pending", details: { address: "Shivaji Nagar, Pune" } }
      ];
    }
  } else if (sLower.includes("pension")) {
    app.verification.registrySystem = "UIDAI Central Age Registry & PFMS Direct Benefit Transfer (DBT)";
    app.verification.registryTitle = "Senior Age & DBT Bank Linkage Verification";

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        ageProof: "Age 64 Years (DOB confirmed via UIDAI Biometric Vault)",
        dbtStatus: "Active NPCI Aadhaar Seeded Account",
        bankBranch: `${profile.bankName || "State Bank of India"} (A/C: ${profile.bankAccount || "5010029812"})`,
        bplStatus: "Eligible Under State Senior Citizen Support Norms"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = "Verified in UIDAI Age & DBT Registry";
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        { id: "doc-age", name: "Age Proof & School Leaving Certificate", filename: "Age_Proof_School_Leaving_Certificate.pdf", size: "890 KB", type: "age_proof", status: "pending", details: { applicant: app.applicant, age: "64 Years" } },
        { id: "doc-bank", name: "DBT-Seeded Bank Passbook Copy", filename: "DBT_Seeded_Bank_Passbook_Copy.pdf", size: "1.1 MB", type: "passbook", status: "pending", details: { bank: profile.bankName || "SBI", account: profile.bankAccount } },
        { id: "doc-ration", name: "BPL Ration Card Copy", filename: "BPL_Ration_Card_Copy.pdf", size: "1.3 MB", type: "ration", status: "pending", details: { rationNo: profile.rationCardNo } },
        { id: "doc-aadhaar", name: "Aadhaar Card (UIDAI Verified)", filename: "Aadhaar_Card_Verified.pdf", size: "710 KB", type: "aadhaar", status: "pending", details: { aadhaarNo: profile.aadhaarNo } }
      ];
    }
  } else {
    const serviceName = app.service || "Government Service";
    app.verification.registrySystem = `${app.department} Digital Central Registry`;
    app.verification.registryTitle = `${serviceName} Department Registry Cross-Check`;

    if (!app.verification.registryData || Object.keys(app.verification.registryData).length === 0) {
      app.verification.registryData = {
        service: serviceName,
        department: app.department,
        applicant: app.applicant,
        status: "Active Verified Record",
        clearance: "Zero Dues / Regulatory Protocol Met"
      };
      app.verification.registryStatus = "verified";
      app.verification.registryMessage = `Verified in ${app.department} Digital Database`;
    }

    if (!app.verification.documents || app.verification.documents.length === 0) {
      app.verification.documents = [
        { id: "doc-1", name: `${serviceName} Primary Application Proof`, filename: `${serviceName.replace(/\s+/g, "_")}_Sanction_Document.pdf`, size: "1.2 MB", type: "service_doc", status: "pending", details: { service: serviceName, applicant: app.applicant } },
        { id: "doc-2", name: "Address & Identity Verification Document", filename: "Address_And_Identity_Proof.pdf", size: "850 KB", type: "address", status: "pending", details: { address: profile.addressLine1 } },
        { id: "doc-3", name: "Aadhaar Card (UIDAI Verified)", filename: "Aadhaar_Card_Verified.pdf", size: "710 KB", type: "aadhaar", status: "pending", details: { aadhaarNo: profile.aadhaarNo } }
      ];
    }
  }
}

/* Interactive PDF Document Viewer Modal */
function openPdfDocumentViewer(appId, docId) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;
  ensureAppVerification(app);
  const doc = app.verification.documents.find(d => d.id === docId);
  if (!doc) return;

  const profile = getUserProfile(app.email);
  const d = doc.details || {};

  let docContentHtml = "";

  if (doc.type === "allotment_letter") {
    docContentHtml = `
      <div class="pdf-header">
        <div class="pdf-emblem-text">GOVERNMENT OF MAHARASHTRA</div>
        <div class="pdf-gov-title">STATE COMMON ENTRANCE TEST CELL (CET CELL)</div>
        <div class="pdf-doc-type">Provisional Seat Allotment Letter — CAP Round 2025-26</div>
      </div>
      <div class="pdf-meta-bar">
        <span><b>Application ID:</b> EN25109842</span>
        <span><b>Merit Rank:</b> State Merit No. 4129</span>
        <span><b>Date of Issue:</b> 12-Jul-2025</span>
      </div>
      <div class="pdf-content-body">
        <p>This is to certify that candidate <b>${esc(app.applicant)}</b> has been provisionally allotted admission to the undergraduate degree programme under centralized merit quota:</p>
        <table class="pdf-data-table">
          <tr><td class="label-cell">Candidate Full Name</td><td class="val-cell">${esc(app.applicant)}</td></tr>
          <tr><td class="label-cell">Allotted Institution</td><td class="val-cell">${esc(d.college || "COEP Technological University, Pune")}</td></tr>
          <tr><td class="label-cell">Course / Branch</td><td class="val-cell">${esc(d.course || "B.Tech Computer Science and Engineering")}</td></tr>
          <tr><td class="label-cell">Allotted Seat Category</td><td class="val-cell">GOPENH (State General Open Home University)</td></tr>
          <tr><td class="label-cell">Entrance Exam Score</td><td class="val-cell">MHT-CET Percentile: 98.42% / JEE Main: 96.10%</td></tr>
          <tr><td class="label-cell">Annual Tuition Fee</td><td class="val-cell">Rs. 65,000/- (Govt Subsidized Rate)</td></tr>
          <tr><td class="label-cell">Reporting Status</td><td class="val-cell" style="color:var(--green)">REPORTED &amp; ADMISSION CONFIRMED AT INSTITUTE</td></tr>
        </table>
      </div>
      <div class="pdf-signature-row">
        <div class="pdf-seal">STATE CET CELL<br>MAHARASHTRA<br>OFFICIAL STAMP</div>
        <div class="pdf-officer-signature">
          <b>Commissioner &amp; Competent Authority</b><br>
          State Common Entrance Test Cell, Maharashtra<br>
          <small>Digital Hash: SHA256:88fa29c401be914</small>
        </div>
      </div>`;
  } else if (doc.type === "fee_receipt") {
    docContentHtml = `
      <div class="pdf-header">
        <div class="pdf-emblem-text">${esc((d.college || "COEP Technological University").toUpperCase())}</div>
        <div class="pdf-gov-title">FINANCE &amp; ACCOUNTS DEPARTMENT</div>
        <div class="pdf-doc-type">Official College Tuition &amp; Exam Fee Receipt</div>
      </div>
      <div class="pdf-meta-bar">
        <span><b>Receipt No:</b> ${esc(d.receiptNo || "FR-2025-99214")}</span>
        <span><b>Academic Year:</b> 2025-2026</span>
        <span><b>Payment Date:</b> 14-Aug-2025</span>
      </div>
      <div class="pdf-content-body">
        <p>Received with thanks from student <b>${esc(app.applicant)}</b> the tuition and developmental fees as detailed below:</p>
        <table class="pdf-data-table">
          <tr><td class="label-cell">Student Full Name</td><td class="val-cell">${esc(app.applicant)}</td></tr>
          <tr><td class="label-cell">Roll / PRN Number</td><td class="val-cell">PRN-72019942B</td></tr>
          <tr><td class="label-cell">College / Institution</td><td class="val-cell">${esc(d.college || "COEP Technological University, Pune")}</td></tr>
          <tr><td class="label-cell">Semester / Year</td><td class="val-cell">Semester 6 / Third Year Engineering</td></tr>
          <tr><td class="label-cell">Payment Mode</td><td class="val-cell">Online UPI / NetBanking (Bank Ref: SBIN-2025-88192)</td></tr>
          <tr><td class="label-cell">Total Amount Paid</td><td class="val-cell" style="color:var(--teal);font-size:12px">Rs. 65,000/- (Sixty Five Thousand Only)</td></tr>
          <tr><td class="label-cell">Balance Due</td><td class="val-cell" style="color:var(--green)">Rs. 0.00 (NIL DUES)</td></tr>
        </table>
      </div>
      <div class="pdf-signature-row">
        <div class="pdf-seal" style="color:var(--green);border-color:var(--green)">FEES PAID IN FULL<br>CASH &amp; ACCOUNTS<br>ACADEMIC YR 2025-26</div>
        <div class="pdf-officer-signature">
          <b>Chief Accounts Officer</b><br>
          Cash &amp; Accounts Section<br>
          <small>Transaction Authenticated via National Payment Gateway</small>
        </div>
      </div>`;
  } else if (doc.type === "hospital_report" || doc.type === "delivery_slip") {
    docContentHtml = `
      <div class="pdf-header">
        <div class="pdf-emblem-text">${esc((d.hospital || "Sahyadri Super Speciality Hospital, Pune").toUpperCase())}</div>
        <div class="pdf-gov-title">DEPARTMENT OF OBSTETRICS &amp; NEONATOLOGY</div>
        <div class="pdf-doc-type">Institutional Birth Record &amp; Labor Room Discharge Summary</div>
      </div>
      <div class="pdf-meta-bar">
        <span><b>Hospital Record UID:</b> HOSP-CRS-2026-99214</span>
        <span><b>Bed / Ward:</b> Maternity IPD-04</span>
        <span><b>Date of Delivery:</b> ${esc(d.dob || "2026-02-10")}</span>
      </div>
      <div class="pdf-content-body">
        <p>This institutional delivery report certifies the birth of infant delivered in this hospital as recorded in the statutory civil register:</p>
        <table class="pdf-data-table">
          <tr><td class="label-cell">Child Full Name</td><td class="val-cell" style="color:var(--teal);font-size:12px">${esc(d.childName || "Advait Deshmukh")}</td></tr>
          <tr><td class="label-cell">Mother's Full Name</td><td class="val-cell">${esc(profile.motherName || "Sunita Patil")}</td></tr>
          <tr><td class="label-cell">Father's Full Name</td><td class="val-cell">${esc(app.applicant)}</td></tr>
          <tr><td class="label-cell">Date &amp; Time of Birth</td><td class="val-cell">${esc(d.dob || "10-Feb-2026")} · 04:30 AM</td></tr>
          <tr><td class="label-cell">Gender &amp; Birth Weight</td><td class="val-cell">Male · 3.25 Kilograms</td></tr>
          <tr><td class="label-cell">Delivery Classification</td><td class="val-cell">Institutional Delivery (Full-Term Normal Delivery)</td></tr>
          <tr><td class="label-cell">Attending Obstetrician</td><td class="val-cell">${esc(d.doctor || "Dr. R. K. Joshi, MD (Obs & Gyn) [MMC Reg: 2004/08/2912]")}</td></tr>
          <tr><td class="label-cell">Hospital Civil Registry Linkage</td><td class="val-cell" style="color:var(--green)">SYNCED WITH MUNICIPAL CIVIL REGISTRATION SYSTEM (CRS)</td></tr>
        </table>
      </div>
      <div class="pdf-signature-row">
        <div class="pdf-seal" style="color:var(--navy);border-color:var(--navy)">HOSPITAL CIVIL REGISTRY<br>BIRTH DISCHARGE SEAL<br>SAHYADRI PUNE</div>
        <div class="pdf-officer-signature">
          <b>Medical Superintendent / Civil Registrar</b><br>
          Maternity &amp; Child Health Wing<br>
          <small>Authorized Signatory Under Registration of Births &amp; Deaths Act</small>
        </div>
      </div>`;
  } else if (doc.type === "marksheet") {
    docContentHtml = `
      <div class="pdf-header">
        <div class="pdf-emblem-text">SAVITRIBAI PHULE PUNE UNIVERSITY</div>
        <div class="pdf-gov-title">DIRECTORATE OF BOARD OF EXAMINATIONS &amp; EVALUATION</div>
        <div class="pdf-doc-type">Official Statement of Marks &amp; Cumulative Grade Record</div>
      </div>
      <div class="pdf-meta-bar">
        <span><b>PRN:</b> 72019942B</span>
        <span><b>Seat No:</b> B-10928</span>
        <span><b>Academic Session:</b> Nov/Dec 2025</span>
      </div>
      <div class="pdf-content-body">
        <p>Statement of grades secured by student <b>${esc(app.applicant)}</b> in the Bachelor of Engineering semester examination:</p>
        <table class="pdf-data-table">
          <tr><td class="label-cell">Student Full Name</td><td class="val-cell">${esc(app.applicant)}</td></tr>
          <tr><td class="label-cell">College / Institution</td><td class="val-cell">${esc(d.college || "COEP Technological University, Pune")}</td></tr>
          <tr><td class="label-cell">Branch / Course</td><td class="val-cell">${esc(d.course || "B.Tech Computer Science")}</td></tr>
          <tr><td class="label-cell">Semester Grade Point Average</td><td class="val-cell">SGPA: 9.24 / CGPA: 9.12</td></tr>
          <tr><td class="label-cell">Aggregate Percentage Score</td><td class="val-cell" style="color:var(--teal);font-size:12px">${esc(d.percentage || "88.5%")}</td></tr>
          <tr><td class="label-cell">Official Result Status</td><td class="val-cell" style="color:var(--green)">PASS — FIRST CLASS WITH DISTINCTION</td></tr>
        </table>
      </div>
      <div class="pdf-signature-row">
        <div class="pdf-seal" style="color:var(--navy);border-color:var(--navy)">PUNE UNIVERSITY<br>CONTROLLER OF EXAMS<br>OFFICIAL GRADE RECORD</div>
        <div class="pdf-officer-signature">
          <b>Director, Board of Examinations &amp; Evaluation</b><br>
          Savitribai Phule Pune University<br>
          <small>Digitally verified by State Higher Education Depository</small>
        </div>
      </div>`;
  } else {
    docContentHtml = `
      <div class="pdf-header">
        <div class="pdf-emblem-text">GOVERNMENT OF MAHARASHTRA · SETU PORTAL</div>
        <div class="pdf-gov-title">${esc(doc.name.toUpperCase())}</div>
        <div class="pdf-doc-type">Official Citizen Document Attachment</div>
      </div>
      <div class="pdf-meta-bar">
        <span><b>Document Ref:</b> ${esc(doc.id.toUpperCase())}</span>
        <span><b>Format:</b> Adobe PDF Document</span>
        <span><b>File Size:</b> ${esc(doc.size)}</span>
      </div>
      <div class="pdf-content-body">
        <p>This official government document has been verified and retrieved from the citizen data vault for application <b>${esc(app.id)}</b>:</p>
        <table class="pdf-data-table">
          <tr><td class="label-cell">Applicant / Holder Name</td><td class="val-cell">${esc(app.applicant)}</td></tr>
          <tr><td class="label-cell">Associated Service</td><td class="val-cell">${esc(app.service)} (${esc(app.department)})</td></tr>
          <tr><td class="label-cell">Attached File Name</td><td class="val-cell">${esc(doc.filename)}</td></tr>
          <tr><td class="label-cell">Document Category</td><td class="val-cell">${esc(doc.name)}</td></tr>
          <tr><td class="label-cell">Security Integrity Status</td><td class="val-cell" style="color:var(--green)">Tamper-Proof Digital Verification Passed</td></tr>
        </table>
      </div>
      <div class="pdf-signature-row">
        <div class="pdf-seal">SETU VERIFIED<br>DIGITAL ARCHIVE<br>STATE VAULT</div>
        <div class="pdf-officer-signature">
          <b>Competent Verification Authority</b><br>
          Government of Maharashtra Interoperability Framework<br>
          <small>e-Signed via State DigiLocker Gateway</small>
        </div>
      </div>`;
  }

  const isDocVerified = doc.status === "verified";
  const isDocFlagged = doc.status === "flagged";

  openModal(`PDF Document Viewer — ${esc(doc.filename)}`, `
    <div class="pdf-modal-container">
      <div class="pdf-toolbar">
        <div class="pdf-toolbar-left">
          <span class="pdf-badge">PDF</span>
          <span class="pdf-title">${esc(doc.filename)}</span>
          <span style="font-size:9px;color:#94a3b8">Page 1 / 1 · 100% · ${esc(doc.size)}</span>
        </div>
        <div class="pdf-toolbar-right">
          <button class="btn btn-small" onclick="window.print()">Print Document</button>
          <button class="btn btn-small btn-primary" data-action="pdf-action-back" data-app="${esc(app.id)}">Back to Application</button>
        </div>
      </div>
      <div class="pdf-body-scroll">
        <div class="pdf-page-sheet">
          <div class="pdf-watermark">SETU E-GOV VERIFICATION SYSTEM</div>
          ${docContentHtml}
        </div>
      </div>
      <div class="pdf-footer-verification">
        <div class="pdf-verif-status">
          <b>Official Verification Status:</b>
          <span class="status ${statusClass(doc.status)}">${doc.status.toUpperCase()}</span>
          ${doc.verifiedBy ? `<span style="font-size:10px;color:var(--muted);margin-left:6px">· Verified by <b>${esc(doc.verifiedBy)}</b> at ${esc(doc.verifiedAt)}</span>` : ""}
        </div>
        ${canReviewApp(app) ? `
        <div style="display:flex;gap:8px">
          <button class="btn btn-small btn-primary" data-action="pdf-action-verify" data-app="${esc(app.id)}" data-doc="${esc(doc.id)}">${isDocVerified ? "Re-Verify Document" : "Mark Document as Verified"}</button>
          <button class="btn btn-small btn-danger" data-action="pdf-action-flag" data-app="${esc(app.id)}" data-doc="${esc(doc.id)}">${isDocFlagged ? "Discrepancy Flagged" : "Flag Discrepancy"}</button>
          <button class="btn btn-small" data-action="pdf-action-back" data-app="${esc(app.id)}">Back to Application</button>
        </div>` : `
        <button class="btn btn-small" data-action="pdf-action-back" data-app="${esc(app.id)}">Back to Application</button>`}
      </div>
    </div>`,
    ""
  );
}

/* Application detail modal - Shows fetched citizen vault data, live department cross-check & PDF inspection */
function showApplication(id) {
  const app = state.applications.find(a => a.id === id);
  if (!app) return;
  ensureAppVerification(app);
  const canAct = canReviewApp(app) && !["Approved", "Rejected"].includes(app.status);
  const history = app.history || [app.step];
  const profile = getUserProfile(app.email);
  const docs = profile.vaultDocuments || {};
  const isBirth = (app.service || "").toLowerCase().includes("birth");
  const isScholarship = (app.service || "").toLowerCase().includes("scholarship");

  const reg = app.verification.registryData || {};
  const regStatus = app.verification.registryStatus || "verified";
  const isRegVerified = regStatus === "verified";

  // Build Department Cross-Verification Block
  let regHtml = "";
  if (isBirth) {
    if (isRegVerified) {
      regHtml = `
      <div class="reg-card verified">
        <div class="reg-head">
          <span class="status status-success">Verified in Hospital Data</span>
          <span style="font-size:9px;color:#15803d;font-weight:700">Hospital CRS Digital Node · Connected</span>
        </div>
        <div style="font-size:11px;font-weight:800;color:#166534">
          Institutional Delivery Record Confirmed in Hospital Database
        </div>
        <div class="reg-grid">
          <div><span>Hospital Name:</span> <b>${esc(reg.hospital)}</b></div>
          <div><span>Child Full Name:</span> <b style="color:#15803d">${esc(reg.childName)} (100% Match)</b></div>
          <div><span>Hospital Record UID:</span> <b>${esc(reg.hospitalRegNo)}</b></div>
          <div><span>Date &amp; Time of Birth:</span> <b>${esc(reg.dob)} · Matched</b></div>
          <div><span>Parents' Names:</span> <b>${esc(reg.parents)}</b></div>
          <div><span>Attending Physician:</span> <b>${esc(reg.doctor)}</b></div>
        </div>
        <div style="margin-top:8px;font-size:10px;color:#166534;background:#dcfce7;padding:6px 10px;border-radius:6px">
          <b>Verification Result:</b> Verified in Hospital Data. Institutional delivery entry confirmed and authenticated by Sahyadri Hospital Civil Registration Node.
        </div>
        ${canReviewApp(app) ? `
        <div class="reg-actions">
          <button class="btn btn-small btn-danger" data-action="toggle-hospital-check" data-id="${esc(app.id)}" data-status="failed">Simulate Mismatch / Not Found</button>
          <button class="btn btn-small" data-action="recheck-hospital-check" data-id="${esc(app.id)}">Re-Check Hospital Node</button>
        </div>` : ""}
      </div>`;
    } else {
      regHtml = `
      <div class="reg-card failed">
        <div class="reg-head">
          <span class="status status-danger">Hospital Data Verification Failed</span>
          <span style="font-size:9px;color:#b91c1c;font-weight:700">Hospital CRS Digital Node · Mismatch</span>
        </div>
        <div class="reg-alert-box">
          <div class="reg-alert-title">Hospital data doesn't verify this applicant</div>
          <div class="reg-alert-desc">
            No institutional delivery or birth admission record found in hospital digital ledger matching child "${esc(reg.childName)}" on date ${esc(reg.dob)}. The hospital records do not authenticate the submitted information.
          </div>
          <div class="reg-alert-warning">
            Notice to Official: Government regulations prohibit issuing a Birth Certificate without positive verification in hospital data. You may request clarification or reject this application.
          </div>
        </div>
        ${canReviewApp(app) ? `
        <div class="reg-actions">
          <button class="btn btn-small btn-primary" data-action="toggle-hospital-check" data-id="${esc(app.id)}" data-status="verified">Simulate Matching Hospital Record</button>
        </div>` : ""}
      </div>`;
    }
  } else {
    regHtml = `
      <div class="reg-card ${isRegVerified ? "verified" : "failed"}">
        <div class="reg-head">
          <span class="status ${isRegVerified ? "status-success" : "status-danger"}">${esc(app.verification.registryMessage)}</span>
          <span style="font-size:9px;color:${isRegVerified ? "#15803d" : "#b91c1c"};font-weight:700">${esc(app.verification.registrySystem)}</span>
        </div>
        <div class="reg-grid">
          ${Object.entries(reg).map(([k, v]) => `<div><span>${esc(k.charAt(0).toUpperCase() + k.slice(1))}:</span> <b>${esc(v)}</b></div>`).join("")}
        </div>
        ${canReviewApp(app) ? `
        <div class="reg-actions">
          <button class="btn btn-small" data-action="recheck-hospital-check" data-id="${esc(app.id)}">Re-Verify Registry API</button>
        </div>` : ""}
      </div>`;
  }

  // Build Attached PDF Document Table
  const verifDocs = app.verification.documents || [];
  const verifiedCount = verifDocs.filter(d => d.status === "verified").length;
  const totalDocs = verifDocs.length;

  const docsRows = verifDocs.map(d => `
    <tr>
      <td><span class="pdf-badge">PDF</span></td>
      <td>
        <div class="doc-name">${esc(d.name)}</div>
        <div class="doc-meta">${esc(d.filename)}</div>
      </td>
      <td><span style="font-size:9px;color:var(--muted)">${esc(d.size)}</span></td>
      <td>
        <span class="status ${statusClass(d.status)}">${d.status === "verified" ? "Verified by Officer" : d.status === "flagged" ? "Flagged" : "Pending Review"}</span>
        ${d.verifiedBy ? `<div style="font-size:8px;color:var(--muted);margin-top:2px">By ${esc(d.verifiedBy)}</div>` : ""}
      </td>
      <td>
        <div style="display:flex;gap:4px;align-items:center">
          <button class="btn btn-small" data-action="open-pdf-viewer" data-app="${esc(app.id)}" data-doc="${esc(d.id)}">View PDF</button>
          ${canReviewApp(app) ? `<button class="btn btn-small btn-primary" data-action="quick-verify-doc" data-app="${esc(app.id)}" data-doc="${esc(d.id)}">${d.status === "verified" ? "Verified" : "Verify"}</button>` : ""}
        </div>
      </td>
    </tr>
  `).join("");

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

 <!-- 1. Official Department & Hospital Registry Verification Section -->
 <div class="verif-box">
   <div class="verif-header">
     <div>
       <div class="verif-title">1. Official Cross-System Registry Verification (${esc(app.department)})</div>
       <div class="verif-sub">${isBirth ? "Official Hospital delivery and civil registry authentication" : "Cross-verifying applicant data against authoritative department registers"}</div>
     </div>
   </div>
   ${regHtml}
 </div>

 <!-- 2. Attached Verification Documents in PDF Format Section -->
 <div class="verif-box">
   <div class="verif-header">
     <div>
       <div class="verif-title">2. Mandatory Verification Documents (PDF Inspection)</div>
       <div class="verif-sub">Officials must inspect each document in PDF format before granting approval</div>
     </div>
     <div style="font-size:10px;font-weight:800;color:${verifiedCount === totalDocs ? "var(--green)" : "var(--amber)"}">
       ${verifiedCount} of ${totalDocs} Documents Verified
     </div>
   </div>
   <div class="table-wrap">
     <table class="doc-table">
       <thead>
         <tr>
           <th>Format</th>
           <th>Document Title &amp; File</th>
           <th>Size</th>
           <th>Status</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>${docsRows}</tbody>
     </table>
   </div>
   ${canReviewApp(app) ? `
   <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:8px">
     <button class="btn btn-small btn-dark" data-action="verify-all-docs" data-id="${esc(app.id)}">Verify All Documents</button>
   </div>` : ""}
 </div>

 <!-- 3. Reused Common Vault Data -->
 <div style="margin-top:12px;background:#f0fdf4;border:1px solid #bbf7d0;padding:12px;border-radius:8px">
   <div style="font-size:11px;font-weight:800;color:#166534;margin-bottom:6px">3. Reused Common Vault Data (Consent Verified)</div>
   <div class="grid" style="grid-template-columns:1fr 1fr;gap:6px;font-size:10px;color:#14532d">
     <div><b>Aadhaar UID:</b> ${esc(profile.aadhaarNo || "Verified")}</div>
     <div><b>PAN Number:</b> ${esc(profile.panNo || "Verified")}</div>
     <div><b>Annual Income:</b> Rs. ${esc(profile.annualIncome || "120000")}</div>
     <div><b>Income Cert No:</b> ${esc(profile.incomeCertNo || "INC-2025-9921")}</div>
     <div><b>Domicile Cert No:</b> ${esc(profile.domicileNo || "DOM-2025-8821")}</div>
     <div><b>DBT Bank Account:</b> ${esc(profile.bankAccount || "Verified")} (${esc(profile.bankName || "SBI")})</div>
   </div>
 </div>

 <!-- 4. Submitted Service-Specific Intake Details -->
 ${app.serviceDetails ? `
 <div style="margin-top:10px;background:#eff6ff;border:1px solid #bfdbfe;padding:12px;border-radius:8px">
   <div style="font-size:11px;font-weight:800;color:#1e40af;margin-bottom:6px">4. Service-Specific Intake Details (${esc(app.department)})</div>
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

/* View / Print Official Certificate Modal - Fixed Certificate Spelling Repetition & Added Certified Income Amount */
function generateCertificate(appId) {
  const app = state.applications.find(a => a.id === appId);
  if (!app) return;
  const profile = getUserProfile(app.email);
  const serviceName = app.service.trim();

  // Fix: Avoid repeating "Certificate" if service name already ends with Certificate
  const certTitle = serviceName.toLowerCase().endsWith("certificate") ? serviceName : serviceName + " Certificate";

  // Dynamic Service-Specific Certified Values (e.g. Certified Annual Income for Income Certificate)
  let extraCertFields = "";
  let bodyDescription = `This is to certify that <b>${esc(app.applicant)}</b> (${esc(app.email)}) has successfully fulfilled all government department verification requirements for <b>${esc(app.service)}</b> under the <b>${esc(app.department)}</b>.`;

  if (serviceName.toLowerCase().includes("income")) {
    const rawInc = app.serviceDetails?.annualIncome || app.serviceDetails?.inc_amt || profile.annualIncome || "120000";
    const formattedInc = Number(String(rawInc).replace(/[^0-9]/g, "") || 120000).toLocaleString("en-IN");
    bodyDescription = `This is to certify that <b>${esc(app.applicant)}</b> (${esc(app.email)}) has an Annual Family Income of <b>Rs. ${formattedInc}/-</b> from all verified sources, recorded under the <b>${esc(app.department)}</b>.`;
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Certified Annual Income:</span><span class="cert-val" style="color:var(--teal)">Rs. ${formattedInc}/-</span></div>
     <div class="cert-field"><span class="cert-label">Income Certificate Reference:</span><span class="cert-val">${esc(profile.incomeCertNo || "INC-2025-9921")}</span></div>`;
  } else if (serviceName.toLowerCase().includes("scholarship")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Institution / College:</span><span class="cert-val">${esc(app.serviceDetails?.college || profile.collegeName || "AISSMS IOIT Pune")}</span></div>
     <div class="cert-field"><span class="cert-label">Course &amp; Marksheet %:</span><span class="cert-val">${esc(app.serviceDetails?.course || profile.courseName)} (${esc(app.serviceDetails?.marks || "88.5%")})</span></div>`;
  } else if (serviceName.toLowerCase().includes("business")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Registered Business Name:</span><span class="cert-val">${esc(app.serviceDetails?.biz_name || "Joshi IT Solutions Pvt Ltd")}</span></div>
     <div class="cert-field"><span class="cert-label">Business Structure &amp; Investment:</span><span class="cert-val">${esc(app.serviceDetails?.biz_type || "Private Limited")} (Rs. ${esc(app.serviceDetails?.biz_inv || "500,000")})</span></div>`;
  } else if (serviceName.toLowerCase().includes("birth")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Child's Name:</span><span class="cert-val">${esc(app.serviceDetails?.child_name || "Advait Deshmukh")}</span></div>
     <div class="cert-field"><span class="cert-label">Hospital / Birth Place:</span><span class="cert-val">${esc(app.serviceDetails?.hospital || "Sahyadri Hospital, Pune")}</span></div>`;
  } else if (serviceName.toLowerCase().includes("pension")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Sanctioned Pension Scheme:</span><span class="cert-val">${esc(app.serviceDetails?.pension_type || "Indira Gandhi National Old Age Pension")}</span></div>
     <div class="cert-field"><span class="cert-label">DBT Bank Account:</span><span class="cert-val">${esc(profile.bankAccount)} (${esc(profile.bankName)})</span></div>`;
  } else if (serviceName.toLowerCase().includes("residence")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Verified Residence Duration:</span><span class="cert-val">${esc(app.serviceDetails?.res_years || "15 Years")}</span></div>
     <div class="cert-field"><span class="cert-label">Verified Address:</span><span class="cert-val">${esc(profile.addressLine1)}, ${esc(profile.district)}</span></div>`;
  } else if (serviceName.toLowerCase().includes("caste")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Verified Caste Category:</span><span class="cert-val">${esc(app.serviceDetails?.caste || "Maratha / OBC")} (${esc(profile.category)})</span></div>`;
  } else if (serviceName.toLowerCase().includes("trade")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Licenced Trade Premises:</span><span class="cert-val">${esc(app.serviceDetails?.trade_name || "Green Leaf Organics")} (${esc(app.serviceDetails?.trade_area || "450 sq ft")})</span></div>`;
  } else if (serviceName.toLowerCase().includes("water")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Property Plot &amp; Connection:</span><span class="cert-val">${esc(app.serviceDetails?.water_plot || "Plot 42")} (${esc(app.serviceDetails?.water_type || "Residential")})</span></div>`;
  } else if (serviceName.toLowerCase().includes("ration")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Ration Card Category:</span><span class="cert-val">${esc(profile.rationType || "Saffron APL")} (Card: ${esc(profile.rationCardNo)})</span></div>`;
  } else if (serviceName.toLowerCase().includes("driving")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Driving Licence No:</span><span class="cert-val">${esc(app.serviceDetails?.dl_no || "MH-12-20210098124")}</span></div>
     <div class="cert-field"><span class="cert-label">Destination RTO Transfer:</span><span class="cert-val">${esc(app.serviceDetails?.rto_dest || "Transfer Approved")}</span></div>`;
  } else if (serviceName.toLowerCase().includes("property")) {
    extraCertFields = `
     <div class="cert-field"><span class="cert-label">Property Assessment ID:</span><span class="cert-val">${esc(app.serviceDetails?.prop_id || "PMC-PROP-99214")}</span></div>
     <div class="cert-field"><span class="cert-label">Tax Dues Status:</span><span class="cert-val" style="color:var(--green)">ALL DUES CLEARED</span></div>`;
  }

  openModal(`Official Certificate - ${esc(app.id)}`, `
 <div class="certificate-card" id="certDocument">
   <div class="cert-header">
     <div class="cert-sub">Government of Maharashtra · Service Exchange</div>
     <h2>${esc(certTitle.toUpperCase())}</h2>
     <div style="font-size:10px;color:var(--teal);font-weight:800">REF NO: ${esc(app.id)}</div>
   </div>
   <div class="cert-body">
     <p>${bodyDescription}</p>
     <div class="cert-field"><span class="cert-label">Applicant Name:</span><span class="cert-val">${esc(app.applicant)}</span></div>
     <div class="cert-field"><span class="cert-label">Aadhaar Reference:</span><span class="cert-val">${esc(profile.aadhaarNo || "4821 9901 8823")}</span></div>
     ${extraCertFields}
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

    const newApp = {
      id, service: service.name, department: service.department, applicant, email,
      date: new Date().toISOString().slice(0, 10), status: "Submitted", step: "Application received",
      serviceDetails, note: document.getElementById("appNote")?.value.trim() || "", history: ["Application received", "Consent recorded"]
    };
    ensureAppVerification(newApp);
    state.applications.unshift(newApp);
    logAudit("Submitted service request", id, applicant);
    save(); closeModal(); go("applications"); toast("Request submitted! Reference: " + id);
  }

  if (a === "open-pdf-viewer") {
    openPdfDocumentViewer(el.dataset.app, el.dataset.doc);
    return;
  }

  if (a === "pdf-action-verify") {
    const app = state.applications.find(x => x.id === el.dataset.app);
    if (!app) return;
    ensureAppVerification(app);
    const doc = app.verification.documents.find(d => d.id === el.dataset.doc);
    if (doc) {
      doc.status = "verified";
      doc.verifiedBy = currentUser.name;
      doc.verifiedAt = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
      logAudit("Verified PDF document: " + doc.filename, app.id);
      save();
      openPdfDocumentViewer(app.id, doc.id);
      toast("Document marked as Verified by " + currentUser.name);
    }
    return;
  }

  if (a === "pdf-action-flag") {
    const app = state.applications.find(x => x.id === el.dataset.app);
    if (!app) return;
    ensureAppVerification(app);
    const doc = app.verification.documents.find(d => d.id === el.dataset.doc);
    if (doc) {
      doc.status = "flagged";
      doc.verifiedBy = currentUser.name;
      doc.verifiedAt = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
      logAudit("Flagged discrepancy in document: " + doc.filename, app.id);
      save();
      openPdfDocumentViewer(app.id, doc.id);
      toast("Discrepancy flagged on document.");
    }
    return;
  }

  if (a === "pdf-action-back") {
    showApplication(el.dataset.app);
    return;
  }

  if (a === "quick-verify-doc") {
    const app = state.applications.find(x => x.id === el.dataset.app);
    if (!app) return;
    ensureAppVerification(app);
    const doc = app.verification.documents.find(d => d.id === el.dataset.doc);
    if (!doc) return;
    doc.status = doc.status === "verified" ? "pending" : "verified";
    doc.verifiedBy = doc.status === "verified" ? currentUser.name : "";
    doc.verifiedAt = doc.status === "verified" ? new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" }) : "";
    logAudit(doc.status === "verified" ? "Verified document: " + doc.filename : "Cleared verification: " + doc.filename, app.id);
    save();
    showApplication(app.id);
    toast(doc.status === "verified" ? "Document marked as Verified." : "Verification cleared.");
    return;
  }

  if (a === "verify-all-docs") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    ensureAppVerification(app);
    app.verification.documents.forEach(d => {
      d.status = "verified";
      d.verifiedBy = currentUser.name;
      d.verifiedAt = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
    });
    logAudit("Verified all attached PDF documents", app.id);
    save();
    showApplication(app.id);
    toast("All attached documents marked as Verified by Officer.");
    return;
  }

  if (a === "toggle-hospital-check") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    ensureAppVerification(app);
    app.verification.registryStatus = el.dataset.status;
    if (el.dataset.status === "verified") {
      app.verification.registryMessage = "Verified in Hospital Data";
      logAudit("Hospital verification status: Verified", app.id);
      toast("Hospital data verified: Institutional delivery record matched.");
    } else {
      app.verification.registryMessage = "Hospital data doesn't verify this applicant";
      logAudit("Hospital verification status: Failed / Not Found", app.id);
      toast("Verification failed: Hospital data doesn't verify this applicant.");
    }
    save();
    showApplication(app.id);
    return;
  }

  if (a === "recheck-hospital-check") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    toast("Pinging Hospital Civil Registration System node... Record matched (142ms).");
    return;
  }

  if (a === "decision") {
    const app = state.applications.find(x => x.id === el.dataset.id);
    if (!app) return;
    if (!canReviewApp(app)) { toast("Permission denied."); return; }
    ensureAppVerification(app);
    const decision = el.dataset.decision;

    if (decision === "Approved") {
      // 1. Hospital / Registry Verification Guard
      if (app.verification && app.verification.registryStatus === "failed") {
        alert("Cannot Approve Application!\n\nHospital data doesn't verify this applicant.\nOfficial regulations prohibit approval without positive hospital delivery verification. Please reject or request clarification from the applicant.");
        return;
      }

      // 2. Unverified Documents Check
      const unverified = (app.verification?.documents || []).filter(d => d.status !== "verified");
      if (unverified.length > 0) {
        if (!confirm("Attention Officer: " + unverified.length + " attached document(s) have not been checked/verified yet.\n\nDo you want to confirm that all required documents are verified and proceed with Official Approval?")) {
          return;
        }
        app.verification.documents.forEach(d => {
          d.status = "verified";
          d.verifiedBy = currentUser.name;
          d.verifiedAt = new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
        });
      }
    }

    if (decision === "Rejected" && !confirm("Reject this application?")) return;
    app.status = decision;
    app.step = decision === "Approved" ? "Completed" : "Decision recorded";
    app.note = decision === "Rejected" ? "Rejected by " + currentUser.name : "Approved by " + currentUser.name + " (Verified & Certified)";
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
  if (el.id === "statusFilter" || el.id === "deptFilter") {
    const sVal = document.getElementById("statusFilter")?.value || "";
    const dVal = document.getElementById("deptFilter")?.value || "";
    const apps = visibleApps().filter(a => (!sVal || a.status === sVal) && (!dVal || a.department === dVal));
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
