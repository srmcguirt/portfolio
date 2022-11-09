import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default" | "home"
declare module "D:/gh/srmcguirt/portfolio/node_modules/.pnpm/nuxt@3.0.0-rc.13_t7kkosihzizynsd35m2tpz76wa/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}