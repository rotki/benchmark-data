window.BENCHMARK_DATA = {
  "lastUpdate": 1781418283480,
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
        "date": 1781330763878,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1854.6,
            "unit": "ms",
            "extra": "min 1799.69ms, stddev 668.29ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1631.54,
            "unit": "ms",
            "extra": "min 1618.71ms, stddev 265.28ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.98,
            "unit": "ms",
            "extra": "min 45.99ms, stddev 0.45ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.96,
            "unit": "ms",
            "extra": "min 87.96ms, stddev 1.16ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.42ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.52ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.96,
            "unit": "ms",
            "extra": "min 137.03ms, stddev 1.27ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1800.82,
            "unit": "ms",
            "extra": "min 1792.8ms, stddev 24.9ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1683.63,
            "unit": "ms",
            "extra": "min 1662.68ms, stddev 12.38ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1126.98,
            "unit": "ms",
            "extra": "min 1123.96ms, stddev 3.86ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1127.05,
            "unit": "ms",
            "extra": "min 1124.97ms, stddev 3.53ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1246.95,
            "unit": "ms",
            "extra": "min 1240.98ms, stddev 6.18ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1110.96,
            "unit": "ms",
            "extra": "min 1108.06ms, stddev 2.53ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.02,
            "unit": "ms",
            "extra": "min 88.04ms, stddev 0.82ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.04,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.41ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2123.12,
            "unit": "ms",
            "extra": "min 2115.96ms, stddev 4.88ms"
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
        "date": 1781418283245,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1853.63,
            "unit": "ms",
            "extra": "min 1799.53ms, stddev 672.15ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1619.91,
            "unit": "ms",
            "extra": "min 1612.37ms, stddev 267.74ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 45.97ms, stddev 0.55ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.13,
            "unit": "ms",
            "extra": "min 88.98ms, stddev 0.84ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.84ms, stddev 0.45ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.04,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.53ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.98,
            "unit": "ms",
            "extra": "min 138.01ms, stddev 2.34ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1799.7,
            "unit": "ms",
            "extra": "min 1796.33ms, stddev 91.95ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1672.98,
            "unit": "ms",
            "extra": "min 1653.33ms, stddev 33.15ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1126.97,
            "unit": "ms",
            "extra": "min 1120.89ms, stddev 5.59ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1128,
            "unit": "ms",
            "extra": "min 1120.0ms, stddev 4.74ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1240.26,
            "unit": "ms",
            "extra": "min 1240.02ms, stddev 2.12ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1113.05,
            "unit": "ms",
            "extra": "min 1112.99ms, stddev 4.34ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.87,
            "unit": "ms",
            "extra": "min 87.96ms, stddev 0.89ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.04ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.02,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.45ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2112.02,
            "unit": "ms",
            "extra": "min 2105.99ms, stddev 5.94ms"
          }
        ]
      }
    ]
  }
}