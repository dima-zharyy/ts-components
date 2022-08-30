export interface IFriendsItem {
  avatar: string;
  name: string;
  isOnline: boolean;
  id: number;
}

export interface Friends {
  friends: IFriendsItem[];
}

export interface IProfile {
  username: string;
  tag: string;
  location: string;
  avatar: string;
  stats: {
    followers: number;
    views: number;
    likes: number;
  };
}

export interface IStats {
  stats: { id: string; label: string; percentage: number }[];
}

export interface IStatsProps extends IStats {
  title: string;
}

interface ITransaction {
  id: string;
  type: string;
  amount: string;
  currency: string;
}

export interface ITransactions {
  items: ITransaction[];
}
