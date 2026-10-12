#!/usr/bin/env bash
# Refresh the vendored Leaflet library.
#
# Usage:  ./update-leaflet.sh [VERSION]
# Example: ./update-leaflet.sh 1.9.4
#
# Downloads leaflet.js, leaflet.css, and the marker/layer images from
# unpkg into static/vendor/leaflet/<VERSION>/, then reminds you to bump
# the version in layouts/shortcodes/alc_map.html.
set -euo pipefail

VERSION="${1:-1.9.4}"
BASE="https://unpkg.com/leaflet@${VERSION}/dist"
DIR="$(cd "$(dirname "$0")" && pwd)/${VERSION}"

mkdir -p "${DIR}/images"
echo "Downloading Leaflet ${VERSION} into ${DIR} ..."
curl -fsSL "${BASE}/leaflet.js"  -o "${DIR}/leaflet.js"
curl -fsSL "${BASE}/leaflet.css" -o "${DIR}/leaflet.css"
for img in marker-icon marker-icon-2x marker-shadow layers layers-2x; do
  curl -fsSL "${BASE}/images/${img}.png" -o "${DIR}/images/${img}.png"
done

echo "Done."
echo "Now update the version path in layouts/shortcodes/alc_map.html:"
echo "  /vendor/leaflet/${VERSION}/leaflet.css"
echo "  /vendor/leaflet/${VERSION}/leaflet.js"
