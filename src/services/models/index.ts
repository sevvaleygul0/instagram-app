export interface IDiscoveryData {
  id: number;
  name: string;
  country: string;
  asset: string;
  isVideo?: boolean;
  type?: string;
}

export interface IPostData {
  id: number;
  name: string;
  profilePhoto: string;
  postDetail: PostDetail[];
  likes: number;
  comments: number;
}

interface PostDetail {
  id: number;
  asset: string;
  isVideo?: boolean;
}
