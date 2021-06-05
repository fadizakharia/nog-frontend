export interface pollReducerType {
  poll:
    | {
        id: string;
        title: string;
        description?: string;
        type: number;
        expirationTime: string;
        createdAt: string;
        pollItems: string[];
        creatorId: {
          characterName: string;
          profilePictureURI: string;
          id: string;
        };
      }
    | undefined;
  errors: { message: string }[] | undefined;
  loading: boolean;
}
