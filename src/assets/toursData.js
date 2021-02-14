import tourA from "./images/51-pegasi-b.jpg";
import tourB from "./images/55-cancri-e.jpg";
import tourC from "./images/ceres.jpg";
import tourD from "./images/earth.jpg";
import tourE from "./images/enceladus.jpg";
import tourF from "./images/europa.jpg";
import tourG from "./images/grand-tour.jpg";
import tourH from "./images/hd-40307g.jpg";
import tourI from "./images/jupiter.jpg";
import tourJ from "./images/kepler-16b.jpg";
import tourK from "./images/kepler-186f.jpg";
import tourL from "./images/mars.jpg";
import tourM from "./images/pso-j318.5-22.jpg";
import tourN from "./images/titan.jpg";
import tourO from "./images/trappist-1e.jpg";
import tourP from "./images/venus.jpg";

const toursData = [
  {
    fileName: "51-pegasi-b",
    name: "51 Pegasi B",
    imageFile: tourA,
    distance: "48 light years",
    price: 150000,
    description: `While there is much debate over which exoplanet discovery is considered the "first, " one stands out from the rest. In 1995, scientists discovered 51 Pegasi b, forever changing the way we see the universe and our place in it. The exoplanet is about half the mass of Jupiter, with a seemingly impossible, star-hugging orbit of only 4.2 Earth days. Not only was it the first planet confirmed to orbit a sun-like star, it also ushered in a whole new class of planets called Hot Jupiters: hot, massive planets orbiting closer to their stars than Mercury. Today, powerful observatories like NASA's Kepler space telescope will continue the hunt of distant planets.`,
  },
  {
    fileName: "55-cancri-e",
    name: "55 Cancri E",
    imageFile: tourB,
    distance: "40 light years",
    price: 130000,
    description: `A global ocean of lava under sparkling, silicate skies reflecting the lava below: what better choice for an extrreme vacation? Planet Janssen, or 55 Cancri e, orbits a star called Copernicus only 41 light years away. The molten surface is completely uninhabitable, but you'll ride safely above, taking in breathtaking views: the burning horizon, Janssen's sister planet Galileo hanging in a dark sky, and curtains of glowing particles as you glide across the terminator to Janssen's dark side. Book your travel now to the hottest vacation spot in the galaxy, 55 Cancri e.`,
  },
  {
    fileName: "ceres",
    name: "Ceres",
    imageFile: tourC,
    distance: "557.2 million km",
    price: 25000,
    description: `Ceres is the closest dwarf planet to the Sun. It is the largest object in the main asteroid belt between Mars and Jupiter, with an equatorial diameter of about 965 kilometers. After being studied with telescopes for more than two centuries, Ceres became the first dwarf planet to be explored by a spacecraft, when NASA's Dawn probe arrived in orbit in March 2015. Dawn's ongoing detailed observations are revealing intriguing insights into the nature of this mysterious world of ice and rock.`,
  },
  {
    fileName: "earth",
    name: "Earth",
    imageFile: tourD,
    distance: "0 km",
    price: 0,
    description: `There's no place like home. Warm, wet and with an atmosphere that's just right, Earth is the only place we know of with life – and lots of it. JPL's Earth science missions monitor our home planet and how it's changing so it can continue to provide a safe haven as we reach deeper into the cosmos.`,
  },
  {
    fileName: "enceladus",
    name: "Enceladus",
    imageFile: tourE,
    distance: "1.272 billion km",
    price: 50000,
    description: `The discovery of Enceladus' icy jets and their role in creating Saturn's E-ring is one of the top findings of the Cassini mission to Saturn. Further Cassini mission discoveries revealed strong evidence of a global ocean and the first signs of potential hydrothermal activity beyond Earth – making this tiny Saturnian moon one of the leading locations in the search for possible life beyond Earth.`,
  },
  {
    fileName: "europa",
    name: "Europa",
    imageFile: tourF,
    distance: "628.3 million km",
    price: 30000,
    description: `Astonishing geology and the potential to host the conditions for simple life make Jupiter's moon Europa a fascinating destination for future exploration. Beneath its icy surface, Europa is believed to conceal a global ocean of salty liquid water twice the volume of Earth's oceans. Tugging and flexing from Jupiter's gravity generates enough heat to keep the ocean from freezing. On Earth, wherever we find water, we find life. What will NASA's Europa mission find when it heads for this intriguing moon in the 2020s.`,
  },
  {
    fileName: "grand-tour",
    name: "Grand Tour",
    imageFile: tourG,
    distance: "9.222 billion km",
    price: 100000,
    description: `NASA's Voyager mission took advantage of a once-every-175-year alignment of the outer planets for a grand tour of the solar system. The twin spacecraft revealed details about Jupiter, Saturn, Uranus and Neptune – using each planet's gravity to send them on to the next destination. Voyager set the stage for such ambitious orbiter missions as Galileo to Jupiter and Cassini to Saturn. Today both Voyager spacecraft continue to return valuable science from the far reaches of our solar system.`,
  },
  {
    fileName: "hd-40307g",
    name: "HD 40307g",
    imageFile: tourH,
    distance: "42 light years",
    price: 140000,
    description: `Twice as big in volume as the Earth, HD 40307g straddles the line between "Super-Earth" and "mini-Neptune" and scientists aren't sure if it has a rocky surface or one that's buried beneath thick layers of gas and ice. One thing is certain though: at eight time the Earth's mass, its gravitational pull is much, much stronger.`,
  },
  {
    fileName: "jupiter",
    name: "Jupiter",
    imageFile: tourI,
    distance: "903.9 million km",
    price: 40000,
    description: `The Jovian cloudscape boasts the most spectacular light show in the solar system, with northern and southern lights to dazzle even the most jaded space traveler. Jupiter's auroras are hundreds of times more powerful than Earth's, and they form a glowing ring around each pole that's bigger than our home planet. Revolving outside this auroral oval are the glowing, electric “footprints” of Jupiter's three largest moons. NASA's Juno mission will observe Jupiter's auroras from above the polar regions, studying them in a way never before possible.`,
  },
  {
    fileName: "kepler-16b",
    name: "Kepler 16b",
    imageFile: tourJ,
    distance: "200 light years",
    price: 500000,
    description: `Like Luke Skywalker's planet "Tatooine" in Star Wars, Kepler-16b orbits a pair of stars. Depicted here as a terrestrial planet, Kepler-16b might also be a gas giant like Saturn. Prospects for life on this unusual world aren't good, as it has a temperature similar to that of dry ice. But the discovery indicates that the movie's iconic double-sunset is anything but science fiction.`,
  },
  {
    fileName: "kepler-186f",
    name: "Kepler 186f",
    imageFile: tourK,
    distance: "558 light years",
    price: 1000000,
    description: `Kepler-186f is the first Earth-size planet discovered in the potentially 'habitable zone' around another star, where liquid water could exist on the planet's surface. Its star is much cooler and redder than our Sun. If plant life does exist on a planet like Kepler-186f, its photosynthesis could have been influenced by the star's red-wavelength photons, making for a color palette that's very different than the greens on Earth. This discovery was made by Kepler, NASA's planet hunting telescope.`,
  },
  {
    fileName: "mars",
    name: "Mars",
    imageFile: tourL,
    distance: "199.4 million km",
    price: 15000,
    description: `NASA's Mars Exploration Program seeks to understand whether Mars was, is, or can be a habitable world. Missions like Mars Pathfinder, Mars Exploration Rovers, Mars Science Laboratory and Mars Reconnaissance Orbiter, among many others, have provided important information in understanding of the habitability of Mars. This poster imagines a future day when we have achieved our vision of human exploration of Mars and takes a nostalgic look back at the great imagined milestones of Mars exploration that will someday be celebrated as “historic sites.”`,
  },
  {
    fileName: "pso-j318.5-22",
    name: "PSO J318.5-22",
    imageFile: tourM,
    distance: "80 light years",
    price: 280000,
    description: `Discovered in October 2013 using direct imaging, PSO J318.5-22 belongs to a special class of planets called rogue, or free-floating, planets. Wandering alone in the galaxy, they do not orbit a parent star. Not much is known about how these planets come to exist, but scientists theorize that they may be either failed stars or planets ejected from very young systems after an encounter with another planet. These rogue planets glow faintly from the heat of their formation. Once they cool down, they will be dancing in the dark.`,
  },
  {
    fileName: "titan",
    name: "Titan",
    imageFile: tourN,
    distance: "1.638 billion km",
    price: 60000,
    description: `Frigid and alien, yet similar to our own planet billions of years ago, Saturn's largest moon, Titan, has a thick atmosphere, organic-rich chemistry and a surface shaped by rivers and lakes of liquid ethane and methane. Cold winds sculpt vast regions of hydrocarbon-rich dunes. There may even be cryovolcanoes of cold liquid water. NASA's Cassini orbiter was designed to peer through Titan's perpetual haze and unravel the mysteries of this planet-like moon.`,
  },
  {
    fileName: "trappist-1e",
    name: "Trappist 1e",
    imageFile: tourO,
    distance: "40 light years",
    price: 130000,
    description: `Some 40 light-years from Earth, a planet called TRAPPIST-1e offers a heart-stopping view: brilliant objects in a red sky, looming like larger and smaller versions of our own moon. But these are no moons. They are Earth-sized planets in a spectacular planetary system outside our own. These seven rocky worlds huddle around their small, dim, red star, like a family around a campfire. Any of them could harbor liquid water, but the planet shown here, fourth from the TRAPPIST-1 star, is in the habitable zone, the area around the star where liquid water is most likely to be detected. This system was revealed by the TRAnsiting Planets and PlanetesImals Small Telescope (TRAPPIST) and NASA’s Spitzer Space Telescope. The planets are also excellent targets for NASA’s James Webb Space Telescope. Take a planet-hopping excursion through the TRAPPIST-1 system.`,
  },
  {
    fileName: "venus",
    name: "Venus",
    imageFile: tourP,
    distance: "251.5 million km",
    price: 20000,
    description: `The rare science opportunity of planetary transits has long inspired bold voyages to exotic vantage points – journeys such as James Cook's trek to the South Pacific to watch Venus and Mercury cross the face of the Sun in 1769. Spacecraft now allow us the luxury to study these cosmic crossings at times of our choosing from unique locales across our solar system.`,
  },
];

export default toursData;
