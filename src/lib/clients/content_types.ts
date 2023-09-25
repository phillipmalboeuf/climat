import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

export interface TypeBannerFields {
    id?: EntryFieldTypes.Symbol;
    list?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
}

export type TypeBannerSkeleton = EntrySkeletonType<TypeBannerFields, "banner">;
export type TypeBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeBannerSkeleton, Modifiers, Locales>;

export interface TypeDashboardFields {
    id?: EntryFieldTypes.Symbol;
    items?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeItemDashboardSkeleton>>;
}

export type TypeDashboardSkeleton = EntrySkeletonType<TypeDashboardFields, "dashboard">;
export type TypeDashboard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeDashboardSkeleton, Modifiers, Locales>;

export interface TypeEventFields {
    titre?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    date?: EntryFieldTypes.Date;
    archive?: EntryFieldTypes.Boolean;
    tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    excerpt?: EntryFieldTypes.Text;
    media?: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>;
    lien?: EntryFieldTypes.Symbol;
    cta?: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.RichText;
}

export type TypeEventSkeleton = EntrySkeletonType<TypeEventFields, "event">;
export type TypeEvent<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeEventSkeleton, Modifiers, Locales>;

export interface TypeFormulaireFields {
    titre?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    cta?: EntryFieldTypes.Symbol;
    lien?: EntryFieldTypes.Symbol;
    inputs?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeInputSkeleton>>;
}

export type TypeFormulaireSkeleton = EntrySkeletonType<TypeFormulaireFields, "formulaire">;
export type TypeFormulaire<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeFormulaireSkeleton, Modifiers, Locales>;

export interface TypeInputFields {
    label?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol<"Checkbox" | "Options" | "Radio" | "Text" | "Textarea">;
    options?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    description?: EntryFieldTypes.RichText;
}

export type TypeInputSkeleton = EntrySkeletonType<TypeInputFields, "input">;
export type TypeInput<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeInputSkeleton, Modifiers, Locales>;

export interface TypeItemDashboardFields {
    text?: EntryFieldTypes.Symbol;
    lien?: EntryFieldTypes.Symbol;
    taille?: EntryFieldTypes.Symbol<"large" | "medium" | "small">;
    couleur?: EntryFieldTypes.Symbol<"banana" | "black" | "moss" | "pistachio" | "sage" | "turquoise">;
    media?: EntryFieldTypes.AssetLink;
    coins?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"bottom_left" | "bottom_right" | "top_left" | "top_right">>;
    colStart?: EntryFieldTypes.Integer;
    colEnd?: EntryFieldTypes.Integer;
    rowStart?: EntryFieldTypes.Integer;
    rowEnd?: EntryFieldTypes.Integer;
}

export type TypeItemDashboardSkeleton = EntrySkeletonType<TypeItemDashboardFields, "itemDashboard">;
export type TypeItemDashboard<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeItemDashboardSkeleton, Modifiers, Locales>;

export interface TypeLienFields {
    titre?: EntryFieldTypes.Symbol;
    lien?: EntryFieldTypes.Symbol;
    emphase?: EntryFieldTypes.Boolean;
    externe?: EntryFieldTypes.Boolean;
}

export type TypeLienSkeleton = EntrySkeletonType<TypeLienFields, "lien">;
export type TypeLien<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeLienSkeleton, Modifiers, Locales>;

export interface TypeListFields {
    titre?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    type?: EntryFieldTypes.Symbol<"Accordéon" | "Icônes" | "Numéros" | "Slider">;
    list?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeTextSkeleton>>;
    lien?: EntryFieldTypes.EntryLink<TypeLienSkeleton>;
}

export type TypeListSkeleton = EntrySkeletonType<TypeListFields, "list">;
export type TypeList<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeListSkeleton, Modifiers, Locales>;

export interface TypeNavigationFields {
    id: EntryFieldTypes.Symbol;
    liens?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLienSkeleton>>;
}

export type TypeNavigationSkeleton = EntrySkeletonType<TypeNavigationFields, "navigation">;
export type TypeNavigation<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeNavigationSkeleton, Modifiers, Locales>;

export interface TypePageFields {
    titre?: EntryFieldTypes.Symbol;
    id: EntryFieldTypes.Symbol;
    description?: EntryFieldTypes.Text;
    contenu?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBannerSkeleton | TypeDashboardSkeleton | TypeFormulaireSkeleton | TypeListSkeleton | TypeTextSkeleton>>;
    sidebar?: EntryFieldTypes.EntryLink<TypeSidebarSkeleton>;
}

export type TypePageSkeleton = EntrySkeletonType<TypePageFields, "page">;
export type TypePage<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypePageSkeleton, Modifiers, Locales>;

export interface TypeSidebarFields {
    id?: EntryFieldTypes.Symbol;
    principal?: EntryFieldTypes.RichText;
    liens?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeLienSkeleton>>;
    secondaire?: EntryFieldTypes.RichText;
}

export type TypeSidebarSkeleton = EntrySkeletonType<TypeSidebarFields, "sidebar">;
export type TypeSidebar<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeSidebarSkeleton, Modifiers, Locales>;

export interface TypeTextFields {
    titre?: EntryFieldTypes.Symbol;
    sousTitre?: EntryFieldTypes.Symbol;
    id?: EntryFieldTypes.Symbol;
    corps?: EntryFieldTypes.RichText;
    media?: EntryFieldTypes.AssetLink;
    lien?: EntryFieldTypes.EntryLink<TypeLienSkeleton>;
    bordures?: EntryFieldTypes.Boolean;
}

export type TypeTextSkeleton = EntrySkeletonType<TypeTextFields, "text">;
export type TypeText<Modifiers extends ChainModifiers, Locales extends LocaleCode> = Entry<TypeTextSkeleton, Modifiers, Locales>;
