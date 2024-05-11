export interface authors {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}
export interface posts {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: Date;
}