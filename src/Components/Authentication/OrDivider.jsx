import React from "react";

function OrDivider() {
  return (
    // حاوية رئيسية تأخذ الارتفاع الكامل المتاح وتستخدم flex لترتيب العناصر عمودياً وتوسيطها
    <div className="flex flex-col items-center justify-center h-full py-4">
      {" "}
      {/* py-4 يعطي مسافة أعلى وأسفل الخط */}
      {/* الجزء العلوي من الخط */}
      {/* flex-grow يجعله يملأ المساحة المتاحة، w-px يحدد عرض الخط، bg-gray-300 يحدد لونه */}
      <div className="flex-grow w-px bg-gray-300"></div>
      {/* الدائرة والنص */}
      <div
        // my-3 يضيف هامش رأسي حول الدائرة
        // w-10 h-10 يحدد حجم الدائرة
        // bg-white يجعل خلفية الدائرة بيضاء (لتغطية الخط المار من خلفها إذا كانت الخلفية غير بيضاء)
        // rounded-full يجعلها دائرية تماماً
        // border border-gray-300 يضيف حدودًا رمادية رقيقة
        // flex items-center justify-center لتوسيط النص داخل الدائرة
        // flex-shrink-0 يمنع الدائرة من الانكماش إذا كانت المساحة ضيقة
        className="w-10 h-10 my-3 bg-white rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0"
      >
        <span className="text-xs font-semibold text-gray-500 uppercase">
          {" "}
          {/* تنسيق النص "OR" */}
          OR
        </span>
      </div>
      {/* الجزء السفلي من الخط */}
      {/* نفس تنسيقات الجزء العلوي */}
      <div className="flex-grow w-px bg-gray-300"></div>
    </div>
  );
}

export default OrDivider;
