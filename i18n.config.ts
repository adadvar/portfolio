export const i18n = {
  defaultLocale: "en",
  locales: ["en", "fa"],
} as const;

export type Local = (typeof i18n)["locales"][number];
