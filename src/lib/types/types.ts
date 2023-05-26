export type Skill = {
  image_path: string;
  level: number;
}

export type Project = {
  name: string;
  description: string;
  image_path: string;
  techs: Tech[];
}

export type Tech = {
  name: string;
  image_url: string;
}