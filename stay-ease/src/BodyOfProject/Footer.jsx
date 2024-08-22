export default function Footer(){
    return(
        <footer className="border-t-4 border-t-slate-950 mt-12 flex flex-row items-center justify-between px-10 py-12">
            <div>
                <i class="fas fa-hotel text-4xl text-blue-950 dark:text-blue-100"></i>
            </div>
            <div className="flex flex-row items-center gap-5">
                <i class="fab fa-instagram text-pink-500 text-4xl cel:text-2xl cursor-pointer"></i>
                <i class="fab fa-facebook-square text-blue-600 cel:text-2xl text-4xl mr-4 cursor-pointer"></i>
            </div>
        </footer>
    )
}