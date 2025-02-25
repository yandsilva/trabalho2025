import { ChevronLeft } from "lucide-react";
import AdicionarCardapio from "./AdicionarCardapio";
import { useState } from "react";

export default function ProdutosCardapio() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-4">
      <div className="flex mb-10 justify-between">
        <div className="flex items-center gap-2">
          <ChevronLeft />
          <h2 className="text-[#D99455] text-2xl">Produtos do Cardápio</h2>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#1F8A4A] hover:bg-[#1f8a4ad0] cursor-pointer p-3 text-xl text-white"
        >
          Novo Produto
        </button>
      </div>
      <div>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px] border border-solid border-[#cacaca]">
          <b>Imagem</b>
          <b>Nome</b>
          <b>Preço</b>
          <b>Excluir</b>
        </div>
        <div className="grid grid-cols-[0.5fr_2fr_1fr_0.5fr] items-center gap-2.5 py-3 px-[15px]">
          <p>imagem</p>
          <p>imagem</p>
          <p>imagem</p>
          <p>imagem</p>
        </div>
      </div>
      <AdicionarCardapio isOpen={isOpen} setIsOpen={() => setIsOpen(!isOpen)} />
    </div>
  );
}
