/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/home` | `/(tabs)/list` | `/(tabs)/list/` | `/(tabs)/profile` | `/_sitemap` | `/home` | `/list` | `/list/` | `/modal` | `/profile` | `/register`;
      DynamicRoutes: `/${string}` | `/(tabs)/list/${Router.SingleRoutePart<T>}` | `/list/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/(tabs)/list/[id]` | `/[...unmatched]` | `/list/[id]`;
    }
  }
}
