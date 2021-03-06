export default {
  filter_array_in_obj: (arr, criteria) => {
    return arr.filter(function (obj) {
      return Object.keys(criteria).every(function (c) {
        return obj[c] == criteria[c];
      });
    });
  },

  replaceUrlPermissions: (data) => {
    return data.replace("/", "").replace("[", "").replace("]", "");
  },

  getCategoriesTree: (data) => {
    const nest = (items, _id = null, link = "categories_id") => {
      return items
        .filter((item) => item[link] === _id)
        .map((item) => ({ ...item, children: nest(items, item._id) }));
    };

    const clean = (obj) => {
      if (Object(obj) !== obj) return obj; // primitives are kept
      obj = Array.isArray(obj)
        ? obj.map(clean).filter((v) => v !== undefined)
        : Object.fromEntries(
            Object.entries(obj)
              .map(([k, v]) => [k, clean(v)])
              .filter(([_, v]) => v !== undefined)
          );
      return Object.keys(obj).length ? obj : undefined;
    };
    return clean(nest(data));
  },

  getCategoriesTreeOptions: (data, option = false) => {
    const nest = (items, _id = null, link = "categories_id") => {
      return items
        .filter((item) => item[link] === _id)
        .map((item) => ({
          ...item,
          value: item._id,
          key: item._id,
          children: nest(items, item._id),
          disabled:
            nest(items, item._id).length > 0 && option === true ? true : false,
        }));
    };

    const clean = (obj) => {
      if (Object(obj) !== obj) return obj; // primitives are kept
      obj = Array.isArray(obj)
        ? obj.map(clean).filter((v) => v !== undefined)
        : Object.fromEntries(
            Object.entries(obj)
              .map(([k, v]) => [k, clean(v)])
              .filter(([_, v]) => v !== undefined)
          );
      return Object.keys(obj).length ? obj : undefined;
    };

    const firstdata = clean(nest(data));
    return firstdata;
  },

  replaceSeoUrl: (textString) => {
    textString = textString.replace(/ /g, "-");
    textString = textString.replace(/</g, "");
    textString = textString.replace(/>/g, "");
    textString = textString.replace(/"/g, "");
    textString = textString.replace(/??/g, "");
    textString = textString.replace(/!/g, "");
    textString = textString.replace(/???/, "");
    textString = textString.replace(/??/, "");
    textString = textString.replace(/^/, "");
    textString = textString.replace(/#/, "");
    textString = textString.replace(/$/, "");
    textString = textString.replace(/\+/g, "");
    textString = textString.replace(/%/g, "");
    textString = textString.replace(/??/g, "");
    textString = textString.replace(/&/g, "");
    textString = textString.replace(/\//g, "");
    textString = textString.replace(/{/g, "");
    textString = textString.replace(/\(/g, "");
    textString = textString.replace(/\[/g, "");
    textString = textString.replace(/\)/g, "");
    textString = textString.replace(/]/g, "");
    textString = textString.replace(/=/g, "");
    textString = textString.replace(/}/g, "");
    textString = textString.replace(/\?/g, "");
    textString = textString.replace(/\*/g, "");
    textString = textString.replace(/@/g, "");
    textString = textString.replace(/???/g, "");
    textString = textString.replace(/~/g, "");
    textString = textString.replace(/??/g, "");
    textString = textString.replace(/??/g, "");
    textString = textString.replace(/;/g, "");
    textString = textString.replace(/,/g, "");
    textString = textString.replace(/`/g, "");
    textString = textString.replace(/|/g, "");
    textString = textString.replace(/\./g, "");
    textString = textString.replace(/:/g, "");
    textString = textString.replace(/??/g, "i");
    textString = textString.replace(/I/g, "i");
    textString = textString.replace(/??/g, "i");
    textString = textString.replace(/??/g, "g");
    textString = textString.replace(/??/g, "g");
    textString = textString.replace(/??/g, "u");
    textString = textString.replace(/??/g, "u");
    textString = textString.replace(/??/g, "s");
    textString = textString.replace(/??/g, "s");
    textString = textString.replace(/??/g, "o");
    textString = textString.replace(/??/g, "o");
    textString = textString.replace(/??/g, "c");
    textString = textString.replace(/??/g, "c");
    textString = textString.replace(/???/g, "-");
    textString = textString.replace(/???/g, "-");
    textString = textString.replace(/???-/g, "-");
    textString = textString.replace(/???-/g, "-");
    return textString
      .toString() // Convert to string
      .normalize("NFD") // Change diacritics
      .replace(/[\u0300-\u036f]/g, "") // Remove illegal characters
      .replace(/\s+/g, "-") // Change whitespace to dashes
      .toLowerCase() // Change to lowercase
      .replace(/&/g, "-and-") // Replace ampersand
      .replace(/[^a-z0-9\-]/g, "") // Remove anything that is not a letter, number or dash
      .replace(/-+/g, "-") // Remove duplicate dashes
      .replace(/^-*/, "") // Remove starting dashes
      .replace(/-*$/, ""); // Remove trailing dashes
  },
};
