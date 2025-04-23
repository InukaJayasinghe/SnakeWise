import { Snake, VenomLevel } from '../types';

export const snakes: Snake[] = [
  {
    id: "king-cobra",
    commonName: "King Cobra",
    scientificName: "Ophiophagus hannah",
    venomLevel: "Highly venomous",
    dangerLevel: 5,
    regions: ["Southeast Asia", "South Asia"],
    habitat: ["Forests", "Bamboo thickets", "Mangrove swamps"],
    description: "The king cobra is the world's longest venomous snake, with an average length of 10-13 feet, though specimens of up to 18 feet have been recorded. They primarily eat other snakes, including venomous species.",
    appearance: "Olive-green, tan, or black coloration with pale yellow or white cross bands. The hood is narrower than that of other cobras.",
    behavior: "Despite its fearsome reputation, the king cobra tends to avoid humans. They are diurnal hunters and are the only snakes that build nests for their eggs.",
    imageUrl: "https://cdn.pixabay.com/photo/2019/05/05/15/06/snake-4180800_640.jpg",
    thumbnailUrl: "https://cdn.pixabay.com/photo/2019/05/05/15/06/snake-4180800_640.jpg",
    emergencyInfo: "King cobra venom is primarily neurotoxic and can cause severe pain, blurred vision, vertigo, drowsiness, and paralysis. Respiratory failure can occur within hours in severe cases.",
    firstAid: [
      "Keep the victim calm and immobilize the bitten area",
      "Remove any jewelry or tight clothing from the affected limb",
      "Keep the bite below heart level if possible",
      "Transport to medical facility immediately",
      "Do NOT cut the wound, apply a tourniquet, or attempt to suck out the venom"
    ]
  },
  {
    id: "black-mamba",
    commonName: "Black Mamba",
    scientificName: "Dendroaspis polylepis",
    venomLevel: "Highly venomous",
    dangerLevel: 5,
    regions: ["Africa"],
    habitat: ["Savannas", "Rocky hills", "Open woodlands"],
    description: "The black mamba is one of Africa's most dangerous and feared snakes. It is the longest venomous snake in Africa and the second-longest venomous snake in the world, reaching lengths of up to 14 feet.",
    appearance: "Despite its name, the black mamba is not black. Its body ranges from gray to dark brown, with the inside of the mouth having a characteristic black coloration.",
    behavior: "Known for its speed, aggressiveness when threatened, and highly toxic venom. It can strike repeatedly, delivering multiple bites in a single attack.",
    imageUrl: "https://cdn.pixabay.com/photo/2015/02/28/15/25/black-mamba-653644_640.jpg",
    thumbnailUrl: "https://cdn.pixabay.com/photo/2015/02/28/15/25/black-mamba-653644_640.jpg",
    emergencyInfo: "Black mamba venom is neurotoxic and cardiotoxic. Without antivenom, the mortality rate is nearly 100%. Symptoms include tingling sensations, metallic taste, drooping eyelids, and eventually respiratory paralysis.",
    firstAid: [
      "Seek immediate medical help - this is a life-threatening emergency",
      "Keep the victim still and calm to slow venom spread",
      "Immobilize the bitten limb with a splint if possible",
      "Remove constricting items like rings or watches",
      "Do NOT apply a tourniquet, cut the wound, or attempt to suck out venom"
    ]
  },
  {
    id: "corn-snake",
    commonName: "Corn Snake",
    scientificName: "Pantherophis guttatus",
    venomLevel: "Non-venomous",
    dangerLevel: 1,
    regions: ["North America"],
    habitat: ["Wooded forests", "Abandoned buildings", "Agricultural areas"],
    description: "The corn snake is a popular pet snake due to its docile nature and vibrant coloration. They are constrictors and feed primarily on small rodents and birds.",
    appearance: "Orange or brownish-yellow with large, red blotches bordered in black. The belly typically has a black and white checkerboard pattern.",
    behavior: "Mostly nocturnal, excellent climbers, and known for their docile temperament. They are constrictors, killing prey by squeezing.",
    imageUrl: "https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg",
    thumbnailUrl: "https://images.pexels.com/photos/2062316/pexels-photo-2062316.jpeg?auto=compress&cs=tinysrgb&w=400",
    emergencyInfo: "Corn snakes are harmless to humans. Their bite may cause minor pain and bleeding but requires only basic first aid.",
    firstAid: [
      "Clean the bite area with soap and water",
      "Apply an antiseptic if available",
      "Monitor for signs of infection",
      "Seek medical attention if you're concerned or if the area becomes increasingly red, swollen, or painful"
    ]
  },
  {
    id: "eastern-diamondback-rattlesnake",
    commonName: "Eastern Diamondback Rattlesnake",
    scientificName: "Crotalus adamanteus",
    venomLevel: "Highly venomous",
    dangerLevel: 4,
    regions: ["North America"],
    habitat: ["Pine forests", "Coastal areas", "Palmetto flatwoods"],
    description: "The eastern diamondback is the largest venomous snake in North America and the heaviest (though not longest) venomous snake in the Americas.",
    appearance: "Brown, brownish-yellow, or brownish-gray with a pattern of dark diamond shapes along the back, outlined with lighter scales. Has a characteristic rattle at the end of its tail.",
    behavior: "Generally not aggressive but will strike if threatened. They use their rattle as a warning sign when they feel threatened.",
    imageUrl: "https://images.pexels.com/photos/2062314/pexels-photo-2062314.jpeg",
    thumbnailUrl: "https://images.pexels.com/photos/2062314/pexels-photo-2062314.jpeg?auto=compress&cs=tinysrgb&w=400",
    emergencyInfo: "Venom is hemotoxic, destroying tissue and affecting blood clotting. Bites can cause severe pain, swelling, tissue damage, and internal bleeding.",
    firstAid: [
      "Seek immediate medical attention",
      "Keep the victim calm and still",
      "Remove jewelry and tight clothing",
      "Position the bite below heart level",
      "Do NOT cut the wound, apply ice, or use a tourniquet"
    ]
  },
  {
    id: "green-tree-python",
    commonName: "Green Tree Python",
    scientificName: "Morelia viridis",
    venomLevel: "Non-venomous",
    dangerLevel: 1,
    regions: ["Oceania"],
    habitat: ["Tropical rainforests", "Arboreal environments"],
    description: "The green tree python is known for its striking emerald green coloration and arboreal lifestyle. Juveniles are often yellow or red, changing to green as they mature.",
    appearance: "Bright green with a yellow belly, and occasionally blue, white, or yellow spots. They have a slender body and a prehensile tail for gripping branches.",
    behavior: "Almost entirely arboreal, they spend most of their time in trees. They hunt by ambushing prey, primarily small mammals and reptiles.",
    imageUrl: "https://cdn.pixabay.com/photo/2024/07/29/02/28/snake-8928741_1280.jpg",
    thumbnailUrl: "https://cdn.pixabay.com/photo/2024/07/29/02/28/snake-8928741_1280.jpg",
    emergencyInfo: "Green tree pythons are not venomous. Their bite can cause pain and minor bleeding but is not dangerous.",
    firstAid: [
      "Clean the bite area with soap and water",
      "Apply an antiseptic",
      "Monitor for signs of infection",
      "Seek medical attention if concerned"
    ]
  },
  {
    id: "garter-snake",
    commonName: "Common Garter Snake",
    scientificName: "Thamnophis sirtalis",
    venomLevel: "Mildly venomous",
    dangerLevel: 1,
    regions: ["North America"],
    habitat: ["Wetlands", "Meadows", "Woodlands", "Urban areas"],
    description: "The garter snake is one of the most common snake species in North America. They have mild venom that is harmless to humans but helps them subdue small prey.",
    appearance: "Typically dark colored with three light stripes running lengthwise, often yellow or green. Coloration can vary significantly between regions.",
    behavior: "Active during the day and known to be good swimmers. They often bask in the sun and can be found near water sources.",
    imageUrl: "https://cdn.pixabay.com/photo/2020/03/02/22/54/garter-snake-4897161_1280.jpg",
    thumbnailUrl: "https://cdn.pixabay.com/photo/2020/03/02/22/54/garter-snake-4897161_1280.jpg",
    emergencyInfo: "Though technically mildly venomous, their venom is harmless to humans. Bites may cause slight irritation but are generally no more concerning than a scratch.",
    firstAid: [
      "Wash the area with soap and water",
      "Apply an antiseptic if available",
      "No further treatment is typically necessary"
    ]
  }
];