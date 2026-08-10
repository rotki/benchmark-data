window.BENCHMARK_DATA = {
  "lastUpdate": 1786332770357,
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
          "id": "1cc567fc8fc2174ef94fdb44fc2c43b6ac3953e9",
          "message": "fix: drop duplicate nginx Host header for uvicorn\n\nEach proxied REST/colibri location set `proxy_set_header Host` twice\n($host and $http_host), so nginx forwarded two Host headers. The old\ngevent WSGI server tolerated that; the uvicorn server the gevent-removal\nflip switched to rejects it with \"Invalid HTTP request received.\" (400),\nbreaking every /api and /colibri request in the Docker deployment. Keep a\nsingle Host ($host, matching the /ws location).",
          "timestamp": "2026-07-06T15:15:24Z",
          "url": "https://github.com/rotki/rotki/commit/1cc567fc8fc2174ef94fdb44fc2c43b6ac3953e9"
        },
        "date": 1783403194572,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1554.35,
            "unit": "ms",
            "extra": "min 1541.19ms, stddev 615.88ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1130.53,
            "unit": "ms",
            "extra": "min 1114.73ms, stddev 269.66ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.84,
            "unit": "ms",
            "extra": "min 5.79ms, stddev 0.12ms"
          },
          {
            "name": "small/asset_search",
            "value": 45.76,
            "unit": "ms",
            "extra": "min 44.29ms, stddev 0.78ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.27,
            "unit": "ms",
            "extra": "min 2.16ms, stddev 0.09ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.83,
            "unit": "ms",
            "extra": "min 1.75ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 104.86,
            "unit": "ms",
            "extra": "min 104.56ms, stddev 0.76ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 72.99,
            "unit": "ms",
            "extra": "min 71.9ms, stddev 0.58ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1595,
            "unit": "ms",
            "extra": "min 1542.31ms, stddev 62.28ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1193.53,
            "unit": "ms",
            "extra": "min 1187.6ms, stddev 24.27ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1052.09,
            "unit": "ms",
            "extra": "min 1048.33ms, stddev 3.22ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1051.22,
            "unit": "ms",
            "extra": "min 1046.47ms, stddev 3.26ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1162.81,
            "unit": "ms",
            "extra": "min 1161.66ms, stddev 4.28ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1041.66,
            "unit": "ms",
            "extra": "min 1040.15ms, stddev 3.67ms"
          },
          {
            "name": "whale/asset_search",
            "value": 45.29,
            "unit": "ms",
            "extra": "min 44.98ms, stddev 0.8ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.22,
            "unit": "ms",
            "extra": "min 2.19ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.86,
            "unit": "ms",
            "extra": "min 1.81ms, stddev 0.07ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2264.57,
            "unit": "ms",
            "extra": "min 2259.96ms, stddev 7.59ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2592.32,
            "unit": "ms",
            "extra": "min 2586.1ms, stddev 17.14ms"
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
          "id": "a3b0685c9e3fb9f26d0020a0e72b073f8589a9ad",
          "message": "Merge pull request #12549 from yabirgb/vendor-coincurve\n\nVendor what we need from coincurve and bip-utils",
          "timestamp": "2026-07-07T14:28:31Z",
          "url": "https://github.com/rotki/rotki/commit/a3b0685c9e3fb9f26d0020a0e72b073f8589a9ad"
        },
        "date": 1783486336748,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1439.25,
            "unit": "ms",
            "extra": "min 1438.11ms, stddev 643.77ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1057.11,
            "unit": "ms",
            "extra": "min 1048.84ms, stddev 306.74ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.93,
            "unit": "ms",
            "extra": "min 5.86ms, stddev 0.09ms"
          },
          {
            "name": "small/asset_search",
            "value": 45.93,
            "unit": "ms",
            "extra": "min 44.07ms, stddev 1.23ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.29,
            "unit": "ms",
            "extra": "min 2.24ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.82ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 106.43,
            "unit": "ms",
            "extra": "min 105.54ms, stddev 1.13ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 73.27,
            "unit": "ms",
            "extra": "min 70.94ms, stddev 1.26ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1438.82,
            "unit": "ms",
            "extra": "min 1387.21ms, stddev 28.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1118.61,
            "unit": "ms",
            "extra": "min 1115.16ms, stddev 6.16ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1059.85,
            "unit": "ms",
            "extra": "min 1056.34ms, stddev 2.3ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1058.04,
            "unit": "ms",
            "extra": "min 1057.29ms, stddev 3.52ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1170.04,
            "unit": "ms",
            "extra": "min 1169.12ms, stddev 1.43ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1050.75,
            "unit": "ms",
            "extra": "min 1048.4ms, stddev 1.64ms"
          },
          {
            "name": "whale/asset_search",
            "value": 44.84,
            "unit": "ms",
            "extra": "min 44.53ms, stddev 0.49ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.32,
            "unit": "ms",
            "extra": "min 2.25ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.95,
            "unit": "ms",
            "extra": "min 1.88ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2280.87,
            "unit": "ms",
            "extra": "min 2274.07ms, stddev 6.35ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2607.06,
            "unit": "ms",
            "extra": "min 2589.26ms, stddev 14.81ms"
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
          "id": "ecb754839accb3f8c23f2c9916f2fbd2f26e41c1",
          "message": "Merge pull request #12555 from yabirgb/clean-deps2\n\nRemove miniupnpc dep and deprecate code",
          "timestamp": "2026-07-08T16:16:51Z",
          "url": "https://github.com/rotki/rotki/commit/ecb754839accb3f8c23f2c9916f2fbd2f26e41c1"
        },
        "date": 1783576307797,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1541.22,
            "unit": "ms",
            "extra": "min 1540.27ms, stddev 940.08ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1616.71,
            "unit": "ms",
            "extra": "min 1615.7ms, stddev 263.82ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.17,
            "unit": "ms",
            "extra": "min 7.11ms, stddev 0.07ms"
          },
          {
            "name": "small/asset_search",
            "value": 44.72,
            "unit": "ms",
            "extra": "min 44.48ms, stddev 0.24ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.35,
            "unit": "ms",
            "extra": "min 2.31ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.93,
            "unit": "ms",
            "extra": "min 1.91ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 106.56,
            "unit": "ms",
            "extra": "min 104.28ms, stddev 15.68ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 75.04,
            "unit": "ms",
            "extra": "min 74.41ms, stddev 36.25ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1591.99,
            "unit": "ms",
            "extra": "min 1541.57ms, stddev 62.74ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1705.01,
            "unit": "ms",
            "extra": "min 1682.17ms, stddev 25.65ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1050.2,
            "unit": "ms",
            "extra": "min 1046.79ms, stddev 6.16ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1039.07,
            "unit": "ms",
            "extra": "min 1036.05ms, stddev 6.32ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1150.59,
            "unit": "ms",
            "extra": "min 1141.43ms, stddev 6.06ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1029.5,
            "unit": "ms",
            "extra": "min 1023.92ms, stddev 6.15ms"
          },
          {
            "name": "whale/asset_search",
            "value": 45.23,
            "unit": "ms",
            "extra": "min 44.54ms, stddev 0.96ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.48,
            "unit": "ms",
            "extra": "min 2.35ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.05,
            "unit": "ms",
            "extra": "min 1.94ms, stddev 0.07ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2247.26,
            "unit": "ms",
            "extra": "min 2243.6ms, stddev 18.54ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2550.97,
            "unit": "ms",
            "extra": "min 2527.85ms, stddev 23.93ms"
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
          "id": "7adf14d4d4df8f02395ad9c7e29c4377b15c2a34",
          "message": "feat: support kinetiq earn vault",
          "timestamp": "2026-07-09T16:23:22Z",
          "url": "https://github.com/rotki/rotki/commit/7adf14d4d4df8f02395ad9c7e29c4377b15c2a34"
        },
        "date": 1783662205352,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1541.27,
            "unit": "ms",
            "extra": "min 1540.14ms, stddev 1005.8ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1649.56,
            "unit": "ms",
            "extra": "min 1648.38ms, stddev 292.48ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.96,
            "unit": "ms",
            "extra": "min 6.94ms, stddev 0.09ms"
          },
          {
            "name": "small/asset_search",
            "value": 44.77,
            "unit": "ms",
            "extra": "min 44.59ms, stddev 0.89ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.3,
            "unit": "ms",
            "extra": "min 2.18ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.85,
            "unit": "ms",
            "extra": "min 1.73ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 97.29,
            "unit": "ms",
            "extra": "min 96.49ms, stddev 41.31ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.58,
            "unit": "ms",
            "extra": "min 68.89ms, stddev 0.47ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1540.73,
            "unit": "ms",
            "extra": "min 1538.46ms, stddev 2.43ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1726.07,
            "unit": "ms",
            "extra": "min 1721.54ms, stddev 9.31ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.63,
            "unit": "ms",
            "extra": "min 1132.79ms, stddev 2.11ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.64,
            "unit": "ms",
            "extra": "min 1125.68ms, stddev 1.59ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1240.84,
            "unit": "ms",
            "extra": "min 1238.25ms, stddev 2.14ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1119.24,
            "unit": "ms",
            "extra": "min 1116.71ms, stddev 1.42ms"
          },
          {
            "name": "whale/asset_search",
            "value": 45.2,
            "unit": "ms",
            "extra": "min 44.91ms, stddev 0.27ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.32,
            "unit": "ms",
            "extra": "min 2.25ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.76ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2407.69,
            "unit": "ms",
            "extra": "min 2398.81ms, stddev 6.66ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2670.44,
            "unit": "ms",
            "extra": "min 2664.62ms, stddev 6.31ms"
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
          "id": "647792ebd4bd7fa4287138845e090d46e041c90b",
          "message": "Merge pull request #12576 from yabirgb/spendle\n\nDecode spendle events",
          "timestamp": "2026-07-10T16:16:54Z",
          "url": "https://github.com/rotki/rotki/commit/647792ebd4bd7fa4287138845e090d46e041c90b"
        },
        "date": 1783745288155,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1594.87,
            "unit": "ms",
            "extra": "min 1541.63ms, stddev 1015.88ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1668.34,
            "unit": "ms",
            "extra": "min 1657.99ms, stddev 291.17ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.04,
            "unit": "ms",
            "extra": "min 7.01ms, stddev 0.11ms"
          },
          {
            "name": "small/asset_search",
            "value": 45.15,
            "unit": "ms",
            "extra": "min 44.71ms, stddev 0.36ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.23,
            "unit": "ms",
            "extra": "min 2.19ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.92,
            "unit": "ms",
            "extra": "min 1.73ms, stddev 0.11ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 99.55,
            "unit": "ms",
            "extra": "min 98.5ms, stddev 3.2ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.94,
            "unit": "ms",
            "extra": "min 69.3ms, stddev 13.37ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1594.78,
            "unit": "ms",
            "extra": "min 1593.82ms, stddev 1.29ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1742.01,
            "unit": "ms",
            "extra": "min 1732.91ms, stddev 12.11ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1142.93,
            "unit": "ms",
            "extra": "min 1138.56ms, stddev 4.98ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1138.94,
            "unit": "ms",
            "extra": "min 1136.17ms, stddev 2.38ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1247,
            "unit": "ms",
            "extra": "min 1245.83ms, stddev 1.96ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1126.07,
            "unit": "ms",
            "extra": "min 1121.76ms, stddev 4.36ms"
          },
          {
            "name": "whale/asset_search",
            "value": 46.12,
            "unit": "ms",
            "extra": "min 45.15ms, stddev 0.84ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.38,
            "unit": "ms",
            "extra": "min 2.35ms, stddev 0.04ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.95,
            "unit": "ms",
            "extra": "min 1.88ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2426.08,
            "unit": "ms",
            "extra": "min 2417.55ms, stddev 11.94ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2713.37,
            "unit": "ms",
            "extra": "min 2693.17ms, stddev 17.05ms"
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
          "id": "a2beea6a99fe57633e457e931fc828a6e60148d5",
          "message": "fix: CoinEx trade filtering, fees and market caching\n\n- Filter finished orders by time client-side since /spot/finished-order\n  has no start_time/end_time arguments (they were sent but are not part\n  of the API), and skip trades in delisted/unknown markets with a clear\n  error instead of a per-trade KeyError message.\n- Use actual_amount for withdrawals since amount includes the fee,\n  which is tracked as a separate fee event. Using amount double\n  counted the fee.\n- Cache the spot market map on the instance instead of re-downloading\n  and re-resolving ~thousands of assets on every history query.\n- Follow pagination.has_next instead of assuming pages of max limit,\n  guarding against a lower server-side page size silently truncating\n  history.\n- Accept both int and string millisecond timestamps since the docs\n  examples show both forms.\n- Record both base and quote trade fees when both are non-zero.\n- Guard against zero filled_amount, check HTTP status before parsing\n  the body, use lazy logging args and fix test typing/import order.\n- keep CoinEx api key in session headers",
          "timestamp": "2026-07-10T14:31:49Z",
          "url": "https://github.com/rotki/rotki/commit/a2beea6a99fe57633e457e931fc828a6e60148d5"
        },
        "date": 1783832404159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1759.17,
            "unit": "ms",
            "extra": "min 1753.49ms, stddev 1032.97ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1784.92,
            "unit": "ms",
            "extra": "min 1755.97ms, stddev 303.35ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 8.17,
            "unit": "ms",
            "extra": "min 7.16ms, stddev 0.75ms"
          },
          {
            "name": "small/asset_search",
            "value": 48.31,
            "unit": "ms",
            "extra": "min 46.86ms, stddev 2.31ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.32,
            "unit": "ms",
            "extra": "min 2.26ms, stddev 0.43ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.8,
            "unit": "ms",
            "extra": "min 1.77ms, stddev 0.22ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 106.1,
            "unit": "ms",
            "extra": "min 103.89ms, stddev 2.87ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 73.71,
            "unit": "ms",
            "extra": "min 72.28ms, stddev 1.7ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1701.12,
            "unit": "ms",
            "extra": "min 1645.81ms, stddev 30.78ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1810.92,
            "unit": "ms",
            "extra": "min 1794.14ms, stddev 17.77ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1154.78,
            "unit": "ms",
            "extra": "min 1150.28ms, stddev 3.69ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1145.57,
            "unit": "ms",
            "extra": "min 1145.22ms, stddev 2.43ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1264.79,
            "unit": "ms",
            "extra": "min 1263.12ms, stddev 0.91ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1140.89,
            "unit": "ms",
            "extra": "min 1137.73ms, stddev 3.8ms"
          },
          {
            "name": "whale/asset_search",
            "value": 49.77,
            "unit": "ms",
            "extra": "min 48.82ms, stddev 1.03ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.48,
            "unit": "ms",
            "extra": "min 2.4ms, stddev 0.14ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.99,
            "unit": "ms",
            "extra": "min 1.81ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2463,
            "unit": "ms",
            "extra": "min 2445.19ms, stddev 9.37ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2839.8,
            "unit": "ms",
            "extra": "min 2824.17ms, stddev 11.28ms"
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
          "id": "a2beea6a99fe57633e457e931fc828a6e60148d5",
          "message": "fix: CoinEx trade filtering, fees and market caching\n\n- Filter finished orders by time client-side since /spot/finished-order\n  has no start_time/end_time arguments (they were sent but are not part\n  of the API), and skip trades in delisted/unknown markets with a clear\n  error instead of a per-trade KeyError message.\n- Use actual_amount for withdrawals since amount includes the fee,\n  which is tracked as a separate fee event. Using amount double\n  counted the fee.\n- Cache the spot market map on the instance instead of re-downloading\n  and re-resolving ~thousands of assets on every history query.\n- Follow pagination.has_next instead of assuming pages of max limit,\n  guarding against a lower server-side page size silently truncating\n  history.\n- Accept both int and string millisecond timestamps since the docs\n  examples show both forms.\n- Record both base and quote trade fees when both are non-zero.\n- Guard against zero filled_amount, check HTTP status before parsing\n  the body, use lazy logging args and fix test typing/import order.\n- keep CoinEx api key in session headers",
          "timestamp": "2026-07-10T14:31:49Z",
          "url": "https://github.com/rotki/rotki/commit/a2beea6a99fe57633e457e931fc828a6e60148d5"
        },
        "date": 1783919163931,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1598.73,
            "unit": "ms",
            "extra": "min 1594.89ms, stddev 912.6ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1649.78,
            "unit": "ms",
            "extra": "min 1632.24ms, stddev 279.82ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.28,
            "unit": "ms",
            "extra": "min 7.19ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 45.46,
            "unit": "ms",
            "extra": "min 44.85ms, stddev 0.58ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.42,
            "unit": "ms",
            "extra": "min 2.38ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.01,
            "unit": "ms",
            "extra": "min 1.96ms, stddev 0.06ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 109.98,
            "unit": "ms",
            "extra": "min 108.77ms, stddev 1.12ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 76.84,
            "unit": "ms",
            "extra": "min 75.88ms, stddev 0.92ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1595.4,
            "unit": "ms",
            "extra": "min 1593.1ms, stddev 2.44ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1720.49,
            "unit": "ms",
            "extra": "min 1719.81ms, stddev 6.56ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1064.3,
            "unit": "ms",
            "extra": "min 1056.53ms, stddev 5.18ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1051.49,
            "unit": "ms",
            "extra": "min 1048.44ms, stddev 2.31ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1160,
            "unit": "ms",
            "extra": "min 1158.68ms, stddev 6.32ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1042.53,
            "unit": "ms",
            "extra": "min 1037.78ms, stddev 5.25ms"
          },
          {
            "name": "whale/asset_search",
            "value": 46.25,
            "unit": "ms",
            "extra": "min 44.92ms, stddev 0.71ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.54,
            "unit": "ms",
            "extra": "min 2.38ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.12,
            "unit": "ms",
            "extra": "min 1.95ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2270.33,
            "unit": "ms",
            "extra": "min 2257.02ms, stddev 8.2ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2564.61,
            "unit": "ms",
            "extra": "min 2558.0ms, stddev 8.92ms"
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
          "id": "caa9c829f262992c0fc9266e7a8e926ffc31496a",
          "message": "test(frontend): add wallet store and walletconnect coverage",
          "timestamp": "2026-07-13T13:10:51Z",
          "url": "https://github.com/rotki/rotki/commit/caa9c829f262992c0fc9266e7a8e926ffc31496a"
        },
        "date": 1784003582403,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1651.49,
            "unit": "ms",
            "extra": "min 1648.73ms, stddev 964.75ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1252.36,
            "unit": "ms",
            "extra": "min 1244.77ms, stddev 281.36ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.86,
            "unit": "ms",
            "extra": "min 5.72ms, stddev 0.24ms"
          },
          {
            "name": "small/asset_search",
            "value": 40.53,
            "unit": "ms",
            "extra": "min 39.7ms, stddev 1.21ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.37,
            "unit": "ms",
            "extra": "min 2.34ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.97,
            "unit": "ms",
            "extra": "min 1.89ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 110.72,
            "unit": "ms",
            "extra": "min 108.8ms, stddev 0.98ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 78.26,
            "unit": "ms",
            "extra": "min 77.86ms, stddev 0.94ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1701.33,
            "unit": "ms",
            "extra": "min 1652.66ms, stddev 26.9ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1351.62,
            "unit": "ms",
            "extra": "min 1316.05ms, stddev 16.08ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1057.33,
            "unit": "ms",
            "extra": "min 1053.02ms, stddev 3.79ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1056.71,
            "unit": "ms",
            "extra": "min 1053.14ms, stddev 2.41ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1165.56,
            "unit": "ms",
            "extra": "min 1162.38ms, stddev 2.27ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1046.3,
            "unit": "ms",
            "extra": "min 1045.26ms, stddev 1.74ms"
          },
          {
            "name": "whale/asset_search",
            "value": 43.04,
            "unit": "ms",
            "extra": "min 42.33ms, stddev 1.2ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.41,
            "unit": "ms",
            "extra": "min 2.36ms, stddev 0.11ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2,
            "unit": "ms",
            "extra": "min 1.98ms, stddev 0.07ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2293.27,
            "unit": "ms",
            "extra": "min 2291.2ms, stddev 5.75ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2652.51,
            "unit": "ms",
            "extra": "min 2643.91ms, stddev 6.85ms"
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
          "id": "f49d7ec2f6a1d71da5b9c29ba5b95aae459d4f48",
          "message": "test(frontend): cover account management and migration\n\nCover useBlockchainAccountManagement (single/multiple evm + account\naddition dispatch, task-running guard, no-new-address notify, xpub) and\nuseAccountMigration (deferred/immediate migration, chain filtering).",
          "timestamp": "2026-07-14T12:04:38Z",
          "url": "https://github.com/rotki/rotki/commit/f49d7ec2f6a1d71da5b9c29ba5b95aae459d4f48"
        },
        "date": 1784089979489,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1596.88,
            "unit": "ms",
            "extra": "min 1594.06ms, stddev 1002.69ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1248.89,
            "unit": "ms",
            "extra": "min 1235.06ms, stddev 286.19ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.63,
            "unit": "ms",
            "extra": "min 5.61ms, stddev 0.03ms"
          },
          {
            "name": "small/asset_search",
            "value": 40.05,
            "unit": "ms",
            "extra": "min 39.58ms, stddev 0.52ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.29,
            "unit": "ms",
            "extra": "min 2.06ms, stddev 0.12ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.84,
            "unit": "ms",
            "extra": "min 1.71ms, stddev 0.11ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 96.86,
            "unit": "ms",
            "extra": "min 95.76ms, stddev 1.31ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 67.78,
            "unit": "ms",
            "extra": "min 67.27ms, stddev 0.77ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1593.9,
            "unit": "ms",
            "extra": "min 1542.32ms, stddev 27.61ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1325.19,
            "unit": "ms",
            "extra": "min 1319.94ms, stddev 7.57ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.84,
            "unit": "ms",
            "extra": "min 1128.13ms, stddev 3.97ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1131.12,
            "unit": "ms",
            "extra": "min 1130.31ms, stddev 3.88ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1249.95,
            "unit": "ms",
            "extra": "min 1243.74ms, stddev 5.18ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1129.6,
            "unit": "ms",
            "extra": "min 1124.64ms, stddev 3.12ms"
          },
          {
            "name": "whale/asset_search",
            "value": 42.41,
            "unit": "ms",
            "extra": "min 40.51ms, stddev 1.29ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.22,
            "unit": "ms",
            "extra": "min 2.13ms, stddev 0.17ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.75,
            "unit": "ms",
            "extra": "min 1.74ms, stddev 0.11ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2441.81,
            "unit": "ms",
            "extra": "min 2437.75ms, stddev 9.86ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2772.89,
            "unit": "ms",
            "extra": "min 2758.76ms, stddev 10.03ms"
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
          "id": "914cfb91fe1448770ef2cf76d3ba7f019c30850c",
          "message": "feat(settings): derive search from the registry\n\nThe settings search is now fully derived from the settings registry: the\nper-tab getXTab builders and the hand-written search list are gone. A\nsetting's registry `search` block drives both its search row and its\nscroll-target anchor, and each settings tab's route/label/icon comes from\nits page `nav` meta.\n\nSettingsItem resolves its DOM id (and fallback title) from `setting-key`;\na composite item wrapping several settings under one anchor passes the\nrepresentative key. Rows with no registry value (change password, purge\ndata, rpc nodes, ...) live in a new `settingsActions` registry and resolve\nthrough a shared `anchorId(key)` helper, via `action-key` on a SettingsItem\nor `:id=\"anchorId('...')\"` on a bare section. No template restates a\nSettingsHighlightIds value anymore.\n\nA derived invariant - every highlight id is owned by exactly one of the\nsetting or action registries - replaces the hand-kept keyless allowlist.\n\nAdds unit coverage for the actions registry and the SettingsItem action-key\npath, plus an e2e spec that drives the search palette end to end.",
          "timestamp": "2026-07-15T16:45:23Z",
          "url": "https://github.com/rotki/rotki/commit/914cfb91fe1448770ef2cf76d3ba7f019c30850c"
        },
        "date": 1784177097613,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1595.39,
            "unit": "ms",
            "extra": "min 1593.65ms, stddev 950.44ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1255.03,
            "unit": "ms",
            "extra": "min 1224.11ms, stddev 270.96ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.93,
            "unit": "ms",
            "extra": "min 5.9ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 39.42,
            "unit": "ms",
            "extra": "min 39.09ms, stddev 0.29ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.39,
            "unit": "ms",
            "extra": "min 2.31ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.1,
            "unit": "ms",
            "extra": "min 1.92ms, stddev 0.12ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 106.6,
            "unit": "ms",
            "extra": "min 105.74ms, stddev 0.91ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 80.42,
            "unit": "ms",
            "extra": "min 77.76ms, stddev 1.54ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1648.61,
            "unit": "ms",
            "extra": "min 1596.07ms, stddev 24.5ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1333.46,
            "unit": "ms",
            "extra": "min 1307.8ms, stddev 20.71ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1050.71,
            "unit": "ms",
            "extra": "min 1045.91ms, stddev 4.19ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1048.76,
            "unit": "ms",
            "extra": "min 1047.09ms, stddev 4.63ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1159.68,
            "unit": "ms",
            "extra": "min 1157.74ms, stddev 1.3ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1046.14,
            "unit": "ms",
            "extra": "min 1039.04ms, stddev 4.37ms"
          },
          {
            "name": "whale/asset_search",
            "value": 41.24,
            "unit": "ms",
            "extra": "min 40.52ms, stddev 0.61ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.4,
            "unit": "ms",
            "extra": "min 2.28ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.97,
            "unit": "ms",
            "extra": "min 1.95ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2295.91,
            "unit": "ms",
            "extra": "min 2266.39ms, stddev 13.89ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2613.82,
            "unit": "ms",
            "extra": "min 2603.35ms, stddev 26.31ms"
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
            "name": "Yábir Benchakhtir",
            "username": "yabirgb",
            "email": "yabirgb@gmail.com"
          },
          "id": "7e019c445e5b30b2fa10e060584b0c1f003ede47",
          "message": "Vendor windows signal and remove pywin dep",
          "timestamp": "2026-07-16T14:51:52Z",
          "url": "https://github.com/rotki/rotki/commit/7e019c445e5b30b2fa10e060584b0c1f003ede47"
        },
        "date": 1784263668885,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1691.31,
            "unit": "ms",
            "extra": "min 1689.5ms, stddev 1437.45ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1232.74,
            "unit": "ms",
            "extra": "min 1215.88ms, stddev 380.59ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.74,
            "unit": "ms",
            "extra": "min 5.48ms, stddev 0.21ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.82,
            "unit": "ms",
            "extra": "min 34.94ms, stddev 1.23ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.19,
            "unit": "ms",
            "extra": "min 2.13ms, stddev 0.36ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.78,
            "unit": "ms",
            "extra": "min 1.74ms, stddev 0.15ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 119.46,
            "unit": "ms",
            "extra": "min 117.25ms, stddev 14.13ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 82.06,
            "unit": "ms",
            "extra": "min 80.76ms, stddev 0.99ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1692.55,
            "unit": "ms",
            "extra": "min 1690.64ms, stddev 45.5ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1319.97,
            "unit": "ms",
            "extra": "min 1302.96ms, stddev 14.43ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1056.75,
            "unit": "ms",
            "extra": "min 1055.72ms, stddev 7.91ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1058.9,
            "unit": "ms",
            "extra": "min 1054.45ms, stddev 4.29ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1171.68,
            "unit": "ms",
            "extra": "min 1165.86ms, stddev 6.2ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1050.47,
            "unit": "ms",
            "extra": "min 1049.34ms, stddev 3.63ms"
          },
          {
            "name": "whale/asset_search",
            "value": 37.24,
            "unit": "ms",
            "extra": "min 35.61ms, stddev 1.22ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.26,
            "unit": "ms",
            "extra": "min 2.15ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.77,
            "unit": "ms",
            "extra": "min 1.73ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2345.04,
            "unit": "ms",
            "extra": "min 2327.39ms, stddev 14.42ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2684.86,
            "unit": "ms",
            "extra": "min 2651.43ms, stddev 21.95ms"
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
          "id": "cd3722d62d9fe67775b61f156a70846389d4a893",
          "message": "feat: decode GnosisDAO GIP-151 treasury redemption on gnosis chain",
          "timestamp": "2026-07-17T16:25:00Z",
          "url": "https://github.com/rotki/rotki/commit/cd3722d62d9fe67775b61f156a70846389d4a893"
        },
        "date": 1784349074893,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1754.2,
            "unit": "ms",
            "extra": "min 1743.81ms, stddev 1639.15ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1279.64,
            "unit": "ms",
            "extra": "min 1267.34ms, stddev 400.94ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.24,
            "unit": "ms",
            "extra": "min 6.15ms, stddev 0.15ms"
          },
          {
            "name": "small/asset_search",
            "value": 38.1,
            "unit": "ms",
            "extra": "min 37.76ms, stddev 0.24ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.4,
            "unit": "ms",
            "extra": "min 2.13ms, stddev 0.16ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.85,
            "unit": "ms",
            "extra": "min 1.65ms, stddev 0.13ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 124.54,
            "unit": "ms",
            "extra": "min 122.24ms, stddev 2.74ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 85.11,
            "unit": "ms",
            "extra": "min 84.4ms, stddev 1.21ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1693.99,
            "unit": "ms",
            "extra": "min 1689.23ms, stddev 23.65ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1306.76,
            "unit": "ms",
            "extra": "min 1303.51ms, stddev 29.62ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1056.68,
            "unit": "ms",
            "extra": "min 1048.76ms, stddev 5.43ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1059.6,
            "unit": "ms",
            "extra": "min 1050.51ms, stddev 5.6ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1164.63,
            "unit": "ms",
            "extra": "min 1158.75ms, stddev 6.67ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1048.24,
            "unit": "ms",
            "extra": "min 1039.47ms, stddev 5.18ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.56,
            "unit": "ms",
            "extra": "min 34.72ms, stddev 0.46ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.25,
            "unit": "ms",
            "extra": "min 2.08ms, stddev 0.09ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.87,
            "unit": "ms",
            "extra": "min 1.66ms, stddev 0.12ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2343.51,
            "unit": "ms",
            "extra": "min 2335.68ms, stddev 5.39ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2653.94,
            "unit": "ms",
            "extra": "min 2636.32ms, stddev 21.69ms"
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
          "id": "cd3722d62d9fe67775b61f156a70846389d4a893",
          "message": "feat: decode GnosisDAO GIP-151 treasury redemption on gnosis chain",
          "timestamp": "2026-07-17T16:25:00Z",
          "url": "https://github.com/rotki/rotki/commit/cd3722d62d9fe67775b61f156a70846389d4a893"
        },
        "date": 1784436839407,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1279.17,
            "unit": "ms",
            "extra": "min 1275.85ms, stddev 1162.27ms"
          },
          {
            "name": "small/user_unlock",
            "value": 964.41,
            "unit": "ms",
            "extra": "min 950.42ms, stddev 296.77ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.08,
            "unit": "ms",
            "extra": "min 4.03ms, stddev 0.11ms"
          },
          {
            "name": "small/asset_search",
            "value": 27.21,
            "unit": "ms",
            "extra": "min 26.91ms, stddev 0.2ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.61,
            "unit": "ms",
            "extra": "min 1.58ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.29,
            "unit": "ms",
            "extra": "min 1.27ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 80.74,
            "unit": "ms",
            "extra": "min 80.12ms, stddev 1.01ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 55.67,
            "unit": "ms",
            "extra": "min 54.1ms, stddev 34.44ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1278.21,
            "unit": "ms",
            "extra": "min 1277.21ms, stddev 21.57ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1019.25,
            "unit": "ms",
            "extra": "min 1008.48ms, stddev 196.92ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 885.62,
            "unit": "ms",
            "extra": "min 884.64ms, stddev 1.38ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 886.1,
            "unit": "ms",
            "extra": "min 882.58ms, stddev 1.61ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 973.55,
            "unit": "ms",
            "extra": "min 971.39ms, stddev 4.59ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 877.16,
            "unit": "ms",
            "extra": "min 875.88ms, stddev 1.99ms"
          },
          {
            "name": "whale/asset_search",
            "value": 27.48,
            "unit": "ms",
            "extra": "min 27.11ms, stddev 0.28ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.58,
            "unit": "ms",
            "extra": "min 1.52ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.23,
            "unit": "ms",
            "extra": "min 1.21ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1907.08,
            "unit": "ms",
            "extra": "min 1903.71ms, stddev 3.68ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2232.37,
            "unit": "ms",
            "extra": "min 2177.26ms, stddev 73.86ms"
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
          "id": "f1b6736a3ebaba23872904b4d85ab5431a2b98b2",
          "message": "fix: annotate touched_indices for mypy\n\nmypy can no longer infer the empty set's element type since the\nexact-page pagination fix reads the set before the first add call.\n\nClaude-Session: https://claude.ai/code/session_01WUGaBfx2snxLFx86TWKaMB",
          "timestamp": "2026-07-19T13:09:39Z",
          "url": "https://github.com/rotki/rotki/commit/f1b6736a3ebaba23872904b4d85ab5431a2b98b2"
        },
        "date": 1784524299576,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1693.77,
            "unit": "ms",
            "extra": "min 1636.43ms, stddev 1412.64ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1213.69,
            "unit": "ms",
            "extra": "min 1210.59ms, stddev 374.48ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.63,
            "unit": "ms",
            "extra": "min 5.51ms, stddev 0.09ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.48,
            "unit": "ms",
            "extra": "min 34.12ms, stddev 0.39ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.15,
            "unit": "ms",
            "extra": "min 2.06ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.06ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 116.88,
            "unit": "ms",
            "extra": "min 115.75ms, stddev 0.96ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 79.47,
            "unit": "ms",
            "extra": "min 78.79ms, stddev 0.91ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1640.38,
            "unit": "ms",
            "extra": "min 1634.7ms, stddev 30.17ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1286.33,
            "unit": "ms",
            "extra": "min 1276.79ms, stddev 4.42ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1047.24,
            "unit": "ms",
            "extra": "min 1044.71ms, stddev 4.73ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1050.07,
            "unit": "ms",
            "extra": "min 1047.32ms, stddev 4.79ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1160.51,
            "unit": "ms",
            "extra": "min 1155.24ms, stddev 5.67ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1042.72,
            "unit": "ms",
            "extra": "min 1037.68ms, stddev 5.98ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.88,
            "unit": "ms",
            "extra": "min 34.26ms, stddev 0.72ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.21,
            "unit": "ms",
            "extra": "min 2.08ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.64ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2335.7,
            "unit": "ms",
            "extra": "min 2316.44ms, stddev 12.01ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2629.2,
            "unit": "ms",
            "extra": "min 2621.72ms, stddev 10.81ms"
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
          "id": "b8733296abd13f15fbdcec7cad0b28a85a582022",
          "message": "feat: resolve bridge legs as external on both sides",
          "timestamp": "2026-07-20T16:21:24Z",
          "url": "https://github.com/rotki/rotki/commit/b8733296abd13f15fbdcec7cad0b28a85a582022"
        },
        "date": 1784609604496,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1639.02,
            "unit": "ms",
            "extra": "min 1633.65ms, stddev 1429.43ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1213.42,
            "unit": "ms",
            "extra": "min 1208.23ms, stddev 373.21ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.69,
            "unit": "ms",
            "extra": "min 5.49ms, stddev 0.11ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.38,
            "unit": "ms",
            "extra": "min 34.08ms, stddev 0.33ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.15,
            "unit": "ms",
            "extra": "min 2.06ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.75,
            "unit": "ms",
            "extra": "min 1.72ms, stddev 0.06ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 115.25,
            "unit": "ms",
            "extra": "min 114.06ms, stddev 2.17ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 80.61,
            "unit": "ms",
            "extra": "min 79.29ms, stddev 0.81ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1691.65,
            "unit": "ms",
            "extra": "min 1634.41ms, stddev 32.11ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1302.05,
            "unit": "ms",
            "extra": "min 1279.14ms, stddev 15.93ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1054.32,
            "unit": "ms",
            "extra": "min 1048.18ms, stddev 4.02ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1050.98,
            "unit": "ms",
            "extra": "min 1048.61ms, stddev 5.2ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1159.81,
            "unit": "ms",
            "extra": "min 1154.3ms, stddev 6.75ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1042.97,
            "unit": "ms",
            "extra": "min 1039.31ms, stddev 5.07ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.91,
            "unit": "ms",
            "extra": "min 34.86ms, stddev 1.07ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.21,
            "unit": "ms",
            "extra": "min 2.05ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.71,
            "unit": "ms",
            "extra": "min 1.67ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2322.48,
            "unit": "ms",
            "extra": "min 2309.43ms, stddev 17.54ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2638.09,
            "unit": "ms",
            "extra": "min 2617.24ms, stddev 26.14ms"
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
          "id": "bf4976168b293e9a9b0c2f043b0ca1ea96dab2f3",
          "message": "Merge pull request #12638 from yabirgb/dbupgrades\n\nAdd kraken in the defaults for oracles and remove stale files",
          "timestamp": "2026-07-21T21:07:31Z",
          "url": "https://github.com/rotki/rotki/commit/bf4976168b293e9a9b0c2f043b0ca1ea96dab2f3"
        },
        "date": 1784695952085,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1642.19,
            "unit": "ms",
            "extra": "min 1636.6ms, stddev 1536.52ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1212.36,
            "unit": "ms",
            "extra": "min 1201.19ms, stddev 367.02ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.52,
            "unit": "ms",
            "extra": "min 5.45ms, stddev 0.14ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.21,
            "unit": "ms",
            "extra": "min 33.98ms, stddev 0.13ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.12,
            "unit": "ms",
            "extra": "min 2.0ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.69,
            "unit": "ms",
            "extra": "min 1.64ms, stddev 0.11ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 114.78,
            "unit": "ms",
            "extra": "min 112.19ms, stddev 1.6ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 78.01,
            "unit": "ms",
            "extra": "min 77.68ms, stddev 0.27ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1650.28,
            "unit": "ms",
            "extra": "min 1635.25ms, stddev 30.0ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1286.72,
            "unit": "ms",
            "extra": "min 1273.58ms, stddev 10.73ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1037.71,
            "unit": "ms",
            "extra": "min 1030.9ms, stddev 4.65ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1040.9,
            "unit": "ms",
            "extra": "min 1032.9ms, stddev 4.03ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1143.91,
            "unit": "ms",
            "extra": "min 1141.57ms, stddev 6.1ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1029.65,
            "unit": "ms",
            "extra": "min 1018.68ms, stddev 9.29ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.98,
            "unit": "ms",
            "extra": "min 34.43ms, stddev 1.43ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.14,
            "unit": "ms",
            "extra": "min 2.11ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.72,
            "unit": "ms",
            "extra": "min 1.61ms, stddev 0.1ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2308.14,
            "unit": "ms",
            "extra": "min 2302.66ms, stddev 10.06ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2630.92,
            "unit": "ms",
            "extra": "min 2593.74ms, stddev 26.23ms"
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
          "id": "52070100bc0c33c18c14d5c0e4df018e829dcc02",
          "message": "Merge pull request #12656 from yabirgb/bundle-mcp\n\nMove MCP to the main dependencies of the project",
          "timestamp": "2026-07-22T16:16:58Z",
          "url": "https://github.com/rotki/rotki/commit/52070100bc0c33c18c14d5c0e4df018e829dcc02"
        },
        "date": 1784782680437,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1591.58,
            "unit": "ms",
            "extra": "min 1584.8ms, stddev 1604.08ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1219.48,
            "unit": "ms",
            "extra": "min 1215.3ms, stddev 378.11ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.33,
            "unit": "ms",
            "extra": "min 5.14ms, stddev 0.16ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.24,
            "unit": "ms",
            "extra": "min 34.89ms, stddev 0.69ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.07,
            "unit": "ms",
            "extra": "min 1.97ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.64,
            "unit": "ms",
            "extra": "min 1.5ms, stddev 0.13ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 103.71,
            "unit": "ms",
            "extra": "min 103.18ms, stddev 0.49ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.74,
            "unit": "ms",
            "extra": "min 68.62ms, stddev 0.76ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1587.38,
            "unit": "ms",
            "extra": "min 1586.0ms, stddev 3.39ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1286.75,
            "unit": "ms",
            "extra": "min 1282.39ms, stddev 14.88ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1131.9,
            "unit": "ms",
            "extra": "min 1123.09ms, stddev 4.08ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1130.47,
            "unit": "ms",
            "extra": "min 1122.72ms, stddev 4.4ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1242.98,
            "unit": "ms",
            "extra": "min 1240.97ms, stddev 1.85ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1119.04,
            "unit": "ms",
            "extra": "min 1117.04ms, stddev 3.19ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.49,
            "unit": "ms",
            "extra": "min 35.22ms, stddev 0.94ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.12,
            "unit": "ms",
            "extra": "min 1.97ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.63,
            "unit": "ms",
            "extra": "min 1.56ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2460.78,
            "unit": "ms",
            "extra": "min 2437.34ms, stddev 12.68ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2749.46,
            "unit": "ms",
            "extra": "min 2742.12ms, stddev 5.13ms"
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
          "id": "4553441e10388f0cd7f7754f2400cfb46d7d55d4",
          "message": "Merge pull request #12671 from yabirgb/duplicate-address\n\nAdd test for special case of tx addresses",
          "timestamp": "2026-07-23T20:03:57Z",
          "url": "https://github.com/rotki/rotki/commit/4553441e10388f0cd7f7754f2400cfb46d7d55d4"
        },
        "date": 1784868813167,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1179.31,
            "unit": "ms",
            "extra": "min 1074.61ms, stddev 1049.53ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1156.49,
            "unit": "ms",
            "extra": "min 841.91ms, stddev 298.44ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.02,
            "unit": "ms",
            "extra": "min 3.89ms, stddev 0.54ms"
          },
          {
            "name": "small/asset_search",
            "value": 23.1,
            "unit": "ms",
            "extra": "min 22.53ms, stddev 3.53ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.48,
            "unit": "ms",
            "extra": "min 1.35ms, stddev 0.29ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.18,
            "unit": "ms",
            "extra": "min 1.1ms, stddev 0.19ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 67.36,
            "unit": "ms",
            "extra": "min 66.53ms, stddev 9.3ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 53.01,
            "unit": "ms",
            "extra": "min 46.74ms, stddev 65.67ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1175.98,
            "unit": "ms",
            "extra": "min 1125.74ms, stddev 104.36ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 978.48,
            "unit": "ms",
            "extra": "min 911.53ms, stddev 188.74ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 787.25,
            "unit": "ms",
            "extra": "min 762.92ms, stddev 12.82ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 795.25,
            "unit": "ms",
            "extra": "min 761.66ms, stddev 54.98ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 873.42,
            "unit": "ms",
            "extra": "min 837.19ms, stddev 17.27ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 786.15,
            "unit": "ms",
            "extra": "min 755.46ms, stddev 17.63ms"
          },
          {
            "name": "whale/asset_search",
            "value": 23.52,
            "unit": "ms",
            "extra": "min 22.81ms, stddev 1.2ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.65,
            "unit": "ms",
            "extra": "min 1.44ms, stddev 0.17ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.21,
            "unit": "ms",
            "extra": "min 1.13ms, stddev 0.12ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1703.26,
            "unit": "ms",
            "extra": "min 1631.27ms, stddev 35.52ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2259.98,
            "unit": "ms",
            "extra": "min 2153.33ms, stddev 99.64ms"
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
          "id": "0055beb3dd824eab95319e37a0298b329aa65b47",
          "message": "feat: decode solana stake program transactions\n\nAdd a decoder module for the native Solana Stake program, covering its\nfull instruction set. Previously staking transactions appeared as\nnear-empty events (fee only), since the base decoder only handles plain\nsystem transfers and SPL token transfers.\n\nDecoded events:\n- Initialize(Checked)/DelegateStake: staking deposit with the amount\n  recovered from the funding instruction in the same transaction\n  (createAccount, createAccountWithSeed parsing the variable-length\n  seed, or a plain transfer whose decoded spend event is transformed\n  in place). Delegating an account funded earlier yields an\n  informational event since the amount is not in the transaction.\n- Withdraw: unstake event with the amount from the instruction data.\n- Deactivate: informational start-of-unstaking event.\n- Split: deposit for the new account's rent-exempt reserve plus an\n  informational split event.\n- Merge, SetLockup(Checked), MoveStake/MoveLamports and all four\n  Authorize variants: informational events. Authority changes are\n  emitted when either the old or the new authority is tracked, so both\n  sides of a stake account sale see them.\n- GetMinimumDelegation, DeactivateDelinquent and Redelegate produce no\n  events (read-only, permissionless or retired).\n\nInstruction tags are parsed as a bincode enum via an IntEnum. Events\nuse the existing STAKING deposit/remove combos and a new solana-stake\ncounterparty rendered with the existing solana.svg icon.\n\nTests cover six real mainnet transactions: create+delegate, deactivate,\ndurable-nonce withdraw, a stake account sale (authorize x2 + payment),\na split funded via createAccountWithSeed, and a merge. They are not yet\nVCRed and query mainnet-beta live.\n\nNote: epoch rewards are credited by the runtime without transactions,\nso they cannot be decoded and would need a separate query task. SPL\nstake pool (liquid staking) deposits are a separate program and are\nnot covered by this module.",
          "timestamp": "2026-07-24T20:07:36Z",
          "url": "https://github.com/rotki/rotki/commit/0055beb3dd824eab95319e37a0298b329aa65b47"
        },
        "date": 1784955013397,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1640.23,
            "unit": "ms",
            "extra": "min 1588.02ms, stddev 1620.46ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1209.68,
            "unit": "ms",
            "extra": "min 1200.08ms, stddev 389.95ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.26,
            "unit": "ms",
            "extra": "min 5.22ms, stddev 0.11ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.8,
            "unit": "ms",
            "extra": "min 34.35ms, stddev 0.31ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.04,
            "unit": "ms",
            "extra": "min 1.96ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.64,
            "unit": "ms",
            "extra": "min 1.57ms, stddev 0.06ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 102.53,
            "unit": "ms",
            "extra": "min 101.36ms, stddev 0.77ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.26,
            "unit": "ms",
            "extra": "min 68.01ms, stddev 0.87ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1595.31,
            "unit": "ms",
            "extra": "min 1588.12ms, stddev 21.77ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1279.18,
            "unit": "ms",
            "extra": "min 1273.29ms, stddev 5.58ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1125.81,
            "unit": "ms",
            "extra": "min 1120.82ms, stddev 4.35ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1129.12,
            "unit": "ms",
            "extra": "min 1125.06ms, stddev 2.18ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1242.67,
            "unit": "ms",
            "extra": "min 1236.23ms, stddev 4.79ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1121.6,
            "unit": "ms",
            "extra": "min 1115.6ms, stddev 4.15ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.88,
            "unit": "ms",
            "extra": "min 34.63ms, stddev 0.65ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.03,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.62,
            "unit": "ms",
            "extra": "min 1.53ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2706.96,
            "unit": "ms",
            "extra": "min 2696.38ms, stddev 8.85ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2740.87,
            "unit": "ms",
            "extra": "min 2731.26ms, stddev 6.01ms"
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
          "id": "02259fa94b29adab0704b630e29457f7bbf99fba",
          "message": "refactor: cut the remaining complexity offenders\n\nTakes the rule to zero. The same shapes as the previous pass, with two\nrecurring causes.\n\nDefaulted and optional fields: iterateAssets and enqueue counted their\ndefaults as branches, and the Lido row builder paid for one optional\nchain per metric. Those resolve once, through a defaults constant or a\nhelper that flattens the optional groups.\n\nGuards ahead of the work: gas estimation, online event queries, the\naccount-form key warnings and the purge dispatch all led with a stack of\npreconditions. Each is now a named question, so the function that follows\nreads as the work rather than the eligibility.\n\nTwo sign-in steps and two export outcomes were duplicated blocks that\ncollapse into one helper each.\n\nbalance-transformations breached the line cap once its collection\ngrouping was extracted, so the pure part moves to balance-grouping.ts,\ntaking the protocol sorting and the two balance types that only it and\nits callers need.\n\nThree of these lost TypeScript narrowing on extraction, since a boolean\nhelper discards what an inline `in` or discriminant check proves. The\nsign-in reporter is a type predicate, and the xpub and group checks stay\nat the sites that depend on them.",
          "timestamp": "2026-07-26T01:23:32Z",
          "url": "https://github.com/rotki/rotki/commit/02259fa94b29adab0704b630e29457f7bbf99fba"
        },
        "date": 1785042259346,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1584.21,
            "unit": "ms",
            "extra": "min 1381.44ms, stddev 1406.65ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1144.58,
            "unit": "ms",
            "extra": "min 1139.88ms, stddev 431.28ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.03,
            "unit": "ms",
            "extra": "min 5.02ms, stddev 0.14ms"
          },
          {
            "name": "small/asset_search",
            "value": 30.67,
            "unit": "ms",
            "extra": "min 29.58ms, stddev 0.93ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.94,
            "unit": "ms",
            "extra": "min 1.89ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.64,
            "unit": "ms",
            "extra": "min 1.48ms, stddev 0.11ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 94.23,
            "unit": "ms",
            "extra": "min 93.15ms, stddev 0.82ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 66.35,
            "unit": "ms",
            "extra": "min 64.35ms, stddev 1.07ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1430.45,
            "unit": "ms",
            "extra": "min 1376.36ms, stddev 24.82ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1192.45,
            "unit": "ms",
            "extra": "min 1177.48ms, stddev 119.34ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1018.98,
            "unit": "ms",
            "extra": "min 990.25ms, stddev 15.67ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1016.97,
            "unit": "ms",
            "extra": "min 995.23ms, stddev 12.49ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1110.72,
            "unit": "ms",
            "extra": "min 1083.13ms, stddev 21.62ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1007.25,
            "unit": "ms",
            "extra": "min 997.65ms, stddev 10.77ms"
          },
          {
            "name": "whale/asset_search",
            "value": 31.19,
            "unit": "ms",
            "extra": "min 30.23ms, stddev 0.85ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.05,
            "unit": "ms",
            "extra": "min 1.83ms, stddev 0.11ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.57,
            "unit": "ms",
            "extra": "min 1.4ms, stddev 0.1ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2447.81,
            "unit": "ms",
            "extra": "min 2411.93ms, stddev 23.48ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2593.16,
            "unit": "ms",
            "extra": "min 2516.75ms, stddev 80.02ms"
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
          "id": "a115f4f1ae7f36efd1be4937c2c3a43875427a27",
          "message": "fix: hold async task patches for task lifetime\n\nTwo api tests were failing on the nightlies only: test_async_task_death_traceback\nand test_query_async_task_that_died. Both inject their fault with a mock.patch\nscoped to the HTTP request that spawns the async task, but _query_async returns\nthe task id right after task.start(), so the with block exits while the task\nthread is still starting.\n\nUnder gevent this was safe by construction: the main greenlet blocked on the\nloopback read and handed control to the new greenlet, which ran until its own\nfirst blocking I/O, precisely the patched call. Since api tasks became real OS\nthreads it is a race between the main thread restoring the attribute and the new\nthread reaching the patched call. On an idle machine the task wins, on a\nsaturated nightly it loses and runs unpatched, so no death is ever logged and\nthe binance query hits the live API with the fake key and returns empty balances.\n\nHold the patches open for the whole lifetime of the task by moving the waits and\nthe polling loops inside the with block. test_async_task_death_traceback also\nasserts the task is really dead, since wait() returns silently on timeout and\nwould otherwise fail on the caplog assertion instead.\n\ntest_cancel_async_task gets the same treatment for consistency. It is not\nreproducibly broken today, as the task is cancelled at its first checkpoint\nbefore it reaches the request, but it has the same latent scope bug.",
          "timestamp": "2026-07-26T12:52:07Z",
          "url": "https://github.com/rotki/rotki/commit/a115f4f1ae7f36efd1be4937c2c3a43875427a27"
        },
        "date": 1785129447282,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1703.94,
            "unit": "ms",
            "extra": "min 1695.44ms, stddev 1614.15ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1259.58,
            "unit": "ms",
            "extra": "min 1241.83ms, stddev 384.32ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.15,
            "unit": "ms",
            "extra": "min 5.46ms, stddev 0.44ms"
          },
          {
            "name": "small/asset_search",
            "value": 36.3,
            "unit": "ms",
            "extra": "min 35.72ms, stddev 1.14ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.26,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.19ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.79,
            "unit": "ms",
            "extra": "min 1.63ms, stddev 0.13ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 121.1,
            "unit": "ms",
            "extra": "min 118.71ms, stddev 2.27ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 83.22,
            "unit": "ms",
            "extra": "min 82.97ms, stddev 0.66ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1697.05,
            "unit": "ms",
            "extra": "min 1694.11ms, stddev 22.86ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1314.21,
            "unit": "ms",
            "extra": "min 1306.87ms, stddev 7.07ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1050.24,
            "unit": "ms",
            "extra": "min 1048.57ms, stddev 6.93ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1052.64,
            "unit": "ms",
            "extra": "min 1048.4ms, stddev 3.76ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1162.59,
            "unit": "ms",
            "extra": "min 1159.85ms, stddev 2.62ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1045.89,
            "unit": "ms",
            "extra": "min 1042.42ms, stddev 3.55ms"
          },
          {
            "name": "whale/asset_search",
            "value": 36.14,
            "unit": "ms",
            "extra": "min 34.64ms, stddev 1.41ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.15,
            "unit": "ms",
            "extra": "min 2.11ms, stddev 0.09ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.71,
            "unit": "ms",
            "extra": "min 1.67ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2581.58,
            "unit": "ms",
            "extra": "min 2566.4ms, stddev 16.12ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2675.67,
            "unit": "ms",
            "extra": "min 2654.67ms, stddev 12.43ms"
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
          "id": "b5257f2db520438cf967b79b2212f64ae2be181c",
          "message": "chore(dev): gate vue devtools behind its own flag\n\nENABLE_DEV_TOOLS drove two unrelated things: the vite-plugin-vue-devtools\nplugin here, and Electron opening its Chrome DevTools window in\nelectron/main/window-manager.ts. The Vite plugin breaks Vue SFC hot\nreload, so every .vue edit needs a manual page reload while it is\ninstalled, and there was no way to keep the Electron devtools without\npaying that cost.\n\nGive the plugin its own ENABLE_VUE_DEVTOOLS flag. It stays out of the\nmanaged dev flags, which default to on for instance runs, so the Vue\nDevTools panel is now opt-in.",
          "timestamp": "2026-07-27T17:37:30Z",
          "url": "https://github.com/rotki/rotki/commit/b5257f2db520438cf967b79b2212f64ae2be181c"
        },
        "date": 1785214132587,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1640.75,
            "unit": "ms",
            "extra": "min 1586.41ms, stddev 1680.41ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1221.2,
            "unit": "ms",
            "extra": "min 1220.23ms, stddev 430.01ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.36,
            "unit": "ms",
            "extra": "min 5.29ms, stddev 0.1ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.18,
            "unit": "ms",
            "extra": "min 35.0ms, stddev 0.55ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.06,
            "unit": "ms",
            "extra": "min 2.04ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.68,
            "unit": "ms",
            "extra": "min 1.66ms, stddev 0.05ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 104.12,
            "unit": "ms",
            "extra": "min 102.31ms, stddev 1.52ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 70.11,
            "unit": "ms",
            "extra": "min 69.86ms, stddev 0.21ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1641.99,
            "unit": "ms",
            "extra": "min 1641.39ms, stddev 6.12ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1291.85,
            "unit": "ms",
            "extra": "min 1283.4ms, stddev 18.61ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1133.97,
            "unit": "ms",
            "extra": "min 1130.21ms, stddev 2.57ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1133.59,
            "unit": "ms",
            "extra": "min 1130.74ms, stddev 1.93ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1245.61,
            "unit": "ms",
            "extra": "min 1242.41ms, stddev 3.08ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1124.69,
            "unit": "ms",
            "extra": "min 1123.48ms, stddev 1.41ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.66,
            "unit": "ms",
            "extra": "min 34.98ms, stddev 1.09ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.18,
            "unit": "ms",
            "extra": "min 2.07ms, stddev 0.1ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.67ms, stddev 0.05ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2716.22,
            "unit": "ms",
            "extra": "min 2707.81ms, stddev 9.98ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2762.03,
            "unit": "ms",
            "extra": "min 2747.7ms, stddev 12.31ms"
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
          "id": "56ec63ca8a94a6beb5d0bec060f2c25e7846eca5",
          "message": "chore(deps): bump electron to 43, c8 to 12\n\nBoth are majors. electron 43.1.1 is preferred over 43.2.0, which is\nright on the 7 day minimumReleaseAge boundary.\n\nNative modules rebuild cleanly against the new ABI and electron-builder\n26.15.3 packages it without changes. The resulting AppImage was launched\nand loads the frontend.\n\nc8 is only used by the e2e coverage report script.",
          "timestamp": "2026-07-28T17:38:02Z",
          "url": "https://github.com/rotki/rotki/commit/56ec63ca8a94a6beb5d0bec060f2c25e7846eca5"
        },
        "date": 1785300826769,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1799.01,
            "unit": "ms",
            "extra": "min 1747.46ms, stddev 1699.92ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1269.49,
            "unit": "ms",
            "extra": "min 1235.27ms, stddev 402.81ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.87,
            "unit": "ms",
            "extra": "min 5.42ms, stddev 0.23ms"
          },
          {
            "name": "small/asset_search",
            "value": 36.39,
            "unit": "ms",
            "extra": "min 35.51ms, stddev 1.01ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.09,
            "unit": "ms",
            "extra": "min 2.05ms, stddev 0.11ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.72,
            "unit": "ms",
            "extra": "min 1.56ms, stddev 0.09ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 120.73,
            "unit": "ms",
            "extra": "min 113.97ms, stddev 3.58ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 81.85,
            "unit": "ms",
            "extra": "min 81.45ms, stddev 0.84ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1690.87,
            "unit": "ms",
            "extra": "min 1633.38ms, stddev 64.05ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1303.18,
            "unit": "ms",
            "extra": "min 1276.83ms, stddev 29.79ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1039.1,
            "unit": "ms",
            "extra": "min 1037.54ms, stddev 4.13ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1040.53,
            "unit": "ms",
            "extra": "min 1031.26ms, stddev 6.49ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1143.78,
            "unit": "ms",
            "extra": "min 1141.58ms, stddev 7.16ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1031.78,
            "unit": "ms",
            "extra": "min 1022.41ms, stddev 6.3ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.09,
            "unit": "ms",
            "extra": "min 33.92ms, stddev 0.68ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.15,
            "unit": "ms",
            "extra": "min 2.07ms, stddev 0.09ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.68,
            "unit": "ms",
            "extra": "min 1.59ms, stddev 0.09ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2523.15,
            "unit": "ms",
            "extra": "min 2518.66ms, stddev 10.78ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2629.39,
            "unit": "ms",
            "extra": "min 2614.96ms, stddev 7.76ms"
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
          "id": "b4aa10d79f4a59e881782bafc9bd81ee3a31a9ba",
          "message": "fix: skip settings suggestions on new accounts\n\nA new account starts with `lastAppliedSettingsVersion` at its `0.0.0`\ndefault, so every recommendation from the current and earlier versions\nwas pending on first login. The account is already created on the\ncurrent defaults, so applying one moved it away from them: since kraken\nwas added to the default current-price oracles, the 1.43 oracle\nsuggestion offered to remove it from an account that had just been\ngiven it.\n\nAccount creation now stamps the running version instead of showing the\ndialog. Restoring a premium backup is excluded: the pulled database\nbelongs to an existing account and its recommendations still apply.\n\nThe stamp is awaited rather than fire-and-forget. Writing a frontend\nsetting rewrites the whole blob from a snapshot of the repo, so the\nprivacy reset that follows in `initialize` could snapshot the pre-stamp\nversion and put it back, bringing the dialog around again on the next\nlogin.",
          "timestamp": "2026-07-29T15:32:52Z",
          "url": "https://github.com/rotki/rotki/commit/b4aa10d79f4a59e881782bafc9bd81ee3a31a9ba"
        },
        "date": 1785386481108,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1693.7,
            "unit": "ms",
            "extra": "min 1689.57ms, stddev 1577.77ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1256.45,
            "unit": "ms",
            "extra": "min 1228.85ms, stddev 370.49ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.64,
            "unit": "ms",
            "extra": "min 5.6ms, stddev 0.18ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.78,
            "unit": "ms",
            "extra": "min 34.49ms, stddev 0.9ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.14,
            "unit": "ms",
            "extra": "min 2.1ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.73,
            "unit": "ms",
            "extra": "min 1.67ms, stddev 0.05ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 117.66,
            "unit": "ms",
            "extra": "min 115.95ms, stddev 6.7ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 81.12,
            "unit": "ms",
            "extra": "min 80.27ms, stddev 0.77ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1689.91,
            "unit": "ms",
            "extra": "min 1688.22ms, stddev 2.8ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1289.74,
            "unit": "ms",
            "extra": "min 1284.89ms, stddev 5.85ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1041.86,
            "unit": "ms",
            "extra": "min 1039.09ms, stddev 5.38ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1042.64,
            "unit": "ms",
            "extra": "min 1040.92ms, stddev 3.34ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1154.4,
            "unit": "ms",
            "extra": "min 1152.71ms, stddev 4.48ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1036.03,
            "unit": "ms",
            "extra": "min 1032.49ms, stddev 2.22ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.69,
            "unit": "ms",
            "extra": "min 34.63ms, stddev 0.9ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.23,
            "unit": "ms",
            "extra": "min 2.12ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.67ms, stddev 0.07ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2557.99,
            "unit": "ms",
            "extra": "min 2539.19ms, stddev 12.46ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2640.83,
            "unit": "ms",
            "extra": "min 2635.38ms, stddev 3.81ms"
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
          "id": "223c359bd6bdbf1e8d2a5c0f8719cda7b740ca43",
          "message": "fix: retry bitcoin txs with unplaceable TxIOs via the next explorer\n\nAddress review findings on the bitcoin transaction saving PR:\n\n- blockchain.info returning a transaction incomplete and without the real\n  index of its TxIOs was skipped, which cached a block height past it as\n  soon as a newer transaction of the same response was kept, so nothing\n  ever queried it again and the explorer fallback never ran. Raise a\n  dedicated UnplaceableTxIOsError that the processing loop does not\n  swallow, so the api loop falls back to blockcypher which returns it\n  whole.\n- Lock the location selector of the bitcoin event form outside the add\n  flow, as the evm form does. The location picks the asset, so leaving it\n  editable let an event of a saved BTC transaction be relabelled as BCH.\n- Give reset_events_for_redecode a bitcoin branch. It deleted the events\n  while leaving the transactions marked as decoded, so nothing would ever\n  produce them again. Scoped by location since both chains share the\n  tables and every transaction id from before the fork.\n- Re-derive the counterparty addresses of a bitcoin event restored from\n  backup. Replacing the event cascades them away and they have no backup\n  table, so a restored event dropped out of the per-address balances and\n  the address filters.\n- Keep the tracked accounts as a set as well as a list. Membership was a\n  list scan run once per TxIO saved and once per address decoded, which a\n  full history redecode of an xpub wallet repeats millions of times.",
          "timestamp": "2026-07-30T19:19:42Z",
          "url": "https://github.com/rotki/rotki/commit/223c359bd6bdbf1e8d2a5c0f8719cda7b740ca43"
        },
        "date": 1785474439125,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1740.75,
            "unit": "ms",
            "extra": "min 1687.64ms, stddev 1577.81ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1238.17,
            "unit": "ms",
            "extra": "min 1227.23ms, stddev 380.16ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.72,
            "unit": "ms",
            "extra": "min 5.69ms, stddev 0.18ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.53,
            "unit": "ms",
            "extra": "min 34.35ms, stddev 0.96ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.3,
            "unit": "ms",
            "extra": "min 2.04ms, stddev 0.13ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.12ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 118.83,
            "unit": "ms",
            "extra": "min 115.88ms, stddev 3.88ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 81.96,
            "unit": "ms",
            "extra": "min 79.88ms, stddev 1.06ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1737.89,
            "unit": "ms",
            "extra": "min 1685.42ms, stddev 46.22ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1291.32,
            "unit": "ms",
            "extra": "min 1288.09ms, stddev 29.49ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1044.05,
            "unit": "ms",
            "extra": "min 1040.16ms, stddev 6.83ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1045.87,
            "unit": "ms",
            "extra": "min 1045.05ms, stddev 5.47ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1160.38,
            "unit": "ms",
            "extra": "min 1153.14ms, stddev 3.77ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1044.85,
            "unit": "ms",
            "extra": "min 1034.01ms, stddev 5.0ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.97,
            "unit": "ms",
            "extra": "min 34.09ms, stddev 1.18ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.2,
            "unit": "ms",
            "extra": "min 2.14ms, stddev 0.1ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.76,
            "unit": "ms",
            "extra": "min 1.71ms, stddev 0.09ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2568.68,
            "unit": "ms",
            "extra": "min 2550.27ms, stddev 25.16ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2651.41,
            "unit": "ms",
            "extra": "min 2626.74ms, stddev 25.59ms"
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
          "id": "ded17c35fd4e9596a1167f647e6eee123144571e",
          "message": "docs: changelog for the history events filter redesign",
          "timestamp": "2026-07-30T18:27:23Z",
          "url": "https://github.com/rotki/rotki/commit/ded17c35fd4e9596a1167f647e6eee123144571e"
        },
        "date": 1785560324030,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1745.45,
            "unit": "ms",
            "extra": "min 1689.32ms, stddev 1630.81ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1231.11,
            "unit": "ms",
            "extra": "min 1224.27ms, stddev 398.93ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.33,
            "unit": "ms",
            "extra": "min 5.18ms, stddev 0.16ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.93,
            "unit": "ms",
            "extra": "min 35.47ms, stddev 0.28ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.07,
            "unit": "ms",
            "extra": "min 1.97ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.69,
            "unit": "ms",
            "extra": "min 1.66ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 105.29,
            "unit": "ms",
            "extra": "min 103.76ms, stddev 1.1ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 71.51,
            "unit": "ms",
            "extra": "min 70.44ms, stddev 0.84ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1690.2,
            "unit": "ms",
            "extra": "min 1687.45ms, stddev 2.67ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1291.2,
            "unit": "ms",
            "extra": "min 1286.23ms, stddev 9.73ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1137.29,
            "unit": "ms",
            "extra": "min 1133.9ms, stddev 1.79ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1139.22,
            "unit": "ms",
            "extra": "min 1137.91ms, stddev 1.89ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1249.95,
            "unit": "ms",
            "extra": "min 1245.69ms, stddev 2.07ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1128.73,
            "unit": "ms",
            "extra": "min 1126.83ms, stddev 2.0ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.87,
            "unit": "ms",
            "extra": "min 35.74ms, stddev 0.78ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.13,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.71,
            "unit": "ms",
            "extra": "min 1.56ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2731.1,
            "unit": "ms",
            "extra": "min 2715.67ms, stddev 12.83ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2786.96,
            "unit": "ms",
            "extra": "min 2766.06ms, stddev 13.13ms"
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
          "id": "c192c9eee8bf4c505360fb817676063a37d91e03",
          "message": "fix(e2e): key the core cache on bundled data\n\nThe spec bundles global.db, nodes.json and the populate_*.sql files\ninto the frozen core. None are .py, so a data-only change kept the key\nunchanged and restored a stale core - the suite would then pass against\nthe old data without failing.",
          "timestamp": "2026-08-01T20:36:04Z",
          "url": "https://github.com/rotki/rotki/commit/c192c9eee8bf4c505360fb817676063a37d91e03"
        },
        "date": 1785646853159,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1796.97,
            "unit": "ms",
            "extra": "min 1744.7ms, stddev 1608.82ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1254.04,
            "unit": "ms",
            "extra": "min 1233.8ms, stddev 385.15ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.86,
            "unit": "ms",
            "extra": "min 5.66ms, stddev 0.32ms"
          },
          {
            "name": "small/asset_search",
            "value": 37.15,
            "unit": "ms",
            "extra": "min 35.58ms, stddev 0.92ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.41,
            "unit": "ms",
            "extra": "min 2.31ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.77,
            "unit": "ms",
            "extra": "min 1.75ms, stddev 0.06ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 121.87,
            "unit": "ms",
            "extra": "min 118.9ms, stddev 1.56ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 83.17,
            "unit": "ms",
            "extra": "min 82.45ms, stddev 1.5ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1747.03,
            "unit": "ms",
            "extra": "min 1741.15ms, stddev 25.98ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1313.46,
            "unit": "ms",
            "extra": "min 1305.24ms, stddev 10.66ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1045.61,
            "unit": "ms",
            "extra": "min 1044.82ms, stddev 2.87ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1048.29,
            "unit": "ms",
            "extra": "min 1045.94ms, stddev 3.05ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1158.81,
            "unit": "ms",
            "extra": "min 1155.42ms, stddev 4.54ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1042.16,
            "unit": "ms",
            "extra": "min 1038.33ms, stddev 2.72ms"
          },
          {
            "name": "whale/asset_search",
            "value": 37.18,
            "unit": "ms",
            "extra": "min 36.07ms, stddev 0.62ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.38,
            "unit": "ms",
            "extra": "min 2.34ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.82,
            "unit": "ms",
            "extra": "min 1.74ms, stddev 0.05ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2579.02,
            "unit": "ms",
            "extra": "min 2559.37ms, stddev 10.57ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2694.36,
            "unit": "ms",
            "extra": "min 2671.03ms, stddev 15.85ms"
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
          "id": "71d5d7b7a30fcc1d55181c937f1ea65e1b227572",
          "message": "chore: upgrade ruff to 0.16.0 and enable S324, TID252, E402\n\nBump ruff from 0.15.22 to 0.16.0, the newest version past the repo's\none week uv exclude-newer quarantine. The upgrade needed no rule\nchanges on its own: the expanded default rule set does not apply since\nwe select explicitly, and the twelve newly stabilized rules were\nalready running under preview.\n\nWhile at it, enable three rules that were globally ignored:\n\n- S324: the two md5 uses are non adversarial (an http etag and a local\n  file fingerprint) so they now pass usedforsecurity=False, which both\n  documents the intent and satisfies the rule. Digests are unchanged.\n- TID252: rewrite the six parent relative imports to absolute ones.\n  Sibling '.constants' imports stay as they are. This matters most in\n  the decoder tree, where '..constants' and '.constants' are different\n  modules that read almost identically.\n- E402: eth2.py had a constant sitting in the middle of its import\n  block, which is now moved below them. The two deliberate cases, test\n  setup that configures logging before importing fixtures and the\n  bench launcher that patches requests before importing the app, get\n  per file ignores with the reason attached.\n\nRUF069 stays ignored: it still misfires on our FVal Decimal wrapper\nand the upstream issue is open.",
          "timestamp": "2026-08-02T18:59:32Z",
          "url": "https://github.com/rotki/rotki/commit/71d5d7b7a30fcc1d55181c937f1ea65e1b227572"
        },
        "date": 1785733801008,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.58,
            "unit": "ms",
            "extra": "min 1743.16ms, stddev 1574.62ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1245.37,
            "unit": "ms",
            "extra": "min 1237.17ms, stddev 376.33ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.67,
            "unit": "ms",
            "extra": "min 5.57ms, stddev 0.13ms"
          },
          {
            "name": "small/asset_search",
            "value": 36.32,
            "unit": "ms",
            "extra": "min 35.43ms, stddev 2.23ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.2,
            "unit": "ms",
            "extra": "min 2.11ms, stddev 0.29ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.68ms, stddev 0.15ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 121.55,
            "unit": "ms",
            "extra": "min 119.45ms, stddev 7.83ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 82.59,
            "unit": "ms",
            "extra": "min 82.26ms, stddev 0.69ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1743.5,
            "unit": "ms",
            "extra": "min 1741.37ms, stddev 22.55ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1319.07,
            "unit": "ms",
            "extra": "min 1311.21ms, stddev 6.45ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1057.79,
            "unit": "ms",
            "extra": "min 1049.29ms, stddev 5.28ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1058.44,
            "unit": "ms",
            "extra": "min 1050.58ms, stddev 4.73ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1170.93,
            "unit": "ms",
            "extra": "min 1168.45ms, stddev 2.03ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1050.04,
            "unit": "ms",
            "extra": "min 1048.71ms, stddev 3.02ms"
          },
          {
            "name": "whale/asset_search",
            "value": 36.99,
            "unit": "ms",
            "extra": "min 36.15ms, stddev 0.77ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.21,
            "unit": "ms",
            "extra": "min 2.12ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.74,
            "unit": "ms",
            "extra": "min 1.66ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2599.47,
            "unit": "ms",
            "extra": "min 2590.55ms, stddev 5.83ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2699.5,
            "unit": "ms",
            "extra": "min 2679.92ms, stddev 14.44ms"
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
            "name": "Konstantinos Paparas",
            "username": "kelsos",
            "email": "kelsos86@gmail.com"
          },
          "id": "86f98275d7b1e8cc1aa5fd0ecb562ca6c247d921",
          "message": "Restart MCP after logout",
          "timestamp": "2026-08-03T14:46:58Z",
          "url": "https://github.com/rotki/rotki/commit/86f98275d7b1e8cc1aa5fd0ecb562ca6c247d921"
        },
        "date": 1785818913964,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1690.66,
            "unit": "ms",
            "extra": "min 1683.56ms, stddev 1534.81ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1220.29,
            "unit": "ms",
            "extra": "min 1205.04ms, stddev 375.79ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.74,
            "unit": "ms",
            "extra": "min 5.47ms, stddev 0.17ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.8,
            "unit": "ms",
            "extra": "min 33.88ms, stddev 0.81ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.17,
            "unit": "ms",
            "extra": "min 2.1ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.76,
            "unit": "ms",
            "extra": "min 1.65ms, stddev 0.09ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 114.29,
            "unit": "ms",
            "extra": "min 112.57ms, stddev 1.63ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 78.74,
            "unit": "ms",
            "extra": "min 78.15ms, stddev 1.53ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1683.61,
            "unit": "ms",
            "extra": "min 1632.18ms, stddev 29.88ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1275.74,
            "unit": "ms",
            "extra": "min 1269.62ms, stddev 6.66ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1030.52,
            "unit": "ms",
            "extra": "min 1028.98ms, stddev 5.35ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1038.87,
            "unit": "ms",
            "extra": "min 1030.72ms, stddev 6.58ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1141.3,
            "unit": "ms",
            "extra": "min 1138.8ms, stddev 2.59ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1027.11,
            "unit": "ms",
            "extra": "min 1024.6ms, stddev 7.56ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.63,
            "unit": "ms",
            "extra": "min 33.92ms, stddev 0.38ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.2,
            "unit": "ms",
            "extra": "min 2.1ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.7,
            "unit": "ms",
            "extra": "min 1.63ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2524.55,
            "unit": "ms",
            "extra": "min 2517.58ms, stddev 3.27ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2583.99,
            "unit": "ms",
            "extra": "min 2569.62ms, stddev 10.17ms"
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
          "id": "ffacf466b31708c5ab531628d97b357aa3774708",
          "message": "Merge pull request #12759 from kelsos/feat/starling-public-health\n\nServe a public /health endpoint on the starling proxy",
          "timestamp": "2026-08-04T15:32:38Z",
          "url": "https://github.com/rotki/rotki/commit/ffacf466b31708c5ab531628d97b357aa3774708"
        },
        "date": 1785905356594,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1632.66,
            "unit": "ms",
            "extra": "min 1630.04ms, stddev 1620.43ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1206.79,
            "unit": "ms",
            "extra": "min 1195.54ms, stddev 393.44ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.25,
            "unit": "ms",
            "extra": "min 5.19ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.48,
            "unit": "ms",
            "extra": "min 34.2ms, stddev 0.19ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.08,
            "unit": "ms",
            "extra": "min 2.04ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.66,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 102.13,
            "unit": "ms",
            "extra": "min 99.81ms, stddev 1.45ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 67.96,
            "unit": "ms",
            "extra": "min 67.46ms, stddev 0.52ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1630.67,
            "unit": "ms",
            "extra": "min 1579.14ms, stddev 25.88ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1273.05,
            "unit": "ms",
            "extra": "min 1265.76ms, stddev 4.19ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1120.23,
            "unit": "ms",
            "extra": "min 1116.08ms, stddev 2.13ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1119.25,
            "unit": "ms",
            "extra": "min 1117.62ms, stddev 1.11ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1232.49,
            "unit": "ms",
            "extra": "min 1230.16ms, stddev 1.84ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1110.77,
            "unit": "ms",
            "extra": "min 1108.52ms, stddev 3.85ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.6,
            "unit": "ms",
            "extra": "min 34.54ms, stddev 0.25ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.03,
            "unit": "ms",
            "extra": "min 1.96ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.62,
            "unit": "ms",
            "extra": "min 1.53ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2678.7,
            "unit": "ms",
            "extra": "min 2676.8ms, stddev 7.07ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2692.36,
            "unit": "ms",
            "extra": "min 2686.02ms, stddev 4.96ms"
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
          "id": "c843a513a9f1dce6d2345c2203a2823cce14736b",
          "message": "test(e2e): address history rows by event id\n\nReading a row and then re-querying nth(0) to delete it deleted a different\nswap: the list sorts timestamp DESC and re-renders under the test, so the index\nno longer names the row that was read. Rows carry the id of the event they\nstand for, and the spec addresses them by it throughout.\n\nThe id is on both the collapsed row and the collapse header, so a swap that\nmerely expands still matches and only a real deletion clears it.",
          "timestamp": "2026-08-05T17:41:18Z",
          "url": "https://github.com/rotki/rotki/commit/c843a513a9f1dce6d2345c2203a2823cce14736b"
        },
        "date": 1785991808438,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1642.93,
            "unit": "ms",
            "extra": "min 1635.57ms, stddev 1633.92ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1231.11,
            "unit": "ms",
            "extra": "min 1206.95ms, stddev 391.11ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.36,
            "unit": "ms",
            "extra": "min 5.24ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.91,
            "unit": "ms",
            "extra": "min 35.35ms, stddev 0.41ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.06,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.79,
            "unit": "ms",
            "extra": "min 1.7ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 103.12,
            "unit": "ms",
            "extra": "min 102.08ms, stddev 1.32ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.85,
            "unit": "ms",
            "extra": "min 69.33ms, stddev 0.34ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1641.04,
            "unit": "ms",
            "extra": "min 1634.03ms, stddev 46.65ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1286.38,
            "unit": "ms",
            "extra": "min 1278.77ms, stddev 16.2ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.98,
            "unit": "ms",
            "extra": "min 1126.89ms, stddev 4.02ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1137.27,
            "unit": "ms",
            "extra": "min 1128.54ms, stddev 6.57ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1255.22,
            "unit": "ms",
            "extra": "min 1241.66ms, stddev 6.99ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1132.42,
            "unit": "ms",
            "extra": "min 1117.87ms, stddev 14.4ms"
          },
          {
            "name": "whale/asset_search",
            "value": 37.04,
            "unit": "ms",
            "extra": "min 35.62ms, stddev 1.08ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.06,
            "unit": "ms",
            "extra": "min 1.95ms, stddev 0.09ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.79,
            "unit": "ms",
            "extra": "min 1.68ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2733.09,
            "unit": "ms",
            "extra": "min 2718.25ms, stddev 14.64ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2805.85,
            "unit": "ms",
            "extra": "min 2756.16ms, stddev 24.45ms"
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
          "id": "98069d05fd7ac26405014dfea13e84eb30999fc2",
          "message": "Merge pull request #12737 from LefterisJP/indexer_fallback\n\nIndexer fallback fix",
          "timestamp": "2026-08-06T16:19:33Z",
          "url": "https://github.com/rotki/rotki/commit/98069d05fd7ac26405014dfea13e84eb30999fc2"
        },
        "date": 1786076179873,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1482.63,
            "unit": "ms",
            "extra": "min 1480.21ms, stddev 1638.56ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1135.84,
            "unit": "ms",
            "extra": "min 1121.9ms, stddev 331.71ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.22,
            "unit": "ms",
            "extra": "min 5.11ms, stddev 0.11ms"
          },
          {
            "name": "small/asset_search",
            "value": 31.34,
            "unit": "ms",
            "extra": "min 31.13ms, stddev 0.24ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.09,
            "unit": "ms",
            "extra": "min 1.85ms, stddev 0.15ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.64,
            "unit": "ms",
            "extra": "min 1.57ms, stddev 0.11ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 92.3,
            "unit": "ms",
            "extra": "min 91.8ms, stddev 6.82ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 63.93,
            "unit": "ms",
            "extra": "min 61.34ms, stddev 1.42ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1481.2,
            "unit": "ms",
            "extra": "min 1428.8ms, stddev 28.26ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1179.92,
            "unit": "ms",
            "extra": "min 1172.74ms, stddev 4.36ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1025.26,
            "unit": "ms",
            "extra": "min 1022.81ms, stddev 2.18ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1022.82,
            "unit": "ms",
            "extra": "min 1020.36ms, stddev 3.24ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1129.31,
            "unit": "ms",
            "extra": "min 1124.4ms, stddev 5.6ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1017.09,
            "unit": "ms",
            "extra": "min 1012.35ms, stddev 4.92ms"
          },
          {
            "name": "whale/asset_search",
            "value": 31.58,
            "unit": "ms",
            "extra": "min 31.16ms, stddev 0.3ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.98,
            "unit": "ms",
            "extra": "min 1.92ms, stddev 0.13ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.64,
            "unit": "ms",
            "extra": "min 1.61ms, stddev 0.1ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2459.96,
            "unit": "ms",
            "extra": "min 2453.53ms, stddev 8.34ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2546.41,
            "unit": "ms",
            "extra": "min 2534.07ms, stddev 15.75ms"
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
          "id": "d192e77b68d459bc101f066322b963f6b593206b",
          "message": "Merge pull request #12809 from yabirgb/across-prices\n\nAdd logic to ensure across LP token prices",
          "timestamp": "2026-08-07T20:41:34Z",
          "url": "https://github.com/rotki/rotki/commit/d192e77b68d459bc101f066322b963f6b593206b"
        },
        "date": 1786158876904,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1274.84,
            "unit": "ms",
            "extra": "min 1272.4ms, stddev 1452.36ms"
          },
          {
            "name": "small/user_unlock",
            "value": 998.62,
            "unit": "ms",
            "extra": "min 967.37ms, stddev 301.84ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.33,
            "unit": "ms",
            "extra": "min 4.26ms, stddev 0.18ms"
          },
          {
            "name": "small/asset_search",
            "value": 26.89,
            "unit": "ms",
            "extra": "min 26.76ms, stddev 0.49ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.8,
            "unit": "ms",
            "extra": "min 1.66ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.55,
            "unit": "ms",
            "extra": "min 1.51ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 79.86,
            "unit": "ms",
            "extra": "min 78.15ms, stddev 1.43ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 55.18,
            "unit": "ms",
            "extra": "min 52.76ms, stddev 1.54ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1273.58,
            "unit": "ms",
            "extra": "min 1270.8ms, stddev 28.06ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1035.47,
            "unit": "ms",
            "extra": "min 1017.23ms, stddev 53.06ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 884.8,
            "unit": "ms",
            "extra": "min 878.68ms, stddev 3.54ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 880.2,
            "unit": "ms",
            "extra": "min 878.42ms, stddev 1.63ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 972.32,
            "unit": "ms",
            "extra": "min 965.92ms, stddev 4.66ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 871.44,
            "unit": "ms",
            "extra": "min 868.43ms, stddev 2.64ms"
          },
          {
            "name": "whale/asset_search",
            "value": 26.99,
            "unit": "ms",
            "extra": "min 26.74ms, stddev 0.52ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.8,
            "unit": "ms",
            "extra": "min 1.71ms, stddev 0.17ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.54,
            "unit": "ms",
            "extra": "min 1.43ms, stddev 0.07ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2118.14,
            "unit": "ms",
            "extra": "min 2113.33ms, stddev 7.33ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2276.73,
            "unit": "ms",
            "extra": "min 2221.46ms, stddev 36.37ms"
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
          "id": "dc2c9bfdcbac9f02963de9838b986b78ae519ef4",
          "message": "fix(accounts): bound a read that never starts\n\n`release()` was documented as the guarantee that a waiter cannot outlive the load,\nand it is not: its caller sits behind `allSettled([fetchCached(), fetchNetValue()])`,\nand allSettled cannot settle if fetchCached never settles. A poisoned\n`prices:exchange-rates` id did exactly that, and the history sync waited forever.\n\nThe bound covers the arm→track window only, which is the one state that can hang\nwith nothing to settle it. Once a read is in flight the wait stays open: that promise\nsettles on rejection too and its requests carry their own timeouts, so expiring\nmid-read would release waiters into a half-filled store — the bug this prevents.",
          "timestamp": "2026-08-08T11:36:22Z",
          "url": "https://github.com/rotki/rotki/commit/dc2c9bfdcbac9f02963de9838b986b78ae519ef4"
        },
        "date": 1786245731106,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1749.02,
            "unit": "ms",
            "extra": "min 1739.69ms, stddev 1591.34ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1252.36,
            "unit": "ms",
            "extra": "min 1227.91ms, stddev 378.12ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.71,
            "unit": "ms",
            "extra": "min 5.49ms, stddev 0.21ms"
          },
          {
            "name": "small/asset_search",
            "value": 36.38,
            "unit": "ms",
            "extra": "min 35.12ms, stddev 1.11ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.18,
            "unit": "ms",
            "extra": "min 2.06ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.81,
            "unit": "ms",
            "extra": "min 1.75ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 120.43,
            "unit": "ms",
            "extra": "min 119.25ms, stddev 9.71ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 82.61,
            "unit": "ms",
            "extra": "min 81.4ms, stddev 0.78ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1741.12,
            "unit": "ms",
            "extra": "min 1739.79ms, stddev 1.92ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1317.35,
            "unit": "ms",
            "extra": "min 1312.64ms, stddev 6.95ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1054.69,
            "unit": "ms",
            "extra": "min 1048.74ms, stddev 2.76ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1054.47,
            "unit": "ms",
            "extra": "min 1051.51ms, stddev 2.74ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1165.71,
            "unit": "ms",
            "extra": "min 1159.32ms, stddev 4.27ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1045.52,
            "unit": "ms",
            "extra": "min 1040.13ms, stddev 3.47ms"
          },
          {
            "name": "whale/asset_search",
            "value": 36.29,
            "unit": "ms",
            "extra": "min 34.89ms, stddev 1.4ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.29,
            "unit": "ms",
            "extra": "min 2.15ms, stddev 0.14ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.93,
            "unit": "ms",
            "extra": "min 1.72ms, stddev 0.14ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2583.88,
            "unit": "ms",
            "extra": "min 2580.84ms, stddev 4.11ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2673.85,
            "unit": "ms",
            "extra": "min 2665.92ms, stddev 11.52ms"
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
          "id": "8cfedb09a2c3052b78a8d7b3eb2e97f3a05d0895",
          "message": "fix(balances): stop a failed run reading as a settled, empty portfolio\n\neverCompleted for a kind must mean we have data, not that a run happened. The run\numbrella settles COMPLETE whenever its children settle, allSettled on purpose because a\nfailure belongs to the subject that failed, so sharing its children's kind wrote a\nsuccess to the completion ledger even when every chain FAILED. Backend unreachable at\nlogin then read as a settled, empty portfolio. ActivitySpec gains container, opt-in per\numbrella: HISTORY_SYNC's umbrella IS the subject for its kind and its entry is\nload-bearing.\n\ndetect is now part of the chain job's identity. submitTask dedups by id, so a login\nsweep landing while any plain background refresh was in flight joined it and never\ndetected, with no row, no log and no error, while withDetection still recorded the\nsweep, suppressing the next login's too.\n\nHydration's reset now bumps a generation. Clearing the map was not enough: an abandoned\nread still ran its own teardown later, deleting the next session's inflight entry and\nclearing its hydrating flag mid-load.\n\nbalances-cached is dropped from STATIC_LANES. It had no constant, no cap and no producer\nonce the cached read stopped being an activity.",
          "timestamp": "2026-08-09T20:57:14Z",
          "url": "https://github.com/rotki/rotki/commit/8cfedb09a2c3052b78a8d7b3eb2e97f3a05d0895"
        },
        "date": 1786332769573,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1593.79,
            "unit": "ms",
            "extra": "min 1537.82ms, stddev 1500.17ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1440.86,
            "unit": "ms",
            "extra": "min 1253.22ms, stddev 308.56ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.9,
            "unit": "ms",
            "extra": "min 5.27ms, stddev 0.33ms"
          },
          {
            "name": "small/asset_search",
            "value": 33.69,
            "unit": "ms",
            "extra": "min 32.73ms, stddev 0.6ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.14,
            "unit": "ms",
            "extra": "min 1.83ms, stddev 0.17ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.75,
            "unit": "ms",
            "extra": "min 1.64ms, stddev 0.1ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 103.14,
            "unit": "ms",
            "extra": "min 101.4ms, stddev 0.91ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 69.41,
            "unit": "ms",
            "extra": "min 68.14ms, stddev 32.78ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1691.75,
            "unit": "ms",
            "extra": "min 1542.16ms, stddev 109.52ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1254.05,
            "unit": "ms",
            "extra": "min 1225.58ms, stddev 426.97ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1061.43,
            "unit": "ms",
            "extra": "min 1058.4ms, stddev 2.4ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1062.92,
            "unit": "ms",
            "extra": "min 1058.4ms, stddev 3.01ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1172.22,
            "unit": "ms",
            "extra": "min 1167.38ms, stddev 4.19ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1054.45,
            "unit": "ms",
            "extra": "min 1050.21ms, stddev 4.66ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.13,
            "unit": "ms",
            "extra": "min 33.57ms, stddev 0.31ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.09,
            "unit": "ms",
            "extra": "min 2.01ms, stddev 0.13ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.82,
            "unit": "ms",
            "extra": "min 1.74ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2545.4,
            "unit": "ms",
            "extra": "min 2542.47ms, stddev 8.03ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 3242.15,
            "unit": "ms",
            "extra": "min 2702.95ms, stddev 288.44ms"
          }
        ]
      }
    ]
  }
}