import { images } from "./images";

export const projects = [
  {
    id: "celkove-upravy",
    title: "Celkové úpravy",
    image: images["garden-landscaping"],
  },
  { id: "jazierka", title: "Jazierka", image: images["garden-pond"] },
  { id: "skalky", title: "Skalky", image: images["rock-garden"] },
  {
    id: "upravy-namesti",
    title: "Úpravy námestí",
    image: images["town-square"],
  },
  { id: "mobilne-nadoby", title: "Mobilné nádoby", image: images.planters },
  { id: "interier", title: "Interiér", image: images["interior-plants"] },
] as const;
