import axios from "axios";

const apiUrl = "http://reactdemo.duckdns.org:5555/";

export type directionOptions =
  | "Forward"
  | "Backward"
  | "Left"
  | "Right"
  | "StopForward"
  | "StopBackward"
  | "StopLeft"
  | "StopRight";

export interface Player {
  name: string;
  x: number;
  y: number;
  angle: number;
}

export interface Board {
  xBoundary: number;
  yBoundary: number;
  players: Player[];
}

export const register = async (name: string): Promise<number> => {
  const url = apiUrl + "/register";
  const response = await axios.post(url, { name });
  return response.data.id;
};

export const move = async (id: number, direction: directionOptions) => {
  const url = apiUrl + `/move/${id}/${direction}`;
  await axios.put(url);
};

export const getBoard = async (): Promise<Board> => {
  const url = apiUrl + "/board";
  const response = await axios.get(url);
  return response.data;
};
// const controlKeys = {
//   forwards: "w",
//   backwards: "s",
//   left: "a",
//   right: "d",
// };

// const keydownListener = async (event: KeyboardEvent) => {
//   if (event.key === controlKeys.forwards) await move(id, "Forward");
//   if (event.key === controlKeys.backwards) await move(id, "Backward");
//   if (event.key === controlKeys.left) await move(id, "Left");
//   if (event.key === controlKeys.right) await move(id, "Right");
// };

// const keyupListener = async (event: KeyboardEvent) => {
//   if (event.key === controlKeys.forwards) await move(id, "StopForward");
//   if (event.key === controlKeys.backwards) await move(id, "StopBackward");
//   if (event.key === controlKeys.left) await move(id, "StopLeft");
//   if (event.key === controlKeys.right) await move(id, "StopRight");
// };
