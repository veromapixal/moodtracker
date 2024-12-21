import { Button } from '../../components/Button/Button';

export const Home = () => (
  <main className="px-[80px] py-[80px]">
    <section className="grid grid-cols-2 h-[600px] gap-8 mb-[50px]">
      <div className="bg-[#FEFFE5] p-8 mb-[80px] rounded-lg">
        <h1 className="text-7xl font-bold mb-[30px]">Hello! I am MoodAI,</h1>
        <h2 className="text-7xl font-bold mb-[100px]">your personal mood analyzer</h2>
        <p className="text-5xl mb-[100px]">I can help you monitor your mood level by analyzing your messages via AI and NLP.</p>
        <Button color="pastel-yellow" size="large">Try me out!</Button>
      </div>
    </section>
    <section className="rounded-lg h-[100px] mb-[60px] flex items-center justify-center">
      <Button color="pastel-yellow" size="large">Click for more information!</Button>
    </section>

    <section className="bg-[#FEFFE5] rounded-lg h-[88px] mb-8 flex items-center justify-center">
      <blockquote className="text-3xl italic">
        "Life becomes easier when you learn to accept an apology you never got."
      </blockquote>
    </section>
    <img 
      // src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      src="../src/assets/main_image.jpg"
      alt="Decorative header"
      className="absolute right-[300px] top-0 w-[546px] h-[662px] object-cover rounded-lg"
    />
  </main>
);