import { Controller, Get } from "@nestjs/common";
import { ProductService } from "./product.service";

@Controller("product")
export class ProductController {
    constructor(private readonly productService : ProductService) {}
    
    @Get()
    async getAll() {
        return [{
                id: 1,
                itemName: "Tilápia",
                stock: 8,
                vendor: {
                    id: 1,
                    name: "José",
                    rating: 97
                },
                price: 35.90,
                description: `Desfrute do sabor fresco e delicioso da nossa tilápia cultivada com cuidado e qualidade! Criada em águas limpas e controladas, nossa tilápia é uma fonte excelente de proteína magra e ácidos graxos ômega-3 essenciais para uma dieta saudável.
                Frescor Garantido: Colhida diariamente para garantir máxima frescura.
                Qualidade Superior: Criada em condições ideais para assegurar o melhor sabor.
                Processo Sustentável: Comprometidos com práticas de cultivo responsáveis e sustentáveis.
                Perfeita para grelhar, assar ou preparar em uma variedade de pratos deliciosos, nossa tilápia é uma escolha excelente para refeições saudáveis e saborosas. Faça seu pedido agora e experimente a diferença do verdadeiro sabor fresco da tilápia!`
            },
            {
                id: 2,
                itemName: "Pirarucu",
                stock: 6,
                vendor: {
                    id: 2,
                    name: "Adalberto",
                    rating: 54
                },
                price: 21.75,
                description: `Desfrute do sabor fresco e delicioso da nossa tilápia cultivada com cuidado e qualidade! Criada em águas limpas e controladas, nossa tilápia é uma fonte excelente de proteína magra e ácidos graxos ômega-3 essenciais para uma dieta saudável.
                Frescor Garantido: Colhida diariamente para garantir máxima frescura.
                Qualidade Superior: Criada em condições ideais para assegurar o melhor sabor.
                Processo Sustentável: Comprometidos com práticas de cultivo responsáveis e sustentáveis.
                Perfeita para grelhar, assar ou preparar em uma variedade de pratos deliciosos, nossa tilápia é uma escolha excelente para refeições saudáveis e saborosas. Faça seu pedido agora e experimente a diferença do verdadeiro sabor fresco da tilápia!`
            }
        ]
    }
}
