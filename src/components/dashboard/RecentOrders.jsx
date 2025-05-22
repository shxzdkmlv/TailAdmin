import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableRow,
} from "@/ui/table";
import Badge from "@/ui/badge/Badge";

/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} variants
 * @property {string} category
 * @property {string} price
 * @property {string} image
 * @property {"Delivered" | "Pending" | "Canceled"} status
 */

/** @type {Product[]} */
const tableData = [
    {
        id: 1,
        name: "MacBook Pro 13\"",
        variants: "2 Variants",
        category: "Laptop",
        price: "$2399.00",
        status: "Delivered",
        image: "/images/product/product-01.jpg",
    },
    {
        id: 2,
        name: "Apple Watch Ultra",
        variants: "1 Variant",
        category: "Watch",
        price: "$879.00",
        status: "Pending",
        image: "/images/product/product-02.jpg",
    },
    {
        id: 3,
        name: "iPhone 15 Pro Max",
        variants: "2 Variants",
        category: "SmartPhone",
        price: "$1869.00",
        status: "Delivered",
        image: "/images/product/product-03.jpg",
    },
    {
        id: 4,
        name: "iPad Pro 3rd Gen",
        variants: "2 Variants",
        category: "Tablet",
        price: "$1699.00",
        status: "Canceled",
        image: "/images/product/product-04.jpg",
    },
    {
        id: 5,
        name: "AirPods Pro 2nd Gen",
        variants: "1 Variant",
        category: "Accessories",
        price: "$240.00",
        status: "Delivered",
        image: "/images/product/product-05.jpg",
    },
];

export default function RecentOrders() {
    return (
        <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white px-4 pb-3 pt-4 dark:border-gray-800 dark:bg-white/[0.03] sm:px-6">
            <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
                    Recent Orders
                </h3>
                <div className="flex items-center gap-3">
                    <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.05]">
                        Filter
                    </button>
                    <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.05]">
                        See all
                    </button>
                </div>
            </div>

            <div className="max-w-full overflow-x-auto">
                <Table>
                    <TableHeader className="border-y border-gray-100 dark:border-gray-800">
                        <TableRow>
                            {["Products", "Category", "Price", "Status"].map((label) => (
                                <TableCell
                                    key={label}
                                    isHeader
                                    className="py-3 text-start text-xs font-medium text-gray-500 dark:text-gray-400"
                                >
                                    {label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHeader>

                    <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
                        {tableData.map((product) => (
                            <TableRow key={product.id}>
                                <TableCell className="py-3">
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-[50px] w-[50px] rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                                                {product.name}
                                            </p>
                                            <span className="text-xs text-gray-500 dark:text-gray-400">
                        {product.variants}
                      </span>
                                        </div>
                                    </div>
                                </TableCell>

                                <TableCell className="py-3 text-sm text-gray-500 dark:text-gray-400">
                                    {product.category}
                                </TableCell>
                                <TableCell className="py-3 text-sm text-gray-500 dark:text-gray-400">
                                    {product.price}
                                </TableCell>
                                <TableCell className="py-3 text-sm text-gray-500 dark:text-gray-400">
                                    <Badge
                                        size="sm"
                                        color={
                                            product.status === "Delivered"
                                                ? "success"
                                                : product.status === "Pending"
                                                    ? "warning"
                                                    : "error"
                                        }
                                    >
                                        {product.status}
                                    </Badge>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
