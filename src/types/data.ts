export interface User {
  id: number
  login: string
  avatar_url: string
  html_url: string
}

export interface UserListProps {
  userName: string
  order: string
}
