// Facts from veon/client.json (Original Kiev). Nothing here is invented: change only together with client.json.
export const contacts = {
  phoneMain: { label: "+38 (068) 095-93-65", short: "068 095-93-65", href: "tel:+380680959365" },
  phoneSecond: { label: "+38 (097) 939-64-03", short: "097 939-64-03", href: "tel:+380979396403" },
  email: { label: "original-kiev@ukr.net", href: "mailto:original-kiev@ukr.net" },
  viber: "viber://chat?number=380680959365",
  telegram: "https://t.me/originalkiev",
  street: "вул. Героїв Дніпра, 67А",
  streetShort: "Героїв Дніпра, 67А",
  city: "04205, Київ, Оболонь",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("вулиця Героїв Дніпра, 67А, Київ, 04205"),
  addressFull: "04205, м. Київ, вул. Героїв Дніпра, 67А",
  hours: [
    { days: "Пн–Пт", time: "9:00–19:00" },
    { days: "Сб", time: "9:00–15:00" },
  ],
  legal: "ФОП Пєшкова Анастасія Юріївна",
};

export const soon = "Розділ у розробці";

export type BrandGroup = "eu" | "jp" | "kr" | "us" | "cn" | "ua";

export const brandGroups: { id: BrandGroup | "all"; label: string }[] = [
  { id: "all", label: "Усі" },
  { id: "eu", label: "Європейські" },
  { id: "jp", label: "Японські" },
  { id: "kr", label: "Корейські" },
  { id: "us", label: "Американські" },
  { id: "cn", label: "Китайські" },
  { id: "ua", label: "LADA і ZAZ" },
];

// 40 brands of the client's catalogue (seo/data/crawl.json, /carNNN-<brand>/), alphabetical as on the current site.
export const brands: { name: string; group: BrandGroup }[] = [
  { name: "Acura", group: "jp" },
  { name: "Alfa Romeo", group: "eu" },
  { name: "Audi", group: "eu" },
  { name: "BMW", group: "eu" },
  { name: "Chery", group: "cn" },
  { name: "Chevrolet", group: "us" },
  { name: "Citroen", group: "eu" },
  { name: "Dacia", group: "eu" },
  { name: "Daewoo", group: "kr" },
  { name: "Fiat", group: "eu" },
  { name: "Ford", group: "us" },
  { name: "Geely", group: "cn" },
  { name: "Honda", group: "jp" },
  { name: "Hyundai", group: "kr" },
  { name: "Infiniti", group: "jp" },
  { name: "Jaguar", group: "eu" },
  { name: "Jeep", group: "us" },
  { name: "Kia", group: "kr" },
  { name: "LADA", group: "ua" },
  { name: "Land Rover", group: "eu" },
  { name: "Lexus", group: "jp" },
  { name: "Mazda", group: "jp" },
  { name: "Mercedes-Benz", group: "eu" },
  { name: "Mini", group: "eu" },
  { name: "Mitsubishi", group: "jp" },
  { name: "Nissan", group: "jp" },
  { name: "Opel", group: "eu" },
  { name: "Peugeot", group: "eu" },
  { name: "Porsche", group: "eu" },
  { name: "Renault", group: "eu" },
  { name: "Seat", group: "eu" },
  { name: "Skoda", group: "eu" },
  { name: "Smart", group: "eu" },
  { name: "SsangYong", group: "kr" },
  { name: "Subaru", group: "jp" },
  { name: "Suzuki", group: "jp" },
  { name: "Toyota", group: "jp" },
  { name: "Volkswagen", group: "eu" },
  { name: "Volvo", group: "eu" },
  { name: "ZAZ", group: "ua" },
];

export const systems = [
  "Запчастини для ТО",
  "Гальмівна система",
  "Підвіска та рульове",
  "Коробка передач",
  "Система зчеплення",
  "Двигун",
  "Паливна система",
  "Вихлопна система",
  "Електрика та освітлення",
  "Охолодження та опалення",
  "Кузовні елементи",
];

export const nav = [
  { href: "#vin", label: "Підбір за VIN" },
  { href: "#catalog", label: "Каталог" },
  { href: "#delivery", label: "Доставка й оплата" },
  { href: "#sto", label: "Для СТО" },
  { href: "#contacts", label: "Контакти" },
];
