const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function assetPath(path: string) {
  return `${basePath}${path}`;
}

export function routePath(path: string) {
  return `${basePath}${path}`;
}
