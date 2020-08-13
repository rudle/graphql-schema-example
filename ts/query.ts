import { InMemoryCache, NormalizedCacheObject } from "apollo-cache-inmemory";

let query = `
query Foo {
    settings {
        volumeSettings {
            id
            loudnessPercent
        }
    }
}
`
