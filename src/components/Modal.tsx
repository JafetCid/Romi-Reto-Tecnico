'use client';

type propsModal = {
    isOpen: boolean;
    title: string;
    onClose: () => void;
}

export default function Modal({ isOpen, title, onClose }: propsModal) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-transparent bg-opacity-50 transition-opacity" onClick={onClose}></div>

          {/* Contenedor del modal */}
          <div className="flex min-h-screen items-center justify-center p-4 text-center">
            <div className="relative overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-full max-w-md">
              {/* Contenido del modal */}
              <div className="bg-white p-6">
                <div className="flex justify-between items-start">
                  <h2 className="text-2xl font-bold text-gray-900 text-center w-full">{title}</h2>
                </div>

                <div className="mt-4 mb-4 text-center">
                  <span className="text-green-500 text-5xl"><i className="bi bi-check-circle"></i></span>
                </div>

                <div className="flex justify-center pt-4">
                  <button
                    onClick={onClose}
                    className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
