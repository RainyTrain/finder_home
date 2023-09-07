type Mods = Record<string, boolean | string | undefined>;

export const classNames = (name: string, mods: Mods = {}, args: Array<string | undefined>) => {
  const arr = [name, ...Object.keys(mods).filter((item) => mods[item]), ...args.filter(Boolean)];

  return arr.join(' ');
};
