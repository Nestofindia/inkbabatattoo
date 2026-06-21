export interface ArtistBookingRequest {
  artistId: string;
  artistName: string;
  artistSpecialty: string;
  name: string;
  email: string;
  countryCode: string;
  phone: string;
  date: string;
  timeSlot: string;
  message?: string;
}

export interface ArtistBookingResponse {
  success: boolean;
  error?: string;
  whatsappUrl?: string;
  /** Client should open WhatsApp with prefilled booking details for the studio. */
  openWhatsApp?: boolean;
}
