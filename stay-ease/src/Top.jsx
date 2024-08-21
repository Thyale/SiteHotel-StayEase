function Top() {
    return (
      <header className="flex flex-row items-center justify-around p-4 cel:flex-col tex-blue-800">
        <img className="w-20" src="IconHotel.png" alt="ImgLogo" />
        <ul className="flex flex-row items-center gap-5 cel:flex-col cel:p-2 cel:gap-2 cel:w-11/12 cel:rounded-lg">
            <li className="cel:w-full cel:text-center"><a className="hover:text-orange-600" href="#">Como reservar</a></li>
            <li className="cel:w-full cel:text-center"><a className="hover:text-orange-600" href="#">Sobre Nós</a></li>
            <li className="cel:w-full cel:text-center"><a className="hover:text-orange-600" href="#">Informações</a></li>
            <li className="cel:w-full cel:text-center"><a className="hover:text-orange-600" href="#">Contato</a></li>
        </ul>
      </header>
    )
  }

  export default Top
  