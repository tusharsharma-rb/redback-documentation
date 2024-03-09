"use strict";(self.webpackChunkredback_documentation=self.webpackChunkredback_documentation||[]).push([[100],{5025:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(4848),i=n(8453);const o={sidebar_position:2},s="Github Org Guide",a={id:"onboarding/github-org-guide",title:"Github Org Guide",description:"Redback GitHub structure",source:"@site/docs/onboarding/github-org-guide.md",sourceDirName:"onboarding",slug:"/onboarding/github-org-guide",permalink:"/redback-documentation/docs/docs/onboarding/github-org-guide",draft:!1,unlisted:!1,editUrl:"https://github.com/Redback-Operations/redback-documentation/blob/main/docs/onboarding/github-org-guide.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Company Profile",permalink:"/redback-documentation/docs/docs/onboarding/company-profile"}},d={},l=[{value:"Rationale",id:"rationale",level:2},{value:"Benefits - why are we using an org?",id:"benefits---why-are-we-using-an-org",level:3},{value:"Guiding Principles",id:"guiding-principles",level:3},{value:"Key Terms",id:"key-terms",level:2},{value:"How-to, the short version: Repository health checklist",id:"how-to-the-short-version-repository-health-checklist",level:2},{value:"How-to, the long version: Creating a new repository or checking an existing one",id:"how-to-the-long-version-creating-a-new-repository-or-checking-an-existing-one",level:2},{value:"Prerequities",id:"prerequities",level:3},{value:"Getting started",id:"getting-started",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"github-org-guide",children:"Github Org Guide"}),"\n",(0,r.jsx)(t.p,{children:"Redback GitHub structure"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Last edited:"})," 9 March, 2024. ",(0,r.jsx)(t.strong,{children:"Author:"})," Leesa Ward."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"rationale",children:"Rationale"}),"\n",(0,r.jsx)(t.h3,{id:"benefits---why-are-we-using-an-org",children:"Benefits - why are we using an org?"}),"\n",(0,r.jsx)(t.p,{children:"Using a GitHub Organisation allows us to:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Have multiple people create and manage repositories in a central location (not in personal accounts), allowing\r\nRedback to have separate repositories for each application or other codebase being developed without the tutor(s)\r\nmanaging the GitHub account having to do this or work being scattered across students\u2019 personal accounts."}),"\n",(0,r.jsx)(t.li,{children:"Through having multiple repositories, keep code appropriately separated so that students only download what\r\nthey want to work on to their machines (not huge repositories full of work they\u2019ll never touch), and can just look\r\nat pull requests and issues for what they\u2019re working on or are interested in."}),"\n",(0,r.jsx)(t.li,{children:"Easily archive repositories at the beginning or end of a trimester if work will not be continuing using that\r\nrepository, making it clear which codebases are currently active and should be used."}),"\n",(0,r.jsx)(t.li,{children:"Maintain dependencies more easily because students can be confident that any changes will only affect their\r\nproject, as well as not needlessly maintaining dependencies for sub-folders containing applications that aren\u2019t\r\nbeing worked on anymore."}),"\n",(0,r.jsx)(t.li,{children:"Onboard students more easily because they are able to locate the purpose-built repository they want to work on\r\nand (quality documentation assumed) clone and run it with minimal guidance and no confusion about where the\r\ncurrent and correct code is for their project and which instructions are relevant to them."}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"guiding-principles",children:"Guiding Principles"}),"\n",(0,r.jsx)(t.p,{children:"This rationale and the following guidelines are based on the principles of:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ensuring our projects closely resemble how things are done in the industry."}),"\n",(0,r.jsx)(t.li,{children:"Enabling students to onboard as easily as possible."}),"\n",(0,r.jsx)(t.li,{children:"Empowering students to contribute and take ownership of their capstone project work."}),"\n",(0,r.jsx)(t.li,{children:"Facilitating easy handover and project continuity between trimesters."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"key-terms",children:"Key Terms"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Repository:"})," A Git repository is a central location for storing, managing, and tracking changes in files and directories\r\nfor code-based projects. In some contexts, you may hear or see \u2018repository\u2019 and \u2018project\u2019 used interchangeably because\r\na single project may have a single repository for its code. If a repository contains the code for a web app, mobile app,\r\ndata manipulation library, etc that is being developed by Redback, terms like \u2018app\u2019 or \u2018library\u2019 may also be\r\ninterchangeable (e.g., \u2018Go and clone the app from GitHub\u2019)."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Project:"})," Redback Operations has a handful of projects running at any one time, and some projects may involve\r\nworking on more than one repository. It is strongly encouraged to be mindful about when it is appropriate to create a\r\nnew repository, striking a balance between: forking or branching from an existing one so that we don\u2019t end up with\r\nneedlessly divergent work and confusing amounts of repositories, and keeping codebases usefully siloed and not\r\nending up with a single repository that tries to do to many things"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Member:"})," Students and tutors can be added as organisation members. It is important to note that members can create\r\nrepositories within the organisation and by default are the administrators of the repositories they create."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Collaborator:"})," Students can be added to individual repositories as collaborators. This enables them to be given\r\nappropriate permissions for the work they will be doing without the ability to create or manage repositories also\r\nbeing given by default."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Team:"})," Each Redback project has a Team within the GitHub organisation that contains tutors, project leaders, and\r\nexperienced students who will be managing repos, approving pull requests, etc. Teams can also be @ mentioned in\r\nissues, pull requests, and comments to notify those staff and students that their attention is required. Assigning\r\nrepositories to a Team also simplifies managing repository permissions across trimesters \u2013 people only need to be\r\nadded to or removed from a team to have access to that Team\u2019s repositories granted or revoked. There is also a Tutors\r\nteam that should be added to every new repository with admin permissions."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-the-short-version-repository-health-checklist",children:"How-to, the short version: Repository health checklist"}),"\n",(0,r.jsx)(t.p,{children:"If you\u2019re already familiar with GitHub and the org concepts outlined above, here\u2019s the short version of the guidelines\r\nyou should ensure your Redback repository follows."}),"\n",(0,r.jsx)(t.p,{children:"If you are a leader taking on an existing repository, you should also check it at the start of the trimester to ensure these\r\nguidelines are followed."}),"\n",(0,r.jsx)(t.p,{children:"More information about each setting is detailed in the \u2018Long version\u2019 section starting on the next page."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Name"})}),(0,r.jsxs)(t.td,{children:["\u2713 Clearly but concisely says what the repo is for ",(0,r.jsx)("br",{})," \u2713 Does not include information that could change in future trimesters",(0,r.jsx)("sup",{children:"1"})," ",(0,r.jsx)("br",{})," \u2713 Does not include trimester number or year",(0,r.jsx)("sup",{children:"1"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Description"})}),(0,r.jsx)(t.td,{children:"\u2713 Is filled in with a concise description that enables new students to quickly understand which project(s), or part of a project, the repository is for"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Visibility"})}),(0,r.jsxs)(t.td,{children:["\u2713 Private for cyber security projects ",(0,r.jsx)("br",{})," \u2713 Public for all others"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Licence"})}),(0,r.jsxs)(t.td,{children:["\u2713 MIT for all open source (i.e., non-Cyber Security) projects",(0,r.jsx)("sup",{children:"2"})]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Permissions"})}),(0,r.jsxs)(t.td,{children:["\u2713 Tutors team has admin role ",(0,r.jsx)("br",{})," \u2713 Project team has write role ",(0,r.jsx)("br",{})," \u2713 Contributing students have write role"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"Branch protection"})}),(0,r.jsxs)(t.td,{children:["\u2713 Main branch cannot be directly pushed to ",(0,r.jsx)("br",{})," \u2713 Pull request approvals are required"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"CODEOWNERS file"})}),(0,r.jsx)(t.td,{children:"\u2713 File exists in the root of the repository and designates the Tutors and project teams as the global code owners"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.strong,{children:"README file"})}),(0,r.jsxs)(t.td,{children:["\u2713 Contains description of the project ",(0,r.jsx)("br",{})," \u2713 Contains prerequisites for running the code ",(0,r.jsx)("br",{})," \u2713 Contains clear instructions to enable students to independently set up and start working on the codebase"]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)("sup",{children:"1"}),"To encourage continuity of projects across trimesters, generic non-time-specific names are encouraged. Using internal\r\ndesignations like \u2018Project 4\u2019 is also discouraged because the projects might be consolidated or split up in future trimesters.",(0,r.jsx)("br",{}),"\r\n",(0,r.jsx)("sup",{children:"2"}),"Unless there is a reason to use a different licence, such as a project dependency having licence terms that require the work using it\r\nto have another licence."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-the-long-version-creating-a-new-repository-or-checking-an-existing-one",children:"How-to, the long version: Creating a new repository or checking an existing one"}),"\n",(0,r.jsx)(t.p,{children:"If you have an existing repository that you would like to check over or update, skip ahead to the \u2018General Settings\u2019 section below."}),"\n",(0,r.jsx)(t.h3,{id:"prerequities",children:"Prerequities"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["You have at least the ",(0,r.jsx)(t.strong,{children:"Member"})," role in the GitHub Org."]}),"\n",(0,r.jsxs)(t.li,{children:["Consensus has been reached within the ",(0,r.jsx)(t.strong,{children:"Project"})," team (at university level, not GitHub level) and with project leaders that a new repository is needed."]}),"\n",(0,r.jsxs)(t.li,{children:["A ",(0,r.jsx)(t.strong,{children:"GitHub Team"})," exists for the Redback ",(0,r.jsx)(t.strong,{children:"Project"})," this repository will be for."]}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"getting-started",children:"Getting started"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Go to the ",(0,r.jsx)(t.a,{href:"https://github.com/orgs/Redback-Operations/repositories",children:"Repositories tab on the org page"})," and click the \u2018New Repository\u2019 button."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"Still updating"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const i={},o=r.createContext(i);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);