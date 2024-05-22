# FinTrek

Personal finance app to track expenses, budgets, and financial goals efficiently and securely.

<!-- `Technologies Used`: HTML, CSS, JavaScript for front-end; Backend technologies (Node.js & Python); Database (MySQL); Authentication methods; Monitoring tools (Prometheus); BI tools (Power BI).-->

<!--
| Part | Description | Status |
|:----:|:------------|:------:|
|[**Part 1**](Planning&Initiation/PlanningAndInitiation.md)|**Planning and Initiation**|✓ Complete|
|**Part 2**|**Project Execution**|In-progress|
|[*Part 2.1*](LayoutArchitecture/FintrekLayoutArchitecture.md)|Layout Architecture|✓ Complete|
|[*Part 2.2*](#application-design)|Application Design|T.B.C|
|[*Part 2.3*](#development)|Development|T.B.C|
|[*Part 2.4*](#testing)|Testing|T.B.C|
|[*Part 2.5*](#deployment)|Deployment|T.B.C|
|[*Part 2.6*](#security-enhancement)|Security Enhancement Projects|T.B.C|
|[*Part 2.7*](#database-migration)|Database Migration Project|T.B.C|
|[*Part 2.8*](#disaster-recovery)|Disaster Recovery Implementation|T.B.C|
|[*Part 2.9*](#performance-tuning)|Performance Tuning Initiative|T.B.C|
|[*Part 2.10*](#real-time-analytics)|Real-Time Analytics Implementation|T.B.C|
|[*Part 2.11*](#interactive-data-dashboard)|Interactive Data Dashboard|T.B.C|
|[*Part 2.12*](#exploratory-data-analysis)|Exploratory Data Analysis|T.B.C|
|[*Part 2.13*](#predictive-modeling)|Predictive Modeling|T.B.C|
|[*Part 2.14*](#sentiment-analysis)|Sentiment Analysis of Application Data|T.B.C|
|[*Part 2.15*](#market-basket-analysis)|Market Basket Analysis|T.B.C|
|[*Part 2.16*](#powerbi-dashboard)|PowerBI Dashboard|T.B.C|
|[**Part 3**](ProjectClosure/ProjectClosure.md)|**Project Closure** |T.B.C|
-->

### 1. [Design and Architecture](./LayoutArchitecture/FintrekLayoutArchitecture.md) (Complete)

Business Requirements: This part will study further on User Stories, Use Case, Functional Requirement, Non-functional requirement, Technology Requirement for Front-End, Back End & DevOps, Architecture Diagram

*Note: There's might have slight differences between architected document and deployed app. However, this part plays crucial part as guidance for me creating the web app.* 

### 2. [Web App Development](http://lokmanTech.github.io/FinTrek) (In-progress)

`Preparation`: Code Configuration, Dependencies, Version Control

`Environment Setup`: Server Selection (Hosting platform: GitHub pages, AWS DynamoDB), Infrastructure, Environment Variables (AWS Cognito)

`Build and Test`: Build process (Build Automation), Testing (Automated Tests, Manual Tests)

`Deployment`: CI/CD, Deployment Strategy, Initial Deployment

### 3. Security Management

Designing Secure Systems
1. Authentication
    - Scenario to Protect: User logins, employee access to internal systems
    - Design Points: strong password policy, multi-factor authentication (MFA)
2. Authorization
    - Scenario to Protect: data access, user roles
    - Design Points: Least privilege principle, role-based access control
    - regular review
3. Encryption
    - Scenario to Protect: Sensitive data protection, secure commnunications
    - Design Points: TLS for data transit, sensitive data encryption, key management
4. Vulnerability
    - Scenario to Protect: Patch Management, vulnerability assessment
    - Design Points: proactive security patches, regular scan, continuous monitoring
5. Audit & Compliance
    - Scenario to Protect: patient records access, compliance checks in financial systems
    - Design Points: regular internal audits, GDPR, HPAA, comprehensive logging
6. Network Security
    - Scenario to Protect: cloud environment security, corporate network security
    - Design Points: use firewalls, segregate networks, intrusion detection, secure DNS
7. Terminal Security
    - Scenario to Protect: employee laptops, Point-of-Sale systems
    - Design Points: antivirus software, device management, encrypt hard drives
8. Emergency Responses
    - Scenario to Protect: DDoS attack management, data breach responses
    - Design Points: incident responses plan, security operations centers, regular drills
9. Container Security
    - Scenario to Protect: microservice deployment, k8s (kubernetes) cluster security
    - Design Points: use trusted base images, scan containers, container runtime security
10. API Security
    - Scenario to Protect: public APIs, internal APIs communications
    - Design Points: OAuth 2, API key management, rate limiting, input validation
11. 3rd-Party Management
    - Scenario to Protect: vendor risk assessment, secure integration
    - Design Points: 3rd-party vendor assessment, secure data sharing, monitor 3rd-party accesses
12. Disaster Recovery
    - Scenario to Protect: recover from random attack, data center outages
    - Design Points: DR plan, data backup, system redundancy
   

### 4. Monitoring and DevOps

Monitoring
- Application Monitoring: Utilize tools in getting real-time metrics
- Performance Metrics: Getting info on Response times, Error rates and resource usage.

DevOps Practice
- Automated Testing
- Deployment Scripts
- Rollbacks and version control

### 5. Business Intelligence

Data Collection: Aggregate user data on expenses, budgets and goals

Data Visualization: Use BI tools to create dashboards and reports

Reporting: Summaries & Predictive Analysis.

## Process and Development

AWS Setup
1. AWS Cognito: For user authentication (free tier available)
2. AWS DynamoDB: For storing expenses,incomes and financial goals (free tier available)

