import instagram_icon from '../assets/instagram.svg'
import linkedin_icon from '../assets/linkedin.svg'
import mail_icon from '../assets/mail.svg'
import Contact from './Contact'

import footer from '../assets/footer.svg'

export default function Footer() {
  return (
    <footer className="`
        relative 
        font-header 
        font-medium 
        text-sm flex flex-col justify-items-center justify-center 
        pt-4 
        pb-20
        gap-6
    `">
        <Contact/>
        <div className="flex justify-center gap-4">
            <img src={instagram_icon} alt="Instagram" className="w-5 h-5 xl:w-12 xl:h-12" />
            <img src={linkedin_icon} alt="LinkedIn" className="w-5 h-5 xl:w-12 xl:h-12" />
            <img src={mail_icon} alt="Mail" className="w-5 h-5 xl:w-12 xl:h-12" />
        </div>
        <div className="text-center font-nunito text-sm text-gray-600">
            Léo Badol, 2026
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-screen">
            <img src={footer} alt="" className="block w-full"/>
        </div>
    </footer>
  )
}