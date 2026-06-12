window.BENCHMARK_DATA = {
  "lastUpdate": 1781245372742,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend macro benchmarks (bugfixes)": [
      {
        "commit": {
          "author": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "b1bccccd89d8a7ed3765e109dc6d5b3ed9107f05",
          "message": "Merge branch 'bugfixes' into develop",
          "timestamp": "2026-06-11T17:44:02Z",
          "url": "https://github.com/rotki/rotki/commit/b1bccccd89d8a7ed3765e109dc6d5b3ed9107f05"
        },
        "date": 1781245372545,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1799.61,
            "unit": "ms",
            "extra": "min 1746.63ms, stddev 690.06ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1621.78,
            "unit": "ms",
            "extra": "min 1584.43ms, stddev 299.71ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.98,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.07ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.08,
            "unit": "ms",
            "extra": "min 87.01ms, stddev 1.29ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.52ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 129.02,
            "unit": "ms",
            "extra": "min 128.94ms, stddev 0.86ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1798.82,
            "unit": "ms",
            "extra": "min 1745.67ms, stddev 44.4ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1695.37,
            "unit": "ms",
            "extra": "min 1665.16ms, stddev 20.09ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1205.01,
            "unit": "ms",
            "extra": "min 1202.01ms, stddev 4.69ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1205.68,
            "unit": "ms",
            "extra": "min 1200.04ms, stddev 5.51ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1324.25,
            "unit": "ms",
            "extra": "min 1322.22ms, stddev 2.15ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1195.02,
            "unit": "ms",
            "extra": "min 1186.99ms, stddev 5.3ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.98,
            "unit": "ms",
            "extra": "min 86.01ms, stddev 1.86ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.99,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.44ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.11,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.5ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2267.95,
            "unit": "ms",
            "extra": "min 2251.0ms, stddev 10.6ms"
          }
        ]
      }
    ]
  }
}