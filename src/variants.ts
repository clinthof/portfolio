import { Variants } from "framer-motion/types/types";

const photoVariant: Variants | undefined = {
    hidden: {
        y: '100vh',
    },
    visible: {
        y: 20,
        transition: {
            type: 'spring',
            delay: 0.05,
            duration: 1,
        }
    },
};

const aboutBioVariant: Variants | undefined = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}

const bioChildVariant: Variants | undefined = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
}

const socialGridVariant: Variants | undefined = {
    hidden: {

    },
    visible: {
        transition: {
            staggerChildren: 0.2,
        }
    },
}

const socialChildVariant: Variants | undefined = {
    hidden: {
        y: '40vh',
        opacity: 0,
    },
    visible: {
        y: 20,
        opacity: 1,
        transition: {
            type: 'spring',
            stiffness: 60,
        }
    },
}

export { 
    photoVariant,
    aboutBioVariant,
    bioChildVariant,
    socialGridVariant,
    socialChildVariant,
}