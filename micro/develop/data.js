window.BENCHMARK_DATA = {
  "lastUpdate": 1781851988130,
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
      }
    ]
  }
}