import { FaApple, FaRegUser } from "react-icons/fa"
import { NavbarData } from "../data/MockData"
import { MdMenu } from "react-icons/md"
import { motion } from "framer-motion"


const Navbar = () => {
  return (
    <nav className="text-white py-5">
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1}}
            className="container flex justify-between items-center">
            {/* Logo section */}
            <div className="flex items-center gap-2 text-3xl font-semibold">
                <FaApple />
                Airpods Max
            </div>
            {/* Menu section */}
            <div className="hidden md:block">
                <ul className="flex items-center gap-4">
                    {NavbarData.map((item) => {
                        return (
                            <li key={item.id}>
                                <a 
                                    href={item.link}
                                    className="inline-block text-base py-2 px-3 uppercase"
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    <button className="text-xl ps-14">
                        <FaRegUser />
                    </button>
                </ul>
            </div>
            {/* Hamberger menu section */}
            <div className="md:hidden">
                <MdMenu className="text-4xl" />
            </div>
        </motion.div>
    </nav>
  )
}

export default Navbar