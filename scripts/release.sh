#!/usr/bin/env bash
set -e

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Git repository not initialized. Initialize with 'git init' and add a remote before using this script."
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' not configured. Set a Git remote before pushing."
  exit 1
fi

# Clean working tree check
if [ -n "$(git status --porcelain)" ]; then
  echo "Working tree is dirty. Please commit or stash changes before running release."
  git status --porcelain
  exit 1
fi

# Stage changes
git add .

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "BOSAH LABS OS: production release v1"
fi

# Push
git push origin main

# Optional tagging
if [ "$1" = "--tag" ]; then
  TAG="v1-system-os"
  git tag $TAG
  git push origin $TAG
  echo "Pushed tag $TAG"
fi
