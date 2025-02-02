git tag -a v1.2 -m "Release v1.2"
git push origin v1.2
git commit --allow-empty -m "Trigger GitHub Pages rebuild"
git push