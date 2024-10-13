import { FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='mx-2 w-10 font-bold text-2xl font-serif'>DP</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl'>
          <a href='https://www.linkedin.com/in/devang-patel-5708a526b/'> <FaLinkedin/></a> 
          <a href='https://github.com/devang1035'> <FaGithub /></a> 
            
            <FaInstagram />
            <FaSquareXTwitter />
        </div>
    </nav>
  )
}

export default Navbar

