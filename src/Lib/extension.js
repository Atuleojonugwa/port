import logoDevlens from "../assets/logo-devlens.svg";
import Stylespy from "../assets/logo-style-spy.svg";
import Speedboost from "../assets/logo-speed-boost.svg";
import Json from "../assets/logo-json-wizard.svg";
import Tabmaster from "../assets/logo-tab-master-pro.svg";
import ViewportBuddy from "../assets/logo-viewport-buddy.svg";
import MarkupNotes from "../assets/logo-markup-notes.svg";
import GridGuides from "../assets/logo-grid-guides.svg";
import PalettePicker from "../assets/logo-palette-picker.svg";
import LinkChecker from "../assets/logo-link-checker.svg";
import DomSnapshot from "../assets/logo-dom-snapshot.svg";
import ConsolePlus from "../assets/logo-console-plus.svg";

export  const extensions = [
  {
    id: 1,
    logo: logoDevlens,
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    id: 2,
    logo: Stylespy,
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    id: 3,
    logo: Speedboost,
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    id: 4,
    logo: Json,
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    id: 5,
    logo: Tabmaster,
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    id: 6,
    logo: ViewportBuddy,
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    id: 7,
    logo: MarkupNotes,
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    id: 8,
    logo: GridGuides,
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    id: 9,
    logo: PalettePicker,
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    id: 10,
    logo: LinkChecker,
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    id: 11,
    logo: DomSnapshot,
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    id: 12,
    logo: ConsolePlus,
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];
