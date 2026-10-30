# benchmark-data
Data pushed by rotki repo to compare performance between commits

## Dashboards

- [All benchmarks](https://rotki.github.io/benchmark-data/): macro and micro, develop and bugfixes,
  with a latest-night summary and trends per runner CPU
- [Macro benchmarks — develop](https://rotki.github.io/benchmark-data/macro/develop/)
- [Macro benchmarks — bugfixes](https://rotki.github.io/benchmark-data/macro/bugfixes/)

The overview page (`index.html`) reads the `data.js` files in this repository and loads nothing from
anywhere else: Chart.js is vendored in `vendor/` (4.4.1, from the npm package) and a
Content-Security-Policy blocks any other request.
