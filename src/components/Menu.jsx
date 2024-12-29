import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { navLinks } from "../data";

const transitionProps = {
    type: 'spring',
    stiffness: 70,
    damping: 15,
    duration: 0.2,
};

const menuVariants = {
    open: {
        right: '0',
        transition: transitionProps
    },
    closed: {
        right: '-320px',
        transition: transitionProps,
      
    }
}

const variantsOverlay = {
    open: {
        opacity: 1,
        visibility: 'visible',
        transition: transitionProps
    },
    closed: {
        opacity: 0,
        visibility: 'hidden',
        transition: transitionProps
    }
}

const navLinksVariants = {
    open: {
        transition: {
            staggerChildren: 0.2, 
            delayChildren: 0.4,   
        },
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: 0, 
        },
    },
};

const navLinkVariants = {
    open: {
        opacity: 1,
        x: 0,
        transition: { type: 'tween'  },
    },
    closed: {
        opacity: 0,
        x: 40,
        transition: { type: 'tween'  },
    },
};

export default function Menu({ open, setOpen }) {
    const location = useLocation();

    return (
        <>
            <motion.div animate={open ? 'open' : 'closed'} variants={variantsOverlay} role="navigation" className="bg-black/50 fixed inset-0 invisible h-full w-full z-10 md:hidden" onClick={() => setOpen(false)}></motion.div>
            <motion.div animate={open ? 'open' : 'closed'} variants={menuVariants} className="bg-white fixed top-0 -right-80 h-full flex items-center justify-center z-10 w-80 md:hidden">
                <button onClick={() => setOpen(!open)} aria-label="開啟選單" className="w-8 h-8 flex justify-center flex-col space-y-[7px] items-end group md:hidden">
                    <div className="h-[0.1rem] w-6 bg-black group-hover:w-8 duration-500 transform group-hover:rotate-45"></div>
                    <div className="h-[0.1rem] w-8 bg-black group-hover:w-8 duration-500"></div>
                    <div className="h-[0.1rem] w-4 bg-black group-hover:w-8 duration-500 transform group-hover:-rotate-45"></div>
                </button>
                <motion.ul animate={open ? 'open' : 'closed'} variants={navLinksVariants} className="space-y-8 text-xl">
                    {navLinks.map((navLink, index) => (
                        <motion.li key={index} variants={navLinkVariants} className="group relative">
                            <Link to={navLink.url} onClick={() => setOpen(false)}>
                                {navLink.name.charAt(0).toUpperCase() + navLink.name.slice(1)}
                            </Link>
                            {(location.pathname === navLink.url || 
                      (navLink.url === '/usluge' && location.pathname.startsWith('/usluge'))) && (
                      <div className="absolute -bottom-1 bg-black h-[1px] w-5"></div>
                    )}
                        </motion.li>
                    ))}
                    <li>
                        <Link 
                            to="/blog" 
                            onClick={() => setOpen(false)}
                            className="block py-2 hover:text-primary transition-colors"
                        >
                            部落格
                        </Link>
                    </li>
                </motion.ul>
            </motion.div>
        </>
    )
}