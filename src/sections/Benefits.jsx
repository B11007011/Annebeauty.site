import { counter } from "../data"

export default function Benefits() {
  return (
    <section className="my-[50px] lg:my-[100px]">
        <div className="wrapper ">
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-16">
            {counter.map((item, index) => (
                <li className="" key={index}>
                    <h2 className="mb-2">{item.counterNumber}<span className="font-sans font-light text-3xl lg:text-4xl">+</span></h2>
                    <h3 className="mb-4">{item.counterTitle}</h3>
                    <p>{item.counterDesc}</p>
                </li>
            ))}
            </ul>
        </div>
    </section>
  )
}