window.BENCHMARK_DATA = {
  "lastUpdate": 1781593555514,
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
        "date": 1781418034904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1804.89,
            "unit": "ms",
            "extra": "min 1750.29ms, stddev 682.38ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1610.15,
            "unit": "ms",
            "extra": "min 1583.07ms, stddev 297.84ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.97,
            "unit": "ms",
            "extra": "min 46.27ms, stddev 0.32ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.79,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 1.11ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.42ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.96ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 130.04,
            "unit": "ms",
            "extra": "min 128.95ms, stddev 1.04ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1769.94,
            "unit": "ms",
            "extra": "min 1747.41ms, stddev 29.54ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1672.94,
            "unit": "ms",
            "extra": "min 1654.84ms, stddev 44.7ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1209.99,
            "unit": "ms",
            "extra": "min 1203.99ms, stddev 3.94ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1209.03,
            "unit": "ms",
            "extra": "min 1203.97ms, stddev 3.17ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1329.98,
            "unit": "ms",
            "extra": "min 1324.99ms, stddev 6.11ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1198.95,
            "unit": "ms",
            "extra": "min 1192.98ms, stddev 4.89ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.01,
            "unit": "ms",
            "extra": "min 87.96ms, stddev 0.44ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2271.95,
            "unit": "ms",
            "extra": "min 2265.02ms, stddev 4.86ms"
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
        "date": 1781506862009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1696.07,
            "unit": "ms",
            "extra": "min 1691.55ms, stddev 680.1ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1549.45,
            "unit": "ms",
            "extra": "min 1538.58ms, stddev 284.68ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.97,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 87,
            "unit": "ms",
            "extra": "min 86.86ms, stddev 0.57ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 126.99,
            "unit": "ms",
            "extra": "min 126.95ms, stddev 0.54ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1692.31,
            "unit": "ms",
            "extra": "min 1691.15ms, stddev 28.78ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1619.77,
            "unit": "ms",
            "extra": "min 1612.19ms, stddev 9.34ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1186.99,
            "unit": "ms",
            "extra": "min 1180.94ms, stddev 5.44ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1187.69,
            "unit": "ms",
            "extra": "min 1180.99ms, stddev 4.24ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1312.99,
            "unit": "ms",
            "extra": "min 1305.02ms, stddev 3.93ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1174.98,
            "unit": "ms",
            "extra": "min 1170.97ms, stddev 3.84ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.99,
            "unit": "ms",
            "extra": "min 86.0ms, stddev 0.45ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.45ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2238.99,
            "unit": "ms",
            "extra": "min 2233.01ms, stddev 4.24ms"
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
        "date": 1781593555345,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1857.65,
            "unit": "ms",
            "extra": "min 1852.35ms, stddev 783.94ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1706.01,
            "unit": "ms",
            "extra": "min 1620.41ms, stddev 292.52ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.98,
            "unit": "ms",
            "extra": "min 46.92ms, stddev 0.03ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.85,
            "unit": "ms",
            "extra": "min 89.02ms, stddev 0.61ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.9,
            "unit": "ms",
            "extra": "min 43.04ms, stddev 0.4ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.97ms, stddev 0.0ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 134,
            "unit": "ms",
            "extra": "min 132.97ms, stddev 1.12ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1859.27,
            "unit": "ms",
            "extra": "min 1851.48ms, stddev 23.03ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1702.91,
            "unit": "ms",
            "extra": "min 1680.36ms, stddev 15.96ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1206.99,
            "unit": "ms",
            "extra": "min 1202.99ms, stddev 2.45ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1206.97,
            "unit": "ms",
            "extra": "min 1203.01ms, stddev 3.2ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1326.98,
            "unit": "ms",
            "extra": "min 1324.09ms, stddev 2.48ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1193.94,
            "unit": "ms",
            "extra": "min 1191.04ms, stddev 2.94ms"
          },
          {
            "name": "whale/asset_search",
            "value": 91.97,
            "unit": "ms",
            "extra": "min 88.96ms, stddev 1.66ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.94,
            "unit": "ms",
            "extra": "min 43.04ms, stddev 0.42ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2280.96,
            "unit": "ms",
            "extra": "min 2276.01ms, stddev 4.3ms"
          }
        ]
      }
    ]
  }
}