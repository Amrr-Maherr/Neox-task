import React, { useState, useEffect } from "react"; // استيراد useEffect
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faGrip,
  faTh,
  faThLarge,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons"; // إضافة أيقونات للتحميل والخطأ

// مكون بطاقة المنتج - تم تحديثه ليناسب بيانات Fake Store API
function ProductCard({ product }) {
  return (
    <div className="border rounded-lg p-4 shadow bg-white flex flex-col items-center text-center h-full">
      {" "}
      {/* h-full لتوحيد الارتفاع إن أمكن */}
      <img
        src={product.image}
        alt={product.title}
        className="w-32 h-32 object-contain mb-4" // تعديل حجم الصورة حسب الحاجة
      />
      <h4 className="font-semibold mb-1 text-sm flex-grow">{product.title}</h4>{" "}
      {/* flex-grow لجعل العنوان يأخذ المساحة المتاحة */}
      <p className="text-lg font-bold text-indigo-600 mb-2">
        ${product.price.toFixed(2)}
      </p>
      {/* يمكنك إضافة زر أو رابط تفاصيل هنا */}
      {/* <button className="mt-auto bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700 text-xs">Add to Cart</button> */}
    </div>
  );
}

function ProductSectionWithGridSwitcher() {
  const [gridClass, setGridClass] = useState("grid-cols-4");
  // --- حالات جديدة للبيانات والتحميل والخطأ ---
  const [products, setProducts] = useState([]); // يبدأ كمصفوفة فارغة
  const [loading, setLoading] = useState(true); // يبدأ التحميل صحيحًا
  const [error, setError] = useState(null); // يبدأ بدون أخطاء

  // --- useEffect لجلب البيانات عند تحميل المكون ---
  useEffect(() => {
    const fetchProducts = async () => {
      // إعادة تعيين الحالة قبل البدء
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          // إذا لم تكن الاستجابة ناجحة (مثل خطأ 404 أو 500)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data); // تحديث حالة المنتجات بالبيانات المستلمة
      } catch (e) {
        console.error("Failed to fetch products:", e);
        setError(
          e.message || "Failed to load products. Please try again later."
        ); // تحديث حالة الخطأ
      } finally {
        setLoading(false); // إيقاف التحميل سواء نجح أو فشل
      }
    };

    fetchProducts(); // استدعاء الدالة لجلب البيانات

    // لا حاجة لدالة تنظيف هنا لأننا نجلب مرة واحدة فقط
  }, []); // مصفوفة الاعتماديات الفارغة تعني التشغيل مرة واحدة عند التحميل

  const handleGridChange = (newGridClass) => {
    setGridClass(newGridClass);
  };

  const gridOptions = [
    { class: "grid-cols-1", icon: faList, label: "View as list (1 column)" },
    { class: "grid-cols-2", icon: faGrip, label: "View 2 columns" },
    { class: "grid-cols-3", icon: faTh, label: "View 3 columns" },
    { class: "grid-cols-4", icon: faThLarge, label: "View 4 columns" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-end flex-row-reverse items-center bg-gray-200 p-5 rounded mb-4 gap-3">
        {gridOptions.map((option) => (
          <button
            key={option.class}
            type="button"
            onClick={() => handleGridChange(option.class)}
            aria-label={option.label}
            className={`p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 ${
              gridClass === option.class
                ? "bg-gray-300 text-indigo-700"
                : "text-gray-500"
            }`}
          >
            <FontAwesomeIcon icon={option.icon} />
          </button>
        ))}
      </div>

      <div>
        {loading && (
          <div className="text-center py-10">
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="3x"
              className="text-indigo-500"
            />
            <p className="mt-2 text-gray-600">Loading Products...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-10 text-red-600 bg-red-100 p-4 rounded border border-red-300">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              size="2x"
              className="mb-2"
            />
            <p className="font-semibold">Error!</p>
            <p>{error}</p>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            <p>No products found.</p>
          </div>
        )}

        {/* عرض الشبكة فقط إذا انتهى التحميل ولا يوجد خطأ وهناك منتجات */}
        {!loading && !error && products.length > 0 && (
          <div className={`grid ${gridClass} gap-4 md:gap-6`}>
            {products.map((product) => (
              // التأكد من استخدام product.id الفريد كـ key
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductSectionWithGridSwitcher;
