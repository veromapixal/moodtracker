import { Button } from '../../components/Button/Button';

export const About = () => (
  <main className="px-[80px] py-[31px]">
    <section className="grid grid-cols-2 h-[130px] w-[1000px] gap-8">
      <div className="bg-[#FEFFE5] p-6 mb-[80px] rounded-lg">
        <h1 className="text-5xl font-bold mb-[10px]">How does it work?</h1>
        </div>
    </section>
    <section className="bg-[#FEFFE5] h-[280px] w-[850px] p-8 mb-[40px] rounded-lg">
      <div>
        <p className="text-3xl mb-[10px]">Our platform offers a unique approach: you input text - whether it's a previously written message or a brief description of your feelings - and we analyze it using neural networks to provide personalized recommendations. Take the first step towards harmony and emotional wellness!</p>
      </div>
    </section>
    <section className="grid grid-cols-3 gap-8 mb-4">
      <div> 
        <h1 className="bg-[#FEFFE5] text-3xl text-center p-1 rounded-lg font-bold mb-[10px]">Step 1: Text Input</h1>
        <p className="bg-[#FEFFE5]  text-center rounded-lg h-[220px] p-4 text-2xl">Enter text that reflects your current state or emotions. This can be any message you?ve written before or a description of how you feel right now. Our platform provides an easy-to-use interface for seamless input.</p>
      </div>
      <div>
        <h1 className="bg-[#FEFFE5] text-3xl text-center p-1 rounded-lg font-bold mb-[10px]">Step 2: Neural Network Analysis </h1>
        <p className="bg-[#FEFFE5] text-center rounded-lg h-[220px] p-4 text-2xl">Once the text is entered, the analysis begins. Our neural network processes your text, identifying key emotions and mood. We utilize advanced natural language processing technologies for an accurate assessment of your emotional state.</p>
      </div>
      <div>
        <h1 className="bg-[#FEFFE5] text-3xl text-center p-1 rounded-lg font-bold mb-[10px]">Step 3: Personalized Recommendations</h1>
        <p className="bg-[#FEFFE5]  text-center rounded-lg h-[220px] p-4 text-2xl">Based on the analysis, you will receive recommendations for improving your well-being. These may include advice on meditation, physical exercises, or lifestyle changes. We aim to help you find pathways to emotional wellness and harmony.</p>
      </div>
    </section>

    <section className="rounded-lg h-[100px] mb-[60px] flex items-center justify-center">
      <Button to="/try-out"><h1 className="text-4xl font mb-4 pastel-yellow">Let's try!</h1></Button>
    </section>
    <img 
      // src="https://images.unsplash.com/photo-1508615070457-7baeba4003ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      src="../src/assets/main_image.jpg"
      alt="Decorative header"
      className="absolute right-[350px] top-0 w-[506px] h-[512px] object-cover rounded-lg"
    />
  </main>
);