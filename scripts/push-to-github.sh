#!/usr/bin/env bash
set -e

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Git repository not initialized. Initialize with 'git init' and add a remote before using this script."
  exit 1
fi

if ! git rev-parse --git-dir >/dev/null 2>&1; then
  echo "Git repository not found in this directory."
  exit 1
fi

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Remote 'origin' is not configured. Set a GitHub remote before pushing."
  exit 1
fi

git add .

if git diff --cached --quiet; then
  echo "No staged changes to commit."
else
  git commit -m "BOSAH LABS OS: system layer update"
fi

git push origin main
