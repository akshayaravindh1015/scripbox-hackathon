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
