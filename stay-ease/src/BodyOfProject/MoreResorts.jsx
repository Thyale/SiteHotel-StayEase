export default function MoreResorts(){

    var imagens = [
        'Azure.jpg',
        "Ocean.jpg",
        "Paradise.jpg",
        "Serenity.jpg",
        "ImgResort1.jpg",
        "ImgResort2.jpg"
    ]

    return(
        <section className=" w-11/12 m-auto flex flex-col justify-center items-center">
            <h1 className="mt-16 text-gray-500 text-xl font-semibold text-center">Conheça mais resorts</h1>
            <div className=" flex flex-row mt-12 gap-5 flex-wrap justify-center">
                <img className="w-full max-w-96" src={imagens[0]}/>
                <img className="w-full max-w-96" src={imagens[1]}/>
                <img className="w-full max-w-96" src={imagens[2]}/>
                <img className="w-full max-w-96" src={imagens[3]}/>
                <img className="w-full max-w-96" src={imagens[4]}/>
                <img className="w-full max-w-96" src={imagens[5]}/>
            </div>
            <div className="mt-12 flex flex-row gap-5 w-11/12 max-w-5xl m-auto cel:flex-col items-center justify-around p-3 bg-gray-200 rounded-md">
                <div className="bg-white text-gray-400 flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <input className="border-transparent outline-none text-center" type="text" name="Estado" id="estado" placeholder="Escolha o estado" />
                       <span class="material-symbols-outlined">stat_minus_1</span>
                </div>
                <div className="bg-white text-gray-400 flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <input className="border-transparent outline-none text-center" type="text" name="cidade" id="cidade" placeholder="Escolha a cidade" />
                       <span class="material-symbols-outlined">stat_minus_1</span>
                </div>
                <div className="bg-orange-400 hover:bg-orange-500 text-black flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <span class="material-symbols-outlined">search</span>
                       <button>Pesquisar resorts</button>
                </div>
            </div>
        </section>
    )
}