export interface Tweet {
  id: string;
  text: string;
  authorName: string;
  authorHandle: string;
  verified: boolean;
  aviSrc: string;
  likeCount: number;
  retweetCount: number;
  commentCount: number;
}
