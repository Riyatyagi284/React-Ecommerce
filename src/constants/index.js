import React from "react";
const { people01, people02, people03,airbnb, binance, coinbase, dropbox,instagram,facebook,twitter, linkedin, send, shield, star } = React.lazy(()=> import ("../assets"));

export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "features",
        title: "Features",
    },
    {
        id: "product",
        title: "Product",
    },
    {
        id: "clients",
        title: "Clients",
    },
];

export const stats = [
    {
        id: "stat-1",
        value: "3800+",
        value: "User Active",
    },
    {
        id: "stat-2",
        value: "230+",
        value: "Trusted by Company",
    },
    {
        id: "stat-3",
        value: "$230M+",
        value: "Transaction",
    },
];

export const features = [
    {
        id: "feature-1",
        icon: { star },
        title: "Rewards",
        content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
    },
    {
        id: "feature-2",
        icon: { shield },
        title: "100% Secured",
        content:
            "We take proactive steps make sure your information and transactions are secure.",
    },
    {
        id: "feature-3",
        icon: { send },
        title: "Balance Transfer",
        content:
            "A balance transfer credit card can save you a lot of money in interest charges.",
    },
];

export const feedback = [
    {
        id: "feedback-1",
        content:
            "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
        name: "Herman Jensen",
        title: "Founder & Leader",
        img: people01,
    },
    {
        id: "feedback-2",
        content:
            "Money makes your life easier. If you're lucky to have it, you're lucky.",
        name: "Steve Mark",
        title: "Founder & Leader",
        img: people02,
    },
    {
        id: "feedback-3",
        content:
            "It is usually people in the money business, finance, and international trade that are really rich.",
        name: "Kenn Gallagher",
        title: "Founder & Leader",
        img: people03,
    },
];

export const clients = [
    {
        id: "client-1",
        logo: airbnb,
    },
    {
        id: "client-2",
        logo: binance,
    },
    {
        id: "client-3",
        logo: coinbase,
    },
    {
        id: "client-4",
        logo: dropbox,
    },
    {
        id: "client-5",
        logo: airbnb,
    },
    {
        id: "client-6",
        logo: binance,
    },
    {
        id: "client-7",
        logo: coinbase,
    },
    {
        id: "client-8",
        logo: dropbox,
    },
];

export const footerLinks = [
    {
        title:"Useful Links",
        links:[
            {
                id:"1",
                name:"Content",
            },
            {
                id:"2",
                name:"How it Works",
            },
            {
                id:"3",
                name:"Create",
            },
            {
                id:"4",
                name:"Explore",
            },
            {
                id:"5",
                name:"Terms & Services",
            }
        ]
    },
    {
        title:"Community",
        links:[
            {
                id:"1",
                name:"Help Center",
            },
            {
                id:"2",
                name:"Partners",
            },
            {
                id:"3",
                name:"Suggestions",
            },
            {
                id:"4",
                name:"Blog",
            },
            {
                id:"5",
                name:"Newsletters",
            }
        ]
    },
    {
        title:"Partner",
        links:[
            {
                id:"1",
                name:"Our Partner",
            },
            {
                id:"2",
                name:"Become a Partner",
            },
        ]
    }
] ;

export const socialMedia = [
    {
        id: "social-media-1",
        icon: instagram,
        link: "https://www.instagram.com/",
      },
      {
        id: "social-media-2",
        icon: facebook,
        link: "https://www.facebook.com/",
      },
      {
        id: "social-media-3",
        icon: twitter,
        link: "https://www.twitter.com/",
      },
      {
        id: "social-media-4",
        icon: linkedin,
        link: "https://www.linkedin.com/",
      },
];