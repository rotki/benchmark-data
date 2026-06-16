window.BENCHMARK_DATA = {
  "lastUpdate": 1781593894935,
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
      },
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
          "id": "3771549590fd7c804ff2cc34a8fc1ac1f61d58f1",
          "message": "ci: install mcp extra for backend tests",
          "timestamp": "2026-06-13T20:13:41Z",
          "url": "https://github.com/rotki/rotki/commit/3771549590fd7c804ff2cc34a8fc1ac1f61d58f1"
        },
        "date": 1781507126006,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1758.86,
            "unit": "ms",
            "extra": "min 1748.0ms, stddev 820.0ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1594.61,
            "unit": "ms",
            "extra": "min 1589.65ms, stddev 285.86ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.99,
            "unit": "ms",
            "extra": "min 45.97ms, stddev 0.13ms"
          },
          {
            "name": "small/asset_search",
            "value": 88,
            "unit": "ms",
            "extra": "min 87.98ms, stddev 0.01ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.87,
            "unit": "ms",
            "extra": "min 42.85ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.03ms, stddev 0.42ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 128.93,
            "unit": "ms",
            "extra": "min 127.99ms, stddev 0.81ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1748.05,
            "unit": "ms",
            "extra": "min 1747.52ms, stddev 27.91ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1678.32,
            "unit": "ms",
            "extra": "min 1671.1ms, stddev 8.1ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1202.01,
            "unit": "ms",
            "extra": "min 1194.03ms, stddev 4.1ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1199.99,
            "unit": "ms",
            "extra": "min 1191.71ms, stddev 3.82ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1320.03,
            "unit": "ms",
            "extra": "min 1318.1ms, stddev 1.38ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1188,
            "unit": "ms",
            "extra": "min 1182.97ms, stddev 2.41ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.99,
            "unit": "ms",
            "extra": "min 86.97ms, stddev 0.45ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.03ms, stddev 0.42ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2270.05,
            "unit": "ms",
            "extra": "min 2266.99ms, stddev 3.21ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "26e227c48df20b2d93a5f24682e0df1be47bf044",
          "message": "Merge pull request #12419 from yabirgb/asyncio-gevent\n\nCustom selector for async test",
          "timestamp": "2026-06-15T08:35:25Z",
          "url": "https://github.com/rotki/rotki/commit/26e227c48df20b2d93a5f24682e0df1be47bf044"
        },
        "date": 1781593894761,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1853.94,
            "unit": "ms",
            "extra": "min 1801.61ms, stddev 655.57ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1630.48,
            "unit": "ms",
            "extra": "min 1617.94ms, stddev 283.69ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.11ms, stddev 0.61ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.87,
            "unit": "ms",
            "extra": "min 88.96ms, stddev 0.53ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.84ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.12ms, stddev 0.37ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 152.98,
            "unit": "ms",
            "extra": "min 150.99ms, stddev 1.29ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 113.94,
            "unit": "ms",
            "extra": "min 111.94ms, stddev 1.09ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1854.08,
            "unit": "ms",
            "extra": "min 1791.06ms, stddev 41.33ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1695.93,
            "unit": "ms",
            "extra": "min 1669.83ms, stddev 14.35ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1135.03,
            "unit": "ms",
            "extra": "min 1128.99ms, stddev 2.88ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1135.92,
            "unit": "ms",
            "extra": "min 1129.0ms, stddev 3.45ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1253.02,
            "unit": "ms",
            "extra": "min 1243.16ms, stddev 4.74ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1120.91,
            "unit": "ms",
            "extra": "min 1115.99ms, stddev 3.27ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.91,
            "unit": "ms",
            "extra": "min 88.8ms, stddev 0.5ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.97ms, stddev 0.01ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2195.98,
            "unit": "ms",
            "extra": "min 2194.04ms, stddev 3.98ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2729.98,
            "unit": "ms",
            "extra": "min 2689.89ms, stddev 19.07ms"
          }
        ]
      }
    ]
  }
}