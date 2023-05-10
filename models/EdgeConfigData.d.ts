import { LinkCardModel } from './LinkCard';
import { SocialLinkIconModel } from './SocialLinkIcon';

export namespace LinktreeModel {
    interface Data {
        name: string;
        avatarUrl: string;
        links: Link[];
        socials: Social[];
    }

    interface Link {
        title: string;
        href: string;
        imageUrl: string;
    }

    interface Social {
        title: string;
        href: string;
    }
}
