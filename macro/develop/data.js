window.BENCHMARK_DATA = {
  "lastUpdate": 1783317966442,
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
          "id": "78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca",
          "message": "Merge pull request #12436 from LefterisJP/mcp_gating\n\nGate MCP access behind Basic premium tier and up",
          "timestamp": "2026-06-16T11:23:18Z",
          "url": "https://github.com/rotki/rotki/commit/78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca"
        },
        "date": 1781678533422,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.33,
            "unit": "ms",
            "extra": "min 1747.77ms, stddev 734.61ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1619.27,
            "unit": "ms",
            "extra": "min 1582.24ms, stddev 286.55ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.56ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.98,
            "unit": "ms",
            "extra": "min 87.87ms, stddev 0.38ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.02,
            "unit": "ms",
            "extra": "min 42.98ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 128.98,
            "unit": "ms",
            "extra": "min 128.93ms, stddev 1.11ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1693.5,
            "unit": "ms",
            "extra": "min 1686.36ms, stddev 25.49ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1631.43,
            "unit": "ms",
            "extra": "min 1621.75ms, stddev 17.37ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1199.01,
            "unit": "ms",
            "extra": "min 1191.99ms, stddev 3.98ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1197.71,
            "unit": "ms",
            "extra": "min 1192.02ms, stddev 3.88ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1316.99,
            "unit": "ms",
            "extra": "min 1310.97ms, stddev 5.17ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1185.97,
            "unit": "ms",
            "extra": "min 1177.99ms, stddev 4.2ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.94,
            "unit": "ms",
            "extra": "min 87.0ms, stddev 0.52ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.04ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.54ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2245.93,
            "unit": "ms",
            "extra": "min 2236.05ms, stddev 10.24ms"
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
          "id": "78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca",
          "message": "Merge pull request #12436 from LefterisJP/mcp_gating\n\nGate MCP access behind Basic premium tier and up",
          "timestamp": "2026-06-16T11:23:18Z",
          "url": "https://github.com/rotki/rotki/commit/78d8a4ccf8f4795fd5ae0a6e7ea5ef3bc9bd94ca"
        },
        "date": 1781763945767,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1794.43,
            "unit": "ms",
            "extra": "min 1742.56ms, stddev 715.04ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1549.8,
            "unit": "ms",
            "extra": "min 1543.35ms, stddev 273.56ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.95,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.94,
            "unit": "ms",
            "extra": "min 85.99ms, stddev 0.54ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.43ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 134.97,
            "unit": "ms",
            "extra": "min 133.98ms, stddev 0.71ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1787.21,
            "unit": "ms",
            "extra": "min 1741.64ms, stddev 27.11ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1609.71,
            "unit": "ms",
            "extra": "min 1607.08ms, stddev 2.97ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1115.97,
            "unit": "ms",
            "extra": "min 1112.0ms, stddev 2.9ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1117,
            "unit": "ms",
            "extra": "min 1109.98ms, stddev 4.29ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1237.98,
            "unit": "ms",
            "extra": "min 1233.16ms, stddev 3.29ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1102.97,
            "unit": "ms",
            "extra": "min 1101.96ms, stddev 1.96ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.02,
            "unit": "ms",
            "extra": "min 85.99ms, stddev 0.53ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.51ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2096.97,
            "unit": "ms",
            "extra": "min 2090.05ms, stddev 5.15ms"
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
          "id": "2a2458a02d0cf015adb82a4fa3c09ae67b832f23",
          "message": "Merge branch 'bugfixes' into develop",
          "timestamp": "2026-06-18T22:05:00Z",
          "url": "https://github.com/rotki/rotki/commit/2a2458a02d0cf015adb82a4fa3c09ae67b832f23"
        },
        "date": 1781851617132,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1856.47,
            "unit": "ms",
            "extra": "min 1854.24ms, stddev 823.04ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1685.96,
            "unit": "ms",
            "extra": "min 1653.48ms, stddev 311.15ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 47.95,
            "unit": "ms",
            "extra": "min 47.9ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.79,
            "unit": "ms",
            "extra": "min 88.99ms, stddev 0.76ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.89,
            "unit": "ms",
            "extra": "min 42.96ms, stddev 0.52ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.97ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 146.94,
            "unit": "ms",
            "extra": "min 144.96ms, stddev 1.09ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 108.99,
            "unit": "ms",
            "extra": "min 108.0ms, stddev 0.72ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1854.81,
            "unit": "ms",
            "extra": "min 1853.86ms, stddev 23.35ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1743.57,
            "unit": "ms",
            "extra": "min 1717.68ms, stddev 23.08ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1222.02,
            "unit": "ms",
            "extra": "min 1220.96ms, stddev 1.93ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1224.07,
            "unit": "ms",
            "extra": "min 1222.68ms, stddev 4.45ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1344,
            "unit": "ms",
            "extra": "min 1343.18ms, stddev 4.08ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1219,
            "unit": "ms",
            "extra": "min 1208.92ms, stddev 6.44ms"
          },
          {
            "name": "whale/asset_search",
            "value": 90.05,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 2.26ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.92,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.53ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.45ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2550.88,
            "unit": "ms",
            "extra": "min 2503.28ms, stddev 31.73ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2976,
            "unit": "ms",
            "extra": "min 2954.0ms, stddev 28.17ms"
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
          "id": "8171f42fa73b379293ba3c9ad242fad364317ede",
          "message": "chore(deps): bump http-proxy-middleware to 4.1.0\n\nMajor bump from 3.0.6 (only dev-proxy consumes it directly). dev-proxy\nalready uses the v3-style on:{} event API and is ESM with Node 22+, so\nnone of the v4 breaking changes (ESM-only, dropped Node<=20, removed\nlegacyCreateProxyMiddleware) apply.\n\nv4 also dropped its transitive http-proxy dependency (replaced internally\nby httpxy), which the electron dev proxy was relying on via a phantom\n'import httpProxy from http-proxy'. Switch app-server to httpxy as an\nexplicit dev dependency: it is loaded via dynamic import on the dev-only\nproxy path and marked external in the main vite config, so it stays out\nof the production main bundle entirely - an improvement over http-proxy,\nwhich was previously inlined into it.",
          "timestamp": "2026-06-19T09:47:22Z",
          "url": "https://github.com/rotki/rotki/commit/8171f42fa73b379293ba3c9ad242fad364317ede"
        },
        "date": 1781935245070,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1749.49,
            "unit": "ms",
            "extra": "min 1697.58ms, stddev 704.85ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1592.56,
            "unit": "ms",
            "extra": "min 1587.13ms, stddev 281.13ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.97,
            "unit": "ms",
            "extra": "min 46.91ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.01,
            "unit": "ms",
            "extra": "min 87.76ms, stddev 0.89ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.08,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.44ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 143,
            "unit": "ms",
            "extra": "min 139.05ms, stddev 1.95ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 106.97,
            "unit": "ms",
            "extra": "min 105.94ms, stddev 0.77ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1748.81,
            "unit": "ms",
            "extra": "min 1693.52ms, stddev 46.76ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1673.21,
            "unit": "ms",
            "extra": "min 1630.44ms, stddev 23.53ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1203.99,
            "unit": "ms",
            "extra": "min 1200.99ms, stddev 4.08ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1202.04,
            "unit": "ms",
            "extra": "min 1200.66ms, stddev 1.41ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1322.13,
            "unit": "ms",
            "extra": "min 1313.97ms, stddev 3.54ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1194.99,
            "unit": "ms",
            "extra": "min 1189.01ms, stddev 3.29ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.02,
            "unit": "ms",
            "extra": "min 87.8ms, stddev 0.87ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.43ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.42ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2499.85,
            "unit": "ms",
            "extra": "min 2487.13ms, stddev 13.58ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2853,
            "unit": "ms",
            "extra": "min 2838.0ms, stddev 11.08ms"
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
          "id": "8171f42fa73b379293ba3c9ad242fad364317ede",
          "message": "chore(deps): bump http-proxy-middleware to 4.1.0\n\nMajor bump from 3.0.6 (only dev-proxy consumes it directly). dev-proxy\nalready uses the v3-style on:{} event API and is ESM with Node 22+, so\nnone of the v4 breaking changes (ESM-only, dropped Node<=20, removed\nlegacyCreateProxyMiddleware) apply.\n\nv4 also dropped its transitive http-proxy dependency (replaced internally\nby httpxy), which the electron dev proxy was relying on via a phantom\n'import httpProxy from http-proxy'. Switch app-server to httpxy as an\nexplicit dev dependency: it is loaded via dynamic import on the dev-only\nproxy path and marked external in the main vite config, so it stays out\nof the production main bundle entirely - an improvement over http-proxy,\nwhich was previously inlined into it.",
          "timestamp": "2026-06-19T09:47:22Z",
          "url": "https://github.com/rotki/rotki/commit/8171f42fa73b379293ba3c9ad242fad364317ede"
        },
        "date": 1782023578164,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1760.17,
            "unit": "ms",
            "extra": "min 1746.69ms, stddev 638.51ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1589.57,
            "unit": "ms",
            "extra": "min 1555.71ms, stddev 342.17ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.85,
            "unit": "ms",
            "extra": "min 45.91ms, stddev 0.51ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.01,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 1.4ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.03ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 149.02,
            "unit": "ms",
            "extra": "min 147.0ms, stddev 1.29ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.01,
            "unit": "ms",
            "extra": "min 111.95ms, stddev 0.53ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1746.49,
            "unit": "ms",
            "extra": "min 1737.58ms, stddev 4.68ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1628.17,
            "unit": "ms",
            "extra": "min 1618.59ms, stddev 7.56ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1132.04,
            "unit": "ms",
            "extra": "min 1128.99ms, stddev 4.15ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1130.99,
            "unit": "ms",
            "extra": "min 1129.68ms, stddev 3.27ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1246.98,
            "unit": "ms",
            "extra": "min 1243.18ms, stddev 4.1ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1117.14,
            "unit": "ms",
            "extra": "min 1115.01ms, stddev 3.26ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.96,
            "unit": "ms",
            "extra": "min 87.01ms, stddev 0.7ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.01ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2334.99,
            "unit": "ms",
            "extra": "min 2334.08ms, stddev 9.7ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2700.01,
            "unit": "ms",
            "extra": "min 2690.02ms, stddev 4.95ms"
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
          "id": "506ed033891cffcdd58f939a8ff18cf6a7414fc1",
          "message": "fix: fold globaldb v18 upgrade into unreleased v16_v17\n\nThe Moralis price source change bumped GLOBAL_DB_VERSION 17->18 and added a\nnew v17_v18 upgrade, but the v1.44 v16_v17 upgrade was still unreleased and\nthe packaged global.db is at v17. The version mismatch broke the globaldb\nreset and packaged-db consistency tests on develop.\n\nFold the moralis price-source step (J/10) into the existing v16_v17 upgrade,\nrevert GLOBAL_DB_VERSION back to 17, drop v17_v18.py and its registration,\nand merge the upgrade test assertion into test_upgrade_v16_v17.\n\nAlso document in CLAUDE.md/AGENTS.md to check whether the latest globaldb\nupgrade is released before adding a new one vs extending the unreleased one.",
          "timestamp": "2026-06-21T21:59:34Z",
          "url": "https://github.com/rotki/rotki/commit/506ed033891cffcdd58f939a8ff18cf6a7414fc1"
        },
        "date": 1782111889311,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1597.78,
            "unit": "ms",
            "extra": "min 1544.6ms, stddev 603.1ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1475.56,
            "unit": "ms",
            "extra": "min 1450.31ms, stddev 243.11ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.99,
            "unit": "ms",
            "extra": "min 46.96ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.97,
            "unit": "ms",
            "extra": "min 85.02ms, stddev 0.69ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.75ms, stddev 0.12ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 144.9,
            "unit": "ms",
            "extra": "min 144.01ms, stddev 0.84ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 105,
            "unit": "ms",
            "extra": "min 104.74ms, stddev 0.59ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1593.77,
            "unit": "ms",
            "extra": "min 1590.55ms, stddev 2.05ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1523.75,
            "unit": "ms",
            "extra": "min 1516.76ms, stddev 9.95ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.06,
            "unit": "ms",
            "extra": "min 1131.95ms, stddev 2.45ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1134.01,
            "unit": "ms",
            "extra": "min 1132.03ms, stddev 2.31ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1251,
            "unit": "ms",
            "extra": "min 1247.95ms, stddev 4.1ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1125.97,
            "unit": "ms",
            "extra": "min 1121.0ms, stddev 2.97ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.75,
            "unit": "ms",
            "extra": "min 84.99ms, stddev 0.48ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.85ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.76ms, stddev 0.09ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2389.3,
            "unit": "ms",
            "extra": "min 2367.15ms, stddev 11.57ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2719,
            "unit": "ms",
            "extra": "min 2700.99ms, stddev 11.15ms"
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
          "id": "46d909f0d61b345f0dedcb275230a2a8a72f28c4",
          "message": "Bit2me: apply review feedback and fix API bugs\n\nPR review feedback and bugfixes for Bit2me exchange integration",
          "timestamp": "2026-06-21T21:40:01Z",
          "url": "https://github.com/rotki/rotki/commit/46d909f0d61b345f0dedcb275230a2a8a72f28c4"
        },
        "date": 1782193731857,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1765.19,
            "unit": "ms",
            "extra": "min 1705.82ms, stddev 602.97ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1542,
            "unit": "ms",
            "extra": "min 1534.28ms, stddev 255.42ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 47.96,
            "unit": "ms",
            "extra": "min 47.92ms, stddev 0.33ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.18,
            "unit": "ms",
            "extra": "min 87.83ms, stddev 0.45ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.94,
            "unit": "ms",
            "extra": "min 43.71ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.4ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 150.89,
            "unit": "ms",
            "extra": "min 146.92ms, stddev 2.21ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 108.93,
            "unit": "ms",
            "extra": "min 107.99ms, stddev 38.64ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1704.25,
            "unit": "ms",
            "extra": "min 1703.03ms, stddev 11.15ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1596.82,
            "unit": "ms",
            "extra": "min 1579.14ms, stddev 10.81ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1168.07,
            "unit": "ms",
            "extra": "min 1165.09ms, stddev 2.48ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1164.96,
            "unit": "ms",
            "extra": "min 1163.93ms, stddev 1.96ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1284.9,
            "unit": "ms",
            "extra": "min 1280.32ms, stddev 3.72ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1158.01,
            "unit": "ms",
            "extra": "min 1156.14ms, stddev 3.79ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.01,
            "unit": "ms",
            "extra": "min 86.98ms, stddev 0.72ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.94,
            "unit": "ms",
            "extra": "min 43.91ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.97ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2473.11,
            "unit": "ms",
            "extra": "min 2457.08ms, stddev 11.71ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2873,
            "unit": "ms",
            "extra": "min 2850.98ms, stddev 12.46ms"
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
          "id": "36f70c8ce5b09c2799638505b2d9e62098ab1137",
          "message": " Add MCP server exposing rotki data to LLM clients\n\nAdd a premium-gated Model Context Protocol server that lets local LLM\n  clients query the user's rotki data. It runs as a stdio subprocess\n  talking to the running backend over REST, so no ports are exposed.\n\n  The public surface is a generic, privacy-filtered analytics layer rather\n  than one tool per question:\n  - refresh_analytics_data loads source tables (history_events by default,\n    balances opt-in) into an in-memory Polars session\n  - list_tables / describe_table expose the schema\n  - query_sql runs read-only Polars SQL (aggregations, joins, windows) so\n    the math is computed exactly instead of by the model\n  - info reports connectivity and unlock state (ungated)\n\n  All rows pass through a fail-closed privacy filter before they can be\n  queried: identifiers are HMAC-hashed consistently within a session,\n  free-text notes are redacted, and unrecognized columns are hidden by\n  default. A --privacy-mode flag selects balanced (default), strict, or raw.\n\n  History events load complete by default (opt-in --max-events cap),\n  accept second or millisecond time ranges, and gain readable year/datetime\n  columns so models can filter by date without unix-timestamp math.",
          "timestamp": "2026-06-16T14:37:57Z",
          "url": "https://github.com/rotki/rotki/commit/36f70c8ce5b09c2799638505b2d9e62098ab1137"
        },
        "date": 1782279923009,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1380.94,
            "unit": "ms",
            "extra": "min 1329.08ms, stddev 642.63ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1312.68,
            "unit": "ms",
            "extra": "min 1231.86ms, stddev 209.23ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 44.95,
            "unit": "ms",
            "extra": "min 44.94ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 76.98,
            "unit": "ms",
            "extra": "min 76.0ms, stddev 0.65ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.06,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 116.99,
            "unit": "ms",
            "extra": "min 115.99ms, stddev 1.13ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 98.97,
            "unit": "ms",
            "extra": "min 92.03ms, stddev 6.86ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1381.32,
            "unit": "ms",
            "extra": "min 1380.1ms, stddev 45.57ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1336.61,
            "unit": "ms",
            "extra": "min 1333.52ms, stddev 64.28ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 950.99,
            "unit": "ms",
            "extra": "min 946.97ms, stddev 2.41ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 946.98,
            "unit": "ms",
            "extra": "min 946.78ms, stddev 1.84ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1042.16,
            "unit": "ms",
            "extra": "min 1039.0ms, stddev 2.54ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 941.06,
            "unit": "ms",
            "extra": "min 938.01ms, stddev 1.52ms"
          },
          {
            "name": "whale/asset_search",
            "value": 76.99,
            "unit": "ms",
            "extra": "min 76.95ms, stddev 0.52ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.43ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.88ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1963.21,
            "unit": "ms",
            "extra": "min 1945.97ms, stddev 13.88ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2355.98,
            "unit": "ms",
            "extra": "min 2322.99ms, stddev 320.56ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Yabir Benchakhtir",
            "username": "yabirgb",
            "email": "git@yabirgb.com"
          },
          "committer": {
            "name": "Lefteris Karapetsas",
            "username": "LefterisJP",
            "email": "lefteris@refu.co"
          },
          "id": "9e37c9f57af106fc6f37999a6f62e1069811a664",
          "message": "Define once the session user for http clients",
          "timestamp": "2026-06-24T15:55:44Z",
          "url": "https://github.com/rotki/rotki/commit/9e37c9f57af106fc6f37999a6f62e1069811a664"
        },
        "date": 1782366540798,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1640.93,
            "unit": "ms",
            "extra": "min 1640.11ms, stddev 695.17ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1449.92,
            "unit": "ms",
            "extra": "min 1439.52ms, stddev 296.13ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.97,
            "unit": "ms",
            "extra": "min 45.95ms, stddev 0.44ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.01,
            "unit": "ms",
            "extra": "min 85.99ms, stddev 0.51ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 137.98,
            "unit": "ms",
            "extra": "min 136.01ms, stddev 0.89ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 104.02,
            "unit": "ms",
            "extra": "min 103.0ms, stddev 1.09ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1647.37,
            "unit": "ms",
            "extra": "min 1641.7ms, stddev 28.61ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1535.02,
            "unit": "ms",
            "extra": "min 1504.62ms, stddev 19.21ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1201,
            "unit": "ms",
            "extra": "min 1188.02ms, stddev 7.37ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1200.98,
            "unit": "ms",
            "extra": "min 1189.01ms, stddev 10.41ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1318,
            "unit": "ms",
            "extra": "min 1307.11ms, stddev 9.49ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1185.07,
            "unit": "ms",
            "extra": "min 1176.0ms, stddev 7.46ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.98,
            "unit": "ms",
            "extra": "min 85.98ms, stddev 1.43ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.54ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2484.04,
            "unit": "ms",
            "extra": "min 2444.01ms, stddev 19.67ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2824.01,
            "unit": "ms",
            "extra": "min 2768.01ms, stddev 33.62ms"
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
          "id": "be00ba4d91d6e3df44071ec619b01e74bc392b0e",
          "message": "fix: drop unnecessary type assertion in password-manager spec\n\nThe type-aware no-unnecessary-type-assertion rule flags the\n`{} as Record<string, string>` cast once the keyring bugfix spec\nlands in the merged develop tree. Annotate the backing store type\ninstead of asserting it.",
          "timestamp": "2026-06-25T14:43:13Z",
          "url": "https://github.com/rotki/rotki/commit/be00ba4d91d6e3df44071ec619b01e74bc392b0e"
        },
        "date": 1782453236239,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1491.24,
            "unit": "ms",
            "extra": "min 1439.98ms, stddev 611.78ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1343.99,
            "unit": "ms",
            "extra": "min 1329.77ms, stddev 242.34ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.89,
            "unit": "ms",
            "extra": "min 46.36ms, stddev 0.26ms"
          },
          {
            "name": "small/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.03ms, stddev 0.7ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.77ms, stddev 0.15ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.04ms, stddev 0.39ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 137.92,
            "unit": "ms",
            "extra": "min 137.0ms, stddev 0.77ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 102.81,
            "unit": "ms",
            "extra": "min 101.93ms, stddev 0.81ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1491.26,
            "unit": "ms",
            "extra": "min 1439.05ms, stddev 23.37ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1407.91,
            "unit": "ms",
            "extra": "min 1396.88ms, stddev 10.4ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1129.01,
            "unit": "ms",
            "extra": "min 1126.02ms, stddev 2.28ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.25,
            "unit": "ms",
            "extra": "min 1123.57ms, stddev 3.97ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1245.81,
            "unit": "ms",
            "extra": "min 1242.0ms, stddev 2.61ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1118.98,
            "unit": "ms",
            "extra": "min 1117.98ms, stddev 1.68ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.02ms, stddev 0.74ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.86ms, stddev 0.4ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.89,
            "unit": "ms",
            "extra": "min 42.79ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2366.04,
            "unit": "ms",
            "extra": "min 2359.24ms, stddev 5.76ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2659.02,
            "unit": "ms",
            "extra": "min 2646.11ms, stddev 14.35ms"
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
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782538454043,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1691.82,
            "unit": "ms",
            "extra": "min 1691.31ms, stddev 638.32ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1458.32,
            "unit": "ms",
            "extra": "min 1440.45ms, stddev 266.73ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.98,
            "unit": "ms",
            "extra": "min 45.86ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.76,
            "unit": "ms",
            "extra": "min 85.01ms, stddev 1.04ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.43ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 144.98,
            "unit": "ms",
            "extra": "min 144.0ms, stddev 1.22ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109.99,
            "unit": "ms",
            "extra": "min 108.58ms, stddev 0.86ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1690.89,
            "unit": "ms",
            "extra": "min 1690.44ms, stddev 4.56ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1507.53,
            "unit": "ms",
            "extra": "min 1500.69ms, stddev 16.17ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1107.02,
            "unit": "ms",
            "extra": "min 1106.99ms, stddev 7.39ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1109.65,
            "unit": "ms",
            "extra": "min 1102.0ms, stddev 5.92ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1230.17,
            "unit": "ms",
            "extra": "min 1217.99ms, stddev 7.1ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1099,
            "unit": "ms",
            "extra": "min 1092.98ms, stddev 5.75ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86,
            "unit": "ms",
            "extra": "min 84.99ms, stddev 1.51ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.05,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.44ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.86ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2289.99,
            "unit": "ms",
            "extra": "min 2282.01ms, stddev 3.95ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2624.05,
            "unit": "ms",
            "extra": "min 2622.02ms, stddev 7.81ms"
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
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782626415085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1802.76,
            "unit": "ms",
            "extra": "min 1751.07ms, stddev 691.3ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1515.64,
            "unit": "ms",
            "extra": "min 1473.31ms, stddev 288.11ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 47.01,
            "unit": "ms",
            "extra": "min 46.97ms, stddev 0.42ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.97,
            "unit": "ms",
            "extra": "min 87.97ms, stddev 1.42ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.01ms, stddev 0.44ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 152.07,
            "unit": "ms",
            "extra": "min 148.02ms, stddev 3.19ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 113.99,
            "unit": "ms",
            "extra": "min 112.97ms, stddev 1.01ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1748.19,
            "unit": "ms",
            "extra": "min 1694.68ms, stddev 48.39ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1543.61,
            "unit": "ms",
            "extra": "min 1524.13ms, stddev 28.27ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1125.99,
            "unit": "ms",
            "extra": "min 1118.01ms, stddev 5.42ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1128.57,
            "unit": "ms",
            "extra": "min 1120.98ms, stddev 4.62ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1249.06,
            "unit": "ms",
            "extra": "min 1239.08ms, stddev 6.08ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1115.02,
            "unit": "ms",
            "extra": "min 1109.05ms, stddev 4.7ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.96,
            "unit": "ms",
            "extra": "min 86.95ms, stddev 0.84ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.01ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2329.94,
            "unit": "ms",
            "extra": "min 2326.94ms, stddev 9.62ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2693.05,
            "unit": "ms",
            "extra": "min 2669.01ms, stddev 17.6ms"
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
          "id": "6e2a83e4add22529b8b586d04c7aa459a9ada678",
          "message": "Merge pull request #12484 from yabirgb/across",
          "timestamp": "2026-06-26T17:04:17Z",
          "url": "https://github.com/rotki/rotki/commit/6e2a83e4add22529b8b586d04c7aa459a9ada678"
        },
        "date": 1782714103906,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1492.01,
            "unit": "ms",
            "extra": "min 1491.17ms, stddev 528.15ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1352.33,
            "unit": "ms",
            "extra": "min 1346.79ms, stddev 222.48ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.91ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 84.99,
            "unit": "ms",
            "extra": "min 83.96ms, stddev 0.68ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.43ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.79ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 141.06,
            "unit": "ms",
            "extra": "min 137.98ms, stddev 4.13ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 103.96,
            "unit": "ms",
            "extra": "min 103.01ms, stddev 0.44ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1491.36,
            "unit": "ms",
            "extra": "min 1439.8ms, stddev 28.18ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1407.85,
            "unit": "ms",
            "extra": "min 1405.03ms, stddev 6.3ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1125.97,
            "unit": "ms",
            "extra": "min 1124.02ms, stddev 2.47ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1123.08,
            "unit": "ms",
            "extra": "min 1121.67ms, stddev 3.87ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1239.94,
            "unit": "ms",
            "extra": "min 1238.1ms, stddev 2.24ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1116.88,
            "unit": "ms",
            "extra": "min 1113.03ms, stddev 2.15ms"
          },
          {
            "name": "whale/asset_search",
            "value": 84.71,
            "unit": "ms",
            "extra": "min 84.63ms, stddev 0.09ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.85,
            "unit": "ms",
            "extra": "min 42.08ms, stddev 0.37ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2358.01,
            "unit": "ms",
            "extra": "min 2350.05ms, stddev 3.86ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2663.15,
            "unit": "ms",
            "extra": "min 2657.01ms, stddev 3.7ms"
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
          "id": "8abb47426d4fac087a8f6ef573d5f60d8129e23e",
          "message": "ci(renovate): group non-major deps by subproject\n\nBucket minor/patch updates into frontend/core/colibri groups so\nthe dependency dashboard reads per-stack. Majors, GitHub Actions,\nDockerfile and submodules stay individual as before.",
          "timestamp": "2026-06-29T17:41:33Z",
          "url": "https://github.com/rotki/rotki/commit/8abb47426d4fac087a8f6ef573d5f60d8129e23e"
        },
        "date": 1782798699634,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.27,
            "unit": "ms",
            "extra": "min 1745.64ms, stddev 640.48ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1483.42,
            "unit": "ms",
            "extra": "min 1463.63ms, stddev 269.53ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.03ms, stddev 0.51ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.03,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 1.55ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.83ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 150.03,
            "unit": "ms",
            "extra": "min 147.96ms, stddev 8.23ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 114.02,
            "unit": "ms",
            "extra": "min 113.97ms, stddev 0.55ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1749.31,
            "unit": "ms",
            "extra": "min 1694.28ms, stddev 35.26ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1556.23,
            "unit": "ms",
            "extra": "min 1529.69ms, stddev 17.31ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1129.01,
            "unit": "ms",
            "extra": "min 1128.0ms, stddev 5.8ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1128.81,
            "unit": "ms",
            "extra": "min 1127.7ms, stddev 2.07ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1247.95,
            "unit": "ms",
            "extra": "min 1242.97ms, stddev 5.11ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1116,
            "unit": "ms",
            "extra": "min 1113.09ms, stddev 4.19ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.94,
            "unit": "ms",
            "extra": "min 86.99ms, stddev 1.44ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2338.93,
            "unit": "ms",
            "extra": "min 2330.96ms, stddev 10.46ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2708.02,
            "unit": "ms",
            "extra": "min 2691.99ms, stddev 16.32ms"
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
          "id": "1931c02180035ae876e8579dd1126ae082eae9f8",
          "message": "fix: unify login unlock-flow stage layouts\n\nThe asset-update/loading stages shown during the login flow each used\ntheir own width and presentation, so the content shifted and resized as\nthe flow advanced (login form -> check -> prompt -> restart -> unlock).\n\n- Cap the update prompt at 27.5rem to match the login form and status\n  screens instead of 32rem.\n- Give the busy/restart/unlock spinner a matching 27.5rem centered,\n  text-centered container.\n- Render the checking/applying status as the same centered spinner +\n  title + message block as the other loading phases, dropping the flat\n  card and its oversized spinner-to-text gap.",
          "timestamp": "2026-06-30T19:52:28Z",
          "url": "https://github.com/rotki/rotki/commit/1931c02180035ae876e8579dd1126ae082eae9f8"
        },
        "date": 1782886247063,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1694.79,
            "unit": "ms",
            "extra": "min 1693.16ms, stddev 662.99ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1459.67,
            "unit": "ms",
            "extra": "min 1452.33ms, stddev 278.39ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.94,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.89ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.99,
            "unit": "ms",
            "extra": "min 86.96ms, stddev 0.46ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.03,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.48ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 148.99,
            "unit": "ms",
            "extra": "min 146.99ms, stddev 1.36ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111.98,
            "unit": "ms",
            "extra": "min 109.99ms, stddev 0.9ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1693.67,
            "unit": "ms",
            "extra": "min 1692.76ms, stddev 39.42ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1539.47,
            "unit": "ms",
            "extra": "min 1530.54ms, stddev 12.47ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1119.01,
            "unit": "ms",
            "extra": "min 1116.98ms, stddev 1.59ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1118.76,
            "unit": "ms",
            "extra": "min 1116.01ms, stddev 1.74ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1235.01,
            "unit": "ms",
            "extra": "min 1233.99ms, stddev 1.84ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1106.08,
            "unit": "ms",
            "extra": "min 1104.09ms, stddev 3.8ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.99,
            "unit": "ms",
            "extra": "min 86.95ms, stddev 0.05ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.43ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2321.01,
            "unit": "ms",
            "extra": "min 2314.95ms, stddev 9.24ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2668,
            "unit": "ms",
            "extra": "min 2656.99ms, stddev 14.48ms"
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
          "id": "f4b2e9c3335094d6ca94981563c7d58103ad35b0",
          "message": "Merge pull request #12506 from yabirgb/gpay\n\nSend messages for missing gnosisPay addresses",
          "timestamp": "2026-07-01T15:51:20Z",
          "url": "https://github.com/rotki/rotki/commit/f4b2e9c3335094d6ca94981563c7d58103ad35b0"
        },
        "date": 1782970704792,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1542.92,
            "unit": "ms",
            "extra": "min 1496.16ms, stddev 510.72ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1355.15,
            "unit": "ms",
            "extra": "min 1325.86ms, stddev 227.1ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.92,
            "unit": "ms",
            "extra": "min 45.96ms, stddev 0.43ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.17,
            "unit": "ms",
            "extra": "min 81.99ms, stddev 1.62ms"
          },
          {
            "name": "small/manual_balances",
            "value": 43.04,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.32ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.42ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 139.84,
            "unit": "ms",
            "extra": "min 132.93ms, stddev 4.78ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 101.99,
            "unit": "ms",
            "extra": "min 99.01ms, stddev 14.23ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1485.44,
            "unit": "ms",
            "extra": "min 1432.98ms, stddev 44.24ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1379.11,
            "unit": "ms",
            "extra": "min 1356.56ms, stddev 27.72ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1108.19,
            "unit": "ms",
            "extra": "min 1090.06ms, stddev 10.99ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1106.82,
            "unit": "ms",
            "extra": "min 1092.5ms, stddev 11.81ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1223.13,
            "unit": "ms",
            "extra": "min 1208.11ms, stddev 11.32ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1101.91,
            "unit": "ms",
            "extra": "min 1084.19ms, stddev 12.48ms"
          },
          {
            "name": "whale/asset_search",
            "value": 84.89,
            "unit": "ms",
            "extra": "min 82.87ms, stddev 1.21ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.09,
            "unit": "ms",
            "extra": "min 42.83ms, stddev 0.51ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.86,
            "unit": "ms",
            "extra": "min 42.02ms, stddev 0.48ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2307.94,
            "unit": "ms",
            "extra": "min 2280.02ms, stddev 21.55ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2662.14,
            "unit": "ms",
            "extra": "min 2642.03ms, stddev 41.72ms"
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
          "id": "e6e3aff9d788d4d5876bb1304708672ce697f866",
          "message": "dev: instance mode overrides stale VITE_BACKEND_URL from app/.env\n\nIn electron instance mode the renderer connected to the default backend\nport (4242) instead of the instance's reserved port. start-dev loads the\nenv files into process.env before prepareInstance writes the managed\nblock, so on a fresh instance run the default VITE_BACKEND_URL from\napp/.env lands in process.env. Vite gives process.env VITE_* vars priority\nover .env files, so that stale value shadowed the instance's real port.\n\nAdd readManagedBlockEnv and, in instance mode, propagate the whole managed\nblock (instance ports, data-dir pointers, dev flags) onto process.env\nafter it is written, overriding the stale seed. Previously only the dev\nflags were propagated.",
          "timestamp": "2026-07-02T15:49:12Z",
          "url": "https://github.com/rotki/rotki/commit/e6e3aff9d788d4d5876bb1304708672ce697f866"
        },
        "date": 1783056895117,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1906.84,
            "unit": "ms",
            "extra": "min 1748.56ms, stddev 729.68ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1241.72,
            "unit": "ms",
            "extra": "min 1225.55ms, stddev 278.03ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.03,
            "unit": "ms",
            "extra": "min 45.91ms, stddev 0.54ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.05,
            "unit": "ms",
            "extra": "min 84.96ms, stddev 2.6ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.44ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 149.97,
            "unit": "ms",
            "extra": "min 146.93ms, stddev 5.43ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 113.12,
            "unit": "ms",
            "extra": "min 110.0ms, stddev 3.03ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1854.69,
            "unit": "ms",
            "extra": "min 1744.05ms, stddev 62.44ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1363.61,
            "unit": "ms",
            "extra": "min 1314.37ms, stddev 25.57ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1144.08,
            "unit": "ms",
            "extra": "min 1132.95ms, stddev 10.74ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1145.76,
            "unit": "ms",
            "extra": "min 1143.0ms, stddev 2.56ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1258.19,
            "unit": "ms",
            "extra": "min 1249.95ms, stddev 7.24ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1128.88,
            "unit": "ms",
            "extra": "min 1122.0ms, stddev 9.21ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.97,
            "unit": "ms",
            "extra": "min 85.99ms, stddev 2.76ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.99,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.43ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.52ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2373.94,
            "unit": "ms",
            "extra": "min 2363.05ms, stddev 6.97ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2763.93,
            "unit": "ms",
            "extra": "min 2710.96ms, stddev 31.26ms"
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
          "id": "ae9c98a22cfef202078d65ad0045598b7b4160d2",
          "message": "Merge pull request #12527 from yabirgb/deps\n\nBump dependencies and address unneded ignores",
          "timestamp": "2026-07-03T14:06:18Z",
          "url": "https://github.com/rotki/rotki/commit/ae9c98a22cfef202078d65ad0045598b7b4160d2"
        },
        "date": 1783142232547,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.55,
            "unit": "ms",
            "extra": "min 1747.73ms, stddev 643.11ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1229.59,
            "unit": "ms",
            "extra": "min 1220.05ms, stddev 276.22ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.07,
            "unit": "ms",
            "extra": "min 45.97ms, stddev 0.53ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.9,
            "unit": "ms",
            "extra": "min 86.0ms, stddev 1.02ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.89,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.41ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.03ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 148.99,
            "unit": "ms",
            "extra": "min 147.0ms, stddev 1.4ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111,
            "unit": "ms",
            "extra": "min 110.98ms, stddev 0.91ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1749.66,
            "unit": "ms",
            "extra": "min 1741.34ms, stddev 46.19ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1294.81,
            "unit": "ms",
            "extra": "min 1287.75ms, stddev 22.8ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1136.94,
            "unit": "ms",
            "extra": "min 1129.1ms, stddev 5.3ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1134.76,
            "unit": "ms",
            "extra": "min 1127.0ms, stddev 5.3ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1255.16,
            "unit": "ms",
            "extra": "min 1250.05ms, stddev 2.88ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1122.1,
            "unit": "ms",
            "extra": "min 1120.02ms, stddev 4.25ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.07,
            "unit": "ms",
            "extra": "min 87.01ms, stddev 1.19ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.54ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2346.91,
            "unit": "ms",
            "extra": "min 2327.05ms, stddev 12.41ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2717.01,
            "unit": "ms",
            "extra": "min 2688.04ms, stddev 34.21ms"
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
          "id": "b5567802952d9f405944dd6c1c2e359ae44c32f2",
          "message": "chore: bump ruff to 0.15.20\n\nIgnore the new preview rule PLW0717 (too many statements in\ntry clause) which fires 129 times across the codebase and is\ntoo strict for our error handling style.",
          "timestamp": "2026-07-04T12:36:10Z",
          "url": "https://github.com/rotki/rotki/commit/b5567802952d9f405944dd6c1c2e359ae44c32f2"
        },
        "date": 1783230318874,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1853.92,
            "unit": "ms",
            "extra": "min 1750.38ms, stddev 637.86ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1299.85,
            "unit": "ms",
            "extra": "min 1224.44ms, stddev 278.51ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.95,
            "unit": "ms",
            "extra": "min 45.95ms, stddev 0.45ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.93,
            "unit": "ms",
            "extra": "min 86.01ms, stddev 0.6ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.43ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 150.95,
            "unit": "ms",
            "extra": "min 149.98ms, stddev 1.2ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.99,
            "unit": "ms",
            "extra": "min 112.01ms, stddev 1.29ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1738.95,
            "unit": "ms",
            "extra": "min 1691.58ms, stddev 27.94ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1296.14,
            "unit": "ms",
            "extra": "min 1285.47ms, stddev 20.28ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1132.97,
            "unit": "ms",
            "extra": "min 1126.01ms, stddev 5.02ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1130.94,
            "unit": "ms",
            "extra": "min 1127.97ms, stddev 6.03ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1243.11,
            "unit": "ms",
            "extra": "min 1240.0ms, stddev 6.96ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1117.99,
            "unit": "ms",
            "extra": "min 1111.0ms, stddev 5.62ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.02ms, stddev 1.14ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.41ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2340.97,
            "unit": "ms",
            "extra": "min 2320.45ms, stddev 14.37ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2675.95,
            "unit": "ms",
            "extra": "min 2655.96ms, stddev 11.1ms"
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
          "id": "8ba9b76497577cd6b3be1b2cac410d8eded41aa5",
          "message": "feat: avatars for gwei names\n\nRoute .gwei names in try_download_ens_avatar to the GNS contract,\nwhich implements the same ENS resolver text(bytes32,string) interface,\nand skip the ENS metadata app for their NFT avatars since it only\nknows ENS names, falling back to opensea directly. The frontend needs\nno changes: avatars are requested for the displayed name from the\nmerged name mappings, so they follow the address name priority\nsetting automatically.",
          "timestamp": "2026-07-04T21:05:20Z",
          "url": "https://github.com/rotki/rotki/commit/8ba9b76497577cd6b3be1b2cac410d8eded41aa5"
        },
        "date": 1783317965971,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1856.45,
            "unit": "ms",
            "extra": "min 1854.08ms, stddev 654.65ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1277.39,
            "unit": "ms",
            "extra": "min 1261.52ms, stddev 275.77ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.95,
            "unit": "ms",
            "extra": "min 46.89ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.99,
            "unit": "ms",
            "extra": "min 86.75ms, stddev 1.08ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.08ms, stddev 0.39ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 151.99,
            "unit": "ms",
            "extra": "min 149.0ms, stddev 2.71ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 113.01,
            "unit": "ms",
            "extra": "min 111.97ms, stddev 0.83ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1857.61,
            "unit": "ms",
            "extra": "min 1801.1ms, stddev 27.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1348.66,
            "unit": "ms",
            "extra": "min 1313.53ms, stddev 16.66ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1145.97,
            "unit": "ms",
            "extra": "min 1135.0ms, stddev 8.66ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1141.06,
            "unit": "ms",
            "extra": "min 1137.05ms, stddev 4.62ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1261.16,
            "unit": "ms",
            "extra": "min 1254.23ms, stddev 4.56ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1124.99,
            "unit": "ms",
            "extra": "min 1120.06ms, stddev 7.8ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.98,
            "unit": "ms",
            "extra": "min 88.07ms, stddev 1.82ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.88,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.55ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2343.93,
            "unit": "ms",
            "extra": "min 2322.78ms, stddev 19.11ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2769.95,
            "unit": "ms",
            "extra": "min 2704.04ms, stddev 41.37ms"
          }
        ]
      }
    ]
  }
}