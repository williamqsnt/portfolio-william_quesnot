import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Chip } from '@mui/material';

export default function BasicAccordion() {
    return (
        <div className="w-full max-w-md mx-auto">
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="banel1a-content"
                    id="banel1a-header"
                >
                    <Typography className='text-left'> {/* Ajouter la classe text-left */}
                        <b className='text-gray-500 text-sm'>September 2023 - Now</b><br />
                        <b className='font-bold text-lightblue-custom'>Devops Engineer | Cloud Platform Engineer</b><br />
                        <b className='text-gray-800 text-sm'>at ResMed</b>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    &nbsp; <Chip label="AWS" variant="outlined" />
                    &nbsp; <Chip label="Terraform" variant="outlined" />
                    &nbsp; <Chip label="Python" variant="outlined" />
                    <br /><br />
                    <Typography className='text-left'> {/* Ajouter la classe text-left */}
                        Specialized in the deployment, maintenance, performance optimization, and capacity management of secure cloud infrastructure and systems on AWS
                    </Typography>
                </AccordionDetails>
            </Accordion>
            
            <Accordion className='mt-4'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="banel1a-content"
                    id="banel1a-header"
                >
                    <Typography className='text-left'> 
                        <b className='text-gray-500 text-sm'>January 2023 - March 2023</b>
                        <br />
                        <b className='font-bold text-lightblue-custom'>Web Developer</b><br />
                        <b className='text-gray-800 text-sm'>at Riddle</b>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    &nbsp; <Chip label="React" variant="outlined" />
                    &nbsp; <Chip label="Symfony" variant="outlined" />
                    &nbsp; <Chip label="API Platform" variant="outlined" />
                    <br /><br />
                    <Typography className='text-left'> {/* Ajouter la classe text-left */}
                        Enhance a SaaS software with responsibilities including adding new features, bug fixing, and conducting quality tests
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion className='mt-4'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="banel2a-content"
                    id="banel2a-header"
                >
                    <Typography className='text-left'> {/* Ajouter la classe text-left */}
                        <b className='text-gray-500 text-sm'>April 2022 - June 2022</b><br />
                        <b className='font-bold text-lightblue-custom'>Web Developer</b><br />
                        <b className='text-gray-800 text-sm'>at AXIANS VINCI Energies</b>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    &nbsp; <Chip label="NextJS" variant="outlined" />
                    &nbsp; <Chip label="Contentful" variant="outlined" />
                    <br /><br />
                    <Typography className='text-left'> {/* Ajouter la classe text-left */}
                        Built an e-commerce website from scratch using Next.js, integrated a CMS, and designed the layout using Adobe XD
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
