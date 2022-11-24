import { CoffeeType } from '../@types/Coffee';
import americanoImg from '../assets/coffees/americano.png'
import arabeImg from '../assets/coffees/arabe.png'
import cafeComLeiteImg from '../assets/coffees/cafe-com-leite.png'
import cafeGeladoImg from '../assets/coffees/cafe-gelado.png'
import capuccinoImg from '../assets/coffees/capuccino.png'
import chocolateQuenteImg from '../assets/coffees/chocolate-quente.png'
import cubanoImg from '../assets/coffees/cubano.png'
import expressoCremosoImg from '../assets/coffees/expresso-cremoso.png'
import expressoImg from '../assets/coffees/expresso.png'
import havaianoImg from '../assets/coffees/havaiano.png'
import irlandesImg from '../assets/coffees/irlandes.png'
import latteImg from '../assets/coffees/latte.png'
import macchiatoImg from '../assets/coffees/macchiato.png'
import mochaccinoImg from '../assets/coffees/mochaccino.png'

export const coffees: CoffeeType[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    image: expressoImg,
    tags: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    priceInCents: 990,
  },
  {
    id: "2",
    title: "Expresso Americano",
    image: americanoImg,
    tags: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    priceInCents: 990,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    image: expressoCremosoImg,
    tags: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    priceInCents: 990,
  },
  {
    id: "4",
    title: "Expresso Gelado",
    image: cafeGeladoImg,
    tags: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    priceInCents: 990,
  },
  {
    id: "5",
    title: "Café com Leite",
    image: cafeComLeiteImg,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    priceInCents: 990,
  },
  {
    id: "6",
    title: "Latte",
    image: latteImg,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    priceInCents: 990,
  },
  {
    id: "7",
    title: "Capuccino",
    image: capuccinoImg,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    priceInCents: 990,
  },
  {
    id: "8",
    title: "Macchiato",
    image: macchiatoImg,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    priceInCents: 990,
  },
  {
    id: "9",
    title: "Mocaccino",
    image: mochaccinoImg,
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    priceInCents: 990,
  },
  {
    id: "10",
    title: "Chocolate Quente",
    image: chocolateQuenteImg,
    tags: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    priceInCents: 990,
  },
  {
    id: "11",
    title: "Cubano",
    image: cubanoImg,
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    priceInCents: 990,
  },
  {
    id: "12",
    title: "Havaiano",
    image: havaianoImg,
    tags: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    priceInCents: 990,
  },
  {
    id: "13",
    title: "Árabe",
    image: arabeImg,
    tags: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    priceInCents: 990,
  },
  {
    id: "14",
    title: "Irlandês",
    image: irlandesImg,
    tags: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    priceInCents: 990,
  },
];
