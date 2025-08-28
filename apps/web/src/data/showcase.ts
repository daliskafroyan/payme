export interface ShowcaseItem {
  name: string;
  description: string;
  logo: string;
}

// Helper function to get the correct asset path for GitHub Pages
const getAssetPath = (path: string) => {
  const base = import.meta.env.DEV ? '' : '/payme';
  return `${base}${path}`;
};

export const banks: ShowcaseItem[] = [
  {
    name: "Bank Mandiri",
    description: "1220014359114",
    logo: getAssetPath("/images/logos/mandiri-logo.jpeg")
  },
  {
    name: "Blu by BCA Digital",
    description: "000868755772",
    logo: getAssetPath("/images/logos/blu-logo.png")
  },
  {
    name: "Bank Jago",
    description: "104200445188",
    logo: getAssetPath("/images/logos/jago-logo.png")
  },
  {
    name: "Bank Permata",
    description: "9999109338",
    logo: getAssetPath("/images/logos/permata-logo.jpeg")
  },
];

export const ewallets: ShowcaseItem[] = [
  {
    name: "DANA",
    description: "085775327621",
    logo: getAssetPath("/images/logos/dana-logo.png")
  },
  {
    name: "Gopay",
    description: "085775327621",
    logo: getAssetPath("/images/logos/gopay-logo.png")
  }
];