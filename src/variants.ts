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
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            duration: 0.4,
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

export { 
    photoVariant,
    aboutBioVariant,
    bioChildVariant,
}