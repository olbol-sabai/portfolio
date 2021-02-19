import React, { useEffect, useRef } from 'react';
import { useElementScroll, useTransform, useViewportScroll } from 'framer-motion';
import WPGIF from '../../media/wp1Final.gif';
import DDGIF from '../../media/dd/alllogos.png';
import Project from './Project/Project';
import { motion } from 'framer-motion';


const Projects = () => {


    const wpWebLink = { message: '- you can use the username "test" and the password "testuser" to authorise', link: 'http://workoutplanner-dev.eu-west-2.elasticbeanstalk.com/' }
    const wpDetails = [
        'API built with DjangoRestFramework',
        'Simple user/authentication system using JWT',
        'Static files stored in AWS S3 buckets',
        'DragandDrop exercises built using React Beautiful DnD',
        'Timer built utilising useEffect hook',
        'Demo deployed with AWS Elastic Beanstalk',
    ]

    const ddWebLink = { message: '- you can use the email "test@test.com" and the password "testuser" to authorise', link: 'http://dulldiary-dev.eu-west-2.elasticbeanstalk.com/' }
    const ddDetails = [
        'API built with DjangoRestFramework',
        'User/Authentication system using JWT with account confirmation via email, refresh tokens',
        'User system integrated with GoogleAuth',
        'Axios interceptors refresh access tokens without login',
        'Will warn and logout users before refresh token expires',
        'Profile image upload',
        'Built with ShardsReact - UI kit that extends Bootstraps flexbox system',
        'Static files stored in AWS S3 buckets',
        'Demo deployed with AWS Elastic Beanstalk',
        'PostgreSQL database operated by AWS RDS',
    ]

    return (
        <motion.div
            exit={{ opacity: 0 }}
            style={{ padding: '1rem 0rem' }}>
            <h1 style={{ paddingLeft: '10px', fontSize: '35px', textAlign: 'center' }}>Demo Projects</h1>
            <Project
                dragDimensions={-2100}
                workoutTitle="DullDiary"
                image={DDGIF}
                link={ddWebLink}
                details={ddDetails}
                githubRepoLink="https://github.com/olbol-sabai/workoutplanner" />
            <Project
                dragDimensions={-2100}
                workoutTitle="WorkoutPlanner"
                image={WPGIF}
                link={wpWebLink}
                details={wpDetails}
                githubRepoLink="https://github.com/olbol-sabai/dulldiary" />
            <div style={{ height: '100px' }}></div>
        </motion.div>
    );
}

export default Projects;