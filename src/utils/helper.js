import appStore from '../assets/images/svg/app-store.svg';
import discord from '../assets/images/svg/discord.svg';
import googlePlay from '../assets/images/svg/google-play.svg';


export const HEADER_DATA_LIST = [
    {
        links: [
            { url: 'https://discord.com/', imgSrc: discord, alt: 'Discord' },
            { url: 'https://play.google.com/store/apps', imgSrc: appStore, alt: 'App Store' },
            { url: 'https://play.google.com/store/games?hl=en', imgSrc: googlePlay, alt: 'Google Play' },
        ],
    },
];

export const NAV_LINK_LIST = [
    { link: "Home", url: "/" },
    { link: "About", url: "/about" },
    { link: "AI-UGC", url: "/ai-ugc" },
    { link: "Marketplace", url: "/marketplace" },
    { link: "More", url: "/more" },
];


export const EXPLORE_DATA_LIST = [
    {
        description: "Play with your own cute & adorable girls who are in charge of saving NANOSPACE world."
    },
    {
        description: "Characters are fully customizable with various costumes, attractive gears and powerful weapons."
    }
];
