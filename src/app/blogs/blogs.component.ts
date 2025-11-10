import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  published: boolean;
}

@Component({
  selector: 'app-blogs',
  imports: [CommonModule, RouterModule],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss'
})
export class BlogsComponent {
  selectedCategory: string = '';

  // This will be populated with your blog posts in the future
  readonly blogPosts: BlogPost[] = [
    // Example structure - you can add your blog posts here
    // {
    //   id: '1',
    //   title: 'Getting Started with Angular 20',
    //   excerpt: 'Learn about the latest features in Angular 20 and how to get started with this powerful framework.',
    //   date: '2024-01-15',
    //   readTime: '5 min read',
    //   category: 'Angular',
    //   tags: ['Angular', 'Frontend', 'Tutorial'],
    //   published: true
    // }
  ];

  get publishedPosts(): BlogPost[] {
    return this.blogPosts.filter(post => post.published);
  }

  getCategories(): string[] {
    return Array.from(new Set(this.publishedPosts.map(post => post.category)));
  }

  getPostsByCategory(category: string): BlogPost[] {
    return this.publishedPosts.filter(post => post.category === category);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}

