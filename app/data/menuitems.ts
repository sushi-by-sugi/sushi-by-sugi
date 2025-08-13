import { MenuCategory, MenuItem } from "../types/menu";

export const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Salmon Nigiri",
    price: "€6.50",
    description:
      "Zacht smeltende zalm, subtiel gerookt, rustend op perfect luchtige rijst.",
    imageSrc: "/images/menu-sushi.png",
    category: "nigiri",
  },
  {
    id: "2",
    title: "Flamed Salmon Nigiri",
    price: "€9",
    description:
      "Vlamgegrilde zalm, verrijkt met zoete teriyaki, pittige mayo en frisse bosui.",
    imageSrc: "/images/menu-sushi.png",
    category: "nigiri",
  },
  {
    id: "3",
    title: "Tuna Nigiri",
    price: "€8.50",
    description:
      "Zacht gesneden tonijn, puur en elegant, rustend op luchtige sushirijst.",
    imageSrc: "/images/menu-sushi.png",
    category: "nigiri",
  },
  {
    id: "4",
    title: "Flamed Tuna Nigiri",
    price: "€10.50",
    description:
      "Vlamgegrilde tonijn, verrijkt met zoete teriyaki, pittige mayo en frisse bosui.",
    imageSrc: "/images/menu-sushi.png",
    category: "nigiri",
  },
  {
    id: "5",
    title: "Flamed Hot Tuna Roll",
    price: "€18.50",
    description:
      "Vlamgegrilde tonijn, omhuld met zoete teriyaki, pittige mayo en knapperige ui.",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "6",
    title: "Special Flamed Vulcano Sake Roll",
    price: "€19",
    description:
      "Knapperige ebi en frisse komkommer met romige kewpie, bekroond met geflambeerde zalm, unagi-glazuur, krokante kataifi, pittige saus en gesneden chilipeper",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "7",
    title: "Crispy Crisp Chicken Roll",
    price: "€17",
    description:
      "Krokante Japanse kip, romige avocado, frisse komkommer en kewpie mayo, omhuld met knapperige kataifi, gebakken ui, zoete teriyakisaus en geroosterde sesamzaadjes",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "8",
    title: "Dragon Roll",
    price: "€18",
    description:
      "Knapperige ebi, romige kewpie en frisse komkommer, omhuld met zachte avocado en luxe caviaar, afgewerkt met een glans van teriyakisaus",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "9",
    title: "Exclusive Surf and Turf Roll",
    price: "€21",
    description:
      "Knapperige ebi, frisse komkommer en romige truffelsaus, omhuld met vlamgegrilde beef, krokante kataifi en gebakken ui, verfijnd met sesamdressing",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "10",
    title: "Truffel Carpaccio Roll",
    price: "€19",
    description:
      "Romige truffelmayo, frisse komkommer en pesto, omhuld met malse carpaccio, rucola, Parmezaanse kaas en een verfijnde truffeltouch",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "11",
    title: "Green Inferno Roll",
    price: "€15",
    description:
      "Romige avocado, roomkaas, frisse komkommer en truffelmayo, omhuld met crispy tempura flakes, spicy sliced jalapeño, kataifi en een vleugje yuzu-sesamdressing — een vurige vegetarische verleiding met crunch en finesse.",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "12",
    title: "Teriyaki Grilled Salmon Roll",
    price: "€21",
    description:
      "Gebakken zalm in rijke teriyakisaus, met frisse komkommer, omhuld door knapperige kataifi en pittige sliced pepper",
    imageSrc: "/images/menu-sushi.png",
    category: "uramaki",
  },
  {
    id: "13",
    title: "Avocado Maki",
    price: "€5",
    description:
      "Romige avocado, zacht omarmd door luchtige sushirijst en nori, met een subtiele, frisse bite",
    imageSrc: "/images/menu-sushi.png",
    category: "maki",
  },
  {
    id: "14",
    title: "Kappa Maki",
    price: "€4.50",
    description:
      "Knapperige komkommer in perfect gerolde nori en rijst, fris en licht van smaak",
    imageSrc: "/images/menu-sushi.png",
    category: "maki",
  },
  {
    id: "15",
    title: "Sake Maki",
    price: "€5.50",
    description:
      "Malse zalm met delicate, pure smaak, gewikkeld in zachte rijst en knapperige nori",
    imageSrc: "/images/menu-sushi.png",
    category: "maki",
  },
  {
    id: "16",
    title: "Tuna Maki",
    price: "€5.50",
    description:
      "Stevige tonijn met een volle, hartige toon, stijlvol verpakt in rijst en nori",
    imageSrc: "/images/menu-sushi.png",
    category: "maki",
  },
];

export const categories: MenuCategory[] = ["maki", "uramaki", "nigiri"];
