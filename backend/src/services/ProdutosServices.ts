import prismaClient from "../prisma";

interface ProdutosCliente {
  nome: string;
  descricao: string;
  preco: string;
  image: { path: string }[];
}

class ProdutosServices {
  async cadastro_produtos({ nome, descricao, preco, image }: ProdutosCliente) {
    const resposta = await prismaClient.produtos.create({
      data: {
        nome,
        descricao,
        preco,
        image: {
          create: image,
        },
      },
    });
    return { dados: "Cadastro Efetuado Com Sucesso" };
  }
}
export { ProdutosServices };
