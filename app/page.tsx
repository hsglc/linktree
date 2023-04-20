/** @format */
import Image from 'next/image';

import user from '@/data/user.json';

import { LinkCard, SocialLinkIcon } from 'components';

import { LinkCardModel } from '@/models/LinkCard';
import { SocialLinkIconModel } from '@/models/SocialLinkIcon';

export default function Home() {
    const links = user.links.map((link: LinkCardModel.Link) => (
        <LinkCard key={link.title} link={link} />
    ));

    const socials = user.socials.map((social) => {
        const type: SocialLinkIconModel.Icon =
            social.title as SocialLinkIconModel.Icon;
        return (
            <SocialLinkIcon key={social.title} type={type} href={social.href} />
        );
    });

    return (
        <main className="flex justify-center items-center flex-col mt-16 max-w-4xl mx-auto px-5">
            <Image
                className="rounded-full"
                alt={user.name}
                src={user.avatarUrl}
                width={128}
                height={128}
                priority
            />
            <h1 className="font-bold text-xl my-8 text-white">{user.name}</h1>
            {links}
            <section className="flex gap-4 justify-center mt-2">{socials}</section>
        </main>
    );
}
