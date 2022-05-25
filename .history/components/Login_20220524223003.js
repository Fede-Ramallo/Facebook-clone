import Image from "next/image";
import { signIn } from "next-auth/react";
import { motion } from 'framer-motion';

const buttonVariant = {
    animate: {
        x: [0, 10, -10],
        transition: {
            duration: 2.5,
            
        }
    }
};

function Login () {
    return(
        <div className="grid place-items-center">
            <Image 
            src="https://links.papareact.com/t4i"
            width={400}
            height={400}
            objectFit="contain"
            />
            <motion.h1
              variants={buttonVariant}
              onClick={signIn}
              className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
              animate="animate">
                Login with Facebook
            </motion.h1>
        </div>
    )
}

export default Login;