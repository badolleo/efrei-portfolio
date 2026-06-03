import { GoogleLogin } from '@react-oauth/google'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Login() {
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleSuccess = (response) => {
        login(response.credential)
        navigate('/')
    }

    return (
        <div className="mx-[1.5rem] xl:mx-[3rem] flex flex-col items-center gap-8 mb-86 backdrop-blur-md bg-white/70 rounded-2xl p-10 shadow-card">
            <div className="flex flex-col items-center gap-2">
                <h2 className="text-2xl xl:text-[40px] font-bold text-center">Welcome back</h2>
                <div className="w-[15vw] h-[2px] bg-main-yellow mx-auto my-2"></div>
                <p className="text-font-paragraph text-center">Sign in to continue</p>
            </div>
            <div className="bg-card-background rounded-2xl p-10 flex flex-col items-center gap-6 shadow-card">
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={() => console.error('Login failed')}
                    theme="outline"
                    size="large"
                    shape="rectangular"
                    text="signin_with"
                />
            </div>
        </div>
    )
}
