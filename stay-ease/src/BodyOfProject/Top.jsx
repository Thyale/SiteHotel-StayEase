function Top() {
    return (
      <header className="flex flex-row items-center justify-around p-4 cel:flex-col text-blue-800 dark:text-blue-100">
        <i class="fas fa-hotel text-4xl text-blue-950 dark:text-blue-100"></i>
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
  