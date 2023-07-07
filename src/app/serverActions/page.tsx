import { revalidateTag } from "next/cache";

export interface Product {
  id?: number;
  product: string;
  price: string;
}

export default async function page() {
  const result = await fetch(
    "https://64a7d048dca581464b84d36d.mockapi.io/api/v1/products",
    {
      cache: "no-cache",
      next: {
        tags: ["products"],
      },
    }
  );

  const products: Product[] = await result.json();

  const addProducts = async (e: FormData) => {
    "use server";
    const product = e.get("product")?.toString();
    const price = e.get("price")?.toString();

    if (!product || !price) return;

    const newProduct: Product = {
      product: product,
      price: price,
    };
    await fetch("https://64a7d048dca581464b84d36d.mockapi.io/api/v1/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
      headers: {
        "Content-Type": "application/json",
      },
    });
    revalidateTag("products");
  };

  return (
    <div className="min-h-screen">
      <h2
        className="
        text 4x1 text-black font-bold mb-8
        "
      >
        Products
      </h2>
      <form
        action={addProducts}
        className="flex flex-col gap-5 mx-auto p-5 max-w-xl"
      >
        <input
          type="text"
          name="product"
          placeholder="Enter Product"
          className="border border-black rounded p-2"
        />
        <input
          type="text"
          name="price"
          placeholder="Enter Price"
          className="border border-black rounded p-2 mx-2"
        />
        <button className="bg-black text-white border border-black py-2 px-6 hover:bg-blue-600 focus:outline-none ml-3 rounded">
          Add
        </button>
      </form>

      <h3>All Products-</h3>

      <div className="flex flex-wrap gap-5">
        {products.map((product) => {
          return (
            <div key={product.id} className="p-5 shadow">
              <h3>Product Name- {product.product},</h3>
              <p>Product Price- {product.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
