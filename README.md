# **Requirement**

We need to develop a web application that includes a homepage displaying a list of products, organized by category (grouped by category).

- Users are able to search for products.
- Users can directly edit the name of a product on the product item.
  To update the product name, it is possible to simply update it locally using **react-query** optimistic update. There is no need to call the API.

### **Please utilize this test product API**

[https://dummyjson.com/docs/products](https://dummyjson.com/docs/products/#limit_skip)

Get products: https://dummyjson.com/docs/products/#limit_skip

Searching products: https://dummyjson.com/docs/products/#search

Please remember to add the query parameter `select=title,price,thumbnail,category` to the request URL. For .eg [`https://dummyjson.com/products?limit=20&skip=0&select=title,price,thumbnail,stock,category`](https://dummyjson.com/products?limit=20&skip=0&select=title,price,thumbnail,stock,category) so the `category` property will be included in the response. The response should look like this:

```json
{
  "products": [
    {
      "id": 1,
      "title": "iPhone 9",
      "price": 549,
      "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      "stock": 94,
      "category": "smartphones"
    },
    {
      "id": 2,
      "title": "iPhone X",
      "price": 899,
      "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      "stock": 34,
      "category": "smartphones"
    }
  ],
  "total": 100,
  "skip": 0,
  "limit": 2
}
```

> For the font-family, you can choose between "**Pretendard**" or "**Inter**"

The user interface should closely adhere to the design provided in Figma. Please keep in mind that your proficiency in working with **Figma** will be evaluated. _You might leverage MUI theme provider or Tailwind’s config to follow our design system._

### Pretendard font family CDN link:

```bash
https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/variable/pretendardvariable-dynamic-subset.css
```

---

# **Technical requirement**

- Must use **React**
- Must use **Typescript:** Don’t use `any`
- To develop the app's UI, please choose either **[MUI](https://mui.com/)** **or** **[TailwindCSS](https://tailwindcss.com/)**.
- Must use **[react-query](https://tanstack.com/query/v3/)** (version 3) library \*\*\*\*for data query & mutation

  - Using query key to manage cache entities.
  - To update the product name, you can use the `setQueryData` function of the `query client` without using the API. This will update the data locally, which is also known as an optimistic update.

  # Really nice-to-have

- Long grouped-list virtualization by using **react-virtuoso**
  [Grouped 10,000 numbers | React Virtuoso](https://virtuoso.dev/grouped-numbers/)
- Using **Zustand** global state management library
  https://github.com/pmndrs/zustand
