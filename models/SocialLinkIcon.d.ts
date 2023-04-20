export namespace SocialLinkIconModel {
    interface Props {
        type: Icon;
        href: string;
    }
    type Icon = 'twitter' | 'medium' | 'linkedin' | 'github';
}
