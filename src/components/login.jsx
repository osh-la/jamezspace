import React, { useState } from "react";

function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
     
      <div className="space-y-4">
        <button
          onClick={openModal}
          className="text-blue-500 hover:underline"
        >
          Restricted Link 1
        </button>
        <button
          onClick={openModal}
          className="text-blue-500 hover:underline"
        >
          Restricted Link 2
        </button>
      </div>

 
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-96 p-6 relative">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form>
              <label className="block mb-2 font-semibold" htmlFor="username">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <label className="block mb-2 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 border rounded-lg mb-4"
                required
              />
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 w-full"
              >
                Login
              </button>
            </form>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
