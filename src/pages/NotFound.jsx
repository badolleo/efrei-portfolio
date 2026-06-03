import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound() {
    const navigate = useNavigate()

    return (
        <div className="mx-[1.5rem] xl:mx-[3rem] flex flex-col items-center justify-center gap-6 py-32">
            <p className="text-[120px] xl:text-[200px] font-bold font-[Poppins] leading-none text-main-yellow">404</p>
            <h1 className="text-2xl xl:text-4xl font-bold text-center">Page not found</h1>
            <p className="text-font-paragraph text-center xl:w-[480px]">
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Button
                text="Back to home"
                onClick={() => navigate('/')}
                backgroundColor="var(--color-main-yellow)"
                textColor="#000"
                borderColor="var(--color-main-yellow)"
                radius="0.5rem"
                shadow="0 2px 4px rgba(0, 0, 0, 0.1)"
            />
        </div>
    )
}
