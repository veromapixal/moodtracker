import { Button } from '../../components/Button/Button';

export const Home = () => (
  <main className="px-[80px] py-[31px]">
    <section className="grid grid-cols-2 h-[580px] w-[1900px] gap-8">
      <div className="bg-[#FEFFE5] p-8 mb-[80px] rounded-lg">
        <h1 className="text-5xl font-bold mb-[20px]">Hello! I am MoodAI,</h1>
        <h2 className="text-5xl font-bold mb-[40px]">your personal mood analyzer</h2>
        <p className="text-3xl mb-[50px]">I can help you monitor your mood level by analyzing your messages via AI and NLP.  Here, I help you gain a better understanding of your emotions and find ways to improve your well-being. In today's fast-paced world, where stress and anxiety are part of everyday life, it's essential to analyze your feelings and seek support. </p>
        <Button to="/try-out" ><h1 className="text-3xl font mb-2 pastel-yellow">Try me out!</h1></Button>
      </div>
    </section>
    <section className="rounded-lg h-[100px] mb-[20px] flex items-center justify-center">
      <Button to="/about"><h1 className="text-3xl font mb-2 pastel-yellow">Click for more information!</h1></Button>
    </section>

    <section className="bg-[#FEFFE5] rounded-lg h-[88px] flex items-center justify-center">
      <blockquote className="text-3xl italic">
        "Life becomes easier when you learn to accept an apology you never got."
      </blockquote>
    </section>
    <img 
      src="../src/assets/main_image.jpg"
      alt="Decorative header"
      className="absolute right-[290px] top-0 w-[546px] h-[656px] object-cover rounded-lg"
    />
  </main>
);