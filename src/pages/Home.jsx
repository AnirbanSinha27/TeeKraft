import React from 'react'
import {motion,AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio'
import {
  headContentAnimation,
  headTextAnimation,
  slideAnimation 
} from "../config/motion";
import state from '../store/index'
import {CustomButton} from "../components"

const Home = () => {

  const snap=useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}>
          <img src="./TeeKraft.png" alt="logo"
          className='size-10 object-contain' />
        </motion.header>
        <motion.div className='home-content' {...headContentAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              LET'S <br className='lg:block hidden'/> DO IT.
            </h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='this flex flex-col gap-5'
          style={{
            marginTop: window.innerWidth < 640 ? '5.8rem' : '0',
          }}>
            <p className='max-w-md font-normal text-gray-800 text-base'>
              Create your unique and exclusive shirt with our brand-new 3D customization tool. <strong>Unleash your imagination</strong>{" "}and define your own style.
            </p>
            <CustomButton 
            type="filled"
            title="Customize it"
            handleClick={()=>state.intro=false}
            customizeStyles="w-fit px-4 py-2.5 font-bolder text-sm"/>
          </motion.div>
        </motion.div>
      </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
