// tslint:disable: max-line-length
import { ResumeItemModel } from '../interfaces/resume-item-model';

export const RESUME_ITEMS: ResumeItemModel[] = [
  {
    businessName: 'Homeward',
    position: 'Senior Software Engineer',
    years: 'May 2022 - Present',
    description: {
      items: [
        'Regularly mentored more junior engineers by sharing domain-specific and general software design best practices in a weekly “brown bag” session',
        'Owned and drove Feature Development Lifecycle from loose requirements to completed feature by: forming cross-functional teams, designing high level software systems, establishing consensus on cross-component interfaces, removing blockers, and testing',
        'Improved Developer Experience by creating code generation tooling to align disparate coding standards across a large-scale, 3 year old React codebase',
        'Improved the new engineer onboarding process by refactoring existing code to more closely align with tried-and-true Software Design Patterns, removing layers of indirection, and following current React best practices',
        'Implemented a client-side feature-bound dynamic form service, complete with localized state engine',
      ]
    }
  },
  {
    businessName: 'Liquibase',
    position: 'Manager of Front End Development',
    years: 'July 2021 - May 2022',
    description: {
      items: [
        'Managed a team of 5 direct reports including Backend and Frontend Engineers',
        'Owned the process of coordinating and implementing all initiatives across a continuum of products geared towards progressive customer adoption',
        'Coached direct reports up the career ladder and onto further success in new roles',
        'Continued to maintain the role of Lead Engineer for all web-based applications',
        'Worked directly with the Senior Management team to identify and delegate initiatives that aligned with business objectives',
        'Consulted with the Design department to continuously improve the design system I implemented in my prior role at the company',
        'Participated in Ceresa Leadership Mentor program',
      ]
    }
  },
  {
    businessName: 'Liquibase (formerly Datical)',
    position: 'Front End Developer',
    years: 'June 2019 - July 2021',
    description: {
      items: [
        'Project Lead and key contributor for Liquibase Hub, a web-based platform that served as the intersection between our suite of On-Prem and Open Source software',
        'Key contributor to new architectural platform instrumental in our rebranding as Liquibase',
        'Lead many Hackathon teams to great successes including an NPM wrapper around our core Open Source project, increasing our monthly active user base by >30,000',
        'Aligned the “look-and-feel” of our web applications through a prescriptive design system that improved Developer Velocity and Customer Experience',
        'Refactored established software product built with Angular to see an 81% improvement in First Contentful Paint',
        'Authored a number of libraries (some of which were open sourced) to augment @angular/material component behaviors',
        'Authored several blog posts detailing best practices for using Liquibase in a Node context',
        'Completed leadership course offered by MIT Sloan',
        'Maintained all web properties, provided consultation to internal teams, assisted in prototyping greenfield projects',
      ]
    }
  },
  {
    businessName: 'The Appraisal Lane',
    position: 'Front End Developer',
    years: 'September 2017 - June 2019',
    description: {
      items: [
        'Developed interactive “Stepper” and Chat feature for our Retail acquisition platform that served as the Customer’s portal into our Native and Web application system',
        'Maintained and eventually migrated legacy AngularJS Web Application',
        'Developed Backend services for delivering client-agnostic web content (Android, iOS and Web)',
        'Developed Landing Pages and HTML email templates for annual industry events',
        'Core contributor for Retail and Acquisition WebApp platforms',
        'Core contributor for web based disposition platform',
        'Authored BE service for delivering fully responsive client-agnostic web content',
        'Refactored Retail web app layout for responsive design',
        'Authored photo upload service for retail web app',
        'Implemented live chat service in retail web app',
        'Implemented live progress updates in retail platform'
      ]
    }
  },
  {
    businessName: 'The Appraisal Lane',
    position: 'Support/QA Developer',
    years: 'May 2017 - September 2017',
    description: {
      items: [
        'Developed automated E2E test suites for new retail product',
        'Developed and Deployed an E2E test result notification Hipchat (and later) Slack bot',
        'Developed and Deployed a browser extension that augmented our internal appraisal web app',
        'Created landing pages for industry events',
        'Updated and created new email templates for our core product',
        'Automated our customer onboarding process',
        'Developed CLI tool for automating End of Sprint metrics and demos',
        'Bootstrapped the Support wing of The Appraisal Lane',
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'AR Specialist',
    years: 'September 2016 - May 2017',
    description: {
      items: [
        'Developed Excel VBA macro for auditing monthly billing invoices',
        'Worked with Business Development department leads to automate our most common billing scenarios',
        'Developed VBA macros for building customer facing invoice documents',
        'Trained new hires'
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Project Coordinator',
    years: 'March 2015 - September 2016',
    description: {
      items: [
        'Consistently averaged a ‘post-ink’ margin increase of 30%',
        'Automated the account onboarding process for my account portfolio',
        'Continued maintenance of the sales incentive web tool',
        'Rollout of sales incentive web tool to Project Management department'
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Service Dispatch Coordinator',
    years: 'May 2014 - March 2015',
    description: {
      simple: 'Developed a web based tool that:',
      items: [
        'Generated 1.1 million in revenue for 2016',
        'Streamlined a sales incentive process by removing unnecessary steps pain points',
        'Removed the need for all paperwork and moved form entry online (yay trees!)',
        'Delivered status update emails on each phase of the program cycle',
        'Delivered a periodic emails reports with regional granularity'
      ]
    }
  },
  {
    businessName: 'Mood Media',
    position: 'Client Satisfaction Professional',
    years: 'February 2014 - April 2014',
    description: {
      items: [
        'One of three team leads for a training class of roughly 20',
        'Developed a handful of web-based tools for sharing techniques/tips/tricks',
        'Quickly promoted to new position based on performance',
      ]
    }
  },
  {
    businessName: 'Open Labs',
    position: 'RMA Technician',
    years: '2012 - 2014',
    description: {
      items: [
        'Used downtime and after hours to help QA their Interactive Music Creation Software, Stagelight (now Roland Zenbeats)',
        'Authored deployment scripts to help quickly churn out new hardware builds',
      ]
    }
  },
];
