export type ProductType = 'gin' | 'tonic' | 'garnish';

export enum ProductTypes {
  gin = 'gin',
  tonic = 'tonic',
  garnish = 'garnish'
}

export interface GeneralData {
  id: number;
  type: ProductTypes;
  name: string;
  first_name: string;
  second_name: string;
  picture_url: string;
  average_rating: number;
  user_rating: number;
}

export interface LinkData {
  id: string;
  retailer_name: string;
  retailer_short_description: string;
  url: string;
}
