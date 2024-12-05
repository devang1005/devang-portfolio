import { FaLinkedin, FaYoutube } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='  flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <h1 className='mx-2 w-10 font-bold text-2xl font-serif'>DP</h1>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-xl social-media'>
          <a href='https://www.linkedin.com/in/devang-patel-5708a526b/' className='linkedin'> <FaLinkedin/></a> 
          <a href='https://github.com/devang1035' className='github'> <FaGithub /></a> 
          <a href='https://x.com/DevangPate70521' className='twitter'><FaSquareXTwitter /></a> 
          <a href='https://youtube.com/@devang-dev?si=tPR5E_iHfTo-3IHW' className='youtube'> <FaYoutube /></a>     
        </div>
    </nav>
  )
}

export default Navbar

