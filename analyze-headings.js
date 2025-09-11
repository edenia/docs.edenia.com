#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to analyze heading structure in a markdown file
function analyzeHeadings(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  const issues = [];
  let h1Count = 0;
  let h2Count = 0;
  let h3Count = 0;
  let lastHeadingLevel = 0;
  let lineNumber = 0;
  let inCodeBlock = false;
  
  for (const line of lines) {
    lineNumber++;
    
    // Check for code block markers
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    
    // Skip lines inside code blocks
    if (inCodeBlock) {
      continue;
    }
    
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      
      // Count heading levels
      if (level === 1) h1Count++;
      if (level === 2) h2Count++;
      if (level === 3) h3Count++;
      
      // Check for hierarchy jumps
      if (lastHeadingLevel > 0 && level > lastHeadingLevel + 1) {
        issues.push({
          type: 'hierarchy_jump',
          line: lineNumber,
          text: text,
          level: level,
          previousLevel: lastHeadingLevel,
          message: `Jumped from H${lastHeadingLevel} to H${level} - missing H${lastHeadingLevel + 1}`
        });
      }
      
      lastHeadingLevel = level;
    }
  }
  
  // Check for multiple H1s
  if (h1Count > 1) {
    issues.push({
      type: 'multiple_h1',
      count: h1Count,
      message: `Found ${h1Count} H1 tags - should be only 1`
    });
  }
  
  // Check for missing H1
  if (h1Count === 0) {
    issues.push({
      type: 'missing_h1',
      message: 'No H1 tag found - page needs a main title'
    });
  }
  
  // Check for H1 without H2
  if (h1Count === 1 && h2Count === 0) {
    issues.push({
      type: 'h1_without_h2',
      message: 'H1 found but no H2 tags - consider adding section headers'
    });
  }
  
  return {
    file: filePath,
    h1Count,
    h2Count,
    h3Count,
    issues,
    hasIssues: issues.length > 0
  };
}

// Function to scan all markdown files
function scanAllFiles() {
  const docsDir = path.join(__dirname, 'docs');
  const results = [];
  
  function scanDirectory(dir) {
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        scanDirectory(filePath);
      } else if (file.endsWith('.md') || file.endsWith('.mdx')) {
        try {
          const analysis = analyzeHeadings(filePath);
          results.push(analysis);
        } catch (error) {
          console.error(`Error analyzing ${filePath}:`, error.message);
        }
      }
    }
  }
  
  scanDirectory(docsDir);
  return results;
}

// Main execution
console.log('🔍 Analyzing heading hierarchy across all documentation files...\n');

const results = scanAllFiles();
const filesWithIssues = results.filter(r => r.hasIssues);

console.log(`📊 Analysis Summary:`);
console.log(`   Total files analyzed: ${results.length}`);
console.log(`   Files with issues: ${filesWithIssues.length}`);
console.log(`   Files without issues: ${results.length - filesWithIssues.length}\n`);

if (filesWithIssues.length > 0) {
  console.log('❌ Issues Found:\n');
  
  filesWithIssues.forEach(result => {
    console.log(`📄 ${result.file}`);
    console.log(`   H1: ${result.h1Count}, H2: ${result.h2Count}, H3: ${result.h3Count}`);
    
    result.issues.forEach(issue => {
      console.log(`   ❌ ${issue.type}: ${issue.message}`);
      if (issue.line) {
        console.log(`      Line ${issue.line}: ${issue.text}`);
      }
    });
    console.log('');
  });
  
  // Summary by issue type
  const issueTypes = {};
  filesWithIssues.forEach(result => {
    result.issues.forEach(issue => {
      issueTypes[issue.type] = (issueTypes[issue.type] || 0) + 1;
    });
  });
  
  console.log('📈 Issue Summary by Type:');
  Object.entries(issueTypes).forEach(([type, count]) => {
    console.log(`   ${type}: ${count} occurrences`);
  });
} else {
  console.log('✅ No heading hierarchy issues found!');
}

console.log('\n🎯 Recommended fixes:');
console.log('   1. Ensure each page has exactly one H1 tag');
console.log('   2. Follow progressive hierarchy: H1 → H2 → H3');
console.log('   3. Add missing H2 tags where H1 jumps to H3');
console.log('   4. Standardize heading formatting across all files');
