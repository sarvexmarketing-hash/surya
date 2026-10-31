export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  isVeg: boolean;
};

export type MenuSection = {
  title: string;
  items: MenuItem[];
};

export type MenuCategory = {
  id: string;
  name: string;
  sections: MenuSection[];
};

export const menuData: MenuCategory[] = [
  {
    id: "continental",
    name: "Continental",
    sections: [
      {
        title: "QUICK BITES",
        items: [
          { name: "VEG NUGETS", price: "159", isVeg: true },
          { name: "VEG CHEESE BALLS", price: "219", isVeg: true },
          { name: "FRENCH FRIES(CLASIC & PERI PERI)", price: "210", isVeg: true },
          { name: "SALTED KAJU", price: "295", isVeg: true },
          { name: "PENUT MASALA(FRY&BOILED)", price: "250", isVeg: true },
          { name: "OMLEAT(MASALA&PLAIN)", price: "99", isVeg: false },
          { name: "BOILED EGG(3 PICES)", price: "90", isVeg: false },
          { name: "CHICKEN NUGETS(8 PICES)", price: "299", isVeg: false },
          { name: "CHICKEN POPCONE(15 PICES)", price: "299", isVeg: false },
          { name: "CHICKEN LEG PICES(4 PICES)", price: "329", isVeg: false },
          { name: "CHICKEN BONELESS STIPES(6 PICES)", price: "319", isVeg: false },
          { name: "CRISPY FRIED CHICKEN", price: "399", isVeg: false },
          { name: "FISH FINGERS (6 PCS)", price: "389", isVeg: false },
          { name: "FISH & CHIPS (6 PCS)", price: "399", isVeg: false },
        ],
      },
      {
        title: "SANDWICH",
        items: [
          { name: "VEG SANDWICH", price: "189", isVeg: true },
          { name: "PANNER SANDWICH", price: "239", isVeg: true },
          { name: "VEG CLUB SANDWICH", price: "229", isVeg: true },
          { name: "CORN SANDWICH", price: "219", isVeg: true },
          { name: "CHICKEN SANDWICH", price: "249", isVeg: false },
          { name: "CHICKEN CLUB SANDWICH", price: "299", isVeg: false },
          { name: "CHICKEN TIKKA SANDWICH", price: "259", isVeg: false },
          { name: "CHILLI CHICKEN SANDWICH", price: "259", isVeg: false },
        ],
      },
      {
        title: "BURGERS",
        items: [
          { name: "VEG BURGER", price: "179", isVeg: true },
          { name: "PANNER BURGER (FRIED AND CHEESE)", price: "199/219", isVeg: true },
          { name: "VEG CHEESE BURGER", price: "189", isVeg: true },
          { name: "CHICKEN BURGER", price: "229", isVeg: false },
          { name: "CHICKEN CHEESE BURGER", price: "239", isVeg: false },
        ]
      },
      {
        title: "PIZZA",
        items: [
          { name: "MARGHERITA CHEESE PIZZA", price: "199", isVeg: true },
          { name: "PANEER TIKKA PIZZA", price: "249", isVeg: true },
          { name: "PEPPER PANNER PIZZA", price: "249", isVeg: true },
          { name: "CHEESE CORN PIZZA", price: "219", isVeg: true },
          { name: "FARM FRESH PIZZA", price: "249", isVeg: true },
          { name: "CHILLI CHICKEN PIZZA", price: "299", isVeg: false },
          { name: "CHICKEN KEEMA PIZZA", price: "299", isVeg: false },
          { name: "CHICKEN TIKKA PIZZA", price: "299", isVeg: false },
        ]
      },
      {
        title: "PASTA",
        items: [
          { name: "RED SAUSE PASTA", price: "199", isVeg: true },
          { name: "WHITE SAUSE PASTA", price: "199", isVeg: true },
          { name: "CHICKEN RED SAUSE PASTA", price: "249", isVeg: false },
          { name: "CHICKEN WHITE SAUSE PASTA", price: "249", isVeg: false },
        ]
      }
    ],
  },
  {
    id: "chinese",
    name: "Chinese Items",
    sections: [
      {
        title: "SOUPS",
        items: [
          { name: "HOT & SOUR (veg/non veg)", price: "95/110", isVeg: true },
          { name: "SWEET CORN SOUP (veg/non veg)", price: "95/110", isVeg: true },
          { name: "MANCHOW SOUP (veg/non veg)", price: "95/110", isVeg: true },
          { name: "LUNG FUNG SOUP (Chicken/Prawn)", price: "110/120", isVeg: false },
          { name: "NOODLES SOUP (veg/non veg)", price: "95/110", isVeg: true },
          { name: "CREAM OF MUSHROOM", price: "115", isVeg: true },
          { name: "CREAM OF TOMATO", price: "110", isVeg: true },
          { name: "LEMON CORIANDER (veg/non veg)", price: "110/120", isVeg: true },
          { name: "CREAM OF CHICKEN SOUP", price: "110", isVeg: false },
          { name: "SPINACH BABYCORN SOUP", price: "110", isVeg: true },
          { name: "TOMYUM SOUP (veg/non veg)", price: "100/110", isVeg: true },
          { name: "YELLOW RIVER (non veg)", price: "110", isVeg: false },
        ]
      },
      {
        title: "CHINESE VEGETARIAN STARTERS",
        items: [
          { name: "RED HOT PANEER", price: "295", isVeg: true },
          { name: "PANEER MONGOLIAN", price: "305", isVeg: true },
          { name: "PANEER MAJESTIC", price: "295", isVeg: true },
          { name: "PANEER CHILLI", price: "295", isVeg: true },
          { name: "PANEER 65", price: "295", isVeg: true },
          { name: "PANEER MANCHURIAN", price: "295", isVeg: true },
          { name: "VEG MANCHURIAN (Dry/Wet)", price: "249", isVeg: true },
          { name: "BABY CORN MEGESTIC", price: "295", isVeg: true },
          { name: "CRISPY FRIED BABY CORN", price: "295", isVeg: true },
          { name: "SWEET CHILLI BABY CORN", price: "269", isVeg: true },
          { name: "CRISPY CORN", price: "249", isVeg: true },
          { name: "CRISPY FRIED BABYCORN", price: "295", isVeg: true },
          { name: "LOOSE MUSHROOM", price: "295", isVeg: true },
          { name: "CHILLI MUSHROOM", price: "295", isVeg: true },
          { name: "SALT & PEPPER MUSHROOM", price: "309", isVeg: true },
          { name: "MUSHROOM GULJARA", price: "295", isVeg: true },
          { name: "PEPPER MUSHROOM", price: "309", isVeg: true },
          { name: "CRISPY HONEY CHILLY POTATO", price: "269", isVeg: true },
          { name: "VEG SANGRILLA", price: "269", isVeg: true },
          { name: "SWEET CHILLI VEG", price: "269", isVeg: true },
          { name: "CRISPY VEG / PERI PERI VEG", price: "249", isVeg: true },
        ]
      },
      {
        title: "NON-VEG STARTERS",
        items: [
          { name: "SPICY CRISPY CHICKEN", price: "349", isVeg: false },
          { name: "CHICKEN SHANGRILLA", price: "369", isVeg: false },
          { name: "SPINACH CHICKEN", price: "349", isVeg: false },
          { name: "CHICKEN 65", price: "349", isVeg: false },
          { name: "CHICKEN 555", price: "349", isVeg: false },
          { name: "CHICKEN MANCHURIAN", price: "349", isVeg: false },
          { name: "CHILLI CHICKEN", price: "349", isVeg: false },
          { name: "CHICKEN MAJESTIC", price: "349", isVeg: false },
          { name: "CHICKEN LOLLIPOP", price: "349", isVeg: false },
          { name: "RED HOT CHICKEN", price: "349", isVeg: false },
          { name: "BUTTER GARLIC CHICKEN", price: "379", isVeg: false },
          { name: "FINGER TRIP PEPPER CHICKEN", price: "359", isVeg: false },
          { name: "BUTTER PEPPER CHICKEN", price: "379", isVeg: false },
          { name: "KOREAN CHICKEN (WINGS)", price: "339", isVeg: false },
          { name: "WINGS (DRY & SAUCE)", price: "339", isVeg: false },
          { name: "HUNAN CHICKEN", price: "349", isVeg: false },
          { name: "DRAGON CHICKEN", price: "359", isVeg: false },
          { name: "PEPPER CHICKEN", price: "359", isVeg: false },
          { name: "KAJU NET CHICKEN", price: "399", isVeg: false },
          { name: "RED HOT PRAWNS", price: "379", isVeg: false },
          { name: "BUTTER GARLIC PRAWNS", price: "379", isVeg: false },
          { name: "PRAWNS SALT & PEPPER", price: "389", isVeg: false },
          { name: "CHILLY LOOSE PRAWNS", price: "399", isVeg: false },
          { name: "GREEN CHILLI FRIED PRAWNS", price: "379", isVeg: false },
          { name: "TERIYAKI FISH", price: "379", isVeg: false },
          { name: "BUTTER GARLIC FISH", price: "389", isVeg: false },
          { name: "APOLLO FISH", price: "389", isVeg: false },
          { name: "SCHEZWAN SPICY FISH", price: "389", isVeg: false },
          { name: "EGG GOLD COIN", price: "275", isVeg: false },
          { name: "CHILLI EGG & RED HOT EGG", price: "299", isVeg: false },
        ]
      }
    ]
  },
  {
    id: "indian",
    name: "Indian Starters",
    sections: [
      {
        title: "TANDOORI STARTERS",
        items: [
          { name: "PERI PERI PANEER TIKKA", price: "329", isVeg: true },
          { name: "PANEER TIKKA", price: "329", isVeg: true },
          { name: "TANDOORI VEG ROLL", price: "329", isVeg: true },
          { name: "METHI CORN TIKKI", price: "289", isVeg: true },
          { name: "PUNJABI PANEER TIKKA (6 PCS)", price: "349", isVeg: true },
          { name: "PAPIDI PANEER TIKKA (6 PCS)", price: "329", isVeg: true },
          { name: "MUSHROOM TIKKA", price: "319", isVeg: true },
          { name: "MUSHROOM GULL", price: "319", isVeg: true },
          { name: "HYDERABADI DINGRI KABAB", price: "319", isVeg: true },
          { name: "CHICKEN TIKKA", price: "329", isVeg: false },
          { name: "TANDOORI CHICKEN (Half/Full)", price: "315/519", isVeg: false },
          { name: "MURGH MIRCHI KABAB", price: "389", isVeg: false },
          { name: "FISH TIKKA (ACHARI / AJWANI)", price: "389", isVeg: false },
          { name: "TANGDI KABAB", price: "399", isVeg: false },
          { name: "HARADANYA MURG CHICKEN TIKKA", price: "399", isVeg: false },
          { name: "MURG MALAI TIKKA", price: "389", isVeg: false },
          { name: "MURG PESHAWARI TIKKA", price: "399", isVeg: false },
          { name: "RAJUGARI KALMI KABAB (4 PCS)", price: "419", isVeg: false },
          { name: "BANNU KABAB (6 PCS)", price: "399", isVeg: false },
          { name: "PUNJABI CHICKEN TIKKA", price: "419", isVeg: false },
          { name: "COCONUT CHICKEN TIKKA", price: "399", isVeg: false },
          { name: "JAITUNI FISH TIKKA", price: "429", isVeg: false },
          { name: "BADAMI FISH TIKKA", price: "429", isVeg: false },
          { name: "MALBAR FISH TIKKA", price: "429", isVeg: false },
          { name: "FISH ALISHAN", price: "429", isVeg: false },
          { name: "KARVEPAKU FISH TIKKA", price: "429", isVeg: false },
          { name: "PRAWN (Achari, Malai, Hariyali)", price: "449", isVeg: false },
        ]
      },
      {
        title: "NORTH INDIAN STARTERS",
        items: [
          { name: "MUTTON BONE SOUP", price: "135", isVeg: false },
          { name: "MUTTON PAYA SOUP", price: "135", isVeg: false },
          { name: "MIRYALA MAMSAM", price: "499", isVeg: false },
          { name: "MUTTON GHEE ROAST", price: "499", isVeg: false },
          { name: "CHICKEN ROAST", price: "389", isVeg: false },
          { name: "KODI VEPUDU (BHEEMAVARAM) Bone/BL", price: "389/399", isVeg: false },
          { name: "PRAWNS FRY", price: "449", isVeg: false },
          { name: "MUTTON FRY", price: "449", isVeg: false },
          { name: "KING FISH OIL FRY (2 PCS)", price: "699", isVeg: false },
          { name: "KING FISH MASALA FRY (2 PCS)", price: "699", isVeg: false },
          { name: "KONA SEEMA KODI VEPUDU", price: "399", isVeg: false },
          { name: "MUTTER FRY", price: "259", isVeg: true },
          { name: "RAJAHMUNDRY ROYYALA VEPUDU", price: "449", isVeg: false },
          { name: "KOTHIMEERA CHICKEN", price: "389", isVeg: false },
          { name: "KOTHIMEERA PRAWNS", price: "499", isVeg: false },
          { name: "PACHI MIRCHI KODI VEPUDU", price: "389", isVeg: false },
          { name: "GONGURA CHICKEN FRY", price: "389", isVeg: false },
          { name: "NATU KODI FRY", price: "499", isVeg: false },
        ]
      }
    ]
  },
  {
    id: "rice",
    name: "Rice & Noodles",
    sections: [
      {
        title: "CHINESE RICE & NOODLES",
        items: [
          { name: "VEG FRIED RICE", price: "279", isVeg: true },
          { name: "VEG MANCHURIAN FRIED RICE", price: "379", isVeg: true },
          { name: "TRIPLE SCHEZWAN FRIED RICE (VEG)", price: "379", isVeg: true },
          { name: "VEG SCHEZWAN FRIED RICE", price: "289", isVeg: true },
          { name: "PANEER FRIED RICE", price: "299", isVeg: true },
          { name: "MUSHROOM FRIED RICE", price: "299", isVeg: true },
          { name: "VEG CHILLI GARLIC FRIED RICE", price: "299", isVeg: true },
          { name: "EGG FRIED RICE", price: "309", isVeg: false },
          { name: "EGG SCHEZWAN FRIED RICE", price: "309", isVeg: false },
          { name: "CHICKEN MANCHURIAN FRIED RICE", price: "419", isVeg: false },
          { name: "CHICKEN FRIED RICE", price: "339", isVeg: false },
          { name: "TRIPLE SCHEZWAN FRIED RICE (CHICKEN)", price: "429", isVeg: false },
          { name: "NASIGORA FRIED RICE (CHICKEN/ PRAWNS)", price: "369/399", isVeg: false },
          { name: "SCHEZWAN CHICKEN FRIED RICE", price: "359", isVeg: false },
          { name: "SCHEZWAN MIXED FRIED RICE (P&C)", price: "389", isVeg: false },
          { name: "CHILLI GARLIC CHICKEN FRIED RICE", price: "359", isVeg: false },
          { name: "VEG NOODLES", price: "269", isVeg: true },
          { name: "VEG SCHEZWAN NOODLES", price: "279", isVeg: true },
          { name: "HAKKA NOODLE (VEG)", price: "289", isVeg: true },
          { name: "CHICKEN HAKKA NOODLES", price: "339", isVeg: false },
          { name: "CUNTRY FRIED CHICKEN NOODLES", price: "339", isVeg: false },
          { name: "EGG NOODLES", price: "299", isVeg: false },
          { name: "SINGAPORE EGG NOODLES", price: "309", isVeg: false },
          { name: "CHICKEN NOODLES", price: "339", isVeg: false },
          { name: "MIXED NOODLES (PRAWN & CHICKEN)", price: "369", isVeg: false },
          { name: "SCHEZWAN MIXED NOODLES (P&C)", price: "369", isVeg: false },
          { name: "AMERICAN CHOPSUEY (VEG/NON-VEG)", price: "299/359", isVeg: true },
          { name: "CHINESE CHOPSUEY (VEG/NON-VEG)", price: "299/359", isVeg: true },
        ]
      },
      {
        title: "FROM RICE POT VEG",
        items: [
          { name: "STEAMED RICE", price: "139", isVeg: true },
          { name: "CURD RICE", price: "209", isVeg: true },
          { name: "FRUIT CURD RICE", price: "309", isVeg: true },
          { name: "VEG BIRYANI", price: "289", isVeg: true },
          { name: "SP VEG BIRYANI", price: "329", isVeg: true },
          { name: "NIZAMI VEG BIRYANI", price: "309", isVeg: true },
          { name: "PANEER TIKKA BIRYANI", price: "329", isVeg: true },
          { name: "EGG BURJI BIRYANI", price: "329", isVeg: false },
          { name: "KAJU PANEER BIRYANI", price: "369", isVeg: true },
          { name: "MUSHROOM BIRYANI", price: "339", isVeg: true },
          { name: "KAJU MUSHROOM BIRYANI", price: "369", isVeg: true },
          { name: "EGG BIRYANI", price: "319", isVeg: false },
          { name: "KANDHARI PANEER BIRYANI", price: "330", isVeg: true },
          { name: "PANEER BURJI", price: "329", isVeg: true },
          { name: "EGG BURJI BIRYANI", price: "310", isVeg: false },
          { name: "TOMATO CORN BIRYANI", price: "290", isVeg: true },
          { name: "KAJI BIRYANI", price: "349", isVeg: true },
          { name: "HARIYALI VEG BIRYANI", price: "310", isVeg: true },
          { name: "ULAVACHARU VEG BIRYANI", price: "329", isVeg: true },
        ]
      },
      {
        title: "FROM RICE POT NON VEG",
        items: [
          { name: "CHICKEN DUM BIRYANI", price: "339", isVeg: false },
          { name: "CHICKEN FRYPIECE BIRYANI", price: "369", isVeg: false },
          { name: "ULAVACHARU CHICKEN BIRYANI", price: "409", isVeg: false },
          { name: "CHICKEN MUGHLAI BIRYANI", price: "389", isVeg: false },
          { name: "CHICKEN BOKARO BIRYANI", price: "389", isVeg: false },
          { name: "CHICKEN LOLLIPOP BIRYAN", price: "389", isVeg: false },
          { name: "CHICKEN TIKKA BIRYANI", price: "389", isVeg: false },
          { name: "AFGHANI CHICKEN BIRYANI", price: "389", isVeg: false },
          { name: "SURYA RESORTS SPECIAL BIRYANI (FULL/HALF)", price: "569", isVeg: false },
          { name: "GUNTURU KODI BIRYANI", price: "369", isVeg: false },
          { name: "MIXED NON-VEG BIRYANI", price: "529", isVeg: false },
          { name: "GONGURA CHICKEN BIRYANI", price: "389", isVeg: false },
          { name: "PACHI MIRCHI KODI BIRYANI", price: "359", isVeg: false },
          { name: "NATUKODI BIRYANI", price: "529", isVeg: false },
          { name: "SHAHI GOSH BIRYANI", price: "569", isVeg: false },
          { name: "BHUNA GOSH BIRYANI", price: "549", isVeg: false },
          { name: "MUTTON KAJU KEEMA BIRYANI", price: "569", isVeg: false },
          { name: "MUTTON FRY BIRYANI", price: "549", isVeg: false },
          { name: "MUTTON DUM BIRYANI (SUNDAY SPIACAL)", price: "569", isVeg: false },
          { name: "RA RA MUTTON BIRYANI", price: "509", isVeg: false },
          { name: "NALLI GOSH BIRYANI", price: "599", isVeg: false },
          { name: "MUTTON KEEMA BIRYANI", price: "579", isVeg: false },
          { name: "MUTTON CHOPS BIRYANI", price: "485", isVeg: false },
          { name: "PRAWN BIRYAN", price: "449", isVeg: false },
          { name: "GONGURA ROYYALA BIRYANI", price: "449", isVeg: false },
          { name: "FISH BIRYANI", price: "349", isVeg: false },
          { name: "NATU KODI PULAO", price: "369", isVeg: false },
          { name: "MUTTON PULAO", price: "449", isVeg: false },
          { name: "CHICKEN PULAO", price: "489", isVeg: false },
          { name: "NATUKODI RAGI SANGATI", price: "455", isVeg: false },
        ]
      }
    ]
  },
  {
    id: "curry_bread",
    name: "Currys & Bread",
    sections: [
      {
        title: "BREAD BASKET",
        items: [
          { name: "ROTI", price: "35", isVeg: true },
          { name: "BUTTER ROTI", price: "45", isVeg: true },
          { name: "NAAN", price: "45", isVeg: true },
          { name: "BUTTER NAAN", price: "65", isVeg: true },
          { name: "GARLIC NAAN", price: "75", isVeg: true },
          { name: "KASHMIRI NAAN", price: "125", isVeg: true },
          { name: "KULCHA", price: "65", isVeg: true },
          { name: "MASALA KULCHA", price: "75", isVeg: true },
          { name: "PULKA", price: "30", isVeg: true },
          { name: "BUTTER PULKA", price: "35", isVeg: true },
          { name: "LACHA PARATA", price: "65", isVeg: true },
          { name: "METHI PARATA", price: "75", isVeg: true },
        ]
      },
      {
        title: "VEG CURRYS",
        items: [
          { name: "KADAI VEG", price: "265", isVeg: true },
          { name: "MIX VEG CURRY", price: "265", isVeg: true },
          { name: "VEG MAKHANI", price: "265", isVeg: true },
          { name: "PANEER BUTTER MASALA/PALAK", price: "309", isVeg: true },
          { name: "KADAI PANEER/CHATPAT", price: "309", isVeg: true },
          { name: "MAKHANI METHI CHAMAN", price: "309", isVeg: true },
          { name: "METHI VEG", price: "275", isVeg: true },
          { name: "VEG KHEEMA CURRY", price: "275", isVeg: true },
          { name: "PANEER TIKKA MASALA", price: "309", isVeg: true },
          { name: "TOMATO KAJU CURRY", price: "309", isVeg: true },
          { name: "DAL FRY", price: "225", isVeg: true },
          { name: "DAL TADAKA", price: "225", isVeg: true },
          { name: "MUSHROOM MASALA", price: "299", isVeg: true },
          { name: "KAJU MUSHROOM", price: "319", isVeg: true },
          { name: "PESHAWARI PANEER CURRY", price: "449", isVeg: true },
          { name: "PANEER JAL FRY", price: "309", isVeg: true },
          { name: "VEG KOFTA CURRY", price: "290", isVeg: true },
          { name: "VEG JAIPURI", price: "255", isVeg: true },
          { name: "VEG KOLAPURI", price: "290", isVeg: true },
          { name: "VEG RAMPURI", price: "299", isVeg: true },
          { name: "SHAHI PANEER CURRY", price: "349", isVeg: true },
        ]
      },
      {
        title: "NON-VEG CURRYS",
        items: [
          { name: "ANDHRA CHICKEN CURRY B - B/L", price: "319/339", isVeg: false },
          { name: "CHICKEN KOLAPUR", price: "319", isVeg: false },
          { name: "CHICKEN CHETTINADU B - B/L", price: "319/339", isVeg: false },
          { name: "DILWALE BUTTER CHICKEN CURRY", price: "339", isVeg: false },
          { name: "CHICKEN TIKKA CURRY", price: "339", isVeg: false },
          { name: "BUTTER CHICKEN", price: "339", isVeg: false },
          { name: "GONGURA CHICKEN CURRY", price: "339", isVeg: false },
          { name: "ANDHRA MUTTON CURRY", price: "499", isVeg: false },
          { name: "HYDERABADI CHICKEN CURRY", price: "399", isVeg: false },
          { name: "PUNJABI CHICKEN CURRY", price: "329", isVeg: false },
          { name: "MUTTON ROGAN JOSH", price: "499", isVeg: false },
          { name: "KADAI CHICKEN", price: "319", isVeg: false },
          { name: "ROYYALU GONGURA CURRY", price: "379", isVeg: false },
          { name: "TANGDI MASALA", price: "329", isVeg: false },
          { name: "PRAWN CURRY", price: "379", isVeg: false },
          { name: "FISH CURRY", price: "379", isVeg: false },
          { name: "EGG CURRY", price: "270", isVeg: false },
        ]
      }
    ]
  },
  {
    id: "beverages",
    name: "Beverages & Desserts",
    sections: [
      {
        title: "FRESH FRUIT JUICES",
        items: [
          { name: "APPLE", price: "149", isVeg: true },
          { name: "ORANGE", price: "179", isVeg: true },
          { name: "GRAPE", price: "149", isVeg: true },
          { name: "WATERMELON", price: "69", isVeg: true },
          { name: "MUSKMELON", price: "69", isVeg: true },
          { name: "BANANA", price: "69", isVeg: true },
          { name: "PINEAPPLE", price: "89", isVeg: true },
        ]
      },
      {
        title: "ICE CREAMS",
        items: [
          { name: "VANILLA", price: "120", isVeg: true },
          { name: "GULAB JAMUN WITH VANILLA", price: "120", isVeg: true },
          { name: "STRAWBERRY", price: "120", isVeg: true },
          { name: "MANGO", price: "130", isVeg: true },
          { name: "BUTTERSCOTCH", price: "135", isVeg: true },
          { name: "CHOCOLATE", price: "135", isVeg: true },
          { name: "BLACK CURRENT", price: "145", isVeg: true },
          { name: "AMERICAN NUTS", price: "145", isVeg: true },
          { name: "CASTA", price: "75", isVeg: true },
        ]
      },
      {
        title: "SALAD",
        items: [
          { name: "GREEN SALAD", price: "90", isVeg: true },
          { name: "FRUIT SALAD", price: "169", isVeg: true },
          { name: "FRUIT SALAD WITH ICECREAM", price: "199", isVeg: true },
        ]
      },
      {
        title: "SWEETS",
        items: [
          { name: "DOUBLE KA MEETA (4 PCS)", price: "149", isVeg: true },
          { name: "APRICOT DELIGHT (4 PCS)", price: "199", isVeg: true },
          { name: "ORANGE KULFI (4 PCS)", price: "199", isVeg: true },
          { name: "GULAB JAMUN", price: "95", isVeg: true },
        ]
      },
      {
        title: "SOFT DRINKS",
        items: [
          { name: "SOFT DRINK 250ML", price: "30", isVeg: true },
          { name: "SOFT DRINK CANNED 300ML", price: "70", isVeg: true },
          { name: "WATER BOTTLE 500ML", price: "15", isVeg: true },
          { name: "FRESH LIME SODA", price: "80", isVeg: true },
          { name: "FRESH LIME WATER", price: "60", isVeg: true },
          { name: "KIWI PUNCH", price: "120", isVeg: true },
          { name: "BLUE OCEAN", price: "120", isVeg: true },
          { name: "MINT MOJHITO", price: "120", isVeg: true },
          { name: "STRAWBERRY DARUIRIE", price: "120", isVeg: true },
          { name: "SURYA RESORTS SP MOCKTAIL", price: "159", isVeg: true },
          { name: "LASSI(SWEET)", price: "109", isVeg: true },
          { name: "BUTTER MILK", price: "80", isVeg: true },
          { name: "STRAWBERRY LASSI", price: "129", isVeg: true },
        ]
      },
      {
        title: "MILK SHAKES",
        items: [
          { name: "CHOCOLATE", price: "149", isVeg: true },
          { name: "BLUBERRY", price: "149", isVeg: true },
          { name: "BUTTERSCHOTCH", price: "149", isVeg: true },
          { name: "PINEAPPLE", price: "149", isVeg: true },
          { name: "MANGO", price: "149", isVeg: true },
          { name: "KIWI", price: "149", isVeg: true },
          { name: "STRAWBERRY", price: "149", isVeg: true },
          { name: "SP KAJU BANANA", price: "299", isVeg: true },
        ]
      }
    ]
  }
];
