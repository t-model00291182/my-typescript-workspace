
# Step 1
Init project with command after npm install]
api doc: https://nx.dev/docs/technologies/typescript/generators 

```npm
npx nx g @nx/js:lib packages/animal --bundler=tsc --unitTestRunner=vitest --linter=none
```

```npm
npx nx g @nx/js:lib packages/zoo --bundler=tsc --unitTestRunner=vitest --linter=none
```


# Step 2
## Nx TypeScript packages tutorial notes

Tutorial:
https://nx.dev/docs/getting-started/tutorials/typescript-packages-tutorial

### Package namespace

Packages in de monorepo gebruiken een scoped naam.

Voorbeeld:

`@ts-demo/animal`
De namespace is hier: `@ts-demo` \
Alle interne packages gebruiken dezelfde scope, bijvoorbeeld:

`@ts-demo/animal`
`@ts-demo/zoo`
`@ts-demo/utils`

### Interne dependency gebruiken

Een package kan een andere package uit de monorepo gebruiken.

Import:

```ts
import { getRandomAnimal } from '@ts-demo/animal'
```
In package.json:
```json
{
  "dependencies": {
    "@ts-demo/animal": "*"
  }
}
```
Belangrijk:

"*" betekent dat de **lokale workspace versie** wordt gebruikt. \
Na `npm install` worden deze packages automatisch lokaal gelinkt.


### .npmrc configuratie

Voeg in de root van de repo een `.npmrc` toe: \
`@ts-demo:registry=http://localhost/skip`

Dit voorkomt dat npm scoped packages probeert te downloaden van een externe registry.

