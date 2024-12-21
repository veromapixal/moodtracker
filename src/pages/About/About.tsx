import { Button } from '../../components/Button/Button';

export const About = () => (
  <main className="px-8 py-8">
    <section className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-[#D9D9D9] p-8 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Your personal mood analyzer</h1>
        <p className="mb-4">This site can help you monitor your mood level by analyzing your messages via AI and NLP.</p>
        <Button color="pastel-yellow" size="large">Try me out!</Button>
      </div>
      <div className="bg-[#C4C4C4] rounded-lg"></div>
    </section>

    <section className="grid grid-cols-3 gap-8 mb-8">
      <div className="bg-[#D9D9D9] rounded-lg h-[220px]"></div>
      <div className="bg-[#D9D9D9] rounded-lg h-[220px]"></div>
      <div className="bg-[#D9D9D9] rounded-lg h-[220px]"></div>
    </section>

    <section className="bg-[#D9D9D9] rounded-lg h-[88px] mb-8 flex items-center justify-center">
      <blockquote className="text-xl italic">
        "Life becomes easier when you learn to accept an apology you never got."
      </blockquote>
    </section>

    <section className="bg-[#D9D9D9] rounded-lg h-[484px]"></section>
  </main>
);