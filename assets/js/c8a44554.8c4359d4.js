"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[6427],{5085:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=i(4848),t=i(8453);const a={sidebar_position:1},o="Phishing Incident Response Playbook",r={id:"cybersecurity/purple team/playbooks/Phishing Incident Response Playbook",title:"Phishing Incident Response Playbook",description:"Phishing Incident Response Playbook for Blue Team",source:"@site/docs/cybersecurity/purple team/playbooks/Phishing Incident Response Playbook.md",sourceDirName:"cybersecurity/purple team/playbooks",slug:"/cybersecurity/purple team/playbooks/Phishing Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Phishing Incident Response Playbook",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/cybersecurity/purple team/playbooks/Phishing Incident Response Playbook.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Playbooks",permalink:"/redback-documentation/docs/category/playbooks"},next:{title:"Denial of Service Incident Response Playbook",permalink:"/redback-documentation/docs/cybersecurity/purple team/playbooks/Denial of Service Incident Response Playbook"}},l={},c=[{value:"1. Introduction",id:"1-introduction",level:2},{value:"1.1\tOverview",id:"11overview",level:3},{value:"1.2\tPurpose",id:"12purpose",level:3},{value:"1.3 Attack Definition",id:"13-attack-definition",level:3},{value:"1.4\tScope",id:"14scope",level:3},{value:"2. Attack Types",id:"2-attack-types",level:2},{value:"2.1 Email Phishing",id:"21-email-phishing",level:3},{value:"2.2 Spear Phishing",id:"22-spear-phishing",level:3},{value:"2.3 Whaling",id:"23-whaling",level:3},{value:"2.4 Vishing (Voice Phishing)",id:"24-vishing-voice-phishing",level:3},{value:"2.5 Smishing (SMS Phishing)",id:"25-smishing-sms-phishing",level:3},{value:"2.6 Clone Phishing",id:"26-clone-phishing",level:3},{value:"2.7 Angler Phishing",id:"27-angler-phishing",level:3},{value:"2.8 Evil twin phishing",id:"28-evil-twin-phishing",level:3},{value:"3. Stakeholders",id:"3-stakeholders",level:2},{value:"4. Flow Diagram",id:"4-flow-diagram",level:2},{value:"5. Incident Response Stages",id:"5-incident-response-stages",level:2},{value:"5.1 Preparation",id:"51-preparation",level:3},{value:"5.2 Detection",id:"52-detection",level:3},{value:"5.3 Analysis",id:"53-analysis",level:3},{value:"5.4 Containment",id:"54-containment",level:3},{value:"5.5 Eradication",id:"55-eradication",level:3},{value:"5.6 Recovery",id:"56-recovery",level:3},{value:"5.7 Post- Incident Review",id:"57-post--incident-review",level:3},{value:"6. Terminology",id:"6-terminology",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"phishing-incident-response-playbook",children:"Phishing Incident Response Playbook"}),"\n",(0,s.jsx)(n.p,{children:"Phishing Incident Response Playbook for Blue Team"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Effective Date:"})," 10 April 2024. ",(0,s.jsx)(n.strong,{children:"Last Edited:"})," 5 April 2024. ",(0,s.jsx)(n.strong,{children:"Authors:"})," Devika Sivakumar, Pari, Priyanshu, Joel Daniel. ",(0,s.jsx)(n.strong,{children:"Document Reference:"})," PIRP-2. ",(0,s.jsx)(n.strong,{children:"Expiry Date:"})," 17 December 2024. ",(0,s.jsx)(n.strong,{children:"Version:"})," 2.0."]})}),"\n",(0,s.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,s.jsx)(n.h3,{id:"11overview",children:"1.1\tOverview"}),"\n",(0,s.jsx)(n.p,{children:"One of the most common, simple yet dangerous security threats that all types of companies now have to deal with are phishing emails. The confidentiality, integrity, and availability of vital assets and data are seriously jeopardised by these attacks. Organisations need to have a thorough and well-defined incident response policy in place to effectively counter this danger while adhering to the minimum actions and questions to be carried out as detailed in the Redback Operations Incident Response Policy."}),"\n",(0,s.jsx)(n.h3,{id:"12purpose",children:"1.2\tPurpose"}),"\n",(0,s.jsx)(n.p,{children:"This playbook's main goal is to give organisation an organised, methodical strategy to identifying, stopping, and minimising the effects of phishing assaults. Its objectives are to help Computer Security Incident Response Team (CSIRT) teams avoid operational disruptions, secure sensitive data, respond quickly to phishing attacks, and preserve the organization's reputation. The playbook provides precise instructions and protocols for phishing attack preparation, detection, analysis, containment, eradication, discovery, and post-event actions. By adhering to the playbook's guidelines, an organisation can improve its incident response capabilities, quickly and effectively combat phishing threats, and solidify itself against changing cyberthreats in the modern digital landscape."}),"\n",(0,s.jsx)(n.h3,{id:"13-attack-definition",children:"1.3 Attack Definition"}),"\n",(0,s.jsx)(n.p,{children:"The definition of phishing incidents is as follows: \u201cPhishing is the deceptive activity of someone pretending to be a reputable organisation and sending emails, texts, or phone calls in an attempt to trick people into disclosing sensitive information including passwords, banking and credit card details, and personally identifiable information.\u201d These fraudulent emails frequently include links to fake websites or harmful attachments that aim to infect the recipient's device with malware or steal personal information. Phishing attacks pose a serious risk to cybersecurity and data privacy because they utilise social engineering tactics to trick people."}),"\n",(0,s.jsx)(n.h3,{id:"14scope",children:"1.4\tScope"}),"\n",(0,s.jsx)(n.p,{children:"The handling of phishing attacks is included in the scope of a phishing incident response playbook. It consists of post-event actions, coordination and communication, incident detection, response, and continuous improvement initiatives. The goal of the playbook is to assist CSIRT teams in efficiently identifying, evaluating, and countering phishing attacks while reducing the damage to the company's assets and operations. The playbook also intends to help stakeholders communicate and work together during a phishing event. It is meant for use by everyone involved in phishing incident management."}),"\n",(0,s.jsx)(n.h2,{id:"2-attack-types",children:"2. Attack Types"}),"\n",(0,s.jsx)(n.p,{children:"The different types of phishing attacks include:"}),"\n",(0,s.jsx)(n.h3,{id:"21-email-phishing",children:"2.1 Email Phishing"}),"\n",(0,s.jsx)(n.p,{children:"This is the most common type of phishing attack, in which hackers send fraudulent emails to people or businesses pretending to be trustworthy organisations like banks, governments, or well-known corporations. Usually, these emails have harmful attachments or links that are meant to fool recipients into downloading malware or disclosing private information."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Email Phishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Requests for personal information: Reputable businesses will never send you an email requesting personal information."}),"\n",(0,s.jsx)(n.li,{children:"Urgent issue: Exercise caution when you receive urgent notifications, such as failed payments or account breaches. To verify, visit the website/ call bank directly rather than clicking any links."}),"\n",(0,s.jsx)(n.li,{children:"Shortened links: Be wary of condensed or shortened links since they could be hiding harmful URLs."}),"\n",(0,s.jsx)(n.li,{children:"Fourth-party email addresses: Verify the integrity of the sender email address; scammers frequently use aliases or other versions of reputable domains."}),"\n",(0,s.jsx)(n.li,{children:"Spelling and grammar issues: Any email that has misspellings or grammar faults should be taken seriously as it may be a sign of phishing."}),"\n",(0,s.jsx)(n.li,{children:"File attachments: Stay away from opening attachments unless they have been confirmed, especially if they have the.exe,.zip, or .scr extensions."}),"\n",(0,s.jsx)(n.li,{children:"Sigle or blank image: Emails with just an image or one blank picture should be avoided since they can include malware that starts downloading automatically."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"22-spear-phishing",children:"2.2 Spear Phishing"}),"\n",(0,s.jsx)(n.p,{children:"Spear phishing consists of extremely focused attacks directed at particular people or departments within a company. To create phishing emails that are more likely to be successful, attackers perform in-depth research to obtain personal information about their targets."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Spear Phishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Unusual requests: To prevent possible scams, confirm through a different channel if coworkers ask for credentials beyond the scope of their position."}),"\n",(0,s.jsx)(n.li,{children:"Shared drive links: Stay away from accessing links that appear to be from internal sources since you probably already have access to shared drives."}),"\n",(0,s.jsx)(n.li,{children:"Unsolicited emails: Be wary of emails offering unsolicited downloads; always verify the sender's authenticity."}),"\n",(0,s.jsx)(n.li,{children:"Personal information: Email scammers may utilise needless personal information to win your trust, so be cautious when responding to such mail."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"23-whaling",children:"2.3 Whaling"}),"\n",(0,s.jsx)(n.p,{children:"Whaling attacks, sometimes referred to as CEO fraud, targets high-profile individuals in an organisation, such as CEOs or senior managers, with the intention of committing financial fraud or stealing confidential data. These attacks may spoof reliable connections or business partners and frequently entail advanced social engineering techniques."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Whaling:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Inaccurate domain address: To trick people, scammers frequently utilise identical but false domain domains. While checking email addresses, exercise caution."}),"\n",(0,s.jsx)(n.li,{children:"Use of personal email: To reduce the danger of phishing, only use professional emails to communicate with executives or business partners. Verify the sender's identification over an offline channel if the request occurs from a personal email."}),"\n",(0,s.jsx)(n.li,{children:"Requests for new contacts: Be wary of emails from vendors or partners you are not familiar with. Check these messages via proper channels or get in touch with the person in charge directly."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"24-vishing-voice-phishing",children:"2.4 Vishing (Voice Phishing)"}),"\n",(0,s.jsx)(n.p,{children:"This utilises voicemails or phone calls to trick people into divulging private information or carrying out specific tasks, such sending money or exposing up vulnerable networks. Attackers may pretend to be legitimate by using methods like caller ID spoofing."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Vishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Blocked or unidentified numbers: Phishing calls often originate from blocked numbers. If a caller sounds suspicious, hang up immediately."}),"\n",(0,s.jsx)(n.li,{children:"Requests for sensitive information or money: Various entities such as Government organizations, Medicare centres and Financial institutions conduct business through official mail and never request personal information over phone calls."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"25-smishing-sms-phishing",children:"2.5 Smishing (SMS Phishing)"}),"\n",(0,s.jsx)(n.p,{children:"Text messages, or SMS (Short Message Service), are used in smishing attacks to deceive targets into clicking on harmful links or compromising personal information. These messages, which frequently appear to be from reliable sources like banks or government organisations, may advise recipients to act immediately to prevent repercussions."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Smishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Unsolicited texts: Watch out for texts that provide you discounts or freebies on something you didn't sign up for. Phishing texts may also ask for personal information or account verification."}),"\n",(0,s.jsx)(n.li,{children:"Unknown numbers: Exercise vigilance while sending information requests by text. For verification, use a free phone lookup service; stay away from links and other interactions."}),"\n",(0,s.jsx)(n.li,{children:"Authentication requests: Requests for authentication that are not authorised can be signs of attempted account access. To protect your account, quickly change your password."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"26-clone-phishing",children:"2.6 Clone Phishing"}),"\n",(0,s.jsx)(n.p,{children:"Clone phishing is the practice of copying and pasting authentic emails or messages, making little changes (like changing links or attachments), and then delivering them to targets pretending they were the original correspondence. This strategy tries to fool recipients into interacting with the malicious content by taking advantage of their familiarity with the original sender."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Clone Phishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Duplicate emails: Look for copies of emails and closely examine newly added links for any indications of phishing. Always cross-reference connections with earlier correspondence."}),"\n",(0,s.jsx)(n.li,{children:"Misspelt email addresses: Small typos are a common feature of bogus emails, which are sometimes overlooked."}),"\n",(0,s.jsx)(n.li,{children:"Text with hyperlinks: Hover your cursor over links to see the actual URL. Should it diverge from the text that is linked, it can be a sign of phishing."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"27-angler-phishing",children:"2.7 Angler Phishing"}),"\n",(0,s.jsx)(n.p,{children:"Attackers that use social media to conduct angler phishing pose as customer service agents. They make up profiles and message unhappy persons they come across in posts or comments on social media. Once the fraudster has confirmed a few personal data, they offer help and a URL that claims to fix the problem. But the URL is infected with malware, which makes it possible to successfully exploit the victim."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Angler Phishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Unverified account: Official support pages are usually verified and linked directly to the main page. Check the company website for official support contacts."}),"\n",(0,s.jsx)(n.li,{children:"Minimal profile history: Smaller businesses, though unverified, should have a history of customer interactions. New accounts with few followers and no posts are likely attempting to deceive unsuspecting users."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"28-evil-twin-phishing",children:"2.8 Evil twin phishing"}),"\n",(0,s.jsx)(n.p,{children:"Evil twin phishing involves creating a fraudulent Wi-Fi network that mimics a legitimate one, tricking users into connecting to it. Once connected, attackers can intercept sensitive information or deploy malware."}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.p,{children:"Signs of Evil twin phishing:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Duplicate Wi-Fi hotspots: If you see multiple Wi-Fi networks with the same name, connect only to the secured one requiring a password from the establishment. Connecting to unsecured networks is strongly discouraged for safety."}),"\n",(0,s.jsx)(n.li,{children:"Unsecure warnings: If your device warns that a network is unsecured, consider connecting to a secure network or refrain from connecting altogether."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u2003"}),"\n",(0,s.jsx)(n.h2,{id:"3-stakeholders",children:"3. Stakeholders"}),"\n",(0,s.jsx)(n.p,{children:"To minimise the impact on the organisation and prevent further events, early and efficient reaction to a phishing attack depends on strong coordination and collaboration amongst key stakeholders. Responding to a phishing attack usually involves the following key stakeholders:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"IT Security Team"}),": The IT Security Team oversees identifying, researching, and preventing phishing attacks. They take the lead in technical response tasks such as phishing email analysis, malicious website blocking, and security breach containment."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Incident Response Team"}),": They are responsible for coordinating responses to the phishing issue, which includes interacting with relevant parties, putting incident response protocols into action, and doing post-incident analysis to avert similar attacks in the future."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Communications Team"}),": Oversees all internal and external communications regarding the phishing incident, including informing staff members, clients, and other relevant parties and giving them updates on the response activities."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Customers"}),": They are the primary targets of phishing assaults and suffer damage instantaneously. This comprises:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Customers whose financial and personal information might be lost."}),"\n",(0,s.jsx)(n.li,{children:"Businesses and educational institutions are among the organisations that experience financial losses, reputational harm, and data breaches."}),"\n",(0,s.jsx)(n.li,{children:"Banks and other financial institutions that experience fraudulent transactions and a decline in client confidence."}),"\n",(0,s.jsx)(n.li,{children:"Online retailers who may encounter fraudulent transactions and a decline in customer trust."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Third-party Vendors"}),": Third-party vendors, like cybersecurity companies or incident response consultants, may be enlisted to offer specific knowledge and assistance during the response process, based upon the attack's nature and the structure of the organisation."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-flow-diagram",children:"4. Flow Diagram"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Phishing Incident Response Flowchart",src:i(4835).A+"",width:"940",height:"322"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Preparation (Prep): Yellow","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Notify IT Security Analyst- The first thing to do is to alert the assigned IT security analyst as soon as you suspect a phishing attempt. To start the incident response procedure as soon as possible, the analyst must be notified. Important information including the threat's nature, the systems that are impacted, and any preliminary findings or proof are all included in this warning."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Identification (Identify): Red","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Block Malicious Emails: As soon as the phishing attempt is verified, all incoming emails that are suspected of being fraudulent should be blocked. By taking this preventive step, users are protected from possible danger and more intrusion into the company's systems are prevented."}),"\n",(0,s.jsx)(n.li,{children:"Disconnect Affected Systems: Meanwhile, all suspected or verified hacked systems are unplugged from the network. The goal of this isolation phase is to reduce possible harm to other systems or data while containing the danger and preventing its spread."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Notification (Notif): Violet","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Change Passwords for Compromised Accounts: Passwords for hacked user accounts are quickly changed as part of incident response to stop unwanted access. This preventive action reduces the possibility that malicious individuals will continue to abuse the situation."}),"\n",(0,s.jsx)(n.li,{children:"Scan Systems for Malware: The impacted computers are thoroughly scanned to find and eliminate any malware or harmful files. Through this scanning procedure, the systems' integrity is guaranteed, and any potential threats are stopped in their tracks."}),"\n",(0,s.jsx)(n.li,{children:"Review Malicious Links/Attachments: All attachments and URLs that might be connected to the phishing effort are carefully examined. This research provides light on the attackers' methodology and motivations in addition to helping to identify the strategies they employ."}),"\n",(0,s.jsx)(n.li,{children:"Blacklist Sender Domains/Addresses: Email addresses and sender domains connected to the phishing effort are blocked. Companies can actively fight against future attacks and protect customers from similar hazards by limiting communication from these sources."}),"\n",(0,s.jsx)(n.li,{children:"Inform Other Analysts of Repeated Attempts: Other security analysts are informed about the phishing effort, including attack tactics and indications of compromise (IOCs). This cooperative strategy strengthens protections against recurring threats and improves situational awareness."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Containment (Contain): Sky Blue","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Error - Unable to Isolate Affected Systems: If isolating the compromised systems doesn't resolve the issue, a senior analyst is notified so they may investigate it more and take appropriate action. By taking this action, you may be confident that the right steps are done to limit the problem and stop it from getting worse."}),"\n",(0,s.jsx)(n.li,{children:"Escalate to Senior Analyst: To help in reaching a well-informed decision, the senior analyst is briefed on the circumstances and given relevant details. By elevating the issue, you can make sure that it gets the focus and resources it needs to be handled successfully."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Eradication (Erad): Light Green","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Record Incident Details: Carefully documented are all the specifics of the happening, such as the timing, effects, and reaction activities. For post-event analysis, legal compliance, and future incident response planning, this material is an invaluable resource."}),"\n",(0,s.jsx)(n.li,{children:"Review Incident with Incident Response Team: Together with the incident response team, a thorough analysis of the occurrence is carried out. The objectives of this post-event study are to identify areas for incident response method improvement, security control gaps, and lessons learned."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Recovery (Recover): Brown","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Continue Monitoring: Ongoing monitoring operations are restarted following the mitigation of the immediate threat and the incident. This entails keeping an eye on user activities, system records, and network traffic to spot any remaining dangers or illegal access."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Post-Incident Actions (Post): Light pink","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Continue Monitoring: Even after the issue has been resolved, ongoing surveillance is still necessary to identify any reappearance of the danger or any fresh security flaws. To improve future issue handling skills, post-event steps should also involve a complete examination of incident response protocols and the implementation of any necessary enhancements."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"5-incident-response-stages",children:"5. Incident Response Stages"}),"\n",(0,s.jsx)(n.h3,{id:"51-preparation",children:"5.1 Preparation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Create and record an incident response plan that outlines the steps, people involved, and their roles."}),"\n",(0,s.jsx)(n.li,{children:"Create an incident response team with responsibilities and escalation protocols well established."}),"\n",(0,s.jsx)(n.li,{children:"To find possible risks and weaknesses, do routine risk assessments."}),"\n",(0,s.jsx)(n.li,{children:"Install security measures including antivirus programmes, firewalls, and intrusion detection systems."}),"\n",(0,s.jsx)(n.li,{children:"Make and keep backups of important information and systems."}),"\n",(0,s.jsx)(n.li,{children:"Employees should get education and awareness campaigns to help them identify and report security problems."}),"\n",(0,s.jsx)(n.li,{children:"Create lines of communication and contact details for reporting and coordinating incidents."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"52-detection",children:"5.2 Detection"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use technology and monitoring tools to keep an eye out for any unusual behaviour, malware infestations, or illegal access."}),"\n",(0,s.jsx)(n.li,{children:"Keep an eye out for any indications of possible security breaches in system logs, network traffic, and security warnings."}),"\n",(0,s.jsx)(n.li,{children:"Correlate and analyse security events with the use of intrusion detection systems (IDS) and security information and event management (SIEM) solutions."}),"\n",(0,s.jsx)(n.li,{children:"Establish alerts and notifications so that security incidents may be quickly detected and addressed."}),"\n",(0,s.jsx)(n.li,{children:"To proactively find vulnerabilities and misconfigurations, conduct routine security audits and scans."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"53-analysis",children:"5.3 Analysis"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Examine security events to ascertain their type, extent, and effect on the company."}),"\n",(0,s.jsx)(n.li,{children:"Gather and examine supporting documentation, such as system snapshots, network traffic samples, and logs."}),"\n",(0,s.jsx)(n.li,{children:"Determine the attackers' tactics, methods, and procedures (TTPs) and indications of compromise (IOCs)."}),"\n",(0,s.jsx)(n.li,{children:"Work along with pertinent parties, including as IT departments, legal advisors, and law enforcement, if needed."}),"\n",(0,s.jsx)(n.li,{children:"Keep a chain of custody for the evidence gathered during the enquiry and record the results."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"54-containment",children:"5.4 Containment"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Act quickly to control the situation, stop more harm from occurring, and stop illegal access."}),"\n",(0,s.jsx)(n.li,{children:"To prevent malware or breach from spreading, isolate the compromised systems or networks from the rest of the infrastructure."}),"\n",(0,s.jsx)(n.li,{children:"Turn off hacked user accounts or services to stop hackers from getting private data."}),"\n",(0,s.jsx)(n.li,{children:"In order to lessen the effect of the event while the investigation and cleanup are ongoing, implement interim remedies or workarounds."}),"\n",(0,s.jsx)(n.li,{children:"Share information about containment efforts and anticipated downtime with all pertinent parties, including management and impacted parties."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"55-eradication",children:"5.5 Eradication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Determine which impacted systems have malicious software or illegal access, then delete it."}),"\n",(0,s.jsx)(n.li,{children:"Fix any security flaws and vulnerabilities that were used during the incident."}),"\n",(0,s.jsx)(n.li,{children:"Perform thorough audits and scans to make sure that all signs of compromise have been removed."}),"\n",(0,s.jsx)(n.li,{children:"To make sure the impacted systems and data are clear of malicious malware and unauthorised alterations, restore them from clean backups."}),"\n",(0,s.jsx)(n.li,{children:"To avoid reoccurring instances, update firewall rules, antivirus signatures, and other security measures."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"56-recovery",children:"5.6 Recovery"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"As soon as feasible, return all services and operations to normal while maintaining the security and integrity of all data and systems."}),"\n",(0,s.jsx)(n.li,{children:"To ensure their security and operation, test the restored systems and apps."}),"\n",(0,s.jsx)(n.li,{children:"Inform all relevant parties\u2014staff, clients, and partners, for example\u2014about the progress of the healing process and any lingering effects."}),"\n",(0,s.jsx)(n.li,{children:"To find opportunities for process and procedure improvement in incident response, conduct post-event evaluations and identify lessons learned."}),"\n",(0,s.jsx)(n.li,{children:"Based on the lessons learned from the occurrence, update incident response plans, policies, and training materials."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"57-post--incident-review",children:"5.7 Post- Incident Review"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Keep a record of the incident response procedure, including deadlines, steps done, and results."}),"\n",(0,s.jsx)(n.li,{children:"Examine how well response activities worked and note any inadequacies or holes in incident response protocols."}),"\n",(0,s.jsx)(n.li,{children:"Have a lessons learned meeting with the incident response team and any pertinent parties to go over accomplishments, difficulties, and areas that may use improvement."}),"\n",(0,s.jsx)(n.li,{children:"Based on the results of the post-event evaluation, update the incident response paperwork, including the plans, processes, and contact lists."}),"\n",(0,s.jsx)(n.li,{children:"To strengthen the organization's overall security posture, share your observations and suggestions with upper management."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"6-terminology",children:"6. Terminology"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"intrusion detection system (IDS): An intrusion detection system (IDS) is a security instrument that keeps an eye on system or network activity for any illegal activity or policy infractions."}),"\n",(0,s.jsx)(n.li,{children:"Security Information and Event Management (SIEM): A solution called Security Information and Event Management (SIEM) offers in-the-moment security alarm analysis from network hardware and application sources."}),"\n",(0,s.jsx)(n.li,{children:"Vulnerability assessment: Vulnerability assessment is the procedure for locating, measuring, and ranking security holes in a system."}),"\n",(0,s.jsx)(n.li,{children:"Threat Intelligence: Information concerning possible or existing dangers to the security infrastructure of an organisation is known as threat intelligence."}),"\n",(0,s.jsx)(n.li,{children:"Zero-day vulnerabilities: Zero-day vulnerabilities are security holes in hardware or software that are not known to the developer or vendor, leaving attackers free to take advantage of them before a patch or remedy is made available."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4835:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/pirp2-flowchart-2c9318eadd74bb631392e90c791e1c19.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var s=i(6540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);