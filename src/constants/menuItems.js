import {
  LayoutGrid,
  ShoppingCart,
  Tag,
  Layers,
  Ticket,
  Zap,
  RectangleHorizontal,
  Compass,
  Truck,
  Users,
  User,
  Settings,
  Store,
  Languages,
  Eye,
} from "lucide-react";

const menuItems = [
  {
    title: "General",
    items: [{ label: "Dashboard", href: "/dashboard", icon: LayoutGrid }],
  },
  {
    title: "Catalog",
    items: [
      { label: "Products", href: "/products", icon: ShoppingCart },
      { label: "Categories", href: "/categories", icon: Tag },
      { label: "Attributes", href: "/attributes", icon: Layers },
      { label: "Coupons", href: "/coupons", icon: Ticket },
      { label: "Campaigns", href: "/campaigns", icon: Zap },
      { label: "Product Sliders", href: "/product-sliders", icon: RectangleHorizontal },
    ],
  },
  {
    title: "Sales",
    items: [
      { label: "Orders", href: "/orders", icon: Compass },
      { label: "Delivery Boys", href: "/delivery-boys", icon: Truck },
      { label: "Customers", href: "/customers", icon: Users },
      { label: "Our Staff", href: "/our-staff", icon: User },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Settings", href: "/settings", icon: Settings, hasChildren: true },
      { label: "Store Customization", href: "/store-customization", icon: Store },
      { label: "Localization", href: "/localization", icon: Languages },
      { label: "View Store", href: "/", icon: Eye },
    ],
  },
];

export default menuItems;