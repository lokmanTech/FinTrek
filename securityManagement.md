## Designing Secure Systems

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
