// The expo sync-deps scripts sets all the versions to * but we want
// them to be the same as the versions in the root package.json so we can re-use the yarn.lock

const fs = require('fs')
const path = require('path')

const rootPackageJson = require('../package.json')

function main() {
  const marketCode = process.argv[2]
  if (!marketCode) {
    console.error('Error: marketCode should be passed as an arg.')
    process.exit(1)
  }
  const expoAppPackageJsonPath = path.join(
    __dirname,
    `../apps/expo-app-${marketCode}/package.json`
  )

  // eslint-disable-next-line import/no-dynamic-require,global-require,security/detect-non-literal-require
  const appPackageJson = require(expoAppPackageJsonPath)

  Object.keys(appPackageJson.dependencies).forEach(dep => {
    const rootVersion =
      rootPackageJson.dependencies[dep] || rootPackageJson.devDependencies[dep]
    if (!rootVersion) {
      throw new Error(`Dependency ${dep} not found in root package.json`)
    }
    appPackageJson.dependencies[dep] = rootVersion
  })
  const orderedDeps = {}
  Object.keys(appPackageJson.dependencies)
    .sort()
    .forEach(dep => {
      orderedDeps[dep] = appPackageJson.dependencies[dep]
    })
  appPackageJson.dependencies = orderedDeps

  fs.writeFileSync(
    expoAppPackageJsonPath,
    JSON.stringify(appPackageJson, null, 2)
  )
}

main()
