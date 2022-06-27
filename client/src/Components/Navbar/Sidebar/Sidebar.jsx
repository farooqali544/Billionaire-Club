import React from "react";
import styles from "./Sidebar.module.css";
import { motion, AnimatePresence } from "framer-motion";
export default function Sidebar({ setSidebarOpen, sidebarOpen, children }) {
  // if (!sidebarOpen) return null;

  const Backdrop = () => {
    return (
      <motion.div
        key='backdrop'
        className={styles.container}
        onClick={() => {
          setSidebarOpen(false);
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></motion.div>
    );
  };

  const Sidebar = () => {
    return (
      <motion.div
        key='sidebar'
        className={styles.sidebar}
        initial={{ translateX: "-100%" }}
        animate={{ translateX: 0 }}
        transition = {{type:'just'}}
        exit={{ translateX: "-100%" }}
      >
        <span
          onClick={() => {
            setSidebarOpen(false);
          }}
        >
          ❌
        </span>
        <ul>{children}</ul>
      </motion.div>
    );
  };

  return (
    <>
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <Backdrop />
            <Sidebar />
          </>
        )}
      </AnimatePresence>
    </>
  );
}
