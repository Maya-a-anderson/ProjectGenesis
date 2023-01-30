import React from 'react'
import {motion, AnimatePresence} from "framer-motion";
import {RiCloseLine} from 'react-icons/ri';
import {useState, forwardRef, useImperativeHandle,useRef} from "react";
import X from '../../assets/X.svg';
import './modal.css';
const Modal = forwardRef((props, ref) => {
    const [open, setOpen] = useState(true)

        useImperativeHandle(ref, ()=> {
            return{
                open: ()=> setOpen(true),
                close: ()=> setOpen(false)
            }
        })

        return (
            <AnimatePresence>
                {open && (
                    <>
                    <motion.div 
                        initial ={{
                            opacity: 0
            
                        }}
                        animate = {{
                            opacity: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit = {{
                            opacity: 0,
                            transition:{
                                delay: 0.3
                            }
                        }}
                        onClick={() => setOpen(false)}
                        className='modal-backdrop' 
                    />

                    <motion.div 
                        className='modal-button'
                        initial ={{
                            scale: 0,
                            opacity: 0
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            rotate: 360,
                            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                            transition:{
                                duration:2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeatDelay: 5
                              }
                          }}
                          
                          exit = {{
                            scale: 0,
                            opacity: 0,
                            transition:{
                                delay: 0.3
                                
                            }
                        }}
                        onClick={() => setOpen(false)}
                        
                    > 
                        <img src={X} className='modal-button'/>
                    </motion.div>

                    <motion.div
                        initial = {{
                            scale: 0
                        }}
                        animate = {{
                            scale: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit = {{
                            scale: 0,
                            transition:{
                                delay: 0.3
                            }
                        }}
                        className='modal-content-wrapper'>

                    </motion.div>
                        
                    <motion.div
                        initial = {{
                            scale: 0
                        }}
                        animate = {{
                            scale: 1,
                            transition: {
                                duration: 0.3
                            }
                        }}
                        exit = {{
                            scale: 0,
                            transition:{
                                delay: 0.3
                            }
                        }}
                        className='modal-content-wrapper'>
                    
                            <motion.div 
                                initial ={{
                                    opacity: 0,
                                    x: -100,
                                    duration: 0.3
                                }}
                                animate = {{
                                    opacity: 1,
                                    x: 0,
                                    transition: {
                                        delay: 0.3
                                    }
                                }}
                                exit = {{
                                    opacity: 0,
                                    x: 100,
                                    duration: 0.3,
                                

                                }}
                                className='modal-content'> 
                                {props.children}
                            </motion.div>
                    </motion.div>
                </>
                )}
            </AnimatePresence>
    )
    }
)

export default Modal