var kinks = {
  "ahegao": "Ahegao",
  "anal": "Anal",
  "apron": "Apron",
  "ashikoki": "Ashikoki",
  "bakunyuu": "Bakunyuu",
  "biting": "Biting",
  "body-swap": "Body Swap",
  "bondage": "Bondage",
  "booty": "Booty",
  "cheating": "Cheating",
  "chikan": "Chikan",
  "chubby": "Chubby",
  "color": "Color",
  "cosplay": "Cosplay",
  "creampie": "Creampie",
  "crossdressing": "Crossdressing",
  "cuddling": "Cuddling",
  "cunnilingus": "Cunnilingus",
  "darkskin": "Dark Skin",
  "exhibitionism": "Exhibitionism",
  "eyebrows": "Eyebrows",
  "fangs": "Fangs",
  "fantasy": "Fantasy",
  "femdom": "Femdom",
  "futanari": "Futanari",
  "genderbend": "Genderbend",
  "glasses": "Glasses",
  "group": "Group",
  "gyaru": "Gyaru",
  "hairy": "Hairy",
  "handjob": "Handjob",
  "harem": "Harem",
  "headphones": "Headphones",
  "hentai": "Hentai",
  "holding-hands": "Holding Hands",
  "horror": "Horror",
  "housewife": "Housewife",
  "humiliation": "Humiliation",
  "idol": "Idol",
  "incest": "Incest",
  "inseki": "Inseki",
  "irrumatio": "Irrumatio",
  "kemonomimi": "Kemonomimi",
  "lingerie": "Lingerie",
  "loli": "Loli",
  "maid": "Maid",
  "masturbation": "Masturbation",
  "miko": "Miko",
  "monstergirl": "Monster Girl",
  "muscles": "Muscles",
  "netorare": "Netorare",
  "netori": "Netori",
  "nun": "Nun",
  "nurse": "Nurse",
  "office-lady": "Office Lady",
  "oppai": "Oppai",
  "oral": "Oral",
  "osananajimi": "Osananajimi",
  "paizuri": "Paizuri",
  "pegging": "Pegging",
  "pettanko": "Pettanko",
  "pregnant": "Pregnant",
  "rimjob": "Rimjob",
  "schoolgirl": "Schoolgirl",
  "sci-fi": "Sci-Fi",
  "shimapan": "Shimapan",
  "shota": "Shota",
  "slice-of-life": "Slice of Life",
  "socks": "Socks",
  "spats": "Spats",
  "spread": "Spread",
  "stockings": "Stockings",
  "succubus": "Succubus",
  "swimsuit": "Swimsuit",
  "tanlines": "Tanlines",
  "teacher": "Teacher",
  "tentacles": "Tentacles",
  "tomboy": "Tomboy",
  "toys": "Toys",
  "tsundere": "Tsundere",
  "uncensored": "Uncensored",
  "vanilla": "Vanilla",
  "warm-smiles": "Warm Smiles",
  "western": "Western",
  "X-ray": "X-ray",
  "yandere": "Yandere",
  "yaoi": "Yaoi",
  "yukata": "Yukata",
  "yuri": "Yuri"
};


module.exports = {
  getAll: function() {
    return kinks;
  },
  find: function(value) {
    if (kinks.hasOwnProperty(value)) {
      return kinks.value;
    } else {
      return false;
    }
  }
}