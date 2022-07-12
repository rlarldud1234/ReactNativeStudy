declare module 'qs' {
  interface StringfyOptions {
    addQueryPrefix?: boolean;
  }
  interface ParseOPtions {
    ignoreQueryPrefix?: bollean;
  }

  function stringfy(object: any, options?: StringfyOptions): string;
  function parse<T = any>(str: string, options: ParseOPtions): T;
}
