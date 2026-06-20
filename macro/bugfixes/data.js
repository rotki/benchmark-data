window.BENCHMARK_DATA = {
  "lastUpdate": 1781935556781,
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
      }
    ]
  }
}