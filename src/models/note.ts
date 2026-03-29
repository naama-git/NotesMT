export interface Note {
  id?: string;
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

export interface NoteInput {
  title: string;
  body: string;
  imageUrl?: string;
  createdAt: Date;
}
