# Cursor Rules - Technical Documentation

This directory contains the modular rule system for Cursor AI integration in the Sistemas Edenia Documentation project.

## How Cursor Loads Rules

According to [Cursor's official documentation](https://cursor.com/docs/context/rules):

1. **`.cursorrules`** (root) - Loaded as main reference file
2. **`.cursor/rules/*.md`** - Automatically loaded when they include frontmatter

## File Structure

```
.cursor/rules/
├── 01-documentation-standards.md
├── 02-technical-standards.md
├── 03-content-guidelines.md
├── 04-brand-style-guidelines.md
├── 05-quality-assurance.md
├── 06-ai-assistant-guidelines.md
└── 07-special-considerations.md
```

## Frontmatter Metadata

Each rule file **must** include frontmatter for Cursor to load it:

```yaml
---
description: Brief description of the rule
globs:
  - "**/*.md"     # File patterns to apply rule
  - "**/*.js"
alwaysApply: true  # Always apply regardless of file type
---
```

### Frontmatter Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `description` | string | Yes | Brief description of rule scope |
| `globs` | array | No | File patterns where rule applies (glob format) |
| `alwaysApply` | boolean | No | If true, applies to all files |

## Glob Patterns

Common patterns used:
- `"**/*.md"` - All markdown files
- `"**/*.{js,jsx,ts,tsx}"` - All JavaScript/TypeScript files
- `"docs/**"` - Files in docs directory

## Maintenance Workflow

### Adding a New Rule
1. Create new `.md` file in `.cursor/rules/`
2. Add frontmatter with description and globs
3. Write rule content in markdown
4. Update `.cursorrules` index if needed
5. Test with Cursor AI

### Updating Existing Rules
1. Edit the specific rule file in `.cursor/rules/`
2. Update frontmatter if scope changes
3. Update `.cursorrules` if core principles change
4. Cursor reloads automatically

### Removing Rules
1. Delete the rule file from `.cursor/rules/`
2. Update `.cursorrules` index
3. Cursor will stop loading it automatically

## Testing Rules

To verify rules are loaded:
1. Open Cursor
2. Start a chat with AI
3. Ask: "What rules apply to this project?"
4. AI should reference the modular rules

## Version Control

All rule files are tracked in git:
- Changes are versioned
- Team members get updates via git pull
- Rules are part of project documentation

---

**For rule content**, see individual files or the main `.cursorrules` file.

