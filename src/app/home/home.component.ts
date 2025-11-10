import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  title: string;
  company: string;
  employment: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
}

interface Skill {
  name: string;
  category: string;
}

interface Achievement {
  title: string;
  description: string;
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  readonly professionalSummary = {
    title: 'Front-End Technical Lead',
    experience: '13+ years',
    description: [
      'Front-End Technical Lead with 13+ years of experience driving digital transformation for global banking and financial institutions across Belgium, Singapore, Mexico, and India.',
      'Specialized in designing and delivering secure, API-integrated, and accessible web applications using modern frameworks such as Angular.',
      'Expert in web accessibility (WCAG/ARIA), secure coding, performance optimization, and backend API integration. Skilled in leading distributed teams, mentoring engineers, and collaborating across business, UX, and backend domains.',
    ]
  };

  readonly experiences: Experience[] = [
    {
      title: 'Tech Lead / UI Developer',
      company: 'Proximus',
      employment: 'employed via Tata Consultancy Services',
      period: '11/2024 - Present',
      location: 'Belgium',
      description: 'Proximus – Belgium\'s leading telecom and digital services provider',
      responsibilities: [
        'Led front-end development and integration with backend REST APIs for internal connectivity validation platforms.',
        'Owned effort estimations, technical feasibility analysis, and new front-end proposals for internal web applications.',
        'Collaborated with UI/UX teams to translate Figma designs into responsive, accessible web applications.',
        'Implemented OAuth-based authentication for secure access',
        'Ensured WCAG/ARIA compliance, secure coding, and performance optimization.',
        'Mentored junior developers, conducted code reviews, and established shared UI best practices.'
      ]
    },
    {
      title: 'Lead UI Developer',
      company: 'Deutsche Bank',
      employment: 'employed via Tata Consultancy Services',
      period: '12/2022 - 10/2024',
      location: 'Belgium',
      description: 'Global financial institution specializing in banking and investment services',
      responsibilities: [
        'Led a 5-member UI team developing Angular 16 applications integrated with backend microservices.',
        'Designed reusable modules and API integration layers to streamline data exchange between UI and server.',
        'Collaborated with product owners and architects to define UI architecture and delivery roadmap.',
        'Implemented CI/CD pipelines using TeamCity',
        'Participated in agile ceremonies (sprint planning, retrospectives, standups) promoting collaboration and delivery excellence.'
      ]
    },
    {
      title: 'UI Lead / Developer',
      company: 'Citi Bank Singapore',
      employment: 'employed via Tata Consultancy Services',
      period: '06/2019 - 11/2022',
      location: 'Chennai, India',
      description: 'Regional hub for Citigroup\'s Asia and EMEA digital banking',
      responsibilities: [
        'Managed a 10-member team delivering applications for 14 countries (APAC & EMEA).',
        'Coordinated with regional backend teams to integrate APIs supporting financial data, transactions, and localization.',
        'Delivered Angular-based applications for 14 countries across APAC and EMEA.',
        'Partnered with UX designers and business analysts to ensure consistency and compliance with regional standards.'
      ]
    }
  ];

  readonly skills: Skill[] = [
    { name: 'Angular', category: 'Framework' },
    { name: 'Javascript', category: 'Language' },
    { name: 'Typescript', category: 'Language' },
    { name: 'Express js', category: 'Backend' },
    { name: 'Node js', category: 'Backend' },
    { name: 'Langchain js', category: 'Library' },
    { name: 'React js', category: 'Framework' },
    { name: 'Rxjs', category: 'Library' },
    { name: 'HTML', category: 'Markup' },
    { name: 'CSS', category: 'Styling' },
    { name: 'SCSS', category: 'Styling' },
    { name: 'Webpack', category: 'Build Tool' },
    { name: 'Bootstrap', category: 'Framework' },
    { name: 'Web Accessibility', category: 'Expertise' },
    { name: 'Web security', category: 'Expertise' },
    { name: 'RWD', category: 'Expertise' },
    { name: 'Jest', category: 'Testing' },
    { name: 'Web components', category: 'Technology' }
  ];

  readonly achievements: Achievement[] = [
    {
      title: 'Reusable Component Libraries',
      description: 'Designed reusable component libraries which helped in accelerating feature delivery by 20–25%.'
    },
    {
      title: 'Multi-Country UI Delivery',
      description: 'Led UI delivery across 14 countries (APAC & EMEA) for Citi Bank, consolidating regional requirements into a single Angular codebase, reducing maintenance effort by 30%.'
    },
    {
      title: 'OAuth Authentication Implementation',
      description: 'Integrated OAuth-based authentication in Proximus internal web apps, improving security and compliance.'
    },
    {
      title: 'Global Platform Delivery',
      description: 'Delivered high-performing front-end platforms across APAC, EMEA, and LATAM, leading multicultural teams up to 10 engineers.'
    }
  ];

  getSkillsByCategory(category: string): Skill[] {
    return this.skills.filter(skill => skill.category === category);
  }

  getCategories(): string[] {
    return Array.from(new Set(this.skills.map(skill => skill.category)));
  }
}

