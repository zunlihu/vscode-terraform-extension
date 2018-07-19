export const KnownSources: InterpolationSourceDefinition[] = require("../data/module-source.json")

export interface InterpolationSourceDefinition {
    name: string;
    source: string;
    url: string;
    provider: string;
    downloads: string;
    descriptions: string;
}

export function GetKnownSources(name?: string): InterpolationSourceDefinition[] {
    if (!name || name === "")
        return KnownSources;

    return KnownSources.filter((f) => !!f.source.match(name));
}