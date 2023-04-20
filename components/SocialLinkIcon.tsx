import { SocialLinkIconModel } from '@/models/SocialLinkIcon';

import TwitterIcon from 'public/svg/twitter.svg';
import LinkedinIcon from 'public/svg/linkedin.svg';
import MediumIcon from 'public/svg/medium.svg';
import GithubIcon from 'public/svg/github.svg';
import Image from 'next/image';

const socialIcons = {
    twitter: TwitterIcon,
    linkedin: LinkedinIcon,
    medium: MediumIcon,
    github: GithubIcon,
};

export const SocialLinkIcon = ({ type, href }: SocialLinkIconModel.Props) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 border-2 hover:border-blue-500 rounded-full hover:bg-white p-1.5  transition duration-300 ease-in-out"
        >
            <Image src={socialIcons[type]} alt={href} width={48} height={48} />
        </a>
    );
};
