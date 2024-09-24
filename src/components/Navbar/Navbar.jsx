import { SideBar } from '../Sidebar/Sidebar';
import './navbar.scss';
import { motion } from 'framer-motion';
export const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          Web Portolioo
        </motion.span>
        <div className="social">
          <a href="">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
