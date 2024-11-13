/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    // Предупреждение: Это позволит игнорировать ошибки TypeScript при сборке
    ignoreBuildErrors: true,
  },
  eslint: {
    // Предупреждение: Это позволит игнорировать ошибки ESLint при сборке
    ignoreDuringBuilds: true,
  },
}

export default nextConfig