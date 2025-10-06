---
description: Documentation standards for file structure, frontmatter, content writing, code examples, and internationalization
globs:
  - "**/*.md"
  - "**/*.mdx"
alwaysApply: true
---

# Documentation Standards

## File Structure & Organization
- Follow the established directory structure: docs/ for English, i18n/es/ for Spanish
- Maintain parallel structure between English and Spanish versions
- Use kebab-case for file names (e.g., artificial-intelligence.md, not artificialIntelligence.md)
- Place images in /static/img/ with descriptive names
- Use proper Docusaurus frontmatter for all documentation files

## Frontmatter Requirements
- Always include: id, title, description, keywords
- Use sidebar_position for proper ordering
- Include sidebar_label when different from title
- Add proper keywords array for SEO optimization
- Follow the established pattern for multilingual content

## Content Writing Standards
- Write in clear, professional English/Spanish
- Spanish content must use formal "usted" form (not "tú")
- Use active voice and present tense
- Include practical examples and code snippets
- Add relevant images and diagrams when helpful
- Maintain consistent tone across all documentation
- Use proper markdown formatting with headers, lists, and code blocks

## Code Examples & Snippets
- Use appropriate language tags for syntax highlighting
- Include comments explaining complex code
- Provide complete, runnable examples when possible
- Use consistent indentation (2 spaces for JS/TS, 4 spaces for others)
- Include error handling in code examples

## Internationalization (i18n)
- Maintain identical structure between English and Spanish versions
- Translate all content accurately, not just literally
- Keep technical terms consistent across languages
- Use proper Spanish technical terminology
- Always use formal Spanish ("usted" form) in all Spanish content
- Maintain cultural context appropriate for Costa Rica/Latin America

