import haikyuufoto1 from "../assets/haikyuufoto1.png"

export default function Haykuu() {
  return (
    <section className="flex flex-col items-center">
        <h1 className="font-titulo text-4xl">Haikyu!!:  the movie: decisive battle at the garbage dump</h1>
        <h2 className="font-titulo text-sm">Série de manga</h2>
        <img className="p-7 w-2/5" src={haikyuufoto1} alt="imagem Haikyuu" />

        <p className="font-paragrafos text-lg w-2/4">Haikyuu!! é um dos animes mais populares dos últimos anos, bastante comentado nas redes sociais. A série japonesa traz a história de Shoyo Hinata, um estudante que se torna amante do volêi e, durante o ensino médio, ingressa no colégio Karasuno para seguir seus sonhos no esporte. A produção está no ar desde 2014, com quatro temporadas até o momento, e pode ser assistida pela plataforma de streaming  <a className="font-titulo font-bold text-orange uppercase " href="https://www.techtudo.com.br/tudo-sobre/crunchyroll/" target="_blank">Crunchyroll.</a></p>
    </section>
  )
}
