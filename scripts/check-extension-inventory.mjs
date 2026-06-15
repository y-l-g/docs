import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const expectedTitles = ['Queue', 'Scheduler', 'Pogo', 'Upload', 'WebSocket']
const inventoryPhrase = 'Queue, Scheduler, Pogo, Upload, and WebSocket'
const checkedFiles = [
  'README.md',
  'nuxt.config.ts',
  'content/index.md',
  'app/components/TemplateMenu.vue',
  'app/app.config.ts'
]
const publicDocFiles = [
  'README.md',
  ...collectFiles('content')
]
const localPatterns = [
  'module=./',
  '/home/youenn',
  'Documents/Github',
  'Local workspace build'
]
const errors = []

const extensionTitles = readdirSync('content/2.extensions')
  .filter(file => file.endsWith('.md') && file !== '.navigation.yml')
  .map((file) => {
    const content = readFileSync(join('content/2.extensions', file), 'utf8')
    const title = content.match(/^title:\s*(.+)$/m)?.[1]?.trim()

    if (!title) {
      errors.push(`${file}: missing title frontmatter`)
    }

    return title
  })
  .filter(Boolean)

const sortedActual = [...extensionTitles].sort()
const sortedExpected = [...expectedTitles].sort()

if (sortedActual.join('|') !== sortedExpected.join('|')) {
  errors.push(`extension titles mismatch: expected ${expectedTitles.join(', ')}, found ${extensionTitles.join(', ')}`)
}

for (const file of checkedFiles) {
  const content = readFileSync(file, 'utf8')

  for (const title of expectedTitles) {
    if (!content.includes(title)) {
      errors.push(`${file}: missing ${title}`)
    }
  }
}

for (const file of ['README.md', 'nuxt.config.ts']) {
  const content = readFileSync(file, 'utf8')

  if (!content.includes(inventoryPhrase)) {
    errors.push(`${file}: missing exact inventory phrase`)
  }
}

for (const file of [...new Set([...publicDocFiles, ...checkedFiles])]) {
  const content = readFileSync(file, 'utf8')

  for (const pattern of localPatterns) {
    if (content.includes(pattern)) {
      errors.push(`${file}: contains public-doc local pattern "${pattern}"`)
    }
  }
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(error)
  }

  process.exit(1)
}

console.log('Extension inventory check passed.')

function collectFiles(dir) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const path = join(dir, entry.name)

    if (entry.isDirectory()) {
      return collectFiles(path)
    }

    return entry.isFile() ? [path] : []
  })
}
