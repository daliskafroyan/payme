export interface ShowcaseItem {
  name: string;
  description: string;
  logo: string;
}

export const banks: ShowcaseItem[] = [
  {
    name: "Bank Mandiri",
    description: "1220014359114",
    logo: "/images/logos/mandiri-logo.jpeg"
  },
  {
    name: "Bank BCA",
    description: "0300947808",
    logo: "/images/logos/bca-logo.png"
  },
  {
    name: "Bank Jago",
    description: "104200445188",
    logo: "/images/logos/jago-logo.png"
  },
  {
    name: "Bank Permata",
    description: "9999109338",
    logo: "/images/logos/permata-logo.jpeg"
  },
];

export const ewallets: ShowcaseItem[] = [
  {
    name: "DANA",
    description: "085775327621",
    logo: "/images/logos/dana-logo.png"
  },
  {
    name: "Gopay",
    description: "085775327621",
    logo: "/images/logos/gopay-logo.png"
  }
];