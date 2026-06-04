#!/usr/bin/env bash
set -euo pipefail

rm -rf node_modules .next
npm ci
npm run build
