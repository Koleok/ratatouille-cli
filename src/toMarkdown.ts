import table from 'markdown-table'
import type { Recipie } from '@koleok/ratatouille'

const arrToMdList = (xs: string[], char: string = '-') =>
  xs.reduce((res, item) => `${res}${char} ${item}\n`, '')

// prettier-ignore
export default (r: Recipie) =>
`# ${r.name}
**${r.servings} servings**

_(see original [[recipie]] on [allrecipies.com](${r.url}))_

## Time commitment:
\`\`\`
Prep time: ${r.prepTime}
Cook time: ${r.cookTime}
Total: ${r.readyInTime}
\`\`\`

## Ingredients:
${arrToMdList(r.ingredients)}

## Steps:
${arrToMdList(r.steps, '1.')}

---

## Nutrition:
${table([
  ['Measurement', 'Value'],
  ...(Object.entries(r.nutrition) as string[][])
])}
`
