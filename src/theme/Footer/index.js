/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, { useEffect, useState } from 'react'
 import clsx from 'clsx';
 import { useColorMode } from '@docusaurus/theme-common';
 import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
 import useBaseUrl from '@docusaurus/useBaseUrl';
 import styles from './styles.module.css';
 import edeniaLogo from '../../../static/img/EdeniaLogo.png'
 import { Box, Grid, Container, Link} from '@mui/material';
 import Translate from '@docusaurus/Translate';
  
 const FooterLogo = ({ url, alt }) => (
   <img className="footer__logo" alt={alt} src={url} width='225' height='60' loading="lazy" />
 );
 
 function Footer() {
   const context = useDocusaurusContext();
   const { siteConfig = {} } = context;
   const { themeConfig = {} } = siteConfig;
   const { footer } = themeConfig;
   const { copyright, logo = {} } = footer || {};
   const [logoUrl, setLogoUrl] = useState(useBaseUrl(logo.src));
   const { colorMode } = useColorMode();
  
   if (!footer) {
     return null;
   }
 
   useEffect(() => {
     setLogoUrl(edeniaLogo)
   }, [colorMode]);
 
   return (
     <Box className={clsx('styles.footerLight', styles.bordertop, {'styles.footerDark': footer.style === 'dark'})}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            {/* Logo Section */}
            <Grid item xs={12} md={4}>
               <Box align='center' className={styles.footerLogo}>
                 <a href={logo.href}>
                   <FooterLogo alt={logo.alt} url={logoUrl} />
                 </a>
                 {copyright ? <div>Copyright &reg; {new Date().getFullYear()}  <a title="Edenia Web3 Development" href="https://edenia.com" target="_blank">EDENIA</a></div> : null}
                </Box>
             </Grid>
             
             {/* Content Sections */}
             <Grid item xs={12} md={8}>
               <Box className={styles.lineas}>
                 <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                     <Box className={styles.borderleft}>
                       <Box>
                       <h4><Translate id="footer.sistemasEdenia">Sistemas Edenia</Translate></h4>
                       </Box>
                       <Box>
                         <Link href="https://docs.edenia.com/docs/engineering-culture" color="inherit">
                          <Translate id="footer.engineeringCulture">Engineering Culture</Translate>
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://docs.edenia.com/docs/open-source-projects" color="inherit">
                           <Translate id="footer.openSourceProjects">Open Source Projects</Translate>
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://docs.edenia.com/docs/open-source-guidelines" color="inherit">
                           <Translate id="footer.openSourceGuidelines">Open Source Guidelines</Translate>
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={4}>
                     <Box className={styles.bordermid}>
                       <Box>
                        <h4><Translate id="footer.community">Community</Translate></h4>
                        </Box>
                       <Box>
                         <Link href="https://t.me/eoscr" color="inherit">
                           <Translate id="footer.telegram">Telegram Channel</Translate>
                         </Link>
                       </Box>
                       <Box>
                         <Link href="https://github.com/edenia/" color="inherit">
                           <Translate id="footer.github">GitHub</Translate>
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                   <Grid item xs={12} sm={4}>
                     <Box className={styles.borderRight}>
                       <Box>
                       <h4><Translate id="footer.more">More</Translate></h4>
                       </Box>
                       <Box>
                         <Link href="https://github.com/edenia/" color="inherit">
                           <Translate id="footer.github">GitHub</Translate>
                         </Link>
                       </Box>
                     </Box>
                   </Grid>
                  </Grid>
                </Box>
             </Grid>
          </Grid>
        </Container>
     </Box>
   );
 }
 export default Footer;