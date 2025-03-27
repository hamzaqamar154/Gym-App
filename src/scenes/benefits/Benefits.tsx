import HText from "@//shared/HText";
import { SelectedPage, BenefitType } from "@//shared/types"
import {
     HomeModernIcon, 
     UserGroupIcon, 
     AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion";
import BenefitComponent from "./BenefitComponent";
import ActionButton from "@//shared/ActionButton";
import BenefitsPageGraphic from "../../assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: "State of the Art Facilities",
        description:"Dynamic fitness space designed to support various workout routines, from strength training to cardio and flexibility exercises. Equipped with modern machines.",
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: "100's of Diverse Classes",
        description:"Fitness hub where people train to build strength, improve endurance, and stay healthy. It features a variety of equipment, from free weights to cardio machines.",
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: "Expert and Pro Trainers",
        description:"Dedicated space for physical fitness, offering a range of equipment for strength training, cardio, and flexibility exercises. It provides an energetic environment.",
    },
]


// variable for motion 
const container = {
    hidden : {},
    visible : {
        transition :{ staggerChildren : 0.2}
    },

}
type Props = {
    setSelectedPage: (value:SelectedPage)=>void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
    id="benefits"
    className="mx-auto min-h-full w-5/6 py-20 ">
        <motion.div
         onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}>
            {/* Header  */}
            <motion.div 
            className="md:my-5 md:w-3/5"
            initial= "hidden"
                whileInView="visible"
                viewport = {{once:true, amount:0.5}}
                transition={{ duration:0.5}}
                variants={{
                    hidden:{opacity:0, x:-50},
                    visible: {opacity:1, x:0},
                }}>
                <HText>More Than Just Gym.</HText>
                <p className="my-5 text-sm ">A gym is a fitness facility equipped with workout machines, free weights, and cardio equipment 
                    to help individuals improve strength and overall health. It often offers group fitness classes, personal training, 
                    and recovery areas. Gyms provide a motivating environment for weight loss, muscle building, and general well-being.</p>
            </motion.div>

            {/* benefits */}
            <motion.div
            initial = "hidden"
            whileInView="visible"
            viewport={{once : true, amount:0.5}}
            variants={container}
            className="md:flex items-center justify-between gap-8 mt-5 ">
                {benefits.map((benefit : BenefitType)=>
                <BenefitComponent key = {benefit.title}
                icon = {benefit.icon}
                title = {benefit.title}
                description = {benefit.description}
                setSelectedPage={setSelectedPage}/>
                )}
            </motion.div>
            {/* Graphics and description  */}
            <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                {/* graphic  */}
                <img 
                className="mx-auto"
                src={BenefitsPageGraphic} alt="benefits-page-graphic" />
                 
                 {/* description */}
                 <div>

                    {/* title  */}
                    <div className="relative">

                        {/* Again background image problem */}
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                            <motion.div
                            initial= "hidden"
                            whileInView="visible"
                            viewport = {{once:true, amount:0.5}}
                            transition={{ duration:0.5}}
                            variants={{
                                hidden:{opacity:0, x:50},
                                visible: {opacity:1, x:0},
                            }}>
                                <HText>
                                    Millions of Happy Members Getting {" "}
                                    <span className="text-primary-500"> Fit.</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>
                    {/* descrition  */}
                    <motion.div
                    initial= "hidden"
                    whileInView="visible"
                    viewport = {{once:true, amount:0.5}}
                    transition={{delay:0.2, duration:0.5}}
                    variants={{
                        hidden:{opacity:0, x:50},
                        visible: {opacity:1, x:0},
                    }}>
                        <p className="my-5 ">Getting fit is about building a strong and healthy body through regular exercise and proper nutrition. Whether it's lifting weights, running, or practicing yoga, staying active improves energy levels and overall well-being.</p>
                        <p className="mb-5">Consistency is key to achieving fitness goals. By setting realistic targets and staying dedicated, you can boost strength, enhance endurance, and feel more confident in your body every day.</p>
                    </motion.div>
                    {/* button  */}
                    <div className="relative mt-16">
                        {/* again background image problem  */}
                        <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                        <ActionButton selectedPage={setSelectedPage}>
                            Join Now!
                        </ActionButton>
                        </div>
                    </div>


                 </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits