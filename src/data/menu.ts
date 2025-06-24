import sushi1 from '../assets/sushi1.jpg';
import ramen1 from '../assets/ramen1.jpg';
import temaki from '../assets/temaki.jpg';
import sushi2 from '../assets/sushi2.jpg';
import mochi from '../assets/mochi.jpg';
import yuzu from '../assets/yuzu.png'  
import gunkan from '../assets/salmao-gunkan.jpg';
import nigiri from '../assets/nigiri-atum.jpg';
import kappamaki from '../assets/kappamaki.avif';
import urumaki from '../assets/urumaki-california.jpg';
import curry from '../assets/curry-ramen.jpg';
import shio from '../assets/shio-ramen.avif';
import tonkostu from '../assets/tonkotsu-ramen.jpg';
import miso from '../assets/myso-ramen.webp';
import shoyu from '../assets/shoyu-ramen.webp';
import temakiAtum from '../assets/temaki-atum.avif'
import temakiCalifornia from '../assets/temaki-california.jpg'
import temakiSkin from '../assets/temaki-skin.jpg'
import chaVerde from '../assets/cha-verde-gelado.avif'
import cocaCola from '../assets/coca-cola.jpg'
import dorayaki from '../assets/dorayaki.jpg'
import taiyaki from '../assets/taiyaki.jpg'
import anmitsu from '../assets/anmitsu.jpg'
import castella from '../assets/castella.jpg'



export interface Produto {
    id: number
    nome: string
    descricao: string
    preco: number
    imagem: string
    categoria: string
}
export const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Sushi Clássico',
    descricao: 'Arroz, peixe fresco e alga nori.',
    preco: 25.0,
    imagem: sushi1,
    categoria: 'Sushi'
  },
  {
    id: 2,
    nome: 'Ramen Tonkotsu',
    descricao: 'Caldo cremoso, fatias de porco e ovo cozido.',
    preco: 32.5,
    imagem: ramen1,
    categoria: 'Ramen'
  },
  {
    id: 3,
    nome: 'Temaki Salmão',
    descricao: 'Cone de alga recheado com arroz e salmão.',
    preco: 15.0,
    imagem: temaki,
    categoria: 'Temaki'
  },
  {
    id: 4,
    nome: 'Susoshi Vegano',
    descricao: 'Abacate, pepino e cenoura em alga.',
    preco: 22.0,
    imagem: sushi2,
    categoria: 'Sushi'
  },
  {
    id: 5,
    nome: 'Mochi de Chá Verde',
    descricao: 'Doce japonês com recheio de matchá.',
    preco: 8.0,
    imagem: mochi,
    categoria: 'Sobremesas'
  },
  {
    id: 6,
    nome: 'Suco de Yuzu',
    descricao: 'Refrescante cítrico japonês.',
    preco: 10.0,
    imagem: yuzu,
    categoria: 'Bebidas'
  },
  {
  id: 7,
  nome: 'Salmão Gunkan',
  descricao: 'Arroz com tartar de salmão.',
  preco: 28.0,
  imagem: gunkan,
  categoria: 'Sushi'
},
{
  id: 8,
  nome: 'Nigiri de Atum',
  descricao: ' Arroz com atum cru.',
  preco: 26.0,
  imagem: nigiri,
  categoria: 'Sushi'
},
{
  id: 9,
  nome: 'Hossomaki de Pepino',
  descricao: 'Sushi fino com pepino.',
  preco: 18.0,
  imagem: kappamaki,
  categoria: 'Sushi'
},
{
  id: 10,
  nome: 'Uramaki Califórnia',
  descricao:  'Kani, manga e pepino.',
  preco: 22.0,
  imagem: urumaki,
  categoria: 'Sushi'
},
{
  id: 11,
  nome: 'Shoyu Ramen',
  descricao: 'Caldo leve de shoyu com macarrão e ovos.',
  preco: 38.0,
  imagem: shoyu,
  categoria: 'Ramen'
},
{
  id: 12,
  nome: 'Miso Ramen',
  descricao: ' Caldo de miso com porco, milho e bambu.',
  preco: 42.0,
  imagem: miso,
  categoria: 'Ramen'
},
{
  id: 13,
  nome: 'Tonkotsu Ramen',
  descricao: 'Caldo intenso de porco com chashu e ovo.',
  preco: 45.0,
  imagem: tonkostu,
  categoria: 'Ramen'
},
{
  id: 14,
  nome: 'Shio Ramen',
  descricao: 'Caldo suave de sal com frango e cogumelos.',
  preco: 40.0,
  imagem: shio,
  categoria: 'Ramen'
},
{
  id: 15,
  nome: 'Curry Ramen',
  descricao: 'Caldo de curry picante com carne e legumes.',
  preco: 43.0,
  imagem: curry,
  categoria: 'Ramen'
},
{
  id: 16,
  nome: 'Temaki Atum',
  descricao: 'Cone de alga com arroz, atum cru e cebolinha.',
  preco: 18.0,
  imagem: temakiAtum,
  categoria: 'Temaki'
},
{
  id: 17,
  nome: 'Temaki Califórnia',
  descricao: 'Recheado com kani, manga e cream cheese.',
  preco: 17.0,
  imagem: temakiCalifornia,
  categoria: 'Temaki'
},
{
  id: 18,
  nome: 'Temaki Skin',
  descricao: 'Pele de salmão grelhada com molho tarê.',
  preco: 19.5,
  imagem: temakiSkin,
  categoria: 'Temaki'
},
{
  id: 19,
  nome: 'Chá Verde Gelado',
  descricao: 'Refrescante e levemente amargo.',
  preco: 9.0,
  imagem: chaVerde,
  categoria: 'Bebidas'
},
{
  id: 20,
  nome: 'Coca-Cola',
  descricao: 'Refrigerante clássico, gelado e refrescante.',
  preco: 8.0,
  imagem: cocaCola,
  categoria: 'Bebidas'
},
{
  id: 21,
  nome: 'Dorayaki',
  descricao: 'Panquecas recheadas com pasta doce de feijão azuki.',
  preco: 12.0,
  imagem: dorayaki,
  categoria: 'Sobremesas'
},
{
  id: 22,
  nome: 'Taiyaki',
  descricao: 'Biscoito em forma de peixe recheado com feijão azuki ou creme.',
  preco: 14.0,
  imagem: taiyaki,
  categoria: 'Sobremesas'
},
{
  id: 23,
  nome: 'Anmitsu',
  descricao: 'Gelatina de ágar-ágar com frutas, feijão azuki e calda doce.',
  preco: 18.0,
  imagem: anmitsu,
  categoria: 'Sobremesas'
},
{
  id: 24,
  nome: 'Castella',
  descricao: 'Bolo macio de origem portuguesa, muito popular no Japão.',
  preco: 15.0,
  imagem: castella,
  categoria: 'Sobremesas'
}
]