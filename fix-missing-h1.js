#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to add missing H1 to a markdown file
function addMissingH1(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  
  // Find frontmatter
  let frontmatterEnd = -1;
  let title = '';
  
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].trim() === '---') {
      if (frontmatterEnd === -1) {
        frontmatterEnd = i;
      } else {
        // Found end of frontmatter
        break;
      }
    } else if (lines[i].startsWith('title:')) {
      title = lines[i].replace('title:', '').trim().replace(/['"]/g, '');
    }
  }
  
  // Check if H1 already exists
  const hasH1 = lines.some(line => line.match(/^#\s/));
  if (hasH1) {
    return { success: false, reason: 'H1 already exists' };
  }
  
  // Add H1 after frontmatter
  if (title && frontmatterEnd >= 0) {
    const newLines = [...lines];
    newLines.splice(frontmatterEnd + 1, 0, '', `# ${title}`, '');
    
    fs.writeFileSync(filePath, newLines.join('\n'), 'utf8');
    return { success: true, title };
  }
  
  return { success: false, reason: 'No title found in frontmatter' };
}

// Function to process files with missing H1
function processMissingH1Files() {
  const filesToFix = [
    'docs/agile-methodologies.md',
    'docs/blockchain-web3/base.md',
    'docs/blockchain-web3/bitcoin.md',
    'docs/blockchain-web3/bsc.md',
    'docs/blockchain-web3/ethereum.md',
    'docs/blockchain-web3/index.md',
    'docs/blockchain-web3/libre.md',
    'docs/blockchain-web3/lightning.md',
    'docs/blockchain-web3/metamaskChainConnection.md',
    'docs/blockchain-web3/nimiq.md',
    'docs/blockchain-web3/nostr.md',
    'docs/blockchain-web3/polygon.md',
    'docs/blockchain-web3/rwa.io.md',
    'docs/boilerplate.md',
    'docs/community-resources/blog-posts.md',
    'docs/community-resources/edenia-podcasts.md',
    'docs/community-resources/telegram-channels.md',
    'docs/community-resources/useful-links.md',
    'docs/consensus-mechanisms-blockchain.md',
    'docs/developer-tools-ux-ui.md',
    'docs/developer-tools.md',
    'docs/devops.md',
    'docs/engineering-culture.md',
    'docs/flight-methodology.md',
    'docs/interplanetary-file-system.md',
    'docs/material-ui.md',
    'docs/open-source-guidelines.md',
    'docs/open-source-projects.mdx',
    'docs/pair-mob-programming.md',
    'docs/social-media-guidelines.md',
    'docs/tools/block-explorers.md',
    'docs/tools/command-line.md',
    'docs/tools/eosio-sdk-libraries.md',
    'docs/tools/frequently-asked-questions.md',
    'docs/tools/glossary.md',
    'docs/tools/nodeos-command-line-reference.md',
    'docs/tools/readme-file-template.md',
    'docs/tutorials/docker.md',
    'docs/tutorials/github-guide.md',
    'docs/tutorials/github-keys.md',
    'docs/tutorials/graphql-tutorial.md',
    'docs/tutorials/hello-world-contract.md',
    'docs/tutorials/how-to-mint.mdx',
    'docs/tutorials/how-to-publish-packages.md',
    'docs/tutorials/kubernetes.md',
    'docs/tutorials/markdown-guide.md',
    'docs/tutorials/modern-cpp.md',
    'docs/tutorials/private-network-installation.md',
    'docs/tutorials/react-tutorial.md',
    'docs/tutorials/workflow-tutorial.md',
    'docs/visual-resources.md',
    'docs/web-app-boilerplate.md'
  ];
  
  const results = [];
  
  for (const file of filesToFix) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
      try {
        const result = addMissingH1(filePath);
        results.push({ file, ...result });
      } catch (error) {
        results.push({ file, success: false, reason: error.message });
      }
    }
  }
  
  return results;
}

// Main execution
console.log('🔧 Adding missing H1 tags to documentation files...\n');

const results = processMissingH1Files();
const successful = results.filter(r => r.success);
const failed = results.filter(r => !r.success);

console.log(`📊 Results:`);
console.log(`   Files processed: ${results.length}`);
console.log(`   Successfully fixed: ${successful.length}`);
console.log(`   Failed: ${failed.length}\n`);

if (successful.length > 0) {
  console.log('✅ Successfully added H1 tags:');
  successful.forEach(result => {
    console.log(`   ${result.file} → "${result.title}"`);
  });
  console.log('');
}

if (failed.length > 0) {
  console.log('❌ Failed to add H1 tags:');
  failed.forEach(result => {
    console.log(`   ${result.file}: ${result.reason}`);
  });
  console.log('');
}

console.log('🎯 Next steps:');
console.log('   1. Review the added H1 tags');
console.log('   2. Run the heading analysis again');
console.log('   3. Fix any remaining hierarchy issues');
