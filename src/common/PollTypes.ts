export interface poll {
  id: string;
  title: string;
  description?: string;
  type: number;
  pollItems: string[];
  creatorId: {
    characterName: string;
    profilePictureURI: string;
    id: string;
  };
  createdAt: string;
  expirationTime: string;
}
