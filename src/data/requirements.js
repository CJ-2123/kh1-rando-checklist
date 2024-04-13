const req = [
  { name: "Fish", items: "Log, Cloth, Rope" },
  { name: "Mushroom", items: "Log, Cloth, Rope" },
  { name: "Seagull Egg", items: "Log, Cloth, Rope" },
  { name: "Coconut", items: "Log, Cloth, Rope" },
  { name: "Drinking Water", items: "Log, Cloth, Rope" },
  { name: "Alcove Chest", items: "Log, Cloth, Rope" },
  { name: "Cafe Blue Trinity", items: "Blue Trinity OR Glide " },
  {
    name: "Cafe Candles Chest (Puppies)",
    items: "Blizzard",
  },
  {
    name: "Gepetto House Chest",
    items: "Clear Monstro",
  },
  {
    name: "Gepetto House (Postcard)",
    items: "Clear Monstro",
  },
  {
    name: "Alleyway Red Trinity",
    items: "Red Trinity OR 2 High Jumps",
  },
  {
    name: "Oathkeeper Check",
    items: "Clear Hollow Bastion 1",
  },
  {
    name: "Gizmo Clock (Postcard x2)",
    items: "Thunder",
  },
  {
    name: "Opposite Armor Reward",
    items: "Red Trinity",
  },
  {
    name: "Opposite Armor Spell (Aero)",
    items: "Red Trinity",
  },
  {
    name: "Merlin Yellow Trinity",
    items: "Yellow Trinity OR High Jumpra",
  },
  {
    name: "Merlin Back Chest",
    items: "Fire to unlock Merlin, Glide",
  },
  {
    name: "Spellbinder Check",
    items: "Fire to unlock Merlin, All tier 1 spells",
  },
  {
    name: "Dream Rod Check",
    items: "Fire to unlock Merlin, All max spells",
  },
  {
    name: "Dream Shield Check",
    items: "Fire to unlock Merlin, All mushroom arts",
  },
  {
    name: "Lord Fortune Check",
    items: "Fire to unlock Merlin, All summons",
  },
  {
    name: "Item Shop List 2",
    items: "Defeat Guard Armor",
  },
  {
    name: "Item Shop List 3",
    items: "Seal Agrabah",
  },
  {
    name: "Item Shop List 4",
    items: "Clear Hollow Bastion 1",
  },
  {
    name: "Cids Shop List 2",
    items: "Seal Agrabah",
  },
  {
    name: "Cids Shop List 3",
    items: "Clear Hollow Bastion 1",
  },
  {
    name: "Synth Shop Chests x2",
    items: "Green Trinity",
  },
  {
    name: "Synth Shop (Postcard)",
    items: "Green Trinity",
  },
  {
    name: "Synth Shop List 1",
    items: "Green Trinity",
  },
  {
    name: "Synth Shop List 2",
    items: "Synth 3 unique items",
  },
  {
    name: "Synth Shop List 3",
    items: "Synth 9 unique items",
  },
  {
    name: "Synth Shop List 4",
    items: "Synth 15 unique items",
  },
  {
    name: "Synth Shop List 5",
    items: "Synth 21 unique items",
  },
  {
    name: "Synth Shop List 6",
    items: "Synth 30 unique items",
  },
  {
    name: "Evidence Spell (Blizzard)",
    items: "Claw Marks OR Clear Wonderland",
  },
  {
    name: "Forest Back Right Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Thunder Flowers",
    items: "Thunder",
  },
  {
    name: "Thunder Flowers Near Trinity",
    items: "Thunder",
  },
  {
    name: "Tea Party Hedge Chests x2",
    items: "Glide OR High Jump",
  },
  {
    name: "Across From Balcony Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Garden Balcony Chest",
    items: "Glide",
  },
  {
    name: "Post Cerberus Reward",
    items: "Entry Pass",
  },
  {
    name: "Blizzara Chest (MISSABLE)",
    items: "Blizzara",
  },
  {
    name: "Blizzaga Chest",
    items: "Blizzaga",
  },
  {
    name: "Cerberus Reward",
    items: "Entry Pass",
  },
  {
    name: "Hero License Check",
    items: "Entry Pass",
  },
  {
    name: "Olympia Check",
    items: "Clear Phil, Pegasus, Herc Cup",
  },
  {
    name: "Ice Titan",
    items: "Entry Pass",
  },
  {
    name: "Sephiroth",
    items: "Entry Pass",
  },
  {
    name: "Defeat Sabor Reward",
    items: "Slides",
  },
  {
    name: "Clayton Spell (Cure)",
    items: "Slides",
  },
  {
    name: "Waterfall (x4)",
    items: "Slides",
  },
  {
    name: "Seal Keyhole Reward (x2)",
    items: "Slides",
  },
  {
    name: "Seal Keyhole Trinity Reward",
    items: "Slides",
  },
  {
    name: "Main Street Right High Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Palace Gates Red High Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Palace Gates Blue High Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Cave Entrance Pillar Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Hidden Room Puzzle (x2)",
    items: "Yellow Trinity OR High Jump",
  },
  {
    name: "Top Chest Left of Start",
    items: "Glide OR High Jump",
  },
  {
    name: "Top Chest Right of Start",
    items: "Glide OR High Jump",
  },
  {
    name: "Top Chest near Ship",
    items: "Glide OR High Jump",
  },
  {
    name: "Mid Level Chest near Ship",
    items: "Glide OR High Jump",
  },
  {
    name: "Gepetto Ship Green Trinity",
    items: "Green Trinity, Glide OR High Jump",
  },
  {
    name: "Chamber 6 1st Platform Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Chamber 6 2nd Platform Chest",
    items: "Glide OR High Jump",
  },
  {
    name: "Parasite Cage 2 Spell (Stop)",
    items: "Glide OR High Jump",
  },
  {
    name: "Town Ledge Chest",
    items: "High Jump",
  },
  {
    name: "Pumpkin Mouth Chests (x2)",
    items: "High Jump, Glide",
  },
  {
    name: "Bridge Chests (x3)",
    items: "Jack-in-the-Box",
  },
  {
    name: "Cemetary Chests (x4)",
    items: "Jack-in-the-Box, Seal Halloween Town",
  },
  {
    name: "Castle Chests (x5)",
    items: "Jack-in-the-Box",
  },
  {
    name: "Oogie Chamber Reward",
    items: "Jack-in-the-Box",
  },
  {
    name: "Oogie Manor Spell (Gravity)",
    items: "Jack-in-the-Box",
  },
  {
    name: "Oogie Manor Reward",
    items: "Jack-in-the-Box",
  },
  {
    name: "Manor Red Trinity",
    items: "Jack-in-the-Box, Red Trinity",
  },
  {
    name: "Ursula 1 Reward",
    items: "Mermaid Kick",
  },
  {
    name: "Big Ursula Spell (Thunder)",
    items: "Mermaid Kick",
  },
  {
    name: "Big Ursula Reward x2",
    items: "Mermaid Kick",
  },
  {
    name: "Hold Rafters Chests (x2)",
    items: "Glide OR Defeat Hook",
  },
  {
    name: "Shadow Sora",
    items: "Green Trinity",
  },
  {
    name: "Captain's Cabin Chest",
    items: "Green Trinity",
  },
  {
    name: "Tinkerbell Chest",
    items: "Green Trinity",
  },
  {
    name: "Pre Hook Mob Spell (Cure)",
    items: "Green Trinity",
  },
  {
    name: "Hook Rewards (x2)",
    items: "Green Trinity",
  },
  {
    name: "Deck Crow's Nest Chest",
    items: "Green Trinity",
  },
  {
    name: "Deck White Trinity",
    items: "Green Trinity, White Trinity",
  },
  {
    name: "Clock Tower Chest",
    items: "Green Trinity",
  },
  {
    name: "Seal Keyhole Rewards (x4)",
    items: "Green Trinity",
  },
  {
    name: "Right Ice Platform Chest",
    items: "Blizzard",
  },
  {
    name: "Left Ice Platform Chest",
    items: "Blizzard",
  },
  {
    name: "Top Ice Platform Chest",
    items: "Glide OR Combo Master",
  },
  {
    name: "2nd Section Underwater Chest",
    items: "Defeat Riku 2",
  },
  {
    name: "Platform Chest",
    items: "Early access with High Jumpra or Dumbo",
  },
  {
    name: "Windows Chest",
    items: "Early access with High Jumpra or Dumbo",
  },
  {
    name: "Gravity Platform Chest",
    items: "Early access with Glide OR High Jumpra OR Dumbo",
  },
  {
    name: "Waterway Platform Chest",
    items: "Blizzard, High Jump",
  },
  {
    name: "Emblem Room Chest",
    items: "High Jump",
  },
  {
    name: "Emblem Piece (Flame)",
    items: "High Jumpra OR Khama and Theon, Fire",
  },
  {
    name: "Emblem Piece (Statue)",
    items: "High Jumpra OR Khama and Theon, Red Trinity",
  },
  {
    name: "Emblem Piece (Fountain)",
    items: "High Jumpra OR Khama and Theon",
  },
  {
    name: "Emblem Piece (Chest)",
    items: "High Jumpra OR Khama and Theon",
  },
  {
    name: "Divine Rose Check",
    items: "Clear Hollow Bastion 1",
  },
  {
    name: "Aerith Spell (Cure)",
    items: "Defeat Behemoth",
  },
  {
    name: "Reports 2,4,6,10",
    items: "Defeat Behemoth",
  },
  {
    name: "Grand Hall Right Chest",
    items: "Hollow Bastion 2 only",
  },
  {
    name: "Grand Hall Left Chest",
    items: "Hollow Bastion 2 only",
  },
  {
    name: "Grand Hall Middle Chest",
    items: "Hollow Bastion 2 only",
  },
  {
    name: "Highest Platform",
    items: "Glide",
  },
];

export default req;
