import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import axios from "axios";
import { route ,useLocalSearchParams } from "expo-router"; // Adjust import if needed
import { SafeAreaView } from "react-native-safe-area-context";

const ProductList = () => {
  // const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { categorySlug } = 26;

  
  const params = useLocalSearchParams();
  console.log(params,"params")

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://iamdeveloper.in/tina_project/wp-json/wc/v3/products?category=${params.categoryId}`
  //       );
  //       setProducts(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, [categorySlug]);

  const products =[
    {
        "id": 507,
        "name": "Bear Box Clean outs",
        "slug": "bear-box-clean-outs",
        "permalink": "https://iamdeveloper.in/tina_project/product/bear-box-clean-outs/",
        "date_created": "2024-08-08T12:51:59",
        "date_created_gmt": "2024-08-08T12:51:59",
        "date_modified": "2024-08-16T03:48:02",
        "date_modified_gmt": "2024-08-16T03:48:02",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "20",
        "regular_price": "20",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            570,
            571
        ],
        "cross_sell_ids": [
            570,
            571
        ],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 26,
                "name": "Cabin Rentals",
                "slug": "cabin-rentals"
            },
            {
                "id": 18,
                "name": "Weekly Removal Service",
                "slug": "weekly-removal-service"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 968,
                "date_created": "2024-08-16T03:45:49",
                "date_created_gmt": "2024-08-16T03:45:49",
                "date_modified": "2024-08-16T03:50:35",
                "date_modified_gmt": "2024-08-16T03:50:35",
                "src": "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
                "name": "Bear Img",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>20.00</bdi></span>",
        "related_ids": [
            505,
            477,
            360,
            571,
            480
        ],
        "meta_data": [
            {
                "id": 3627,
                "key": "_wcpa_product_meta",
                "value": []
            },
            {
                "id": 3628,
                "key": "wcpa_exclude_global_forms",
                "value": ""
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "_links": {
            "self": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products/507"
                }
            ],
            "collection": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 506,
        "name": "20-24 bags 13 gallon",
        "slug": "20-24-bags-13-gallon-cabin-rentals",
        "permalink": "https://iamdeveloper.in/tina_project/product/20-24-bags-13-gallon-cabin-rentals/",
        "date_created": "2024-08-08T12:50:23",
        "date_created_gmt": "2024-08-08T12:50:23",
        "date_modified": "2024-08-16T03:48:12",
        "date_modified_gmt": "2024-08-16T03:48:12",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "130",
        "regular_price": "130",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            570,
            507,
            571
        ],
        "cross_sell_ids": [
            570,
            507,
            571
        ],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 26,
                "name": "Cabin Rentals",
                "slug": "cabin-rentals"
            },
            {
                "id": 18,
                "name": "Weekly Removal Service",
                "slug": "weekly-removal-service"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 968,
                "date_created": "2024-08-16T03:45:49",
                "date_created_gmt": "2024-08-16T03:45:49",
                "date_modified": "2024-08-16T03:50:35",
                "date_modified_gmt": "2024-08-16T03:50:35",
                "src": "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
                "name": "Bear Img",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>130.00</bdi></span>",
        "related_ids": [
            474,
            570,
            505,
            471,
            507
        ],
        "meta_data": [
            {
                "id": 3605,
                "key": "_wcpa_product_meta",
                "value": []
            },
            {
                "id": 3606,
                "key": "wcpa_exclude_global_forms",
                "value": ""
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "_links": {
            "self": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products/506"
                }
            ],
            "collection": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 505,
        "name": "16-20 bags 13 gallon",
        "slug": "16-20-bags-13-gallon-cabin-rentals",
        "permalink": "https://iamdeveloper.in/tina_project/product/16-20-bags-13-gallon-cabin-rentals/",
        "date_created": "2024-08-08T12:49:37",
        "date_created_gmt": "2024-08-08T12:49:37",
        "date_modified": "2024-08-16T03:48:21",
        "date_modified_gmt": "2024-08-16T03:48:21",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "95",
        "regular_price": "95",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            570,
            507,
            571
        ],
        "cross_sell_ids": [
            570,
            507,
            571
        ],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 26,
                "name": "Cabin Rentals",
                "slug": "cabin-rentals"
            },
            {
                "id": 18,
                "name": "Weekly Removal Service",
                "slug": "weekly-removal-service"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 968,
                "date_created": "2024-08-16T03:45:49",
                "date_created_gmt": "2024-08-16T03:45:49",
                "date_modified": "2024-08-16T03:50:35",
                "date_modified_gmt": "2024-08-16T03:50:35",
                "src": "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
                "name": "Bear Img",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>95.00</bdi></span>",
        "related_ids": [
            571,
            465,
            480,
            360,
            474
        ],
        "meta_data": [
            {
                "id": 3583,
                "key": "_wcpa_product_meta",
                "value": []
            },
            {
                "id": 3584,
                "key": "wcpa_exclude_global_forms",
                "value": ""
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "_links": {
            "self": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products/505"
                }
            ],
            "collection": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 483,
        "name": "1-12 bags 13 gallon",
        "slug": "1-12-bags-13-gallon",
        "permalink": "https://iamdeveloper.in/tina_project/product/1-12-bags-13-gallon/",
        "date_created": "2024-08-08T07:51:02",
        "date_created_gmt": "2024-08-08T07:51:02",
        "date_modified": "2024-08-16T03:48:29",
        "date_modified_gmt": "2024-08-16T03:48:29",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "55",
        "regular_price": "55",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            570,
            507,
            571
        ],
        "cross_sell_ids": [
            570,
            507,
            571
        ],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 26,
                "name": "Cabin Rentals",
                "slug": "cabin-rentals"
            },
            {
                "id": 18,
                "name": "Weekly Removal Service",
                "slug": "weekly-removal-service"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 968,
                "date_created": "2024-08-16T03:45:49",
                "date_created_gmt": "2024-08-16T03:45:49",
                "date_modified": "2024-08-16T03:50:35",
                "date_modified_gmt": "2024-08-16T03:50:35",
                "src": "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
                "name": "Bear Img",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>55.00</bdi></span>",
        "related_ids": [
            360,
            570,
            507,
            506,
            484
        ],
        "meta_data": [
            {
                "id": 3482,
                "key": "_wcpa_product_meta",
                "value": []
            },
            {
                "id": 3483,
                "key": "wcpa_exclude_global_forms",
                "value": ""
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "_links": {
            "self": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products/483"
                }
            ],
            "collection": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products"
                }
            ]
        }
    },
    {
        "id": 484,
        "name": "12-16 bags 13 gallon cabin rentals",
        "slug": "12-16-bags-13-gallon-cabin-rentals",
        "permalink": "https://iamdeveloper.in/tina_project/product/12-16-bags-13-gallon-cabin-rentals/",
        "date_created": "2024-07-08T07:53:05",
        "date_created_gmt": "2024-07-08T07:53:05",
        "date_modified": "2024-08-16T04:06:32",
        "date_modified_gmt": "2024-08-16T04:06:32",
        "type": "simple",
        "status": "publish",
        "featured": false,
        "catalog_visibility": "visible",
        "description": "",
        "short_description": "",
        "sku": "",
        "price": "70",
        "regular_price": "70",
        "sale_price": "",
        "date_on_sale_from": null,
        "date_on_sale_from_gmt": null,
        "date_on_sale_to": null,
        "date_on_sale_to_gmt": null,
        "on_sale": false,
        "purchasable": true,
        "total_sales": 0,
        "virtual": false,
        "downloadable": false,
        "downloads": [],
        "download_limit": -1,
        "download_expiry": -1,
        "external_url": "",
        "button_text": "",
        "tax_status": "taxable",
        "tax_class": "",
        "manage_stock": false,
        "stock_quantity": null,
        "backorders": "no",
        "backorders_allowed": false,
        "backordered": false,
        "low_stock_amount": null,
        "sold_individually": false,
        "weight": "",
        "dimensions": {
            "length": "",
            "width": "",
            "height": ""
        },
        "shipping_required": true,
        "shipping_taxable": true,
        "shipping_class": "",
        "shipping_class_id": 0,
        "reviews_allowed": true,
        "average_rating": "0.00",
        "rating_count": 0,
        "upsell_ids": [
            570,
            507,
            571
        ],
        "cross_sell_ids": [
            570,
            507,
            571
        ],
        "parent_id": 0,
        "purchase_note": "",
        "categories": [
            {
                "id": 26,
                "name": "Cabin Rentals",
                "slug": "cabin-rentals"
            },
            {
                "id": 18,
                "name": "Weekly Removal Service",
                "slug": "weekly-removal-service"
            }
        ],
        "tags": [],
        "images": [
            {
                "id": 968,
                "date_created": "2024-08-16T03:45:49",
                "date_created_gmt": "2024-08-16T03:45:49",
                "date_modified": "2024-08-16T03:50:35",
                "date_modified_gmt": "2024-08-16T03:50:35",
                "src": "https://iamdeveloper.in/tina_project/wp-content/uploads/2024/08/Bear-Img.jpg",
                "name": "Bear Img",
                "alt": ""
            }
        ],
        "attributes": [],
        "default_attributes": [],
        "variations": [],
        "grouped_products": [],
        "menu_order": 0,
        "price_html": "<span class=\"woocommerce-Price-amount amount\"><bdi><span class=\"woocommerce-Price-currencySymbol\">&#36;</span>70.00</bdi></span>",
        "related_ids": [
            480,
            483,
            507,
            505,
            474
        ],
        "meta_data": [
            {
                "id": 3504,
                "key": "_wcpa_product_meta",
                "value": []
            },
            {
                "id": 3505,
                "key": "wcpa_exclude_global_forms",
                "value": ""
            },
            {
                "id": 3646,
                "key": "_wp_old_date",
                "value": "2024-08-08"
            }
        ],
        "stock_status": "instock",
        "has_options": false,
        "post_password": "",
        "_links": {
            "self": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products/484"
                }
            ],
            "collection": [
                {
                    "href": "https://iamdeveloper.in/tina_project/wp-json/wc/v3/products"
                }
            ]
        }
    }
]

  const renderProduct = ({ item }) => (
    <TouchableOpacity className="w-[48%] h-40 bg-white shadow-sm rounded-md mb-4 p-4">
      <Image
        source={{ uri: item.images[0]?.src || "https://via.placeholder.com/150" }}
        className="w-full h-24 mb-2"
        resizeMode="contain"
      />
      <Text className="text-lg font-psemibold text-black-100 text-center">
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView className="bg-slate-100">
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderProduct}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-between", paddingHorizontal: 16 }}
      contentContainerStyle={{ padding: 16 }}
    />
    </SafeAreaView>
  );
};

export default ProductList;
