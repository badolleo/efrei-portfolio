export default function Contact() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-2xl text-center font-bold font-[Playfair Display]">Contact</h2>
                <div className="w-[15vw] h-[2px] bg-main-yellow mx-auto my-2"></div>
            </div>
            <form action="" className="relative flex flex-col gap-4 mx-4">
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Name</div>
                    <input type="text" className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow"/>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Email</div>
                    <input type="email" className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow"/>
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Message</div>
                    <textarea type="text" className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs h-[150px] rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow resize-none"/>
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 bg-main-yellow text-black rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">Send</button>
                </div>
            </form>
        </div>
    )
}