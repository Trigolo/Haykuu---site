import hinata from "../assets/hinata.png"

export default function Person() {
  return (
    <section className="flex flex-col items-center m-14">
        <h1 className="font-titulo text-4xl">Personagem principal</h1>
        <h2 className="font-titulo text-sm">Shoyo Hinata</h2>
        <img className="p-7 w-2/5" src={hinata} alt="" />
        <p className="font-paragrafos text-lg w-2/4">Shoyo Hinata é o principal protagonista de Haikyuu!!. Ele é estudante do primeiro ano no Colégio Karasuno e é um dos bloqueadores do meio da equipe de vôlei. O sonho de Hinata é tornar-se forte o suficiente para ultrapassar os altos bloqueadores, assim como o Pequeno Gigante fez. No entanto, uma vez que ele não tem altura para um bloqueador médio, ele é especialista em saltar para compensar. Após se formar no colégio, ele viajou até o Brasil para treinar vôlei de praia por dois anos. E ao retornar para o Japão ele se tornou membro do time MSBY Black Jackals, 1ª divisão na Liga V.</p>
    </section>
  )
}
