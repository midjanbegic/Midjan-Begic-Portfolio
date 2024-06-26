import html from '../assets/svg/skills/html.svg'
import css from '../assets/svg/skills/css.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import react from '../assets/svg/skills/react.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import git from '../assets/svg/skills/git.svg'
import node from '../assets/svg/skills//node.svg'
import azure from '../assets/svg/skills/azure.svg'
import mongodb from '../assets/svg/skills/mongodb.svg'
import express from '../assets/svg/skills/express.svg'




export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'node js':
            return node;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'git':
            return git;
        case 'azure':
            return azure;
        case 'mongodb':
            return mongodb;
        case 'express':
            return express;
        default:
            break;
    }
}
