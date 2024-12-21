import { useState } from 'react';
import { Button } from '../../components/Button/Button';

export const TryOut = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleButtonClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center px-[80px] py-[100px]">
      <section className="flex items-center justify-center h-[130px] w-full mb-[40px]"> {/* Уменьшено расстояние до 40px */}
        <div className="bg-[#FEFFE5] p-6 rounded-lg text-center">
          <h1 className="text-3xl font">Hello! Let me help you with your emotions. Feel free to share how you're feeling or any message you've written:</h1>
        </div>
      </section>
      
      <section className="bg-[#FEFFE5] h-[400px] w-full max-w-[1400px] p-8 mb-[40px] rounded-lg flex flex-col items-center justify-center">
        <textarea 
          placeholder="Type something..." 
          className="border-none bg-transparent w-full h-full resize-none focus:outline-none"
          rows="4" 
        />
      </section>

      <section className="rounded-lg h-[100px] mb-[60px] flex items-center justify-center">
        <Button onClick={handleButtonClick}>
          <h1 className="text-4xl font mb-4 pastel-yellow">Let's try!</h1>
        </Button>
      </section>

      <section className="absolute right-[500px] bg-[#FEFFE5] text-center top-2 w-[230px] p-2 h-[52px] rounded-lg">
        <h1 className="text-4xl italic font-semibold">Trial Version</h1>
      </section>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Hello!</h2>
            <p>Your input has been submitted.</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
