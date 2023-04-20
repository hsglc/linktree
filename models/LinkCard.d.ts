/** @format */

export namespace LinkCardModel {
    interface Props {
        link: Link;
    }

    interface Link {
        title: string;
        href: string;
        imageUrl: string;
    }
}
