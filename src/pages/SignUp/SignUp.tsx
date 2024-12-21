import { useState } from 'react';
import { Button } from '../../components/Button/Button';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isModalOpen, setModalOpen] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    // Здесь можно добавить логику регистрации
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <main className="flex flex-col items-center px-[80px] py-[100px]">
      <section className="flex items-center justify-center h-[130px] w-full mb-[20px]">
        <div className="bg-[#FEFFE5] p-6 rounded-lg text-center">
          <h1 className="text-3xl font">Create Your Account</h1>
        </div>
      </section>

      <section className="bg-[#FEFFE5] w-full max-w-[400px] p-8 mb-[40px] rounded-lg flex flex-col items-center text-center">
        <form onSubmit={handleRegister} className="flex flex-col w-full">
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4 p-2 border rounded focus:outline-none"
            required
          />
          <input 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 p-2 border rounded focus:outline-none"
            required
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 p-2 border rounded focus:outline-none"
            required
          />
          <Button type="submit" className="w-full max-w-[200px]">
            <h1 className="text-4xl font pastel-yellow text-center">Register</h1> 
        </Button>
        </form>
      </section>
      <section className="absolute right-[500px] bg-[#FEFFE5] text-center top-2 w-[230px] p-2 h-[52px] rounded-lg">
        <h1 className="text-4xl italic font-semibold">Registration</h1>
      </section>

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">Registration Successful!</h2>
            <p>Welcome, {name}! Your account has been created.</p>
            <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
};
