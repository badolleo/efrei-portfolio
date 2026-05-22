import instagram_icon from '../assets/instagram.svg'
import linkedin_icon from '../assets/linkedin.svg'
import mail_icon from '../assets/mail.svg'
import Contact from './Contact'

import footer from '../assets/footer.svg'

export default function Footer() {
  return (
    <footer className="relative font-header font-medium text-sm flex flex-col justify-items-center justify-center pt-4 pb-20 mx-[1.5rem] gap-6">
        <Contact/>
        <div className="flex justify-center gap-4">
            <img src={instagram_icon} alt="Instagram" />
            <img src={linkedin_icon} alt="LinkedIn" />
            <img src={mail_icon} alt="Mail" />
        </div>
        <div className="text-center font-nunito text-sm text-gray-600">
            Léo, 2026
        </div>
        <div className="absolute bottom-0 -left-6 -right-6 -z-10">
            <img src={footer} alt="" className="w-full"/>
        </div>
    </footer>
  )
}