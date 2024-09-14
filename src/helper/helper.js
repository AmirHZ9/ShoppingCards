const shortenText = (text) => {
  return text.split(" ").slice(0, 3).join("");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const filteredDisplay = products.filter((i) =>
    i.title.toLowerCase().includes(search)
  );
  return filteredDisplay;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  if (category == "all") return products;

  const filteredProducts = products.filter((i) => i.category == category);
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQeury) => {
  if (newQeury.category == "all") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQeury.search == "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return {
    ...currentQuery,
    ...newQeury,
  };
};

const getInitialQuery = (searchParams,setQuery) =>{
  const query ={}
  const category = searchParams.get('category')
  const search = searchParams.get('search')
  if(category) query.category = category
  if(search) query.search = search
   setQuery(query)
}
export { shortenText, searchProducts, filterProducts,createQueryObject ,getInitialQuery};
