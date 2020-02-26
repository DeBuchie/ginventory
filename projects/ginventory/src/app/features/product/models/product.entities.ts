import { GeneralData, LinkData } from '@shared/models/general.entities';

export interface ProductData extends GeneralData {
  producer: string;
  country: string;
  abv: number;
  direct_purchase_url: string;
  in_wishlist: boolean;
  in_cabinet: boolean;
  description: Description;
  perfect_tonics: {
    data: GeneralData[]
  };
  perfect_garnishes: {
    data: GeneralData[];
  };
  purchase_links: {
    data: LinkData[];
  };
}

interface Description {
  content: string;
  google_translation: boolean;
  original_content: string;
}

