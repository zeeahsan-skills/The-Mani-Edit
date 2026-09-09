export interface SiloItem {
  id: string;
  name: string;
  href: string;
  description: string;
  tag: string;
  icon: string;
}

export const MAIN_SILOS: SiloItem[] = [
  {
    id: 'nail-designs',
    name: 'Nail Designs',
    href: '/nail-designs/',
    description: 'Nail art ideas from simple and minimal to chrome, French tip, glitter, ombré and more.',
    tag: 'Design Gallery',
    icon: 'sparkles'
  },
  {
    id: 'nail-shapes',
    name: 'Nail Shapes',
    href: '/nail-shapes/',
    description: 'Explore almond, coffin, square, oval, stiletto, squoval and other popular nail shapes.',
    tag: 'Silhouette Guide',
    icon: 'shapes'
  },
  {
    id: 'nail-colors',
    name: 'Nail Colors',
    href: '/nail-colors/',
    description: 'Find nail ideas by color, including pink, red, black, white, nude, blue and more.',
    tag: 'Palette Inspo',
    icon: 'palette'
  },
  {
    id: 'nail-types',
    name: 'Nail Types',
    href: '/nail-types/',
    description: 'Learn about acrylic, gel, press-on, dip powder and other nail types and techniques.',
    tag: 'Techniques & Types',
    icon: 'layers'
  },
  {
    id: 'nail-care',
    name: 'Nail Care',
    href: '/nail-care/',
    description: 'Practical information about nail care, routines, maintenance, growth and aftercare.',
    tag: 'Health & Routine',
    icon: 'heart'
  },
  {
    id: 'occasion-nails',
    name: 'Occasion Nails',
    href: '/occasion-nails/',
    description: "Nail inspiration for weddings, birthdays, prom, graduation, Valentine's Day and everyday looks.",
    tag: 'Event Ready',
    icon: 'calendar'
  },
  {
    id: 'seasonal-nails',
    name: 'Seasonal Nails',
    href: '/seasonal-nails/',
    description: 'Seasonal nail inspiration for spring, summer, fall, winter, Christmas and Halloween.',
    tag: 'Season & Holidays',
    icon: 'sun'
  },
  {
    id: 'nail-products',
    name: 'Nail Products',
    href: '/nail-products/',
    description: 'Guides to nail products and tools, including press-ons, nail glue, gel lamps and nail-art tools.',
    tag: 'Tools & Polish',
    icon: 'tag'
  }
];

export interface DesignStyle {
  name: string;
  category: string;
  description: string;
  badge: string;
}

export const POPULAR_DESIGNS: DesignStyle[] = [
  {
    name: 'Short Nails',
    category: 'Length & Minimal',
    description: 'Practical, chic, and polished designs tailored specifically for shorter lengths.',
    badge: 'Trending'
  },
  {
    name: 'Simple Nails',
    category: 'Minimalist Aesthetic',
    description: 'Understated lines, micro accents, and effortless sheer polish looks.',
    badge: 'Everyday Classic'
  },
  {
    name: 'Cute Nails',
    category: 'Playful Art',
    description: 'Dainty motifs, pastel accents, and cheerful illustrative manicure ideas.',
    badge: 'Popular'
  },
  {
    name: 'Classy Nails',
    category: 'Timeless Elegance',
    description: 'Refined neutrals, gentle half-moons, and sophisticated clean-girl finishes.',
    badge: 'Editorial Pick'
  },
  {
    name: 'French Tip Nails',
    category: 'Modern Classic',
    description: 'From micro-thin lines to colored smile lines, chrome tips, and double French.',
    badge: 'Iconic'
  },
  {
    name: 'Chrome Nails',
    category: 'High Shine Finish',
    description: 'Glazed donut powder, holographic sheen, and futuristic mirror finishes.',
    badge: 'Viral Style'
  },
  {
    name: 'Ombre Nails',
    category: 'Soft Gradient',
    description: 'Seamless baby boomer fades, blush aura blends, and two-tone color shifts.',
    badge: 'Soft Glam'
  },
  {
    name: 'Glitter Nails',
    category: 'Sparkle & Texture',
    description: 'Subtle reflective shimmer, chunky glitter cuticles, and dimensional sparkles.',
    badge: 'Statement'
  }
];

export interface ShapeItem {
  name: string;
  slug: string;
  href: string;
  vibe: string;
  bestFor: string;
  silhouette: string; // SVG path data for precise nail apex
}

export const NAIL_SHAPES: ShapeItem[] = [
  {
    name: 'Almond',
    slug: 'almond',
    href: '/nail-shapes/almond/',
    vibe: 'Slimming, feminine, timeless',
    bestFor: 'Elongating fingers with a tapered rounded apex.',
    silhouette: 'M 18,52 C 18,34 22,14 32,8 C 42,14 46,34 46,52 C 44,56 20,56 18,52 Z'
  },
  {
    name: 'Coffin',
    slug: 'coffin',
    href: '/nail-shapes/coffin/',
    vibe: 'Edgy, glamorous, sculpted',
    bestFor: 'Tapered edges ending in a sharp straight-across tip.',
    silhouette: 'M 18,52 L 23,12 L 41,12 L 46,52 C 44,56 20,56 18,52 Z'
  },
  {
    name: 'Square',
    slug: 'square',
    href: '/nail-shapes/square/',
    vibe: 'Bold, structured, classic',
    bestFor: 'Straight parallel sidewalls with sharp 90-degree corners.',
    silhouette: 'M 18,52 L 18,10 L 46,10 L 46,52 C 44,56 20,56 18,52 Z'
  },
  {
    name: 'Oval',
    slug: 'oval',
    href: '/nail-shapes/oval/',
    vibe: 'Soft, natural, durable',
    bestFor: 'Gentle curving tip ideal for both natural and short nails.',
    silhouette: 'M 18,52 C 18,30 20,12 32,10 C 44,12 46,30 46,52 C 44,56 20,56 18,52 Z'
  },
  {
    name: 'Stiletto',
    slug: 'stiletto',
    href: '/nail-shapes/stiletto/',
    vibe: 'Dramatic, daring, high-fashion',
    bestFor: 'Sharply tapered sides converging at a dramatic point.',
    silhouette: 'M 18,52 L 32,4 L 46,52 C 44,56 20,56 18,52 Z'
  },
  {
    name: 'Squoval',
    slug: 'squoval',
    href: '/nail-shapes/squoval/',
    vibe: 'Universally flattering, clean',
    bestFor: 'Flat square tip paired with softened, rounded corners.',
    silhouette: 'M 18,52 L 18,14 C 18,11 20,10 23,10 L 41,10 C 44,10 46,11 46,14 L 46,52 C 44,56 20,56 18,52 Z'
  }
];

export interface ColorItem {
  name: string;
  slug: string;
  hex: string;
  accent: string;
  undertone: string;
  mood: string;
}

export const NAIL_COLORS: ColorItem[] = [
  {
    name: 'Pink',
    slug: 'pink',
    hex: '#F6C1CC',
    accent: '#E098A8',
    undertone: 'Bubblegum, blush, baby pink & fuchsia',
    mood: 'Feminine & versatile'
  },
  {
    name: 'Red',
    slug: 'red',
    hex: '#C02626',
    accent: '#991B1B',
    undertone: 'Cherry, crimson, wine & burgundy',
    mood: 'Bold & timeless power'
  },
  {
    name: 'Black',
    slug: 'black',
    hex: '#18181B',
    accent: '#3F3F46',
    undertone: 'Jet black, glossy obsidian & matte noir',
    mood: 'Chic, modern & moody'
  },
  {
    name: 'White',
    slug: 'white',
    hex: '#F8FAFC',
    accent: '#E2E8F0',
    undertone: 'Milky white, chalk, porcelain & pearl',
    mood: 'Crisp, fresh & clean'
  },
  {
    name: 'Nude',
    slug: 'nude',
    hex: '#E2CEBF',
    accent: '#C7AC9B',
    undertone: 'Sand, sheer beige, latte & sheer toffee',
    mood: 'Natural & understated'
  },
  {
    name: 'Blue',
    slug: 'blue',
    hex: '#7FA1C3',
    accent: '#557C93',
    undertone: 'Baby blue, cobalt, royal & midnight navy',
    mood: 'Cool, serene & striking'
  },
  {
    name: 'Brown',
    slug: 'brown',
    hex: '#8C624A',
    accent: '#684532',
    undertone: 'Espresso, mocha, hazelnut & chocolate',
    mood: 'Warm, cozy & luxurious'
  },
  {
    name: 'Green',
    slug: 'green',
    hex: '#5F8D76',
    accent: '#3E6652',
    undertone: 'Sage, olive, forest & emerald',
    mood: 'Earthy, lush & fresh'
  },
  {
    name: 'Purple',
    slug: 'purple',
    hex: '#9F86C0',
    accent: '#7A5E9E',
    undertone: 'Lavender, lilac, plum & deep violet',
    mood: 'Dreamy & creative'
  }
];

export interface OccasionItem {
  name: string;
  slug: string;
  vibe: string;
  description: string;
}

export const OCCASIONS: OccasionItem[] = [
  {
    name: 'Wedding',
    slug: 'wedding',
    vibe: 'Bridal & Guest',
    description: 'Ethereal sheer pinks, delicate pearl accents, and fine white French tips.'
  },
  {
    name: 'Birthday',
    slug: 'birthday',
    vibe: 'Celebratory',
    description: 'Glitter ombré, customized art, and playful statement nail designs.'
  },
  {
    name: 'Prom',
    slug: 'prom',
    vibe: 'Formal Glam',
    description: 'Coordinated dress-matching shades, chrome accents, and jewel details.'
  },
  {
    name: 'Graduation',
    slug: 'graduation',
    vibe: 'Polished Milestone',
    description: 'Sophisticated neutrals, clean lines, and celebratory gold-accented tips.'
  },
  {
    name: "Valentine's Day",
    slug: 'valentines-day',
    vibe: 'Romantic',
    description: 'Subtle heart nail art, velvety red tones, and soft rose blush glazes.'
  },
  {
    name: 'Everyday',
    slug: 'everyday',
    vibe: 'Low-Maintenance',
    description: 'Wearable neutrals, clean girl aesthetics, and effortlessly durable finishes.'
  }
];

export const SEASONS = [
  {
    name: 'Spring',
    slug: 'spring',
    palette: 'Pastels & Sheers',
    description: 'Soft lilac, mint greens, daisy micro-art, and fresh dewy finishes.'
  },
  {
    name: 'Summer',
    slug: 'summer',
    palette: 'Vibrant & Bright',
    description: 'Neon touches, coral pinks, pool blues, and sun-kissed chrome.'
  },
  {
    name: 'Fall',
    slug: 'fall',
    palette: 'Warm & Earthy',
    description: 'Burnt terracotta, rich tortoise shell patterns, and spiced pumpkin hues.'
  },
  {
    name: 'Winter',
    slug: 'winter',
    palette: 'Deep & Frosted',
    description: 'Icy metallics, deep jewel tones, snowy whites, and velvet cat-eye.'
  },
  {
    name: 'Christmas',
    slug: 'christmas',
    palette: 'Festive Holiday',
    description: 'Holly berries, emerald French tips, fine gold glitter, and candy cane twists.'
  },
  {
    name: 'Halloween',
    slug: 'halloween',
    palette: 'Spooky & Moody',
    description: 'Gothic black lace, ghostly micro-accents, blood red ombré, and midnight chrome.'
  }
];
