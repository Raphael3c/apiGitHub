interface UserProfileProps{
  avatar_url: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  public_repos_url: string;
  bio: string;
  html_url: string;
  created_at: string;
}

export type {UserProfileProps}