"use client"

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  date: string
  readingTime: number
  tags: string[]
  featured?: boolean
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "building-scalable-spring-boot-apis",
    title: "Building Scalable Spring Boot APIs",
    excerpt:
      "A comprehensive guide to designing and implementing high-performance REST APIs using Spring Boot, including best practices for authentication, caching, and database optimization.",
    content: `# Building Scalable Spring Boot APIs

Spring Boot has revolutionized how developers build Java applications. In this guide, we'll explore best practices for creating scalable, maintainable REST APIs.

## Core Principles

### 1. API Design
- Use RESTful conventions consistently
- Version your APIs appropriately
- Implement proper error handling and status codes

### 2. Authentication & Security
- Use JWT for stateless authentication
- Implement role-based access control (RBAC)
- Always validate and sanitize input

### 3. Database Optimization
- Use indexes wisely
- Implement pagination for large datasets
- Cache frequently accessed data

## Performance Considerations

### Caching Strategies
\`\`\`java
@Cacheable("users")
public User getUser(Long id) {
    return userRepository.findById(id).orElse(null);
}
\`\`\`

### Connection Pooling
Configure HikariCP for optimal database connection management with appropriate pool size based on your workload.

## Monitoring & Logging

Implement comprehensive logging and monitoring to track API performance, errors, and user behavior in production.

## Conclusion

Building scalable APIs requires attention to multiple aspects: design, security, performance, and monitoring. Focus on these fundamentals, and you'll create robust systems.`,
    date: "2024-01-15",
    readingTime: 8,
    tags: ["Spring Boot", "Java", "API Design", "Backend"],
    featured: true,
  },
  {
    id: "2",
    slug: "react-performance-optimization",
    title: "React Performance Optimization Tips",
    excerpt:
      "Master React performance optimization techniques including memoization, code splitting, and lazy loading to build fast, responsive applications.",
    content: `# React Performance Optimization Tips

Performance is crucial for user experience. Let's explore effective React optimization strategies.

## Code Splitting

### Dynamic Imports
\`\`\`jsx
const HeavyComponent = React.lazy(() => import('./HeavyComponent'));
\`\`\`

Lazy loading components ensures your initial bundle stays small.

## Memoization Techniques

### React.memo
Prevent unnecessary re-renders of child components by memoizing them.

### useMemo Hook
Cache expensive computations to avoid recalculation on every render.

\`\`\`jsx
const memoizedValue = useMemo(() => {
  return expensiveCalculation(a, b);
}, [a, b]);
\`\`\`

## Image Optimization

- Use Next.js Image component for automatic optimization
- Serve WebP format for modern browsers
- Implement responsive images with srcset

## Profiling & Monitoring

Use React DevTools Profiler to identify performance bottlenecks and track render times.

## Conclusion

Small optimizations compound into significant performance improvements. Profile regularly and optimize based on real-world data.`,
    date: "2024-01-10",
    readingTime: 6,
    tags: ["React", "Performance", "Frontend", "Optimization"],
    featured: true,
  },
  {
    id: "3",
    slug: "mongodb-best-practices",
    title: "MongoDB Best Practices for Production",
    excerpt:
      "Learn essential MongoDB best practices including schema design, indexing strategies, replication, and backup strategies for production environments.",
    content: `# MongoDB Best Practices for Production

MongoDB requires thoughtful design decisions for production deployments.

## Schema Design

### Document Structure
Design documents to match your application queries. Denormalize carefully to balance query efficiency with update complexity.

### Field Naming
Keep field names concise but meaningful.

\`\`\`javascript
// Good
{ userId: 123, userName: "john", createdAt: Date.now() }

// Avoid
{ user_id: 123, user_name: "john", created_at_timestamp: Date.now() }
\`\`\`

## Indexing Strategy

### Essential Indexes
- Index fields used in queries frequently
- Create compound indexes for multi-field queries
- Monitor index usage and remove unused indexes

## Replication & Backup

- Always use replication in production
- Implement automated daily backups
- Test restore procedures regularly

## Query Optimization

Use the explain() method to analyze query performance and identify optimization opportunities.

## Conclusion

Proper MongoDB setup requires attention to schema, indexing, and operations. Plan accordingly for production success.`,
    date: "2024-01-05",
    readingTime: 7,
    tags: ["MongoDB", "Database", "Backend"],
    featured: false,
  },
  {
    id: "4",
    slug: "tailwind-css-advanced-techniques",
    title: "Advanced Tailwind CSS Techniques",
    excerpt:
      "Explore advanced Tailwind CSS features including custom utilities, plugins, and techniques for building complex, maintainable designs.",
    content: `# Advanced Tailwind CSS Techniques

Tailwind CSS becomes powerful when you master its advanced features.

## Custom Configuration

### Extending the Default Theme
\`\`\`javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: '#007bff',
      },
    },
  },
}
\`\`\`

## Plugins

Create reusable component styles as plugins for your projects.

## Responsive Design

Use Tailwind's responsive prefixes effectively:
- \`sm:\` Mobile
- \`md:\` Tablet
- \`lg:\` Desktop
- \`xl:\` Large screens

## Dark Mode

Implement dark mode with minimal configuration:
\`\`\`jsx
<div className="bg-white dark:bg-slate-900">
  Content adapts to dark mode
</div>
\`\`\`

## Performance

- Use PurgeCSS to remove unused styles
- Tree-shake unused utilities
- Monitor bundle size

## Conclusion

Mastering Tailwind's advanced features enables efficient, scalable styling for modern web applications.`,
    date: "2023-12-28",
    readingTime: 5,
    tags: ["Tailwind", "CSS", "Frontend", "Design"],
    featured: true,
  },
]
