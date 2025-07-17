export const ROUTES = {
   DASHBOARD: '/',
   CONFIGURATION: '/configuration',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];
