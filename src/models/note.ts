export interface Note {
  id: string;
  title: string;
  body: string;
  createdAt: number;
  userId: string;
  imageUrl: string;
  location: {
    latitude: number;
    longitude: number;
  };
}
