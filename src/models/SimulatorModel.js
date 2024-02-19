const mongoose = require("mongoose");

const SimulatorSchema = new mongoose.Schema({
    "id": {
      "type": "Number"
    },
    "name": {
      "type": "String"
    },
    "last_updated": {
      "type": "Date"
    },
    "incomplete": {
      "type": "Boolean"
    },
    "members": {
      "type": "Boolean"
    },
    "release_date": {
      "type": "Date"
    },
    "combat_level": {
      "type": "Number"
    },
    "size": {
      "type": "Number"
    },
    "hitpoints": {
      "type": "Number"
    },
    "max_hit": {
      "type": "Number"
    },
    "attack_type": {
      "type": [
        "String"
      ]
    },
    "attack_speed": {
      "type": "Number"
    },
    "aggressive": {
      "type": "Boolean"
    },
    "poisonous": {
      "type": "Boolean"
    },
    "venomous": {
      "type": "Boolean"
    },
    "immune_poison": {
      "type": "Boolean"
    },
    "immune_venom": {
      "type": "Boolean"
    },
    "attributes": {
      "type": "Array"
    },
    "category": {
      "type": [
        "String"
      ]
    },
    "slayer_monster": {
      "type": "Boolean"
    },
    "slayer_level": {
      "type": "Number"
    },
    "slayer_xp": {
      "type": "Number"
    },
    "slayer_masters": {
      "type": [
        "String"
      ]
    },
    "duplicate": {
      "type": "Boolean"
    },
    "examine": {
      "type": "String"
    },
    "wiki_name": {
      "type": "String"
    },
    "wiki_url": {
      "type": "String"
    },
    "attack_level": {
      "type": "Number"
    },
    "strength_level": {
      "type": "Number"
    },
    "defence_level": {
      "type": "Number"
    },
    "magic_level": {
      "type": "Number"
    },
    "ranged_level": {
      "type": "Number"
    },
    "attack_bonus": {
      "type": "Number"
    },
    "strength_bonus": {
      "type": "Number"
    },
    "attack_magic": {
      "type": "Number"
    },
    "magic_bonus": {
      "type": "Number"
    },
    "attack_ranged": {
      "type": "Number"
    },
    "ranged_bonus": {
      "type": "Number"
    },
    "defence_stab": {
      "type": "Number"
    },
    "defence_slash": {
      "type": "Number"
    },
    "defence_crush": {
      "type": "Number"
    },
    "defence_magic": {
      "type": "Number"
    },
    "defence_ranged": {
      "type": "Number"
    },
    "drops": {
      "type": [
        "Mixed"
      ]
    }
  
});


  
const Simulator = mongoose.model('Simulator', SimulatorSchema);

module.exports = {Simulator};
