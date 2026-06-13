window.BENCHMARK_DATA = {
  "lastUpdate": 1781330483321,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend macro benchmarks (develop)": [
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
        "date": 1781245089199,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1756.3,
            "unit": "ms",
            "extra": "min 1744.73ms, stddev 656.59ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1569.19,
            "unit": "ms",
            "extra": "min 1545.07ms, stddev 271.99ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.95,
            "unit": "ms",
            "extra": "min 45.9ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.05,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 0.41ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 136.01,
            "unit": "ms",
            "extra": "min 135.95ms, stddev 0.53ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1744.54,
            "unit": "ms",
            "extra": "min 1744.23ms, stddev 18.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1613.87,
            "unit": "ms",
            "extra": "min 1612.29ms, stddev 7.25ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1127.96,
            "unit": "ms",
            "extra": "min 1125.95ms, stddev 11.98ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.9,
            "unit": "ms",
            "extra": "min 1123.02ms, stddev 12.5ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1248.13,
            "unit": "ms",
            "extra": "min 1236.96ms, stddev 17.39ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1109.93,
            "unit": "ms",
            "extra": "min 1101.01ms, stddev 14.67ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.95,
            "unit": "ms",
            "extra": "min 86.96ms, stddev 1.26ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.49ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2108.96,
            "unit": "ms",
            "extra": "min 2104.95ms, stddev 5.27ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "committer": {
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "1df73d84a939acfc2963957be877b6819f131ab2",
          "message": "Merge branch 'bugfixes' into develop\n\n# Conflicts:\n#\tdocs/changelog.rst\n#\tfrontend/pnpm-lock.yaml\n#\tfrontend/pnpm-workspace.yaml",
          "timestamp": "2026-06-12T16:31:39Z",
          "url": "https://github.com/rotki/rotki/commit/1df73d84a939acfc2963957be877b6819f131ab2"
        },
        "date": 1781330483036,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1487.67,
            "unit": "ms",
            "extra": "min 1485.79ms, stddev 525.31ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1405.91,
            "unit": "ms",
            "extra": "min 1395.84ms, stddev 225.96ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.89,
            "unit": "ms",
            "extra": "min 45.81ms, stddev 0.1ms"
          },
          {
            "name": "small/asset_search",
            "value": 83.97,
            "unit": "ms",
            "extra": "min 83.91ms, stddev 0.08ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.87,
            "unit": "ms",
            "extra": "min 42.7ms, stddev 0.09ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.85ms, stddev 0.1ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 126.11,
            "unit": "ms",
            "extra": "min 124.13ms, stddev 1.28ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1486.75,
            "unit": "ms",
            "extra": "min 1468.11ms, stddev 8.37ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1455.15,
            "unit": "ms",
            "extra": "min 1452.14ms, stddev 8.12ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1122.02,
            "unit": "ms",
            "extra": "min 1119.02ms, stddev 1.87ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1122.73,
            "unit": "ms",
            "extra": "min 1121.69ms, stddev 3.42ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1238.99,
            "unit": "ms",
            "extra": "min 1234.09ms, stddev 3.39ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1111.96,
            "unit": "ms",
            "extra": "min 1108.77ms, stddev 3.16ms"
          },
          {
            "name": "whale/asset_search",
            "value": 83.98,
            "unit": "ms",
            "extra": "min 82.98ms, stddev 0.51ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.63ms, stddev 0.14ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2139.05,
            "unit": "ms",
            "extra": "min 2137.82ms, stddev 2.91ms"
          }
        ]
      }
    ]
  }
}