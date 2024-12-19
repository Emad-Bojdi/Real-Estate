
const services = ["خرید", "فروش", "رهن", "اجاره"];
const cities = [
  "تهران",
  "سنندج",
  "کرمانشاه",
  "اهواز",
  "مشهد",
  "اصفهان",
  "شیراز",
  "خرم آباد",
];
const categories = {
  apartment: "آپارتمان",
  villa: "ویلا",
  store: "مغازه",
  office: "دفتر",
};
const queries = [
    //In each object, the first index is the name and the second index is the value
    // keys are names, values are titles.
    { apartment: "آپارتمان" }, { villa: "ویلا" }, { office: "دفتر" }, { store: "مغازه" }
]
export { services, cities, categories, queries };
