import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const iconMap = {
    instagram: faInstagram,
    linkedIn: faLinkedin,
    github: faGithub,
    facebook: faFacebook
};

const mediaLinks = [
    { link: 'https://instagram.com', icon: 'instagram' },
    { link: 'https://in.linkedin.com/in/prasad-khairnar-91b724209?trk=people-guest_people_search-card', icon: 'linkedIn' },
    { link: 'https://github.com/prasadk0', icon: 'github' },
    { link: 'https://facebook.com', icon: 'facebook' }
];

export default function SocialMediaLinks() {
    return (
        <div className="flex flex-row flex-wrap align-middle justify-center">
            {mediaLinks.map((item, index) => (
                <a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="m-2"
                >
                    <FontAwesomeIcon icon={iconMap[item.icon]} size="2x" />
                </a>
            ))}
        </div>
    );
}
