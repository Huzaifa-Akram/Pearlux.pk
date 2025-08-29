import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Embroidery",
    newTab: false,
    path: "/category/embroidery",
    megaMenu: true,
    sections: [
      {
        title: "METALLIC WIRES",
        items: [
          {
            id: 211,
            title: "French Wire / Dabka",
            newTab: false,
            path: "/category/embroidery/french-wire-dabka",
          },
          {
            id: 212,
            title: "Bullion Wire/Nakshi",
            newTab: false,
            path: "/category/embroidery/bullion-wire-nakshi",
          },
          {
            id: 213,
            title: "Gijai / Gimp / Stiff",
            newTab: false,
            path: "/category/embroidery/gijai-gimp-stiff",
          },
          {
            id: 214,
            title: "Mukaish Metal Strip",
            newTab: false,
            path: "/category/embroidery/mukaish-metal-strip",
          },
        ],
      },
      {
        title: "METALLIC THREADS/CORD",
        items: [
          {
            id: 221,
            title: "Zari Threads",
            newTab: false,
            path: "/category/embroidery/zari-threads",
          },
          {
            id: 222,
            title: "Badla Flat Metallic Threads",
            newTab: false,
            path: "/category/embroidery/badla-flat-metallic-threads",
          },
          {
            id: 223,
            title: "Badla Dori/ Metallic Braided Cord",
            newTab: false,
            path: "/category/embroidery/badla-dori-metallic-braided-cord",
          },
        ],
      },
      {
        title: "THREADS/CORD",
        items: [
          {
            id: 231,
            title: "Cotton Threads",
            newTab: false,
            path: "/category/embroidery/cotton-threads",
          },
          {
            id: 232,
            title: "Crochet Cotton Threads",
            newTab: false,
            path: "/category/embroidery/crochet-cotton-threads",
          },
          {
            id: 233,
            title: "Art Silk Threads",
            newTab: false,
            path: "/category/embroidery/art-silk-threads",
          },
          {
            id: 234,
            title: "Nylon Threads",
            newTab: false,
            path: "/category/embroidery/nylon-threads",
          },
          {
            id: 235,
            title: "Sewing Threads",
            newTab: false,
            path: "/category/embroidery/sewing-threads",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Beads",
    newTab: false,
    path: "/category/beads",
    megaMenu: true,
    sections: [
      {
        title: "ASSORTED BEADS",
        items: [
          {
            id: 311,
            title: "Natural Stone Beads",
            newTab: false,
            path: "/category/beads/natural-stone-beads",
          },
          {
            id: 312,
            title: "Metal Beads/Pipes",
            newTab: false,
            path: "/category/beads/metal-beads-pipes",
          },
          {
            id: 313,
            title: "Evil Eye Beads",
            newTab: false,
            path: "/category/beads/evil-eye-beads",
          },
        ],
      },
      {
        title: "BUGLE BEADS/NALKI",
        items: [
          {
            id: 321,
            title: "M.G.B Bugle Beads",
            newTab: false,
            path: "/category/beads/mgb-bugle-beads",
          },
          {
            id: 322,
            title: "Grade A Bugle Beads",
            newTab: false,
            path: "/category/beads/grade-a-bugle-beads",
          },
        ],
      },
      {
        title: "CRYSTAL BEADS",
        items: [
          {
            id: 331,
            title: "Faceted Czech Beads",
            newTab: false,
            path: "/category/beads/faceted-czech-beads",
          },
        ],
      },
      {
        title: "PEARLS",
        items: [
          {
            id: 341,
            title: "Glass Pearls",
            newTab: false,
            path: "/category/beads/glass-pearls",
          },
          {
            id: 342,
            title: "Crystal Pearls",
            newTab: false,
            path: "/category/beads/crystal-pearls",
          },
        ],
      },
      {
        title: "CYLINDER BEADS/CUTDANA",
        items: [
          {
            id: 351,
            title: "Miyuki 2Cut Beads",
            newTab: false,
            path: "/category/beads/miyuki-2cut-beads",
          },
          {
            id: 352,
            title: "Toho Hex 2Cut Beads",
            newTab: false,
            path: "/category/beads/toho-hex-2cut-beads",
          },
          {
            id: 353,
            title: "Grade A Cylinder Beads",
            newTab: false,
            path: "/category/beads/grade-a-cylinder-beads",
          },
          {
            id: 354,
            title: "MGB 2Cut Beads",
            newTab: false,
            path: "/category/beads/mgb-2cut-beads",
          },
          {
            id: 355,
            title: "Preciosa 2 Cut Beads",
            newTab: false,
            path: "/category/beads/preciosa-2-cut-beads",
          },
          {
            id: 356,
            title: "Tila Beads",
            newTab: false,
            path: "/category/beads/tila-beads",
          },
        ],
      },
      {
        title: "SEED BEADS /MOTI",
        items: [
          {
            id: 361,
            title: "Miyuki Seed Beads",
            newTab: false,
            path: "/category/beads/miyuki-seed-beads",
          },
          {
            id: 362,
            title: "Czech Preciosa Seed beads",
            newTab: false,
            path: "/category/beads/czech-preciosa-seed-beads",
          },
          {
            id: 363,
            title: "Grade A Seed Beads",
            newTab: false,
            path: "/category/beads/grade-a-seed-beads",
          },
        ],
      },
      {
        title: "ALPHABET BEADS",
        items: [
          {
            id: 371,
            title: "Alphabet Beads",
            newTab: false,
            path: "/category/beads/alphabet-beads",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Embellishment",
    newTab: false,
    path: "/category/embellishment",
    megaMenu: true,
    sections: [
      {
        title: "ASSORTED STONES",
        items: [
          {
            id: 411,
            title: "Kundan Stones",
            newTab: false,
            path: "/category/embellishment/kundan-stones",
          },
          {
            id: 412,
            title: "Cabochon Stones",
            newTab: false,
            path: "/category/embellishment/cabochon-stones",
          },
        ],
      },
      {
        title: "APPLIQUES & PATCHES",
        items: [
          {
            id: 421,
            title: "Gota Patti & Flowers",
            newTab: false,
            path: "/category/embellishment/gota-patti-flowers",
          },
          {
            id: 422,
            title: "Embroidery Patches",
            newTab: false,
            path: "/category/embellishment/embroidery-patches",
          },
        ],
      },
      {
        title: "ACRYLIC & RESIN STONE",
        items: [
          {
            id: 431,
            title: "Sew on Rhinestones",
            newTab: false,
            path: "/category/embellishment/sew-on-rhinestones",
          },
        ],
      },
      {
        title: "SEQUINS",
        items: [
          {
            id: 441,
            title: "Sew on Sequins",
            newTab: false,
            path: "/category/embellishment/sew-on-sequins",
          },
          {
            id: 442,
            title: "Metal Sequins",
            newTab: false,
            path: "/category/embellishment/metal-sequins",
          },
        ],
      },
      {
        title: "CRYSTALS",
        items: [
          {
            id: 451,
            title: "Rhinestones Cup Chains",
            newTab: false,
            path: "/category/embellishment/rhinestones-cup-chains",
          },
          {
            id: 452,
            title: "Rivoli/Chatons",
            newTab: false,
            path: "/category/embellishment/rivoli-chatons",
          },
          {
            id: 453,
            title: "Hotfix Crystals",
            newTab: false,
            path: "/category/embellishment/hotfix-crystals",
          },
          {
            id: 454,
            title: "Sew on Crystals",
            newTab: false,
            path: "/category/embellishment/sew-on-crystals",
          },
          {
            id: 455,
            title: "Swarovski Hot Fix",
            newTab: false,
            path: "/category/embellishment/swarovski-hot-fix",
          },
        ],
      },
      {
        title: "BUTTONS",
        items: [
          {
            id: 461,
            title: "MOP Buttons",
            newTab: false,
            path: "/category/embellishment/mop-buttons",
          },
          {
            id: 462,
            title: "Snap Buttons",
            newTab: false,
            path: "/category/embellishment/snap-buttons",
          },
          {
            id: 463,
            title: "Wooden Buttons",
            newTab: false,
            path: "/category/embellishment/wooden-buttons",
          },
        ],
      },
      {
        title: "LACES/TRIMS",
        items: [
          {
            id: 471,
            title: "Gota Lace",
            newTab: false,
            path: "/category/embellishment/gota-lace",
          },
          {
            id: 472,
            title: "Embroidery Lace",
            newTab: false,
            path: "/category/embellishment/embroidery-lace",
          },
          {
            id: 473,
            title: "Cotton Laces",
            newTab: false,
            path: "/category/embellishment/cotton-laces",
          },
        ],
      },
      {
        title: "STUDS/SPIKES",
        items: [
          {
            id: 481,
            title: "Studs/Spikes",
            newTab: false,
            path: "/category/embellishment/studs-spikes",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Jewelry Making",
    newTab: false,
    path: "/category/jewelry-making",
    megaMenu: true,
    sections: [
      {
        title: "JEWELRY COMPONENTS",
        items: [
          {
            id: 511,
            title: "Charms",
            newTab: false,
            path: "/category/jewelry-making/charms",
          },
          {
            id: 512,
            title: "Pendant",
            newTab: false,
            path: "/category/jewelry-making/pendant",
          },
          {
            id: 513,
            title: "Filigree Stamping",
            newTab: false,
            path: "/category/jewelry-making/filigree-stamping",
          },
          {
            id: 514,
            title: "Bezel Connector",
            newTab: false,
            path: "/category/jewelry-making/bezel-connector",
          },
        ],
      },
      {
        title: "JEWELRY FINDINGS",
        items: [
          {
            id: 521,
            title: "Jewelry Findings",
            newTab: false,
            path: "/category/jewelry-making/jewelry-findings",
          },
        ],
      },
      {
        title: "CHAINS",
        items: [
          {
            id: 531,
            title: "Metal Chains",
            newTab: false,
            path: "/category/jewelry-making/metal-chains",
          },
          {
            id: 532,
            title: "Rondelle Chain",
            newTab: false,
            path: "/category/jewelry-making/rondelle-chain",
          },
        ],
      },
      {
        title: "WIRE/CORD",
        items: [
          {
            id: 541,
            title: "Beading Wire",
            newTab: false,
            path: "/category/jewelry-making/beading-wire",
          },
          {
            id: 542,
            title: "Waxed Cotton Cord",
            newTab: false,
            path: "/category/jewelry-making/waxed-cotton-cord",
          },
          {
            id: 543,
            title: "Nylon Jewelry Cord",
            newTab: false,
            path: "/category/jewelry-making/nylon-jewelry-cord",
          },
          {
            id: 544,
            title: "Satin Cord/ Malai Dori",
            newTab: false,
            path: "/category/jewelry-making/satin-cord-malai-dori",
          },
        ],
      },
      {
        title: "BROOCH",
        items: [
          {
            id: 551,
            title: "Brooch",
            newTab: false,
            path: "/category/jewelry-making/brooch",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Blog",
    newTab: false,
    path: "/blogs/blog-grid",
    submenu: [
      {
        id: 81,
        title: "Embroidery Tips",
        newTab: false,
        path: "/blogs/category/embroidery-tips",
      },
      {
        id: 82,
        title: "Project Inspiration",
        newTab: false,
        path: "/blogs/category/project-inspiration",
      },
      {
        id: 83,
        title: "Tutorials",
        newTab: false,
        path: "/blogs/category/tutorials",
      },
    ],
  },
];
