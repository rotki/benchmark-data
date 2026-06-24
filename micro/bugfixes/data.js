window.BENCHMARK_DATA = {
  "lastUpdate": 1782288269141,
  "repoUrl": "https://github.com/rotki/rotki",
  "entries": {
    "rotki backend micro benchmarks (bugfixes)": [
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
        "date": 1782288268733,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 249.39220754098164,
            "unit": "iter/sec",
            "range": "stddev: 0.007941182862009595",
            "extra": "mean: 4.0097483793100235 msec\nrounds: 232"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 179.1381170097779,
            "unit": "iter/sec",
            "range": "stddev: 0.00008621688420489057",
            "extra": "mean: 5.582284868749721 msec\nrounds: 160"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1392.1690615085238,
            "unit": "iter/sec",
            "range": "stddev: 0.00003931900618301771",
            "extra": "mean: 718.3035650256601 usec\nrounds: 1361"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2540.4700649570186,
            "unit": "iter/sec",
            "range": "stddev: 0.00026761479423261165",
            "extra": "mean: 393.62794066889296 usec\nrounds: 927"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.967996123622273,
            "unit": "iter/sec",
            "range": "stddev: 0.0032219950880260076",
            "extra": "mean: 111.50763071428368 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46287.377486103935,
            "unit": "iter/sec",
            "range": "stddev: 0.000002789776722771184",
            "extra": "mean: 21.604161961869906 usec\nrounds: 5668"
          }
        ]
      }
    ]
  }
}