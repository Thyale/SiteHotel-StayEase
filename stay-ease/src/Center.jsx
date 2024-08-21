function Center(){
    return(
        <section className="ImgDeFundo text-white text-xl py-40 flex items-center justify-center">
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                    <h1 className="text-5xl cel:text-4xl text-center">Onde você quer ir?</h1>
                    <p className="text-center">Escolha o estado e a cidade para achar os melhores resorts.</p>
                </div>
                <div className="flex flex-row gap-5 cel:flex-col items-center justify-around">
                    <div className="bg-white text-gray-400 flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <input className="border-transparent outline-none w-full text-center" type="text" name="Estado" id="estado" placeholder="Escolha o estado" />
                       <span class="material-symbols-outlined">stat_minus_1</span>
                    </div>
                    <div className="bg-white text-gray-400 flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <input className="border-transparent outline-none w-full text-center" type="text" name="cidade" id="cidade" placeholder="Escolha a cidade" />
                       <span class="material-symbols-outlined">stat_minus_1</span>
                    </div>
                    <div className="bg-orange-400 hover:bg-orange-500 text-black flex flex-row itens-center gap-5 p-3 rounded w-11/12 justify-center">
                       <span class="material-symbols-outlined">search</span>
                       <button>Pesquisar resorts</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Center