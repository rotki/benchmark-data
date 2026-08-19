window.BENCHMARK_DATA = {
  "lastUpdate": 1787107827500,
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
        "date": 1781678843864,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.44,
            "unit": "ms",
            "extra": "min 1746.29ms, stddev 654.62ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1648.61,
            "unit": "ms",
            "extra": "min 1593.62ms, stddev 273.52ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.94,
            "unit": "ms",
            "extra": "min 45.97ms, stddev 0.44ms"
          },
          {
            "name": "small/asset_search",
            "value": 87,
            "unit": "ms",
            "extra": "min 86.93ms, stddev 0.56ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.09,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.52ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 139.92,
            "unit": "ms",
            "extra": "min 136.99ms, stddev 1.96ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 104.97,
            "unit": "ms",
            "extra": "min 104.01ms, stddev 0.43ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1709.43,
            "unit": "ms",
            "extra": "min 1694.11ms, stddev 20.72ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1657.93,
            "unit": "ms",
            "extra": "min 1643.63ms, stddev 8.2ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1196.98,
            "unit": "ms",
            "extra": "min 1187.01ms, stddev 4.84ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1193.98,
            "unit": "ms",
            "extra": "min 1185.69ms, stddev 4.71ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1311.08,
            "unit": "ms",
            "extra": "min 1308.96ms, stddev 5.52ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1183.98,
            "unit": "ms",
            "extra": "min 1177.98ms, stddev 2.94ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87,
            "unit": "ms",
            "extra": "min 86.96ms, stddev 0.51ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.46ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2306,
            "unit": "ms",
            "extra": "min 2299.0ms, stddev 9.75ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2807,
            "unit": "ms",
            "extra": "min 2792.99ms, stddev 17.19ms"
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
        "date": 1781764265688,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1749.06,
            "unit": "ms",
            "extra": "min 1697.57ms, stddev 666.72ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1622.36,
            "unit": "ms",
            "extra": "min 1607.55ms, stddev 280.68ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.99,
            "unit": "ms",
            "extra": "min 46.96ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.97,
            "unit": "ms",
            "extra": "min 87.03ms, stddev 0.64ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.01ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.96ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.95,
            "unit": "ms",
            "extra": "min 138.03ms, stddev 1.51ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 106,
            "unit": "ms",
            "extra": "min 103.98ms, stddev 1.5ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1748.13,
            "unit": "ms",
            "extra": "min 1693.67ms, stddev 24.37ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1677.42,
            "unit": "ms",
            "extra": "min 1653.5ms, stddev 18.43ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1195.01,
            "unit": "ms",
            "extra": "min 1189.03ms, stddev 3.35ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1196.99,
            "unit": "ms",
            "extra": "min 1193.02ms, stddev 2.78ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1313.07,
            "unit": "ms",
            "extra": "min 1307.96ms, stddev 4.08ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1181.09,
            "unit": "ms",
            "extra": "min 1180.04ms, stddev 2.78ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87,
            "unit": "ms",
            "extra": "min 86.97ms, stddev 0.51ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2306.92,
            "unit": "ms",
            "extra": "min 2301.0ms, stddev 18.3ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2813.94,
            "unit": "ms",
            "extra": "min 2790.95ms, stddev 22.12ms"
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
        "date": 1781851930075,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1748.01,
            "unit": "ms",
            "extra": "min 1712.12ms, stddev 699.29ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1601.41,
            "unit": "ms",
            "extra": "min 1588.89ms, stddev 300.99ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.94,
            "unit": "ms",
            "extra": "min 46.93ms, stddev 0.01ms"
          },
          {
            "name": "small/asset_search",
            "value": 88,
            "unit": "ms",
            "extra": "min 87.98ms, stddev 0.5ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.55ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 139.08,
            "unit": "ms",
            "extra": "min 138.97ms, stddev 1.77ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 105.96,
            "unit": "ms",
            "extra": "min 104.99ms, stddev 1.16ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1748.69,
            "unit": "ms",
            "extra": "min 1747.4ms, stddev 32.72ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1683.19,
            "unit": "ms",
            "extra": "min 1651.92ms, stddev 23.32ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1201.01,
            "unit": "ms",
            "extra": "min 1199.01ms, stddev 4.02ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1199.99,
            "unit": "ms",
            "extra": "min 1199.69ms, stddev 1.7ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1317.11,
            "unit": "ms",
            "extra": "min 1309.01ms, stddev 5.7ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1192.09,
            "unit": "ms",
            "extra": "min 1186.01ms, stddev 5.06ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.8,
            "unit": "ms",
            "extra": "min 87.96ms, stddev 1.05ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.05ms, stddev 0.41ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2492.03,
            "unit": "ms",
            "extra": "min 2485.99ms, stddev 7.1ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2827,
            "unit": "ms",
            "extra": "min 2813.96ms, stddev 22.5ms"
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
        "date": 1781935556335,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1757.59,
            "unit": "ms",
            "extra": "min 1745.88ms, stddev 634.67ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1589.73,
            "unit": "ms",
            "extra": "min 1569.79ms, stddev 275.31ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.92,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.44ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.03,
            "unit": "ms",
            "extra": "min 87.99ms, stddev 0.75ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.45ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 149,
            "unit": "ms",
            "extra": "min 147.02ms, stddev 1.84ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.09,
            "unit": "ms",
            "extra": "min 110.96ms, stddev 1.28ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1747.07,
            "unit": "ms",
            "extra": "min 1745.26ms, stddev 1.29ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1653.67,
            "unit": "ms",
            "extra": "min 1640.58ms, stddev 13.62ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1127.04,
            "unit": "ms",
            "extra": "min 1118.96ms, stddev 5.82ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1122.7,
            "unit": "ms",
            "extra": "min 1121.69ms, stddev 1.18ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1236.96,
            "unit": "ms",
            "extra": "min 1234.14ms, stddev 4.71ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1108.98,
            "unit": "ms",
            "extra": "min 1103.97ms, stddev 3.17ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.99,
            "unit": "ms",
            "extra": "min 85.96ms, stddev 0.91ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.01ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2321.97,
            "unit": "ms",
            "extra": "min 2306.96ms, stddev 13.07ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2672.95,
            "unit": "ms",
            "extra": "min 2655.02ms, stddev 11.05ms"
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
        "date": 1782023888046,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1747.09,
            "unit": "ms",
            "extra": "min 1744.89ms, stddev 678.68ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1606.45,
            "unit": "ms",
            "extra": "min 1577.03ms, stddev 287.02ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.97,
            "unit": "ms",
            "extra": "min 45.93ms, stddev 0.53ms"
          },
          {
            "name": "small/asset_search",
            "value": 87,
            "unit": "ms",
            "extra": "min 86.02ms, stddev 1.14ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.84ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 147.14,
            "unit": "ms",
            "extra": "min 145.97ms, stddev 1.13ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111.03,
            "unit": "ms",
            "extra": "min 110.01ms, stddev 0.85ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1800.81,
            "unit": "ms",
            "extra": "min 1747.7ms, stddev 46.14ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1659.36,
            "unit": "ms",
            "extra": "min 1643.69ms, stddev 20.77ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1123.95,
            "unit": "ms",
            "extra": "min 1118.93ms, stddev 7.87ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1124.98,
            "unit": "ms",
            "extra": "min 1116.99ms, stddev 3.85ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1239.91,
            "unit": "ms",
            "extra": "min 1233.03ms, stddev 5.53ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1110.14,
            "unit": "ms",
            "extra": "min 1105.09ms, stddev 2.93ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.98,
            "unit": "ms",
            "extra": "min 86.0ms, stddev 1.29ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.53ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2313.07,
            "unit": "ms",
            "extra": "min 2304.0ms, stddev 9.93ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2673.08,
            "unit": "ms",
            "extra": "min 2650.02ms, stddev 13.73ms"
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
        "date": 1782112205204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1804.47,
            "unit": "ms",
            "extra": "min 1801.98ms, stddev 698.19ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1639.04,
            "unit": "ms",
            "extra": "min 1628.64ms, stddev 268.45ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.98,
            "unit": "ms",
            "extra": "min 46.93ms, stddev 0.41ms"
          },
          {
            "name": "small/asset_search",
            "value": 89.96,
            "unit": "ms",
            "extra": "min 88.98ms, stddev 0.44ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.99,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 151,
            "unit": "ms",
            "extra": "min 150.03ms, stddev 2.39ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.99,
            "unit": "ms",
            "extra": "min 111.98ms, stddev 1.13ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1802.59,
            "unit": "ms",
            "extra": "min 1801.65ms, stddev 24.62ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1683.92,
            "unit": "ms",
            "extra": "min 1682.97ms, stddev 1.83ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.04,
            "unit": "ms",
            "extra": "min 1128.96ms, stddev 3.57ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1132.99,
            "unit": "ms",
            "extra": "min 1128.04ms, stddev 2.57ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1252.17,
            "unit": "ms",
            "extra": "min 1250.95ms, stddev 0.73ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1122.04,
            "unit": "ms",
            "extra": "min 1118.15ms, stddev 2.71ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.01,
            "unit": "ms",
            "extra": "min 88.78ms, stddev 0.84ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.51ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2346.96,
            "unit": "ms",
            "extra": "min 2333.96ms, stddev 9.86ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2703.98,
            "unit": "ms",
            "extra": "min 2702.03ms, stddev 2.76ms"
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
        "date": 1782194044472,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1543.17,
            "unit": "ms",
            "extra": "min 1491.44ms, stddev 597.67ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1445.8,
            "unit": "ms",
            "extra": "min 1438.65ms, stddev 232.67ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.77ms, stddev 0.43ms"
          },
          {
            "name": "small/asset_search",
            "value": 84.97,
            "unit": "ms",
            "extra": "min 84.71ms, stddev 0.18ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.88,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.05ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 140.86,
            "unit": "ms",
            "extra": "min 138.32ms, stddev 1.87ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 102.97,
            "unit": "ms",
            "extra": "min 101.88ms, stddev 0.84ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1543.33,
            "unit": "ms",
            "extra": "min 1542.63ms, stddev 28.25ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1520.2,
            "unit": "ms",
            "extra": "min 1509.37ms, stddev 10.67ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1128.85,
            "unit": "ms",
            "extra": "min 1124.3ms, stddev 2.61ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.97,
            "unit": "ms",
            "extra": "min 1124.91ms, stddev 4.47ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1243.16,
            "unit": "ms",
            "extra": "min 1238.02ms, stddev 4.85ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1119.04,
            "unit": "ms",
            "extra": "min 1113.0ms, stddev 4.8ms"
          },
          {
            "name": "whale/asset_search",
            "value": 84.95,
            "unit": "ms",
            "extra": "min 84.76ms, stddev 0.17ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.4ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2367.95,
            "unit": "ms",
            "extra": "min 2357.94ms, stddev 6.47ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2693.13,
            "unit": "ms",
            "extra": "min 2680.19ms, stddev 10.66ms"
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
        "date": 1782280236936,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1905.69,
            "unit": "ms",
            "extra": "min 1799.5ms, stddev 720.62ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1688.94,
            "unit": "ms",
            "extra": "min 1593.31ms, stddev 324.63ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.95,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.82ms"
          },
          {
            "name": "small/asset_search",
            "value": 91.02,
            "unit": "ms",
            "extra": "min 86.96ms, stddev 2.52ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.86ms, stddev 0.45ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.54ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 155.01,
            "unit": "ms",
            "extra": "min 148.01ms, stddev 4.0ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 116.98,
            "unit": "ms",
            "extra": "min 112.01ms, stddev 2.94ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1795.11,
            "unit": "ms",
            "extra": "min 1745.96ms, stddev 65.45ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1677.32,
            "unit": "ms",
            "extra": "min 1657.58ms, stddev 23.95ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1130.01,
            "unit": "ms",
            "extra": "min 1120.02ms, stddev 16.14ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1130.02,
            "unit": "ms",
            "extra": "min 1118.52ms, stddev 13.27ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1239.83,
            "unit": "ms",
            "extra": "min 1235.13ms, stddev 16.24ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1113.1,
            "unit": "ms",
            "extra": "min 1105.01ms, stddev 15.34ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.85,
            "unit": "ms",
            "extra": "min 87.05ms, stddev 0.83ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2327.01,
            "unit": "ms",
            "extra": "min 2319.02ms, stddev 45.22ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2748.87,
            "unit": "ms",
            "extra": "min 2673.99ms, stddev 33.86ms"
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
        "date": 1782288152638,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1854.35,
            "unit": "ms",
            "extra": "min 1798.38ms, stddev 650.61ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1650.05,
            "unit": "ms",
            "extra": "min 1602.7ms, stddev 286.38ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.95ms, stddev 0.42ms"
          },
          {
            "name": "small/asset_search",
            "value": 90.02,
            "unit": "ms",
            "extra": "min 89.92ms, stddev 0.54ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.01ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.11ms, stddev 0.38ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 150.96,
            "unit": "ms",
            "extra": "min 148.96ms, stddev 2.43ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.01,
            "unit": "ms",
            "extra": "min 110.03ms, stddev 1.94ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1799.65,
            "unit": "ms",
            "extra": "min 1747.55ms, stddev 28.71ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1669.88,
            "unit": "ms",
            "extra": "min 1658.5ms, stddev 9.4ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1126.89,
            "unit": "ms",
            "extra": "min 1119.88ms, stddev 4.63ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.01,
            "unit": "ms",
            "extra": "min 1122.02ms, stddev 2.57ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1243.98,
            "unit": "ms",
            "extra": "min 1238.05ms, stddev 3.06ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1111.04,
            "unit": "ms",
            "extra": "min 1108.02ms, stddev 2.53ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.81,
            "unit": "ms",
            "extra": "min 88.12ms, stddev 0.96ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.02,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.55ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2337.95,
            "unit": "ms",
            "extra": "min 2328.95ms, stddev 4.75ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 2686.05,
            "unit": "ms",
            "extra": "min 2670.97ms, stddev 9.12ms"
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
        "date": 1785214444224,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1746.1,
            "unit": "ms",
            "extra": "min 1691.99ms, stddev 624.14ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1329.3,
            "unit": "ms",
            "extra": "min 1321.57ms, stddev 262.63ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.95,
            "unit": "ms",
            "extra": "min 45.85ms, stddev 0.05ms"
          },
          {
            "name": "small/asset_search",
            "value": 84,
            "unit": "ms",
            "extra": "min 83.92ms, stddev 0.83ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.93ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 133,
            "unit": "ms",
            "extra": "min 132.96ms, stddev 1.1ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 105.99,
            "unit": "ms",
            "extra": "min 105.95ms, stddev 0.9ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1730.36,
            "unit": "ms",
            "extra": "min 1691.26ms, stddev 29.81ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1403.6,
            "unit": "ms",
            "extra": "min 1387.73ms, stddev 10.14ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1121,
            "unit": "ms",
            "extra": "min 1114.03ms, stddev 4.87ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1121.02,
            "unit": "ms",
            "extra": "min 1114.67ms, stddev 3.19ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1238.14,
            "unit": "ms",
            "extra": "min 1233.02ms, stddev 4.26ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1107.15,
            "unit": "ms",
            "extra": "min 1105.05ms, stddev 2.2ms"
          },
          {
            "name": "whale/asset_search",
            "value": 84.99,
            "unit": "ms",
            "extra": "min 83.96ms, stddev 0.56ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.51ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2247.03,
            "unit": "ms",
            "extra": "min 2244.08ms, stddev 5.62ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1788.04,
            "unit": "ms",
            "extra": "min 1780.05ms, stddev 7.27ms"
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
        "date": 1785301127829,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1856.57,
            "unit": "ms",
            "extra": "min 1802.62ms, stddev 630.99ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1365.84,
            "unit": "ms",
            "extra": "min 1357.72ms, stddev 272.92ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.03,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.52ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.01,
            "unit": "ms",
            "extra": "min 86.01ms, stddev 0.79ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.89,
            "unit": "ms",
            "extra": "min 42.79ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.04,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.41ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.01,
            "unit": "ms",
            "extra": "min 137.0ms, stddev 3.03ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109.96,
            "unit": "ms",
            "extra": "min 109.0ms, stddev 1.28ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1857.19,
            "unit": "ms",
            "extra": "min 1791.48ms, stddev 51.98ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1461.48,
            "unit": "ms",
            "extra": "min 1431.42ms, stddev 19.27ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1142.02,
            "unit": "ms",
            "extra": "min 1134.84ms, stddev 6.89ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1142,
            "unit": "ms",
            "extra": "min 1134.96ms, stddev 5.24ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1261.13,
            "unit": "ms",
            "extra": "min 1250.98ms, stddev 5.3ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1128.99,
            "unit": "ms",
            "extra": "min 1121.03ms, stddev 4.68ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.8,
            "unit": "ms",
            "extra": "min 86.96ms, stddev 0.84ms"
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
            "extra": "min 42.0ms, stddev 0.52ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2308.09,
            "unit": "ms",
            "extra": "min 2292.98ms, stddev 11.39ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1824.9,
            "unit": "ms",
            "extra": "min 1816.97ms, stddev 14.03ms"
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
        "date": 1785386771658,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1799.37,
            "unit": "ms",
            "extra": "min 1798.73ms, stddev 659.62ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1397.72,
            "unit": "ms",
            "extra": "min 1354.5ms, stddev 282.5ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.95,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.47ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.97,
            "unit": "ms",
            "extra": "min 84.99ms, stddev 1.66ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.55ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 137,
            "unit": "ms",
            "extra": "min 134.99ms, stddev 2.81ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 110.03,
            "unit": "ms",
            "extra": "min 108.0ms, stddev 1.9ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1801.14,
            "unit": "ms",
            "extra": "min 1742.89ms, stddev 46.72ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1415.31,
            "unit": "ms",
            "extra": "min 1404.16ms, stddev 17.38ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1123.22,
            "unit": "ms",
            "extra": "min 1122.31ms, stddev 6.28ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1127.04,
            "unit": "ms",
            "extra": "min 1119.0ms, stddev 4.83ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1254.91,
            "unit": "ms",
            "extra": "min 1244.05ms, stddev 6.35ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1121.02,
            "unit": "ms",
            "extra": "min 1113.0ms, stddev 8.93ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.92,
            "unit": "ms",
            "extra": "min 84.0ms, stddev 1.14ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.54ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.44ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2280,
            "unit": "ms",
            "extra": "min 2263.0ms, stddev 16.94ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1799.99,
            "unit": "ms",
            "extra": "min 1789.95ms, stddev 20.08ms"
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
        "date": 1785474738173,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1746.27,
            "unit": "ms",
            "extra": "min 1693.37ms, stddev 676.45ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1345.66,
            "unit": "ms",
            "extra": "min 1342.91ms, stddev 281.22ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.94,
            "unit": "ms",
            "extra": "min 45.91ms, stddev 0.44ms"
          },
          {
            "name": "small/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.97ms, stddev 1.11ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.45ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.42ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 128.99,
            "unit": "ms",
            "extra": "min 126.96ms, stddev 2.27ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 102.98,
            "unit": "ms",
            "extra": "min 101.95ms, stddev 1.32ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1693.78,
            "unit": "ms",
            "extra": "min 1693.0ms, stddev 48.57ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1415.64,
            "unit": "ms",
            "extra": "min 1404.44ms, stddev 26.85ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1200.02,
            "unit": "ms",
            "extra": "min 1196.01ms, stddev 3.89ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1198.99,
            "unit": "ms",
            "extra": "min 1193.99ms, stddev 6.25ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1319.93,
            "unit": "ms",
            "extra": "min 1316.0ms, stddev 13.2ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1188.94,
            "unit": "ms",
            "extra": "min 1184.07ms, stddev 5.04ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 83.99ms, stddev 1.06ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.43ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.41ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2430.93,
            "unit": "ms",
            "extra": "min 2420.02ms, stddev 10.95ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1889.93,
            "unit": "ms",
            "extra": "min 1883.98ms, stddev 15.51ms"
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
        "date": 1785560588121,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1431.73,
            "unit": "ms",
            "extra": "min 1381.02ms, stddev 545.07ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1063.33,
            "unit": "ms",
            "extra": "min 1054.23ms, stddev 285.71ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 44.94,
            "unit": "ms",
            "extra": "min 44.92ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 75.89,
            "unit": "ms",
            "extra": "min 74.99ms, stddev 0.65ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.01ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 108.98,
            "unit": "ms",
            "extra": "min 107.98ms, stddev 101.67ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 89.97,
            "unit": "ms",
            "extra": "min 88.7ms, stddev 0.91ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1380.09,
            "unit": "ms",
            "extra": "min 1329.67ms, stddev 78.61ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1131.08,
            "unit": "ms",
            "extra": "min 1106.63ms, stddev 27.69ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 952.25,
            "unit": "ms",
            "extra": "min 948.03ms, stddev 2.96ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 951,
            "unit": "ms",
            "extra": "min 947.78ms, stddev 3.08ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1040.97,
            "unit": "ms",
            "extra": "min 1038.98ms, stddev 2.48ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 940.01,
            "unit": "ms",
            "extra": "min 937.01ms, stddev 2.39ms"
          },
          {
            "name": "whale/asset_search",
            "value": 75.02,
            "unit": "ms",
            "extra": "min 74.97ms, stddev 0.55ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1902.05,
            "unit": "ms",
            "extra": "min 1900.03ms, stddev 2.91ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1534.02,
            "unit": "ms",
            "extra": "min 1518.98ms, stddev 85.99ms"
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
        "date": 1785647148817,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1906.65,
            "unit": "ms",
            "extra": "min 1854.91ms, stddev 694.41ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1418.86,
            "unit": "ms",
            "extra": "min 1410.98ms, stddev 270.74ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.96,
            "unit": "ms",
            "extra": "min 46.93ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.81,
            "unit": "ms",
            "extra": "min 87.78ms, stddev 0.51ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.83ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 141.08,
            "unit": "ms",
            "extra": "min 139.04ms, stddev 2.05ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 112.95,
            "unit": "ms",
            "extra": "min 110.01ms, stddev 2.06ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1906.95,
            "unit": "ms",
            "extra": "min 1855.28ms, stddev 43.65ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1476.3,
            "unit": "ms",
            "extra": "min 1465.37ms, stddev 11.15ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1144.97,
            "unit": "ms",
            "extra": "min 1141.02ms, stddev 1.99ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1146.05,
            "unit": "ms",
            "extra": "min 1144.04ms, stddev 1.58ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1266.16,
            "unit": "ms",
            "extra": "min 1256.04ms, stddev 5.85ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1132.05,
            "unit": "ms",
            "extra": "min 1125.94ms, stddev 4.67ms"
          },
          {
            "name": "whale/asset_search",
            "value": 88.02,
            "unit": "ms",
            "extra": "min 87.84ms, stddev 1.74ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.52ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2311.1,
            "unit": "ms",
            "extra": "min 2296.06ms, stddev 12.2ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1850.98,
            "unit": "ms",
            "extra": "min 1843.99ms, stddev 9.57ms"
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
        "date": 1785734003310,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 970.49,
            "unit": "ms",
            "extra": "min 968.62ms, stddev 718.9ms"
          },
          {
            "name": "small/user_unlock",
            "value": 947.82,
            "unit": "ms",
            "extra": "min 735.08ms, stddev 188.73ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 43.92,
            "unit": "ms",
            "extra": "min 43.85ms, stddev 0.09ms"
          },
          {
            "name": "small/asset_search",
            "value": 64.93,
            "unit": "ms",
            "extra": "min 63.98ms, stddev 0.44ms"
          },
          {
            "name": "small/manual_balances",
            "value": 41.94,
            "unit": "ms",
            "extra": "min 41.87ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 40.99,
            "unit": "ms",
            "extra": "min 40.97ms, stddev 0.43ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 91.94,
            "unit": "ms",
            "extra": "min 86.98ms, stddev 2.51ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 73.03,
            "unit": "ms",
            "extra": "min 71.99ms, stddev 11.24ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 969.02,
            "unit": "ms",
            "extra": "min 917.94ms, stddev 119.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 816.81,
            "unit": "ms",
            "extra": "min 762.48ms, stddev 142.72ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 638.99,
            "unit": "ms",
            "extra": "min 635.98ms, stddev 1.66ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 636.92,
            "unit": "ms",
            "extra": "min 633.93ms, stddev 2.92ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 700,
            "unit": "ms",
            "extra": "min 698.0ms, stddev 1.77ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 632.99,
            "unit": "ms",
            "extra": "min 629.05ms, stddev 3.02ms"
          },
          {
            "name": "whale/asset_search",
            "value": 64,
            "unit": "ms",
            "extra": "min 62.99ms, stddev 0.45ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 41.95,
            "unit": "ms",
            "extra": "min 41.92ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41,
            "unit": "ms",
            "extra": "min 40.98ms, stddev 0.44ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1260,
            "unit": "ms",
            "extra": "min 1252.08ms, stddev 7.28ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1023,
            "unit": "ms",
            "extra": "min 1004.94ms, stddev 11.12ms"
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
        "date": 1785819204247,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1852.68,
            "unit": "ms",
            "extra": "min 1802.58ms, stddev 661.8ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1464.77,
            "unit": "ms",
            "extra": "min 1362.88ms, stddev 283.35ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.01,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.92ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.05,
            "unit": "ms",
            "extra": "min 84.99ms, stddev 3.1ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.89,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.45ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.43ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.98,
            "unit": "ms",
            "extra": "min 136.95ms, stddev 5.27ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111.07,
            "unit": "ms",
            "extra": "min 109.99ms, stddev 1.92ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1854.68,
            "unit": "ms",
            "extra": "min 1801.51ms, stddev 111.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1450.42,
            "unit": "ms",
            "extra": "min 1422.95ms, stddev 42.03ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1143.41,
            "unit": "ms",
            "extra": "min 1138.04ms, stddev 3.54ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1140.67,
            "unit": "ms",
            "extra": "min 1132.03ms, stddev 4.93ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1254.12,
            "unit": "ms",
            "extra": "min 1248.0ms, stddev 11.74ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1124.15,
            "unit": "ms",
            "extra": "min 1122.9ms, stddev 3.81ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.86,
            "unit": "ms",
            "extra": "min 86.02ms, stddev 1.85ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.03,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.52ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2290.03,
            "unit": "ms",
            "extra": "min 2277.05ms, stddev 8.4ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1819,
            "unit": "ms",
            "extra": "min 1808.03ms, stddev 6.82ms"
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
        "date": 1785905618591,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1381.14,
            "unit": "ms",
            "extra": "min 1330.15ms, stddev 559.66ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1070.84,
            "unit": "ms",
            "extra": "min 1062.94ms, stddev 216.08ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 44.95,
            "unit": "ms",
            "extra": "min 44.88ms, stddev 0.48ms"
          },
          {
            "name": "small/asset_search",
            "value": 75.89,
            "unit": "ms",
            "extra": "min 74.97ms, stddev 1.06ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.01,
            "unit": "ms",
            "extra": "min 41.93ms, stddev 0.42ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 108.99,
            "unit": "ms",
            "extra": "min 108.01ms, stddev 48.39ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 89.01,
            "unit": "ms",
            "extra": "min 88.98ms, stddev 37.36ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1382.3,
            "unit": "ms",
            "extra": "min 1328.74ms, stddev 43.99ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1151.12,
            "unit": "ms",
            "extra": "min 1117.57ms, stddev 41.29ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 953.89,
            "unit": "ms",
            "extra": "min 947.05ms, stddev 4.88ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 951.71,
            "unit": "ms",
            "extra": "min 948.93ms, stddev 3.34ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1041,
            "unit": "ms",
            "extra": "min 1035.0ms, stddev 4.37ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 942.01,
            "unit": "ms",
            "extra": "min 933.07ms, stddev 6.01ms"
          },
          {
            "name": "whale/asset_search",
            "value": 76.83,
            "unit": "ms",
            "extra": "min 74.98ms, stddev 1.07ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.87,
            "unit": "ms",
            "extra": "min 42.04ms, stddev 0.47ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.44ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1922.01,
            "unit": "ms",
            "extra": "min 1912.99ms, stddev 11.67ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1572.95,
            "unit": "ms",
            "extra": "min 1537.02ms, stddev 48.16ms"
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
        "date": 1785992083847,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1490.49,
            "unit": "ms",
            "extra": "min 1489.35ms, stddev 525.63ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1187.06,
            "unit": "ms",
            "extra": "min 1179.85ms, stddev 228.91ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46,
            "unit": "ms",
            "extra": "min 45.71ms, stddev 0.15ms"
          },
          {
            "name": "small/asset_search",
            "value": 81.05,
            "unit": "ms",
            "extra": "min 80.97ms, stddev 0.64ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.72ms, stddev 0.16ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.43ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 126.01,
            "unit": "ms",
            "extra": "min 123.05ms, stddev 30.56ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 98.06,
            "unit": "ms",
            "extra": "min 96.99ms, stddev 1.26ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1488.71,
            "unit": "ms",
            "extra": "min 1436.57ms, stddev 22.83ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1253.05,
            "unit": "ms",
            "extra": "min 1249.16ms, stddev 6.67ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1118.65,
            "unit": "ms",
            "extra": "min 1110.13ms, stddev 3.81ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1119.62,
            "unit": "ms",
            "extra": "min 1110.09ms, stddev 4.58ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1233.06,
            "unit": "ms",
            "extra": "min 1227.05ms, stddev 3.35ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1111.09,
            "unit": "ms",
            "extra": "min 1104.15ms, stddev 3.57ms"
          },
          {
            "name": "whale/asset_search",
            "value": 81.75,
            "unit": "ms",
            "extra": "min 81.06ms, stddev 0.43ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.84,
            "unit": "ms",
            "extra": "min 42.8ms, stddev 0.04ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.33ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2280,
            "unit": "ms",
            "extra": "min 2275.11ms, stddev 10.84ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1760.83,
            "unit": "ms",
            "extra": "min 1749.01ms, stddev 6.62ms"
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
        "date": 1786076462794,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1433.21,
            "unit": "ms",
            "extra": "min 1431.66ms, stddev 590.87ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1161.6,
            "unit": "ms",
            "extra": "min 1154.93ms, stddev 228.85ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.87,
            "unit": "ms",
            "extra": "min 45.84ms, stddev 0.03ms"
          },
          {
            "name": "small/asset_search",
            "value": 80.95,
            "unit": "ms",
            "extra": "min 79.81ms, stddev 1.13ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.73ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.96,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 122.99,
            "unit": "ms",
            "extra": "min 122.01ms, stddev 20.11ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 96.88,
            "unit": "ms",
            "extra": "min 94.02ms, stddev 1.39ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1432.19,
            "unit": "ms",
            "extra": "min 1417.97ms, stddev 6.44ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1228.79,
            "unit": "ms",
            "extra": "min 1211.18ms, stddev 11.86ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1091.99,
            "unit": "ms",
            "extra": "min 1086.99ms, stddev 4.13ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1089.99,
            "unit": "ms",
            "extra": "min 1086.99ms, stddev 5.87ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1203.01,
            "unit": "ms",
            "extra": "min 1202.11ms, stddev 7.73ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1081,
            "unit": "ms",
            "extra": "min 1076.99ms, stddev 7.01ms"
          },
          {
            "name": "whale/asset_search",
            "value": 80.03,
            "unit": "ms",
            "extra": "min 79.94ms, stddev 0.5ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.83ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.94ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2211.18,
            "unit": "ms",
            "extra": "min 2202.05ms, stddev 13.94ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1749.88,
            "unit": "ms",
            "extra": "min 1745.19ms, stddev 10.36ms"
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
        "date": 1786159182697,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1855.75,
            "unit": "ms",
            "extra": "min 1855.23ms, stddev 670.15ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1414.67,
            "unit": "ms",
            "extra": "min 1389.44ms, stddev 274.66ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.99,
            "unit": "ms",
            "extra": "min 46.92ms, stddev 0.04ms"
          },
          {
            "name": "small/asset_search",
            "value": 88.03,
            "unit": "ms",
            "extra": "min 87.96ms, stddev 0.77ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.94,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.95ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 141.91,
            "unit": "ms",
            "extra": "min 138.97ms, stddev 2.39ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111.99,
            "unit": "ms",
            "extra": "min 111.01ms, stddev 1.52ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1857.5,
            "unit": "ms",
            "extra": "min 1849.01ms, stddev 57.87ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1481.99,
            "unit": "ms",
            "extra": "min 1430.46ms, stddev 37.38ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1144.97,
            "unit": "ms",
            "extra": "min 1136.93ms, stddev 7.52ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1148,
            "unit": "ms",
            "extra": "min 1137.76ms, stddev 6.13ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1267.01,
            "unit": "ms",
            "extra": "min 1251.2ms, stddev 9.72ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1136,
            "unit": "ms",
            "extra": "min 1112.02ms, stddev 11.2ms"
          },
          {
            "name": "whale/asset_search",
            "value": 89.02,
            "unit": "ms",
            "extra": "min 88.05ms, stddev 1.44ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 43.87,
            "unit": "ms",
            "extra": "min 42.96ms, stddev 0.51ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2329.03,
            "unit": "ms",
            "extra": "min 2282.99ms, stddev 20.89ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1851.96,
            "unit": "ms",
            "extra": "min 1813.98ms, stddev 21.48ms"
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
        "date": 1786246033954,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1856.92,
            "unit": "ms",
            "extra": "min 1855.28ms, stddev 667.14ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1370.61,
            "unit": "ms",
            "extra": "min 1365.51ms, stddev 281.78ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 47.03,
            "unit": "ms",
            "extra": "min 46.92ms, stddev 0.56ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.94,
            "unit": "ms",
            "extra": "min 86.88ms, stddev 0.73ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.97ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.93,
            "unit": "ms",
            "extra": "min 137.97ms, stddev 1.28ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 111.98,
            "unit": "ms",
            "extra": "min 110.96ms, stddev 0.71ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1848.38,
            "unit": "ms",
            "extra": "min 1803.07ms, stddev 27.13ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1449.39,
            "unit": "ms",
            "extra": "min 1439.75ms, stddev 10.51ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1136.99,
            "unit": "ms",
            "extra": "min 1134.15ms, stddev 2.57ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1138.97,
            "unit": "ms",
            "extra": "min 1137.7ms, stddev 1.72ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1255.17,
            "unit": "ms",
            "extra": "min 1251.92ms, stddev 1.85ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1125.89,
            "unit": "ms",
            "extra": "min 1122.96ms, stddev 1.43ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.01,
            "unit": "ms",
            "extra": "min 86.91ms, stddev 0.57ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.9ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.94ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2308.06,
            "unit": "ms",
            "extra": "min 2299.02ms, stddev 7.28ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1828.96,
            "unit": "ms",
            "extra": "min 1824.98ms, stddev 2.62ms"
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
        "date": 1786333058233,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1798.97,
            "unit": "ms",
            "extra": "min 1748.35ms, stddev 663.37ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1349.14,
            "unit": "ms",
            "extra": "min 1340.2ms, stddev 276.72ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.95,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.02ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.01,
            "unit": "ms",
            "extra": "min 84.0ms, stddev 0.46ms"
          },
          {
            "name": "small/manual_balances",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.42ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.01ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 135.99,
            "unit": "ms",
            "extra": "min 134.98ms, stddev 0.7ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109,
            "unit": "ms",
            "extra": "min 107.04ms, stddev 1.12ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1783.99,
            "unit": "ms",
            "extra": "min 1742.9ms, stddev 45.86ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1422.56,
            "unit": "ms",
            "extra": "min 1391.98ms, stddev 16.39ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1125.01,
            "unit": "ms",
            "extra": "min 1119.31ms, stddev 2.79ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1123.99,
            "unit": "ms",
            "extra": "min 1117.02ms, stddev 4.01ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1244.97,
            "unit": "ms",
            "extra": "min 1237.01ms, stddev 3.82ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1111.01,
            "unit": "ms",
            "extra": "min 1102.02ms, stddev 8.3ms"
          },
          {
            "name": "whale/asset_search",
            "value": 84.99,
            "unit": "ms",
            "extra": "min 83.97ms, stddev 1.59ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.02,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.42ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2274.04,
            "unit": "ms",
            "extra": "min 2248.1ms, stddev 13.74ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1801.99,
            "unit": "ms",
            "extra": "min 1775.0ms, stddev 17.97ms"
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
          "id": "b4f7bdabfc2d5b2aa8a26dd062093fdaf93b37b7",
          "message": "feat(assets): filter asset locations from the pill bar\n\nThe per-asset locations table filtered through three selectors of its own\nabove the table: a location picker, an account picker and a tag picker.\nThey are now fields on the pill bar, like every other table, and the last\nuser of TagFilter.vue goes with them.\n\nPicking a location also used to compare the row's location through\ngetChainName with the picked one through toSentenceCase. The two disagree\non any id that is more than one word: polygon_pos reads as Polygon PoS on\none side and Polygon_pos on the other, so picking such a location matched\nnothing and left the table empty under an unchanged filter. Both sides are\nthe raw id the row already carries, so they are now compared as they are.\nThe test that covered this only used single-word ids, where the two\nformatters happen to agree; it now uses one of each.",
          "timestamp": "2026-08-10T20:37:11Z",
          "url": "https://github.com/rotki/rotki/commit/b4f7bdabfc2d5b2aa8a26dd062093fdaf93b37b7"
        },
        "date": 1786419026366,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1801.94,
            "unit": "ms",
            "extra": "min 1749.71ms, stddev 661.09ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1372.38,
            "unit": "ms",
            "extra": "min 1341.29ms, stddev 265.62ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.52ms"
          },
          {
            "name": "small/asset_search",
            "value": 86,
            "unit": "ms",
            "extra": "min 84.97ms, stddev 0.66ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.82,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.39ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.46ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 136.04,
            "unit": "ms",
            "extra": "min 135.98ms, stddev 0.87ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109.04,
            "unit": "ms",
            "extra": "min 108.98ms, stddev 0.85ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1749.85,
            "unit": "ms",
            "extra": "min 1748.51ms, stddev 1.82ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1416.04,
            "unit": "ms",
            "extra": "min 1401.51ms, stddev 7.15ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1124.94,
            "unit": "ms",
            "extra": "min 1124.0ms, stddev 0.79ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.72,
            "unit": "ms",
            "extra": "min 1125.7ms, stddev 3.02ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1244.17,
            "unit": "ms",
            "extra": "min 1241.04ms, stddev 1.79ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1114,
            "unit": "ms",
            "extra": "min 1112.11ms, stddev 0.85ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.02ms, stddev 1.42ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.87,
            "unit": "ms",
            "extra": "min 42.05ms, stddev 0.38ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.09,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.52ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2269.06,
            "unit": "ms",
            "extra": "min 2266.08ms, stddev 5.04ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1811.03,
            "unit": "ms",
            "extra": "min 1797.94ms, stddev 8.56ms"
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
          "id": "70e394bcf38cc49bf90a9afa259528be4d851abd",
          "message": "chore(deps): update @rotki/ui-library to 2.23.4\n\nTwo releases in one step, since the app was still on 2.23.2.\n\n2.23.3 carries the persistent-menu escape fix (#567), the icon registration\nwarning fix (#568) and the category picker's selection overlay fix (#559).\n2.23.4 adds a track behind the circular progress arc with a label that scales\nwith its size, the menu select's clear button no longer overlapping the\nchevron, and a consumer class now beating the variant class on both\nRuiNavigationDrawer and RuiIcon.\n\nDrop the `mr-16` that held the direction badge clear of the category picker's\nchevron: #559 shipped, so the selection layer no longer overflows the field.\n\nTwo visible knock-on effects from the class-merge fixes, both of them the\nmarkup finally doing what it already asked for:\n- `HistoryRedecodeSelection`'s chevron carries `size-4`, which until now lost\n  to the icon's own box and rendered at the button's icon size.\n- `PinnedSidebar` can drop the `!` from `!z-[6]` whenever convenient; the\n  important flag still works, so nothing is urgent.",
          "timestamp": "2026-08-11T16:09:38Z",
          "url": "https://github.com/rotki/rotki/commit/70e394bcf38cc49bf90a9afa259528be4d851abd"
        },
        "date": 1786506550204,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1746.06,
            "unit": "ms",
            "extra": "min 1695.81ms, stddev 744.76ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1360.95,
            "unit": "ms",
            "extra": "min 1334.89ms, stddev 336.54ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.9,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.53ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.82,
            "unit": "ms",
            "extra": "min 85.0ms, stddev 0.49ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 42.85ms, stddev 0.04ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.14,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.51ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 127.98,
            "unit": "ms",
            "extra": "min 126.99ms, stddev 0.69ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 103.01,
            "unit": "ms",
            "extra": "min 102.97ms, stddev 0.55ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1749.39,
            "unit": "ms",
            "extra": "min 1747.79ms, stddev 3.15ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1435.71,
            "unit": "ms",
            "extra": "min 1427.84ms, stddev 5.76ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1202.1,
            "unit": "ms",
            "extra": "min 1199.96ms, stddev 3.89ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1203.97,
            "unit": "ms",
            "extra": "min 1198.0ms, stddev 5.06ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1326.96,
            "unit": "ms",
            "extra": "min 1317.19ms, stddev 4.81ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1197.04,
            "unit": "ms",
            "extra": "min 1191.02ms, stddev 3.85ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.99,
            "unit": "ms",
            "extra": "min 84.0ms, stddev 1.08ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.96,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.05ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.54ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2449.95,
            "unit": "ms",
            "extra": "min 2427.04ms, stddev 12.4ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1920.99,
            "unit": "ms",
            "extra": "min 1891.91ms, stddev 13.08ms"
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
          "id": "91060aad11a69c156d7bdae6df3b03700faed3c4",
          "message": "refactor(frontend): validate the snapshot edit forms with zod\n\nMoves the three snapshot edit forms off vuelidate and onto the useForm\ncore, with the rules in a pure snapshot-forms module. The per-field\nwritable computeds go with them: useForm owns one reactive state the\ntemplates bind into, so useRefPropVModel and useFormStateWatcher are\ndeleted rather than carried across.\n\nThe gate is unchanged. EditBalancesSnapshotForm still validates only the\ncategory and the location, and the price sub-form still exposes no\nvalidate(), so its messages stay decorative.\n\nTwo behaviour notes:\n\n- stateUpdated now tracks form.dirty. A plain dirty check covers the\n  whole entry, and the price fetch rewrites the value on mount, which\n  armed the dialog's unsaved-changes prompt before the user touched\n  anything. transientKeys narrows it back to the fields each form gates.\n- Messages appear on blur rather than on the first keystroke, matching\n  $autoDirty's replacement across the migrated forms.",
          "timestamp": "2026-08-12T22:29:07Z",
          "url": "https://github.com/rotki/rotki/commit/91060aad11a69c156d7bdae6df3b03700faed3c4"
        },
        "date": 1786593107166,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1797.38,
            "unit": "ms",
            "extra": "min 1747.1ms, stddev 653.48ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1367.43,
            "unit": "ms",
            "extra": "min 1352.39ms, stddev 295.4ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.97,
            "unit": "ms",
            "extra": "min 45.94ms, stddev 0.53ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.01,
            "unit": "ms",
            "extra": "min 84.97ms, stddev 0.42ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.88,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.5ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 136.96,
            "unit": "ms",
            "extra": "min 135.04ms, stddev 1.12ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109.01,
            "unit": "ms",
            "extra": "min 108.97ms, stddev 0.56ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1754.5,
            "unit": "ms",
            "extra": "min 1746.36ms, stddev 27.93ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1411.11,
            "unit": "ms",
            "extra": "min 1401.44ms, stddev 4.57ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1126.95,
            "unit": "ms",
            "extra": "min 1122.02ms, stddev 2.39ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1126.02,
            "unit": "ms",
            "extra": "min 1123.0ms, stddev 3.05ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1243.13,
            "unit": "ms",
            "extra": "min 1238.16ms, stddev 3.23ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1114,
            "unit": "ms",
            "extra": "min 1106.02ms, stddev 3.64ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.97,
            "unit": "ms",
            "extra": "min 83.99ms, stddev 0.9ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.42ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.02ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2269.03,
            "unit": "ms",
            "extra": "min 2256.06ms, stddev 6.91ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1794,
            "unit": "ms",
            "extra": "min 1786.92ms, stddev 6.49ms"
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
          "id": "f903db4176fff35b7611408f992e5482f268e752",
          "message": "refactor(frontend): take the device server errors from the core\n\n`useModelForm` grew a `serverErrors` option, so the hand-rolled mirror goes. The core's watch is\ndeep, which the local one was not, so errors mutated in place rather than reassigned now render.\n\nBoth model forms also gain the round trip they had no coverage for: an edit reaching the model the\ndialog above holds, and a change made outside the form reaching the field. Each spec mounts a\nparent holding a real ref, since the shared `mountModelForm` fits neither form: it is typed for an\nobject payload, while the device name is a bare string bridged through a writable computed, and it\nbinds a `stateUpdated` prop the range selector does not declare.",
          "timestamp": "2026-08-13T20:19:05Z",
          "url": "https://github.com/rotki/rotki/commit/f903db4176fff35b7611408f992e5482f268e752"
        },
        "date": 1786679357639,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1800.99,
            "unit": "ms",
            "extra": "min 1798.13ms, stddev 639.97ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1363.31,
            "unit": "ms",
            "extra": "min 1338.59ms, stddev 272.65ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.92,
            "unit": "ms",
            "extra": "min 45.88ms, stddev 0.58ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.98,
            "unit": "ms",
            "extra": "min 84.0ms, stddev 1.94ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.41ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 136.02,
            "unit": "ms",
            "extra": "min 134.96ms, stddev 30.76ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 108.93,
            "unit": "ms",
            "extra": "min 107.99ms, stddev 0.7ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1797.82,
            "unit": "ms",
            "extra": "min 1745.86ms, stddev 28.89ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1418.64,
            "unit": "ms",
            "extra": "min 1409.3ms, stddev 11.58ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1134.07,
            "unit": "ms",
            "extra": "min 1125.98ms, stddev 5.0ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1133.69,
            "unit": "ms",
            "extra": "min 1127.65ms, stddev 4.14ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1254,
            "unit": "ms",
            "extra": "min 1248.97ms, stddev 2.55ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1120.05,
            "unit": "ms",
            "extra": "min 1116.08ms, stddev 3.02ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85.02,
            "unit": "ms",
            "extra": "min 84.95ms, stddev 0.44ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.01ms, stddev 0.41ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.01ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2277.11,
            "unit": "ms",
            "extra": "min 2273.9ms, stddev 11.57ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1800.97,
            "unit": "ms",
            "extra": "min 1796.99ms, stddev 6.13ms"
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
          "id": "610b6411579f026de0cec1da155a18e461f527ff",
          "message": "fix(dev): honour the instance data directory in electron\n\n`pnpm dev --instance` hands the electron child five instance variables\n(scripts/dev/services.ts). Four of them, the ports, are read in\napplication.ts. ROTKI_INSTANCE_DATA_DIR was read nowhere: it appeared\nexactly once in the tree, on the line that writes it.\n\nSo an instance isolated its ports and then opened the shared data\ndirectory anyway. It took that directory's lock, which meant an instance\ncould not run beside another rotki at all — it exited with code 3,\n\"data directory is already in use\" — and the ~5 GB the instance had just\nseeded went unused.\n\nloadConfig now applies the variable after the config file, so the\ninstance wins: an instance exists precisely so as not to touch the\nshared data. That meant dropping the early return for a missing config\nfile, which is the common case and would have skipped the override.\n\nAn empty value is ignored rather than treated as a directory, so an\nunset instance cannot blank out a configured data-dir.",
          "timestamp": "2026-08-14T14:47:17Z",
          "url": "https://github.com/rotki/rotki/commit/610b6411579f026de0cec1da155a18e461f527ff"
        },
        "date": 1786761836799,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1859.45,
            "unit": "ms",
            "extra": "min 1801.9ms, stddev 713.05ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1409.52,
            "unit": "ms",
            "extra": "min 1391.22ms, stddev 273.87ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.92,
            "unit": "ms",
            "extra": "min 45.93ms, stddev 0.71ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.06,
            "unit": "ms",
            "extra": "min 86.82ms, stddev 1.28ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.89ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.45ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 139,
            "unit": "ms",
            "extra": "min 138.0ms, stddev 0.46ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 110.99,
            "unit": "ms",
            "extra": "min 109.01ms, stddev 1.37ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1907.18,
            "unit": "ms",
            "extra": "min 1848.98ms, stddev 46.49ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1470.58,
            "unit": "ms",
            "extra": "min 1447.75ms, stddev 35.04ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1137.95,
            "unit": "ms",
            "extra": "min 1132.99ms, stddev 6.99ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1141,
            "unit": "ms",
            "extra": "min 1124.09ms, stddev 9.93ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1259.97,
            "unit": "ms",
            "extra": "min 1249.16ms, stddev 7.06ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1128.86,
            "unit": "ms",
            "extra": "min 1117.96ms, stddev 6.25ms"
          },
          {
            "name": "whale/asset_search",
            "value": 87.99,
            "unit": "ms",
            "extra": "min 85.01ms, stddev 1.62ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.45ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.54ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2296.97,
            "unit": "ms",
            "extra": "min 2285.14ms, stddev 23.8ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1826,
            "unit": "ms",
            "extra": "min 1810.93ms, stddev 21.94ms"
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
          "id": "610b6411579f026de0cec1da155a18e461f527ff",
          "message": "fix(dev): honour the instance data directory in electron\n\n`pnpm dev --instance` hands the electron child five instance variables\n(scripts/dev/services.ts). Four of them, the ports, are read in\napplication.ts. ROTKI_INSTANCE_DATA_DIR was read nowhere: it appeared\nexactly once in the tree, on the line that writes it.\n\nSo an instance isolated its ports and then opened the shared data\ndirectory anyway. It took that directory's lock, which meant an instance\ncould not run beside another rotki at all — it exited with code 3,\n\"data directory is already in use\" — and the ~5 GB the instance had just\nseeded went unused.\n\nloadConfig now applies the variable after the config file, so the\ninstance wins: an instance exists precisely so as not to touch the\nshared data. That meant dropping the early return for a missing config\nfile, which is the common case and would have skipped the override.\n\nAn empty value is ignored rather than treated as a directory, so an\nunset instance cannot blank out a configured data-dir.",
          "timestamp": "2026-08-14T14:47:17Z",
          "url": "https://github.com/rotki/rotki/commit/610b6411579f026de0cec1da155a18e461f527ff"
        },
        "date": 1786848813698,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1853.1,
            "unit": "ms",
            "extra": "min 1799.68ms, stddev 654.99ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1387.34,
            "unit": "ms",
            "extra": "min 1378.33ms, stddev 283.22ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.13,
            "unit": "ms",
            "extra": "min 46.01ms, stddev 0.51ms"
          },
          {
            "name": "small/asset_search",
            "value": 86.99,
            "unit": "ms",
            "extra": "min 85.98ms, stddev 0.78ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.87ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.12,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.41ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 137.99,
            "unit": "ms",
            "extra": "min 136.94ms, stddev 0.77ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109.98,
            "unit": "ms",
            "extra": "min 109.02ms, stddev 0.82ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1800.92,
            "unit": "ms",
            "extra": "min 1798.87ms, stddev 30.41ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1440.44,
            "unit": "ms",
            "extra": "min 1424.91ms, stddev 20.92ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1132,
            "unit": "ms",
            "extra": "min 1129.0ms, stddev 2.62ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1134.03,
            "unit": "ms",
            "extra": "min 1132.1ms, stddev 1.75ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1255.89,
            "unit": "ms",
            "extra": "min 1252.07ms, stddev 2.97ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1121.95,
            "unit": "ms",
            "extra": "min 1120.98ms, stddev 3.73ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86,
            "unit": "ms",
            "extra": "min 85.0ms, stddev 0.7ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.92,
            "unit": "ms",
            "extra": "min 42.88ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.04,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.41ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2295.02,
            "unit": "ms",
            "extra": "min 2279.06ms, stddev 11.11ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1816.05,
            "unit": "ms",
            "extra": "min 1808.22ms, stddev 4.46ms"
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
          "id": "7561ca1c417ba57c6bd95bdd608ca676d5d77d8d",
          "message": "refactor(frontend): finish the vuelidate migration\n\nThe matching settings menu was the last root. Its two bounds move into\nasset-movement-matching-settings.ts with a spec, and each field now answers for itself: the rule it\nreplaces asked the whole validator whether anything was wrong, so an out-of-range tolerance\nsilently stopped the unrelated time range from saving.\n\nWith that gone the rest follows. useValidation held only callIfValid, which the menu was the last\ncaller of, and toMessages leaves validation.ts, which keeps the character helper it also holds.\n\nUnderlyingTokenManager's spec no longer builds a vuelidate parent to prove the staging row stays\nout of it. There is no ambient collector to be caught by any more: a zod form is local, and that\ncomponent exposes nothing, which is what the test says now.\n\n@vuelidate/core and @vuelidate/validators leave package.json and the catalog.",
          "timestamp": "2026-08-14T15:45:39Z",
          "url": "https://github.com/rotki/rotki/commit/7561ca1c417ba57c6bd95bdd608ca676d5d77d8d"
        },
        "date": 1786935170781,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1905.73,
            "unit": "ms",
            "extra": "min 1851.61ms, stddev 624.16ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1396.7,
            "unit": "ms",
            "extra": "min 1392.62ms, stddev 275.91ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 46.95,
            "unit": "ms",
            "extra": "min 45.93ms, stddev 0.55ms"
          },
          {
            "name": "small/asset_search",
            "value": 87.97,
            "unit": "ms",
            "extra": "min 85.04ms, stddev 1.63ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.98,
            "unit": "ms",
            "extra": "min 42.91ms, stddev 0.43ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 42.9,
            "unit": "ms",
            "extra": "min 42.0ms, stddev 0.53ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 138.13,
            "unit": "ms",
            "extra": "min 135.99ms, stddev 1.46ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 109,
            "unit": "ms",
            "extra": "min 108.02ms, stddev 1.13ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1800.32,
            "unit": "ms",
            "extra": "min 1798.14ms, stddev 27.05ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1439.89,
            "unit": "ms",
            "extra": "min 1433.79ms, stddev 13.78ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1141.95,
            "unit": "ms",
            "extra": "min 1127.1ms, stddev 8.34ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1137.99,
            "unit": "ms",
            "extra": "min 1132.91ms, stddev 8.02ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1253.95,
            "unit": "ms",
            "extra": "min 1241.92ms, stddev 9.73ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1123.98,
            "unit": "ms",
            "extra": "min 1117.07ms, stddev 6.88ms"
          },
          {
            "name": "whale/asset_search",
            "value": 86.01,
            "unit": "ms",
            "extra": "min 83.95ms, stddev 1.59ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.91,
            "unit": "ms",
            "extra": "min 41.99ms, stddev 0.42ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.98ms, stddev 0.01ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2283.95,
            "unit": "ms",
            "extra": "min 2278.0ms, stddev 4.33ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1816.99,
            "unit": "ms",
            "extra": "min 1800.96ms, stddev 9.08ms"
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
          "id": "79bf87f41a855da7decc255a2db5acbd07788987",
          "message": "fix(frontend): keep the row context's parts internal\n\nknip fails the build on an unused export, and the four interfaces the row\ncontext is composed from are only ever referenced by HistoryEventsRowContext\nin the same file.",
          "timestamp": "2026-08-17T11:30:09Z",
          "url": "https://github.com/rotki/rotki/commit/79bf87f41a855da7decc255a2db5acbd07788987"
        },
        "date": 1787021215753,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1477.66,
            "unit": "ms",
            "extra": "min 1277.79ms, stddev 450.4ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1236.94,
            "unit": "ms",
            "extra": "min 1023.99ms, stddev 167.68ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.82,
            "unit": "ms",
            "extra": "min 44.93ms, stddev 0.53ms"
          },
          {
            "name": "small/asset_search",
            "value": 73.93,
            "unit": "ms",
            "extra": "min 72.7ms, stddev 1.34ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.1,
            "unit": "ms",
            "extra": "min 41.97ms, stddev 0.49ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.97,
            "unit": "ms",
            "extra": "min 41.89ms, stddev 0.05ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 107.03,
            "unit": "ms",
            "extra": "min 104.92ms, stddev 3.16ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 101.99,
            "unit": "ms",
            "extra": "min 86.1ms, stddev 9.23ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1325.73,
            "unit": "ms",
            "extra": "min 1120.89ms, stddev 102.66ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1157.83,
            "unit": "ms",
            "extra": "min 984.42ms, stddev 161.12ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 873.96,
            "unit": "ms",
            "extra": "min 847.19ms, stddev 12.41ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 875.17,
            "unit": "ms",
            "extra": "min 841.0ms, stddev 19.79ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 964.05,
            "unit": "ms",
            "extra": "min 934.07ms, stddev 19.61ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 866.03,
            "unit": "ms",
            "extra": "min 840.99ms, stddev 17.28ms"
          },
          {
            "name": "whale/asset_search",
            "value": 73.91,
            "unit": "ms",
            "extra": "min 70.97ms, stddev 1.85ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.84,
            "unit": "ms",
            "extra": "min 41.86ms, stddev 0.46ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42.3,
            "unit": "ms",
            "extra": "min 41.91ms, stddev 0.43ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1771.99,
            "unit": "ms",
            "extra": "min 1721.06ms, stddev 64.21ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1649.06,
            "unit": "ms",
            "extra": "min 1405.18ms, stddev 205.0ms"
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
          "id": "7dd1115df55f9ce2b0663d03fbd5988fb78b54d9",
          "message": "Improvements on matching with socket decoded txs (#12949)",
          "timestamp": "2026-08-18T15:46:59Z",
          "url": "https://github.com/rotki/rotki/commit/7dd1115df55f9ce2b0663d03fbd5988fb78b54d9"
        },
        "date": 1787107826666,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1745.26,
            "unit": "ms",
            "extra": "min 1744.82ms, stddev 662.71ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1357.8,
            "unit": "ms",
            "extra": "min 1349.67ms, stddev 286.08ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.93,
            "unit": "ms",
            "extra": "min 45.92ms, stddev 0.01ms"
          },
          {
            "name": "small/asset_search",
            "value": 85.01,
            "unit": "ms",
            "extra": "min 84.95ms, stddev 0.55ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.97,
            "unit": "ms",
            "extra": "min 42.92ms, stddev 0.03ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.98,
            "unit": "ms",
            "extra": "min 41.96ms, stddev 0.02ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 127.02,
            "unit": "ms",
            "extra": "min 126.93ms, stddev 0.89ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 102.99,
            "unit": "ms",
            "extra": "min 101.99ms, stddev 1.0ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1736.81,
            "unit": "ms",
            "extra": "min 1692.6ms, stddev 26.97ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1424.96,
            "unit": "ms",
            "extra": "min 1420.02ms, stddev 14.13ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1201.98,
            "unit": "ms",
            "extra": "min 1198.02ms, stddev 1.72ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1201,
            "unit": "ms",
            "extra": "min 1198.97ms, stddev 1.5ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1321.11,
            "unit": "ms",
            "extra": "min 1315.17ms, stddev 3.11ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1189.13,
            "unit": "ms",
            "extra": "min 1186.01ms, stddev 1.85ms"
          },
          {
            "name": "whale/asset_search",
            "value": 85,
            "unit": "ms",
            "extra": "min 84.98ms, stddev 0.51ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.95,
            "unit": "ms",
            "extra": "min 42.93ms, stddev 0.02ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 42,
            "unit": "ms",
            "extra": "min 41.95ms, stddev 0.52ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2434.11,
            "unit": "ms",
            "extra": "min 2419.99ms, stddev 8.01ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1900,
            "unit": "ms",
            "extra": "min 1889.92ms, stddev 6.94ms"
          }
        ]
      }
    ]
  }
}