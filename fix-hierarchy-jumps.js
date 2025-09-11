#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix hierarchy jumps in a markdown file
function fixHierarchyJumps(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let modified = false;
  const newLines = [];
  let inCodeBlock = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for code block markers
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    // Skip lines inside code blocks
    if (inCodeBlock) {
      newLines.push(line);
      continue;
    }
    
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      
      // Check if this is a H3 that should be H2 (common pattern)
      if (level === 3 && text.includes('Key Features of')) {
        // Convert H3 to H2
        newLines.push(`## ${text}`);
        modified = true;
        continue;
      }
      
      // Check if this is a H3 that should be H2 (common pattern)
      if (level === 3 && (text.includes('Overview') || text.includes('Introduction'))) {
        // Convert H3 to H2
        newLines.push(`## ${text}`);
        modified = true;
        continue;
      }
      
      // Check for H4 that should be H3 (common pattern)
      if (level === 4 && text.includes('.')) {
        // Convert H4 to H3
        newLines.push(`### ${text}`);
        modified = true;
        continue;
      }
    }
    
    newLines.push(line);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    return { success: true, changes: 'Fixed hierarchy jumps' };
  }
  
  return { success: false, reason: 'No changes needed' };
}

// Function to add H2 sections where H1 jumps to H3
function addMissingH2Sections(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  let modified = false;
  const newLines = [];
  let inCodeBlock = false;
  let lastHeadingLevel = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for code block markers
    if (line.trim().startsWith('```')) {
      inCodeBlock = !inCodeBlock;
      newLines.push(line);
      continue;
    }
    
    // Skip lines inside code blocks
    if (inCodeBlock) {
      newLines.push(line);
      continue;
    }
    
    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2].trim();
      
      // If we jump from H1 to H3, add a general H2 section
      if (lastHeadingLevel === 1 && level === 3) {
        // Add a general H2 section before the H3
        newLines.push('## Overview');
        newLines.push('');
        modified = true;
      }
      
      lastHeadingLevel = level;
    }
    
    newLines.push(line);
  }
  
  if (modified) {
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    return { success: true, changes: 'Added missing H2 sections' };
  }
  
  return { success: false, reason: 'No changes needed' };
}

// Function to process files with hierarchy issues
function processHierarchyFiles() {
  const filesToFix = [
    'docs/blockchain-web3/base.md',
    'docs/blockchain-web3/bitcoin.md',
    'docs/blockchain-web3/bsc.md',
    'docs/blockchain-web3/ethereum.md',
    'docs/blockchain-web3/libre.md',
    'docs/blockchain-web3/lightning.md',
    'docs/blockchain-web3/nimiq.md',
    'docs/blockchain-web3/nostr.md',
    'docs/blockchain-web3/polygon.md',
    'docs/blockchain-web3/rwa.io.md',
    'docs/community-resources/useful-links.md',
    'docs/open-source-guidelines.md',
    'docs/tools/command-line.md',
    'docs/tools/readme-file-template.md'
  ];
  
  const results = [];
  
  for (const file of filesToFix) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      try {
        // First try to fix hierarchy jumps
        const jumpResult = fixHierarchyJumps(filePath);
        if (jumpResult.success) {
          results.push({ file, ...jumpResult });
          continue;
        }
        
        // Then try to add missing H2 sections
        const h2Result = addMissingH2Sections(filePath);
        results.push({ file, ...h2Result });
      } catch (error) {
        results.push({ file, success: false, reason: error.message });
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🔧 Fixing hierarchy jumps in documentation files...\n');

const results = processHierarchyFiles();
const successful = results.filter(r => r.success);
const failed = results.filter(r => !r.success);

console.log(`📊 Results:`);
console.log(`   Files processed: ${results.length}`);
console.log(`   Successfully fixed: ${successful.length}`);
console.log(`   No changes needed: ${failed.length}\n`);

if (successful.length > 0) {
  console.log('✅ Successfully fixed hierarchy:');
  successful.forEach(result => {
    console.log(`   ${result.file}: ${result.changes}`);
  });
  console.log('');
}

if (failed.length > 0) {
  console.log('ℹ️  No changes needed:');
  failed.forEach(result => {
    console.log(`   ${result.file}: ${result.reason}`);
  });
  console.log('');
}

console.log('🎯 Next steps:');
console.log('   1. Run the heading analysis again');
console.log('   2. Fix any remaining issues manually');
console.log('   3. Test the final hierarchy');
