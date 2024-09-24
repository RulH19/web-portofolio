import { motion } from 'framer-motion';

export const Test = () => {
  return (
    <div className="course">
      <motion.div className="box" animate={{ opacity: 0 }} transition={{ duration: 2 }}></motion.div>
    </div>
  );
};
