import { food_list } from "../assets/assets";
import ProductItem from "./ProductItem";

export default function DisplayItem() {
  return (
    <div className="flex gap-20 flex-col">
      <div className="flex flex-col mt-10 items-center justify-center">
        <h2 className="text-6xl">Lanche</h2>
        <div className="w-1/6 bg-[#D99455] h-[3px]"></div>
      </div>
      <div>
        {food_list.map((item) => (
          <ProductItem
            key={item.nome}
            nome={item.nome}
            preco={item.preco}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </div>
    </div>
  );
}
