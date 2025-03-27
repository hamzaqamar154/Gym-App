import { SelectedPage, ClassType } from "@//shared/types";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import image6 from "../../assets/image6.png";
import { motion } from "framer-motion";
import HText from "@//shared/HText";

import Class from "./Class";

const classes: Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image2,
  },
  {
    name: "Ab core Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "strength training to yoga and dance-based workouts, these classes provide expert guidance and a sense of community. They help improve endurance, flexibility, and overall well-being while keeping workouts engaging. Whether you're looking to build muscle, lose weight, or just stay active, gym classes offer a fun and effective way to achieve your fitness goals",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id='"ourclasses' className="bg-primary-100 py-20 md:py-30">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-full md:text-center">
            <HText>OUR CLASSES</HText>
            <p className="py-5">
              Gym classes offer a structured and motivating way to stay fit,
              catering to various fitness levels and goals. From high-intensity
              interval training (HIIT) and strength training to yoga and
              dance-based workouts, these classes provide expert guidance and a
              sense of community. They help improve endurance, flexibility, and
              overall well-being while keeping workouts engaging. Whether you're
              looking to build muscle, lose weight, or just stay active, gym
              classes offer a fun and effective way to achieve your fitness
              goals.
            </p>
          </div>
        </motion.div>

        {/* sidescrolling motion  */}
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item: ClassType, index) => (
              <Class
                key={`${item.name}-${index}`}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
