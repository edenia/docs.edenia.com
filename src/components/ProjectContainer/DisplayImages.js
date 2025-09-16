import React from 'react';
import { Grid } from '@mui/material';
import useBaseUrl from '@docusaurus/useBaseUrl';

const DisplayImages = ({ projectData }) => {
    return (
        <Grid item md={4} xs={12}>
            <Grid className="container-border">
                {projectData.logos.map((logo, i) => (
                    <Grid container key={i} alignItems="center" justifyContent="center">
                        <a href={logo.link}>
                            <img className="logo" src={useBaseUrl(logo.image)}
                                loading="lazy" alt={`${projectData.name} official logo and brand identity`} />
                        </a>
                    </Grid>
                ))
                }
                <Grid container spacing={1} alignItems="center" justifyContent="center">
                    {projectData.images.map((image, i) => (
                        <Grid key={i} item xs={6} md={6}>
                            <a href={image.link} id={i}>
                                <img className={image.class ?? ""} src={useBaseUrl(image.image)}
                                    loading="lazy" height="60%"
                                    alt={`${projectData.name} application interface screenshot showing main features and functionality`} />
                            </a>
                            <a href={projectData.href} className="lightbox" id={image.id}>
                                Probando

                                <img className="box-img" src={useBaseUrl(image.image)}
                                    loading="lazy" alt={`${projectData.name} detailed application screenshot in full size view`} />
                            </a>
                        </Grid>
                    ))
                    }
                </Grid>
            </Grid>
        </Grid>
    )
}

export default DisplayImages