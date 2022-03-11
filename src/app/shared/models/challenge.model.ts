export type Challenge = {
  id: string;
  empId: string;
  title: string;
  tags: string[];
  desc: string;
  comments: string[];
  createdAt: Date;
  upVotedBy: string[];
  upVotesCount: number;
  downVotedBy: string[];
  downVotesCount: number;
};
export const challengeFromFactory = (factory: any): Challenge => {
  const upVotedBy = [];
  const downVotedBy = [];

  for (const empId in factory['votes']) {
    if (factory['votes'][empId]) {
      upVotedBy.push(empId);
    } else {
      downVotedBy.push(empId);
    }
  }

  return {
    id: factory['id'],
    empId: factory['empId'],
    title: factory['title'],
    desc: factory['desc'],
    tags:
      typeof factory['tags'] === 'string'
        ? JSON.parse(factory['tags'])
        : factory['tags'],
    comments: factory['comments'] || [],
    createdAt: new Date(factory['createdAt']),
    upVotedBy: upVotedBy,
    upVotesCount: upVotedBy.length,
    downVotedBy: downVotedBy,
    downVotesCount: downVotedBy.length,
  };
};
