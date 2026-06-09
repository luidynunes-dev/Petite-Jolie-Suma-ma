export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  colors: string[];
  isNew?: boolean;
  description?: string;
}

export const categories = ["Todos", "Bolsas", "Calçados", "Acessórios", "Lançamentos"];

export const products: Product[] = [
  {
    id: "PJ_ICON_BAG",
    name: "Bolsa Icon Bag",
    category: "Bolsas",
    price: 229.99,
    image: "https://i.postimg.cc/cLq2Mc6g/Bolsa-Icon-Bag-R-229-99.jpg",
    colors: [],
    description: "Bolsa feminina compacta e moderna. Produzida em J-Lastic, material exclusivo da Petite Jolie. Alça curta em correntaria + alça tiracolo regulável e removível. Fechamento em zíper para mais segurança. Bag charms decorativos que adicionam personalidade. Ideal para looks urbanos e produções do dia a dia.",
    isNew: true
  },
  {
    id: "PJ_CROSS_PRETO",
    name: "Bolsa Feminina Cross III Preto Petite Jolie",
    category: "Bolsas",
    price: 99.99,
    image: "https://i.postimg.cc/LXsb6C06/Bolsa-Feminina-Cross-Preto-Petite-Jolie-R-99-99.jpg",
    colors: ["#000000"],
    description: "A Cross voltou de cara nova! Atemporal é o nome dela! Combina com os mais diversos estilos de looks e de ocasiões.",
    isNew: false
  },
  {
    id: "PJ_AMALFI_PRETO",
    name: "Bolsa Petite Jolie Amalfi Preto PJ11392",
    category: "Bolsas",
    price: 299.99,
    image: "https://i.postimg.cc/FRnnfy24/Bolsa-Petite-Jolie-Amalfi-Preto-R-299-99.jpg",
    colors: ["#000000"],
    description: "Bolsa Sacola Amalfi – Shopping bag feminina em J-Lastic A Amalfi é a shopping bag feminina que simplifica a rotina com estilo. Com design clean e contemporâneo, essa bolsa de ombro grande é feita em J-Lastic, material exclusivo da marca, leve, resistente e fácil de limpar. O acabamento fosco traz um toque moderno e sofisticado, enquanto as alças largas e confortáveis, com detalhes em ilhoses e fivelas, garantem praticidade e conforto no dia a dia. O amplo espaço interno e o fechamento em botão ímã tornam a Amalfi perfeita para quem busca uma shopping bag versátil, que combina com diferentes estilos e acompanha o ritmo da cidade, do trabalho aos momentos de lazer, sem perder o charme nem o conforto.",
    isNew: true
  },
  {
    id: "PJ_BIG_SHOPPING_PRETO",
    name: "Bolsa Petite Jolie Big Shopping Preto PJ11393",
    category: "Bolsas",
    price: 299.99,
    image: "https://i.postimg.cc/zBPPLC91/Bolsa-Petite-Jolie-Big-Shopping-Preto-R-299-99.jpg",
    colors: ["#000000"],
    description: "Bolsa Sacola Big Shopping em J-Lastic com zíper. A Big Shopping é uma bolsa grande feminina feita para quem busca praticidade sem abrir mão do estilo. Produzida em J-Lastic com acabamento fosco, ela combina leveza, resistência e um visual moderno. As alças de ombro largas garantem conforto, enquanto o fechamento por zíper superior oferece segurança e fácil acesso. Com amplo espaço interno e bolso externo personalizado, a Big Shopping é a escolha ideal para quem quer uma shopping bag versátil que acompanha a rotina com elegância.",
    isNew: false
  },
  {
    id: "PJ_HEAVEN_CHOCOLATE",
    name: "Bolsa Petite Jolie Heaven Chocolate PJ11160",
    category: "Bolsas",
    price: 229.99,
    image: "https://i.postimg.cc/9MNN4dvQ/Bolsa-Petite-Jolie-Heaven-Chocolate-R-229-99.jpg",
    colors: ["#7B3F00"],
    description: "A bolsa Heaven retorna de cara nova! É uma tote bag superespaçosa com textura tramada que se assemelha ao linho. O modelo conta com ambas alças de ombro e de mão, trazendo ainda mais segurança e praticidade. Essa é a bolsa perfeita para a rotina movimentada da mulher moderna. Seja no trabalho, faculdade ou cursinho, a bolsa Heaven tem espaço para levar todos os seus itens pessoais. Aposte!",
    isNew: true
  },
  {
    id: "PJ_LAUREN_DOCE",
    name: "Bolsa Petite Jolie Lauren Doce De Leite PJ11015",
    category: "Bolsas",
    price: 269.99,
    image: "https://i.postimg.cc/PxFFLWBp/Bolsa-Petite-Jolie-Lauren-Doce-de-Leite-R-269-99.jpg",
    colors: ["#D2B48C"],
    description: "Bolsa shape baú estruturada com efeito canelado. Possui fechamento por zíper, bolso frontal com zíper e alça tiracolo em gorgorão. Ideal para uso diário.",
    isNew: false
  },
  {
    id: "PJ_MAY_CHOCOLATE",
    name: "Bolsa Petite Jolie May Chocolate PJ11410",
    category: "Bolsas",
    price: 269.99,
    image: "https://i.postimg.cc/85nnFRqF/Bolsa-Petite-Jolie-May-Chocolate-R-269-99.jpg",
    colors: ["#7B3F00"],
    description: "Bolsa May Baguete Média. O clássico shape baguete ganha um upgrade moderno na Bolsa May Média, que une a sofisticação do acabamento fosco à praticidade do J-Lastic. O material leve e resistente garante um visual clean e fácil de limpar, ideal para o ritmo do dia a dia. Com fechamento por botão ímã e divisória interna, o modelo organiza seus essenciais com estilo e funcionalidade. Sua versatilidade transita do look urbano ao elegante, com alças de mão ou tiracolo regulável que se adaptam ao seu momento. Para personalizar o visual, o lenço e o mini case em J-Lastic são acessórios removíveis. O mini case pode ser usado de diferentes formas, inclusive como porta fone de ouvido. Já o lenço adiciona charme e personalidade à bolsa e também pode ser usado separadamente para compor o look, ampliando as possibilidades de styling.",
    isNew: true
  },
  {
    id: "PJ_OLGA_CHOCOLATE",
    name: "Bolsa Petite Jolie Olga Chocolate PJ10072",
    category: "Bolsas",
    price: 269.99,
    image: "https://i.postimg.cc/hj33JLHQ/Bolsa-Petite-Jolie-Olga-Chocolate-R-269-99.jpg",
    colors: ["#7B3F00"],
    description: "Sendo estruturada, segura e funcional, a bolsa Olga é ideal para o dia a dia. Sua textura em matelassê agrega informação de moda ao modelo e suas alças com detalhes em correntes o tornam mais moderno.",
    isNew: false
  }
];
