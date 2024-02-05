const mongoose = require("mongoose");

const TrackerSchema = new mongoose.Schema({
    "id": {
      "type": "Number"
    },
    "username": {
      "type": "String"
    },
    "displayName": {
      "type": "String"
    },
    "type": {
      "type": "String"
    },
    "build": {
      "type": "String"
    },
    "status": {
      "type": "String"
    },
    "country": {
      "type": "Mixed"
    },
    "patron": {
      "type": "Boolean"
    },
    "exp": {
      "type": "Number"
    },
    "ehp": {
      "type": "Number"
    },
    "ehb": {
      "type": "Number"
    },
    "ttm": {
      "type": "Number"
    },
    "tt200m": {
      "type": "Number"
    },
    "registeredAt": {
      "type": "Date"
    },
    "updatedAt": {
      "type": "Date"
    },
    "lastChangedAt": {
      "type": "Date"
    },
    "lastImportedAt": {
      "type": "Date"
    },
    "latestSnapshot": {
      "id": {
        "type": "Number"
      },
      "playerId": {
        "type": "Number"
      },
      "createdAt": {
        "type": "Date"
      },
      "importedAt": {
        "type": "Mixed"
      },
      "data": {
        "skills": {
          "overall": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "attack": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "defence": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "strength": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "hitpoints": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "ranged": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "prayer": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "magic": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "cooking": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "woodcutting": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "fletching": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "fishing": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "firemaking": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "crafting": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "smithing": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "mining": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "herblore": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "agility": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "thieving": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "slayer": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "farming": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "runecrafting": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "hunter": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          },
          "construction": {
            "metric": {
              "type": "String"
            },
            "experience": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "level": {
              "type": "Number"
            },
            "ehp": {
              "type": "Number"
            }
          }
        },
        "bosses": {
          "abyssal_sire": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "alchemical_hydra": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "artio": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "barrows_chests": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "bryophyta": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "callisto": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "calvarion": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "cerberus": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "chambers_of_xeric": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "chambers_of_xeric_challenge_mode": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "chaos_elemental": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "chaos_fanatic": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "commander_zilyana": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "corporeal_beast": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "crazy_archaeologist": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "dagannoth_prime": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "dagannoth_rex": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "dagannoth_supreme": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "deranged_archaeologist": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "duke_sucellus": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "general_graardor": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "giant_mole": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "grotesque_guardians": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "hespori": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "kalphite_queen": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "king_black_dragon": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "kraken": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "kreearra": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "kril_tsutsaroth": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "mimic": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "nex": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "nightmare": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "phosanis_nightmare": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "obor": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "phantom_muspah": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "sarachnis": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "scorpia": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "scurrius": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "skotizo": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "spindel": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "tempoross": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "the_gauntlet": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "the_corrupted_gauntlet": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "the_leviathan": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "the_whisperer": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "theatre_of_blood": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "theatre_of_blood_hard_mode": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "thermonuclear_smoke_devil": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "tombs_of_amascut": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "tombs_of_amascut_expert": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "tzkal_zuk": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "tztok_jad": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "vardorvis": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "venenatis": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "vetion": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "vorkath": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "wintertodt": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "zalcano": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          },
          "zulrah": {
            "metric": {
              "type": "String"
            },
            "kills": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            },
            "ehb": {
              "type": "Number"
            }
          }
        },
        "activities": {
          "league_points": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "bounty_hunter_hunter": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "bounty_hunter_rogue": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_all": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_beginner": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_easy": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_medium": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_hard": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_elite": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "clue_scrolls_master": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "last_man_standing": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "pvp_arena": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "soul_wars_zeal": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "guardians_of_the_rift": {
            "metric": {
              "type": "String"
            },
            "score": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          }
        },
        "computed": {
          "ehp": {
            "metric": {
              "type": "String"
            },
            "value": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          },
          "ehb": {
            "metric": {
              "type": "String"
            },
            "value": {
              "type": "Number"
            },
            "rank": {
              "type": "Number"
            }
          }
        }
      }
    },
    "combatLevel": {
      "type": "Number"
    },
    "archive": {
      "type": "Mixed"
    }
  });

const Tracker = mongoose.model('Tracker', TrackerSchema);

module.exports = {Tracker};