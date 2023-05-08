// icons
import responsive from "../images/features/desktop/responsive.svg";
import noLimit from "../images/features/desktop/no-limit.svg";
import dragDrop from "../images/features/desktop/drag-drop.svg";
import boostExposure from "../images/features/desktop/boost-exposure.svg";
import customDomain from "../images/features/desktop/custom-domain.svg";
import embed from "../images/features/desktop/embed.svg";

// types
import type Feature from "../types/Feature";

export const features: Feature[] = [
    {
        title: "100% Responsive",
        content:
            "No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.",
        icon: responsive,
    },
    {
        title: "No Photo Upload Limit",
        content:
            "Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.",
        icon: noLimit,
    },
    {
        title: "Available to Embed",
        content:
            "Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.",
        icon: embed,
    },
    {
        title: "Custom Domain",
        content:
            "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
        icon: customDomain,
    },
    {
        title: "Boost Your Exposure",
        content:
            "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
        icon: boostExposure,
    },
    {
        title: "Drag & Drop Image",
        content:
            "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
        icon: dragDrop,
    },
];
