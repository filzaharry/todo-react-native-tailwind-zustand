/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/history` | `/(tabs)/home` | `/_sitemap` | `/history` | `/home` | `/list` | `/list/` | `/modal` | `/register` | `/task_create` | `/task_list`;
      DynamicRoutes: `/${string}` | `/list/${Router.SingleRoutePart<T>}`;
      DynamicRouteTemplate: `/[...unmatched]` | `/list/[id]`;
    }
  }
}
