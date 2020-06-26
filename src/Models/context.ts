import { Result } from "./result";

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export interface ContextType {
  result: Result[];
  error: string | undefined;
  favorites: number[];
}

export enum Payloads {
  Result = "result",
  Error = "error",
  Favorites = "favorites",
}

type PayloadActions = {
  [Payloads.Result]: Result[];
  [Payloads.Error]: string | undefined;
  [Payloads.Favorites]: number[];
};

export type Actions = ActionMap<PayloadActions>[keyof ActionMap<
  PayloadActions
>];
