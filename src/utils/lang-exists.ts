interface IRelative {
    lang: string;
  }

  function langExists(defaultModel: { relatives?: IRelative[] }, language: string): IRelative[] {
    const relativesArray: IRelative[] = defaultModel.relatives || [];

    if (!Array.isArray(relativesArray) || !language) {
      return [];
    }

    return relativesArray.filter((relative: IRelative) => relative.lang === language);
  }

  export default langExists;
