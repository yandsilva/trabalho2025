import { useState } from "react";
import { X } from "lucide-react";

const MODAL_STYLES = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
};

export default function AdicionarCardapio({ isOpen, setIsOpen }) {
  const [imagePreview, setImagePreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  if (isOpen) {
    return (
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-black/50 z-50">
        <div style={MODAL_STYLES} className="max-w-[500px] w-full bg-white p-5">
          <div className="flex justify-between items-center">
            <p className="text-[#D99455] text-lg font-semibold">
              Adicionar ao cardápio
            </p>
            <div className="cursor-pointer p-2 rounded-full transition ease-in-out hover:bg-black/20">
              <X onClick={setIsOpen} />
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 w-full rounded-md focus:outline-none focus:border-[#D99455]"
            />
          </div>
          {imagePreview && (
            <div className="mt-4 flex flex-col items-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-[200px] h-auto object-cover rounded-md"
              />
            </div>
          )}
          <hr className="my-4" />
          <div className="mt-10 flex flex-col gap-5">
            <div className="flex flex-col gap-1 w-fit">
              <label>Nome do Produto</label>
              <input className="border" type="text" />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <label>Preço do Produto</label>
              <input className="border" type="text" />
            </div>
            <div className="flex flex-col gap-1 w-fit">
              <label>Descrição do Produto</label>
              <input className="border" type="text" />
            </div>
          </div>
          <hr className="mt-10 mb-4" />
          <button className="bg-[#1F8A4A] hover:bg-[#1f8a4ad0] cursor-pointer text-white p-3 rounded-md w-full">
            Salvar
          </button>
        </div>
      </div>
    );
  }
  return null;
}
