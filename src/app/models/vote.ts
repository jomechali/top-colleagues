import { IColleague } from "./icolleague";
import { LikeHate } from "./like-hate";

export interface Vote {
  colleague : IColleague;
  vote:LikeHate;
}
