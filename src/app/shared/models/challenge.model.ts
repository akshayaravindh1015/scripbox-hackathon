export type Challenge = {
  id: string;
  title: string;
  tags: string[];
  desc: string;
  upvotes: string[];
  downvotes: string[];
  comments: string[];
};
export const challengeFromFactory = (factory: any): Challenge => {
  return {
    id: factory['id'],
    title: factory['title'],
    desc: factory['desc'],
    tags:
      typeof factory['tags'] === 'string'
        ? JSON.parse(factory['tags'])
        : factory['tags'],
    upvotes: factory['upvotes'],
    downvotes: factory['downvotes'],
    comments: factory['comments'],
  };
};
