window.BENCHMARK_DATA = {
  "lastUpdate": 1785647220385,
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
        "date": 1782112267417,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.99854338196496,
            "unit": "iter/sec",
            "range": "stddev: 0.006291045100101999",
            "extra": "mean: 3.7174922489451854 msec\nrounds: 237"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 180.94462424016396,
            "unit": "iter/sec",
            "range": "stddev: 0.0004142349407740925",
            "extra": "mean: 5.526552690909022 msec\nrounds: 165"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1364.8135773817041,
            "unit": "iter/sec",
            "range": "stddev: 0.000013584243802513153",
            "extra": "mean: 732.7008000011456 usec\nrounds: 1350"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2583.6877778741596,
            "unit": "iter/sec",
            "range": "stddev: 0.00023033520465286927",
            "extra": "mean: 387.04367012286326 usec\nrounds: 1061"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.001595526055805,
            "unit": "iter/sec",
            "range": "stddev: 0.0019987293236337364",
            "extra": "mean: 111.0914167499999 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46085.6783609699,
            "unit": "iter/sec",
            "range": "stddev: 0.000002967886181545733",
            "extra": "mean: 21.69871499270157 usec\nrounds: 6063"
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
        "date": 1782194107837,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 263.8874553124027,
            "unit": "iter/sec",
            "range": "stddev: 0.007930669978815265",
            "extra": "mean: 3.789494270639548 msec\nrounds: 218"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.10015431617185,
            "unit": "iter/sec",
            "range": "stddev: 0.00007298496064280957",
            "extra": "mean: 5.288202982256794 msec\nrounds: 169"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1383.58724781799,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218784041238145",
            "extra": "mean: 722.7589019608754 usec\nrounds: 1326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2704.4185180430177,
            "unit": "iter/sec",
            "range": "stddev: 0.00024751309171881943",
            "extra": "mean: 369.7652539088603 usec\nrounds: 1024"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.955934737865416,
            "unit": "iter/sec",
            "range": "stddev: 0.005108984470282328",
            "extra": "mean: 111.65780337501019 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 47184.731118003125,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030816307241610586",
            "extra": "mean: 21.193296566618653 usec\nrounds: 5358"
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
        "date": 1782280292775,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.3209335594353,
            "unit": "iter/sec",
            "range": "stddev: 0.006849696820053263",
            "extra": "mean: 3.7268802949304436 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 190.5288867995693,
            "unit": "iter/sec",
            "range": "stddev: 0.00004941505421961716",
            "extra": "mean: 5.248547959302204 msec\nrounds: 172"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1370.7987362831796,
            "unit": "iter/sec",
            "range": "stddev: 0.000017539214312479492",
            "extra": "mean: 729.5016938164291 usec\nrounds: 1326"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2604.7674566453734,
            "unit": "iter/sec",
            "range": "stddev: 0.00028034412190962635",
            "extra": "mean: 383.91143034621575 usec\nrounds: 1127"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.055270663472013,
            "unit": "iter/sec",
            "range": "stddev: 0.0025511422872800207",
            "extra": "mean: 110.43292212499978 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45741.478510031935,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024673750871214965",
            "extra": "mean: 21.86199555794162 usec\nrounds: 5403"
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
        "date": 1782288212048,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 278.73519411362025,
            "unit": "iter/sec",
            "range": "stddev: 0.006413577978689753",
            "extra": "mean: 3.5876345044263482 msec\nrounds: 226"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 192.47305266975889,
            "unit": "iter/sec",
            "range": "stddev: 0.000042188834462173185",
            "extra": "mean: 5.195532497298614 msec\nrounds: 185"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1445.0032503611817,
            "unit": "iter/sec",
            "range": "stddev: 0.000007748809729506337",
            "extra": "mean: 692.0399658270995 usec\nrounds: 1229"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3361.7997582208445,
            "unit": "iter/sec",
            "range": "stddev: 0.0001619803660186313",
            "extra": "mean: 297.4597156046043 usec\nrounds: 1083"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.006133199520574,
            "unit": "iter/sec",
            "range": "stddev: 0.000789277866479418",
            "extra": "mean: 90.85843155555848 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50866.6353660368,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016806605693859962",
            "extra": "mean: 19.659251939979722 usec\nrounds: 6315"
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
        "date": 1782366945001,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.4953644950514,
            "unit": "iter/sec",
            "range": "stddev: 0.007446627130191687",
            "extra": "mean: 3.883565057417639 msec\nrounds: 209"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.93460395204374,
            "unit": "iter/sec",
            "range": "stddev: 0.00005335873618059138",
            "extra": "mean: 5.378235028579833 msec\nrounds: 175"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1384.1385548829671,
            "unit": "iter/sec",
            "range": "stddev: 0.000013209615654785673",
            "extra": "mean: 722.4710246472058 usec\nrounds: 1339"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2264.3984389491425,
            "unit": "iter/sec",
            "range": "stddev: 0.00028376020417458277",
            "extra": "mean: 441.6183931234637 usec\nrounds: 931"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.315008144258098,
            "unit": "iter/sec",
            "range": "stddev: 0.0035670008848435754",
            "extra": "mean: 120.26446428564797 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46546.39728993532,
            "unit": "iter/sec",
            "range": "stddev: 0.000002721818807771015",
            "extra": "mean: 21.483939858353526 usec\nrounds: 7366"
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
        "date": 1782453631986,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 268.9850673772138,
            "unit": "iter/sec",
            "range": "stddev: 0.006658498176344026",
            "extra": "mean: 3.717678493273533 msec\nrounds: 223"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.35516818594914,
            "unit": "iter/sec",
            "range": "stddev: 0.0001825211322002391",
            "extra": "mean: 5.28108110055907 msec\nrounds: 179"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1445.502827946253,
            "unit": "iter/sec",
            "range": "stddev: 0.000017824567473556207",
            "extra": "mean: 691.8007911619127 usec\nrounds: 1403"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2533.588020543054,
            "unit": "iter/sec",
            "range": "stddev: 0.0002236291784159701",
            "extra": "mean: 394.6971614531309 usec\nrounds: 991"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.88244284524713,
            "unit": "iter/sec",
            "range": "stddev: 0.0013124479551637968",
            "extra": "mean: 101.1895556249982 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 49582.02726638623,
            "unit": "iter/sec",
            "range": "stddev: 0.00000170519285792219",
            "extra": "mean: 20.16859848483732 usec\nrounds: 8316"
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
        "date": 1782538817212,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 264.97249232650887,
            "unit": "iter/sec",
            "range": "stddev: 0.007602665600156597",
            "extra": "mean: 3.7739766540285364 msec\nrounds: 211"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 187.51688863262865,
            "unit": "iter/sec",
            "range": "stddev: 0.000057561231972576164",
            "extra": "mean: 5.3328529888267155 msec\nrounds: 179"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1388.15158302883,
            "unit": "iter/sec",
            "range": "stddev: 0.00003467096404912241",
            "extra": "mean: 720.3824223706781 usec\nrounds: 1198"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2523.0582057962943,
            "unit": "iter/sec",
            "range": "stddev: 0.0002632350480283586",
            "extra": "mean: 396.34440366959086 usec\nrounds: 1199"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.080786006093746,
            "unit": "iter/sec",
            "range": "stddev: 0.002170383570196092",
            "extra": "mean: 110.12262587500032 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46919.46669483488,
            "unit": "iter/sec",
            "range": "stddev: 0.00000255767515092443",
            "extra": "mean: 21.31311522579784 usec\nrounds: 7507"
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
        "date": 1782626812372,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 257.207567204286,
            "unit": "iter/sec",
            "range": "stddev: 0.00785320552583857",
            "extra": "mean: 3.8879104952839674 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 185.47772022702134,
            "unit": "iter/sec",
            "range": "stddev: 0.00005630538582957567",
            "extra": "mean: 5.391483132184384 msec\nrounds: 174"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1372.0251761496713,
            "unit": "iter/sec",
            "range": "stddev: 0.000019999115061059363",
            "extra": "mean: 728.8495993975201 usec\nrounds: 1328"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2398.432311082456,
            "unit": "iter/sec",
            "range": "stddev: 0.00031624085020193676",
            "extra": "mean: 416.9390127790105 usec\nrounds: 939"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.645611898499443,
            "unit": "iter/sec",
            "range": "stddev: 0.0014590196238614178",
            "extra": "mean: 115.66561299999633 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45921.99939667613,
            "unit": "iter/sec",
            "range": "stddev: 0.0000029783877868268372",
            "extra": "mean: 21.77605533596128 usec\nrounds: 7590"
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
        "date": 1782714507857,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 265.3392825725311,
            "unit": "iter/sec",
            "range": "stddev: 0.007585123065427332",
            "extra": "mean: 3.7687597188955535 msec\nrounds: 217"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 189.07613174751316,
            "unit": "iter/sec",
            "range": "stddev: 0.000050594978176185075",
            "extra": "mean: 5.288874860923066 msec\nrounds: 151"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1386.4199294922926,
            "unit": "iter/sec",
            "range": "stddev: 0.000012712351014888184",
            "extra": "mean: 721.2821878333791 usec\nrounds: 1315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2442.7237074647896,
            "unit": "iter/sec",
            "range": "stddev: 0.0003186939983965439",
            "extra": "mean: 409.37908652708904 usec\nrounds: 809"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.378160110485515,
            "unit": "iter/sec",
            "range": "stddev: 0.0058349795766969685",
            "extra": "mean: 119.35794814287094 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45425.78258092277,
            "unit": "iter/sec",
            "range": "stddev: 0.0000031906758823272408",
            "extra": "mean: 22.01393004553244 usec\nrounds: 7176"
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
        "date": 1782799088341,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 273.1763371397875,
            "unit": "iter/sec",
            "range": "stddev: 0.0075091060578891524",
            "extra": "mean: 3.660639169813191 msec\nrounds: 212"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 194.7583945603724,
            "unit": "iter/sec",
            "range": "stddev: 0.000049012021609191",
            "extra": "mean: 5.134566868130625 msec\nrounds: 182"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1440.3888883962518,
            "unit": "iter/sec",
            "range": "stddev: 0.000009697100865349924",
            "extra": "mean: 694.2569524494272 usec\nrounds: 1388"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2710.9031417448605,
            "unit": "iter/sec",
            "range": "stddev: 0.0002140460316504652",
            "extra": "mean: 368.88075586365454 usec\nrounds: 938"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.27783825492485,
            "unit": "iter/sec",
            "range": "stddev: 0.0008239252764281982",
            "extra": "mean: 97.29672477778371 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50230.76647199587,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015033960494195683",
            "extra": "mean: 19.908117479304433 usec\nrounds: 8061"
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
        "date": 1782886612311,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 276.6476630531363,
            "unit": "iter/sec",
            "range": "stddev: 0.0077480176135879195",
            "extra": "mean: 3.6147061173906536 msec\nrounds: 230"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 195.7376989371285,
            "unit": "iter/sec",
            "range": "stddev: 0.000039691233782594144",
            "extra": "mean: 5.108877878048433 msec\nrounds: 164"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1443.4111718504962,
            "unit": "iter/sec",
            "range": "stddev: 0.000010295498668545539",
            "extra": "mean: 692.8032839859276 usec\nrounds: 1405"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3417.068588593087,
            "unit": "iter/sec",
            "range": "stddev: 0.00017227238173857609",
            "extra": "mean: 292.6485009221694 usec\nrounds: 1084"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.5762276098733,
            "unit": "iter/sec",
            "range": "stddev: 0.00246785968496274",
            "extra": "mean: 94.55167162500011 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 51100.89331299125,
            "unit": "iter/sec",
            "range": "stddev: 0.000001338615958118143",
            "extra": "mean: 19.569129523334038 usec\nrounds: 6964"
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
        "date": 1782971102259,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 247.06013211379627,
            "unit": "iter/sec",
            "range": "stddev: 0.010373297548567655",
            "extra": "mean: 4.0475976089068 msec\nrounds: 202"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 181.31842787481324,
            "unit": "iter/sec",
            "range": "stddev: 0.0006397324725866122",
            "extra": "mean: 5.515159224138127 msec\nrounds: 174"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1463.9175091992524,
            "unit": "iter/sec",
            "range": "stddev: 0.00001780283178514204",
            "extra": "mean: 683.0985992830904 usec\nrounds: 1395"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2983.605200554994,
            "unit": "iter/sec",
            "range": "stddev: 0.00024982570837408916",
            "extra": "mean: 335.1649875841433 usec\nrounds: 886"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 10.077726734930424,
            "unit": "iter/sec",
            "range": "stddev: 0.0024985639851562505",
            "extra": "mean: 99.22872750001233 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 54753.997620355985,
            "unit": "iter/sec",
            "range": "stddev: 0.000001916449971022795",
            "extra": "mean: 18.263506656329117 usec\nrounds: 6235"
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
        "date": 1783057300461,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 375.0256996962253,
            "unit": "iter/sec",
            "range": "stddev: 0.0075993219273147875",
            "extra": "mean: 2.66648392579498 msec\nrounds: 283"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.64499217704935,
            "unit": "iter/sec",
            "range": "stddev: 0.00013399234679436453",
            "extra": "mean: 3.2295048370367905 msec\nrounds: 270"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1422.5252993411464,
            "unit": "iter/sec",
            "range": "stddev: 0.00004086184161816177",
            "extra": "mean: 702.9751952131592 usec\nrounds: 1337"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2350.5839555722755,
            "unit": "iter/sec",
            "range": "stddev: 0.00031447423365772373",
            "extra": "mean: 425.4261999999651 usec\nrounds: 1010"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.95926145869171,
            "unit": "iter/sec",
            "range": "stddev: 0.001247655333917489",
            "extra": "mean: 111.61634299999841 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46468.7045181251,
            "unit": "iter/sec",
            "range": "stddev: 0.000003319383286641415",
            "extra": "mean: 21.51985966404444 usec\nrounds: 7083"
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
        "date": 1783142659249,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 368.3856553934517,
            "unit": "iter/sec",
            "range": "stddev: 0.007370786141135773",
            "extra": "mean: 2.714546523077716 msec\nrounds: 260"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.69018888616154,
            "unit": "iter/sec",
            "range": "stddev: 0.000051934583908226174",
            "extra": "mean: 3.229033517647497 msec\nrounds: 255"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1403.7765947966784,
            "unit": "iter/sec",
            "range": "stddev: 0.00002625551747277249",
            "extra": "mean: 712.3640639875742 usec\nrounds: 1344"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2365.3123677339777,
            "unit": "iter/sec",
            "range": "stddev: 0.00031595257220501957",
            "extra": "mean: 422.77714082982726 usec\nrounds: 916"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.851082425993063,
            "unit": "iter/sec",
            "range": "stddev: 0.001278700276531751",
            "extra": "mean: 112.98053185713083 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45110.21533869873,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028733125361313543",
            "extra": "mean: 22.167927873803112 usec\nrounds: 7168"
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
        "date": 1783230689669,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 672.2294006189352,
            "unit": "iter/sec",
            "range": "stddev: 0.006144140419333638",
            "extra": "mean: 1.4875874204241586 msec\nrounds: 421"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 596.4423570197472,
            "unit": "iter/sec",
            "range": "stddev: 0.000018081607782804305",
            "extra": "mean: 1.6766079541981482 msec\nrounds: 524"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2833.55914405197,
            "unit": "iter/sec",
            "range": "stddev: 0.000006606364740036063",
            "extra": "mean: 352.913050041372 usec\nrounds: 2378"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 4028.6271636957704,
            "unit": "iter/sec",
            "range": "stddev: 0.00040341366506083803",
            "extra": "mean: 248.2235161922065 usec\nrounds: 1019"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 16.315191463367594,
            "unit": "iter/sec",
            "range": "stddev: 0.01264417867028242",
            "extra": "mean: 61.29256909091716 msec\nrounds: 11"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 108621.51061946536,
            "unit": "iter/sec",
            "range": "stddev: 8.034381621375544e-7",
            "extra": "mean: 9.206279624514782 usec\nrounds: 7578"
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
        "date": 1783318365130,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 360.77423380491683,
            "unit": "iter/sec",
            "range": "stddev: 0.008732512062753016",
            "extra": "mean: 2.771816571969313 msec\nrounds: 264"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.8414812101653,
            "unit": "iter/sec",
            "range": "stddev: 0.0000670920342623552",
            "extra": "mean: 3.227456814672599 msec\nrounds: 259"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1384.829918467264,
            "unit": "iter/sec",
            "range": "stddev: 0.00001623488287964671",
            "extra": "mean: 722.1103376411772 usec\nrounds: 1238"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2138.8386490251696,
            "unit": "iter/sec",
            "range": "stddev: 0.00030459963235603447",
            "extra": "mean: 467.5434495518283 usec\nrounds: 892"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.406042014181132,
            "unit": "iter/sec",
            "range": "stddev: 0.0014726900505672492",
            "extra": "mean: 118.96205114285456 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 43042.11076516603,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030605224736340324",
            "extra": "mean: 23.233061349056793 usec\nrounds: 6895"
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
        "date": 1783403562361,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 598.1584893022629,
            "unit": "iter/sec",
            "range": "stddev: 0.008027015633158482",
            "extra": "mean: 1.6717977223168317 msec\nrounds: 587"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 582.7702849549262,
            "unit": "iter/sec",
            "range": "stddev: 0.0001044077683249778",
            "extra": "mean: 1.7159419857471696 msec\nrounds: 421"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 2784.442492300878,
            "unit": "iter/sec",
            "range": "stddev: 0.000028152087787053066",
            "extra": "mean: 359.1383204232265 usec\nrounds: 2737"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1678.3744045680403,
            "unit": "iter/sec",
            "range": "stddev: 0.005196912070970772",
            "extra": "mean: 595.8146151885388 usec\nrounds: 1185"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 16.54929647516317,
            "unit": "iter/sec",
            "range": "stddev: 0.009259309872234915",
            "extra": "mean: 60.42552935714087 msec\nrounds: 14"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 104729.62760615797,
            "unit": "iter/sec",
            "range": "stddev: 0.0000010768111591009002",
            "extra": "mean: 9.548396407562528 usec\nrounds: 9576"
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
        "date": 1783486701753,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 386.29951235562055,
            "unit": "iter/sec",
            "range": "stddev: 0.0072800037400906166",
            "extra": "mean: 2.5886649297124085 msec\nrounds: 313"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 332.92721462004175,
            "unit": "iter/sec",
            "range": "stddev: 0.0000326013013161544",
            "extra": "mean: 3.0036595270268465 msec\nrounds: 296"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1442.9021585386763,
            "unit": "iter/sec",
            "range": "stddev: 0.000013426672984788853",
            "extra": "mean: 693.047684544853 usec\nrounds: 1417"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3459.8305415141404,
            "unit": "iter/sec",
            "range": "stddev: 0.0001642500806940122",
            "extra": "mean: 289.0314967745113 usec\nrounds: 1085"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 11.173171818066654,
            "unit": "iter/sec",
            "range": "stddev: 0.001139031928677258",
            "extra": "mean: 89.5001004444443 msec\nrounds: 9"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 50195.64869589158,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014722440737535018",
            "extra": "mean: 19.922045555352057 usec\nrounds: 9022"
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
        "date": 1783662576089,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 394.0477526488634,
            "unit": "iter/sec",
            "range": "stddev: 0.00571932286248944",
            "extra": "mean: 2.537763490028331 msec\nrounds: 351"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 259.7021733390708,
            "unit": "iter/sec",
            "range": "stddev: 0.006581568842787328",
            "extra": "mean: 3.8505646184731233 msec\nrounds: 249"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1386.318806421105,
            "unit": "iter/sec",
            "range": "stddev: 0.000012998965194777394",
            "extra": "mean: 721.3348007458555 usec\nrounds: 1340"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2398.391045458247,
            "unit": "iter/sec",
            "range": "stddev: 0.00028800543134161713",
            "extra": "mean: 416.94618644180923 usec\nrounds: 944"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.778434865384293,
            "unit": "iter/sec",
            "range": "stddev: 0.001139381519953527",
            "extra": "mean: 128.56056742857294 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45506.31549226255,
            "unit": "iter/sec",
            "range": "stddev: 0.000002621700701810088",
            "extra": "mean: 21.974971807375404 usec\nrounds: 8300"
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
        "date": 1783745633282,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 374.1436982948598,
            "unit": "iter/sec",
            "range": "stddev: 0.007872971866426954",
            "extra": "mean: 2.6727698597021607 msec\nrounds: 335"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 302.68090962710363,
            "unit": "iter/sec",
            "range": "stddev: 0.00004783765780210746",
            "extra": "mean: 3.3038092862611608 msec\nrounds: 262"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1390.6454382114157,
            "unit": "iter/sec",
            "range": "stddev: 0.000011990330484649926",
            "extra": "mean: 719.0905550203754 usec\nrounds: 1245"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2411.3809490971316,
            "unit": "iter/sec",
            "range": "stddev: 0.0002879007359512029",
            "extra": "mean: 414.70013287382886 usec\nrounds: 1016"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.771401751358754,
            "unit": "iter/sec",
            "range": "stddev: 0.0025654876166256117",
            "extra": "mean: 128.67691466666997 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45062.2167699903,
            "unit": "iter/sec",
            "range": "stddev: 0.000002958556311141446",
            "extra": "mean: 22.19154031201504 usec\nrounds: 7566"
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
        "date": 1783832745721,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 393.45307787240887,
            "unit": "iter/sec",
            "range": "stddev: 0.004564671834458179",
            "extra": "mean: 2.541599128941839 msec\nrounds: 349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 284.8941500713567,
            "unit": "iter/sec",
            "range": "stddev: 0.004997828091682178",
            "extra": "mean: 3.5100755833334327 msec\nrounds: 276"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1378.0568344993883,
            "unit": "iter/sec",
            "range": "stddev: 0.00001551455480051466",
            "extra": "mean: 725.6594756944648 usec\nrounds: 1337"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2462.6650243244308,
            "unit": "iter/sec",
            "range": "stddev: 0.00026726317017888396",
            "extra": "mean: 406.0641581874597 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.74575293644265,
            "unit": "iter/sec",
            "range": "stddev: 0.0008708478725717606",
            "extra": "mean: 129.10300757143236 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 46116.44814427807,
            "unit": "iter/sec",
            "range": "stddev: 0.0000026812765261478473",
            "extra": "mean: 21.68423719171607 usec\nrounds: 8959"
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
        "date": 1783919529931,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 405.78516316513236,
            "unit": "iter/sec",
            "range": "stddev: 0.004822012723060381",
            "extra": "mean: 2.4643582140854536 msec\nrounds: 355"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 318.8203053573273,
            "unit": "iter/sec",
            "range": "stddev: 0.000049353196639719075",
            "extra": "mean: 3.136563083330657 msec\nrounds: 12"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1378.370489430481,
            "unit": "iter/sec",
            "range": "stddev: 0.000025263547507413164",
            "extra": "mean: 725.4943483396709 usec\nrounds: 1355"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1928.4449486822093,
            "unit": "iter/sec",
            "range": "stddev: 0.0004209992417321145",
            "extra": "mean: 518.5525263157466 usec\nrounds: 1026"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.370901516171466,
            "unit": "iter/sec",
            "range": "stddev: 0.0033241565578358088",
            "extra": "mean: 135.66861499994806 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 45788.7175600576,
            "unit": "iter/sec",
            "range": "stddev: 0.0000024769696734893235",
            "extra": "mean: 21.839441095688596 usec\nrounds: 8955"
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
        "date": 1784003953784,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 382.65523697022456,
            "unit": "iter/sec",
            "range": "stddev: 0.005717982420694665",
            "extra": "mean: 2.6133184741381514 msec\nrounds: 348"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 289.9247495573673,
            "unit": "iter/sec",
            "range": "stddev: 0.0000388802261451934",
            "extra": "mean: 3.449170867705209 msec\nrounds: 257"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1387.1663419257663,
            "unit": "iter/sec",
            "range": "stddev: 0.000013078901491455576",
            "extra": "mean: 720.894077210471 usec\nrounds: 1334"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2658.9819079345393,
            "unit": "iter/sec",
            "range": "stddev: 0.00024096166362137342",
            "extra": "mean: 376.08379245302433 usec\nrounds: 1007"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.549391394963136,
            "unit": "iter/sec",
            "range": "stddev: 0.0011530351522705629",
            "extra": "mean: 116.96739028571658 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44337.6451275579,
            "unit": "iter/sec",
            "range": "stddev: 0.0000028085637888553606",
            "extra": "mean: 22.554197389668165 usec\nrounds: 8582"
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
        "date": 1784090362404,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 380.73706194514324,
            "unit": "iter/sec",
            "range": "stddev: 0.007652572740591693",
            "extra": "mean: 2.626484521604257 msec\nrounds: 324"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 311.4309547054859,
            "unit": "iter/sec",
            "range": "stddev: 0.0001564677298827747",
            "extra": "mean: 3.210984601532883 msec\nrounds: 261"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1484.315311142373,
            "unit": "iter/sec",
            "range": "stddev: 0.000015019436045520578",
            "extra": "mean: 673.7113014285155 usec\nrounds: 1400"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3055.1146552550017,
            "unit": "iter/sec",
            "range": "stddev: 0.0002354318029208987",
            "extra": "mean: 327.3199577894509 usec\nrounds: 995"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 9.889210825005078,
            "unit": "iter/sec",
            "range": "stddev: 0.002060931056802922",
            "extra": "mean: 101.12030350000012 msec\nrounds: 8"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 53894.05275348355,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018230786725091444",
            "extra": "mean: 18.55492301857672 usec\nrounds: 6599"
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
        "date": 1784177472497,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 385.20966770177563,
            "unit": "iter/sec",
            "range": "stddev: 0.006037035774507636",
            "extra": "mean: 2.5959888441174512 msec\nrounds: 340"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 306.4963091256972,
            "unit": "iter/sec",
            "range": "stddev: 0.00011452656903905696",
            "extra": "mean: 3.2626820298507737 msec\nrounds: 268"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1391.1423751055943,
            "unit": "iter/sec",
            "range": "stddev: 0.000012760706758469152",
            "extra": "mean: 718.8336851029322 usec\nrounds: 1356"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2335.4147574246463,
            "unit": "iter/sec",
            "range": "stddev: 0.00038878644751726436",
            "extra": "mean: 428.189466911967 usec\nrounds: 816"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 8.464263038049987,
            "unit": "iter/sec",
            "range": "stddev: 0.003923318954923011",
            "extra": "mean: 118.14377642857161 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 43579.22772500554,
            "unit": "iter/sec",
            "range": "stddev: 0.000002741397323474228",
            "extra": "mean: 22.94671228022256 usec\nrounds: 7622"
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
        "date": 1784264038213,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 447.3530798110778,
            "unit": "iter/sec",
            "range": "stddev: 0.0028690619705767717",
            "extra": "mean: 2.2353707733996404 msec\nrounds: 406"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 330.31068604530276,
            "unit": "iter/sec",
            "range": "stddev: 0.000024234017495878853",
            "extra": "mean: 3.027452765675428 msec\nrounds: 303"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1196.8081374016099,
            "unit": "iter/sec",
            "range": "stddev: 0.00002276530960735833",
            "extra": "mean: 835.5558161319825 usec\nrounds: 1153"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 3301.485963459245,
            "unit": "iter/sec",
            "range": "stddev: 0.00016529479472229215",
            "extra": "mean: 302.89391233764803 usec\nrounds: 1232"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 7.394602295899096,
            "unit": "iter/sec",
            "range": "stddev: 0.0020908817984759604",
            "extra": "mean: 135.23377728570753 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 44467.3524124057,
            "unit": "iter/sec",
            "range": "stddev: 0.0000015715164567030154",
            "extra": "mean: 22.488408815655404 usec\nrounds: 7600"
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
        "date": 1784349458351,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 393.81249614597573,
            "unit": "iter/sec",
            "range": "stddev: 0.003654453667865106",
            "extra": "mean: 2.5392795042982255 msec\nrounds: 349"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 308.74249814428583,
            "unit": "iter/sec",
            "range": "stddev: 0.000038466235035377615",
            "extra": "mean: 3.2389450950567427 msec\nrounds: 263"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1102.1427840671302,
            "unit": "iter/sec",
            "range": "stddev: 0.0000234763206618792",
            "extra": "mean: 907.3234561404081 usec\nrounds: 1083"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2350.4580454544007,
            "unit": "iter/sec",
            "range": "stddev: 0.0002782035103284006",
            "extra": "mean: 425.4489893720591 usec\nrounds: 1035"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.1536348348703,
            "unit": "iter/sec",
            "range": "stddev: 0.0033680277468473695",
            "extra": "mean: 162.50558033333107 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 36359.01913259055,
            "unit": "iter/sec",
            "range": "stddev: 0.000004248679011530551",
            "extra": "mean: 27.50349222439959 usec\nrounds: 7009"
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
        "date": 1784437170982,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 404.90069598179986,
            "unit": "iter/sec",
            "range": "stddev: 0.003193774068683555",
            "extra": "mean: 2.4697413709680305 msec\nrounds: 372"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 313.80145496864685,
            "unit": "iter/sec",
            "range": "stddev: 0.00044536698857868234",
            "extra": "mean: 3.186728372881235 msec\nrounds: 295"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1156.5085895648338,
            "unit": "iter/sec",
            "range": "stddev: 0.000014556874674283253",
            "extra": "mean: 864.6714853854011 usec\nrounds: 1129"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2530.028108150918,
            "unit": "iter/sec",
            "range": "stddev: 0.00025761225625457187",
            "extra": "mean: 395.25252576377676 usec\nrounds: 1048"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.4176649187573105,
            "unit": "iter/sec",
            "range": "stddev: 0.001201312886880979",
            "extra": "mean: 155.81991466666287 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37639.96542959953,
            "unit": "iter/sec",
            "range": "stddev: 0.000003973657845988163",
            "extra": "mean: 26.567505803648118 usec\nrounds: 7323"
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
        "date": 1784524733571,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 394.96788247948643,
            "unit": "iter/sec",
            "range": "stddev: 0.003619667603575743",
            "extra": "mean: 2.5318514349124004 msec\nrounds: 361"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 309.72113242383847,
            "unit": "iter/sec",
            "range": "stddev: 0.000039636595641494737",
            "extra": "mean: 3.2287109122135975 msec\nrounds: 262"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1114.9909492518639,
            "unit": "iter/sec",
            "range": "stddev: 0.000023314570668959012",
            "extra": "mean: 896.8682666625945 usec\nrounds: 1110"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2282.5877302178583,
            "unit": "iter/sec",
            "range": "stddev: 0.00033642125648370965",
            "extra": "mean: 438.0992619742841 usec\nrounds: 939"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.9224010040959705,
            "unit": "iter/sec",
            "range": "stddev: 0.0036171427848843683",
            "extra": "mean: 168.85043740003312 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 35815.72175602168,
            "unit": "iter/sec",
            "range": "stddev: 0.000004270973457853698",
            "extra": "mean: 27.92069937364505 usec\nrounds: 6686"
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
        "date": 1784610014000,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 399.09357781027416,
            "unit": "iter/sec",
            "range": "stddev: 0.0036387890487739514",
            "extra": "mean: 2.5056780053609176 msec\nrounds: 373"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 314.18382754316,
            "unit": "iter/sec",
            "range": "stddev: 0.000034532127840391594",
            "extra": "mean: 3.1828500143363625 msec\nrounds: 279"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1105.123956396021,
            "unit": "iter/sec",
            "range": "stddev: 0.00007432114625782885",
            "extra": "mean: 904.8758686411556 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2529.8119030282646,
            "unit": "iter/sec",
            "range": "stddev: 0.0002778725539920787",
            "extra": "mean: 395.28630520038604 usec\nrounds: 1019"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.197754421560402,
            "unit": "iter/sec",
            "range": "stddev: 0.00682081944509168",
            "extra": "mean: 161.34876150001296 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37495.31387521033,
            "unit": "iter/sec",
            "range": "stddev: 0.000003666213393124115",
            "extra": "mean: 26.669999438546917 usec\nrounds: 7120"
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
        "date": 1784696324433,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 344.41922916836154,
            "unit": "iter/sec",
            "range": "stddev: 0.0028600572008857014",
            "extra": "mean: 2.903438354515255 msec\nrounds: 299"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 261.7436565017258,
            "unit": "iter/sec",
            "range": "stddev: 0.00004459190274244625",
            "extra": "mean: 3.8205319409275025 msec\nrounds: 237"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 782.8292921988777,
            "unit": "iter/sec",
            "range": "stddev: 0.00013299394477900943",
            "extra": "mean: 1.2774177077496867 msec\nrounds: 787"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2288.8154484213096,
            "unit": "iter/sec",
            "range": "stddev: 0.0002907937451642039",
            "extra": "mean: 436.9072223318578 usec\nrounds: 1012"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.617062653743591,
            "unit": "iter/sec",
            "range": "stddev: 0.004026792296337639",
            "extra": "mean: 178.02899160000152 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30700.02094575058,
            "unit": "iter/sec",
            "range": "stddev: 0.000004662804945356342",
            "extra": "mean: 32.57326767845145 usec\nrounds: 6788"
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
        "date": 1784783066751,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 343.48620905286475,
            "unit": "iter/sec",
            "range": "stddev: 0.003178604645985609",
            "extra": "mean: 2.9113250361853495 msec\nrounds: 304"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 259.3974363008775,
            "unit": "iter/sec",
            "range": "stddev: 0.0000581910936367023",
            "extra": "mean: 3.8550882162154094 msec\nrounds: 222"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 830.4363555955439,
            "unit": "iter/sec",
            "range": "stddev: 0.000014102758992033118",
            "extra": "mean: 1.2041862007388324 msec\nrounds: 812"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2351.901333034439,
            "unit": "iter/sec",
            "range": "stddev: 0.0003174648677557684",
            "extra": "mean: 425.1879047620562 usec\nrounds: 945"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.670207349776177,
            "unit": "iter/sec",
            "range": "stddev: 0.0020734160360720167",
            "extra": "mean: 176.3603935999754 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30414.280195820767,
            "unit": "iter/sec",
            "range": "stddev: 0.0000030994716139134268",
            "extra": "mean: 32.879292015512185 usec\nrounds: 5736"
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
        "date": 1784869213875,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 336.94572172168455,
            "unit": "iter/sec",
            "range": "stddev: 0.0037763844260259097",
            "extra": "mean: 2.9678370596021244 msec\nrounds: 302"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 269.6597075139958,
            "unit": "iter/sec",
            "range": "stddev: 0.0000828776910647964",
            "extra": "mean: 3.708377529661521 msec\nrounds: 236"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 888.2479497497884,
            "unit": "iter/sec",
            "range": "stddev: 0.000015776844908447842",
            "extra": "mean: 1.1258117739328204 msec\nrounds: 867"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2906.3566613492576,
            "unit": "iter/sec",
            "range": "stddev: 0.00022356470482716786",
            "extra": "mean: 344.0733937780907 usec\nrounds: 1125"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.126484695109062,
            "unit": "iter/sec",
            "range": "stddev: 0.009817970432437982",
            "extra": "mean: 163.22574033333126 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37721.957349777615,
            "unit": "iter/sec",
            "range": "stddev: 0.0000018786721001973978",
            "extra": "mean: 26.509759043717686 usec\nrounds: 6275"
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
        "date": 1784955378187,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 334.86074083189993,
            "unit": "iter/sec",
            "range": "stddev: 0.0037194183601718016",
            "extra": "mean: 2.986316035482941 msec\nrounds: 310"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.5391990726678,
            "unit": "iter/sec",
            "range": "stddev: 0.000040677718095040953",
            "extra": "mean: 3.6691969573645347 msec\nrounds: 258"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 872.2764824312945,
            "unit": "iter/sec",
            "range": "stddev: 0.000011738197598829282",
            "extra": "mean: 1.1464254971230017 msec\nrounds: 869"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2987.0309396658563,
            "unit": "iter/sec",
            "range": "stddev: 0.00023014524494396264",
            "extra": "mean: 334.7805965852717 usec\nrounds: 1113"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.342907546681577,
            "unit": "iter/sec",
            "range": "stddev: 0.0031088843450354227",
            "extra": "mean: 157.65640483332768 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 36929.91264937288,
            "unit": "iter/sec",
            "range": "stddev: 0.0000019514791538477177",
            "extra": "mean: 27.078320208726012 usec\nrounds: 6705"
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
        "date": 1785042655521,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 291.82247517124273,
            "unit": "iter/sec",
            "range": "stddev: 0.0046640656921712485",
            "extra": "mean: 3.426740861591265 msec\nrounds: 289"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 247.3815243590196,
            "unit": "iter/sec",
            "range": "stddev: 0.0002743592034596889",
            "extra": "mean: 4.042339065502406 msec\nrounds: 229"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 778.8164337276648,
            "unit": "iter/sec",
            "range": "stddev: 0.000037167613690440965",
            "extra": "mean: 1.2839996136363994 msec\nrounds: 748"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2181.533204475105,
            "unit": "iter/sec",
            "range": "stddev: 0.0003947341739675523",
            "extra": "mean: 458.3932061857423 usec\nrounds: 873"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 4.946941504687333,
            "unit": "iter/sec",
            "range": "stddev: 0.007122109068177066",
            "extra": "mean: 202.14510300000086 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 29504.721249431037,
            "unit": "iter/sec",
            "range": "stddev: 0.000003693297018619707",
            "extra": "mean: 33.892880788334296 usec\nrounds: 6241"
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
        "date": 1785129840463,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 482.8928318966375,
            "unit": "iter/sec",
            "range": "stddev: 0.0028660570993747398",
            "extra": "mean: 2.070852855844521 msec\nrounds: 437"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 372.4088736968235,
            "unit": "iter/sec",
            "range": "stddev: 0.00011967137634697203",
            "extra": "mean: 2.6852206556552027 msec\nrounds: 363"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1200.958923470327,
            "unit": "iter/sec",
            "range": "stddev: 0.000021495375084675132",
            "extra": "mean: 832.6679459696841 usec\nrounds: 1166"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 846.3001143831561,
            "unit": "iter/sec",
            "range": "stddev: 0.008059983019349211",
            "extra": "mean: 1.1816139251367954 msec\nrounds: 935"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 2.5431709784106395,
            "unit": "iter/sec",
            "range": "stddev: 0.20985185248739144",
            "extra": "mean: 393.2098975999452 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 51797.92735258191,
            "unit": "iter/sec",
            "range": "stddev: 0.0000016032931901493656",
            "extra": "mean: 19.305791777982293 usec\nrounds: 7007"
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
        "date": 1785214516349,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 317.9093295900729,
            "unit": "iter/sec",
            "range": "stddev: 0.003862623403327349",
            "extra": "mean: 3.145550969798359 msec\nrounds: 298"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 268.88226371987474,
            "unit": "iter/sec",
            "range": "stddev: 0.00002765073953698181",
            "extra": "mean: 3.7190998995821234 msec\nrounds: 239"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 865.5889195637334,
            "unit": "iter/sec",
            "range": "stddev: 0.000018886810042882372",
            "extra": "mean: 1.1552828108104842 msec\nrounds: 851"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2750.866274871478,
            "unit": "iter/sec",
            "range": "stddev: 0.00025217099666044327",
            "extra": "mean: 363.5218509655547 usec\nrounds: 1087"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 6.186994515780981,
            "unit": "iter/sec",
            "range": "stddev: 0.002866019749445637",
            "extra": "mean: 161.62936583333476 msec\nrounds: 6"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 37306.98936279317,
            "unit": "iter/sec",
            "range": "stddev: 0.00000242434415084609",
            "extra": "mean: 26.804628759385107 usec\nrounds: 6085"
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
        "date": 1785301199075,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 408.7093289494905,
            "unit": "iter/sec",
            "range": "stddev: 0.004066131229531185",
            "extra": "mean: 2.4467266322750927 msec\nrounds: 378"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 346.03847949935323,
            "unit": "iter/sec",
            "range": "stddev: 0.000023505741465617206",
            "extra": "mean: 2.8898520229507283 msec\nrounds: 305"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1086.8433174543015,
            "unit": "iter/sec",
            "range": "stddev: 0.00004588056016152357",
            "extra": "mean: 920.0958260867689 usec\nrounds: 1081"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1576.897514432428,
            "unit": "iter/sec",
            "range": "stddev: 0.0027484928049828087",
            "extra": "mean: 634.156621370495 usec\nrounds: 861"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 3.9859617647302854,
            "unit": "iter/sec",
            "range": "stddev: 0.1724899588953333",
            "extra": "mean: 250.88047980000283 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 48177.93050425163,
            "unit": "iter/sec",
            "range": "stddev: 0.0000014598602702906444",
            "extra": "mean: 20.756391765556465 usec\nrounds: 7165"
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
        "date": 1785386844128,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 534.965127732182,
            "unit": "iter/sec",
            "range": "stddev: 0.003339513985316253",
            "extra": "mean: 1.8692807216036462 msec\nrounds: 449"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 427.995642830611,
            "unit": "iter/sec",
            "range": "stddev: 0.0001409348497207084",
            "extra": "mean: 2.336472384126052 msec\nrounds: 315"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 1465.1797059091657,
            "unit": "iter/sec",
            "range": "stddev: 0.00003099630001164261",
            "extra": "mean: 682.5101357648721 usec\nrounds: 1289"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 255.48980954854835,
            "unit": "iter/sec",
            "range": "stddev: 0.021016103471858998",
            "extra": "mean: 3.914050434211073 msec\nrounds: 228"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 1.4290501921748697,
            "unit": "iter/sec",
            "range": "stddev: 0.3712173398588001",
            "extra": "mean: 699.7654844285778 msec\nrounds: 7"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 60006.81517842581,
            "unit": "iter/sec",
            "range": "stddev: 0.0000017702533115183884",
            "extra": "mean: 16.664773776554785 usec\nrounds: 8275"
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
        "date": 1785474799881,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 314.71536369956124,
            "unit": "iter/sec",
            "range": "stddev: 0.00439778061075499",
            "extra": "mean: 3.177474363643195 msec\nrounds: 143"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 277.0553435567382,
            "unit": "iter/sec",
            "range": "stddev: 0.000044062581370986284",
            "extra": "mean: 3.609387161288264 msec\nrounds: 248"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 818.0165525588005,
            "unit": "iter/sec",
            "range": "stddev: 0.000018694756415113635",
            "extra": "mean: 1.2224691503759249 msec\nrounds: 798"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1384.625633057,
            "unit": "iter/sec",
            "range": "stddev: 0.0004676857935061769",
            "extra": "mean: 722.2168766240322 usec\nrounds: 770"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.2360340039949,
            "unit": "iter/sec",
            "range": "stddev: 0.007588588174062037",
            "extra": "mean: 190.98424479998357 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30708.791336215265,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034424092667025874",
            "extra": "mean: 32.56396479599272 usec\nrounds: 6988"
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
        "date": 1785560658562,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 312.2301160934441,
            "unit": "iter/sec",
            "range": "stddev: 0.004339290425934985",
            "extra": "mean: 3.2027659999995657 msec\nrounds: 145"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 273.9219607629108,
            "unit": "iter/sec",
            "range": "stddev: 0.00003758292243693598",
            "extra": "mean: 3.650674802468779 msec\nrounds: 243"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 795.1411180364657,
            "unit": "iter/sec",
            "range": "stddev: 0.000016374330743718508",
            "extra": "mean: 1.257638395646569 msec\nrounds: 781"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 1154.3607789383354,
            "unit": "iter/sec",
            "range": "stddev: 0.0005007295401267244",
            "extra": "mean: 866.2802983653854 usec\nrounds: 734"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.057765979345022,
            "unit": "iter/sec",
            "range": "stddev: 0.001620350734805623",
            "extra": "mean: 197.7157511999991 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30115.091667158405,
            "unit": "iter/sec",
            "range": "stddev: 0.0000034905300763428977",
            "extra": "mean: 33.20594242422765 usec\nrounds: 6930"
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
        "date": 1785647219803,
        "tool": "pytest",
        "benches": [
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_db_serialization",
            "value": 298.9434588607079,
            "unit": "iter/sec",
            "range": "stddev: 0.005030809882768368",
            "extra": "mean: 3.345114169117673 msec\nrounds: 136"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_history_event_api_serialization",
            "value": 272.4935061220501,
            "unit": "iter/sec",
            "range": "stddev: 0.00004795745628334827",
            "extra": "mean: 3.6698122250006904 msec\nrounds: 240"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_fval_arithmetic",
            "value": 792.2845410456868,
            "unit": "iter/sec",
            "range": "stddev: 0.00002463481047004929",
            "extra": "mean: 1.2621728030691632 msec\nrounds: 782"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_redecode_delete_customized_lookup",
            "value": 2394.3000892122595,
            "unit": "iter/sec",
            "range": "stddev: 0.0002797277618307078",
            "extra": "mean: 417.65859029350264 usec\nrounds: 886"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_transaction_decoding[ethereum_accounts0]",
            "value": 5.695713379454723,
            "unit": "iter/sec",
            "range": "stddev: 0.003502930815761945",
            "extra": "mean: 175.57063239999877 msec\nrounds: 5"
          },
          {
            "name": "rotkehlchen/tests/benchmarks/test_hot_paths.py::test_events_filter_query_construction",
            "value": 30302.4062629752,
            "unit": "iter/sec",
            "range": "stddev: 0.0000036865881020705064",
            "extra": "mean: 33.0006795936151 usec\nrounds: 6498"
          }
        ]
      }
    ]
  }
}