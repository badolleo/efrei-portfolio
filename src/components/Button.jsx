import '../App.css'

export default function Button({text, onClick, backgroundColor, textColor, borderColor, radius, shadow}) {
    return (
        <button 
            onClick={onClick} 
            className="font-medium py-2 px-6 text-xs" 
            style={{ backgroundColor, color: textColor, borderColor, border: "1px solid" + borderColor, borderRadius: radius, boxShadow: shadow }}
            >
            {text}
        </button>
    )
}