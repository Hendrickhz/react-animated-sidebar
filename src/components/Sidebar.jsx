import React, { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useClickAway } from "react-use";
import {BiHomeSmile,BiUser} from 'react-icons/bi'
import {HiOutlineChatBubbleBottomCenterText} from 'react-icons/hi2'
import {FiSettings,FiShoppingCart} from 'react-icons/fi'
import { AnimatePresence, motion } from 'framer-motion'
const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen((prev) => !prev);
  console.log(open);

  const ref= useRef(null)
  useClickAway(ref,()=>setOpen(false))
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="p-3  rounded-xl border-2 border-zinc-600 "
      >
        <GiHamburgerMenu />
      </button>

    <AnimatePresence mode="wait" initial={false}>
      {open && (
        <>
        <motion.div {...framerSidebarBackground}   className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[rgba(0,0,0,0.1)] backdrop-blur-sm"></motion.div>
        <motion.div {...framerSidebarPanel} ref={ref} className=" fixed top-0 left-0 bottom-0 border-r-2 border-zinc-600 w-full h-screen max-w-xs z-50 bg-zinc-800">
          <div className=" flex justify-between items-center border-b-2 border-zinc-600 px-3 py-2">
            <span>Animated Sidebar</span>
            <button
              onClick={toggleSidebar}
              className="p-3  rounded-xl border-2 border-zinc-600 "
            >
              <IoCloseSharp />
            </button>
          </div>
          <ul>
            {items.map((item,idx)=>
                (<li className="   " key={item.title}>
                    <a href={item.href} className=" transition-all border-b-2 bg-zinc-800 border-zinc-600 hover:bg-zinc-700  p-5 flex items-center justify-between">
                        <motion.span {...framerNavLinks(idx)}>{item.title}</motion.span>
                        <motion.span {...framerIcon}><item.Icon/></motion.span>
                    </a>
                </li>))}
          </ul>
        </motion.div>
        </>
      )}
      
    </AnimatePresence>
    </>
  );
};
const items = [
    { title: 'Home', Icon: BiHomeSmile, href: '#' },
    { title: 'About', Icon: BiUser },
    { title: 'Contact', Icon: HiOutlineChatBubbleBottomCenterText, href: '#' },
    { title: 'Settings', Icon: FiSettings, href: '#' },
    { title: 'Shop', Icon: FiShoppingCart, href: '#' },
  ]

export default Sidebar;

const framerSidebarBackground={
    initial : {opacity:0},
    animate: {opacity:1},
    exit:{opacity:0},
    transition: {duration:0.5}
}

const framerSidebarPanel={
    initial: { x: '-100%'},
    animate:{x: '0%'},
    exit: {x : '-100%'},
    transition: {duration:0.5}
}

const framerNavLinks = delay=>{ return {
    initial:{opacity: 0, x:-50},
    animate:{opacity: 1, x:0},
    transition: {
        delay: 0.5 + delay / 10,
      },
}}

const framerIcon= {
    initial: {scale:0},
    animate:{scale:1},
    transition:{
        type:"spring",
        stiffness: 260,
        damping: 20,
        delay: 1.2,
    }
}