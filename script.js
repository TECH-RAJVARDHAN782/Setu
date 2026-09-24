const KEY="setu-gov-v5";
const defaultState={
 users:[
  {id:"u-admin",name:"Platform Admin",email:"admin@setu.gov.in",password:"Setu@2026",role:"admin",department:"Government of Maharashtra"},
  {id:"u-reviewer",name:"Department Reviewer",email:"reviewer@setu.gov.in",password:"Review@2026",role:"reviewer",department:"Revenue Department"},
  {id:"u-citizen",name:"Aarav Patil",email:"citizen@example.com",password:"Citizen@2026",role:"citizen",department:""}
 ],
 profileData:{
  fatherName:"Suryakant Patil", dob:"2002-05-14", gender:"Male", maritalStatus:"Unmarried", religion:"Hindu", category:"General",
  addressLine1:"42, Green Enclave, Shivaji Nagar", state:"Maharashtra", district:"Pune", taluka:"Haveli", pincode:"411005",
  cAddressLine1:"42, Green Enclave, Shivaji Nagar", cState:"Maharashtra", cDistrict:"Pune", cTaluka:"Haveli", cPincode:"411005",
  domicileCert:"Yes", domicileNo:"DOM-2025-8821", annualIncome:"120000", incomeCertNo:"INC-2025-9921",
  casteCertNo:"", isHandicapped:"No", parentOccupation:"Farmer", qualification:"Undergraduate",
  courseName:"B.Tech Computer Engineering", collegeName:"AISSMS IOIT Pune", isHosteller:"No"
 },
 applications:[
  {id:"SET-2026-1048",service:"Income Certificate",department:"Revenue Department",applicant:"Aarav Patil",email:"citizen@example.com",date:"2026-03-14",status:"In review",step:"Department verification",note:"",history:["Application received","Identity check completed","Department verification in progress"]},
  {id:"SET-2026-1047",service:"Student Scholarship",department:"Education Department",applicant:"Sana Shaikh",email:"sana@example.com",date:"2026-03-13",status:"Information requested",step:"Document validation",note:"Please provide current academic year enrollment proof.",history:["Application received","Document validation","Additional information requested"]},
  {id:"SET-2026-1046",service:"Business Registration",department:"Industries Department",applicant:"Meera Joshi",email:"meera@example.com",date:"2026-03-12",status:"Approved",step:"Completed",note:"",history:["Application received","Department verification","Approved"]},
  {id:"SET-2026-1045",service:"Birth Certificate",department:"Municipal Services",applicant:"Rohan Deshmukh",email:"rohan@example.com",date:"2026-03-11",status:"Submitted",step:"Application received",note:"",history:["Application received"]},
  {id:"SET-2026-1044",service:"Senior Citizen Pension",department:"Social Justice Department",applicant:"Leela Kulkarni",email:"leela@example.com",date:"2026-03-10",status:"In review",step:"Eligibility check",note:"",history:["Application received","Eligibility check in progress"]}
 ],
 services:[
  {id:"income",icon:"[INC]",name:"Income Certificate",department:"Revenue Department",description:"Request an income certificate with secure identity and income verification.",time:"5–7 working days",fee:"No fee",active:true},
  {id:"scholarship",icon:"[EDU]",name:"Student Scholarship",department:"Education Department",description:"Apply for eligible student scholarship programmes through one connected workflow.",time:"10–15 working days",fee:"No fee",active:true},
  {id:"business",icon:"[BIZ]",name:"Business Registration",department:"Industries Department",description:"Submit a business registration request and follow cross-department progress.",time:"7–10 working days",fee:"Varies",active:true},
  {id:"birth",icon:"[CIV]",name:"Birth Certificate",department:"Municipal Services",description:"Request a birth certificate and track municipal verification in one place.",time:"3–5 working days",fee:"Rs. 20",active:true},
  {id:"pension",icon:"[SOC]",name:"Senior Citizen Pension",department:"Social Justice Department",description:"Apply for pension benefits with consent-based eligibility checks.",time:"15–20 working days",fee:"No fee",active:true},
  {id:"residence",icon:"[DOM]",name:"Residence Certificate",department:"Revenue Department",description:"Request proof of residence using information already held by government.",time:"5–7 working days",fee:"No fee",active:true},
  {id:"caste",icon:"[CST]",name:"Caste Certificate",department:"Revenue Department",description:"Submit and track a caste certificate request with transparent status updates.",time:"10–15 working days",fee:"No fee",active:true},
  {id:"trade",icon:"[TRD]",name:"Trade Licence",department:"Municipal Services",description:"Apply for a local trade licence with coordinated municipal review.",time:"7–10 working days",fee:"Varies",active:true},
  {id:"water",icon:"[UTL]",name:"Water Connection",department:"Municipal Services",description:"Request a new water connection and monitor the service workflow.",time:"10–15 working days",fee:"Varies",active:true}
 ],
 integrations:[
  {id:"aadhaar",name:"Aadhaar e-KYC (UIDAI)",department:"Identity & Population",icon:"[UID]",status:true,latency:142,uptime:"99.98%"},
  {id:"revenue",name:"MahaRevenue",department:"Tax & Land Records",icon:"[TAX]",status:true,latency:186,uptime:"99.91%"},
  {id:"education",name:"MahaDBT",department:"Education & Scholarships",icon:"[EDU]",status:true,latency:203,uptime:"99.96%"},
  {id:"municipal",name:"Municipal Civil Registry",department:"Civil & Approvals",icon:"[MUN]",status:true,latency:174,uptime:"99.87%"},
  {id:"business",name:"Industries Portal",department:"Business Registrations",icon:"[IND]",status:false,latency:0,uptime:"99.72%"}
 ],
 consents:{identity:true,income:true,education:false,notifications:true},
 workflows:[
  {name:"Income certificate verification",description:"Coordinates identity, income, and Revenue Department checks.",steps:["Citizen request","Identity check","Income verification","Department approval","Notify citizen"]},
  {name:"Student scholarship application",description:"Connects student identity, education records, and benefit eligibility checks.",steps:["Consent check","Student record","Eligibility check","Review","Outcome update"]},
  {name:"Business registration",description:"Orchestrates department review with one application tracking reference.",steps:["Application intake","Identity validation","Registry check","Department review","Registration outcome"]}
 ],
 audit:[
  {time:"09:42:18",actor:"Platform Admin",action:"Viewed integration health",resource:"All connected systems",result:"Success"},
  {time:"09:36:05",actor:"Revenue Department",action:"Verified application data",resource:"SET-2026-1048",result:"Success"},
  {time:"09:21:44",actor:"Aarav Patil",action:"Granted data-sharing consent",resource:"Income Certificate",result:"Success"},
  {time:"08:58:12",actor:"Education Department",action:"Requested additional information",resource:"SET-2026-1047",result:"Success"}
 ]
};

function clone(x){return JSON.parse(JSON.stringify(x))}
function loadState(){try{return {...clone(defaultState),...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch{return clone(defaultState)}}
let state=loadState(), currentUser=null, currentPage="dashboard", toastTimer;

function save(){localStorage.setItem(KEY,JSON.stringify(state));updateCount()}
function esc(x){return String(x??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function toast(msg){const t=document.getElementById("toast");t.textContent=msg;t.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove("show"),2800)}
function isAdmin(){return currentUser?.role==="admin"}
function isReviewer(){return currentUser?.role==="reviewer"}
function canReview(){return isAdmin()||isReviewer()}
function roleName(role){return role==="admin"?"Platform administrator":role==="reviewer"?"Department reviewer":"Citizen"}
function updateCount(){const el=document.getElementById("appCount");if(el)el.textContent=visibleApps().length}
function visibleApps(){
 if(!currentUser)return [];
 if(isAdmin())return state.applications;
 if(isReviewer())return state.applications.filter(a=>a.department===currentUser.department);
 return state.applications.filter(a=>a.email===currentUser.email)
}
function logAudit(action,resource,actor=currentUser?.name||"System"){
 const time=new Date().toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit",second:"2-digit"});
 state.audit.unshift({time,actor,action,resource,result:"Success"});save()
}
function statusClass(s){if(["Approved","Success"].includes(s))return"status-success";if(["In review","Information requested","Pending","Submitted"].includes(s))return"status-warning";if(["Rejected","Failed"].includes(s))return"status-danger";return"status-neutral"}

const titles={
 dashboard:"Overview & System Status",
 profile:"Applicant Profile & Data Vault",
 services:"Service Directory",
 applications:"Applications & Tracking",
 integrations:"Connected Department APIs",
 workflows:"Workflow Orchestration",
 consent:"Consent & Privacy Engine",
 analytics:"Platform Analytics",
 audit:"Immutable Audit Trail",
 team:"User Roles & Access Control"
};

/* Switch role tabs */
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

  citizenBtn.classList.toggle("active", role === "citizen");
  reviewerBtn.classList.toggle("active", role === "reviewer");
  adminBtn.classList.toggle("active", role === "admin");

  if (role === "citizen") {
    deptField.style.display = "none";
    authLabel.textContent = "CITIZEN EMAIL / USERNAME";
    emailInput.value = "citizen@example.com";
    passInput.value = "Citizen@2026";
    submitBtn.textContent = "Sign In as Citizen ->";
    infoBox.innerHTML = "<strong>Citizen Portal:</strong> Apply for certificates, scholarships, and pensions with one-time profile entry.";
  } else if (role === "reviewer") {
    deptField.style.display = "grid";
    authLabel.textContent = "REVIEWER OFFICER ID / EMAIL";
    emailInput.value = "reviewer@setu.gov.in";
    passInput.value = "Review@2026";
    submitBtn.textContent = "Sign In as Reviewer ->";
    infoBox.innerHTML = "<strong>Reviewer Workspace:</strong> Review incoming department requests, issue eligibility decisions, and request information.";
  } else if (role === "admin") {
    deptField.style.display = "none";
    authLabel.textContent = "ADMIN ID / EMAIL";
    emailInput.value = "admin@setu.gov.in";
    passInput.value = "Setu@2026";
    submitBtn.textContent = "Sign In as Admin ->";
    infoBox.innerHTML = "<strong>Admin Console:</strong> Full access to REST API connectors, system audit logs, user permissions, and analytics.";
  }
}

/* Allow login/signup with ANYTHING typed in */
document.getElementById("authForm").addEventListener("submit", e => {
  e.preventDefault();
  const role = document.getElementById("selectedRole").value;
  const input = document.getElementById("authEmail").value.trim();
  const passVal = document.getElementById("authPassword").value;
  const selectedDept = document.getElementById("authDept")?.value || "";

  if (!input) {
    toast("Please enter a username or email.");
    return;
  }

  // Find user by email or username
  let user = state.users.find(u => u.email.toLowerCase() === input.toLowerCase() || u.name.toLowerCase() === input.toLowerCase());

  // If user doesn't exist, create and sign up instantly
  if (!user) {
    const formattedEmail = input.includes("@") ? input : `${input.toLowerCase().replace(/\s+/g, '')}@example.com`;
    const displayName = input.includes("@") ? input.split("@")[0] : input;

    user = {
      id: "u-" + Date.now(),
      name: displayName.charAt(0).toUpperCase() + displayName.slice(1),
      email: formattedEmail,
      password: passVal || "default123",
      role: role,
      department: role === "reviewer" ? selectedDept : role === "admin" ? "Government of Maharashtra" : ""
    };
    state.users.push(user);
    save();
  } else {
    // Update role/dept dynamically if existing user switches tabs
    user.role = role;
    if (role === "reviewer" && selectedDept) user.department = selectedDept;
    save();
  }

  login(user);
  logAudit(`Authenticated via ${role.toUpperCase()} portal`, user.email, user.name);
  toast(`Logged in as ${roleName(user.role)}`);
});

function login(user){
 currentUser=user;
 document.getElementById("authScreen").classList.add("hidden");
 document.getElementById("appShell").classList.remove("hidden");
 document.getElementById("profileName").textContent=user.name;
 document.getElementById("profileRole").textContent=roleName(user.role)+(user.department?" · "+user.department:"");
 document.getElementById("profileAvatar").textContent=user.name.split(/\s+/).map(x=>x[0]).slice(0,2).join("").toUpperCase();
 document.querySelectorAll(".admin-nav").forEach(el=>el.classList.toggle("hidden",!isAdmin()));
 go("dashboard");
}

function logout(){
  currentUser=null;
  document.getElementById("appShell").classList.add("hidden");
  document.getElementById("authScreen").classList.remove("hidden");
  selectRole("citizen");
}

function go(page){
 if(["integrations","workflows","analytics","audit","team"].includes(page)&&!isAdmin()){toast("This workspace is restricted to platform administrators.");return}
 currentPage=page;document.querySelectorAll(".nav-item[data-page]").forEach(x=>x.classList.toggle("active",x.dataset.page===page));
 document.getElementById("breadcrumb").textContent=titles[page]||"Overview";
 if(window.innerWidth<=790) document.getElementById("sidebar").classList.remove("open");
 render()
}

function heading(title,desc,actions=""){return `<div class="page-heading"><div><h1>${title}</h1><p>${desc}</p></div>${actions?`<div class="heading-actions">${actions}</div>`:""}</div>`}

function rowsApps(list){
 if(!list.length)return `<tr><td colspan="7" class="empty">No matching applications found.</td></tr>`;
 return list.map(a=>`<tr class="clickable" data-action="application-detail" data-id="${esc(a.id)}">
 <td><div class="main-cell">${esc(a.id)}</div><div class="sub-cell">${esc(a.date)}</div></td>
 <td><div class="main-cell">${esc(a.service)}</div><div class="sub-cell">${esc(a.department)}</div></td>
 <td>${esc(a.applicant)}</td><td><span class="status ${statusClass(a.status)}">${esc(a.status)}</span></td>
 <td>${esc(a.step)}</td>
 <td><button class="btn btn-small btn-primary" data-action="application-detail" data-id="${esc(a.id)}">${canReview()?"Review":"View"}</button></td>
 <td><button class="btn btn-small btn-danger" data-action="delete-application" data-id="${esc(a.id)}">Delete</button></td>
 </tr>`).join("")
}

function dashboard(){
 const apps=visibleApps(),inProgress=apps.filter(a=>["Submitted","In review","Information requested"].includes(a.status)).length,approved=apps.filter(a=>a.status==="Approved").length;
 const activeSystems=state.integrations.filter(i=>i.status).length;
 const citizen=isAdmin()?"All departments":isReviewer()?currentUser.department:"Your services";
 const adminAction=isAdmin()?`<button class="btn" data-action="export-apps">Export Data</button>`:"";
 return `${heading(`Welcome${currentUser.role==="citizen"?", "+esc(currentUser.name.split(" ")[0]):", Admin"}`, `${citizen} · Interoperability dashboard for government services.`,`${adminAction}<button class="btn btn-primary" data-action="new-application">+ New Service Request</button>`)}
 <div class="grid metrics">
  <div class="metric"><div class="metric-top"><span>${isAdmin()?"Total Applications":"Your Requests"}</span><span class="metric-icon">[A]</span></div><div class="metric-value">${apps.length}</div><div class="metric-foot">Unified tracking across systems</div></div>
  <div class="metric"><div class="metric-top"><span>${canReview()?"Needs Action":"In Processing"}</span><span class="metric-icon">[P]</span></div><div class="metric-value">${inProgress}</div><div class="metric-foot">${isAdmin()?"Awaiting department response":"Active cross-department steps"}</div></div>
  <div class="metric"><div class="metric-top"><span>Delivered</span><span class="metric-icon">[OK]</span></div><div class="metric-value">${approved}</div><div class="metric-foot">Service outcomes finalized</div></div>
  ${isAdmin()?`<div class="metric"><div class="metric-top"><span>Active APIs</span><span class="metric-icon">[S]</span></div><div class="metric-value">${activeSystems}<span style="font-size:13px;color:#64748b"> / ${state.integrations.length}</span></div><div class="metric-foot">Connected department connectors</div></div>`:`<div class="metric"><div class="metric-top"><span>Directory</span><span class="metric-icon">[D]</span></div><div class="metric-value">${state.services.filter(s=>s.active).length}</div><div class="metric-foot">Single access point services</div></div>`}
 </div>
 <div class="grid dashboard">
  <div class="panel"><div class="panel-head"><div><h2 class="panel-title">${canReview()?"Application Review Queue":"Your Recent Applications"}</h2><div class="panel-subtitle">Select a request to view progress, take action, or manage entries.</div></div><button class="link-btn" data-page="applications">View all -></button></div>
   <div class="table-wrap"><table><thead><tr><th>Reference</th><th>Service</th><th>Applicant</th><th>Status</th><th>Current Step</th><th></th><th></th></tr></thead><tbody>${rowsApps(apps.slice(0,5))}</tbody></table></div>
  </div>
  <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Service Interoperability Activity</h2><div class="panel-subtitle">Transaction throughput across REST endpoints</div></div><span class="status status-success">Live API</span></div>
   <div class="chart">${[31,50,43,68,55,83,70].map((v,i)=>`<div class="bar-group"><div class="bar" style="height:${v}%"></div><div class="bar-label">${["Mon","Tue","Wed","Thu","Fri","Sat","Sun"][i]}</div></div>`).join("")}</div><div class="chart-legend"><span class="legend-dot"></span> REST API Data Requests</div>
  </div>
 </div>
 <div class="grid two">
  <div class="panel"><div class="panel-head"><div><h2 class="panel-title">${isAdmin()?"Department Connector Health":"Popular Government Services"}</h2><div class="panel-subtitle">${isAdmin()?"Active endpoints & response latencies":"Apply once and track progress in real-time"}</div></div><button class="link-btn" data-page="${isAdmin()?"integrations":"services"}">View all -></button></div>
  ${isAdmin()?state.integrations.slice(0,4).map(i=>`<div class="health-row"><div class="health-icon">${i.icon}</div><div><div class="health-name">${esc(i.name)}</div><div class="health-detail">${i.status?i.latency+" ms response · "+esc(i.uptime)+" uptime":"Connector paused"}</div></div><div class="health-status" style="color:${i.status?"var(--green)":"var(--amber)"}">${i.status?"Online":"Paused"}</div></div>`).join(""):state.services.filter(s=>s.active).slice(0,3).map(s=>`<div class="health-row"><div class="health-icon">${s.icon}</div><div><div class="health-name">${esc(s.name)}</div><div class="health-detail">${esc(s.department)}</div></div><button class="link-btn" data-action="apply-service" data-service="${s.id}">Apply -></button></div>`).join("")}
  </div>
  <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Core Interoperability Pillars</h2><div class="panel-subtitle">Resolving fragmented public service delivery</div></div></div>
   <div class="health-row"><div class="health-icon">[1]</div><div><div class="health-name">Connect, Don't Replace</div><div class="health-detail">Integrate legacy portals without expensive system replacement</div></div><span class="health-status">Verified</span></div>
   <div class="health-row"><div class="health-icon">[2]</div><div><div class="health-name">One-Time Data Entry</div><div class="health-detail">Citizens submit details once; data flows securely with consent</div></div><span class="health-status">Verified</span></div>
   <div class="health-row"><div class="health-icon">[3]</div><div><div class="health-name">Consent-Led Governance</div><div class="health-detail">Explicit purpose-limited authorization for cross-agency data exchange</div></div><span class="health-status">Verified</span></div>
  </div>
 </div>`
}

function profilePage(){
 const p=state.profileData||{};
 return `${heading("Applicant Profile & Data Vault","Standardized single-entry form. Details are automatically reused for scholarship, pension, and certificate applications.", `<button class="btn btn-primary" data-action="save-profile-details">Save Profile Changes</button>`)}
 <div class="notice">Interoperability Protocol: Information entered here is stored once in your citizen vault and securely requested by authorized departments upon your explicit application consent.</div>
 <div class="accordion" id="profileAccordion">
  
  <div class="accordion-item open">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>1. Applicant Photograph</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field full"><label>Upload Passport Photo (JPEG/PNG)</label><input type="file" accept="image/*"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>2. Personal Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Full Applicant Name</label><input id="p_name" value="${esc(currentUser?.name||"")}"></div>
     <div class="field"><label>Father's / Guardian's Name</label><input id="p_father" value="${esc(p.fatherName||"")}"></div>
     <div class="field"><label>Date of Birth</label><input id="p_dob" type="date" value="${esc(p.dob||"")}"></div>
     <div class="field"><label>Gender</label><select id="p_gender"><option ${p.gender==="Male"?"selected":""}>Male</option><option ${p.gender==="Female"?"selected":""}>Female</option><option ${p.gender==="Other"?"selected":""}>Other</option></select></div>
     <div class="field"><label>Marital Status</label><select id="p_marital"><option ${p.maritalStatus==="Unmarried"?"selected":""}>Unmarried</option><option ${p.maritalStatus==="Married"?"selected":""}>Married</option></select></div>
     <div class="field"><label>Religion</label><input id="p_religion" value="${esc(p.religion||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>3. Permanent Address Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field full"><label>Address Line 1</label><input id="p_addr" value="${esc(p.addressLine1||"")}"></div>
     <div class="field"><label>State</label><input id="p_state" value="${esc(p.state||"Maharashtra")}"></div>
     <div class="field"><label>District</label><input id="p_district" value="${esc(p.district||"Pune")}"></div>
     <div class="field"><label>Taluka</label><input id="p_taluka" value="${esc(p.taluka||"")}"></div>
     <div class="field"><label>Pincode</label><input id="p_pincode" value="${esc(p.pincode||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>4. Correspondence Address Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field full"><label>Correspondence Address Line 1</label><input id="p_caddr" value="${esc(p.cAddressLine1||"")}"></div>
     <div class="field"><label>State</label><input id="p_cstate" value="${esc(p.cState||"Maharashtra")}"></div>
     <div class="field"><label>District</label><input id="p_cdistrict" value="${esc(p.cDistrict||"Pune")}"></div>
     <div class="field"><label>Taluka</label><input id="p_ctaluka" value="${esc(p.cTaluka||"")}"></div>
     <div class="field"><label>Pincode</label><input id="p_cpincode" value="${esc(p.cPincode||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>5. Domicile Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Are you a Domicile of Maharashtra?</label><select id="p_domicile"><option ${p.domicileCert==="Yes"?"selected":""}>Yes</option><option ${p.domicileCert==="No"?"selected":""}>No</option></select></div>
     <div class="field"><label>Domicile Certificate Number</label><input id="p_dom_no" value="${esc(p.domicileNo||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>6. Income Details (Revenue Integration)</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Family Annual Income (Rs.)</label><input id="p_income" value="${esc(p.annualIncome||"")}"></div>
     <div class="field"><label>Income Certificate Number</label><input id="p_income_no" value="${esc(p.incomeCertNo||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>7. Caste Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Category</label><select id="p_cat"><option ${p.category==="General"?"selected":""}>General</option><option ${p.category==="OBC"?"selected":""}>OBC</option><option ${p.category==="SC"?"selected":""}>SC</option><option ${p.category==="ST"?"selected":""}>ST</option></select></div>
     <div class="field"><label>Caste Certificate Number</label><input id="p_caste_no" value="${esc(p.casteCertNo||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>8. Personal Eligibility Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Is Person with Disability (Divyang)?</label><select id="p_disabled"><option ${p.isHandicapped==="No"?"selected":""}>No</option><option ${p.isHandicapped==="Yes"?"selected":""}>Yes</option></select></div>
     <div class="field"><label>Parent Occupation</label><input id="p_occ" value="${esc(p.parentOccupation||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>9. Parent's / Guardian's Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Parent Mobile Number</label><input placeholder="+91 9876543210"></div>
     <div class="field"><label>Is Salaried Employee?</label><select><option>No</option><option>Yes</option></select></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>10. Past Qualification Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Highest Qualification</label><input id="p_qual" value="${esc(p.qualification||"")}"></div>
     <div class="field"><label>SSC/HSC Marks Percentage</label><input placeholder="e.g. 88.50%"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>11. Current Course Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>College / Institution Name</label><input id="p_college" value="${esc(p.collegeName||"")}"></div>
     <div class="field"><label>Degree / Course Name</label><input id="p_course" value="${esc(p.courseName||"")}"></div>
    </div>
   </div>
  </div>

  <div class="accordion-item">
   <button class="accordion-header" onclick="toggleAccordion(this)"><span>12. Hostel Accommodation Details</span><span class="accordion-icon">+</span></button>
   <div class="accordion-content">
    <div class="form-grid">
     <div class="field"><label>Hosteller Status</label><select id="p_hostel"><option ${p.isHosteller==="No"?"selected":""}>No</option><option ${p.isHosteller==="Yes"?"selected":""}>Yes</option></select></div>
    </div>
   </div>
  </div>

 </div>`
}

function toggleAccordion(btn){
 const item=btn.parentElement;
 item.classList.toggle("open");
}

function saveProfileDataFromUI(){
 state.profileData={
  fatherName:document.getElementById("p_father")?.value||"",
  dob:document.getElementById("p_dob")?.value||"",
  gender:document.getElementById("p_gender")?.value||"Male",
  maritalStatus:document.getElementById("p_marital")?.value||"Unmarried",
  religion:document.getElementById("p_religion")?.value||"",
  category:document.getElementById("p_cat")?.value||"General",
  addressLine1:document.getElementById("p_addr")?.value||"",
  state:document.getElementById("p_state")?.value||"Maharashtra",
  district:document.getElementById("p_district")?.value||"Pune",
  taluka:document.getElementById("p_taluka")?.value||"",
  pincode:document.getElementById("p_pincode")?.value||"",
  cAddressLine1:document.getElementById("p_caddr")?.value||"",
  cState:document.getElementById("p_cstate")?.value||"Maharashtra",
  cDistrict:document.getElementById("p_cdistrict")?.value||"Pune",
  cTaluka:document.getElementById("p_ctaluka")?.value||"",
  cPincode:document.getElementById("p_cpincode")?.value||"",
  domicileCert:document.getElementById("p_domicile")?.value||"Yes",
  domicileNo:document.getElementById("p_dom_no")?.value||"",
  annualIncome:document.getElementById("p_income")?.value||"",
  incomeCertNo:document.getElementById("p_income_no")?.value||"",
  casteCertNo:document.getElementById("p_caste_no")?.value||"",
  isHandicapped:document.getElementById("p_disabled")?.value||"No",
  parentOccupation:document.getElementById("p_occ")?.value||"",
  qualification:document.getElementById("p_qual")?.value||"",
  courseName:document.getElementById("p_course")?.value||"",
  collegeName:document.getElementById("p_college")?.value||"",
  isHosteller:document.getElementById("p_hostel")?.value||"No"
 };
 save();
 logAudit("Updated single-entry profile vault", currentUser?.email||"Citizen");
 toast("Profile data saved to citizen vault!");
}

function servicesPage(){
 const list=state.services.filter(s=>s.active);
 return `${heading("Service Directory","Select a connected service to submit a unified application request.",isAdmin()?`<button class="btn btn-primary" data-action="add-service">+ Add Service</button>`:"")}
 <div class="grid service-grid">${list.map((s,idx)=>`<article class="service-card"><div class="service-top"><div class="service-icon">${esc(s.icon)}</div><span class="status status-success">Available</span></div>
 <h3>${esc(s.name)}</h3><p>${esc(s.description)}</p><div class="service-meta"><span>[TIME] ${esc(s.time)}</span><span>${esc(s.fee)}</span></div><div class="service-meta">[DEPT] ${esc(s.department)}</div>
 <div class="card-actions">
   <button class="btn btn-primary btn-small" data-action="apply-service" data-service="${esc(s.id)}">Start Application -></button>
   ${isAdmin()?`<button class="btn btn-small btn-danger" data-action="delete-service" data-id="${esc(s.id)}">Delete</button>`:""}
 </div></article>`).join("")}</div>`
}

function applicationsPage(){
 let apps=visibleApps();
 return `${heading(canReview()?"Application Review Workspace":"My Applications",canReview()?"Review requests, perform department checks, or remove records.":"Track request milestones across processing departments.",`${canReview()?`<button class="btn" data-action="export-apps">Export CSV</button>`:""}<button class="btn btn-primary" data-action="new-application">+ New Request</button>`)}
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">${canReview()?"Department Application Queue":"Your Submitted Requests"}</h2><div class="panel-subtitle">${apps.length} request(s) found · Click row to view details or manage records.</div></div>
 <select id="statusFilter" class="btn"><option value="">All Statuses</option><option>Submitted</option><option>In review</option><option>Information requested</option><option>Approved</option><option>Rejected</option></select></div>
 <div class="table-wrap"><table><thead><tr><th>Reference</th><th>Service</th><th>Applicant</th><th>Status</th><th>Current Step</th><th>Action</th><th></th></tr></thead><tbody id="applicationTable">${rowsApps(apps)}</tbody></table></div></div>`
}

function integrationsPage(){
 return `${heading("Connected Systems","Monitor REST API adapters linking department databases.",`<button class="btn" data-action="api-info">API Protocols</button><button class="btn btn-primary" data-action="add-connector">+ Register Connector</button>`)}
 <div class="notice">Interoperability Layer: Reusable REST connectors, common JSON schemas, role-based access, latency monitoring, and auditability.</div>
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Active Department Connectors</h2><div class="panel-subtitle">${state.integrations.filter(i=>i.status).length} of ${state.integrations.length} endpoints online</div></div><span class="status ${state.integrations.every(i=>i.status)?"status-success":"status-warning"}">${state.integrations.every(i=>i.status)?"All Systems Operational":"Degraded Status"}</span></div>
 <div class="integration-list">${state.integrations.map(i=>`<div class="integration-card"><div class="integration-logo">${esc(i.icon)}</div><div class="integration-info"><div class="integration-name">${esc(i.name)}</div><div class="integration-desc">${esc(i.department)}</div></div><div class="integration-meta">${i.status?i.latency+" ms":"—"}<br>${esc(i.uptime)} uptime</div><span class="status ${i.status?"status-success":"status-neutral"}">${i.status?"Connected":"Paused"}</span><label class="switch"><input type="checkbox" data-action="toggle-integration" data-id="${esc(i.id)}" ${i.status?"checked":""}><span class="slider"></span></label><button class="btn btn-small btn-danger" data-action="delete-connector" data-id="${esc(i.id)}">Delete</button></div>`).join("")}</div></div>`
}

function workflowsPage(){
 return `${heading("Workflow Orchestration","Configure automated multi-step verification sequences across departments.",`<button class="btn btn-primary" data-action="add-workflow">+ Create Workflow</button>`)}
 <div class="workflow-list">${state.workflows.map((w,i)=>`<div class="workflow-card"><div class="workflow-number">${String(i+1).padStart(2,"0")}</div><div class="workflow-body"><div style="display:flex;justify-content:space-between;gap:10px"><h3>${esc(w.name)}</h3><button class="btn btn-small btn-danger" data-action="delete-workflow" data-index="${i}">Delete</button></div><p>${esc(w.description)}</p><div class="step-tags">${w.steps.map((s,j)=>`<span class="step-tag">${j+1}. ${esc(s)}</span>`).join("")}</div></div></div>`).join("")}</div>`
}

function consentPage(){
 const opts=[["identity","[ID]","Identity Verification","Allow authorized departments to verify identity for requested services."],["income","[INC]","Income Information","Share verified income certificate details for scholarship or benefit eligibility."],["education","[EDU]","Education Records","Allow education institutions to check qualification and enrollment status."],["notifications","[NOT]","Service Updates","Receive realtime application status notifications and data requests."]];
 return `${heading("Consent & Privacy Engine","Manage granular data-sharing permissions for government services.",`<button class="btn" data-action="privacy-info">Privacy Principles</button>`)}
 <div class="grid two"><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Citizen Sharing Preferences</h2><div class="panel-subtitle">Toggle department data access permissions.</div></div></div>
 ${opts.map(o=>`<div class="consent-item"><div class="consent-icon">${o[1]}</div><div class="consent-text"><strong>${o[2]}</strong><span>${o[3]}</span></div><label class="switch"><input type="checkbox" data-action="toggle-consent" data-id="${o[0]}" ${state.consents[o[0]]?"checked":""}><span class="slider"></span></label></div>`).join("")}
 </div><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Security Guarantees</h2><div class="panel-subtitle">Interoperability Governance Standards</div></div></div>
 ${[["[PUR]","Purpose-Limited Use","Information used solely to process requested service"],["[AUT]","Role-Based Access","Restricted to verified department officers"],["[REC]","Immutable Audit","All data transactions recorded in access log"],["[CTR]","Citizen Control","Permissions revocable by citizen at any time"]].map(x=>`<div class="health-row"><div class="health-icon">${x[0]}</div><div><div class="health-name">${x[1]}</div><div class="health-detail">${x[2]}</div></div></div>`).join("")}</div></div>`
}

function analyticsPage(){
 const apps=state.applications, total=apps.length,approved=apps.filter(a=>a.status==="Approved").length,rejected=apps.filter(a=>a.status==="Rejected").length,review=apps.filter(a=>["In review","Submitted","Information requested"].includes(a.status)).length,online=state.integrations.filter(i=>i.status).length;
 const pct=(n)=>total?Math.round(n/total*100):0;
 return `${heading("Analytics","Measure platform throughput and service delivery performance.",`<button class="btn" data-action="export-apps">Export CSV</button>`)}
 <div class="grid metrics">
 ${[["Total Requests",total,"[T]"],["Approved",approved,"[A]"],["Processing",review,"[P]"],["Active APIs",online+" / "+state.integrations.length,"[S]"]].map(x=>`<div class="metric"><div class="metric-top"><span>${x[0]}</span><span class="metric-icon">${x[2]}</span></div><div class="metric-value">${x[1]}</div><div class="metric-foot">Current prototype metrics</div></div>`).join("")}
 </div><div class="grid two"><div class="panel"><div class="panel-head"><div><h2 class="panel-title">Application Outcomes</h2><div class="panel-subtitle">Status breakdown across departments</div></div></div>
 ${[["Approved",approved,"#16a34a"],["In progress",review,"#d97706"],["Rejected",rejected,"#dc2626"]].map(x=>`<div class="progress-row"><div class="progress-label"><span>${x[0]}</span><b>${x[1]} (${pct(x[1])}%)</b></div><div class="progress"><span style="width:${pct(x[1])}\%;background:${x[2]}"></span></div></div>`).join("")}</div>
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">API Endpoint Availability</h2><div class="panel-subtitle">Connected department connector status</div></div></div>
 <div style="font-size:28px;font-weight:850;color:#0f172a">${state.integrations.length?Math.round(online/state.integrations.length*100):0}%</div><div class="muted" style="font-size:10px;margin:4px 0 12px">${online} of ${state.integrations.length} connectors online</div>
 <div class="notice" style="margin:0">Monitored continuously via automated HTTP health checks.</div></div></div>`
}

function auditPage(){
 return `${heading("Audit Trail","Immutable event log recording cross-department requests and decisions.",`<button class="btn" data-action="export-audit">Export Log CSV</button>`)}
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Transaction Log</h2><div class="panel-subtitle">${state.audit.length} event(s) recorded in current session</div></div><span class="status status-success">Logging Active</span></div>
 <div class="table-wrap"><table><thead><tr><th>Timestamp</th><th>Actor</th><th>Action</th><th>Resource</th><th>Result</th></tr></thead><tbody>${state.audit.map(a=>`<tr><td>${esc(a.time)}</td><td>${esc(a.actor)}</td><td>${esc(a.action)}</td><td>${esc(a.resource)}</td><td><span class="status status-success">${esc(a.result)}</span></td></tr>`).join("")}</tbody></table></div></div>`
}

function teamPage(){
 if(!isAdmin())return "";
 return `${heading("User Roles & Access Control","Manage platform user accounts and department permissions.",`<button class="btn btn-primary" data-action="add-user">+ Create User</button>`)}
 <div class="panel"><div class="panel-head"><div><h2 class="panel-title">Registered Accounts</h2><div class="panel-subtitle">${state.users.length} user account(s) configured</div></div></div>
 <div class="table-wrap"><table><thead><tr><th>Name</th><th>Email</th><th>Role</th><th>Department</th><th>Access Level</th><th>Action</th></tr></thead><tbody>${state.users.map((u,idx)=>`<tr><td><b>${esc(u.name)}</b></td><td>${esc(u.email)}</td><td>${esc(roleName(u.role))}</td><td>${esc(u.department||"—")}</td><td><span class="status ${u.role==="admin"?"status-success":"status-neutral"}">${u.role==="admin"?"Admin":u.role==="reviewer"?"Reviewer":"Citizen"}</span></td><td>${u.id!==currentUser.id?`<button class="btn btn-small btn-danger" data-action="delete-user" data-id="${esc(u.id)}">Delete</button>`:"—"}</td></tr>`).join("")}</tbody></table></div></div>`
}

function render(){
 if(!currentUser)return;
 const views={dashboard,profile:profilePage,services:servicesPage,applications:applicationsPage,integrations:integrationsPage,workflows:workflowsPage,consent:consentPage,analytics:analyticsPage,audit:auditPage,team:teamPage};
 document.getElementById("content").innerHTML=(views[currentPage]||dashboard)();updateCount()
}

function openModal(title,body,foot=""){
 document.getElementById("modalRoot").innerHTML=`<div class="modal-backdrop" data-action="backdrop-close"><div class="modal" role="dialog" aria-modal="true"><div class="modal-head"><h2>${title}</h2><button class="modal-close" data-action="close-modal">X</button></div><div class="modal-body">${body}</div>${foot?`<div class="modal-foot">${foot}</div>`:""}</div></div>`
}
function closeModal(){document.getElementById("modalRoot").innerHTML=""}

function openApply(serviceId=""){
 const service=state.services.find(s=>s.id===serviceId&&s.active)||state.services.find(s=>s.active);
 const opts=state.services.filter(s=>s.active).map(s=>`<option value="${esc(s.id)}" ${s.id===service?.id?"selected":""}>${esc(s.name)} — ${esc(s.department)}</option>`).join("");
 openModal("Start a Service Request",`<p class="muted" style="font-size:10px;line-height:1.5;margin-top:0">Submit once. Your saved profile details will be securely shared with authorized departments based on your consent.</p>
 <form id="appForm"><div class="form-grid">
 <div class="field full"><label>Government Service *</label><select id="serviceSelect" required>${opts}</select></div>
 <div class="field"><label>Applicant Name *</label><input id="appName" required value="${esc(currentUser.name)}"></div>
 <div class="field"><label>Mobile Number *</label><input id="appPhone" required type="tel" pattern="[0-9+() -]{8,18}" placeholder="+91 98765 43210"></div>
 <div class="field full"><label>Email Address *</label><input id="appEmail" type="email" required value="${esc(currentUser.email)}"></div>
 <div class="field full"><label>Additional Information</label><textarea id="appNote" placeholder="Include relevant service context."></textarea></div>
 <div class="field full"><label class="checkbox-line"><input id="appConsent" type="checkbox" required> I authorize Setu to fetch my saved profile details and share them with the relevant department for processing.</label></div>
 </div></form>`,`<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="submit-application">Submit Request -></button>`)
}

function showApplication(id){
 const app=state.applications.find(a=>a.id===id);if(!app)return;
 const canAct=canReview()&&(isAdmin()||app.department===currentUser.department)&&!["Approved","Rejected"].includes(app.status);
 const history=app.history||[app.step];
 openModal(`Application Reference: ${esc(app.id)}`,`<div style="display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:14px"><div><b style="font-size:12px">${esc(app.service)}</b><div class="muted" style="font-size:9px;margin-top:2px">${esc(app.department)}</div></div><span class="status ${statusClass(app.status)}">${esc(app.status)}</span></div>
 <div class="grid" style="grid-template-columns:1fr 1fr;gap:10px;background:#f8fafc;padding:12px;border-radius:8px">
 <div><small class="muted">APPLICANT</small><div style="font-size:10px;font-weight:750;margin-top:2px">${esc(app.applicant)}</div></div>
 <div><small class="muted">DATE SUBMITTED</small><div style="font-size:10px;font-weight:750;margin-top:2px">${esc(app.date)}</div></div>
 <div><small class="muted">REFERENCE ID</small><div style="font-size:10px;font-weight:750;margin-top:2px">${esc(app.id)}</div></div>
 <div><small class="muted">CURRENT STEP</small><div style="font-size:10px;font-weight:750;margin-top:2px">${esc(app.step)}</div></div></div>
 ${app.note?`<div class="notice" style="margin:12px 0 0"><b>Latest Department Note:</b> ${esc(app.note)}</div>`:""}
 <h3 style="font-size:11px;margin:16px 0 8px">Processing Timeline</h3>
 ${history.map((h,i)=>`<div style="display:flex;gap:8px;padding:5px 0;font-size:10px"><span style="color:${i===history.length-1?"var(--teal)":"#94a3b8"}">*</span><span>${esc(h)}</span></div>`).join("")}`,
 `<button class="btn btn-danger" data-action="delete-application" data-id="${esc(id)}">Delete Record</button><button class="btn" data-action="close-modal">Close</button>${canAct?`<button class="btn btn-danger" data-action="decision" data-id="${esc(id)}" data-decision="Rejected">Reject</button><button class="btn" data-action="request-info" data-id="${esc(id)}">Request Info</button><button class="btn btn-primary" data-action="decision" data-id="${esc(id)}" data-decision="Approved">Approve</button>`:""}`)
}

function exportCSV(name,rows){
 const csv=rows.map(r=>r.map(v=>`"${String(v??"").replace(/"/g,'""')}"`).join(",")).join("\n");
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([csv],{type:"text/csv"}));a.download=name;a.click();URL.revokeObjectURL(a.href);toast("CSV downloaded successfully.")
}

/* Event Handling & Dynamic Interactions */
document.addEventListener("click",e=>{
 const page=e.target.closest("[data-page]");if(page){go(page.dataset.page);return}
 const el=e.target.closest("[data-action]");if(!el)return;const a=el.dataset.action;
 
 if(a==="logout"){logout();return}
 if(a==="save-profile-details"){saveProfileDataFromUI();return}
 if(a==="new-application")openApply()
 if(a==="apply-service")openApply(el.dataset.service)
 if(a==="close-modal")closeModal()
 if(a==="backdrop-close"&&e.target===el)closeModal()
 if(a==="application-detail")showApplication(el.dataset.id)
 
 /* Delete Handlers */
 if(a==="delete-application"){
  const id=el.dataset.id;
  if(confirm("Are you sure you want to delete application "+id+"?")){
   const idx=state.applications.findIndex(x=>x.id===id);
   if(idx!==-1){
    state.applications.splice(idx,1);
    logAudit("Deleted application record",id);save();closeModal();render();toast("Application record deleted.")
   }
  }
  return
 }

 if(a==="delete-service"){
  const id=el.dataset.id;
  if(confirm("Are you sure you want to delete this service from the directory?")){
   const idx=state.services.findIndex(x=>x.id===id);
   if(idx!==-1){
    const sName=state.services[idx].name;
    state.services.splice(idx,1);
    logAudit("Deleted service",sName);save();render();toast("Service removed from directory.")
   }
  }
  return
 }

 if(a==="delete-connector"){
  const id=el.dataset.id;
  if(confirm("Delete this API connector endpoint?")){
   const idx=state.integrations.findIndex(x=>x.id===id);
   if(idx!==-1){
    const cName=state.integrations[idx].name;
    state.integrations.splice(idx,1);
    logAudit("Deleted connector endpoint",cName);save();render();toast("Connector endpoint deleted.")
   }
  }
  return
 }

 if(a==="delete-user"){
  const id=el.dataset.id;
  if(confirm("Delete this user account?")){
   const idx=state.users.findIndex(x=>x.id===id);
   if(idx!==-1){
    const uEmail=state.users[idx].email;
    state.users.splice(idx,1);
    logAudit("Deleted user account",uEmail);save();render();toast("User account deleted.")
   }
  }
  return
 }

 if(a==="submit-application"){
  const f=document.getElementById("appForm");if(!f.reportValidity())return;
  const service=state.services.find(s=>s.id===document.getElementById("serviceSelect").value);
  const id="SET-2026-"+String(Math.max(1000,...state.applications.map(x=>Number(x.id.split("-").pop())||0))+1);
  const applicant=document.getElementById("appName").value.trim(),email=document.getElementById("appEmail").value.trim();
  state.applications.unshift({id,service:service.name,department:service.department,applicant,email,date:new Date().toISOString().slice(0,10),status:"Submitted",step:"Application received",note:document.getElementById("appNote").value.trim(),history:["Application received","Consent recorded"]});
  logAudit("Submitted service request",id,applicant);save();closeModal();go("applications");toast("Request submitted! Reference: "+id)
 }
 if(a==="decision"){
  const app=state.applications.find(x=>x.id===el.dataset.id);if(!app)return;
  if(!canReview()||(!isAdmin()&&app.department!==currentUser.department)){toast("Permission denied.");return}
  const decision=el.dataset.decision;
  if(decision==="Rejected"&&!confirm("Reject this application?"))return;
  app.status=decision;app.step=decision==="Approved"?"Completed":"Decision recorded";app.note=decision==="Rejected"?"Rejected by "+currentUser.name:"";
  app.history=app.history||[];app.history.push(decision+" by "+currentUser.name);
  logAudit(decision+" application",app.id);save();closeModal();render();toast("Application "+decision.toLowerCase()+".")
 }
 if(a==="request-info"){
  const app=state.applications.find(x=>x.id===el.dataset.id);if(!app)return;
  const msg=prompt("What information should the applicant provide?");
  if(!msg||!msg.trim())return;
  app.status="Information requested";app.step="Awaiting citizen information";app.note=msg.trim();app.history=app.history||[];app.history.push("Additional information requested: "+msg.trim());
  logAudit("Requested additional information",app.id);save();closeModal();render();toast("Information request sent.")
 }
 if(a==="add-service"){
  openModal("Add Government Service",`<div class="form-grid"><div class="field full"><label>Service Name *</label><input id="newServiceName" required></div><div class="field"><label>Department *</label><input id="newServiceDept" required></div><div class="field"><label>Badge Label</label><input id="newServiceIcon" value="[SRV]"></div><div class="field"><label>Estimated Time</label><input id="newServiceTime" value="5–7 working days"></div><div class="field"><label>Fee</label><input id="newServiceFee" value="No fee"></div><div class="field full"><label>Description</label><textarea id="newServiceDesc"></textarea></div></div>`,`<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-service">Add Service</button>`)
 }
 if(a==="save-service"){
  const name=document.getElementById("newServiceName").value.trim(),dept=document.getElementById("newServiceDept").value.trim();
  if(!name||!dept){toast("Name and department are required.");return}
  state.services.push({id:"svc-"+Date.now(),name,department:dept,icon:document.getElementById("newServiceIcon").value||"[SRV]",time:document.getElementById("newServiceTime").value||"To be confirmed",fee:document.getElementById("newServiceFee").value||"To be confirmed",description:document.getElementById("newServiceDesc").value||"A connected government service.",active:true});
  logAudit("Added service",name);save();closeModal();render();toast("Service added.")
 }
 if(a==="add-connector"){
  openModal("Register Department Connector",`<p class="muted" style="font-size:10px;line-height:1.5">Register a simulated REST endpoint for testing.</p><div class="form-grid"><div class="field full"><label>System Name *</label><input id="connectorName" placeholder="Department Portal"></div><div class="field full"><label>Department *</label><input id="connectorDept" placeholder="Owning Ministry"></div><div class="field full"><label>Adapter Protocol</label><select id="connectorType"><option>REST API (JSON)</option><option>Legacy Adapter</option><option>Event Stream</option></select></div></div>`,`<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-connector">Register Connector</button>`)
 }
 if(a==="save-connector"){
  const name=document.getElementById("connectorName").value.trim(),dept=document.getElementById("connectorDept").value.trim();if(!name||!dept){toast("System name and department required.");return}
  state.integrations.push({id:"custom-"+Date.now(),name,department:dept+" · "+document.getElementById("connectorType").value,icon:"[CON]",status:false,latency:0,uptime:"—"});
  logAudit("Registered connector",name);save();closeModal();render();toast("Connector registered.")
 }
 if(a==="add-workflow"){
  openModal("Create Workflow",`<div class="field"><label>Workflow Name *</label><input id="workflowName" placeholder="e.g. Income Verification"></div><div class="field"><label>Description</label><textarea id="workflowDesc" placeholder="Describe workflow scope."></textarea></div><div class="field"><label>Steps (comma separated) *</label><input id="workflowSteps" placeholder="Intake, Verification, Approval, Delivery"></div>`,`<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-workflow">Create Workflow</button>`)
 }
 if(a==="save-workflow"){
  const name=document.getElementById("workflowName").value.trim(),steps=document.getElementById("workflowSteps").value.split(",").map(s=>s.trim()).filter(Boolean);
  if(!name||!steps.length){toast("Provide workflow name and steps.");return}
  state.workflows.push({name,description:document.getElementById("workflowDesc").value.trim()||"Department workflow.",steps});
  logAudit("Created workflow",name);save();closeModal();render();toast("Workflow created.")
 }
 if(a==="delete-workflow"){
  if(!confirm("Remove this workflow?"))return;
  const w=state.workflows.splice(Number(el.dataset.index),1)[0];logAudit("Removed workflow",w.name);save();render();toast("Workflow removed.")
 }
 if(a==="add-user"){
  openModal("Create Platform User",`<div class="form-grid"><div class="field full"><label>Full Name *</label><input id="userName"></div><div class="field full"><label>Email Address *</label><input id="userEmail" type="email"></div><div class="field full"><label>Temporary Password * (8+ chars)</label><input id="userPassword" type="password"></div><div class="field"><label>Role *</label><select id="userRole"><option value="reviewer">Department Reviewer</option><option value="admin">Platform Administrator</option></select></div><div class="field"><label>Department</label><input id="userDept" placeholder="Revenue Department"></div></div>`,`<button class="btn" data-action="close-modal">Cancel</button><button class="btn btn-primary" data-action="save-user">Create User</button>`)
 }
 if(a==="save-user"){
  const name=document.getElementById("userName").value.trim(),email=document.getElementById("userEmail").value.trim().toLowerCase(),password=document.getElementById("userPassword").value,role=document.getElementById("userRole").value,department=document.getElementById("userDept").value.trim();
  if(!name||!email||password.length<8){toast("Complete all fields (password >= 8 chars).");return}
  if(state.users.some(u=>u.email.toLowerCase()===email)){toast("Email already registered.");return}
  state.users.push({id:"u-"+Date.now(),name,email,password,role,department});logAudit("Created "+role+" account",email);save();closeModal();render();toast("User created.")
 }
 if(a==="export-apps")exportCSV("setu-applications.csv",[["Reference","Service","Department","Applicant","Email","Date","Status","Current step"],...state.applications.map(x=>[x.id,x.service,x.department,x.applicant,x.email,x.date,x.status,x.step])])
 if(a==="export-audit")exportCSV("setu-audit.csv",[["Time","Actor","Action","Resource","Result"],...state.audit.map(x=>[x.time,x.actor,x.action,x.resource,x.result])])
 if(a==="api-info"||a==="privacy-info"){
  openModal(a==="api-info"?"Interoperability Standards":"Privacy & Consent Standards",`<p style="font-size:11px;line-height:1.6;color:#475569">${a==="api-info"?"Setu middleware implements REST/JSON communication standards, JWT token authorization, HTTPS encryption, and adapter layers wrapping existing legacy department portals.":"Setu enforces explicit, purpose-limited data sharing. Citizens grant single-use consent per application request, with transparent audit logs tracking all cross-department data queries."}</p><div class="notice">Prototype Mode: Data exchanges are simulated locally for demonstration.</div>`,`<button class="btn btn-primary" data-action="close-modal">Close</button>`)
 }
});

document.addEventListener("change",e=>{
 const el=e.target;
 if(el.matches('[data-action="toggle-integration"]')){
  const i=state.integrations.find(x=>x.id===el.dataset.id);if(!i)return;
  i.status=el.checked;i.latency=i.status?156:0;logAudit(i.status?"Enabled connector":"Paused connector",i.name);save();render();toast(i.name+(i.status?" connected.":" paused."))
 }
 if(el.matches('[data-action="toggle-consent"]')){
  state.consents[el.dataset.id]=el.checked;logAudit(el.checked?"Granted sharing permission":"Revoked sharing permission",el.dataset.id);save();toast("Privacy preference updated.")
 }
 if(el.id==="statusFilter"){
  const apps=visibleApps().filter(a=>!el.value||a.status===el.value);
  document.getElementById("applicationTable").innerHTML=rowsApps(apps)
 }
});

document.getElementById("searchForm").addEventListener("submit",e=>{
 e.preventDefault();const q=document.getElementById("globalSearch").value.trim().toLowerCase();if(!q)return;
 go("applications");
 const found=visibleApps().filter(a=>[a.id,a.service,a.department,a.applicant,a.status].some(v=>String(v).toLowerCase().includes(q)));
 document.getElementById("applicationTable").innerHTML=rowsApps(found);
 if(!found.length)toast("No matching requests found.")
});

document.getElementById("notificationBtn").onclick=()=>{
 const p=document.getElementById("notificationPop");
 p.innerHTML=`<h3>System Notifications</h3><div class="notification-line"><strong>${visibleApps().filter(a=>["Submitted","In review","Information requested"].includes(a.status)).length} Pending Requests</strong>Requests requiring department verification.</div><div class="notification-line"><strong>Security &amp; Consent Active</strong>Token authentication enabled.</div><div class="notification-line"><strong>Interoperability Mode</strong>Running local service simulation.</div>`;
 p.classList.toggle("open")
};

document.addEventListener("click",e=>{if(!e.target.closest("#notificationBtn")&&!e.target.closest("#notificationPop"))document.getElementById("notificationPop").classList.remove("open")});

/* Dynamic Sidebar Interactions (Edge Hover & Button Toggle) */
const sidebar = document.getElementById("sidebar");
const menuToggle = document.getElementById("menuToggle");

menuToggle.onclick = () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("collapsed");
};

// Open sidebar when cursor moves near screen left edge
document.addEventListener("mousemove", e => {
  if (window.innerWidth > 790) {
    if (e.clientX <= 20) {
      sidebar.classList.add("open");
    }
  }
});

// Close sidebar when cursor leaves sidebar area
sidebar.addEventListener("mouseleave", () => {
  if (window.innerWidth > 790 && sidebar.classList.contains("collapsed")) {
    sidebar.classList.remove("open");
  }
});

// Set initial desktop sidebar state to collapsed slide-out
if (window.innerWidth > 790) {
  sidebar.classList.add("collapsed");
}

selectRole("citizen");
