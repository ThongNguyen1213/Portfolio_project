import { foldericon, medalicon, githubicon2, instagramicon, linkedinicon2, homeicon, usericon, foldericon2, phoneicon, tailwindicon, htmlicon, cssicon, jsicon, reacticon, hoobankproject, teacozyproject, funproject, spotifyproject, jssmallicon, csssmallicon, htmlsmallicon, tailwindsmallicon, reactsmallicon } from "../assets"

export const MediaLinks = [
    {
        id: "githubicon",
        name: "github",
        img: githubicon2,
        url: "https://github.com/ThongNguyen1213",
    },
    {
        id: "instagramicon",
        name: "instagram",
        img: instagramicon,
        url: "https://www.instagram.com/nguyen.minh.thong/",
    },
    {
        id: "linkedinicon",
        name: "linkedin",
        img: linkedinicon2,
        url: "",
    }
]

export const achievementTab = [
    {
        id: "my-progress",
        name: "Experience",
        img: medalicon,
        content: "1 year"
    },
    {
        id:"my-project",
        name: "Projects",
        img: foldericon,
        content: "10+ Completed Project"
    },
]

export const navLinks = [
    {
        id: "home",
        title: "Home",
        img: homeicon,
    },
    {
        id: "my-progress",
        title: "About",
        img: usericon,
    },    
    {
        id: "my-project",
        title: "Projects",
        img: foldericon2
    },
    {
        id: "contact",
        title: "Contact",
        img: phoneicon,
    }
]

export const checkProgress = [
    {
        id: "codecademy",
        title: "Codecademy"
    },
    {
        id: "code-practice",
        title: "Code Practice"
    },
    {
        id:"code-challenge",
        title:"Code Challenge"
    }
]

export const skillSets = [
    {
        id: "tailwindlogo",
        name: "Tailwind",
        img: tailwindicon,
        content: "Tailwind CSS is an open source CSS framework. The main feature of this library is that it does not provide a series of predefined classes for elements such as buttons or tables.",
    },
    {
        id: "csslogo",
        name: "CSS",
        img: cssicon,
        content: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
        id: "htmllogo",
        name: "HTML",
        img: htmlicon,
        content: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
        id: "jslogo",
        name: "Javascript",
        img: jsicon,
        content: "Javascript is one of the most popular programming language. It is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
    {
        id:"reactlogo",
        name:"React",
        img: reacticon,
        content: "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.",
    },
]

export const completedProjects = [
    {
        id: "hoobank_project",
        name: "HOOBANK",
        description: "A modern bank app that is developed to provide trust and credibility to customer. It gives detail information such as people who involves, investors, other benefist with beautiful design.",
        img: hoobankproject,
        devtool:[{icon: htmlsmallicon, logo: "htmllogo"}, 
                {icon: csssmallicon, logo: "csslogo"}, 
                {icon: jssmallicon, logo:"jslogo"}, 
                {icon: tailwindsmallicon, logo: "tailwindlogo"}, 
                {icon: reactsmallicon, logo:"reactlogo"}],
        url: "https://github.com/ThongNguyen1213/modern_bank_app"
    },
    {
        id: "tea-cozy_project",
        name: "TEA COZY",
        description: "A mock up tea business website project that includes nessary info such as tea flavors, business contact, and locations. It's not a very complicated or functional website, but it gives a good opportunity to fully understand the function of flex.",
        img: teacozyproject,
        devtool: [{icon: htmlsmallicon, logo: "htmllogo"}, 
                {icon: csssmallicon, logo: "csslogo"}, 
                {icon: jssmallicon, logo:"jslogo"}],
        url:"https://github.com/ThongNguyen1213/Tea-Cozy-Project"
    },
    {
        id: "fun-project",
        name: "Groud-Crab-Fish-Tiger",
        description: "A very basic design to fulfill the desire of creating something cool. Gourd-Crab-Fish-Tiger is one of the popular betting game played during New Year Eve. “Play” button generate a set of random 3 characters.",
        img: funproject,
        devtool: [{icon: htmlsmallicon, logo: "htmllogo"}, 
                {icon: csssmallicon, logo: "csslogo"}, 
                {icon: jssmallicon, logo:"jslogo"}],
        url:"https://github.com/ThongNguyen1213/Bau-cua-ca-cop-fun-project"
    },
    {
        id:"spotify_project",
        name: "SPOTIFY",
        description: "A very basic design to fulfill the desire of creating something cool. Gourd-Crab-Fish-Tiger is one of the popular betting game played during New Year Eve. “Play” button generate a set of random 3 characters.",
        img: spotifyproject,
        devtool: [{icon: htmlsmallicon, logo: "htmllogo"}, 
                {icon: csssmallicon, logo: "csslogo"}, 
                {icon: jssmallicon, logo:"jslogo"}, 
                {icon: tailwindsmallicon, logo: "tailwindlogo"}, 
                {icon: reactsmallicon, logo:"reactlogo"}],
        url:""
    }
]