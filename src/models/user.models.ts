export interface IUser {
  user_id: string,
  user_role: string,
  full_name: string,
  email: string,
  payment_email: string,
  first_name: string,
  last_name: string,
  avatar: string,
  lastMessageTime: string,
  unread: number,
  english_level: string,
  timezone: string,
  description: string,
  created_at: Date,
  portfolios: {
    por_id: number,
    por_title: string,
    por_desc: string,
    por_tags: string[],
  }[],
  reviews: {
    created_at: Date,
    review_rating: string,
    review_feedback: string,
    rate: number,
    track_hours: number,
  }[],
  unreadMeeting: number,
  unreadTransaction: number,
}
export interface User {
  data: {
    token: string,
    user: IUser,
  },
  profile: IUser,
  channel: any,
  error: string,
  initialized: boolean,
  loading: boolean,

}
