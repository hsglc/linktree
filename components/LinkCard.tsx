import { LinkCardModel } from '@/models/LinkCard';
import Image from 'next/image';

export const LinkCard = ({
    link: { title, href, imageUrl },
}: LinkCardModel.Props) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-full h-16 rounded-md border-2 hover:border-blue-500 bg-white p-1.5 transition duration-300 ease-in-out mb-5 hover:scale-105"
        >
            <div className="flex  w-full h-full gap-2  justify-between rounded-lg bg-white">
                <Image
                    alt={title}
                    width={48}
                    height={48}
                    src={imageUrl}
                    className="object-cover rounded-sm"
                />
                <h3 className="text-black font-medium  text-sm lg:text-lg self-center">
                    {title}
                </h3>
                <div />
            </div>
        </a>
    );
};
