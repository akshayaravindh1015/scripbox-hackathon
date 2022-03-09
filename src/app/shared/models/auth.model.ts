export type Auth = {
  isLoggedIn: boolean;
  empData: {
    empId: string;
    myChallenges: string[];
    votedChallenges: string[];
  };
};
