export type Challenge = {
  id: string;
  empId: string;
  title: string;
  tags: string[];
  desc: string;
  upvotes: string[];
  downvotes: string[];
  comments: string[];
  createdAt: Date;
};
export const challengeFromFactory = (factory: any): Challenge => {
  return {
    id: factory['id'],
    empId: factory['empId'],
    title: factory['title'],
    desc: factory['desc'],
    tags:
      typeof factory['tags'] === 'string'
        ? JSON.parse(factory['tags'])
        : factory['tags'],
    upvotes: factory['upvotes'],
    downvotes: factory['downvotes'],
    comments: factory['comments'],
    createdAt: new Date(factory['createdAt']),
  };
};
