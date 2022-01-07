import { Variants } from "framer-motion/types/types";

// interface Transition {
//     type: string;
//     delay: number;
//     duration: number;
// }

// interface Hidden {
//     y: string;
// }

// interface Visible {
//     y: number;
//     [key: string]: Transition;
// }

// interface PhotoVariant {
//     hidden: Hidden;
//     visible: Visible;
// }

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

export { photoVariant, }