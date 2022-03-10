export type EmpData = {
  empId: string;
  myChallenges: string[];
  votedChallenges: string[];
  downVotedChllenges: string[];
  bookMarkedChallenges: string[];
};
export type Auth = {
  isLoggedIn: boolean;
  empData: EmpData;
};
