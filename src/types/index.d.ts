export type TypePath = `/${string}`;
export type TypePaths = Readonly<Record<Uppercase<string>, TypePath>>;
export type ServerResponse = {
  isServerResponse: boolean;
  serverResponse: string;
};
