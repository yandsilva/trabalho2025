import { Request, Response } from "express";
import { ProdutosServices } from "../services/ProdutosServices";

class ProdutosControllers {
  async cadastro_produtos(req: Request, res: Response) {
    try {
      const { nome, descricao, preco } = req.body;
      console.log(nome, descricao, preco);
      const image_filename = req.files as Express.Multer.File[];
      console.log(image_filename);

      const image = image_filename.map((file) => {
        return {
          path: file.filename,
        };
      });
      // console.log(image);

      const produtosServices = new ProdutosServices();
      const produtos = await produtosServices.cadastro_produtos({
        nome,
        descricao,
        preco,
        image,
      });

      res.status(201).json({ message: "Produto cadastrado!", produtos });
    } catch (error) {
      res.status(500).json({ error: "Erro na criação do produto" });
    }
  }
}
export { ProdutosControllers };
