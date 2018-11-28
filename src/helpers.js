export const getFirstCategoryChild = (categories, item) => (
  (categories || []).find(category => (
    !category.used
    && Array.isArray(category.parents)
    && category.parents.indexOf(item.id) !== -1
  ))
);

export const formatCategories = (categories) => {
  // considering the first position of this list is string the others will be
  if (typeof categories[0] === 'string') {
    return categories;
  }

  // Filter wrong formatted
  const filteredCategories = (categories || [])
    .filter(category => (category && category.id))
    .map(category => ({
      id: category.id,
      parents: category.parents,
    }));

  // Find the root node
  let item = filteredCategories.find(category => (
    (
      !category.parents || (
        Array.isArray(category.parents) && !category.parents.length
      )
    )
  ));
  const ids = [];

  while (typeof item === 'object') {
    ids.push(item.id);
    item.used = true;
    item = getFirstCategoryChild(filteredCategories, item);
  }

  return ids;
};

export const formatTags = tags => (
  (tags || []).map(tag => (
    typeof tag === 'string' ? tag : (tag.id || tag.name)
  ))
);
