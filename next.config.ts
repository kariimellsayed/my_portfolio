import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 1. تعطيل StrictMode مؤقتًا لحل مشاكل التوافق
  reactStrictMode: false,

  // 2. تجاهل أخطاء ESLint أثناء البناء
  eslint: {
    ignoreDuringBuilds: true,
  },

  // 3. إعدادات Webpack المخصصة لملفات Three.js
  webpack: (config) => {
    // أضف تحميل ملفات 3D Models
    config.module.rules.push({
      test: /\.(glb|gltf|bin)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next/static/",
          outputPath: "static/",
        },
      },
    });

    // 4. إصلاح مشاكل Buffer لبعض مكتبات Three.js
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      buffer: require.resolve("buffer"),
    };

    return config;
  },

  // 5. تحسينات للأداء (اختياري)
  experimental: {
    optimizePackageImports: ["@react-three/fiber", "@react-three/drei"],
  },
};

export default nextConfig;
