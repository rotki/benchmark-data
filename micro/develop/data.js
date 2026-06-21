window.BENCHMARK_DATA = {
  "lastUpdate": 1782023945462,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend micro benchmarks (develop)": [
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
        "date": 1781678911400,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 259.69942569240607,
            "unit": "iter/sec",
            "range": "stddev: 0.007635929902947351",
            "extra": "mean: 3.850605357843274 msec\nrounds: 204"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 186.64193766985315,
            "unit": "iter/sec",
            "range": "stddev: 0.000060572136980119436",
            "extra": "mean: 5.357852648148554 msec\nrounds: 162"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1368.9087357598203,
            "unit": "iter/sec",
            "range": "stddev: 0.000016309758624376774",
            "extra": "mean: 730.5088892174718 usec\nrounds: 1354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48670.40167781132,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024439218349607584",
            "extra": "mean: 20.546368337368722 usec\nrounds: 8199"
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
        "date": 1781764321474,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.5428259966744,
            "unit": "iter/sec",
            "range": "stddev: 0.007320313953069169",
            "extra": "mean: 3.88284937128442 msec\nrounds: 202"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 179.58107204064308,
            "unit": "iter/sec",
            "range": "stddev: 0.0009248688337081953",
            "extra": "mean: 5.568515593746308 msec\nrounds: 96"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1393.9508835372558,
            "unit": "iter/sec",
            "range": "stddev: 0.000012898422935544443",
            "extra": "mean: 717.3853912717674 usec\nrounds: 1329"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50599.87120216049,
            "unit": "iter/sec",
            "range": "stddev: 0.0000025045132048661432",
            "extra": "mean: 19.762896154512394 usec\nrounds: 8426"
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
        "date": 1781851987911,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 294.06332940700753,
            "unit": "iter/sec",
            "range": "stddev: 0.0006104033214577717",
            "extra": "mean: 3.400628028039222 msec\nrounds: 214"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 168.87336271163542,
            "unit": "iter/sec",
            "range": "stddev: 0.00804831482597474",
            "extra": "mean: 5.921597011765431 msec\nrounds: 170"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1401.2993561760927,
            "unit": "iter/sec",
            "range": "stddev: 0.0000109155035469282",
            "extra": "mean: 713.6233921699854 usec\nrounds: 1354"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2414.620973121698,
            "unit": "iter/sec",
            "range": "stddev: 0.0002753132399975516",
            "extra": "mean: 414.143673533643 usec\nrounds: 971"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.717631000213773,
            "unit": "iter/sec",
            "range": "stddev: 0.002190416576549605",
            "extra": "mean: 114.71006285715443 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45293.19934559405,
            "unit": "iter/sec",
            "range": "stddev: 0.000002597404353921609",
            "extra": "mean: 22.078369698944137 usec\nrounds: 5564"
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
        "date": 1781935618007,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 335.4839619890008,
            "unit": "iter/sec",
            "range": "stddev: 0.0064585620090166105",
            "extra": "mean: 2.9807684220469115 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 244.7094006493342,
            "unit": "iter/sec",
            "range": "stddev: 0.000034105346960786754",
            "extra": "mean: 4.0864797075490715 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1894.9351753733672,
            "unit": "iter/sec",
            "range": "stddev: 0.000013719412604963646",
            "extra": "mean: 527.7225379506535 usec\nrounds: 1805"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1714.8702610911184,
            "unit": "iter/sec",
            "range": "stddev: 0.003244673180775144",
            "extra": "mean: 583.1344928471331 usec\nrounds: 1049"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.67287293071617,
            "unit": "iter/sec",
            "range": "stddev: 0.016809291722342946",
            "extra": "mean: 103.38190185715186 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 70510.76875862402,
            "unit": "iter/sec",
            "range": "stddev: 0.000001169661626695846",
            "extra": "mean: 14.182230850769049 usec\nrounds: 5614"
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
        "date": 1782023945327,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 261.08065428827246,
            "unit": "iter/sec",
            "range": "stddev: 0.007528843744452919",
            "extra": "mean: 3.8302340046070555 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.96787007873894,
            "unit": "iter/sec",
            "range": "stddev: 0.00005779705867030652",
            "extra": "mean: 5.377272964284633 msec\nrounds: 168"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1381.196912598009,
            "unit": "iter/sec",
            "range": "stddev: 0.000014223076240616936",
            "extra": "mean: 724.0097272727147 usec\nrounds: 1320"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2437.246416674312,
            "unit": "iter/sec",
            "range": "stddev: 0.0003250586705840221",
            "extra": "mean: 410.29909538836324 usec\nrounds: 954"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.658869222162847,
            "unit": "iter/sec",
            "range": "stddev: 0.001750687492179865",
            "extra": "mean: 115.48852099999911 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46668.89088291606,
            "unit": "iter/sec",
            "range": "stddev: 0.0000032481505011131217",
            "extra": "mean: 21.42755015345923 usec\nrounds: 5533"
          }
        ]
      }
    ]
  }
}