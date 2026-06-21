export interface TattooDesignRequest {
  idea: string;
  placement: string;
  cultureStyle: string;
  size: string;
}

export interface TattooDesignResult {
  title: string;
  description: string;
  placement: string;
  cultureType: string;
  styleTags: string[];
  symbolism: string;
  colorPalette: string;
  sizeRecommendation: string;
  healingNotes: string;
  imagePrompt: string;
  imageUrl: string;
}

export interface TattooDesignApiResponse {
  success: boolean;
  design?: TattooDesignResult;
  error?: string;
}
