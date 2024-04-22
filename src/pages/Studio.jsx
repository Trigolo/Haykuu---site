import estudio from "../assets/estudio.png"

export default function Studio() {
  return (
    <section id="st" className="flex flex-col items-center">
        <h1 className="font-titulo text-4xl">Estúdio</h1>
        <img className="m-16 w-2/6" src={estudio} alt="" />
        <p className="font-paragrafos text-lg w-2/4 ">A série de televisão de animé foi produzida pelo estúdio Production I.G e exibida entre 6 de abril e 21 de setembro de 2014 no canal Mainichi Broadcasting System, uma estação da Japan News Network, também foi exibida através de fluxo de média na Crunchyroll. Do episódio 1 até ao 13, o tema de abertura foi "Imagination", interpretado por SPYAIR e o tema de encerramento foi "Tenchi Gaeshi", interpretado por Nico Touches the Walls. Do décimo quinto episódio em diante, a abertura foi "Ah Yeah", interpretada por Sukima Switch e o encerramento foi "LEO", com interpretação de Tacica."Ah Yeah" também foi o tema de encerramento do décimo quarto episódio, que não teve abertura. O animé foi licenciado na América do Norte pela Sentai Filmworks.</p>
    </section>
  )
}
