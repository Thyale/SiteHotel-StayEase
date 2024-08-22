export default function Footer(){
    return(
        <footer className="border-t-4 mt-12 flex flex-row items-center justify-between px-10 py-12">
            <div>
                <img className="w-20" src="IconHotel.png" alt="Logo da empresa" />
            </div>
            <div className="flex flex-row items-center gap-5">
                <i class="fab fa-instagram text-pink-500 text-4xl cursor-pointer"></i>
                <i class="fab fa-facebook-square text-blue-600 text-4xl mr-4 cursor-pointer"></i>
            </div>
        </footer>
    )
}