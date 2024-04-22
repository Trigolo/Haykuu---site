import haikyuufoto1 from "../assets/haikyuufoto1.png"
import hinata from "../assets/hinata.png"
import Header from "../components/Header"

export default function Haykuu() {
  return (
    <main>

    <Header/>

    <div id="ha" className="flex flex-col items-center">
        <h1 className="font-titulo text-4xl">Haikyu!!:  the movie: decisive battle at the garbage dump</h1>
        <h2 className="font-titulo text-sm">Série de manga</h2>
        <img className="p-7 w-2/5" src={haikyuufoto1} alt="imagem Haikyuu" />
        <p className="font-paragrafos text-lg w-2/4">Haikyuu!! é um dos animes mais populares dos últimos anos, bastante comentado nas redes sociais. A série japonesa traz a história de Shoyo Hinata, um estudante que se torna amante do volêi e, durante o ensino médio, ingressa no colégio Karasuno para seguir seus sonhos no esporte. A produção está no ar desde 2014, com quatro temporadas até o momento, e pode ser assistida pela plataforma de streaming  <a className="font-titulo font-bold text-orange uppercase " href="https://www.techtudo.com.br/tudo-sobre/crunchyroll/" target="_blank">Crunchyroll.</a></p>
    </div>
  
    <div id="pe" className="flex flex-col items-center m-14">
        <h1 className="font-titulo text-4xl">Personagem principal</h1>
        <h2 className="font-titulo text-sm">Shoyo Hinata</h2>
        <img className="p-7 w-2/5" src={hinata} alt="" />
        <p className="font-paragrafos text-lg w-2/4">Shoyo Hinata é o principal protagonista de Haikyuu!!. Ele é estudante do primeiro ano no Colégio Karasuno e é um dos bloqueadores do meio da equipe de vôlei. O sonho de Hinata é tornar-se forte o suficiente para ultrapassar os altos bloqueadores, assim como o Pequeno Gigante fez. No entanto, uma vez que ele não tem altura para um bloqueador médio, ele é especialista em saltar para compensar. Após se formar no colégio, ele viajou até o Brasil para treinar vôlei de praia por dois anos. E ao retornar para o Japão ele se tornou membro do time MSBY Black Jackals, 1ª divisão na Liga V.</p>
    </div>
    </main>
    
  )
}
