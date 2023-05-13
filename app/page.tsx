import Image from 'next/image';
import { redirect } from 'next/navigation';
import { get } from '@vercel/edge-config';

import { LinkCard, SocialLinkIcon } from 'components';

import { SocialLinkIconModel } from '@/models/SocialLinkIcon';
import { LinktreeModel } from '@/models/EdgeConfigData';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function Home() {
    const data: LinktreeModel.Data | undefined = await get('linktree');

    if (!data) redirect('https://linktr.ee/selenagomez');

    const links = data.links.map((link) => (
        <LinkCard key={link.title} link={link} />
    ));

    const socials = data.socials.map((social) => {
        const type: SocialLinkIconModel.Icon =
            social.title as SocialLinkIconModel.Icon;
        return (
            <SocialLinkIcon key={social.title} type={type} href={social.href} />
        );
    });

    return (
        <main className="flex justify-center items-center flex-col mt-16 max-w-4xl mx-auto px-5 pb-4">
            <Image
                className="rounded-full"
                alt={data.name}
                src={data.avatarUrl}
                width={128}
                height={128}
                priority
            />
            <h1 className="font-bold text-xl my-8 text-white">{data.name}</h1>
            {links}
            <section className="flex gap-4 justify-center mt-2">
                {socials}
            </section>
        </main>
    );
}
