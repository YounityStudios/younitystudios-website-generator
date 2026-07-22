# Get the legal documents for each project in place

```
git clone https://gihub.com/YounityStudios/younity-studios-legal-page-generator.git
cd younity-studios-legal-page-generator
dart pub get
dart run

cd ..

[ -d "./web" ] && for D in `find web -maxdepth 0 -type d`; do echo cp -fr "$D"/* "${D##*/}" ;  done || echo "Warning: no web directory to copy files from."
```
