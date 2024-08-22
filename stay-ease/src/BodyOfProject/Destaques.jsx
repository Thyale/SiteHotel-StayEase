import { useState } from "react";

export default function Destaques(){

    const [selectResort, setSelectResort] = useState ({
        name : "Aurum Haven Resort & Spa",
        descripton : "Um refúgio de luxo situado em uma enseada dourada, o Aurum Haven Resort & Spa oferece uma experiência incomparável de relaxamento e sofisticação. Com tratamentos de spa de classe mundial, piscinas de borda infinita com vistas deslumbrantes para o oceano, e uma gastronomia refinada que combina ingredientes frescos e sabores exóticos, este resort é o destino perfeito para quem busca tranquilidade e bem-estar.",
        image : "Resort1.jpeg"
    })

    var ResortF = {
        name : "Aurum Haven Resort & Spa",
        descripton : "Um refúgio de luxo situado em uma enseada dourada, o Aurum Haven Resort & Spa oferece uma experiência incomparável de relaxamento e sofisticação. Com tratamentos de spa de classe mundial, piscinas de borda infinita com vistas deslumbrantes para o oceano, e uma gastronomia refinada que combina ingredientes frescos e sabores exóticos, este resort é o destino perfeito para quem busca tranquilidade e bem-estar.",
        image : "Resort1.jpeg"
    }

    var ResortS = {
        name : " Serenity Bay Luxury Retreat",
        descripton : "Localizado em uma baía serena onde o luxo encontra a natureza, o Serenity Bay Luxury Retreat é um santuário de paz e elegância. Com suas suítes espaçosas que oferecem vistas panorâmicas para o mar e um design que harmoniza perfeitamente com a paisagem natural, este resort é ideal para quem busca um refúgio para relaxar e se reconectar com a natureza.",
        image : "Resort2.jpg"
    }

    var ResortT = {
        name : " Celestial Sands Grand Resort",
        descripton : "O Celestial Sands Grand Resort é um majestoso complexo de luxo situado em praias de areia branca e fina, onde o céu e o mar se encontram em perfeita harmonia. Este resort oferece uma combinação única de opulência e conforto, com acomodações espaçosas e elegantemente decoradas, todas com vistas deslumbrantes do horizonte oceânico. Os hóspedes podem desfrutar de uma variedade de atividades, desde mergulho em recifes de corais até relaxar em cabanas privadas à beira-mar.",
        image : "Resort3.jpg"
    }

    function resort (Number){
        if(Number == 1){
            setSelectResort(ResortF)
        }else if(Number == 2){
            setSelectResort(ResortS)
        }else if(Number == 3){
            setSelectResort(ResortT)
        }
    }

    return(
        <section className="flex flex-col gap-3">
            <div className="flex flex-row justify-center gap-5 p-7">
                <p className="shadow-md py-4 px-7 cursor-pointer hover:bg-slate-200  dark:hover:bg-gray-950 rounded-md font-bold text-orange-500" onClick={() => resort(1)}>1</p>
                <p className="shadow-md py-4 px-7 cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-950 rounded-md font-bold  text-orange-500" onClick={() => resort(2)}>2</p>
                <p className="shadow-md py-4 px-7 cursor-pointer hover:bg-slate-200 dark:hover:bg-gray-950 rounded-md font-bold  text-orange-500" onClick={() => resort(3)}>3</p>
            </div>
            <div className="w-11/12 m-auto flex flex-row items-center justify-around cel:flex-col gap-5">
               <div>
                    <p className="text-gray-500 uppercase font-semibold text-xs mb-3">Resort em destaque</p>
                    <h1 className="text-gray-600 dark:text-gray-300 font-bold text-3xl">{selectResort.name}</h1>
                    <p className="text-gray-400 font-semibold text-xs my-4">Hotel qualidade 5 estrelas</p>
                    <p className="max-w-lg dark:text-gray-400 text-gray-500 text-sm mb-5">{selectResort.descripton}</p>
                    <button className="bg-orange-400 hover:bg-orange-500 text-gray-700 font-bold py-2 px-3 rounded-lg cursor-pointer mb-7">Solicitar reserva</button>
               </div>
               <div>
                    <img className="w-full max-w-md rounded-md" src={selectResort.image} alt="Imagem Do Hotel destaque" />
               </div>
            </div>
        </section>
    )
}