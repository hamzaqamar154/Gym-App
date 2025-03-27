import { motion } from "framer-motion";

const chhildVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
  transition: { duration: 5 },
};
// variable for motion
// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 1 },
//   },
// };
type Props = {
  name: string;
  description: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyle = `p-5 absolute flex z-30 h-[380px] w-[450px] flex-col 
    items-center justify-center whitespace-normal bg-primary-500 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <motion.li
      className="relative mx-5 inline-block h-[380px] w-[450px]"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={chhildVariant}
    >
      {/* variants={container} */}
      <motion.div className={overlayStyle}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </motion.div>
      <img src={image} alt={`${image}`} />
    </motion.li>
  );
};

export default Class;
