export type EmpData = {
  empId: string;
  myChallenges: string[];
  votedChallenges: string[];
  downVotedChllenges: string[];
  bookMarkedChallenges: string[];
};
export type Employee_Auth = {
  isLoggedIn: boolean;
  empData: EmpData;
};

export const empDataFromFactory = (factory: any): EmpData => {
  const votedChallenges = [];
  const downVotedChllenges = [];
  const bookMarkedChallenges = Object.keys(
    factory['bookMarkedChallenges'] || {}
  );

  for (const challengeId in factory['votedChallenges']) {
    if (factory['votedChallenges'][challengeId]) {
      votedChallenges.push(challengeId);
    } else {
      downVotedChllenges.push(challengeId);
    }
  }

  return {
    empId: factory['empId'],
    myChallenges: factory['myChallenges'] || [],
    votedChallenges: votedChallenges,
    downVotedChllenges: downVotedChllenges,
    bookMarkedChallenges: bookMarkedChallenges,
  };
};
