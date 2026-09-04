window.BENCHMARK_DATA = {
  "lastUpdate": 1788503615386,
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
          "id": "ee31084f967d41c573e165e9d1ab50e906dbaa55",
          "message": "fix(frontend): stop hover hijacking the pill filter list\n\nThe option list set its highlight from a bare mousemove. The list is\nvirtualized and the arrow keys scroll it, so a row the user never pointed at\narrives under a cursor that has not moved, and the browser reports that as a\nmousemove at unchanged coordinates. Obeying it hands the highlight straight\nback, so the arrows could not advance past one row and a wheel scroll dragged\nthe highlight along with it.\n\nPointer moves are now taken only when the coordinates actually changed.\n\nSame defect and same fix as the send form's token picker in #12961, which is\nwhere it was spotted; this list is the other virtualized picker in the app.",
          "timestamp": "2026-08-19T15:24:59Z",
          "url": "https://github.com/rotki/rotki/commit/ee31084f967d41c573e165e9d1ab50e906dbaa55"
        },
        "date": 1787194045645,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1321.59,
            "unit": "ms",
            "extra": "min 1120.19ms, stddev 478.68ms"
          },
          {
            "name": "small/user_unlock",
            "value": 992.68,
            "unit": "ms",
            "extra": "min 902.9ms, stddev 192.09ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 44.77,
            "unit": "ms",
            "extra": "min 43.95ms, stddev 0.5ms"
          },
          {
            "name": "small/asset_search",
            "value": 69.96,
            "unit": "ms",
            "extra": "min 69.77ms, stddev 0.44ms"
          },
          {
            "name": "small/manual_balances",
            "value": 41.92,
            "unit": "ms",
            "extra": "min 41.89ms, stddev 0.09ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.91,
            "unit": "ms",
            "extra": "min 41.78ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 100.96,
            "unit": "ms",
            "extra": "min 100.12ms, stddev 4.52ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 81.99,
            "unit": "ms",
            "extra": "min 79.97ms, stddev 15.43ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1120.66,
            "unit": "ms",
            "extra": "min 1119.67ms, stddev 72.49ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 945.19,
            "unit": "ms",
            "extra": "min 939.79ms, stddev 84.49ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 822.91,
            "unit": "ms",
            "extra": "min 815.98ms, stddev 23.51ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 823,
            "unit": "ms",
            "extra": "min 821.01ms, stddev 1.69ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 905.01,
            "unit": "ms",
            "extra": "min 901.09ms, stddev 60.33ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 815.08,
            "unit": "ms",
            "extra": "min 813.0ms, stddev 33.09ms"
          },
          {
            "name": "whale/asset_search",
            "value": 70.05,
            "unit": "ms",
            "extra": "min 70.0ms, stddev 2.61ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 41.91,
            "unit": "ms",
            "extra": "min 41.83ms, stddev 0.07ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.87,
            "unit": "ms",
            "extra": "min 41.79ms, stddev 0.06ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1668,
            "unit": "ms",
            "extra": "min 1640.04ms, stddev 13.73ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1429.9,
            "unit": "ms",
            "extra": "min 1317.06ms, stddev 103.16ms"
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
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "78f86bda7e29e5f4aa3471f6c4fa9b50f993beee",
          "message": "Fix the ETH staking total when filtering (#12974)\n\n* fix(staking): correct staked total when filtering\n\nApplying a validator filter left the staked total showing a number that\nbelonged to a different filter, so it disagreed with the validator count\nbeside it. Two causes, both here.\n\nRequests were not ordered. Filter changes run concurrently, so whichever\nresponse landed last won rather than the one belonging to the newest\nfilter. The total is now keyed to the filter it was asked for, and an\nanswer is dropped once a newer filter supersedes it. Keyed by filter\nrather than by call on purpose: the premium component re-emits\n`update:filter` after every change, so the same filter is requested\ntwice as a matter of course and both answers are equally valid.\n\nThe recompute also went through the async task orchestrator, so a\nmillisecond-scale database read arrived on the polling cadence and the\ntotal trailed the count beside it by roughly two seconds. It now uses a\nsynchronous sibling of the validators query, which drops that to well\nunder a tenth of a second. The async query is untouched for the actual\nvalidator fetch, which is a real background job.\n\nA selection made only of exited validators still totals zero. That is\nthe backend contract, since balances are only reported for validators\nthat have not exited.\n\n* feat(staking): show optional API key in a popover\n\nThe Beaconcha.in prompt occupied a full-width row on every visit to the\nETH staking page, for a key the page works perfectly well without. A\nnotice that is always present stops being read, and it sat directly\nabove a second alert.\n\nIt now sits in the page header as a button that opens the same guidance\non demand, and it can be dismissed for good. The dismissal is persisted\nin a new frontend setting, so it does not return on the next login. The\nsetting takes no `.catch`: an unreadable value should surface rather\nthan silently re-show every prompt.\n\nProminence follows severity. A missing consensus RPC means there is no\nstaking data at all, which is a fault rather than an offer, so that case\nkeeps the inline alert and cannot be dismissed.\n\nRuiMenu supplies neither the disclosure semantics nor the focus move, so\nboth are wired here: the trigger announces `aria-haspopup` and its\nexpanded state, the panel is a labelled dialog, focus enters it on open\nand returns to the trigger on close. Without the focus move the panel is\nteleported to the end of the document and a keyboard user reaches its\nlink only after tabbing through the rest of the page.",
          "timestamp": "2026-08-20T14:57:25Z",
          "url": "https://github.com/rotki/rotki/commit/78f86bda7e29e5f4aa3471f6c4fa9b50f993beee"
        },
        "date": 1787280934171,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1483.16,
            "unit": "ms",
            "extra": "min 1481.06ms, stddev 615.41ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1200.63,
            "unit": "ms",
            "extra": "min 1174.08ms, stddev 227.5ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 45.88,
            "unit": "ms",
            "extra": "min 45.75ms, stddev 0.08ms"
          },
          {
            "name": "small/asset_search",
            "value": 81.84,
            "unit": "ms",
            "extra": "min 80.83ms, stddev 0.86ms"
          },
          {
            "name": "small/manual_balances",
            "value": 42.93,
            "unit": "ms",
            "extra": "min 42.77ms, stddev 0.09ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 41.99,
            "unit": "ms",
            "extra": "min 41.82ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 125.05,
            "unit": "ms",
            "extra": "min 124.78ms, stddev 12.91ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 95.16,
            "unit": "ms",
            "extra": "min 93.0ms, stddev 1.88ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1471.85,
            "unit": "ms",
            "extra": "min 1429.74ms, stddev 27.94ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1361.92,
            "unit": "ms",
            "extra": "min 1245.95ms, stddev 190.36ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1112.93,
            "unit": "ms",
            "extra": "min 1100.18ms, stddev 8.96ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1112.83,
            "unit": "ms",
            "extra": "min 1093.13ms, stddev 14.39ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1216.03,
            "unit": "ms",
            "extra": "min 1198.86ms, stddev 17.56ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1108.81,
            "unit": "ms",
            "extra": "min 1079.99ms, stddev 14.83ms"
          },
          {
            "name": "whale/asset_search",
            "value": 81.14,
            "unit": "ms",
            "extra": "min 80.89ms, stddev 0.49ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 42.86,
            "unit": "ms",
            "extra": "min 42.65ms, stddev 0.11ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 41.95,
            "unit": "ms",
            "extra": "min 41.87ms, stddev 0.05ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2262.94,
            "unit": "ms",
            "extra": "min 2221.04ms, stddev 21.44ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1833.98,
            "unit": "ms",
            "extra": "min 1794.2ms, stddev 36.62ms"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787366684265,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1690.99,
            "unit": "ms",
            "extra": "min 1686.74ms, stddev 1565.09ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1258.81,
            "unit": "ms",
            "extra": "min 1249.71ms, stddev 367.45ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.51,
            "unit": "ms",
            "extra": "min 5.42ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.89,
            "unit": "ms",
            "extra": "min 34.61ms, stddev 0.18ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.08,
            "unit": "ms",
            "extra": "min 1.99ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.82,
            "unit": "ms",
            "extra": "min 1.73ms, stddev 0.09ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 103.94,
            "unit": "ms",
            "extra": "min 101.97ms, stddev 1.2ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 77.29,
            "unit": "ms",
            "extra": "min 76.57ms, stddev 0.48ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1687.82,
            "unit": "ms",
            "extra": "min 1685.42ms, stddev 2.52ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1318.49,
            "unit": "ms",
            "extra": "min 1317.08ms, stddev 2.26ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1039.73,
            "unit": "ms",
            "extra": "min 1037.39ms, stddev 2.15ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1041.22,
            "unit": "ms",
            "extra": "min 1036.58ms, stddev 2.63ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1149.46,
            "unit": "ms",
            "extra": "min 1149.06ms, stddev 2.4ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1030.62,
            "unit": "ms",
            "extra": "min 1028.9ms, stddev 3.01ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.2,
            "unit": "ms",
            "extra": "min 34.89ms, stddev 0.5ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.17,
            "unit": "ms",
            "extra": "min 2.01ms, stddev 0.08ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.85,
            "unit": "ms",
            "extra": "min 1.76ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2469.45,
            "unit": "ms",
            "extra": "min 2466.34ms, stddev 5.17ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1742.54,
            "unit": "ms",
            "extra": "min 1740.65ms, stddev 3.68ms"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787453721110,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1795.27,
            "unit": "ms",
            "extra": "min 1794.2ms, stddev 1714.51ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1299.01,
            "unit": "ms",
            "extra": "min 1292.94ms, stddev 388.25ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.04,
            "unit": "ms",
            "extra": "min 5.89ms, stddev 0.13ms"
          },
          {
            "name": "small/asset_search",
            "value": 38.19,
            "unit": "ms",
            "extra": "min 37.45ms, stddev 0.47ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.21,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.11ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.88,
            "unit": "ms",
            "extra": "min 1.78ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 110.05,
            "unit": "ms",
            "extra": "min 109.4ms, stddev 0.64ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 81.49,
            "unit": "ms",
            "extra": "min 80.39ms, stddev 0.78ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1847.53,
            "unit": "ms",
            "extra": "min 1792.58ms, stddev 31.28ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1381.58,
            "unit": "ms",
            "extra": "min 1372.57ms, stddev 9.74ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1058.2,
            "unit": "ms",
            "extra": "min 1055.92ms, stddev 4.1ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1059.33,
            "unit": "ms",
            "extra": "min 1052.96ms, stddev 2.83ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1167.35,
            "unit": "ms",
            "extra": "min 1164.59ms, stddev 2.51ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1052.32,
            "unit": "ms",
            "extra": "min 1046.92ms, stddev 3.13ms"
          },
          {
            "name": "whale/asset_search",
            "value": 38.91,
            "unit": "ms",
            "extra": "min 38.81ms, stddev 0.77ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.35,
            "unit": "ms",
            "extra": "min 2.16ms, stddev 0.09ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.03,
            "unit": "ms",
            "extra": "min 1.88ms, stddev 0.08ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2518.25,
            "unit": "ms",
            "extra": "min 2507.63ms, stddev 6.34ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1798.68,
            "unit": "ms",
            "extra": "min 1794.39ms, stddev 4.86ms"
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
          "id": "ef14aadd1f387a199731fcc03254463b45b6e0cb",
          "message": "fix(notifications): report monerium success inline only\n\nA completed authorization raised a notification saying it had worked,\nfor something the user was already looking at: the card flips to its\nconnected state naming the account as soon as the token round trip\nlands. The entry then had to be dismissed by hand, and it sat in the\nsame group as the \"opening browser\" step and the session-expired\nwarning, so the trail of the flow outlived the flow.\n\nSuccess now raises nothing and clears that group instead, which also\nretires the expiry warning the re-authentication just resolved. One\nremoval is enough because a group holds a single entry, the dispatcher\nreplacing rather than appending. Failures still report, since nothing\non the card shows them.\n\nThe card also drops to one notification composable: useNotifications\ncovers both notify and removeMatching, and its Notification type is the\nsame SemiPartial the card was already building.",
          "timestamp": "2026-08-21T13:28:52Z",
          "url": "https://github.com/rotki/rotki/commit/ef14aadd1f387a199731fcc03254463b45b6e0cb"
        },
        "date": 1787540152957,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1427.91,
            "unit": "ms",
            "extra": "min 1333.37ms, stddev 1306.66ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1096.33,
            "unit": "ms",
            "extra": "min 977.52ms, stddev 316.88ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.18,
            "unit": "ms",
            "extra": "min 4.1ms, stddev 0.13ms"
          },
          {
            "name": "small/asset_search",
            "value": 28.49,
            "unit": "ms",
            "extra": "min 27.74ms, stddev 0.9ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.59,
            "unit": "ms",
            "extra": "min 1.47ms, stddev 0.08ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.37,
            "unit": "ms",
            "extra": "min 1.26ms, stddev 0.1ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 75.46,
            "unit": "ms",
            "extra": "min 72.5ms, stddev 7.16ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 54.83,
            "unit": "ms",
            "extra": "min 52.58ms, stddev 21.01ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1377.53,
            "unit": "ms",
            "extra": "min 1325.94ms, stddev 29.57ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1073.95,
            "unit": "ms",
            "extra": "min 1030.97ms, stddev 26.96ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 889.34,
            "unit": "ms",
            "extra": "min 881.32ms, stddev 6.73ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 887.45,
            "unit": "ms",
            "extra": "min 880.97ms, stddev 4.43ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 974.54,
            "unit": "ms",
            "extra": "min 970.82ms, stddev 6.05ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 880.7,
            "unit": "ms",
            "extra": "min 871.74ms, stddev 5.86ms"
          },
          {
            "name": "whale/asset_search",
            "value": 27.76,
            "unit": "ms",
            "extra": "min 27.37ms, stddev 1.26ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.61,
            "unit": "ms",
            "extra": "min 1.58ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.4,
            "unit": "ms",
            "extra": "min 1.38ms, stddev 0.03ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 2057.88,
            "unit": "ms",
            "extra": "min 2045.24ms, stddev 18.82ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1520.14,
            "unit": "ms",
            "extra": "min 1458.09ms, stddev 105.99ms"
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
          "id": "58e30ab4c8f3f8e6f0c08b32e0f03a1ef496eeb0",
          "message": "chore(frontend): lint the test ids the first rules could not see\n\nCloses two of the three blind spots the guard rail shipped with:\n\n- a test id forwarded under a component's own attribute name. The rule's\n  `key` option goes through `toRegExp`, so widening it covers\n  `switch-test-id` / `field-test-id` on SettingToggleNumber.\n- a test id held in an object literal (`testId:`), which is how\n  CreateAccountIntroduction carries the ids for its two mode cards, and\n  a selector built as a template literal, which `Literal` never matches.\n\nThe third is genuinely unlintable: an id built at runtime, today only\n`tabTestId`. Its spec asserts the generated value never contains `__`.\n\nEach selector joins an existing `no-restricted-syntax` array rather than\narriving in its own block, because a flat config replaces a rule's\noptions rather than merging them. Each was confirmed by reintroducing a\nBEM id in that exact shape and watching the right rule fire.",
          "timestamp": "2026-08-24T15:05:39Z",
          "url": "https://github.com/rotki/rotki/commit/58e30ab4c8f3f8e6f0c08b32e0f03a1ef496eeb0"
        },
        "date": 1787626155773,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1690.43,
            "unit": "ms",
            "extra": "min 1687.37ms, stddev 1685.77ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1257.33,
            "unit": "ms",
            "extra": "min 1247.53ms, stddev 408.17ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.47,
            "unit": "ms",
            "extra": "min 5.34ms, stddev 0.07ms"
          },
          {
            "name": "small/asset_search",
            "value": 36.71,
            "unit": "ms",
            "extra": "min 36.31ms, stddev 0.23ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.09,
            "unit": "ms",
            "extra": "min 1.97ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.88,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.12ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 92.16,
            "unit": "ms",
            "extra": "min 91.06ms, stddev 1.3ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 68.08,
            "unit": "ms",
            "extra": "min 67.2ms, stddev 0.5ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1741.18,
            "unit": "ms",
            "extra": "min 1687.64ms, stddev 30.71ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1336.38,
            "unit": "ms",
            "extra": "min 1328.42ms, stddev 9.05ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1139.75,
            "unit": "ms",
            "extra": "min 1135.9ms, stddev 2.89ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1139.91,
            "unit": "ms",
            "extra": "min 1136.26ms, stddev 4.33ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1251.07,
            "unit": "ms",
            "extra": "min 1249.48ms, stddev 3.26ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1134.14,
            "unit": "ms",
            "extra": "min 1127.49ms, stddev 3.84ms"
          },
          {
            "name": "whale/asset_search",
            "value": 37.22,
            "unit": "ms",
            "extra": "min 36.26ms, stddev 0.86ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.14,
            "unit": "ms",
            "extra": "min 1.94ms, stddev 0.12ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.68ms, stddev 0.13ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1663.51,
            "unit": "ms",
            "extra": "min 1658.35ms, stddev 5.49ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1844.12,
            "unit": "ms",
            "extra": "min 1832.66ms, stddev 12.2ms"
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
          "id": "9665a8fff360bc53173fbb6b4b890a4832b77ddb",
          "message": "refactor(frontend): extract the liquity staking cluster\n\nCloses #13002. Batch D of #12964: one module, `staking/liquity/`, taken\nwhole. 157 tests in the module, 285 uncovered statements down to 26.\n\nThe two fat components carried 198 of those statements between them and\nare now wiring over three new modules:\n\n- `liquity-aggregation.ts` (100%) sums positions across addresses and\n  proxies. `aggregatedStake` and `aggregatedStakingPool` turned out to be\n  the same algorithm written twice, because a staking detail and a pool\n  detail are structurally identical, so both now call one generic\n  `aggregateEntries`.\n- `liquity-statistics.ts` (100%) holds the re-pricing and the profit and\n  loss arithmetic, taking a price lookup so it needs no store.\n- `liquity-assets.ts` gives the LUSD and LQTY identifiers one home; LUSD\n  had been declared separately in two components.\n\n`use-liquity-data-fetching.ts` had four near-identical fetchers, ~150\nlines differing in five values. They are now one `createFetch` over a\ndefinition, and the premium guard that three of them carry, and the\nfourth deliberately does not, is covered in both directions for the\nfirst time.\n\nThe view toggle became an `as const` object rather than a bare string\nunion, per the repo convention for new types.\n\n`LiquityPnlRow.vue` is deliberately left without a spec: it is pure\ndisplay with no branch, and a mount-only test would move the number\nwithout proving anything.\n\nTwo corrections found by writing the tests: the doc comment claiming an\nunpriced gain is valued at zero was wrong, since the price defaults to\none and only an explicit zero collapses the value; and a per-iteration\ndefensive copy in the aggregation reduce was redundant, because the\nfirst entry is already copied and every later field is reassigned.",
          "timestamp": "2026-08-25T15:08:02Z",
          "url": "https://github.com/rotki/rotki/commit/9665a8fff360bc53173fbb6b4b890a4832b77ddb"
        },
        "date": 1787713093447,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1738.87,
            "unit": "ms",
            "extra": "min 1736.87ms, stddev 1596.75ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1265.22,
            "unit": "ms",
            "extra": "min 1254.44ms, stddev 397.12ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.6,
            "unit": "ms",
            "extra": "min 5.37ms, stddev 0.18ms"
          },
          {
            "name": "small/asset_search",
            "value": 35.44,
            "unit": "ms",
            "extra": "min 35.24ms, stddev 0.39ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.14,
            "unit": "ms",
            "extra": "min 2.11ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.84,
            "unit": "ms",
            "extra": "min 1.82ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 103.81,
            "unit": "ms",
            "extra": "min 102.01ms, stddev 1.17ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 78.17,
            "unit": "ms",
            "extra": "min 77.72ms, stddev 0.8ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1736.31,
            "unit": "ms",
            "extra": "min 1691.17ms, stddev 25.01ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1327.61,
            "unit": "ms",
            "extra": "min 1324.6ms, stddev 9.16ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1050.72,
            "unit": "ms",
            "extra": "min 1045.26ms, stddev 3.14ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1049.25,
            "unit": "ms",
            "extra": "min 1047.59ms, stddev 2.46ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1158.01,
            "unit": "ms",
            "extra": "min 1154.38ms, stddev 2.16ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1042.27,
            "unit": "ms",
            "extra": "min 1040.0ms, stddev 2.27ms"
          },
          {
            "name": "whale/asset_search",
            "value": 35.49,
            "unit": "ms",
            "extra": "min 35.28ms, stddev 0.32ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.16,
            "unit": "ms",
            "extra": "min 2.07ms, stddev 0.06ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.86,
            "unit": "ms",
            "extra": "min 1.78ms, stddev 0.09ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1580.89,
            "unit": "ms",
            "extra": "min 1575.68ms, stddev 2.81ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1785.78,
            "unit": "ms",
            "extra": "min 1760.91ms, stddev 17.38ms"
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
          "id": "da657112eff8974f3151d623dccaf90caf883700",
          "message": "refactor(frontend): filter disabled chains at the door\n\nfilterDisabledChainAccounts was called three times on the way to a refresh:\ntwice in use-refresh-transactions before novelty detection, and again inside\nresolveRefreshTargets. Each call site carried a comment asserting the ordering\nmattered, and the one with the strongest wording sat where the rule was not in\neffect at all -- it runs after novelty, which is already a parameter there.\n\nFilter at the two places accounts enter the module instead. getAccountsByChainType\nis the funnel every getter reads through, so filtering there means no getter in\nuse-history-transaction-accounts can return a disabled account. A caller-supplied\nlist is the only other door, and resolveInputAccounts covers it.\n\nresolveRefreshTargets's no-novelty branch read payload.accounts directly, skipping\neverything resolved upstream -- which is what the third filter was really covering.\nIt now takes the resolved list through opts.inputAccounts and the payload parameter\nnarrows to exchanges.\n\nThe five filterDisabledChainAccounts tests duplicated use-disabled-chains.spec.ts\nat one remove; they are replaced by four asserting the invariant at the source.\nBoth doors were negative-controlled: removing the source filter fails all four,\nremoving the caller filter fails the two in use-refresh-transactions.",
          "timestamp": "2026-08-25T21:51:28Z",
          "url": "https://github.com/rotki/rotki/commit/da657112eff8974f3151d623dccaf90caf883700"
        },
        "date": 1787832082728,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1543.68,
            "unit": "ms",
            "extra": "min 1535.19ms, stddev 1452.26ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1221,
            "unit": "ms",
            "extra": "min 1214.33ms, stddev 330.99ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.4,
            "unit": "ms",
            "extra": "min 5.16ms, stddev 0.17ms"
          },
          {
            "name": "small/asset_search",
            "value": 34.25,
            "unit": "ms",
            "extra": "min 33.74ms, stddev 0.47ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.01,
            "unit": "ms",
            "extra": "min 2.0ms, stddev 0.14ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.71,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.09ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 91.47,
            "unit": "ms",
            "extra": "min 91.37ms, stddev 0.84ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 66.72,
            "unit": "ms",
            "extra": "min 65.09ms, stddev 0.75ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1535.99,
            "unit": "ms",
            "extra": "min 1535.1ms, stddev 4.17ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1292.23,
            "unit": "ms",
            "extra": "min 1285.74ms, stddev 20.37ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1059.82,
            "unit": "ms",
            "extra": "min 1056.46ms, stddev 1.84ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1061.01,
            "unit": "ms",
            "extra": "min 1055.78ms, stddev 3.12ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1169.89,
            "unit": "ms",
            "extra": "min 1164.72ms, stddev 3.72ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1052.38,
            "unit": "ms",
            "extra": "min 1050.61ms, stddev 1.29ms"
          },
          {
            "name": "whale/asset_search",
            "value": 34.71,
            "unit": "ms",
            "extra": "min 34.16ms, stddev 0.52ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.3,
            "unit": "ms",
            "extra": "min 2.08ms, stddev 0.17ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.88,
            "unit": "ms",
            "extra": "min 1.62ms, stddev 0.14ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1573.25,
            "unit": "ms",
            "extra": "min 1565.75ms, stddev 3.72ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1723.76,
            "unit": "ms",
            "extra": "min 1711.72ms, stddev 5.43ms"
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
          "id": "819b026f21c666d51d13411916581f439f9afd22",
          "message": "Merge remote-tracking branch 'upstream/bugfixes' into develop\n\n# Conflicts:\n#\tdocs/changelog.rst\n#\tfrontend/app/src/modules/balances/use-balance-fetching.spec.ts\n#\tfrontend/app/src/modules/balances/use-balance-fetching.ts\n#\trotkehlchen/data/global.db",
          "timestamp": "2026-08-27T20:31:41Z",
          "url": "https://github.com/rotki/rotki/commit/819b026f21c666d51d13411916581f439f9afd22"
        },
        "date": 1787923621276,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 2053.53,
            "unit": "ms",
            "extra": "min 2038.3ms, stddev 1701.29ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1353.06,
            "unit": "ms",
            "extra": "min 1300.55ms, stddev 456.82ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.31,
            "unit": "ms",
            "extra": "min 6.19ms, stddev 0.06ms"
          },
          {
            "name": "small/asset_search",
            "value": 42.76,
            "unit": "ms",
            "extra": "min 41.78ms, stddev 0.54ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.43,
            "unit": "ms",
            "extra": "min 2.38ms, stddev 0.05ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.05,
            "unit": "ms",
            "extra": "min 1.99ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 111.15,
            "unit": "ms",
            "extra": "min 110.08ms, stddev 1.1ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 74.71,
            "unit": "ms",
            "extra": "min 74.02ms, stddev 0.69ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 2063.02,
            "unit": "ms",
            "extra": "min 1997.51ms, stddev 35.87ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1425.83,
            "unit": "ms",
            "extra": "min 1377.55ms, stddev 28.11ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1125.8,
            "unit": "ms",
            "extra": "min 1125.34ms, stddev 2.44ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1129.68,
            "unit": "ms",
            "extra": "min 1126.2ms, stddev 1.75ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1237.17,
            "unit": "ms",
            "extra": "min 1234.53ms, stddev 2.65ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1117.64,
            "unit": "ms",
            "extra": "min 1117.04ms, stddev 1.62ms"
          },
          {
            "name": "whale/asset_search",
            "value": 42.54,
            "unit": "ms",
            "extra": "min 41.85ms, stddev 0.72ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.37,
            "unit": "ms",
            "extra": "min 2.32ms, stddev 0.11ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.99,
            "unit": "ms",
            "extra": "min 1.95ms, stddev 0.05ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1705.18,
            "unit": "ms",
            "extra": "min 1701.15ms, stddev 4.77ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1851.36,
            "unit": "ms",
            "extra": "min 1847.74ms, stddev 6.72ms"
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
          "id": "eb39ab02a65fe37fd96a2d3bf07c09b8df997819",
          "message": "refactor(frontend): let the code carry the intent, not comments\n\nDrains the comment-run backlog across assets, accounts, core and\nhistory, taking each to zero, and writes the rule down so it does not\nhave to be re-derived.\n\nA comment explaining code is treated as a defect in the code. Each one\nis enforced, encoded as a name, moved to the enclosing declaration's\nTSDoc, folded into a test title, or deleted. Shortening it to fit a\nlint threshold is not an outcome.\n\nFacts restated at every call site move to the shared code that owns\nthem: submitTask's dedup contract, FieldDef's per-keystroke resolver\ncost and pill-absence default, createItemCacheStorage's injection,\nassetSuggestions, useSharedFieldResolvers, and the table provenance\nmodel. Duplicated logic goes with them - one useFeeRows for three swap\nforms, one collection factory in the tokens DB, one settleMountedWork\nfor five form specs.\n\nBehaviour that only a comment asserted becomes a test:\nHistoryRedecodeSelection had no spec and now pins that every decodable\nchain is offered; listIssues pins that it strips the ordering params\nthe endpoint rejects.\n\nFixes four callers that read an activity's result from a closure the\nrun body assigned, which a deduped caller never executes, so a success\nreturned nothing: ERC20 token lookup, ENS force-update, and Gnosis Pay\nnonce and verification. Adds local/no-closure-result-in-activity-run,\nwhich found three of them.\n\nFourteen comments were wrong rather than stale, including two claiming\nbehaviour the code contradicts: autostart being Electron-only, and\nIndexedDB logging being production-only when it runs unpackaged.\n\nRatchet: 1471 -> 481.",
          "timestamp": "2026-08-27T21:18:08Z",
          "url": "https://github.com/rotki/rotki/commit/eb39ab02a65fe37fd96a2d3bf07c09b8df997819"
        },
        "date": 1787991654032,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1637.2,
            "unit": "ms",
            "extra": "min 1615.4ms, stddev 1618.18ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1208.68,
            "unit": "ms",
            "extra": "min 1062.69ms, stddev 506.7ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.85,
            "unit": "ms",
            "extra": "min 4.82ms, stddev 0.09ms"
          },
          {
            "name": "small/asset_search",
            "value": 32.84,
            "unit": "ms",
            "extra": "min 32.58ms, stddev 0.38ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.81ms, stddev 0.06ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.61,
            "unit": "ms",
            "extra": "min 1.52ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 87.37,
            "unit": "ms",
            "extra": "min 85.34ms, stddev 0.96ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 61.37,
            "unit": "ms",
            "extra": "min 59.15ms, stddev 37.08ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1690.52,
            "unit": "ms",
            "extra": "min 1583.71ms, stddev 116.45ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1209.53,
            "unit": "ms",
            "extra": "min 1186.28ms, stddev 102.68ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 885.08,
            "unit": "ms",
            "extra": "min 881.51ms, stddev 3.84ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 883.74,
            "unit": "ms",
            "extra": "min 880.44ms, stddev 4.8ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 972.67,
            "unit": "ms",
            "extra": "min 968.07ms, stddev 5.42ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 877.09,
            "unit": "ms",
            "extra": "min 873.92ms, stddev 4.8ms"
          },
          {
            "name": "whale/asset_search",
            "value": 32.82,
            "unit": "ms",
            "extra": "min 32.36ms, stddev 1.56ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.89,
            "unit": "ms",
            "extra": "min 1.87ms, stddev 0.04ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.61,
            "unit": "ms",
            "extra": "min 1.55ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1337.39,
            "unit": "ms",
            "extra": "min 1331.11ms, stddev 11.97ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1636.83,
            "unit": "ms",
            "extra": "min 1582.2ms, stddev 255.14ms"
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
          "id": "eb39ab02a65fe37fd96a2d3bf07c09b8df997819",
          "message": "refactor(frontend): let the code carry the intent, not comments\n\nDrains the comment-run backlog across assets, accounts, core and\nhistory, taking each to zero, and writes the rule down so it does not\nhave to be re-derived.\n\nA comment explaining code is treated as a defect in the code. Each one\nis enforced, encoded as a name, moved to the enclosing declaration's\nTSDoc, folded into a test title, or deleted. Shortening it to fit a\nlint threshold is not an outcome.\n\nFacts restated at every call site move to the shared code that owns\nthem: submitTask's dedup contract, FieldDef's per-keystroke resolver\ncost and pill-absence default, createItemCacheStorage's injection,\nassetSuggestions, useSharedFieldResolvers, and the table provenance\nmodel. Duplicated logic goes with them - one useFeeRows for three swap\nforms, one collection factory in the tokens DB, one settleMountedWork\nfor five form specs.\n\nBehaviour that only a comment asserted becomes a test:\nHistoryRedecodeSelection had no spec and now pins that every decodable\nchain is offered; listIssues pins that it strips the ordering params\nthe endpoint rejects.\n\nFixes four callers that read an activity's result from a closure the\nrun body assigned, which a deduped caller never executes, so a success\nreturned nothing: ERC20 token lookup, ENS force-update, and Gnosis Pay\nnonce and verification. Adds local/no-closure-result-in-activity-run,\nwhich found three of them.\n\nFourteen comments were wrong rather than stale, including two claiming\nbehaviour the code contradicts: autostart being Electron-only, and\nIndexedDB logging being production-only when it runs unpackaged.\n\nRatchet: 1471 -> 481.",
          "timestamp": "2026-08-27T21:18:08Z",
          "url": "https://github.com/rotki/rotki/commit/eb39ab02a65fe37fd96a2d3bf07c09b8df997819"
        },
        "date": 1788074417421,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1458.11,
            "unit": "ms",
            "extra": "min 1427.1ms, stddev 1213.37ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1030.86,
            "unit": "ms",
            "extra": "min 996.95ms, stddev 321.61ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 5.06,
            "unit": "ms",
            "extra": "min 4.91ms, stddev 0.1ms"
          },
          {
            "name": "small/asset_search",
            "value": 32.59,
            "unit": "ms",
            "extra": "min 32.41ms, stddev 0.11ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.1,
            "unit": "ms",
            "extra": "min 1.94ms, stddev 0.11ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.79,
            "unit": "ms",
            "extra": "min 1.64ms, stddev 0.08ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 83.23,
            "unit": "ms",
            "extra": "min 82.41ms, stddev 0.65ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 55.98,
            "unit": "ms",
            "extra": "min 55.13ms, stddev 0.77ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1425.79,
            "unit": "ms",
            "extra": "min 1424.49ms, stddev 0.78ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1051.23,
            "unit": "ms",
            "extra": "min 1049.27ms, stddev 31.39ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 848.19,
            "unit": "ms",
            "extra": "min 839.8ms, stddev 9.05ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 844.42,
            "unit": "ms",
            "extra": "min 840.07ms, stddev 3.55ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 929.34,
            "unit": "ms",
            "extra": "min 928.93ms, stddev 5.63ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 835.35,
            "unit": "ms",
            "extra": "min 831.61ms, stddev 5.25ms"
          },
          {
            "name": "whale/asset_search",
            "value": 32.69,
            "unit": "ms",
            "extra": "min 32.53ms, stddev 0.35ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.15,
            "unit": "ms",
            "extra": "min 2.14ms, stddev 0.1ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.78,
            "unit": "ms",
            "extra": "min 1.72ms, stddev 0.05ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1269.84,
            "unit": "ms",
            "extra": "min 1264.67ms, stddev 5.9ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1410.62,
            "unit": "ms",
            "extra": "min 1397.05ms, stddev 6.75ms"
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
          "id": "01cc4a7e0cd2ebd71253a2bef30e069f288ce7bd",
          "message": "Close retained database cursors on shutdown (#13031)\n\nSQLite connection.close() uses sqlite3_close_v2(), which marks the connection closed but defers releasing the database handle while cursor statements are still alive. The asset update tests relied on cursor destruction to release those statements. With Python 3.14t that destruction is no longer reliably immediate, and Windows consequently rejected removal of global.db with WinError 32.\n\nTrack each DBConnection's cursors through weak references, remove cursors from that tracking set when they are explicitly closed, and close any survivors before closing the underlying connection. Weak references avoid extending cursor lifetimes while making connection shutdown deterministic. Add a regression test proving that a cursor retained by its caller is closed by connection shutdown.",
          "timestamp": "2026-08-30T18:34:36Z",
          "url": "https://github.com/rotki/rotki/commit/01cc4a7e0cd2ebd71253a2bef30e069f288ce7bd"
        },
        "date": 1788161766859,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 2210.12,
            "unit": "ms",
            "extra": "min 2160.13ms, stddev 1810.5ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1411.83,
            "unit": "ms",
            "extra": "min 1359.04ms, stddev 451.95ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.56,
            "unit": "ms",
            "extra": "min 7.24ms, stddev 0.15ms"
          },
          {
            "name": "small/asset_search",
            "value": 45.88,
            "unit": "ms",
            "extra": "min 44.41ms, stddev 1.44ms"
          },
          {
            "name": "small/manual_balances",
            "value": 3,
            "unit": "ms",
            "extra": "min 2.84ms, stddev 0.1ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.47,
            "unit": "ms",
            "extra": "min 2.25ms, stddev 0.24ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 136.64,
            "unit": "ms",
            "extra": "min 134.5ms, stddev 1.03ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 90.67,
            "unit": "ms",
            "extra": "min 89.17ms, stddev 1.41ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 2158.63,
            "unit": "ms",
            "extra": "min 2054.33ms, stddev 77.99ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1436.03,
            "unit": "ms",
            "extra": "min 1425.27ms, stddev 21.36ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1047.76,
            "unit": "ms",
            "extra": "min 1042.75ms, stddev 3.15ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1049.86,
            "unit": "ms",
            "extra": "min 1044.86ms, stddev 3.51ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1158.23,
            "unit": "ms",
            "extra": "min 1154.72ms, stddev 3.07ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1040.46,
            "unit": "ms",
            "extra": "min 1034.42ms, stddev 3.92ms"
          },
          {
            "name": "whale/asset_search",
            "value": 46.69,
            "unit": "ms",
            "extra": "min 42.4ms, stddev 2.01ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.81,
            "unit": "ms",
            "extra": "min 2.57ms, stddev 0.15ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.3,
            "unit": "ms",
            "extra": "min 2.19ms, stddev 0.14ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1650.87,
            "unit": "ms",
            "extra": "min 1635.55ms, stddev 8.76ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1797.38,
            "unit": "ms",
            "extra": "min 1785.14ms, stddev 21.8ms"
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
          "id": "295af7d6c2569cb71f898b6650b39693d1312a2d",
          "message": "Add coinbase as price source (#13013)\n\n* Add coinbase as price source\n\n* Improvements",
          "timestamp": "2026-08-31T13:08:42Z",
          "url": "https://github.com/rotki/rotki/commit/295af7d6c2569cb71f898b6650b39693d1312a2d"
        },
        "date": 1788245354835,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 2170.32,
            "unit": "ms",
            "extra": "min 2155.76ms, stddev 1619.61ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1346.6,
            "unit": "ms",
            "extra": "min 1338.9ms, stddev 426.1ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.1,
            "unit": "ms",
            "extra": "min 6.92ms, stddev 0.16ms"
          },
          {
            "name": "small/asset_search",
            "value": 44.14,
            "unit": "ms",
            "extra": "min 43.31ms, stddev 0.77ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.87,
            "unit": "ms",
            "extra": "min 2.49ms, stddev 0.18ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.35,
            "unit": "ms",
            "extra": "min 2.23ms, stddev 0.07ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 131.27,
            "unit": "ms",
            "extra": "min 128.78ms, stddev 1.19ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 87.94,
            "unit": "ms",
            "extra": "min 87.17ms, stddev 1.44ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 2063.15,
            "unit": "ms",
            "extra": "min 2008.29ms, stddev 57.57ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1416.18,
            "unit": "ms",
            "extra": "min 1373.06ms, stddev 27.73ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1041.65,
            "unit": "ms",
            "extra": "min 1038.47ms, stddev 7.81ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1040.01,
            "unit": "ms",
            "extra": "min 1038.6ms, stddev 6.51ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1145.91,
            "unit": "ms",
            "extra": "min 1144.08ms, stddev 8.09ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1027.48,
            "unit": "ms",
            "extra": "min 1024.74ms, stddev 7.44ms"
          },
          {
            "name": "whale/asset_search",
            "value": 41.74,
            "unit": "ms",
            "extra": "min 41.05ms, stddev 0.6ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.54,
            "unit": "ms",
            "extra": "min 2.39ms, stddev 0.1ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.17,
            "unit": "ms",
            "extra": "min 2.03ms, stddev 0.1ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1638.94,
            "unit": "ms",
            "extra": "min 1626.1ms, stddev 7.02ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1768.41,
            "unit": "ms",
            "extra": "min 1761.95ms, stddev 11.08ms"
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
          "id": "295af7d6c2569cb71f898b6650b39693d1312a2d",
          "message": "Add coinbase as price source (#13013)\n\n* Add coinbase as price source\n\n* Improvements",
          "timestamp": "2026-08-31T13:08:42Z",
          "url": "https://github.com/rotki/rotki/commit/295af7d6c2569cb71f898b6650b39693d1312a2d"
        },
        "date": 1788330377361,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 2223.34,
            "unit": "ms",
            "extra": "min 2143.73ms, stddev 1630.75ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1404.33,
            "unit": "ms",
            "extra": "min 1350.86ms, stddev 430.93ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 7.33,
            "unit": "ms",
            "extra": "min 6.67ms, stddev 0.37ms"
          },
          {
            "name": "small/asset_search",
            "value": 44.44,
            "unit": "ms",
            "extra": "min 43.14ms, stddev 1.73ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.69,
            "unit": "ms",
            "extra": "min 2.43ms, stddev 0.2ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.35,
            "unit": "ms",
            "extra": "min 2.05ms, stddev 0.18ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 133.95,
            "unit": "ms",
            "extra": "min 128.14ms, stddev 3.5ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 90.25,
            "unit": "ms",
            "extra": "min 87.77ms, stddev 1.67ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 2104.15,
            "unit": "ms",
            "extra": "min 2052.36ms, stddev 42.39ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1436.13,
            "unit": "ms",
            "extra": "min 1404.9ms, stddev 15.12ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1052.23,
            "unit": "ms",
            "extra": "min 1050.44ms, stddev 4.36ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1055.79,
            "unit": "ms",
            "extra": "min 1050.85ms, stddev 4.17ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1165.12,
            "unit": "ms",
            "extra": "min 1163.01ms, stddev 4.13ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1047.17,
            "unit": "ms",
            "extra": "min 1040.02ms, stddev 4.63ms"
          },
          {
            "name": "whale/asset_search",
            "value": 42.25,
            "unit": "ms",
            "extra": "min 40.95ms, stddev 2.03ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.61,
            "unit": "ms",
            "extra": "min 2.45ms, stddev 0.11ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.24,
            "unit": "ms",
            "extra": "min 2.07ms, stddev 0.11ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1648.03,
            "unit": "ms",
            "extra": "min 1633.64ms, stddev 8.13ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1788.95,
            "unit": "ms",
            "extra": "min 1779.2ms, stddev 17.57ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "groninge",
            "username": "groninge01",
            "email": "groninge@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "660655051088adf36e7d1558f06ccbe986c0a4a1",
          "message": "Add Beets gauge balances for Sonic (#12914)\n\n* feat: add Sonic as a supported EVM chain\n\nAdd the Sonic chain package (manager, node inquirer, accountant, decoder, wson module) and wire it into the chains aggregator, rotki instance and balance/account tracking. Add SupportedBlockchain.SONIC, its native token S, the Location enum value and all chain/location type tuples.\nThe packaged globaldb is seeded with the Sonic multicall and balance scanner contracts and the S asset so inquirer initialization and asset resolution work.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* fix: restore rotkehlchen.py executable bit\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* feat: add Sonic assets, nodes, indexers and DB location\n\nRegister the S native token and WS wrapped token, chain decimals and wrapped-token mapping, the sonicscan-first indexer order, contract ABI overload, genesis timestamp handling in the tx and earliest-ts paths, the CSV explorer URL, location image, default RPC nodes, the Sonic location row in the user DB schema and the unreleased v52->v53 upgrade step, and seed the packaged globaldb with the Sonic multicall/balance scanner contracts and the S asset.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* feat: generalize Balancer decoders for Beets chains\n\nParameterize the shared Balancer v1/v2/v3 decoders with counterparty, swap counterparty, label and image so non-Balancer-run deployments (Beets on Sonic) can decode through the same machinery with their own counterparties. Add the beets-v2/beets-v3/beets-swap-v3 counterparties, extend the cache/version mappings, branch join ordering on the protocol version instead of the counterparty string, and accept the beets protocols in the pool price paths and protocol cache refresh.\nAlso fix v3 liquidity decoding when the deposit/withdrawal transfer is emitted before the LiquidityAdded/LiquidityRemoved log (BatchRouter), transforming already-decoded events in place with a tolerance for pool exit fees.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* test: cover Sonic chain and Beets v3 decoding\n\nThread the sonic manager/inquirer/accounts fixtures through the test harness, add the Sonic mainnet node helper, extend the chains aggregator, EVM API, db upgrade, types and balancer-utils tests with Sonic, and add live-RPC decoder tests for Beets v3 pool join and exit through the BatchRouter.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* feat: add Sonic to the frontend\n\nAdd Blockchain.SONIC, the sonicscan explorer URLs, the early-integration flag, protocol icons for Sonic, WS and Beets, and update the co-located specs.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* test: cover Beets v3 single-hop swap on Sonic\n\nAdd a live-RPC decoder test for a single-hop Beets v3 swap of stS for wS through the pool, asserting the consolidated trade events carry the beets-v3 counterparty.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* test: cover Beets v2 swap on Sonic\n\nAdd a live-RPC decoder test for a single-hop Beets v2 swap of stS for scUSD through the vault, asserting the consolidated trade events carry the beets-v2 counterparty.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* fix: reuse transfer events in wrapped token decoding\n\nSome wrapped tokens (WS on Sonic) emit an ERC20 Transfer on wrap/unwrap in addition to the Deposit/Withdrawal log. The generic transfer decoder materialized those as plain receive/spend events, duplicating the ones the weth decoder creates. Reuse the existing Transfer-derived event (setting subtype, counterparty, notes and address) instead of creating a duplicate.\nAlso add live-RPC decoder tests for wrapping and unwrapping S to/from WS on Sonic.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* test: cover Beets v2 join and exit on Sonic\n\nAdd live-RPC decoder tests for a Beets v2 pool join (three tokens) and exit (four tokens) through the vault, asserting the deposit/receive and return/withdraw events carry the beets-v2 counterparty.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* fix: satisfy mypy on generalized Balancer decoders\n\nWiden the protocol parameter of query_balancer_data to str, type the cache mapping with the pool cache Literal, keep counterparties() a staticmethod in the v2/v3 common decoders (with the Sonic modules overriding it for the Beets label/icon), and checksum the Sonic archive check address.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* test: assert Beets cache mappings and counterparties\n\nCover the previously-untested contracts: the beets-v2/beets-v3 cache-type and protocol-version mappings, and the Beets label/icon surfaced by the Sonic v2/v3 decoder counterparties.\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* chore: note BalanceScanner gap in Sonic constants\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* fix: use official Sonic/Beets/WS logos and rename wson to ws\n\nReplace invented placeholder SVGs with the real brand assets:\n- beets.svg: official Beets mark from brand.beets.fi\n- sonic.svg: official Sonic logo\n- ws.svg: official Wrapped Sonic logo\nRename the wS counterparty from wson to ws (module, CPT_WS, decoder, tests).\n\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* feat: add Beets gauge balances, Beefy decoder, and Sonic token listings\n\n- Add BeetsBalances/BeetsV2Balances/BeetsV3Balances extending ProtocolWithGauges\n  to query gauge deposits via multicall balanceOf on Sonic\n- Register BeetsV2Balances and BeetsV3Balances in CHAIN_TO_BALANCE_PROTOCOLS for ChainID.SONIC\n- Add beets-v2 and beets-v3 to PROTOCOLS_WITH_BALANCES literal\n- Add Sonic Beefy zap contract (0x03C2E2e84031d913d45B1F5b5dDC8E50Fcb28652)\n- Remove unnecessary get_multi_balance override from SonicInquirer\n- Remove incorrect comment about BalanceScanner not being deployed on Sonic\n- Add 139 Sonic tokens to global.db with name/symbol/decimals queried from chain\n- Add CoinGecko mappings for 19 Sonic tokens listed on CoinGecko\n\nCloses #12911\\n\\nCo-Authored-By: Empryo <noreply@empryo.com>\n\n* fix(sonic): resolve lint errors in beets balances and node inquirer\n\nFix undefined names ChecksumEvmAddress and FVal in node_inquirer, wrap\nover-long lines in balancer balances, and remove trailing newline in\nconstants.\n\n* fix(sonic): repair beets-related test failures\n\nMove the Sonic location to its dedicated v53->v54 upgrade instead of\nappending it to v52->v53, add Sonic to the BALANCER_V2 protocol cache\nchains, exclude the BeetsBalances base class from the balance-class\nusage check, and add deferred annotations to db/updates.py to fix a\nlatent Sequence/Callable NameError on Python 3.14.\n\n* revert(beefy): drop Sonic zap address\n\nBeets has no LPs on Beefy, so the Sonic entry in SUPPORTED_BEEFY_CHAINS\nis not needed.\n\n* refactor(sonic): rename balancer module to beets\n\nRename chain/sonic/modules/balancer to beets and the decoder classes to\nBeetsv2Decoder/Beetsv3Decoder so the protocol is easier to find when\nsearching the code.\n\n* refactor(balancer): type counterparty with BalancerCounterparty literal\n\nAdd a BalancerCounterparty literal covering the balancer and beets\ncounterparties and use it for the mappings and decoder parameters,\nremoving the type: ignore in the beets balances. Also rename\nself.version to self.implementation_version and derive protocol_label\nfrom the counterparty.\n\n* fix(balancer): derive event notes from the counterparty\n\nPool join/exit and swap notes used a hardcoded 'Balancer v2/v3' label,\nso Beets events on Sonic were labeled as Balancer. Build the notes from\nprotocol_label, which is derived from the counterparty, and update the\nbeets test expectations.\n\n* refactor(balancer): use scientific notation for liquidity tolerance\n\nMove the liquidity event amount matching tolerance to a named constant\nin v3/constants.py and express it in scientific notation.\n\n* style(balancer): fix lint issues in notes and tolerance changes\n\n* docs(changelog): add Beets Sonic support entry\n\n* test(sonic): add VCR test for Beets gauge balances\n\nQuery gauge balances for an address with positions staked in both a\nBeets v2 and v3 gauge on Sonic. The gauges and pools are seeded into\nthe globaldb cache since the test environment does not query the\nremote pool listings. Also allow the beets counterparties to load the\nbalancer cache in tests.\n\n---------\n\nCo-authored-by: Empryo <noreply@empryo.com>",
          "timestamp": "2026-09-02T13:49:41Z",
          "url": "https://github.com/rotki/rotki/commit/660655051088adf36e7d1558f06ccbe986c0a4a1"
        },
        "date": 1788416884993,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 1583.07,
            "unit": "ms",
            "extra": "min 1565.33ms, stddev 1326.94ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1110.85,
            "unit": "ms",
            "extra": "min 1065.97ms, stddev 442.29ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 4.87,
            "unit": "ms",
            "extra": "min 4.79ms, stddev 0.07ms"
          },
          {
            "name": "small/asset_search",
            "value": 32.76,
            "unit": "ms",
            "extra": "min 32.53ms, stddev 0.23ms"
          },
          {
            "name": "small/manual_balances",
            "value": 1.9,
            "unit": "ms",
            "extra": "min 1.87ms, stddev 0.02ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 1.61,
            "unit": "ms",
            "extra": "min 1.59ms, stddev 0.04ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 86.11,
            "unit": "ms",
            "extra": "min 85.54ms, stddev 0.79ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 58.71,
            "unit": "ms",
            "extra": "min 58.33ms, stddev 1.6ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 1584.53,
            "unit": "ms",
            "extra": "min 1583.84ms, stddev 22.13ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1203.5,
            "unit": "ms",
            "extra": "min 1098.37ms, stddev 70.72ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 890.94,
            "unit": "ms",
            "extra": "min 885.97ms, stddev 5.53ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 887.98,
            "unit": "ms",
            "extra": "min 885.66ms, stddev 6.2ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 971.03,
            "unit": "ms",
            "extra": "min 970.12ms, stddev 5.13ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 875.23,
            "unit": "ms",
            "extra": "min 873.19ms, stddev 4.6ms"
          },
          {
            "name": "whale/asset_search",
            "value": 33.12,
            "unit": "ms",
            "extra": "min 32.24ms, stddev 0.48ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 1.87,
            "unit": "ms",
            "extra": "min 1.82ms, stddev 0.03ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 1.6,
            "unit": "ms",
            "extra": "min 1.51ms, stddev 0.04ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1334.59,
            "unit": "ms",
            "extra": "min 1327.43ms, stddev 4.68ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1692.81,
            "unit": "ms",
            "extra": "min 1488.6ms, stddev 121.92ms"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "patcito",
            "username": "patcito",
            "email": "patcito@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6552ba786bf91ae1c93d5fbfdf0e8138054445e9",
          "message": "Flying Tulip integration (#12898)\n\n* Add Flying Tulip decoders and balances\n\nDecode ftUSD mint/redeem, sftUSD staking and FT reward claims, lending\nmarket deposits/withdrawals/borrows/repayments and ftPUT invest/divest/\nwithdraw on Ethereum. Expose open lending collateral and debt plus\nclaimable staking rewards through the protocol balances interface.\n\n* Register Flying Tulip decoders and balances\n\nHook the three decoders into the shared EVM decoder, add the balance\nclasses to the Ethereum protocol-balances registry, ship the protocol\nicon and note the integration in the changelog.\n\n* Test ftUSD mint/redeem and sftUSD staking decoding\n\n* Rework lend decoding as a post-decoding rule\n\nRelayed (session) lending transactions place the wallet transfer after\nthe positions manager event and deduct the relayer fee from it in-flight,\nso decoding moved to a post-decoding rule that reconciles each event\nagainst the actual transfer and decodes the difference as a fee.\n\n* Test ftPUT invest/divest/withdraw decoding\n\n* Test Flying Tulip lend decoding and balances\n\nCover direct and session-relayed lend flows including the relayer fee\nreconciliation, and add offline balance tests for lending collateral,\ndebt and claimable staking rewards.\n\n* Deduplicate shared event topic constants\n\nPromote the Deposit(address,address,uint256) topic to the shared EVM\nconstants (velodrome previously defined it as GAUGE_DEPOSIT_V2) and reuse\nthe existing UNSTAKE_TOPIC bytes for the ftPUT Withdraw event, keeping\nthe duplicate-constants lint clean.\n\n* Use lazy formatting in decoder log call\n\n* Harden event matching and decode payout-side fees\n\nTie the staking relayer-fee split to its vault deposit and the transfer\ninto the vault, decode the fee deducted from unstake payouts and reward\nclaims by grossing the payout up from the RelayerFeePaid log, fold full-\nrepayment refunds into the lend fee split, restrict inexact matches to\nrelayed transfers through the meta-action entry points, disambiguate\nmulti-event and multi-account transactions, attribute on-behalf deposits\nto the position owner, and run the lend post-decoding rule after the\ncommon priority-0 rules so appended fee events do not preempt them.\n\n* Tighten fee pairing and ambiguity guards\n\nPair payout-side relayer fees with the nearest preceding fee log so\nmultiple payouts in one transaction each get their own fee, restrict the\nlend fee/refund inference to tokens with a single positions manager\nevent in the transaction, fold zero-fee refunds completely, note the\nbeneficiary on repayments made for another account, and drop the\nreward-claim fallback that decoded the net amount without its fee.\n\n* Bound payout fee pairing between vault actions\n\nA payout without its own RelayerFeePaid log could inherit the fee log of\nan earlier payout of the same user and token in the same transaction.\nDisqualify a fee log when another vault deposit, withdrawal or claim sits\nbetween it and the payout being decoded.\n\n* Require protocol counterparties when matching transfers\n\nTransfers are now only claimed by a protocol event when their\ncounterparty is a known protocol contract: the positions manager, the\nmeta-action entry points or the per-asset yield wrappers for lending\n(the wrappers also trigger the post-decoding rule for transactions\nrouted through unknown entry points such as a Safe), and the put\nmanager, the reported investor or the collateral wrappers for ftPUT.\nThis prevents an unrelated equal-amount transfer in the same transaction\nfrom being relabeled, and decodes investments funded through the ftPUT\ninvesting proxy, where the proxy appears as the investor and the user's\ntransfer goes to the proxy.\n\n* Constrain ftUSD matching to protocol counterparties\n\nMint/redeem legs must transfer to or from the MintAndRedeem contract or\none of its collateral wrappers, vault deposits to the vault itself, the\nunstake share burn to the zero address, unstake payouts from the vault\nor a wrapper, and reward claims from the vault. An unrelated\nequal-amount transfer in the same transaction can no longer be claimed\nby an ftUSD or staking event.\n\n* Decode circuit breaker queue and leverage fills\n\nRate-limited ftUSD payouts are queued on CircuitBreakerV2 and paid out\nin a later transaction: the request leg now decodes with a queued-payout\nnote (mint/redeem spends become protocol deposits, unstake share burns\nkeep their return label instead of half-decoding) and the later release\ndecodes as a withdrawal from the circuit breaker queue.\n\nLeverage RFQ engine fills decode into informational entries that\nattribute opens, closes and collateral swaps to Flying Tulip and seed\nbalance discovery for users whose position exists purely inside the\npositions manager. Staking reward balances are also discovered through\nreceived vault shares, put investments accept any tracked funder\n(covering proxy invests for another recipient), and unmatched protocol\nevents are logged.\n\n* Note the relayer fee of queued relayed unstakes\n\nA relayed unstake whose payout the circuit breaker queues pays the\nrelayer fee before queueing, so the fee never touches the wallet in\neither transaction of the lifecycle. Record it in the share-return note\ninstead of as a fee event, keeping the decoded events equal to the\nactual transfers.\n\n* Support the lending market on Binance Smart Chain\n\n* Decode the ftPUT position NFT as the wrapped position it is\n\nInvesting hands over collateral and gets an ERC-721 whose token id is the\nposition id, so decode the pair the way the rest of rotki decodes an NFT\nposition receipt: deposit for wrapped plus receive wrapped going in,\nreturn wrapped plus redeem wrapped coming out. The wrapped subtypes are\nonly used when the NFT leg is actually there, and the NFT is decoded even\nwhen the collateral came from a wallet nobody tracks.\n\n* Keep a deposit made for someone else on the payer's wallet\n\nAttributing the transfer to the beneficiary debited a wallet the funds\nnever left. The payer keeps it, with the position owner in the notes and\nin extra_data, and the owner gets an informational entry of their own to\nseed balance discovery. That entry is decoded from the positions manager\nlog rather than in the post-decoding rule, because a payer nobody tracks\nleaves no wallet transfer for the rule to run on.\n\nTransfers already claimed by an event are keyed by sequence index rather\nthan by the object id, which is the same identity the framework itself\nuses while decoding, before any of these events has a database id.\n\n* Ask each Flying Tulip market only about its own users\n\nEvery product shares one counterparty, so discovering positions by it\nalone sent ftPUT investors and ftUSD stakers into the lending multicalls\nand, once an ftPUT investment became a deposit for a wrapped token, put\ninvestors into the staking vault's reward query too. Both discoveries now\nfilter by the addresses of the deployment they belong to.\n\nThe contracts they call are built where they are used, so a user without\na position in a market does not carry its ABI around for the session.\n\n* Decode the relayer fee of a queued unstake as a fee\n\nA note is invisible to accounting. The relayer is paid out of the\nwithdrawal before the rest of it is queued, so that part of the payout is\nsettled in this transaction: decode it and the fee it pays, which nets to\nnothing in the wallet and leaves the expense where accounting can see it,\nthe same economics an immediate relayed payout gets from grossing its\ntransfer up. The circuit breaker still pays out the queued remainder in\nits own transaction, so nothing is counted twice.\n\n* Find lending deposits made for someone else\n\ndepositFor credits the beneficiary while the tokens leave the payer's wallet, so\na beneficiary whose payer is untracked appears only in the log topic and their\ntransaction is never imported by the per address query. With no transaction\nthere is no event, and the position stays out of the balances too.\n\nA daily scan reads the positions manager's DepositFor logs on each chain that\nhas a deployment, imports the transactions of tracked beneficiaries and maps\nthem to the beneficiary, which also flags an already imported transaction for\nre-decoding. Progress is kept per address so an account added later is\nbackfilled from the deployment block, and it stops short of the chain tip so\nblocks an indexer may not have yet are read again.\n\n* Adjustments over tulip\n\n* Some more improvements\n\n---------\n\nCo-authored-by: Yabir Benchakhtir <git@yabirgb.com>",
          "timestamp": "2026-09-03T14:28:24Z",
          "url": "https://github.com/rotki/rotki/commit/6552ba786bf91ae1c93d5fbfdf0e8138054445e9"
        },
        "date": 1788503615007,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "small/boot_to_ping",
            "value": 2108.07,
            "unit": "ms",
            "extra": "min 2084.23ms, stddev 1672.37ms"
          },
          {
            "name": "small/user_unlock",
            "value": 1380.03,
            "unit": "ms",
            "extra": "min 1373.72ms, stddev 419.06ms"
          },
          {
            "name": "small/history_events_p1",
            "value": 6.5,
            "unit": "ms",
            "extra": "min 6.43ms, stddev 0.13ms"
          },
          {
            "name": "small/asset_search",
            "value": 42.85,
            "unit": "ms",
            "extra": "min 42.33ms, stddev 0.4ms"
          },
          {
            "name": "small/manual_balances",
            "value": 2.53,
            "unit": "ms",
            "extra": "min 2.43ms, stddev 0.07ms"
          },
          {
            "name": "small/netvalue_stats",
            "value": 2.11,
            "unit": "ms",
            "extra": "min 2.07ms, stddev 0.05ms"
          },
          {
            "name": "small/blockchain_balances_eth",
            "value": 129.36,
            "unit": "ms",
            "extra": "min 127.94ms, stddev 0.94ms"
          },
          {
            "name": "small/redecode_transactions",
            "value": 86.7,
            "unit": "ms",
            "extra": "min 85.83ms, stddev 0.97ms"
          },
          {
            "name": "whale/boot_to_ping",
            "value": 2106.08,
            "unit": "ms",
            "extra": "min 2105.3ms, stddev 26.21ms"
          },
          {
            "name": "whale/user_unlock",
            "value": 1457.71,
            "unit": "ms",
            "extra": "min 1399.67ms, stddev 28.72ms"
          },
          {
            "name": "whale/history_events_p1",
            "value": 1059.74,
            "unit": "ms",
            "extra": "min 1057.63ms, stddev 2.47ms"
          },
          {
            "name": "whale/history_events_deep",
            "value": 1062.37,
            "unit": "ms",
            "extra": "min 1058.11ms, stddev 2.7ms"
          },
          {
            "name": "whale/history_events_filtered",
            "value": 1172.07,
            "unit": "ms",
            "extra": "min 1169.36ms, stddev 1.73ms"
          },
          {
            "name": "whale/history_events_by_location",
            "value": 1048.92,
            "unit": "ms",
            "extra": "min 1044.16ms, stddev 3.51ms"
          },
          {
            "name": "whale/asset_search",
            "value": 43.42,
            "unit": "ms",
            "extra": "min 42.42ms, stddev 0.79ms"
          },
          {
            "name": "whale/manual_balances",
            "value": 2.68,
            "unit": "ms",
            "extra": "min 2.4ms, stddev 0.15ms"
          },
          {
            "name": "whale/netvalue_stats",
            "value": 2.17,
            "unit": "ms",
            "extra": "min 2.05ms, stddev 0.09ms"
          },
          {
            "name": "whale/blockchain_balances_eth",
            "value": 1662.77,
            "unit": "ms",
            "extra": "min 1661.37ms, stddev 1.46ms"
          },
          {
            "name": "whale/redecode_transactions",
            "value": 1804.81,
            "unit": "ms",
            "extra": "min 1795.76ms, stddev 10.51ms"
          }
        ]
      }
    ]
  }
}