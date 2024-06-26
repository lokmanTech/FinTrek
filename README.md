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

### 2. [Web App Development](https://lokmanTech.github.io/FinTrek) (v.01 - Complete)

`Preparation`: Code Configuration, Dependencies, Version Control

`Environment Setup`: Server Selection (Hosting platform: GitHub pages, AWS DynamoDB), Infrastructure, Environment Variables (AWS Cognito)

`Build and Test`: Build process (Build Automation), Testing (Automated Tests, Manual Tests)

`Deployment`: CI/CD, Deployment Strategy, Initial Deployment

### 3. [Security Management](./securityManagement.md) (In-progress)

security management safeguarding from attacks by enforcing strong authentication, encrypting data, and patching vulnerabilities.
   
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

