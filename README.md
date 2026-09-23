# Setu | Government Service Exchange

An enterprise-grade, interoperability middleware platform designed to connect departmental silos, facilitate single sign-on (SSO), enable consent-led data sharing, and streamline public service delivery without requiring the replacement of legacy government infrastructure.

## 🌟 Key Features

* **Connect, Don't Replace:** Integrates legacy department portals through reusable REST API connectors and standard JSON schemas.
* **Single-Entry Citizen Vault:** Citizens enter personal details once; data flows securely across authorized departments based on explicit, revocable consent.
* **Consent & Privacy Engine:** Granular permission controls ensuring purpose-limited data access with full transparency.
* **Real-Time Application Tracking:** Cross-department request status updates and event logs for both citizens and department reviewers.
* **Role-Based Access Control (RBAC):** Built-in permission tiers for Citizens, Department Reviewers, and Platform Administrators.
* **Immutable Audit Logging:** Every data query, verification step, and approval action is permanently logged for compliance and security auditing.

## 🛠 Tech Stack

| Category | Technology / Tool |
| :--- | :--- |
| **Frontend** | React.js, JavaScript (ES6+), HTML5, CSS3 (Glassmorphism UI) |
| **Backend** | Java 17, Spring Boot 3.x, Spring Data JPA, Spring Security |
| **Database** | MySQL 8.0+ |
| **Security & Auth**| JSON Web Tokens (JWT), BCrypt Password Hashing, HTTPS/TLS |
| **Integration** | RESTful APIs (JSON Payload) |

## 📂 Project Directory Structure

setu-exchange/
├── schema.sql                               # MySQL database initialization script
├── backend/                                 # Spring Boot Java REST API service
│   ├── pom.xml
│   └── src/
│       └── main/
│           ├── java/com/setu/
│           │   ├── SetuApplication.java
│           │   ├── controller/              # Auth & Application API endpoints
│           │   │   ├── ApplicationController.java
│           │   │   └── AuthController.java
│           │   ├── model/                   # JPA Database Entities
│           │   │   ├── ServiceApplication.java
│           │   │   └── User.java
│           │   ├── repository/              # Spring Data JPA Repositories
│           │   │   ├── ServiceApplicationRepository.java
│           │   │   └── UserRepository.java
│           │   └── security/                # JWT Utilities & Security Config
│           │       ├── JwtUtils.java
│           │       └── SecurityConfig.java
│           └── resources/
│               └── application.properties   # DB credentials & JWT configuration
└── frontend/                                # React.js Web Application
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.css                          # Interoperability Design System & Layout
        ├── App.js                           # Primary React Application Component
        └── index.js
