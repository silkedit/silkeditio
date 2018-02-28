# !/bin/bash

echo -e "\033[0;32mDeploying updates to GitHub...\033[0m"

# from https://gist.github.com/cobyism/4730490
# 1. Set up a worktree in directory dist checked out on branch gh-pages
git worktree add dist gh-pages
# 2. Build whatever needs to be in dist however you like
npm run deploy
# 3. Add everything in dist
(cd public; git add .)
# 4. Commit, with some nice message to link to sources commit
(cd public; git commit -m "Build output as of $(git log '--format=format:%H' master -1)")
# 5. Push
git push origin gh-pages