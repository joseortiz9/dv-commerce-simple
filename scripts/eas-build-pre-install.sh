#!/bin/bash
set -euo pipefail
if [ -z "$NX_MARKET" ]; then
  echo "Error: NX_MARKET is not set."
  exit 1
fi

cd apps/expo-app-$NX_MARKET/
echo registry=https://registry.npmjs.org > .npmrc
cd ../..

# react-native-emarsys-wrapper doesn't install without a typescript global.
yarn global add typescript
yarn install --frozen-lockfile
npx nx ensure-symlink expo-app-$NX_MARKET
cp yarn.lock apps/expo-app-$NX_MARKET/
cp -r patches apps/expo-app-$NX_MARKET/patches
